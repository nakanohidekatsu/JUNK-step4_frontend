// pages/search.tsx
import React, { useState, useEffect } from 'react';
import Layout from '@/components/Layout';
import { contactAPI } from '@/utils/api';
import { Contact } from '@/types';

const SearchPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const perPage = 10;

  const extractContacts = (data: any): Contact[] => {
    if (Array.isArray(data)) return data;
    if (Array.isArray(data.data)) return data.data;
    console.warn('Unexpected search response shape', data);
    return [];
  };

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    setLoading(true);
    setHasSearched(true);
    setCurrentPage(1);
    try {
      const response = await contactAPI.search(searchQuery, 1, perPage);
      const contacts = extractContacts(response.data);
      setResults(contacts);
      setTotalPages(contacts.length === perPage ? 2 : 1);
    } catch (error) {
      console.error('Failed to search contacts:', error);
      setResults([]);
      setTotalPages(1);
    } finally {
      setLoading(false);
    }
  };

  const performSearch = async () => {
    if (!searchQuery.trim()) return;

    setLoading(true);
    try {
      const response = await contactAPI.search(searchQuery, currentPage, perPage);
      const contacts = extractContacts(response.data);
      setResults(contacts);
      setTotalPages(contacts.length === perPage ? currentPage + 1 : currentPage);
    } catch (error) {
      console.error('Failed to search contacts:', error);
      setResults([]);
      setTotalPages(currentPage);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (hasSearched && searchQuery.trim() && currentPage > 1) {
      performSearch();
    }
  }, [searchQuery, hasSearched, currentPage]);

  const handleView = async (contactId: number) => {
    try {
      const response = await contactAPI.get(contactId);
      setSelectedContact(response.data);
    } catch (error) {
      console.error('Failed to fetch contact details:', error);
      alert('面談記録の取得に失敗しました');
    }
  };

  const formatDate = (dateString?: string) =>
    dateString ? new Date(dateString).toLocaleDateString('ja-JP') : '日付未設定';

  return (
    <Layout>
      <div className="max-w-6xl mx-auto">
        {/* 検索フォーム */}
        <div className="card mb-8">
          <form onSubmit={handleSearch}>
            <div className="space-y-4">
              <div>
                <label htmlFor="searchQuery" className="block text-sm font-medium text-gray-700 mb-2">
                  検索ワード
                </label>
                <input
                  id="searchQuery"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="input-field"
                  placeholder="担当者名またはタイトルを入力..."
                  required
                />
              </div>
              <div>
                <button
                  type="submit"
                  disabled={loading || !searchQuery.trim()}
                  className="primary-button disabled:opacity-50"
                >
                  {loading ? '検索中...' : '検索'}
                </button>
              </div>
            </div>
          </form>
        </div>

        {/* 検索結果 */}
        {hasSearched && (
          <>
            {loading ? (
              <div className="flex items-center justify-center py-12">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-500"></div>
                <span className="ml-3 text-gray-600">検索中...</span>
              </div>
            ) : results.length === 0 ? (
              <div className="card p-8 text-center">
                <div className="text-gray-500 mb-4">
                  <span className="text-4xl">🔍</span>
                </div>
                <h3 className="text-lg font-medium text-gray-700 mb-2">検索結果がありません</h3>
                <p className="text-gray-500">別のキーワードで検索してみてください</p>
              </div>
            ) : (
              <>
                <div className="mb-4">
                  <p className="text-sm text-gray-600">{results.length}件の結果が見つかりました</p>
                </div>
                <div className="card overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-primary-50">
                        <tr>
                          <th className="px-4 py-2">作成者</th>
                          <th className="px-4 py-2">面談日</th>
                          <th className="px-4 py-2">タイトル</th>
                          <th className="px-4 py-2">操作</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {results.map(contact => (
                          <tr key={contact.id} className="hover:bg-gray-50">
                            <td className="px-4 py-2">
                              {contact.persons?.[0]?.name || '不明'}
                            </td>
                            <td className="px-4 py-2">{formatDate(contact.contact_date)}</td>
                            <td className="px-4 py-2">{contact.title || '(未設定)'}</td>
                            <td className="px-4 py-2">
                              <button
                                onClick={() => handleView(contact.id)}
                                className="secondary-button text-xs px-3 py-1"
                              >
                                参照
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                {/* ページネーション */}
                {totalPages > 1 && (
                  <div className="flex justify-center space-x-4 mt-8">
                    <button
                      onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                      disabled={currentPage === 1}
                      className="px-4 py-2 rounded border"
                    >
                      前へ
                    </button>
                    <span className="text-sm text-gray-600">
                      {currentPage}/{totalPages}
                    </span>
                    <button
                      onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                      disabled={currentPage === totalPages}
                      className="px-4 py-2 rounded border"
                    >
                      次へ
                    </button>
                  </div>
                )}
              </>
            )}
          </>
        )}

        {/* 詳細モーダル */}
        {selectedContact && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-soft max-w-4xl w-full mx-4 max-h-[80vh] flex flex-col overflow-hidden">
              <div className="p-6 border-b flex justify-between items-center">
                <h2 className="text-xl font-semibold text-primary-700">面談記録詳細</h2>
                <button onClick={() => setSelectedContact(null)} className="text-2xl">×</button>
              </div>
              <div className="p-6 overflow-y-auto space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium">日時</label>
                    <p>{formatDate(selectedContact.contact_date)}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium">場所</label>
                    <p>{selectedContact.location || '未設定'}</p>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium">タイトル</label>
                  <p>{selectedContact.title || '未設定'}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium">担当者</label>
                  <div>
                    {selectedContact.persons?.map(p => (
                      <p key={p.id}>{p.name} ({p.company})</p>
                    ))}
                  </div>
                </div>
                {selectedContact.companions?.length > 0 && (
                  <div>
                    <label className="block text-sm font-medium">同席</label>
                    <div>
                      {selectedContact.companions.map(c => <p key={c.id}>{c.name}</p>)}
                    </div>
                  </div>
                )}
                {selectedContact.summary_text && (
                  <div>
                    <label className="block text-sm font-medium">要約</label>
                    <p className="whitespace-pre-wrap">{selectedContact.summary_text}</p>
                  </div>
                )}
              </div>
              <div className="p-6 border-t">
                <button onClick={() => setSelectedContact(null)} className="secondary-button">
                  閉じる
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default SearchPage;