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

/***/ "(app-pages-browser)/./app/components/Verification.tsx":
/*!*****************************************!*\
  !*** ./app/components/Verification.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/style */ \"(app-pages-browser)/./app/styles/style.ts\");\n/* harmony import */ var _barrel_optimize_names_VscWorkspaceTrusted_react_icons_vsc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=VscWorkspaceTrusted!=!react-icons/vsc */ \"(app-pages-browser)/./node_modules/react-icons/vsc/index.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst Verification = (props)=>{\n    _s();\n    const [invalidError, setInvalidError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [verifyNumber, setVerifyNumber] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        0: \"\",\n        1: \"\",\n        2: \"\",\n        3: \"\"\n    });\n    const inputRefs = [\n        (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null),\n        (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null),\n        (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null),\n        (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null)\n    ];\n    const handleInputChange = (index, value)=>{\n        setInvalidError(false);\n        const newVerifyNumber = {\n            ...verifyNumber,\n            [index]: value\n        };\n        if (value === \"\" && index > 0) {\n            var _inputRefs__current;\n            (_inputRefs__current = inputRefs[index - 1].current) === null || _inputRefs__current === void 0 ? void 0 : _inputRefs__current.focus();\n        } else if (value.length === 1 && index < 3) {\n            var _inputRefs__current1;\n            (_inputRefs__current1 = inputRefs[index + 1].current) === null || _inputRefs__current1 === void 0 ? void 0 : _inputRefs__current1.focus();\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: _styles_style__WEBPACK_IMPORTED_MODULE_2__.styles.title,\n                children: \"Verification\"\n            }, void 0, false, {\n                fileName: \"D:\\\\LMS\\\\client\\\\app\\\\components\\\\Verification.tsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"D:\\\\LMS\\\\client\\\\app\\\\components\\\\Verification.tsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full flex items-center justify-center mt-2\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-[80px] h-[80px] rounded-full bg-[#497df2] flex items-center justify-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_VscWorkspaceTrusted_react_icons_vsc__WEBPACK_IMPORTED_MODULE_3__.VscWorkspaceTrusted, {\n                        size: 40\n                    }, void 0, false, {\n                        fileName: \"D:\\\\LMS\\\\client\\\\app\\\\components\\\\Verification.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"D:\\\\LMS\\\\client\\\\app\\\\components\\\\Verification.tsx\",\n                    lineNumber: 49,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\LMS\\\\client\\\\app\\\\components\\\\Verification.tsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"D:\\\\LMS\\\\client\\\\app\\\\components\\\\Verification.tsx\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"D:\\\\LMS\\\\client\\\\app\\\\components\\\\Verification.tsx\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"lg:w-[70%] m-auto flex items-center justify-around\",\n                children: Object.keys(verifyNumber).map((key, index)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        ref: inputRefs[index],\n                        className: cn(\"w-[65px] h-[65px] bg-transparent border-[3px] rounded-[10px] flex items-center text-black dark:text-white justify-center text-[18px] font-Poppins outline-none text-center\", {\n                            \"shake border-red-500\": invalidError,\n                            \"dark:border-white border-[#0000004a]\": !invalidError\n                        })\n                    }, key, false, {\n                        fileName: \"D:\\\\LMS\\\\client\\\\app\\\\components\\\\Verification.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 13\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"D:\\\\LMS\\\\client\\\\app\\\\components\\\\Verification.tsx\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\LMS\\\\client\\\\app\\\\components\\\\Verification.tsx\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Verification, \"aSQ2KoXIsBi75Q4Tkr2s8iBth5s=\");\n_c = Verification;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Verification);\nvar _c;\n$RefreshReg$(_c, \"Verification\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL1ZlcmlmaWNhdGlvbi50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDZ0Q7QUFFUDtBQUNhO0FBY3RELE1BQU1LLGVBQWdDLENBQUNDOztJQUNyQyxNQUFNLENBQUNDLGNBQWNDLGdCQUFnQixHQUFHUCwrQ0FBUUEsQ0FBQztJQUNqRCxNQUFNLENBQUNRLGNBQWNDLGdCQUFnQixHQUFHVCwrQ0FBUUEsQ0FBZTtRQUM3RCxHQUFHO1FBQ0gsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO0lBQ0w7SUFDQSxNQUFNVSxZQUFZO1FBQ2hCVCw2Q0FBTUEsQ0FBbUI7UUFDekJBLDZDQUFNQSxDQUFtQjtRQUN6QkEsNkNBQU1BLENBQW1CO1FBQ3pCQSw2Q0FBTUEsQ0FBbUI7S0FDMUI7SUFFRCxNQUFNVSxvQkFBb0IsQ0FBQ0MsT0FBZUM7UUFDeENOLGdCQUFnQjtRQUNoQixNQUFNTyxrQkFBa0I7WUFBRSxHQUFHTixZQUFZO1lBQUUsQ0FBQ0ksTUFBTSxFQUFFQztRQUFNO1FBQzFELElBQUlBLFVBQVUsTUFBTUQsUUFBUSxHQUFHO2dCQUM3QkY7YUFBQUEsc0JBQUFBLFNBQVMsQ0FBQ0UsUUFBUSxFQUFFLENBQUNHLE9BQU8sY0FBNUJMLDBDQUFBQSxvQkFBOEJNLEtBQUs7UUFDckMsT0FBTyxJQUFJSCxNQUFNSSxNQUFNLEtBQUssS0FBS0wsUUFBUSxHQUFHO2dCQUMxQ0Y7YUFBQUEsdUJBQUFBLFNBQVMsQ0FBQ0UsUUFBUSxFQUFFLENBQUNHLE9BQU8sY0FBNUJMLDJDQUFBQSxxQkFBOEJNLEtBQUs7UUFDckM7SUFDRjtJQUNBLHFCQUNFLDhEQUFDRTtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0M7Z0JBQUdELFdBQVdqQixpREFBTUEsQ0FBQ21CLEtBQUs7MEJBQUU7Ozs7OzswQkFFN0IsOERBQUNDOzs7OzswQkFDRCw4REFBQ0o7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNEO29CQUFJQyxXQUFVOzhCQUNiLDRFQUFDaEIsMkdBQW1CQTt3QkFBQ29CLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7MEJBRy9CLDhEQUFDRDs7Ozs7MEJBQ0QsOERBQUNBOzs7OzswQkFDRCw4REFBQ0o7Z0JBQUlDLFdBQVU7MEJBQ1pLLE9BQU9DLElBQUksQ0FBQ2pCLGNBQWNrQixHQUFHLENBQUMsQ0FBQ0MsS0FBS2Y7b0JBQ25DLHFCQUNFLDhEQUFDZ0I7d0JBQ0NDLE1BQUs7d0JBRUxDLEtBQUtwQixTQUFTLENBQUNFLE1BQU07d0JBQ3JCTyxXQUFXWSxHQUNULDhLQUNBOzRCQUNFLHdCQUF3QnpCOzRCQUN4Qix3Q0FBd0MsQ0FBQ0E7d0JBQzNDO3VCQVBHcUI7Ozs7O2dCQVdYOzs7Ozs7Ozs7Ozs7QUFJUjtHQXhETXZCO0tBQUFBO0FBMEROLCtEQUFlQSxZQUFZQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL1ZlcmlmaWNhdGlvbi50c3g/ODE2NSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdG9hc3QgfSBmcm9tIFwicmVhY3QtaG90LXRvYXN0XCI7XHJcbmltcG9ydCB7IHN0eWxlcyB9IGZyb20gXCIuLi9zdHlsZXMvc3R5bGVcIjtcclxuaW1wb3J0IHsgVnNjV29ya3NwYWNlVHJ1c3RlZCB9IGZyb20gXCJyZWFjdC1pY29ucy92c2NcIjtcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgc2V0Um91dGU6IChyb3V0ZTogc3RyaW5nKSA9PiB2b2lkO1xyXG4gIHNldE9wZW46IChvcGVuOiBib29sZWFuKSA9PiB2b2lkO1xyXG59XHJcblxyXG50eXBlIFZlcmlmeU51bWJlciA9IHtcclxuICAwOiBzdHJpbmc7XHJcbiAgMTogc3RyaW5nO1xyXG4gIDI6IHN0cmluZztcclxuICAzOiBzdHJpbmc7XHJcbn07XHJcblxyXG5jb25zdCBWZXJpZmljYXRpb246IFJlYWN0LkZDPFByb3BzPiA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IFtpbnZhbGlkRXJyb3IsIHNldEludmFsaWRFcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3ZlcmlmeU51bWJlciwgc2V0VmVyaWZ5TnVtYmVyXSA9IHVzZVN0YXRlPFZlcmlmeU51bWJlcj4oe1xyXG4gICAgMDogXCJcIixcclxuICAgIDE6IFwiXCIsXHJcbiAgICAyOiBcIlwiLFxyXG4gICAgMzogXCJcIixcclxuICB9KTtcclxuICBjb25zdCBpbnB1dFJlZnMgPSBbXHJcbiAgICB1c2VSZWY8SFRNTElucHV0RWxlbWVudD4obnVsbCksXHJcbiAgICB1c2VSZWY8SFRNTElucHV0RWxlbWVudD4obnVsbCksXHJcbiAgICB1c2VSZWY8SFRNTElucHV0RWxlbWVudD4obnVsbCksXHJcbiAgICB1c2VSZWY8SFRNTElucHV0RWxlbWVudD4obnVsbCksXHJcbiAgXTtcclxuXHJcbiAgY29uc3QgaGFuZGxlSW5wdXRDaGFuZ2UgPSAoaW5kZXg6IG51bWJlciwgdmFsdWU6IHN0cmluZykgPT4ge1xyXG4gICAgc2V0SW52YWxpZEVycm9yKGZhbHNlKTtcclxuICAgIGNvbnN0IG5ld1ZlcmlmeU51bWJlciA9IHsgLi4udmVyaWZ5TnVtYmVyLCBbaW5kZXhdOiB2YWx1ZSB9O1xyXG4gICAgaWYgKHZhbHVlID09PSBcIlwiICYmIGluZGV4ID4gMCkge1xyXG4gICAgICBpbnB1dFJlZnNbaW5kZXggLSAxXS5jdXJyZW50Py5mb2N1cygpO1xyXG4gICAgfSBlbHNlIGlmICh2YWx1ZS5sZW5ndGggPT09IDEgJiYgaW5kZXggPCAzKSB7XHJcbiAgICAgIGlucHV0UmVmc1tpbmRleCArIDFdLmN1cnJlbnQ/LmZvY3VzKCk7XHJcbiAgICB9XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGxcIj5cclxuICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5WZXJpZmljYXRpb248L2gxPlxyXG5cclxuICAgICAgPGJyIC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG10LTJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctWzgwcHhdIGgtWzgwcHhdIHJvdW5kZWQtZnVsbCBiZy1bIzQ5N2RmMl0gZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgICAgIDxWc2NXb3Jrc3BhY2VUcnVzdGVkIHNpemU9ezQwfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGJyIC8+XHJcbiAgICAgIDxiciAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOnctWzcwJV0gbS1hdXRvIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYXJvdW5kXCI+XHJcbiAgICAgICAge09iamVjdC5rZXlzKHZlcmlmeU51bWJlcikubWFwKChrZXksIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAga2V5PXtrZXl9XHJcbiAgICAgICAgICAgICAgcmVmPXtpbnB1dFJlZnNbaW5kZXhdfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y24oXHJcbiAgICAgICAgICAgICAgICBcInctWzY1cHhdIGgtWzY1cHhdIGJnLXRyYW5zcGFyZW50IGJvcmRlci1bM3B4XSByb3VuZGVkLVsxMHB4XSBmbGV4IGl0ZW1zLWNlbnRlciB0ZXh0LWJsYWNrIGRhcms6dGV4dC13aGl0ZSBqdXN0aWZ5LWNlbnRlciB0ZXh0LVsxOHB4XSBmb250LVBvcHBpbnMgb3V0bGluZS1ub25lIHRleHQtY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIFwic2hha2UgYm9yZGVyLXJlZC01MDBcIjogaW52YWxpZEVycm9yLFxyXG4gICAgICAgICAgICAgICAgICBcImRhcms6Ym9yZGVyLXdoaXRlIGJvcmRlci1bIzAwMDAwMDRhXVwiOiAhaW52YWxpZEVycm9yLFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBWZXJpZmljYXRpb247XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlUmVmIiwic3R5bGVzIiwiVnNjV29ya3NwYWNlVHJ1c3RlZCIsIlZlcmlmaWNhdGlvbiIsInByb3BzIiwiaW52YWxpZEVycm9yIiwic2V0SW52YWxpZEVycm9yIiwidmVyaWZ5TnVtYmVyIiwic2V0VmVyaWZ5TnVtYmVyIiwiaW5wdXRSZWZzIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJpbmRleCIsInZhbHVlIiwibmV3VmVyaWZ5TnVtYmVyIiwiY3VycmVudCIsImZvY3VzIiwibGVuZ3RoIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJ0aXRsZSIsImJyIiwic2l6ZSIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJrZXkiLCJpbnB1dCIsInR5cGUiLCJyZWYiLCJjbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/Verification.tsx\n"));

/***/ })

});