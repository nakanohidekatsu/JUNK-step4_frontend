/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/auth */ \"./utils/auth.ts\");\n\n\n\n\n\nfunction App({ Component, pageProps }) {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        // 認証が必要なページの場合、ログイン状態をチェック\n        const publicPages = [\n            \"/login\"\n        ];\n        const isPublicPage = publicPages.includes(router.pathname);\n        if (!isPublicPage && !(0,_utils_auth__WEBPACK_IMPORTED_MODULE_4__.isAuthenticated)()) {\n            router.push(\"/login\");\n        }\n    }, [\n        router\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n        ...pageProps\n    }, void 0, false, {\n        fileName: \"/Users/nakano/VS Code/tech0_junk/frontend/pages/_app.tsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUE2QjtBQUVJO0FBQ007QUFDTztBQUUvQixTQUFTRyxJQUFJLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFZO0lBQzVELE1BQU1DLFNBQVNMLHNEQUFTQTtJQUV4QkQsZ0RBQVNBLENBQUM7UUFDUiwyQkFBMkI7UUFDM0IsTUFBTU8sY0FBYztZQUFDO1NBQVM7UUFDOUIsTUFBTUMsZUFBZUQsWUFBWUUsUUFBUSxDQUFDSCxPQUFPSSxRQUFRO1FBRXpELElBQUksQ0FBQ0YsZ0JBQWdCLENBQUNOLDREQUFlQSxJQUFJO1lBQ3ZDSSxPQUFPSyxJQUFJLENBQUM7UUFDZDtJQUNGLEdBQUc7UUFBQ0w7S0FBTztJQUVYLHFCQUNFLDhEQUFDRjtRQUFXLEdBQUdDLFNBQVM7Ozs7OztBQUU1QiIsInNvdXJjZXMiOlsid2VicGFjazovL21lZXRpbmctYXBwLWZyb250ZW5kLy4vcGFnZXMvX2FwcC50c3g/MmZiZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ0Avc3R5bGVzL2dsb2JhbHMuY3NzJ1xuaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJ1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCB7IGlzQXV0aGVudGljYXRlZCB9IGZyb20gJ0AvdXRpbHMvYXV0aCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyDoqo3oqLzjgYzlv4XopoHjgarjg5rjg7zjgrjjga7loLTlkIjjgIHjg63jgrDjgqTjg7PnirbmhYvjgpLjg4Hjgqfjg4Pjgq9cbiAgICBjb25zdCBwdWJsaWNQYWdlcyA9IFsnL2xvZ2luJ107XG4gICAgY29uc3QgaXNQdWJsaWNQYWdlID0gcHVibGljUGFnZXMuaW5jbHVkZXMocm91dGVyLnBhdGhuYW1lKTtcbiAgICBcbiAgICBpZiAoIWlzUHVibGljUGFnZSAmJiAhaXNBdXRoZW50aWNhdGVkKCkpIHtcbiAgICAgIHJvdXRlci5wdXNoKCcvbG9naW4nKTtcbiAgICB9XG4gIH0sIFtyb3V0ZXJdKTtcblxuICByZXR1cm4gKFxuICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgKVxufSJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VSb3V0ZXIiLCJpc0F1dGhlbnRpY2F0ZWQiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJyb3V0ZXIiLCJwdWJsaWNQYWdlcyIsImlzUHVibGljUGFnZSIsImluY2x1ZGVzIiwicGF0aG5hbWUiLCJwdXNoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./utils/auth.ts":
/*!***********************!*\
  !*** ./utils/auth.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getToken: () => (/* binding */ getToken),\n/* harmony export */   getUser: () => (/* binding */ getUser),\n/* harmony export */   isAuthenticated: () => (/* binding */ isAuthenticated),\n/* harmony export */   logout: () => (/* binding */ logout),\n/* harmony export */   removeToken: () => (/* binding */ removeToken),\n/* harmony export */   removeUser: () => (/* binding */ removeUser),\n/* harmony export */   setToken: () => (/* binding */ setToken),\n/* harmony export */   setUser: () => (/* binding */ setUser)\n/* harmony export */ });\n// ローカルストレージからトークンを取得\nconst getToken = ()=>{\n    if (false) {}\n    return null;\n};\n// ローカルストレージにトークンを保存\nconst setToken = (token)=>{\n    if (false) {}\n};\n// ローカルストレージからトークンを削除\nconst removeToken = ()=>{\n    if (false) {}\n};\n// ローカルストレージからユーザー情報を取得\nconst getUser = ()=>{\n    if (false) {}\n    return null;\n};\n// ローカルストレージにユーザー情報を保存\nconst setUser = (user)=>{\n    if (false) {}\n};\n// ローカルストレージからユーザー情報を削除\nconst removeUser = ()=>{\n    if (false) {}\n};\n// ログイン状態の確認\nconst isAuthenticated = ()=>{\n    return !!getToken();\n};\n// ログアウト処理\nconst logout = ()=>{\n    removeToken();\n    removeUser();\n    if (false) {}\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9hdXRoLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBRUEscUJBQXFCO0FBQ2QsTUFBTUEsV0FBVztJQUN0QixJQUFJLEtBQWtCLEVBQWEsRUFFbEM7SUFDRCxPQUFPO0FBQ1QsRUFBRTtBQUVGLG9CQUFvQjtBQUNiLE1BQU1HLFdBQVcsQ0FBQ0M7SUFDdkIsSUFBSSxLQUFrQixFQUFhLEVBRWxDO0FBQ0gsRUFBRTtBQUVGLHFCQUFxQjtBQUNkLE1BQU1FLGNBQWM7SUFDekIsSUFBSSxLQUFrQixFQUFhLEVBRWxDO0FBQ0gsRUFBRTtBQUVGLHVCQUF1QjtBQUNoQixNQUFNRSxVQUFVO0lBQ3JCLElBQUksS0FBa0IsRUFBYSxFQUdsQztJQUNELE9BQU87QUFDVCxFQUFFO0FBRUYsc0JBQXNCO0FBQ2YsTUFBTUksVUFBVSxDQUFDQztJQUN0QixJQUFJLEtBQWtCLEVBQWEsRUFFbEM7QUFDSCxFQUFFO0FBRUYsdUJBQXVCO0FBQ2hCLE1BQU1FLGFBQWE7SUFDeEIsSUFBSSxLQUFrQixFQUFhLEVBRWxDO0FBQ0gsRUFBRTtBQUVGLFlBQVk7QUFDTCxNQUFNQyxrQkFBa0I7SUFDN0IsT0FBTyxDQUFDLENBQUNoQjtBQUNYLEVBQUU7QUFFRixVQUFVO0FBQ0gsTUFBTWlCLFNBQVM7SUFDcEJYO0lBQ0FTO0lBQ0EsSUFBSSxLQUFrQixFQUFhLEVBRWxDO0FBQ0gsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL21lZXRpbmctYXBwLWZyb250ZW5kLy4vdXRpbHMvYXV0aC50cz9iMzhhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvd29ya2VyIH0gZnJvbSAnQC90eXBlcyc7XG5cbi8vIOODreODvOOCq+ODq+OCueODiOODrOODvOOCuOOBi+OCieODiOODvOOCr+ODs+OCkuWPluW+l1xuZXhwb3J0IGNvbnN0IGdldFRva2VuID0gKCk6IHN0cmluZyB8IG51bGwgPT4ge1xuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FjY2Vzc190b2tlbicpO1xuICB9XG4gIHJldHVybiBudWxsO1xufTtcblxuLy8g44Ot44O844Kr44Or44K544OI44Os44O844K444Gr44OI44O844Kv44Oz44KS5L+d5a2YXG5leHBvcnQgY29uc3Qgc2V0VG9rZW4gPSAodG9rZW46IHN0cmluZyk6IHZvaWQgPT4ge1xuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYWNjZXNzX3Rva2VuJywgdG9rZW4pO1xuICB9XG59O1xuXG4vLyDjg63jg7zjgqvjg6vjgrnjg4jjg6zjg7zjgrjjgYvjgonjg4jjg7zjgq/jg7PjgpLliYrpmaRcbmV4cG9ydCBjb25zdCByZW1vdmVUb2tlbiA9ICgpOiB2b2lkID0+IHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2FjY2Vzc190b2tlbicpO1xuICB9XG59O1xuXG4vLyDjg63jg7zjgqvjg6vjgrnjg4jjg6zjg7zjgrjjgYvjgonjg6bjg7zjgrbjg7zmg4XloLHjgpLlj5blvpdcbmV4cG9ydCBjb25zdCBnZXRVc2VyID0gKCk6IENvd29ya2VyIHwgbnVsbCA9PiB7XG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNvbnN0IHVzZXJTdHJpbmcgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpO1xuICAgIHJldHVybiB1c2VyU3RyaW5nID8gSlNPTi5wYXJzZSh1c2VyU3RyaW5nKSA6IG51bGw7XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59O1xuXG4vLyDjg63jg7zjgqvjg6vjgrnjg4jjg6zjg7zjgrjjgavjg6bjg7zjgrbjg7zmg4XloLHjgpLkv53lrZhcbmV4cG9ydCBjb25zdCBzZXRVc2VyID0gKHVzZXI6IENvd29ya2VyKTogdm9pZCA9PiB7XG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VyJywgSlNPTi5zdHJpbmdpZnkodXNlcikpO1xuICB9XG59O1xuXG4vLyDjg63jg7zjgqvjg6vjgrnjg4jjg6zjg7zjgrjjgYvjgonjg6bjg7zjgrbjg7zmg4XloLHjgpLliYrpmaRcbmV4cG9ydCBjb25zdCByZW1vdmVVc2VyID0gKCk6IHZvaWQgPT4ge1xuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndXNlcicpO1xuICB9XG59O1xuXG4vLyDjg63jgrDjgqTjg7PnirbmhYvjga7norroqo1cbmV4cG9ydCBjb25zdCBpc0F1dGhlbnRpY2F0ZWQgPSAoKTogYm9vbGVhbiA9PiB7XG4gIHJldHVybiAhIWdldFRva2VuKCk7XG59O1xuXG4vLyDjg63jgrDjgqLjgqbjg4jlh6bnkIZcbmV4cG9ydCBjb25zdCBsb2dvdXQgPSAoKTogdm9pZCA9PiB7XG4gIHJlbW92ZVRva2VuKCk7XG4gIHJlbW92ZVVzZXIoKTtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL2xvZ2luJztcbiAgfVxufTsiXSwibmFtZXMiOlsiZ2V0VG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwic2V0VG9rZW4iLCJ0b2tlbiIsInNldEl0ZW0iLCJyZW1vdmVUb2tlbiIsInJlbW92ZUl0ZW0iLCJnZXRVc2VyIiwidXNlclN0cmluZyIsIkpTT04iLCJwYXJzZSIsInNldFVzZXIiLCJ1c2VyIiwic3RyaW5naWZ5IiwicmVtb3ZlVXNlciIsImlzQXV0aGVudGljYXRlZCIsImxvZ291dCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utils/auth.ts\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("./pages/_app.tsx")));
module.exports = __webpack_exports__;

})();