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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_Classes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/Classes */ \"(app-pages-browser)/./app/utils/Classes.ts\");\n/* harmony import */ var _utils_CustomModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/CustomModal */ \"(app-pages-browser)/./app/utils/CustomModal.tsx\");\n/* harmony import */ var _components_Login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Login */ \"(app-pages-browser)/./app/components/Login.tsx\");\n/* harmony import */ var _components_SignUp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/SignUp */ \"(app-pages-browser)/./app/components/SignUp.tsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var _NavItems__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./NavItems */ \"(app-pages-browser)/./app/components/NavItems.tsx\");\n/* harmony import */ var _barrel_optimize_names_HiOutlineMenuAlt3_HiOutlineUserCircle_react_icons_hi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=HiOutlineMenuAlt3,HiOutlineUserCircle!=!react-icons/hi */ \"(app-pages-browser)/./node_modules/react-icons/hi/index.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst Header = (param)=>{\n    let { activeItem, open, setOpen, route, setRoute } = param;\n    _s();\n    const [active, setActive] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [openSidebar, setOpenSidebar] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        function handleScroll() {\n            if (window.scrollY > 100) {\n                setActive(true);\n            } else {\n                setActive(false);\n            }\n        }\n        window.addEventListener(\"scroll\", handleScroll);\n        return ()=>{\n            window.removeEventListener(\"scroll\", handleScroll);\n        };\n    }, []);\n    const handleClose = (e)=>{\n        const target = e.target;\n        if (target.id === \"screen\") {\n            setOpenSidebar(false);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full relative\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (0,_utils_Classes__WEBPACK_IMPORTED_MODULE_2__.cn)(\"sticky top-0 left-0 w-full h-[80px] z-[80] border-b-1 border-white\", {\n                    \"dark:bg-opacity-50 dark:bg-gradient-to-b dark:from-gray-900 dark:to-black  border-b dark:border-[#ffffff1c] shadow-xl transition duration-500\": active,\n                    \"dispaly:hidden\": !active\n                }),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-[95%] sm:w-[92%] m-auto py-2 h-full\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"w-full h-auto flex items-center justify-between p-2 gap-12\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                    href: \"/\",\n                                    className: \"text-lg font-[500] text-black dark:text-yellow-400 text-nowrap\",\n                                    children: \"E Learning\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\LMS\\\\client\\\\app\\\\components\\\\Header.tsx\",\n                                    lineNumber: 65,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex items-center lg:gap-8 sm:gap-2 xs:gap-8 justify-between min-w-[100px]\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NavItems__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                            isMobile: false,\n                                            activeItem: activeItem\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\LMS\\\\client\\\\app\\\\components\\\\Header.tsx\",\n                                            lineNumber: 74,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"sm:hidden\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_HiOutlineMenuAlt3_HiOutlineUserCircle_react_icons_hi__WEBPACK_IMPORTED_MODULE_8__.HiOutlineMenuAlt3, {\n                                                size: 25,\n                                                className: \"dark:text-white cursor-pointer text-black\",\n                                                onClick: ()=>setOpenSidebar(true)\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\LMS\\\\client\\\\app\\\\components\\\\Header.tsx\",\n                                                lineNumber: 76,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\LMS\\\\client\\\\app\\\\components\\\\Header.tsx\",\n                                            lineNumber: 75,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_HiOutlineMenuAlt3_HiOutlineUserCircle_react_icons_hi__WEBPACK_IMPORTED_MODULE_8__.HiOutlineUserCircle, {\n                                            size: 25,\n                                            className: \"dark:text-white cursor-pointer text-black\",\n                                            onClick: ()=>setOpen(true)\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\LMS\\\\client\\\\app\\\\components\\\\Header.tsx\",\n                                            lineNumber: 82,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\LMS\\\\client\\\\app\\\\components\\\\Header.tsx\",\n                                    lineNumber: 73,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\LMS\\\\client\\\\app\\\\components\\\\Header.tsx\",\n                            lineNumber: 62,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\LMS\\\\client\\\\app\\\\components\\\\Header.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, undefined),\n                    openSidebar && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"relative w-full h-screen inset-0 dark:bg-[unset] bg-[#00000024] transition duration-1000\",\n                            onClick: handleClose,\n                            id: \"screen\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"fixed w-[70%] z-[999999] h-screen bg-white dark:bg-slate-900 dark:bg-opacity-90 right-0 top-0 \",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NavItems__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                    isMobile: true,\n                                    activeItem: activeItem\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\LMS\\\\client\\\\app\\\\components\\\\Header.tsx\",\n                                    lineNumber: 99,\n                                    columnNumber: 17\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\LMS\\\\client\\\\app\\\\components\\\\Header.tsx\",\n                                lineNumber: 98,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\LMS\\\\client\\\\app\\\\components\\\\Header.tsx\",\n                            lineNumber: 93,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\LMS\\\\client\\\\app\\\\components\\\\Header.tsx\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, undefined),\n            route === \"Sign-Up\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: open && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_utils_CustomModal__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    open: open,\n                    setOpen: setOpen,\n                    setRoute: setRoute,\n                    activeItem: activeItem,\n                    Component: _components_SignUp__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n                }, void 0, false, {\n                    fileName: \"D:\\\\LMS\\\\client\\\\app\\\\components\\\\Header.tsx\",\n                    lineNumber: 108,\n                    columnNumber: 13\n                }, undefined)\n            }, void 0, false),\n            route === \"Login\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: open && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_utils_CustomModal__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    open: open,\n                    setOpen: setOpen,\n                    setRoute: setRoute,\n                    activeItem: activeItem,\n                    Component: _components_Login__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n                }, void 0, false, {\n                    fileName: \"D:\\\\LMS\\\\client\\\\app\\\\components\\\\Header.tsx\",\n                    lineNumber: 121,\n                    columnNumber: 13\n                }, undefined)\n            }, void 0, false),\n            route === \"Login\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: open && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_utils_CustomModal__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    open: open,\n                    setOpen: setOpen,\n                    setRoute: setRoute,\n                    activeItem: activeItem,\n                    Component: Verification\n                }, void 0, false, {\n                    fileName: \"D:\\\\LMS\\\\client\\\\app\\\\components\\\\Header.tsx\",\n                    lineNumber: 135,\n                    columnNumber: 13\n                }, undefined)\n            }, void 0, false)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\LMS\\\\client\\\\app\\\\components\\\\Header.tsx\",\n        lineNumber: 50,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Header, \"DhbNxkGU6Z70OMLb3tXkbMgow6c=\");\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL0hlYWRlci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNtRDtBQUNiO0FBQ1M7QUFDUDtBQUNFO0FBQ2I7QUFDSztBQUNzQztBQVN4RSxNQUFNVyxTQUEwQjtRQUFDLEVBQy9CQyxVQUFVLEVBQ1ZDLElBQUksRUFDSkMsT0FBTyxFQUNQQyxLQUFLLEVBQ0xDLFFBQVEsRUFDVDs7SUFDQyxNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR2hCLCtDQUFRQSxDQUFDO0lBQ3JDLE1BQU0sQ0FBQ2lCLGFBQWFDLGVBQWUsR0FBR2xCLCtDQUFRQSxDQUFDO0lBRS9DRCxnREFBU0EsQ0FBQztRQUNSLFNBQVNvQjtZQUNQLElBQUlDLE9BQU9DLE9BQU8sR0FBRyxLQUFLO2dCQUN4QkwsVUFBVTtZQUNaLE9BQU87Z0JBQ0xBLFVBQVU7WUFDWjtRQUNGO1FBQ0FJLE9BQU9FLGdCQUFnQixDQUFDLFVBQVVIO1FBQ2xDLE9BQU87WUFDTEMsT0FBT0csbUJBQW1CLENBQUMsVUFBVUo7UUFDdkM7SUFDRixHQUFHLEVBQUU7SUFFTCxNQUFNSyxjQUFjLENBQUNDO1FBQ25CLE1BQU1DLFNBQVNELEVBQUVDLE1BQU07UUFDdkIsSUFBSUEsT0FBT0MsRUFBRSxLQUFLLFVBQVU7WUFDMUJULGVBQWU7UUFDakI7SUFDRjtJQUVBLHFCQUNFLDhEQUFDVTtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0Q7Z0JBQ0NDLFdBQVc1QixrREFBRUEsQ0FDWCxzRUFDQTtvQkFDRSxpSkFDRWM7b0JBQ0Ysa0JBQWtCLENBQUNBO2dCQUNyQjs7a0NBR0YsOERBQUNhO3dCQUFJQyxXQUFVO2tDQUNiLDRFQUFDRDs0QkFBSUMsV0FBVTs7OENBR2IsOERBQUN4QixpREFBSUE7b0NBQ0h5QixNQUFNO29DQUNORCxXQUFZOzhDQUNiOzs7Ozs7OENBS0QsOERBQUNEO29DQUFJQyxXQUFVOztzREFDYiw4REFBQ3ZCLGlEQUFRQTs0Q0FBQ3lCLFVBQVU7NENBQU9yQixZQUFZQTs7Ozs7O3NEQUN2Qyw4REFBQ2tCOzRDQUFJQyxXQUFVO3NEQUNiLDRFQUFDdEIsMEhBQWlCQTtnREFDaEJ5QixNQUFNO2dEQUNOSCxXQUFVO2dEQUNWSSxTQUFTLElBQU1mLGVBQWU7Ozs7Ozs7Ozs7O3NEQUdsQyw4REFBQ1YsNEhBQW1CQTs0Q0FDbEJ3QixNQUFNOzRDQUNOSCxXQUFVOzRDQUNWSSxTQUFTLElBQU1yQixRQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFNOUJLLDZCQUNDO2tDQUNFLDRFQUFDVzs0QkFDQ0MsV0FBVTs0QkFDVkksU0FBU1Q7NEJBQ1RHLElBQUc7c0NBRUgsNEVBQUNDO2dDQUFJQyxXQUFVOzBDQUNiLDRFQUFDdkIsaURBQVFBO29DQUFDeUIsVUFBVTtvQ0FBTXJCLFlBQVlBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQU0vQ0csVUFBVSwyQkFDVDswQkFDR0Ysc0JBQ0MsOERBQUNULDBEQUFXQTtvQkFDVlMsTUFBTUE7b0JBQ05DLFNBQVNBO29CQUNURSxVQUFVQTtvQkFDVkosWUFBWUE7b0JBQ1p3QixXQUFXOUIsMERBQU1BOzs7Ozs7O1lBS3hCUyxVQUFVLHlCQUNUOzBCQUNHRixzQkFDQyw4REFBQ1QsMERBQVdBO29CQUNWUyxNQUFNQTtvQkFDTkMsU0FBU0E7b0JBQ1RFLFVBQVVBO29CQUNWSixZQUFZQTtvQkFDWndCLFdBQVcvQix5REFBS0E7Ozs7Ozs7WUFNdkJVLFVBQVUseUJBQ1Q7MEJBQ0dGLHNCQUNDLDhEQUFDVCwwREFBV0E7b0JBQ1ZTLE1BQU1BO29CQUNOQyxTQUFTQTtvQkFDVEUsVUFBVUE7b0JBQ1ZKLFlBQVlBO29CQUNad0IsV0FBV0M7Ozs7Ozs7Ozs7Ozs7QUFPekI7R0FqSU0xQjtLQUFBQTtBQW1JTiwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9IZWFkZXIudHN4Pzg0Y2EiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGNuIH0gZnJvbSBcIi4uL3V0aWxzL0NsYXNzZXNcIjtcclxuaW1wb3J0IEN1c3RvbU1vZGFsIGZyb20gXCIuLi91dGlscy9DdXN0b21Nb2RhbFwiO1xyXG5pbXBvcnQgTG9naW4gZnJvbSBcIi4uL2NvbXBvbmVudHMvTG9naW5cIjtcclxuaW1wb3J0IFNpZ25VcCBmcm9tIFwiLi4vY29tcG9uZW50cy9TaWduVXBcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgTmF2SXRlbXMgZnJvbSBcIi4vTmF2SXRlbXNcIjtcclxuaW1wb3J0IHsgSGlPdXRsaW5lTWVudUFsdDMsIEhpT3V0bGluZVVzZXJDaXJjbGUgfSBmcm9tIFwicmVhY3QtaWNvbnMvaGlcIjtcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgb3BlbjogYm9vbGVhbjtcclxuICBzZXRPcGVuOiAob3BlbjogYm9vbGVhbikgPT4gdm9pZDtcclxuICBhY3RpdmVJdGVtOiBudW1iZXI7XHJcbiAgcm91dGU6IHN0cmluZztcclxuICBzZXRSb3V0ZTogKHJvdXRlOiBzdHJpbmcpID0+IHZvaWQ7XHJcbn1cclxuY29uc3QgSGVhZGVyOiBSZWFjdC5GQzxQcm9wcz4gPSAoe1xyXG4gIGFjdGl2ZUl0ZW0sXHJcbiAgb3BlbixcclxuICBzZXRPcGVuLFxyXG4gIHJvdXRlLFxyXG4gIHNldFJvdXRlLFxyXG59KSA9PiB7XHJcbiAgY29uc3QgW2FjdGl2ZSwgc2V0QWN0aXZlXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IFtvcGVuU2lkZWJhciwgc2V0T3BlblNpZGViYXJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZnVuY3Rpb24gaGFuZGxlU2Nyb2xsKCkge1xyXG4gICAgICBpZiAod2luZG93LnNjcm9sbFkgPiAxMDApIHtcclxuICAgICAgICBzZXRBY3RpdmUodHJ1ZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2V0QWN0aXZlKGZhbHNlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaGFuZGxlU2Nyb2xsKTtcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGhhbmRsZVNjcm9sbCk7XHJcbiAgICB9O1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoZTogUmVhY3QuTW91c2VFdmVudDxIVE1MRGl2RWxlbWVudD4pID0+IHtcclxuICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0IGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gICAgaWYgKHRhcmdldC5pZCA9PT0gXCJzY3JlZW5cIikge1xyXG4gICAgICBzZXRPcGVuU2lkZWJhcihmYWxzZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHJlbGF0aXZlXCI+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9e2NuKFxyXG4gICAgICAgICAgXCJzdGlja3kgdG9wLTAgbGVmdC0wIHctZnVsbCBoLVs4MHB4XSB6LVs4MF0gYm9yZGVyLWItMSBib3JkZXItd2hpdGVcIixcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJkYXJrOmJnLW9wYWNpdHktNTAgZGFyazpiZy1ncmFkaWVudC10by1iIGRhcms6ZnJvbS1ncmF5LTkwMCBkYXJrOnRvLWJsYWNrICBib3JkZXItYiBkYXJrOmJvcmRlci1bI2ZmZmZmZjFjXSBzaGFkb3cteGwgdHJhbnNpdGlvbiBkdXJhdGlvbi01MDBcIjpcclxuICAgICAgICAgICAgICBhY3RpdmUsXHJcbiAgICAgICAgICAgIFwiZGlzcGFseTpoaWRkZW5cIjogIWFjdGl2ZSxcclxuICAgICAgICAgIH1cclxuICAgICAgICApfVxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LVs5NSVdIHNtOnctWzkyJV0gbS1hdXRvIHB5LTIgaC1mdWxsXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBoLWF1dG8gZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHAtMiBnYXAtMTJcIj5cclxuICAgICAgICAgICAgey8qIExvZ28gKi99XHJcblxyXG4gICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgIGhyZWY9e1wiL1wifVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YHRleHQtbGcgZm9udC1bNTAwXSB0ZXh0LWJsYWNrIGRhcms6dGV4dC15ZWxsb3ctNDAwIHRleHQtbm93cmFwYH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIEUgTGVhcm5pbmdcclxuICAgICAgICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgICAgICAgey8qIExpbmtzICovfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGxnOmdhcC04IHNtOmdhcC0yIHhzOmdhcC04IGp1c3RpZnktYmV0d2VlbiBtaW4tdy1bMTAwcHhdXCI+XHJcbiAgICAgICAgICAgICAgPE5hdkl0ZW1zIGlzTW9iaWxlPXtmYWxzZX0gYWN0aXZlSXRlbT17YWN0aXZlSXRlbX0gLz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNtOmhpZGRlblwiPlxyXG4gICAgICAgICAgICAgICAgPEhpT3V0bGluZU1lbnVBbHQzXHJcbiAgICAgICAgICAgICAgICAgIHNpemU9ezI1fVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkYXJrOnRleHQtd2hpdGUgY3Vyc29yLXBvaW50ZXIgdGV4dC1ibGFja1wiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldE9wZW5TaWRlYmFyKHRydWUpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8SGlPdXRsaW5lVXNlckNpcmNsZVxyXG4gICAgICAgICAgICAgICAgc2l6ZT17MjV9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkYXJrOnRleHQtd2hpdGUgY3Vyc29yLXBvaW50ZXIgdGV4dC1ibGFja1wiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRPcGVuKHRydWUpfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIHtvcGVuU2lkZWJhciAmJiAoXHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVsYXRpdmUgdy1mdWxsIGgtc2NyZWVuIGluc2V0LTAgZGFyazpiZy1bdW5zZXRdIGJnLVsjMDAwMDAwMjRdIHRyYW5zaXRpb24gZHVyYXRpb24tMTAwMFwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xvc2V9XHJcbiAgICAgICAgICAgICAgaWQ9XCJzY3JlZW5cIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaXhlZCB3LVs3MCVdIHotWzk5OTk5OV0gaC1zY3JlZW4gYmctd2hpdGUgZGFyazpiZy1zbGF0ZS05MDAgZGFyazpiZy1vcGFjaXR5LTkwIHJpZ2h0LTAgdG9wLTAgXCI+XHJcbiAgICAgICAgICAgICAgICA8TmF2SXRlbXMgaXNNb2JpbGU9e3RydWV9IGFjdGl2ZUl0ZW09e2FjdGl2ZUl0ZW19IC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHtyb3V0ZSA9PT0gXCJTaWduLVVwXCIgJiYgKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICB7b3BlbiAmJiAoXHJcbiAgICAgICAgICAgIDxDdXN0b21Nb2RhbFxyXG4gICAgICAgICAgICAgIG9wZW49e29wZW59XHJcbiAgICAgICAgICAgICAgc2V0T3Blbj17c2V0T3Blbn1cclxuICAgICAgICAgICAgICBzZXRSb3V0ZT17c2V0Um91dGV9XHJcbiAgICAgICAgICAgICAgYWN0aXZlSXRlbT17YWN0aXZlSXRlbX1cclxuICAgICAgICAgICAgICBDb21wb25lbnQ9e1NpZ25VcH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICl9XHJcbiAgICAgIHtyb3V0ZSA9PT0gXCJMb2dpblwiICYmIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAge29wZW4gJiYgKFxyXG4gICAgICAgICAgICA8Q3VzdG9tTW9kYWxcclxuICAgICAgICAgICAgICBvcGVuPXtvcGVufVxyXG4gICAgICAgICAgICAgIHNldE9wZW49e3NldE9wZW59XHJcbiAgICAgICAgICAgICAgc2V0Um91dGU9e3NldFJvdXRlfVxyXG4gICAgICAgICAgICAgIGFjdGl2ZUl0ZW09e2FjdGl2ZUl0ZW19XHJcbiAgICAgICAgICAgICAgQ29tcG9uZW50PXtMb2dpbn1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICl9XHJcblxyXG4gICAgICB7cm91dGUgPT09IFwiTG9naW5cIiAmJiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIHtvcGVuICYmIChcclxuICAgICAgICAgICAgPEN1c3RvbU1vZGFsXHJcbiAgICAgICAgICAgICAgb3Blbj17b3Blbn1cclxuICAgICAgICAgICAgICBzZXRPcGVuPXtzZXRPcGVufVxyXG4gICAgICAgICAgICAgIHNldFJvdXRlPXtzZXRSb3V0ZX1cclxuICAgICAgICAgICAgICBhY3RpdmVJdGVtPXthY3RpdmVJdGVtfVxyXG4gICAgICAgICAgICAgIENvbXBvbmVudD17VmVyaWZpY2F0aW9ufVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8Lz5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiY24iLCJDdXN0b21Nb2RhbCIsIkxvZ2luIiwiU2lnblVwIiwiTGluayIsIk5hdkl0ZW1zIiwiSGlPdXRsaW5lTWVudUFsdDMiLCJIaU91dGxpbmVVc2VyQ2lyY2xlIiwiSGVhZGVyIiwiYWN0aXZlSXRlbSIsIm9wZW4iLCJzZXRPcGVuIiwicm91dGUiLCJzZXRSb3V0ZSIsImFjdGl2ZSIsInNldEFjdGl2ZSIsIm9wZW5TaWRlYmFyIiwic2V0T3BlblNpZGViYXIiLCJoYW5kbGVTY3JvbGwiLCJ3aW5kb3ciLCJzY3JvbGxZIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJoYW5kbGVDbG9zZSIsImUiLCJ0YXJnZXQiLCJpZCIsImRpdiIsImNsYXNzTmFtZSIsImhyZWYiLCJpc01vYmlsZSIsInNpemUiLCJvbkNsaWNrIiwiQ29tcG9uZW50IiwiVmVyaWZpY2F0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/Header.tsx\n"));

/***/ })

});