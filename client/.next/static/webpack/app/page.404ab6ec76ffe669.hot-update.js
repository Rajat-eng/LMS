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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   navItemsData: function() { return /* binding */ navItemsData; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_Classes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/Classes */ \"(app-pages-browser)/./app/utils/Classes.ts\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* __next_internal_client_entry_do_not_use__ navItemsData,default auto */ \n\n\n\nconst navItemsData = [\n    {\n        name: \"Home\",\n        link: \"/\"\n    },\n    {\n        name: \"Courses\",\n        link: \"/courses\"\n    },\n    {\n        name: \"About\",\n        link: \"/about\"\n    },\n    {\n        name: \"Policy\",\n        link: \"/policy\"\n    },\n    {\n        name: \"FAQ\",\n        link: \"/faq\"\n    }\n];\nconst NavItems = (param)=>{\n    let { activeItem, isMobile } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex items-center gap-6\",\n        children: [\n            navItemsData.map((item, index)=>{\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    href: \"\".concat(item.link),\n                    className: (0,_utils_Classes__WEBPACK_IMPORTED_MODULE_2__.cn)(\"hidden sm:block sm:text-base md:text-lg font-[500] text-black dark:text-white hover:border-b-2 hover:border-pink-500\", {\n                        hidden: isMobile,\n                        \"dark:text-purple-800 \": activeItem === index\n                    }),\n                    children: item.name\n                }, index, false, {\n                    fileName: \"D:\\\\LMS\\\\client\\\\app\\\\components\\\\NavItems.tsx\",\n                    lineNumber: 38,\n                    columnNumber: 11\n                }, undefined);\n            }),\n            isMobile && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"sm:hidden mt-5\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full text-center py-6\",\n                        children: navItemsData.map((item, index)=>{\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                href: \"/\",\n                                passHref: true,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: [\n                                        \"className=\",\n                                        (0,_utils_Classes__WEBPACK_IMPORTED_MODULE_2__.cn)(\"hidden sm:block sm:text-base md:text-lg font-[500] text-black dark:text-white hover:border-b-2 hover:border-pink-500\", {\n                                            hidden: isMobile,\n                                            \"dark:text-purple-800 \": activeItem === index\n                                        })\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\LMS\\\\client\\\\app\\\\components\\\\NavItems.tsx\",\n                                    lineNumber: 60,\n                                    columnNumber: 21\n                                }, undefined)\n                            }, index, false, {\n                                fileName: \"D:\\\\LMS\\\\client\\\\app\\\\components\\\\NavItems.tsx\",\n                                lineNumber: 59,\n                                columnNumber: 19\n                            }, undefined);\n                        })\n                    }, void 0, false, {\n                        fileName: \"D:\\\\LMS\\\\client\\\\app\\\\components\\\\NavItems.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"D:\\\\LMS\\\\client\\\\app\\\\components\\\\NavItems.tsx\",\n                    lineNumber: 55,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\LMS\\\\client\\\\app\\\\components\\\\NavItems.tsx\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, undefined);\n};\n_c = NavItems;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavItems);\nvar _c;\n$RefreshReg$(_c, \"NavItems\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL05hdkl0ZW1zLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ21EO0FBQ2I7QUFDVDtBQU10QixNQUFNRyxlQUFlO0lBQzFCO1FBQ0VDLE1BQU07UUFDTkMsTUFBTTtJQUNSO0lBQ0E7UUFDRUQsTUFBTTtRQUNOQyxNQUFNO0lBQ1I7SUFDQTtRQUNFRCxNQUFNO1FBQ05DLE1BQU07SUFDUjtJQUNBO1FBQ0VELE1BQU07UUFDTkMsTUFBTTtJQUNSO0lBQ0E7UUFDRUQsTUFBTTtRQUNOQyxNQUFNO0lBQ1I7Q0FDRCxDQUFDO0FBRUYsTUFBTUMsV0FBNEI7UUFBQyxFQUFFQyxVQUFVLEVBQUVDLFFBQVEsRUFBRTtJQUN6RCxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTs7WUFDWlAsYUFBYVEsR0FBRyxDQUFDLENBQUNDLE1BQU1DO2dCQUN2QixxQkFDRSw4REFBQ1gsaURBQUlBO29CQUVIWSxNQUFNLEdBQWEsT0FBVkYsS0FBS1AsSUFBSTtvQkFDbEJLLFdBQVdULGtEQUFFQSxDQUNWLHdIQUNEO3dCQUNFYyxRQUFRUDt3QkFDUix5QkFBeUJELGVBQWVNO29CQUMxQzs4QkFHREQsS0FBS1IsSUFBSTttQkFWTFM7Ozs7O1lBYVg7WUFDQ0wsMEJBQ0M7MEJBQ0UsNEVBQUNDO29CQUFJQyxXQUFVOzhCQUNiLDRFQUFDRDt3QkFBSUMsV0FBVTtrQ0FDWlAsYUFBYVEsR0FBRyxDQUFDLENBQUNDLE1BQU1DOzRCQUN2QixxQkFDRSw4REFBQ1gsaURBQUlBO2dDQUFDWSxNQUFLO2dDQUFJRSxRQUFROzBDQUNyQiw0RUFBQ0M7O3dDQUFLO3dDQUVIaEIsa0RBQUVBLENBQ0Esd0hBQ0Q7NENBQ0VjLFFBQVFQOzRDQUNSLHlCQUF5QkQsZUFBZU07d0NBQzFDOzs7Ozs7OytCQVJ1QkE7Ozs7O3dCQWFqQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT2Q7S0E5Q01QO0FBZ0ROLCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL05hdkl0ZW1zLnRzeD80ZjBiIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBjbiB9IGZyb20gXCIuLi91dGlscy9DbGFzc2VzXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICBhY3RpdmVJdGVtOiBudW1iZXI7XHJcbiAgaXNNb2JpbGU6IGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBuYXZJdGVtc0RhdGEgPSBbXHJcbiAge1xyXG4gICAgbmFtZTogXCJIb21lXCIsXHJcbiAgICBsaW5rOiBcIi9cIixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiQ291cnNlc1wiLFxyXG4gICAgbGluazogXCIvY291cnNlc1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJBYm91dFwiLFxyXG4gICAgbGluazogXCIvYWJvdXRcIixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiUG9saWN5XCIsXHJcbiAgICBsaW5rOiBcIi9wb2xpY3lcIixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiRkFRXCIsXHJcbiAgICBsaW5rOiBcIi9mYXFcIixcclxuICB9LFxyXG5dO1xyXG5cclxuY29uc3QgTmF2SXRlbXM6IFJlYWN0LkZDPFByb3BzPiA9ICh7IGFjdGl2ZUl0ZW0sIGlzTW9iaWxlIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtNlwiPlxyXG4gICAgICB7bmF2SXRlbXNEYXRhLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgaHJlZj17YCR7aXRlbS5saW5rfWB9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y24oXHJcbiAgICAgICAgICAgICAgYGhpZGRlbiBzbTpibG9jayBzbTp0ZXh0LWJhc2UgbWQ6dGV4dC1sZyBmb250LVs1MDBdIHRleHQtYmxhY2sgZGFyazp0ZXh0LXdoaXRlIGhvdmVyOmJvcmRlci1iLTIgaG92ZXI6Ym9yZGVyLXBpbmstNTAwYCxcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBoaWRkZW46IGlzTW9iaWxlLFxyXG4gICAgICAgICAgICAgICAgXCJkYXJrOnRleHQtcHVycGxlLTgwMCBcIjogYWN0aXZlSXRlbSA9PT0gaW5kZXgsXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7aXRlbS5uYW1lfVxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICk7XHJcbiAgICAgIH0pfVxyXG4gICAgICB7aXNNb2JpbGUgJiYgKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNtOmhpZGRlbiBtdC01XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHRleHQtY2VudGVyIHB5LTZcIj5cclxuICAgICAgICAgICAgICB7bmF2SXRlbXNEYXRhLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCIgcGFzc0hyZWYga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XHJcbiAgICAgICAgICAgICAgICAgICAgICB7Y24oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGBoaWRkZW4gc206YmxvY2sgc206dGV4dC1iYXNlIG1kOnRleHQtbGcgZm9udC1bNTAwXSB0ZXh0LWJsYWNrIGRhcms6dGV4dC13aGl0ZSBob3Zlcjpib3JkZXItYi0yIGhvdmVyOmJvcmRlci1waW5rLTUwMGAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRkZW46IGlzTW9iaWxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGFyazp0ZXh0LXB1cnBsZS04MDAgXCI6IGFjdGl2ZUl0ZW0gPT09IGluZGV4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZJdGVtcztcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiY24iLCJMaW5rIiwibmF2SXRlbXNEYXRhIiwibmFtZSIsImxpbmsiLCJOYXZJdGVtcyIsImFjdGl2ZUl0ZW0iLCJpc01vYmlsZSIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsIml0ZW0iLCJpbmRleCIsImhyZWYiLCJoaWRkZW4iLCJwYXNzSHJlZiIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/NavItems.tsx\n"));

/***/ })

});