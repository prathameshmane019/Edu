"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(Main)/college/layout",{

/***/ "(app-pages-browser)/./app/(Main)/college/sidebar/page.jsx":
/*!*********************************************!*\
  !*** ./app/(Main)/college/sidebar/page.jsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CollegeSideBar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"(app-pages-browser)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction CollegeSideBar() {\n    var _session_user, _session_user1;\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const { data: session } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)();\n    const navigate = (name)=>{\n        router.push(\"/college/\" + name);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \" bg-transparent fixed left-2 shadow-lg shadow-indigo-500/40  w-[15vw] mt-[2vh] h-[87vh] flex flex-col gap-2 p-2 border rounded-xl\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"ml-6\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-xs font-medium text-gray-400\",\n                    children: session === null || session === void 0 ? void 0 : (_session_user = session.user) === null || _session_user === void 0 ? void 0 : _session_user.name\n                }, void 0, false, {\n                    fileName: \"D:\\\\SIH EduNexus\\\\app\\\\(Main)\\\\college\\\\sidebar\\\\page.jsx\",\n                    lineNumber: 14,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-xs font-medium text-gray-400\",\n                    children: session === null || session === void 0 ? void 0 : (_session_user1 = session.user) === null || _session_user1 === void 0 ? void 0 : _session_user1.email\n                }, void 0, false, {\n                    fileName: \"D:\\\\SIH EduNexus\\\\app\\\\(Main)\\\\college\\\\sidebar\\\\page.jsx\",\n                    lineNumber: 15,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mt-4 py-1.5 text-sm font-medium text-slate-500 hover:text-blue-500 group cursor-pointer flex items-center\",\n                    onClick: ()=>navigate(\"dashboard\"),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                            xmlns: \"http://www.w3.org/2000/svg\",\n                            className: \"h-5 stroke-slate-400 mr-4 group-hover:stroke-blue-500\",\n                            fill: \"none\",\n                            viewBox: \"0 0 24 24\",\n                            stroke: \"currentColor\",\n                            strokeWidth: \"2\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                strokeLinecap: \"round\",\n                                strokeLinejoin: \"round\",\n                                d: \"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\SIH EduNexus\\\\app\\\\(Main)\\\\college\\\\sidebar\\\\page.jsx\",\n                                lineNumber: 28,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\SIH EduNexus\\\\app\\\\(Main)\\\\college\\\\sidebar\\\\page.jsx\",\n                            lineNumber: 20,\n                            columnNumber: 11\n                        }, this),\n                        \"Dashboard\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\SIH EduNexus\\\\app\\\\(Main)\\\\college\\\\sidebar\\\\page.jsx\",\n                    lineNumber: 16,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mt-4 py-1.5 text-sm font-medium text-slate-500 hover:text-blue-500 group cursor-pointer flex items-center\",\n                    onClick: ()=>navigate(\"projects\"),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                            xmlns: \"http://www.w3.org/2000/svg\",\n                            className: \"h-5 stroke-slate-400 mr-4 group-hover:stroke-blue-500\",\n                            fill: \"none\",\n                            viewBox: \"0 0 24 24\",\n                            stroke: \"currentColor\",\n                            strokeWidth: \"2\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                strokeLinecap: \"round\",\n                                strokeLinejoin: \"round\",\n                                d: \"M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\SIH EduNexus\\\\app\\\\(Main)\\\\college\\\\sidebar\\\\page.jsx\",\n                                lineNumber: 49,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\SIH EduNexus\\\\app\\\\(Main)\\\\college\\\\sidebar\\\\page.jsx\",\n                            lineNumber: 41,\n                            columnNumber: 11\n                        }, this),\n                        \"Projects Gallery\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\SIH EduNexus\\\\app\\\\(Main)\\\\college\\\\sidebar\\\\page.jsx\",\n                    lineNumber: 37,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mt-4 py-1.5 text-sm font-medium text-slate-500 hover:text-blue-500 group cursor-pointer flex items-center\",\n                    onClick: ()=>navigate(\"addproject\"),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                            xmlns: \"http://www.w3.org/2000/svg\",\n                            className: \"h-5 stroke-slate-400 mr-4 group-hover:stroke-blue-500\",\n                            fill: \"none\",\n                            viewBox: \"0 0 24 24\",\n                            stroke: \"currentColor\",\n                            strokeWidth: \"2\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                strokeLinecap: \"round\",\n                                strokeLinejoin: \"round\",\n                                d: \"M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\SIH EduNexus\\\\app\\\\(Main)\\\\college\\\\sidebar\\\\page.jsx\",\n                                lineNumber: 70,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\SIH EduNexus\\\\app\\\\(Main)\\\\college\\\\sidebar\\\\page.jsx\",\n                            lineNumber: 62,\n                            columnNumber: 11\n                        }, this),\n                        \"Add Project\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\SIH EduNexus\\\\app\\\\(Main)\\\\college\\\\sidebar\\\\page.jsx\",\n                    lineNumber: 58,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mb-4 py-1.5 text-sm font-medium text-slate-500 hover:text-blue-500 group cursor-pointer flex items-center\",\n                    onClick: ()=>navigate(\"community\"),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                            xmlns: \"http://www.w3.org/2000/svg\",\n                            fill: \"none\",\n                            viewBox: \"0 0 24 24\",\n                            strokeWidth: 1.5,\n                            stroke: \"currentColor\",\n                            className: \"w-6 h-6\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                strokeLinecap: \"round\",\n                                strokeLinejoin: \"round\",\n                                d: \"M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\SIH EduNexus\\\\app\\\\(Main)\\\\college\\\\sidebar\\\\page.jsx\",\n                                lineNumber: 83,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\SIH EduNexus\\\\app\\\\(Main)\\\\college\\\\sidebar\\\\page.jsx\",\n                            lineNumber: 82,\n                            columnNumber: 11\n                        }, this),\n                        \"Logout\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\SIH EduNexus\\\\app\\\\(Main)\\\\college\\\\sidebar\\\\page.jsx\",\n                    lineNumber: 78,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\SIH EduNexus\\\\app\\\\(Main)\\\\college\\\\sidebar\\\\page.jsx\",\n            lineNumber: 13,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\SIH EduNexus\\\\app\\\\(Main)\\\\college\\\\sidebar\\\\page.jsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, this);\n}\n_s(CollegeSideBar, \"pZYTleGwCoLp4YPidiydDoRoLys=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter,\n        next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession\n    ];\n});\n_c = CollegeSideBar;\nvar _c;\n$RefreshReg$(_c, \"CollegeSideBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC8oTWFpbikvY29sbGVnZS9zaWRlYmFyL3BhZ2UuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQzRDO0FBQ0M7QUFDOUIsU0FBU0U7UUFVa0NDLGVBQ0FBOztJQVZ4RCxNQUFNQyxTQUFTSiwwREFBU0E7SUFDeEIsTUFBTSxFQUFFSyxNQUFNRixPQUFPLEVBQUUsR0FBR0YsMkRBQVVBO0lBRXBDLE1BQU1LLFdBQVcsQ0FBQ0M7UUFDaEJILE9BQU9JLElBQUksQ0FBQyxjQUFjRDtJQUM1QjtJQUNBLHFCQUNFLDhEQUFDRTtRQUFJQyxXQUFVO2tCQUNiLDRFQUFDRDtZQUFJQyxXQUFVOzs4QkFDYiw4REFBQ0M7b0JBQUVELFdBQVU7OEJBQXFDUCxvQkFBQUEsK0JBQUFBLGdCQUFBQSxRQUFTUyxJQUFJLGNBQWJULG9DQUFBQSxjQUFlSSxJQUFJOzs7Ozs7OEJBQ3JFLDhEQUFDSTtvQkFBRUQsV0FBVTs4QkFBcUNQLG9CQUFBQSwrQkFBQUEsaUJBQUFBLFFBQVNTLElBQUksY0FBYlQscUNBQUFBLGVBQWVVLEtBQUs7Ozs7Ozs4QkFDdEUsOERBQUNKO29CQUNDQyxXQUFVO29CQUNWSSxTQUFTLElBQU1SLFNBQVM7O3NDQUV4Qiw4REFBQ1M7NEJBQ0NDLE9BQU07NEJBQ05OLFdBQVU7NEJBQ1ZPLE1BQUs7NEJBQ0xDLFNBQVE7NEJBQ1JDLFFBQU87NEJBQ1BDLGFBQVk7c0NBRVosNEVBQUNDO2dDQUNDQyxlQUFjO2dDQUNkQyxnQkFBZTtnQ0FDZkMsR0FBRTs7Ozs7Ozs7Ozs7d0JBRUE7Ozs7Ozs7OEJBSVIsOERBQUNmO29CQUNDQyxXQUFVO29CQUNWSSxTQUFTLElBQU1SLFNBQVM7O3NDQUV4Qiw4REFBQ1M7NEJBQ0NDLE9BQU07NEJBQ05OLFdBQVU7NEJBQ1ZPLE1BQUs7NEJBQ0xDLFNBQVE7NEJBQ1JDLFFBQU87NEJBQ1BDLGFBQVk7c0NBRVosNEVBQUNDO2dDQUNDQyxlQUFjO2dDQUNkQyxnQkFBZTtnQ0FDZkMsR0FBRTs7Ozs7Ozs7Ozs7d0JBRUE7Ozs7Ozs7OEJBSVIsOERBQUNmO29CQUNDQyxXQUFVO29CQUNWSSxTQUFTLElBQU1SLFNBQVM7O3NDQUV4Qiw4REFBQ1M7NEJBQ0NDLE9BQU07NEJBQ05OLFdBQVU7NEJBQ1ZPLE1BQUs7NEJBQ0xDLFNBQVE7NEJBQ1JDLFFBQU87NEJBQ1BDLGFBQVk7c0NBRVosNEVBQUNDO2dDQUNDQyxlQUFjO2dDQUNkQyxnQkFBZTtnQ0FDZkMsR0FBRTs7Ozs7Ozs7Ozs7d0JBRUE7Ozs7Ozs7OEJBR1IsOERBQUNmO29CQUNDQyxXQUFVO29CQUNWSSxTQUFTLElBQU1SLFNBQVM7O3NDQUV4Qiw4REFBQ1M7NEJBQUlDLE9BQU07NEJBQTZCQyxNQUFLOzRCQUFPQyxTQUFROzRCQUFZRSxhQUFhOzRCQUFLRCxRQUFPOzRCQUFlVCxXQUFVO3NDQUN4SCw0RUFBQ1c7Z0NBQUtDLGVBQWM7Z0NBQVFDLGdCQUFlO2dDQUFRQyxHQUFFOzs7Ozs7Ozs7Ozt3QkFDakQ7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVVoQjtHQTFGd0J0Qjs7UUFDUEYsc0RBQVNBO1FBQ0VDLHVEQUFVQTs7O0tBRmRDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC8oTWFpbikvY29sbGVnZS9zaWRlYmFyL3BhZ2UuanN4PzE0MDQiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcclxuaW1wb3J0IHsgdXNlU2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIjtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29sbGVnZVNpZGVCYXIoKSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgeyBkYXRhOiBzZXNzaW9uIH0gPSB1c2VTZXNzaW9uKCk7XHJcblxyXG4gIGNvbnN0IG5hdmlnYXRlID0gKG5hbWUpID0+IHtcclxuICAgIHJvdXRlci5wdXNoKFwiL2NvbGxlZ2UvXCIgKyBuYW1lKTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIiBiZy10cmFuc3BhcmVudCBmaXhlZCBsZWZ0LTIgc2hhZG93LWxnIHNoYWRvdy1pbmRpZ28tNTAwLzQwICB3LVsxNXZ3XSBtdC1bMnZoXSBoLVs4N3ZoXSBmbGV4IGZsZXgtY29sIGdhcC0yIHAtMiBib3JkZXIgcm91bmRlZC14bFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1sLTZcIj5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtbWVkaXVtIHRleHQtZ3JheS00MDBcIj57c2Vzc2lvbj8udXNlcj8ubmFtZX08L3A+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyBmb250LW1lZGl1bSB0ZXh0LWdyYXktNDAwXCI+e3Nlc3Npb24/LnVzZXI/LmVtYWlsfTwvcD5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJtdC00IHB5LTEuNSB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtc2xhdGUtNTAwIGhvdmVyOnRleHQtYmx1ZS01MDAgZ3JvdXAgY3Vyc29yLXBvaW50ZXIgZmxleCBpdGVtcy1jZW50ZXJcIlxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gbmF2aWdhdGUoXCJkYXNoYm9hcmRcIil9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC01IHN0cm9rZS1zbGF0ZS00MDAgbXItNCBncm91cC1ob3ZlcjpzdHJva2UtYmx1ZS01MDBcIlxyXG4gICAgICAgICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxyXG4gICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICBzdHJva2VXaWR0aD1cIjJcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXHJcbiAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXHJcbiAgICAgICAgICAgICAgZD1cIk0zIDEybDItMm0wIDBsNy03IDcgN001IDEwdjEwYTEgMSAwIDAwMSAxaDNtMTAtMTFsMiAybS0yLTJ2MTBhMSAxIDAgMDEtMSAxaC0zbS02IDBhMSAxIDAgMDAxLTF2LTRhMSAxIDAgMDExLTFoMmExIDEgMCAwMTEgMXY0YTEgMSAwIDAwMSAxbS02IDBoNlwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgIERhc2hib2FyZFxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJtdC00IHB5LTEuNSB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtc2xhdGUtNTAwIGhvdmVyOnRleHQtYmx1ZS01MDAgZ3JvdXAgY3Vyc29yLXBvaW50ZXIgZmxleCBpdGVtcy1jZW50ZXJcIlxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gbmF2aWdhdGUoXCJwcm9qZWN0c1wiKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJoLTUgc3Ryb2tlLXNsYXRlLTQwMCBtci00IGdyb3VwLWhvdmVyOnN0cm9rZS1ibHVlLTUwMFwiXHJcbiAgICAgICAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXHJcbiAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMlwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcclxuICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcclxuICAgICAgICAgICAgICBkPVwiTTMgN3YxMGEyIDIgMCAwMDIgMmgxNGEyIDIgMCAwMDItMlY5YTIgMiAwIDAwLTItMmgtNmwtMi0ySDVhMiAyIDAgMDAtMiAyelwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgIFByb2plY3RzIEdhbGxlcnlcclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwibXQtNCBweS0xLjUgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LXNsYXRlLTUwMCBob3Zlcjp0ZXh0LWJsdWUtNTAwIGdyb3VwIGN1cnNvci1wb2ludGVyIGZsZXggaXRlbXMtY2VudGVyXCJcclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG5hdmlnYXRlKFwiYWRkcHJvamVjdFwiKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJoLTUgc3Ryb2tlLXNsYXRlLTQwMCBtci00IGdyb3VwLWhvdmVyOnN0cm9rZS1ibHVlLTUwMFwiXHJcbiAgICAgICAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXHJcbiAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMlwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcclxuICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcclxuICAgICAgICAgICAgICBkPVwiTTE5IDExSDVtMTQgMGEyIDIgMCAwMTIgMnY2YTIgMiAwIDAxLTIgMkg1YTIgMiAwIDAxLTItMnYtNmEyIDIgMCAwMTItMm0xNCAwVjlhMiAyIDAgMDAtMi0yTTUgMTFWOWEyIDIgMCAwMTItMm0wIDBWNWEyIDIgMCAwMTItMmg2YTIgMiAwIDAxMiAydjJNNyA3aDEwXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgQWRkIFByb2plY3RcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJtYi00IHB5LTEuNSB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtc2xhdGUtNTAwIGhvdmVyOnRleHQtYmx1ZS01MDAgZ3JvdXAgY3Vyc29yLXBvaW50ZXIgZmxleCBpdGVtcy1jZW50ZXJcIlxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gbmF2aWdhdGUoXCJjb21tdW5pdHlcIil9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgZmlsbD1cIm5vbmVcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgc3Ryb2tlV2lkdGg9ezEuNX0gc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgY2xhc3NOYW1lPVwidy02IGgtNlwiPlxyXG4gICAgICAgICAgICA8cGF0aCBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCIgZD1cIk0xNS43NSA5VjUuMjVBMi4yNSAyLjI1IDAgMDAxMy41IDNoLTZhMi4yNSAyLjI1IDAgMDAtMi4yNSAyLjI1djEzLjVBMi4yNSAyLjI1IDAgMDA3LjUgMjFoNmEyLjI1IDIuMjUgMCAwMDIuMjUtMi4yNVYxNU0xMiA5bC0zIDNtMCAwbDMgM20tMy0zaDEyLjc1XCIgLz5cclxuICAgICAgICAgIDwvc3ZnPlxyXG5cclxuICAgICAgICAgIExvZ291dFxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuXHJcblxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsInVzZVNlc3Npb24iLCJDb2xsZWdlU2lkZUJhciIsInNlc3Npb24iLCJyb3V0ZXIiLCJkYXRhIiwibmF2aWdhdGUiLCJuYW1lIiwicHVzaCIsImRpdiIsImNsYXNzTmFtZSIsInAiLCJ1c2VyIiwiZW1haWwiLCJvbkNsaWNrIiwic3ZnIiwieG1sbnMiLCJmaWxsIiwidmlld0JveCIsInN0cm9rZSIsInN0cm9rZVdpZHRoIiwicGF0aCIsInN0cm9rZUxpbmVjYXAiLCJzdHJva2VMaW5lam9pbiIsImQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/(Main)/college/sidebar/page.jsx\n"));

/***/ })

});