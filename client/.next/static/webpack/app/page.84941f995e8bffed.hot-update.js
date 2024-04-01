"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/components/Header.tsx":
/*!***********************************!*\
  !*** ./app/components/Header.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_Classes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/Classes */ \"(app-pages-browser)/./app/utils/Classes.ts\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var _NavItems__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NavItems */ \"(app-pages-browser)/./app/components/NavItems.tsx\");\n/* harmony import */ var _barrel_optimize_names_HiOutlineMenuAlt3_HiOutlineUserCircle_react_icons_hi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=HiOutlineMenuAlt3,HiOutlineUserCircle!=!react-icons/hi */ \"(app-pages-browser)/./node_modules/react-icons/hi/index.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Header = (param)=>{\n    let { activeItem, open, setOpen } = param;\n    _s();\n    const [active, setActive] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [openSidebar, setOpenSidebar] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        function handleScroll() {\n            if (window.scrollY > 100) {\n                setActive(true);\n            } else {\n                setActive(false);\n            }\n        }\n        window.addEventListener(\"scroll\", handleScroll);\n        return ()=>{\n            window.removeEventListener(\"scroll\", handleScroll);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full relative\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (0,_utils_Classes__WEBPACK_IMPORTED_MODULE_2__.cn)(\"fixed top-0 left-0 w-full h-[80px] z-[80]\", {\n                \"dark:bg-opacity-50 dark:bg-gradient-to-b dark:from-gray-900 dark:to-black  border-b dark:border-[#ffffff1c] shadow-xl transition duration-500\": active,\n                \"dispaly:hidden\": !active\n            }),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-[95%] sm:w-[92%] m-auto py-2 h-full border-blue-300 border-2\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full h-auto flex items-center justify-between p-2 gap-12\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                href: \"/\",\n                                className: \"text-lg font-[500] text-black dark:text-yellow-400 text-nowrap\",\n                                children: \"E Learning\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\LMS\\\\client\\\\app\\\\components\\\\Header.tsx\",\n                                lineNumber: 43,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center lg:gap-10 sm:gap-2 justify-end\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NavItems__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                        isMobile: false,\n                                        activeItem: activeItem\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\LMS\\\\client\\\\app\\\\components\\\\Header.tsx\",\n                                        lineNumber: 52,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"sm:hidden\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_HiOutlineMenuAlt3_HiOutlineUserCircle_react_icons_hi__WEBPACK_IMPORTED_MODULE_5__.HiOutlineMenuAlt3, {\n                                            size: 25,\n                                            className: \"dark:text-white cursor-pointer text-black\",\n                                            onClick: ()=>setOpenSidebar(!openSidebar)\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\LMS\\\\client\\\\app\\\\components\\\\Header.tsx\",\n                                            lineNumber: 54,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\LMS\\\\client\\\\app\\\\components\\\\Header.tsx\",\n                                        lineNumber: 53,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_HiOutlineMenuAlt3_HiOutlineUserCircle_react_icons_hi__WEBPACK_IMPORTED_MODULE_5__.HiOutlineUserCircle, {\n                                        className: \"dark:text-white cursor-pointer text-black\",\n                                        onClick: ()=>setOpen(true)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\LMS\\\\client\\\\app\\\\components\\\\Header.tsx\",\n                                        lineNumber: 60,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\LMS\\\\client\\\\app\\\\components\\\\Header.tsx\",\n                                lineNumber: 51,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\LMS\\\\client\\\\app\\\\components\\\\Header.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"D:\\\\LMS\\\\client\\\\app\\\\components\\\\Header.tsx\",\n                    lineNumber: 39,\n                    columnNumber: 9\n                }, undefined),\n                openSidebar && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"fixed w-full top-0 left-0 dark:bg-[unset] bg-[#00000024]\",\n                        onClick: handleClose\n                    }, void 0, false, {\n                        fileName: \"D:\\\\LMS\\\\client\\\\app\\\\components\\\\Header.tsx\",\n                        lineNumber: 70,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\LMS\\\\client\\\\app\\\\components\\\\Header.tsx\",\n            lineNumber: 32,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\LMS\\\\client\\\\app\\\\components\\\\Header.tsx\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Header, \"DhbNxkGU6Z70OMLb3tXkbMgow6c=\");\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL0hlYWRlci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNtRDtBQUNiO0FBQ1Q7QUFDSztBQUNzQztBQU14RSxNQUFNUSxTQUEwQjtRQUFDLEVBQUVDLFVBQVUsRUFBRUMsSUFBSSxFQUFFQyxPQUFPLEVBQUU7O0lBQzVELE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHWCwrQ0FBUUEsQ0FBQztJQUNyQyxNQUFNLENBQUNZLGFBQWFDLGVBQWUsR0FBR2IsK0NBQVFBLENBQUM7SUFFL0NELGdEQUFTQSxDQUFDO1FBQ1IsU0FBU2U7WUFDUCxJQUFJQyxPQUFPQyxPQUFPLEdBQUcsS0FBSztnQkFDeEJMLFVBQVU7WUFDWixPQUFPO2dCQUNMQSxVQUFVO1lBQ1o7UUFDRjtRQUNBSSxPQUFPRSxnQkFBZ0IsQ0FBQyxVQUFVSDtRQUNsQyxPQUFPO1lBQ0xDLE9BQU9HLG1CQUFtQixDQUFDLFVBQVVKO1FBQ3ZDO0lBQ0YsR0FBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUNLO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNEO1lBQ0NDLFdBQVduQixrREFBRUEsQ0FBQyw2Q0FBNkM7Z0JBQ3pELGlKQUNFUztnQkFDRixrQkFBa0IsQ0FBQ0E7WUFDckI7OzhCQUVBLDhEQUFDUztvQkFBSUMsV0FBVTs4QkFDYiw0RUFBQ0Q7d0JBQUlDLFdBQVU7OzBDQUdiLDhEQUFDbEIsaURBQUlBO2dDQUNIbUIsTUFBTTtnQ0FDTkQsV0FBWTswQ0FDYjs7Ozs7OzBDQUtELDhEQUFDRDtnQ0FBSUMsV0FBVTs7a0RBQ2IsOERBQUNqQixpREFBUUE7d0NBQUNtQixVQUFVO3dDQUFPZixZQUFZQTs7Ozs7O2tEQUN2Qyw4REFBQ1k7d0NBQUlDLFdBQVU7a0RBQ2IsNEVBQUNoQiwwSEFBaUJBOzRDQUNoQm1CLE1BQU07NENBQ05ILFdBQVU7NENBQ1ZJLFNBQVMsSUFBTVgsZUFBZSxDQUFDRDs7Ozs7Ozs7Ozs7a0RBR25DLDhEQUFDUCw0SEFBbUJBO3dDQUNsQmUsV0FBVTt3Q0FDVkksU0FBUyxJQUFNZixRQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQkFNOUJHLDZCQUNDOzhCQUNFLDRFQUFDTzt3QkFDQ0MsV0FBVTt3QkFDVkksU0FBU0M7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU92QjtHQW5FTW5CO0tBQUFBO0FBcUVOLCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL0hlYWRlci50c3g/ODRjYSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgY24gfSBmcm9tIFwiLi4vdXRpbHMvQ2xhc3Nlc1wiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBOYXZJdGVtcyBmcm9tIFwiLi9OYXZJdGVtc1wiO1xyXG5pbXBvcnQgeyBIaU91dGxpbmVNZW51QWx0MywgSGlPdXRsaW5lVXNlckNpcmNsZSB9IGZyb20gXCJyZWFjdC1pY29ucy9oaVwiO1xyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gIG9wZW46IGJvb2xlYW47XHJcbiAgc2V0T3BlbjogKG9wZW46IGJvb2xlYW4pID0+IHZvaWQ7XHJcbiAgYWN0aXZlSXRlbTogbnVtYmVyO1xyXG59XHJcbmNvbnN0IEhlYWRlcjogUmVhY3QuRkM8UHJvcHM+ID0gKHsgYWN0aXZlSXRlbSwgb3Blbiwgc2V0T3BlbiB9KSA9PiB7XHJcbiAgY29uc3QgW2FjdGl2ZSwgc2V0QWN0aXZlXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IFtvcGVuU2lkZWJhciwgc2V0T3BlblNpZGViYXJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZnVuY3Rpb24gaGFuZGxlU2Nyb2xsKCkge1xyXG4gICAgICBpZiAod2luZG93LnNjcm9sbFkgPiAxMDApIHtcclxuICAgICAgICBzZXRBY3RpdmUodHJ1ZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2V0QWN0aXZlKGZhbHNlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaGFuZGxlU2Nyb2xsKTtcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGhhbmRsZVNjcm9sbCk7XHJcbiAgICB9O1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHJlbGF0aXZlXCI+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9e2NuKFwiZml4ZWQgdG9wLTAgbGVmdC0wIHctZnVsbCBoLVs4MHB4XSB6LVs4MF1cIiwge1xyXG4gICAgICAgICAgXCJkYXJrOmJnLW9wYWNpdHktNTAgZGFyazpiZy1ncmFkaWVudC10by1iIGRhcms6ZnJvbS1ncmF5LTkwMCBkYXJrOnRvLWJsYWNrICBib3JkZXItYiBkYXJrOmJvcmRlci1bI2ZmZmZmZjFjXSBzaGFkb3cteGwgdHJhbnNpdGlvbiBkdXJhdGlvbi01MDBcIjpcclxuICAgICAgICAgICAgYWN0aXZlLFxyXG4gICAgICAgICAgXCJkaXNwYWx5OmhpZGRlblwiOiAhYWN0aXZlLFxyXG4gICAgICAgIH0pfVxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LVs5NSVdIHNtOnctWzkyJV0gbS1hdXRvIHB5LTIgaC1mdWxsIGJvcmRlci1ibHVlLTMwMCBib3JkZXItMlwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1hdXRvIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBwLTIgZ2FwLTEyXCI+XHJcbiAgICAgICAgICAgIHsvKiBMb2dvICovfVxyXG5cclxuICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICBocmVmPXtcIi9cIn1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2B0ZXh0LWxnIGZvbnQtWzUwMF0gdGV4dC1ibGFjayBkYXJrOnRleHQteWVsbG93LTQwMCB0ZXh0LW5vd3JhcGB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBFIExlYXJuaW5nXHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgICAgIHsvKiBMaW5rcyAqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBsZzpnYXAtMTAgc206Z2FwLTIganVzdGlmeS1lbmRcIj5cclxuICAgICAgICAgICAgICA8TmF2SXRlbXMgaXNNb2JpbGU9e2ZhbHNlfSBhY3RpdmVJdGVtPXthY3RpdmVJdGVtfSAvPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic206aGlkZGVuXCI+XHJcbiAgICAgICAgICAgICAgICA8SGlPdXRsaW5lTWVudUFsdDNcclxuICAgICAgICAgICAgICAgICAgc2l6ZT17MjV9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRhcms6dGV4dC13aGl0ZSBjdXJzb3ItcG9pbnRlciB0ZXh0LWJsYWNrXCJcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0T3BlblNpZGViYXIoIW9wZW5TaWRlYmFyKX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPEhpT3V0bGluZVVzZXJDaXJjbGVcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRhcms6dGV4dC13aGl0ZSBjdXJzb3ItcG9pbnRlciB0ZXh0LWJsYWNrXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldE9wZW4odHJ1ZSl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAge29wZW5TaWRlYmFyICYmIChcclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmaXhlZCB3LWZ1bGwgdG9wLTAgbGVmdC0wIGRhcms6YmctW3Vuc2V0XSBiZy1bIzAwMDAwMDI0XVwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xvc2V9XHJcbiAgICAgICAgICAgID48L2Rpdj5cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJjbiIsIkxpbmsiLCJOYXZJdGVtcyIsIkhpT3V0bGluZU1lbnVBbHQzIiwiSGlPdXRsaW5lVXNlckNpcmNsZSIsIkhlYWRlciIsImFjdGl2ZUl0ZW0iLCJvcGVuIiwic2V0T3BlbiIsImFjdGl2ZSIsInNldEFjdGl2ZSIsIm9wZW5TaWRlYmFyIiwic2V0T3BlblNpZGViYXIiLCJoYW5kbGVTY3JvbGwiLCJ3aW5kb3ciLCJzY3JvbGxZIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJocmVmIiwiaXNNb2JpbGUiLCJzaXplIiwib25DbGljayIsImhhbmRsZUNsb3NlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/Header.tsx\n"));

/***/ })

});