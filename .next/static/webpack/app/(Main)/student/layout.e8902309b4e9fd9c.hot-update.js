"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(Main)/student/layout",{

/***/ "(app-pages-browser)/./app/(Main)/student/sidebar/page.jsx":
/*!*********************************************!*\
  !*** ./app/(Main)/student/sidebar/page.jsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ StudentSideBar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"(app-pages-browser)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction StudentSideBar() {\n    var _session_user, _session_user1;\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { data: session } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession)();\n    const navigate = (name)=>{\n        router.push(\"/student\" + name);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \" bg-transparent fixed left-2 shadow-lg shadow-indigo-500/40  w-[15vw] mt-[2vh] h-[87vh] flex flex-col gap-2 p-2 border rounded-xl\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"ml-6\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-xs font-medium text-gray-400\",\n                    children: session === null || session === void 0 ? void 0 : (_session_user = session.user) === null || _session_user === void 0 ? void 0 : _session_user.name\n                }, void 0, false, {\n                    fileName: \"D:\\\\SIH EduNexus\\\\app\\\\(Main)\\\\student\\\\sidebar\\\\page.jsx\",\n                    lineNumber: 13,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-xs font-medium text-gray-400\",\n                    children: session === null || session === void 0 ? void 0 : (_session_user1 = session.user) === null || _session_user1 === void 0 ? void 0 : _session_user1.email\n                }, void 0, false, {\n                    fileName: \"D:\\\\SIH EduNexus\\\\app\\\\(Main)\\\\student\\\\sidebar\\\\page.jsx\",\n                    lineNumber: 14,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mt-4 py-1.5 text-sm font-medium text-slate-500 hover:text-blue-500 group cursor-pointer flex items-center\",\n                    onClick: ()=>navigate(\"/dashboard\"),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                            xmlns: \"http://www.w3.org/2000/svg\",\n                            className: \"h-5 stroke-slate-400 mr-4 group-hover:stroke-blue-500\",\n                            fill: \"none\",\n                            viewBox: \"0 0 24 24\",\n                            stroke: \"currentColor\",\n                            strokeWidth: \"2\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                strokeLinecap: \"round\",\n                                strokeLinejoin: \"round\",\n                                d: \"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\SIH EduNexus\\\\app\\\\(Main)\\\\student\\\\sidebar\\\\page.jsx\",\n                                lineNumber: 28,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\SIH EduNexus\\\\app\\\\(Main)\\\\student\\\\sidebar\\\\page.jsx\",\n                            lineNumber: 20,\n                            columnNumber: 11\n                        }, this),\n                        \"Dashboard\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\SIH EduNexus\\\\app\\\\(Main)\\\\student\\\\sidebar\\\\page.jsx\",\n                    lineNumber: 16,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mt-4 py-1.5 text-sm font-medium text-slate-500 hover:text-blue-500 group cursor-pointer flex items-center\",\n                    onClick: ()=>navigate(\"/addproject\"),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                            xmlns: \"http://www.w3.org/2000/svg\",\n                            className: \"h-5 stroke-slate-400 mr-4 group-hover:stroke-blue-500\",\n                            fill: \"none\",\n                            viewBox: \"0 0 24 24\",\n                            stroke: \"currentColor\",\n                            strokeWidth: \"2\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                strokeLinecap: \"round\",\n                                strokeLinejoin: \"round\",\n                                d: \"M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\SIH EduNexus\\\\app\\\\(Main)\\\\student\\\\sidebar\\\\page.jsx\",\n                                lineNumber: 49,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\SIH EduNexus\\\\app\\\\(Main)\\\\student\\\\sidebar\\\\page.jsx\",\n                            lineNumber: 41,\n                            columnNumber: 11\n                        }, this),\n                        \"Add Project\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\SIH EduNexus\\\\app\\\\(Main)\\\\student\\\\sidebar\\\\page.jsx\",\n                    lineNumber: 37,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mt-4 py-1.5 text-sm font-medium text-slate-500 hover:text-blue-500 group cursor-pointer flex items-center\",\n                    onClick: ()=>navigate(\"/community\"),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                            xmlns: \"http://www.w3.org/2000/svg\",\n                            fill: \"none\",\n                            viewBox: \"0 0 24 24\",\n                            strokeWidth: 1.5,\n                            stroke: \"currentColor\",\n                            className: \"w-6 h-6 mr-4\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                strokeLinecap: \"round\",\n                                strokeLinejoin: \"round\",\n                                d: \"M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\SIH EduNexus\\\\app\\\\(Main)\\\\student\\\\sidebar\\\\page.jsx\",\n                                lineNumber: 69,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\SIH EduNexus\\\\app\\\\(Main)\\\\student\\\\sidebar\\\\page.jsx\",\n                            lineNumber: 61,\n                            columnNumber: 11\n                        }, this),\n                        \"Community\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\SIH EduNexus\\\\app\\\\(Main)\\\\student\\\\sidebar\\\\page.jsx\",\n                    lineNumber: 57,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mt-4 py-1.5 text-sm font-medium text-slate-500 hover:text-blue-500 group cursor-pointer flex items-center\",\n                    onClick: ()=>navigate(\"/feedback\"),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                            xmlns: \"http://www.w3.org/2000/svg\",\n                            fill: \"none\",\n                            viewBox: \"0 0 24 24\",\n                            strokeWidth: 1.5,\n                            stroke: \"currentColor\",\n                            className: \"w-6 h-6  mr-4\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                strokeLinecap: \"round\",\n                                strokeLinejoin: \"round\",\n                                d: \"M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\SIH EduNexus\\\\app\\\\(Main)\\\\student\\\\sidebar\\\\page.jsx\",\n                                lineNumber: 90,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\SIH EduNexus\\\\app\\\\(Main)\\\\student\\\\sidebar\\\\page.jsx\",\n                            lineNumber: 82,\n                            columnNumber: 11\n                        }, this),\n                        \"Feedback\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\SIH EduNexus\\\\app\\\\(Main)\\\\student\\\\sidebar\\\\page.jsx\",\n                    lineNumber: 78,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mb-2 py-1.5 text-sm font-medium text-slate-500 hover:text-blue-500 group cursor-pointer flex items-center\",\n                    onClick: ()=>{\n                        signOut();\n                        router.replace(\"/\");\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                            className: \"w-6 h-6  mr-4\",\n                            xmlns: \"http://www.w3.org/2000/svg\",\n                            fill: \"none\",\n                            viewBox: \"0 0 24 24\",\n                            strokeWidth: 1.5,\n                            stroke: \"currentColor\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                strokeLinecap: \"round\",\n                                strokeLinejoin: \"round\",\n                                d: \"M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\SIH EduNexus\\\\app\\\\(Main)\\\\student\\\\sidebar\\\\page.jsx\",\n                                lineNumber: 107,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\SIH EduNexus\\\\app\\\\(Main)\\\\student\\\\sidebar\\\\page.jsx\",\n                            lineNumber: 103,\n                            columnNumber: 11\n                        }, this),\n                        \"Logout\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\SIH EduNexus\\\\app\\\\(Main)\\\\student\\\\sidebar\\\\page.jsx\",\n                    lineNumber: 98,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\SIH EduNexus\\\\app\\\\(Main)\\\\student\\\\sidebar\\\\page.jsx\",\n            lineNumber: 12,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\SIH EduNexus\\\\app\\\\(Main)\\\\student\\\\sidebar\\\\page.jsx\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, this);\n}\n_s(StudentSideBar, \"pZYTleGwCoLp4YPidiydDoRoLys=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession\n    ];\n});\n_c = StudentSideBar;\nvar _c;\n$RefreshReg$(_c, \"StudentSideBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC8oTWFpbikvc3R1ZGVudC9zaWRlYmFyL3BhZ2UuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQzZDO0FBQ0Q7QUFDN0IsU0FBU0U7UUFTZ0NDLGVBQ0VBOztJQVR4RCxNQUFNQyxTQUFTSCwwREFBU0E7SUFDeEIsTUFBTSxFQUFFSSxNQUFNRixPQUFPLEVBQUUsR0FBR0gsMkRBQVVBO0lBQ3BDLE1BQU1NLFdBQVcsQ0FBQ0M7UUFDaEJILE9BQU9JLElBQUksQ0FBQyxhQUFhRDtJQUMzQjtJQUNBLHFCQUNFLDhEQUFDRTtRQUFJQyxXQUFVO2tCQUNiLDRFQUFDRDtZQUFJQyxXQUFVOzs4QkFDZiw4REFBQ0M7b0JBQUVELFdBQVU7OEJBQXFDUCxvQkFBQUEsK0JBQUFBLGdCQUFBQSxRQUFTUyxJQUFJLGNBQWJULG9DQUFBQSxjQUFlSSxJQUFJOzs7Ozs7OEJBQ25FLDhEQUFDSTtvQkFBRUQsV0FBVTs4QkFBcUNQLG9CQUFBQSwrQkFBQUEsaUJBQUFBLFFBQVNTLElBQUksY0FBYlQscUNBQUFBLGVBQWVVLEtBQUs7Ozs7Ozs4QkFFdEUsOERBQUNKO29CQUNDQyxXQUFVO29CQUNWSSxTQUFTLElBQU1SLFNBQVM7O3NDQUV4Qiw4REFBQ1M7NEJBQ0NDLE9BQU07NEJBQ05OLFdBQVU7NEJBQ1ZPLE1BQUs7NEJBQ0xDLFNBQVE7NEJBQ1JDLFFBQU87NEJBQ1BDLGFBQVk7c0NBRVosNEVBQUNDO2dDQUNDQyxlQUFjO2dDQUNkQyxnQkFBZTtnQ0FDZkMsR0FBRTs7Ozs7Ozs7Ozs7d0JBRUE7Ozs7Ozs7OEJBSVIsOERBQUNmO29CQUNDQyxXQUFVO29CQUNWSSxTQUFTLElBQU1SLFNBQVM7O3NDQUV4Qiw4REFBQ1M7NEJBQ0NDLE9BQU07NEJBQ05OLFdBQVU7NEJBQ1ZPLE1BQUs7NEJBQ0xDLFNBQVE7NEJBQ1JDLFFBQU87NEJBQ1BDLGFBQVk7c0NBRVosNEVBQUNDO2dDQUNDQyxlQUFjO2dDQUNkQyxnQkFBZTtnQ0FDZkMsR0FBRTs7Ozs7Ozs7Ozs7d0JBRUE7Ozs7Ozs7OEJBR1IsOERBQUNmO29CQUNDQyxXQUFVO29CQUNWSSxTQUFTLElBQU1SLFNBQVM7O3NDQUV4Qiw4REFBQ1M7NEJBQ0NDLE9BQU07NEJBQ05DLE1BQUs7NEJBQ0xDLFNBQVE7NEJBQ1JFLGFBQWE7NEJBQ2JELFFBQU87NEJBQ1BULFdBQVU7c0NBRVYsNEVBQUNXO2dDQUNDQyxlQUFjO2dDQUNkQyxnQkFBZTtnQ0FDZkMsR0FBRTs7Ozs7Ozs7Ozs7d0JBRUE7Ozs7Ozs7OEJBSVIsOERBQUNmO29CQUNDQyxXQUFVO29CQUNWSSxTQUFTLElBQU1SLFNBQVM7O3NDQUV4Qiw4REFBQ1M7NEJBQ0NDLE9BQU07NEJBQ05DLE1BQUs7NEJBQ0xDLFNBQVE7NEJBQ1JFLGFBQWE7NEJBQ2JELFFBQU87NEJBQ1BULFdBQVU7c0NBRVYsNEVBQUNXO2dDQUNDQyxlQUFjO2dDQUNkQyxnQkFBZTtnQ0FDZkMsR0FBRTs7Ozs7Ozs7Ozs7d0JBRUE7Ozs7Ozs7OEJBR1IsOERBQUNmO29CQUNDQyxXQUFVO29CQUNWSSxTQUFTO3dCQUFPVzt3QkFDZHJCLE9BQU9zQixPQUFPLENBQUM7b0JBQUk7O3NDQUVyQiw4REFBQ1g7NEJBQ0FMLFdBQVU7NEJBQ1ZNLE9BQU07NEJBQTZCQyxNQUFLOzRCQUFPQyxTQUFROzRCQUFZRSxhQUFhOzRCQUNoRkQsUUFBTztzQ0FDTiw0RUFBQ0U7Z0NBQUtDLGVBQWM7Z0NBQVFDLGdCQUFlO2dDQUFRQyxHQUFFOzs7Ozs7Ozs7Ozt3QkFDakQ7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1oQjtHQTlHd0J0Qjs7UUFDUEQsc0RBQVNBO1FBQ0VELHVEQUFVQTs7O0tBRmRFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC8oTWFpbikvc3R1ZGVudC9zaWRlYmFyL3BhZ2UuanN4PzlmODUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcbmltcG9ydCB7IHVzZVNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoL3JlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3R1ZGVudFNpZGVCYXIoKSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgeyBkYXRhOiBzZXNzaW9uIH0gPSB1c2VTZXNzaW9uKCk7XHJcbiAgY29uc3QgbmF2aWdhdGUgPSAobmFtZSkgPT4ge1xyXG4gICAgcm91dGVyLnB1c2goXCIvc3R1ZGVudFwiICsgbmFtZSk7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCIgYmctdHJhbnNwYXJlbnQgZml4ZWQgbGVmdC0yIHNoYWRvdy1sZyBzaGFkb3ctaW5kaWdvLTUwMC80MCAgdy1bMTV2d10gbXQtWzJ2aF0gaC1bODd2aF0gZmxleCBmbGV4LWNvbCBnYXAtMiBwLTIgYm9yZGVyIHJvdW5kZWQteGxcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtbC02XCI+XHJcbiAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1tZWRpdW0gdGV4dC1ncmF5LTQwMFwiPntzZXNzaW9uPy51c2VyPy5uYW1lfTwvcD5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtbWVkaXVtIHRleHQtZ3JheS00MDBcIj57c2Vzc2lvbj8udXNlcj8uZW1haWx9PC9wPlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTQgcHktMS41IHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1zbGF0ZS01MDAgaG92ZXI6dGV4dC1ibHVlLTUwMCBncm91cCBjdXJzb3ItcG9pbnRlciBmbGV4IGl0ZW1zLWNlbnRlclwiXHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBuYXZpZ2F0ZShcIi9kYXNoYm9hcmRcIil9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC01IHN0cm9rZS1zbGF0ZS00MDAgbXItNCBncm91cC1ob3ZlcjpzdHJva2UtYmx1ZS01MDBcIlxyXG4gICAgICAgICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxyXG4gICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICBzdHJva2VXaWR0aD1cIjJcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXHJcbiAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXHJcbiAgICAgICAgICAgICAgZD1cIk0zIDEybDItMm0wIDBsNy03IDcgN001IDEwdjEwYTEgMSAwIDAwMSAxaDNtMTAtMTFsMiAybS0yLTJ2MTBhMSAxIDAgMDEtMSAxaC0zbS02IDBhMSAxIDAgMDAxLTF2LTRhMSAxIDAgMDExLTFoMmExIDEgMCAwMTEgMXY0YTEgMSAwIDAwMSAxbS02IDBoNlwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgIERhc2hib2FyZFxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJtdC00IHB5LTEuNSB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtc2xhdGUtNTAwIGhvdmVyOnRleHQtYmx1ZS01MDAgZ3JvdXAgY3Vyc29yLXBvaW50ZXIgZmxleCBpdGVtcy1jZW50ZXJcIlxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gbmF2aWdhdGUoXCIvYWRkcHJvamVjdFwiKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJoLTUgc3Ryb2tlLXNsYXRlLTQwMCBtci00IGdyb3VwLWhvdmVyOnN0cm9rZS1ibHVlLTUwMFwiXHJcbiAgICAgICAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXHJcbiAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMlwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcclxuICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcclxuICAgICAgICAgICAgICBkPVwiTTE5IDExSDVtMTQgMGEyIDIgMCAwMTIgMnY2YTIgMiAwIDAxLTIgMkg1YTIgMiAwIDAxLTItMnYtNmEyIDIgMCAwMTItMm0xNCAwVjlhMiAyIDAgMDAtMi0yTTUgMTFWOWEyIDIgMCAwMTItMm0wIDBWNWEyIDIgMCAwMTItMmg2YTIgMiAwIDAxMiAydjJNNyA3aDEwXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgQWRkIFByb2plY3RcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJtdC00IHB5LTEuNSB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtc2xhdGUtNTAwIGhvdmVyOnRleHQtYmx1ZS01MDAgZ3JvdXAgY3Vyc29yLXBvaW50ZXIgZmxleCBpdGVtcy1jZW50ZXJcIlxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gbmF2aWdhdGUoXCIvY29tbXVuaXR5XCIpfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXHJcbiAgICAgICAgICAgIHN0cm9rZVdpZHRoPXsxLjV9XHJcbiAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctNiBoLTYgbXItNFwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcclxuICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcclxuICAgICAgICAgICAgICBkPVwiTTE4IDE4LjcyYTkuMDk0IDkuMDk0IDAgMDAzLjc0MS0uNDc5IDMgMyAwIDAwLTQuNjgyLTIuNzJtLjk0IDMuMTk4bC4wMDEuMDMxYzAgLjIyNS0uMDEyLjQ0Ny0uMDM3LjY2NkExMS45NDQgMTEuOTQ0IDAgMDExMiAyMWMtMi4xNyAwLTQuMjA3LS41NzYtNS45NjMtMS41ODRBNi4wNjIgNi4wNjIgMCAwMTYgMTguNzE5bTEyIDBhNS45NzEgNS45NzEgMCAwMC0uOTQxLTMuMTk3bTAgMEE1Ljk5NSA1Ljk5NSAwIDAwMTIgMTIuNzVhNS45OTUgNS45OTUgMCAwMC01LjA1OCAyLjc3Mm0wIDBhMyAzIDAgMDAtNC42ODEgMi43MiA4Ljk4NiA4Ljk4NiAwIDAwMy43NC40NzdtLjk0LTMuMTk3YTUuOTcxIDUuOTcxIDAgMDAtLjk0IDMuMTk3TTE1IDYuNzVhMyAzIDAgMTEtNiAwIDMgMyAwIDAxNiAwem02IDNhMi4yNSAyLjI1IDAgMTEtNC41IDAgMi4yNSAyLjI1IDAgMDE0LjUgMHptLTEzLjUgMGEyLjI1IDIuMjUgMCAxMS00LjUgMCAyLjI1IDIuMjUgMCAwMTQuNSAwelwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgIENvbW11bml0eVxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJtdC00IHB5LTEuNSB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtc2xhdGUtNTAwIGhvdmVyOnRleHQtYmx1ZS01MDAgZ3JvdXAgY3Vyc29yLXBvaW50ZXIgZmxleCBpdGVtcy1jZW50ZXJcIlxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gbmF2aWdhdGUoXCIvZmVlZGJhY2tcIil9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcclxuICAgICAgICAgICAgc3Ryb2tlV2lkdGg9ezEuNX1cclxuICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy02IGgtNiAgbXItNFwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcclxuICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcclxuICAgICAgICAgICAgICBkPVwiTTcuNSA4LjI1aDltLTkgM0gxMm0tOS43NSAxLjUxYzAgMS42IDEuMTIzIDIuOTk0IDIuNzA3IDMuMjI3IDEuMTI5LjE2NiAyLjI3LjI5MyAzLjQyMy4zNzkuMzUuMDI2LjY3LjIxLjg2NS41MDFMMTIgMjFsMi43NTUtNC4xMzNhMS4xNCAxLjE0IDAgMDEuODY1LS41MDEgNDguMTcyIDQ4LjE3MiAwIDAwMy40MjMtLjM3OWMxLjU4NC0uMjMzIDIuNzA3LTEuNjI2IDIuNzA3LTMuMjI4VjYuNzQxYzAtMS42MDItMS4xMjMtMi45OTUtMi43MDctMy4yMjhBNDguMzk0IDQ4LjM5NCAwIDAwMTIgM2MtMi4zOTIgMC00Ljc0NC4xNzUtNy4wNDMuNTEzQzMuMzczIDMuNzQ2IDIuMjUgNS4xNCAyLjI1IDYuNzQxdjYuMDE4elwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgIEZlZWRiYWNrXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwibWItMiBweS0xLjUgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LXNsYXRlLTUwMCBob3Zlcjp0ZXh0LWJsdWUtNTAwIGdyb3VwIGN1cnNvci1wb2ludGVyIGZsZXggaXRlbXMtY2VudGVyXCJcclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtzaWduT3V0KClcclxuICAgICAgICAgICAgcm91dGVyLnJlcGxhY2UoXCIvXCIpfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgY2xhc3NOYW1lPVwidy02IGgtNiAgbXItNFwiIFxyXG4gICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBmaWxsPVwibm9uZVwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBzdHJva2VXaWR0aD17MS41fSBcclxuICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIj5cclxuICAgICAgICAgICAgPHBhdGggc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiIGQ9XCJNMTUuNzUgOVY1LjI1QTIuMjUgMi4yNSAwIDAwMTMuNSAzaC02YTIuMjUgMi4yNSAwIDAwLTIuMjUgMi4yNXYxMy41QTIuMjUgMi4yNSAwIDAwNy41IDIxaDZhMi4yNSAyLjI1IDAgMDAyLjI1LTIuMjVWMTVNMTIgOWwtMyAzbTAgMGwzIDNtLTMtM2gxMi43NVwiIC8+XHJcbiAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgIExvZ291dFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZVNlc3Npb24iLCJ1c2VSb3V0ZXIiLCJTdHVkZW50U2lkZUJhciIsInNlc3Npb24iLCJyb3V0ZXIiLCJkYXRhIiwibmF2aWdhdGUiLCJuYW1lIiwicHVzaCIsImRpdiIsImNsYXNzTmFtZSIsInAiLCJ1c2VyIiwiZW1haWwiLCJvbkNsaWNrIiwic3ZnIiwieG1sbnMiLCJmaWxsIiwidmlld0JveCIsInN0cm9rZSIsInN0cm9rZVdpZHRoIiwicGF0aCIsInN0cm9rZUxpbmVjYXAiLCJzdHJva2VMaW5lam9pbiIsImQiLCJzaWduT3V0IiwicmVwbGFjZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/(Main)/student/sidebar/page.jsx\n"));

/***/ })

});