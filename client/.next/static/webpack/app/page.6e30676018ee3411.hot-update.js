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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   navItemsData: function() { return /* binding */ navItemsData; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_Classes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/Classes */ \"(app-pages-browser)/./app/utils/Classes.ts\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* __next_internal_client_entry_do_not_use__ navItemsData,default auto */ \n\n\n\nconst navItemsData = [\n    {\n        name: \"Home\",\n        link: \"/\"\n    },\n    {\n        name: \"Courses\",\n        link: \"/courses\"\n    },\n    {\n        name: \"About\",\n        link: \"/about\"\n    },\n    {\n        name: \"Policy\",\n        link: \"/policy\"\n    },\n    {\n        name: \"FAQ\",\n        link: \"/faq\"\n    }\n];\nconst NavItems = (param)=>{\n    let { activeItem, isMobile } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex items-center gap-6\",\n        children: [\n            navItemsData.map((item, index)=>{\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    href: \"\".concat(item.link),\n                    className: (0,_utils_Classes__WEBPACK_IMPORTED_MODULE_2__.cn)(\"hidden sm:block sm:text-base md:text-lg font-[500] text-black dark:text-white hover:border-b-2 hover:border-pink-500\", {\n                        hidden: isMobile,\n                        \"dark:text-purple-800 \": activeItem === index\n                    }),\n                    children: item.name\n                }, index, false, {\n                    fileName: \"D:\\\\LMS\\\\client\\\\app\\\\components\\\\NavItems.tsx\",\n                    lineNumber: 38,\n                    columnNumber: 11\n                }, undefined);\n            }),\n            isMobile && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"sm:hidden mt-5\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full text-center py-6\",\n                        children: navItemsData.map((item, index)=>{\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                href: \"/\",\n                                passHref: true,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: [\n                                        \"className=\",\n                                        (0,_utils_Classes__WEBPACK_IMPORTED_MODULE_2__.cn)(\"hidden sm:block sm:text-base md:text-lg font-[500] text-black dark:text-white hover:border-b-2 hover:border-pink-500\", {\n                                            hidden: isMobile,\n                                            \"dark:text-purple-800 \": activeItem === index\n                                        })\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\LMS\\\\client\\\\app\\\\components\\\\NavItems.tsx\",\n                                    lineNumber: 60,\n                                    columnNumber: 21\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\LMS\\\\client\\\\app\\\\components\\\\NavItems.tsx\",\n                                lineNumber: 59,\n                                columnNumber: 19\n                            }, undefined);\n                        })\n                    }, void 0, false, {\n                        fileName: \"D:\\\\LMS\\\\client\\\\app\\\\components\\\\NavItems.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"D:\\\\LMS\\\\client\\\\app\\\\components\\\\NavItems.tsx\",\n                    lineNumber: 55,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\LMS\\\\client\\\\app\\\\components\\\\NavItems.tsx\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, undefined);\n};\n_c = NavItems;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavItems);\nvar _c;\n$RefreshReg$(_c, \"NavItems\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL05hdkl0ZW1zLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ21EO0FBQ2I7QUFDVDtBQU10QixNQUFNRyxlQUFlO0lBQzFCO1FBQ0VDLE1BQU07UUFDTkMsTUFBTTtJQUNSO0lBQ0E7UUFDRUQsTUFBTTtRQUNOQyxNQUFNO0lBQ1I7SUFDQTtRQUNFRCxNQUFNO1FBQ05DLE1BQU07SUFDUjtJQUNBO1FBQ0VELE1BQU07UUFDTkMsTUFBTTtJQUNSO0lBQ0E7UUFDRUQsTUFBTTtRQUNOQyxNQUFNO0lBQ1I7Q0FDRCxDQUFDO0FBRUYsTUFBTUMsV0FBNEI7UUFBQyxFQUFFQyxVQUFVLEVBQUVDLFFBQVEsRUFBRTtJQUN6RCxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTs7WUFDWlAsYUFBYVEsR0FBRyxDQUFDLENBQUNDLE1BQU1DO2dCQUN2QixxQkFDRSw4REFBQ1gsaURBQUlBO29CQUVIWSxNQUFNLEdBQWEsT0FBVkYsS0FBS1AsSUFBSTtvQkFDbEJLLFdBQVdULGtEQUFFQSxDQUNWLHdIQUNEO3dCQUNFYyxRQUFRUDt3QkFDUix5QkFBeUJELGVBQWVNO29CQUMxQzs4QkFHREQsS0FBS1IsSUFBSTttQkFWTFM7Ozs7O1lBYVg7WUFDQ0wsMEJBQ0M7MEJBQ0UsNEVBQUNDO29CQUFJQyxXQUFVOzhCQUNiLDRFQUFDRDt3QkFBSUMsV0FBVTtrQ0FDWlAsYUFBYVEsR0FBRyxDQUFDLENBQUNDLE1BQU1DOzRCQUN2QixxQkFDRSw4REFBQ1gsaURBQUlBO2dDQUFDWSxNQUFLO2dDQUFJRSxRQUFROzBDQUNyQiw0RUFBQ0M7O3dDQUFLO3dDQUVIaEIsa0RBQUVBLENBQ0Esd0hBQ0Q7NENBQ0VjLFFBQVFQOzRDQUNSLHlCQUF5QkQsZUFBZU07d0NBQzFDOzs7Ozs7Ozs7Ozs7d0JBS1Y7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9kO0tBOUNNUDtBQWdETiwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9OYXZJdGVtcy50c3g/NGYwYiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgY24gfSBmcm9tIFwiLi4vdXRpbHMvQ2xhc3Nlc1wiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgYWN0aXZlSXRlbTogbnVtYmVyO1xyXG4gIGlzTW9iaWxlOiBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbmF2SXRlbXNEYXRhID0gW1xyXG4gIHtcclxuICAgIG5hbWU6IFwiSG9tZVwiLFxyXG4gICAgbGluazogXCIvXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIkNvdXJzZXNcIixcclxuICAgIGxpbms6IFwiL2NvdXJzZXNcIixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiQWJvdXRcIixcclxuICAgIGxpbms6IFwiL2Fib3V0XCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIlBvbGljeVwiLFxyXG4gICAgbGluazogXCIvcG9saWN5XCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIkZBUVwiLFxyXG4gICAgbGluazogXCIvZmFxXCIsXHJcbiAgfSxcclxuXTtcclxuXHJcbmNvbnN0IE5hdkl0ZW1zOiBSZWFjdC5GQzxQcm9wcz4gPSAoeyBhY3RpdmVJdGVtLCBpc01vYmlsZSB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTZcIj5cclxuICAgICAge25hdkl0ZW1zRGF0YS5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgIGhyZWY9e2Ake2l0ZW0ubGlua31gfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NuKFxyXG4gICAgICAgICAgICAgIGBoaWRkZW4gc206YmxvY2sgc206dGV4dC1iYXNlIG1kOnRleHQtbGcgZm9udC1bNTAwXSB0ZXh0LWJsYWNrIGRhcms6dGV4dC13aGl0ZSBob3Zlcjpib3JkZXItYi0yIGhvdmVyOmJvcmRlci1waW5rLTUwMGAsXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaGlkZGVuOiBpc01vYmlsZSxcclxuICAgICAgICAgICAgICAgIFwiZGFyazp0ZXh0LXB1cnBsZS04MDAgXCI6IGFjdGl2ZUl0ZW0gPT09IGluZGV4LFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge2l0ZW0ubmFtZX1cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICApO1xyXG4gICAgICB9KX1cclxuICAgICAge2lzTW9iaWxlICYmIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbTpoaWRkZW4gbXQtNVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCB0ZXh0LWNlbnRlciBweS02XCI+XHJcbiAgICAgICAgICAgICAge25hdkl0ZW1zRGF0YS5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiIHBhc3NIcmVmPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVxyXG4gICAgICAgICAgICAgICAgICAgICAge2NuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBgaGlkZGVuIHNtOmJsb2NrIHNtOnRleHQtYmFzZSBtZDp0ZXh0LWxnIGZvbnQtWzUwMF0gdGV4dC1ibGFjayBkYXJrOnRleHQtd2hpdGUgaG92ZXI6Ym9yZGVyLWItMiBob3Zlcjpib3JkZXItcGluay01MDBgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGlkZGVuOiBpc01vYmlsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhcms6dGV4dC1wdXJwbGUtODAwIFwiOiBhY3RpdmVJdGVtID09PSBpbmRleCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2SXRlbXM7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsImNuIiwiTGluayIsIm5hdkl0ZW1zRGF0YSIsIm5hbWUiLCJsaW5rIiwiTmF2SXRlbXMiLCJhY3RpdmVJdGVtIiwiaXNNb2JpbGUiLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJocmVmIiwiaGlkZGVuIiwicGFzc0hyZWYiLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/NavItems.tsx\n"));

/***/ })

});