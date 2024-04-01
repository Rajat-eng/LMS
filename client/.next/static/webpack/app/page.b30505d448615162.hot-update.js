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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_Classes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/Classes */ \"(app-pages-browser)/./app/utils/Classes.ts\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var _NavItems__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NavItems */ \"(app-pages-browser)/./app/components/NavItems.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst Header = (param)=>{\n    let { activeItem, open, setOpen } = param;\n    _s();\n    const [active, setActive] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [openSidebar, setOpenSidebar] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        function handleScroll() {\n            if (window.scrollY > 100) {\n                setActive(true);\n            } else {\n                setActive(false);\n            }\n        }\n        window.addEventListener(\"scroll\", handleScroll);\n        return ()=>{\n            window.removeEventListener(\"scroll\", handleScroll);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full relative\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (0,_utils_Classes__WEBPACK_IMPORTED_MODULE_2__.cn)(\"fixed top-0 left-0 w-full h-[80px] z-[80]\", {\n                \"dark:bg-opacity-50 dark:bg-gradient-to-b dark:from-gray-900 dark:to-black  border-b dark:border-[#ffffff1c] shadow-xl transition duration-500\": active,\n                \"dispaly:hidden\": !active\n            }),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-[95%] sm:w-[92%] m-auto py-2 h-full border-blue-300 border-2\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-full h-auto flex items-center justify-between p-2 gap-16\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            href: \"/\",\n                            className: \"text-[25px] font-[500] text-black dark:text-yellow-400 text-nowrap\",\n                            children: \"E Learning\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\LMS\\\\client\\\\app\\\\components\\\\Header.tsx\",\n                            lineNumber: 42,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex items-center gap-10 justify-end\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NavItems__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                    isMobile: false,\n                                    activeItem: activeItem\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\LMS\\\\client\\\\app\\\\components\\\\Header.tsx\",\n                                    lineNumber: 51,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"dark:text-white p-2 font-500\",\n                                    children: \"Account\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\LMS\\\\client\\\\app\\\\components\\\\Header.tsx\",\n                                    lineNumber: 52,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\LMS\\\\client\\\\app\\\\components\\\\Header.tsx\",\n                            lineNumber: 50,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\LMS\\\\client\\\\app\\\\components\\\\Header.tsx\",\n                    lineNumber: 39,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\LMS\\\\client\\\\app\\\\components\\\\Header.tsx\",\n                lineNumber: 38,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"D:\\\\LMS\\\\client\\\\app\\\\components\\\\Header.tsx\",\n            lineNumber: 31,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\LMS\\\\client\\\\app\\\\components\\\\Header.tsx\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Header, \"DhbNxkGU6Z70OMLb3tXkbMgow6c=\");\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL0hlYWRlci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ21EO0FBQ2I7QUFDVDtBQUNLO0FBTWxDLE1BQU1NLFNBQTBCO1FBQUMsRUFBRUMsVUFBVSxFQUFFQyxJQUFJLEVBQUVDLE9BQU8sRUFBRTs7SUFDNUQsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdULCtDQUFRQSxDQUFDO0lBQ3JDLE1BQU0sQ0FBQ1UsYUFBYUMsZUFBZSxHQUFHWCwrQ0FBUUEsQ0FBQztJQUUvQ0QsZ0RBQVNBLENBQUM7UUFDUixTQUFTYTtZQUNQLElBQUlDLE9BQU9DLE9BQU8sR0FBRyxLQUFLO2dCQUN4QkwsVUFBVTtZQUNaLE9BQU87Z0JBQ0xBLFVBQVU7WUFDWjtRQUNGO1FBQ0FJLE9BQU9FLGdCQUFnQixDQUFDLFVBQVVIO1FBQ2xDLE9BQU87WUFDTEMsT0FBT0csbUJBQW1CLENBQUMsVUFBVUo7UUFDdkM7SUFDRixHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ0s7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0Q7WUFDQ0MsV0FBV2pCLGtEQUFFQSxDQUFDLDZDQUE2QztnQkFDekQsaUpBQ0VPO2dCQUNGLGtCQUFrQixDQUFDQTtZQUNyQjtzQkFFQSw0RUFBQ1M7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNEO29CQUFJQyxXQUFVOztzQ0FHYiw4REFBQ2hCLGlEQUFJQTs0QkFDSGlCLE1BQU07NEJBQ05ELFdBQVk7c0NBQ2I7Ozs7OztzQ0FLRCw4REFBQ0Q7NEJBQUlDLFdBQVU7OzhDQUNiLDhEQUFDZixpREFBUUE7b0NBQUNpQixVQUFVO29DQUFPZixZQUFZQTs7Ozs7OzhDQUN2Qyw4REFBQ2dCO29DQUFPSCxXQUFVOzhDQUErQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTy9EO0dBaERNZDtLQUFBQTtBQWtETiwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9IZWFkZXIudHN4Pzg0Y2EiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGNuIH0gZnJvbSBcIi4uL3V0aWxzL0NsYXNzZXNcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgTmF2SXRlbXMgZnJvbSBcIi4vTmF2SXRlbXNcIjtcclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICBvcGVuOiBib29sZWFuO1xyXG4gIHNldE9wZW46IChvcGVuOiBib29sZWFuKSA9PiB2b2lkO1xyXG4gIGFjdGl2ZUl0ZW06IG51bWJlcjtcclxufVxyXG5jb25zdCBIZWFkZXI6IFJlYWN0LkZDPFByb3BzPiA9ICh7IGFjdGl2ZUl0ZW0sIG9wZW4sIHNldE9wZW4gfSkgPT4ge1xyXG4gIGNvbnN0IFthY3RpdmUsIHNldEFjdGl2ZV0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCBbb3BlblNpZGViYXIsIHNldE9wZW5TaWRlYmFyXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZ1bmN0aW9uIGhhbmRsZVNjcm9sbCgpIHtcclxuICAgICAgaWYgKHdpbmRvdy5zY3JvbGxZID4gMTAwKSB7XHJcbiAgICAgICAgc2V0QWN0aXZlKHRydWUpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNldEFjdGl2ZShmYWxzZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGhhbmRsZVNjcm9sbCk7XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBoYW5kbGVTY3JvbGwpO1xyXG4gICAgfTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCByZWxhdGl2ZVwiPlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbihcImZpeGVkIHRvcC0wIGxlZnQtMCB3LWZ1bGwgaC1bODBweF0gei1bODBdXCIsIHtcclxuICAgICAgICAgIFwiZGFyazpiZy1vcGFjaXR5LTUwIGRhcms6YmctZ3JhZGllbnQtdG8tYiBkYXJrOmZyb20tZ3JheS05MDAgZGFyazp0by1ibGFjayAgYm9yZGVyLWIgZGFyazpib3JkZXItWyNmZmZmZmYxY10gc2hhZG93LXhsIHRyYW5zaXRpb24gZHVyYXRpb24tNTAwXCI6XHJcbiAgICAgICAgICAgIGFjdGl2ZSxcclxuICAgICAgICAgIFwiZGlzcGFseTpoaWRkZW5cIjogIWFjdGl2ZSxcclxuICAgICAgICB9KX1cclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1bOTUlXSBzbTp3LVs5MiVdIG0tYXV0byBweS0yIGgtZnVsbCBib3JkZXItYmx1ZS0zMDAgYm9yZGVyLTJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGgtYXV0byBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gcC0yIGdhcC0xNlwiPlxyXG4gICAgICAgICAgICB7LyogTG9nbyAqL31cclxuXHJcbiAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgaHJlZj17XCIvXCJ9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgdGV4dC1bMjVweF0gZm9udC1bNTAwXSB0ZXh0LWJsYWNrIGRhcms6dGV4dC15ZWxsb3ctNDAwIHRleHQtbm93cmFwYH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIEUgTGVhcm5pbmdcclxuICAgICAgICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgICAgICAgey8qIExpbmtzICovfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0xMCBqdXN0aWZ5LWVuZFwiPlxyXG4gICAgICAgICAgICAgIDxOYXZJdGVtcyBpc01vYmlsZT17ZmFsc2V9IGFjdGl2ZUl0ZW09e2FjdGl2ZUl0ZW19IC8+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJkYXJrOnRleHQtd2hpdGUgcC0yIGZvbnQtNTAwXCI+QWNjb3VudDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiY24iLCJMaW5rIiwiTmF2SXRlbXMiLCJIZWFkZXIiLCJhY3RpdmVJdGVtIiwib3BlbiIsInNldE9wZW4iLCJhY3RpdmUiLCJzZXRBY3RpdmUiLCJvcGVuU2lkZWJhciIsInNldE9wZW5TaWRlYmFyIiwiaGFuZGxlU2Nyb2xsIiwid2luZG93Iiwic2Nyb2xsWSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZGl2IiwiY2xhc3NOYW1lIiwiaHJlZiIsImlzTW9iaWxlIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/Header.tsx\n"));

/***/ })

});