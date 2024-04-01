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

/***/ "(app-pages-browser)/./app/components/NavItems.tsx":
/*!*************************************!*\
  !*** ./app/components/NavItems.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   navItemsData: function() { return /* binding */ navItemsData; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_Classes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/Classes */ \"(app-pages-browser)/./app/utils/Classes.ts\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* __next_internal_client_entry_do_not_use__ navItemsData,default auto */ \n\n\n\nconst navItemsData = [\n    {\n        name: \"Home\",\n        link: \"/\"\n    },\n    {\n        name: \"Courses\",\n        link: \"/courses\"\n    },\n    {\n        name: \"About\",\n        link: \"/about\"\n    },\n    {\n        name: \"Policy\",\n        link: \"/policy\"\n    },\n    {\n        name: \"FAQ\",\n        link: \"/faq\"\n    }\n];\nconst NavItems = (param)=>{\n    let { activeItem, isMobile } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center gap-6\",\n                children: navItemsData.map((item, index)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        href: \"\".concat(item.link),\n                        className: (0,_utils_Classes__WEBPACK_IMPORTED_MODULE_2__.cn)(\"hidden sm:block sm:text-base md:text-lg font-[500] text-black dark:text-white hover:border-b-2 hover:border-pink-500\", {\n                            hidden: isMobile,\n                            \"dark:text-purple-800 \": activeItem === index\n                        }),\n                        children: item.name\n                    }, index, false, {\n                        fileName: \"D:\\\\LMS\\\\client\\\\app\\\\components\\\\NavItems.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 13\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"D:\\\\LMS\\\\client\\\\app\\\\components\\\\NavItems.tsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, undefined),\n            isMobile && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"sm:hidden mt-12 \",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full text-center py- flex flex-col gap-16\",\n                        children: navItemsData.map((item, index)=>{\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                href: \"/\",\n                                passHref: true,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: (0,_utils_Classes__WEBPACK_IMPORTED_MODULE_2__.cn)(\" sm:flex flex-col sm:text-base md:text-lg font-[500] text-black dark:text-white hover:border-b-2 hover:border-pink-500\", {\n                                        \"dark:text-purple-800 \": activeItem === index\n                                    }),\n                                    children: item.name\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\LMS\\\\client\\\\app\\\\components\\\\NavItems.tsx\",\n                                    lineNumber: 63,\n                                    columnNumber: 21\n                                }, undefined)\n                            }, index, false, {\n                                fileName: \"D:\\\\LMS\\\\client\\\\app\\\\components\\\\NavItems.tsx\",\n                                lineNumber: 62,\n                                columnNumber: 19\n                            }, undefined);\n                        })\n                    }, void 0, false, {\n                        fileName: \"D:\\\\LMS\\\\client\\\\app\\\\components\\\\NavItems.tsx\",\n                        lineNumber: 59,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"D:\\\\LMS\\\\client\\\\app\\\\components\\\\NavItems.tsx\",\n                    lineNumber: 58,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false)\n        ]\n    }, void 0, true);\n};\n_c = NavItems;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavItems);\nvar _c;\n$RefreshReg$(_c, \"NavItems\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL05hdkl0ZW1zLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ21EO0FBQ2I7QUFDVDtBQU10QixNQUFNRyxlQUFlO0lBQzFCO1FBQ0VDLE1BQU07UUFDTkMsTUFBTTtJQUNSO0lBQ0E7UUFDRUQsTUFBTTtRQUNOQyxNQUFNO0lBQ1I7SUFDQTtRQUNFRCxNQUFNO1FBQ05DLE1BQU07SUFDUjtJQUNBO1FBQ0VELE1BQU07UUFDTkMsTUFBTTtJQUNSO0lBQ0E7UUFDRUQsTUFBTTtRQUNOQyxNQUFNO0lBQ1I7Q0FDRCxDQUFDO0FBRUYsTUFBTUMsV0FBNEI7UUFBQyxFQUFFQyxVQUFVLEVBQUVDLFFBQVEsRUFBRTtJQUN6RCxxQkFDRTs7MEJBQ0UsOERBQUNDO2dCQUFJQyxXQUFVOzBCQUNaUCxhQUFhUSxHQUFHLENBQUMsQ0FBQ0MsTUFBTUM7b0JBQ3ZCLHFCQUNFLDhEQUFDWCxpREFBSUE7d0JBRUhZLE1BQU0sR0FBYSxPQUFWRixLQUFLUCxJQUFJO3dCQUNsQkssV0FBV1Qsa0RBQUVBLENBQ1Ysd0hBQ0Q7NEJBQ0VjLFFBQVFQOzRCQUNSLHlCQUF5QkQsZUFBZU07d0JBQzFDO2tDQUdERCxLQUFLUixJQUFJO3VCQVZMUzs7Ozs7Z0JBYVg7Ozs7OztZQUdETCwwQkFDQzswQkFDRSw0RUFBQ0M7b0JBQUlDLFdBQVU7OEJBQ2IsNEVBQUNEO3dCQUFJQyxXQUFVO2tDQUNaUCxhQUFhUSxHQUFHLENBQUMsQ0FBQ0MsTUFBTUM7NEJBQ3ZCLHFCQUNFLDhEQUFDWCxpREFBSUE7Z0NBQUNZLE1BQUs7Z0NBQUlFLFFBQVE7MENBQ3JCLDRFQUFDQztvQ0FDQ1AsV0FBV1Qsa0RBQUVBLENBQ1YsMEhBQ0Q7d0NBQ0UseUJBQXlCTSxlQUFlTTtvQ0FDMUM7OENBR0RELEtBQUtSLElBQUk7Ozs7OzsrQkFUZVM7Ozs7O3dCQWFqQzs7Ozs7Ozs7Ozs7Ozs7QUFPZDtLQWpETVA7QUFtRE4sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvTmF2SXRlbXMudHN4PzRmMGIiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGNuIH0gZnJvbSBcIi4uL3V0aWxzL0NsYXNzZXNcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gIGFjdGl2ZUl0ZW06IG51bWJlcjtcclxuICBpc01vYmlsZTogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IG5hdkl0ZW1zRGF0YSA9IFtcclxuICB7XHJcbiAgICBuYW1lOiBcIkhvbWVcIixcclxuICAgIGxpbms6IFwiL1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJDb3Vyc2VzXCIsXHJcbiAgICBsaW5rOiBcIi9jb3Vyc2VzXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIkFib3V0XCIsXHJcbiAgICBsaW5rOiBcIi9hYm91dFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJQb2xpY3lcIixcclxuICAgIGxpbms6IFwiL3BvbGljeVwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJGQVFcIixcclxuICAgIGxpbms6IFwiL2ZhcVwiLFxyXG4gIH0sXHJcbl07XHJcblxyXG5jb25zdCBOYXZJdGVtczogUmVhY3QuRkM8UHJvcHM+ID0gKHsgYWN0aXZlSXRlbSwgaXNNb2JpbGUgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC02XCI+XHJcbiAgICAgICAge25hdkl0ZW1zRGF0YS5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgaHJlZj17YCR7aXRlbS5saW5rfWB9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbihcclxuICAgICAgICAgICAgICAgIGBoaWRkZW4gc206YmxvY2sgc206dGV4dC1iYXNlIG1kOnRleHQtbGcgZm9udC1bNTAwXSB0ZXh0LWJsYWNrIGRhcms6dGV4dC13aGl0ZSBob3Zlcjpib3JkZXItYi0yIGhvdmVyOmJvcmRlci1waW5rLTUwMGAsXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIGhpZGRlbjogaXNNb2JpbGUsXHJcbiAgICAgICAgICAgICAgICAgIFwiZGFyazp0ZXh0LXB1cnBsZS04MDAgXCI6IGFjdGl2ZUl0ZW0gPT09IGluZGV4LFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7aXRlbS5uYW1lfVxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pfVxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIHtpc01vYmlsZSAmJiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic206aGlkZGVuIG10LTEyIFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCB0ZXh0LWNlbnRlciBweS0gZmxleCBmbGV4LWNvbCBnYXAtMTZcIj5cclxuICAgICAgICAgICAgICB7bmF2SXRlbXNEYXRhLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCIgcGFzc0hyZWYga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y24oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGAgc206ZmxleCBmbGV4LWNvbCBzbTp0ZXh0LWJhc2UgbWQ6dGV4dC1sZyBmb250LVs1MDBdIHRleHQtYmxhY2sgZGFyazp0ZXh0LXdoaXRlIGhvdmVyOmJvcmRlci1iLTIgaG92ZXI6Ym9yZGVyLXBpbmstNTAwYCxcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGFyazp0ZXh0LXB1cnBsZS04MDAgXCI6IGFjdGl2ZUl0ZW0gPT09IGluZGV4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgICApfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdkl0ZW1zO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJjbiIsIkxpbmsiLCJuYXZJdGVtc0RhdGEiLCJuYW1lIiwibGluayIsIk5hdkl0ZW1zIiwiYWN0aXZlSXRlbSIsImlzTW9iaWxlIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFwIiwiaXRlbSIsImluZGV4IiwiaHJlZiIsImhpZGRlbiIsInBhc3NIcmVmIiwic3BhbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/NavItems.tsx\n"));

/***/ })

});