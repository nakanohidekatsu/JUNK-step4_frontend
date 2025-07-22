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

  // レスポンスから Contact[] を取り出すユーティリティ
  const extractContacts = (data: any): Contact[] => {
    if (Array.isArray(data)) return data;
    if (Array.isArray(data.data)) return data.data;
    // 必要に応じて他のキーもチェック
    console.warn('Unexpected search response shape', data);
    return [];
  };

  // 検索実行
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

  // ページ変更時の再検索
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

  // 詳細取得
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
      {/* ... 以下は変わらず ... */}
    </Layout>
  );
};

export default SearchPage;