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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_Classes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/Classes */ \"(app-pages-browser)/./app/utils/Classes.ts\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var _NavItems__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NavItems */ \"(app-pages-browser)/./app/components/NavItems.tsx\");\n/* harmony import */ var _barrel_optimize_names_HiOutlineMenuAlt3_HiOutlineUserCircle_react_icons_hi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=HiOutlineMenuAlt3,HiOutlineUserCircle!=!react-icons/hi */ \"(app-pages-browser)/./node_modules/react-icons/hi/index.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Header = (param)=>{\n    let { activeItem, open, setOpen } = param;\n    _s();\n    const [active, setActive] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [openSidebar, setOpenSidebar] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        function handleScroll() {\n            if (window.scrollY > 100) {\n                setActive(true);\n            } else {\n                setActive(false);\n            }\n        }\n        window.addEventListener(\"scroll\", handleScroll);\n        return ()=>{\n            window.removeEventListener(\"scroll\", handleScroll);\n        };\n    }, []);\n    const handleClose = ()=>{\n        setOpenSidebar(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full relative\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (0,_utils_Classes__WEBPACK_IMPORTED_MODULE_2__.cn)(\"fixed top-0 left-0 w-full h-[80px] z-[80]\", {\n                \"dark:bg-opacity-50 dark:bg-gradient-to-b dark:from-gray-900 dark:to-black  border-b dark:border-[#ffffff1c] shadow-xl transition duration-500\": active,\n                \"dispaly:hidden\": !active\n            }),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-[95%] sm:w-[92%] m-auto py-2 h-full border-blue-300 border-2\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full h-auto flex items-center justify-between p-2 gap-12\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                href: \"/\",\n                                className: \"text-lg font-[500] text-black dark:text-yellow-400 text-nowrap\",\n                                children: \"E Learning\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\LMS\\\\client\\\\app\\\\components\\\\Header.tsx\",\n                                lineNumber: 47,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center lg:gap-10 sm:gap-2 justify-end\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NavItems__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                        isMobile: false,\n                                        activeItem: activeItem\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\LMS\\\\client\\\\app\\\\components\\\\Header.tsx\",\n                                        lineNumber: 56,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"sm:hidden\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_HiOutlineMenuAlt3_HiOutlineUserCircle_react_icons_hi__WEBPACK_IMPORTED_MODULE_5__.HiOutlineMenuAlt3, {\n                                            size: 25,\n                                            className: \"dark:text-white cursor-pointer text-black\",\n                                            onClick: ()=>setOpenSidebar(true)\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\LMS\\\\client\\\\app\\\\components\\\\Header.tsx\",\n                                            lineNumber: 58,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\LMS\\\\client\\\\app\\\\components\\\\Header.tsx\",\n                                        lineNumber: 57,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_HiOutlineMenuAlt3_HiOutlineUserCircle_react_icons_hi__WEBPACK_IMPORTED_MODULE_5__.HiOutlineUserCircle, {\n                                        className: \"dark:text-white cursor-pointer text-black\",\n                                        onClick: ()=>setOpen(true)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\LMS\\\\client\\\\app\\\\components\\\\Header.tsx\",\n                                        lineNumber: 64,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\LMS\\\\client\\\\app\\\\components\\\\Header.tsx\",\n                                lineNumber: 55,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\LMS\\\\client\\\\app\\\\components\\\\Header.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"D:\\\\LMS\\\\client\\\\app\\\\components\\\\Header.tsx\",\n                    lineNumber: 43,\n                    columnNumber: 9\n                }, undefined),\n                openSidebar && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"fixed w-full h-screen top-0 left-0 dark:bg-[unset] bg-[#00000024] transition duration-1000\",\n                        onClick: handleClose,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"w-[70%] fixed z-[999999] h-screen bg-white dark:bg-slate-900 dark:bg-opacity-90 top-0 right-0 \",\n                            children: \"dsa\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\LMS\\\\client\\\\app\\\\components\\\\Header.tsx\",\n                            lineNumber: 78,\n                            columnNumber: 15\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\LMS\\\\client\\\\app\\\\components\\\\Header.tsx\",\n                        lineNumber: 74,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\LMS\\\\client\\\\app\\\\components\\\\Header.tsx\",\n            lineNumber: 36,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\LMS\\\\client\\\\app\\\\components\\\\Header.tsx\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Header, \"DhbNxkGU6Z70OMLb3tXkbMgow6c=\");\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL0hlYWRlci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNtRDtBQUNiO0FBQ1Q7QUFDSztBQUNzQztBQU14RSxNQUFNUSxTQUEwQjtRQUFDLEVBQUVDLFVBQVUsRUFBRUMsSUFBSSxFQUFFQyxPQUFPLEVBQUU7O0lBQzVELE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHWCwrQ0FBUUEsQ0FBQztJQUNyQyxNQUFNLENBQUNZLGFBQWFDLGVBQWUsR0FBR2IsK0NBQVFBLENBQUM7SUFFL0NELGdEQUFTQSxDQUFDO1FBQ1IsU0FBU2U7WUFDUCxJQUFJQyxPQUFPQyxPQUFPLEdBQUcsS0FBSztnQkFDeEJMLFVBQVU7WUFDWixPQUFPO2dCQUNMQSxVQUFVO1lBQ1o7UUFDRjtRQUNBSSxPQUFPRSxnQkFBZ0IsQ0FBQyxVQUFVSDtRQUNsQyxPQUFPO1lBQ0xDLE9BQU9HLG1CQUFtQixDQUFDLFVBQVVKO1FBQ3ZDO0lBQ0YsR0FBRyxFQUFFO0lBRUwsTUFBTUssY0FBYztRQUNsQk4sZUFBZTtJQUNqQjtJQUVBLHFCQUNFLDhEQUFDTztRQUFJQyxXQUFVO2tCQUNiLDRFQUFDRDtZQUNDQyxXQUFXcEIsa0RBQUVBLENBQUMsNkNBQTZDO2dCQUN6RCxpSkFDRVM7Z0JBQ0Ysa0JBQWtCLENBQUNBO1lBQ3JCOzs4QkFFQSw4REFBQ1U7b0JBQUlDLFdBQVU7OEJBQ2IsNEVBQUNEO3dCQUFJQyxXQUFVOzswQ0FHYiw4REFBQ25CLGlEQUFJQTtnQ0FDSG9CLE1BQU07Z0NBQ05ELFdBQVk7MENBQ2I7Ozs7OzswQ0FLRCw4REFBQ0Q7Z0NBQUlDLFdBQVU7O2tEQUNiLDhEQUFDbEIsaURBQVFBO3dDQUFDb0IsVUFBVTt3Q0FBT2hCLFlBQVlBOzs7Ozs7a0RBQ3ZDLDhEQUFDYTt3Q0FBSUMsV0FBVTtrREFDYiw0RUFBQ2pCLDBIQUFpQkE7NENBQ2hCb0IsTUFBTTs0Q0FDTkgsV0FBVTs0Q0FDVkksU0FBUyxJQUFNWixlQUFlOzs7Ozs7Ozs7OztrREFHbEMsOERBQUNSLDRIQUFtQkE7d0NBQ2xCZ0IsV0FBVTt3Q0FDVkksU0FBUyxJQUFNaEIsUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JBTTlCRyw2QkFDQzs4QkFDRSw0RUFBQ1E7d0JBQ0NDLFdBQVU7d0JBQ1ZJLFNBQVNOO2tDQUVULDRFQUFDQzs0QkFBSUMsV0FBVTtzQ0FBaUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUzlIO0dBM0VNZjtLQUFBQTtBQTZFTiwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9IZWFkZXIudHN4Pzg0Y2EiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGNuIH0gZnJvbSBcIi4uL3V0aWxzL0NsYXNzZXNcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgTmF2SXRlbXMgZnJvbSBcIi4vTmF2SXRlbXNcIjtcclxuaW1wb3J0IHsgSGlPdXRsaW5lTWVudUFsdDMsIEhpT3V0bGluZVVzZXJDaXJjbGUgfSBmcm9tIFwicmVhY3QtaWNvbnMvaGlcIjtcclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICBvcGVuOiBib29sZWFuO1xyXG4gIHNldE9wZW46IChvcGVuOiBib29sZWFuKSA9PiB2b2lkO1xyXG4gIGFjdGl2ZUl0ZW06IG51bWJlcjtcclxufVxyXG5jb25zdCBIZWFkZXI6IFJlYWN0LkZDPFByb3BzPiA9ICh7IGFjdGl2ZUl0ZW0sIG9wZW4sIHNldE9wZW4gfSkgPT4ge1xyXG4gIGNvbnN0IFthY3RpdmUsIHNldEFjdGl2ZV0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCBbb3BlblNpZGViYXIsIHNldE9wZW5TaWRlYmFyXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZ1bmN0aW9uIGhhbmRsZVNjcm9sbCgpIHtcclxuICAgICAgaWYgKHdpbmRvdy5zY3JvbGxZID4gMTAwKSB7XHJcbiAgICAgICAgc2V0QWN0aXZlKHRydWUpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNldEFjdGl2ZShmYWxzZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGhhbmRsZVNjcm9sbCk7XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBoYW5kbGVTY3JvbGwpO1xyXG4gICAgfTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4ge1xyXG4gICAgc2V0T3BlblNpZGViYXIoZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCByZWxhdGl2ZVwiPlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbihcImZpeGVkIHRvcC0wIGxlZnQtMCB3LWZ1bGwgaC1bODBweF0gei1bODBdXCIsIHtcclxuICAgICAgICAgIFwiZGFyazpiZy1vcGFjaXR5LTUwIGRhcms6YmctZ3JhZGllbnQtdG8tYiBkYXJrOmZyb20tZ3JheS05MDAgZGFyazp0by1ibGFjayAgYm9yZGVyLWIgZGFyazpib3JkZXItWyNmZmZmZmYxY10gc2hhZG93LXhsIHRyYW5zaXRpb24gZHVyYXRpb24tNTAwXCI6XHJcbiAgICAgICAgICAgIGFjdGl2ZSxcclxuICAgICAgICAgIFwiZGlzcGFseTpoaWRkZW5cIjogIWFjdGl2ZSxcclxuICAgICAgICB9KX1cclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1bOTUlXSBzbTp3LVs5MiVdIG0tYXV0byBweS0yIGgtZnVsbCBib3JkZXItYmx1ZS0zMDAgYm9yZGVyLTJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGgtYXV0byBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gcC0yIGdhcC0xMlwiPlxyXG4gICAgICAgICAgICB7LyogTG9nbyAqL31cclxuXHJcbiAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgaHJlZj17XCIvXCJ9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgdGV4dC1sZyBmb250LVs1MDBdIHRleHQtYmxhY2sgZGFyazp0ZXh0LXllbGxvdy00MDAgdGV4dC1ub3dyYXBgfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgRSBMZWFybmluZ1xyXG4gICAgICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgICAgICB7LyogTGlua3MgKi99XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgbGc6Z2FwLTEwIHNtOmdhcC0yIGp1c3RpZnktZW5kXCI+XHJcbiAgICAgICAgICAgICAgPE5hdkl0ZW1zIGlzTW9iaWxlPXtmYWxzZX0gYWN0aXZlSXRlbT17YWN0aXZlSXRlbX0gLz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNtOmhpZGRlblwiPlxyXG4gICAgICAgICAgICAgICAgPEhpT3V0bGluZU1lbnVBbHQzXHJcbiAgICAgICAgICAgICAgICAgIHNpemU9ezI1fVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkYXJrOnRleHQtd2hpdGUgY3Vyc29yLXBvaW50ZXIgdGV4dC1ibGFja1wiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldE9wZW5TaWRlYmFyKHRydWUpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8SGlPdXRsaW5lVXNlckNpcmNsZVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGFyazp0ZXh0LXdoaXRlIGN1cnNvci1wb2ludGVyIHRleHQtYmxhY2tcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0T3Blbih0cnVlKX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICB7b3BlblNpZGViYXIgJiYgKFxyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZpeGVkIHctZnVsbCBoLXNjcmVlbiB0b3AtMCBsZWZ0LTAgZGFyazpiZy1bdW5zZXRdIGJnLVsjMDAwMDAwMjRdIHRyYW5zaXRpb24gZHVyYXRpb24tMTAwMFwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xvc2V9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctWzcwJV0gZml4ZWQgei1bOTk5OTk5XSBoLXNjcmVlbiBiZy13aGl0ZSBkYXJrOmJnLXNsYXRlLTkwMCBkYXJrOmJnLW9wYWNpdHktOTAgdG9wLTAgcmlnaHQtMCBcIj5cclxuICAgICAgICAgICAgICAgIGRzYVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJjbiIsIkxpbmsiLCJOYXZJdGVtcyIsIkhpT3V0bGluZU1lbnVBbHQzIiwiSGlPdXRsaW5lVXNlckNpcmNsZSIsIkhlYWRlciIsImFjdGl2ZUl0ZW0iLCJvcGVuIiwic2V0T3BlbiIsImFjdGl2ZSIsInNldEFjdGl2ZSIsIm9wZW5TaWRlYmFyIiwic2V0T3BlblNpZGViYXIiLCJoYW5kbGVTY3JvbGwiLCJ3aW5kb3ciLCJzY3JvbGxZIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJoYW5kbGVDbG9zZSIsImRpdiIsImNsYXNzTmFtZSIsImhyZWYiLCJpc01vYmlsZSIsInNpemUiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/Header.tsx\n"));

/***/ })

});