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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/style */ \"(app-pages-browser)/./app/styles/style.ts\");\n/* harmony import */ var _barrel_optimize_names_VscWorkspaceTrusted_react_icons_vsc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=VscWorkspaceTrusted!=!react-icons/vsc */ \"(app-pages-browser)/./node_modules/react-icons/vsc/index.mjs\");\n/* harmony import */ var _utils_Classes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/Classes */ \"(app-pages-browser)/./app/utils/Classes.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst Verification = (props)=>{\n    _s();\n    const [invalidError, setInvalidError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [verifyNumber, setVerifyNumber] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        0: \"\",\n        1: \"\",\n        2: \"\",\n        3: \"\"\n    });\n    const inputRefs = [\n        (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null),\n        (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null),\n        (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null),\n        (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null)\n    ];\n    const handleInputChange = (index, value)=>{\n        setInvalidError(false);\n        const newVerifyNumber = {\n            ...verifyNumber,\n            [index]: value\n        };\n        if (value === \"\" && index > 0) {\n            var _inputRefs__current;\n            (_inputRefs__current = inputRefs[index - 1].current) === null || _inputRefs__current === void 0 ? void 0 : _inputRefs__current.focus();\n        } else if (value.length === 1 && index < 3) {\n            var _inputRefs__current1;\n            (_inputRefs__current1 = inputRefs[index + 1].current) === null || _inputRefs__current1 === void 0 ? void 0 : _inputRefs__current1.focus();\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: _styles_style__WEBPACK_IMPORTED_MODULE_2__.styles.title,\n                children: \"Verification\"\n            }, void 0, false, {\n                fileName: \"D:\\\\LMS\\\\client\\\\app\\\\components\\\\Verification.tsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"D:\\\\LMS\\\\client\\\\app\\\\components\\\\Verification.tsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full flex items-center justify-center mt-2\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-[80px] h-[80px] rounded-full bg-[#497df2] flex items-center justify-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_VscWorkspaceTrusted_react_icons_vsc__WEBPACK_IMPORTED_MODULE_4__.VscWorkspaceTrusted, {\n                        size: 40\n                    }, void 0, false, {\n                        fileName: \"D:\\\\LMS\\\\client\\\\app\\\\components\\\\Verification.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"D:\\\\LMS\\\\client\\\\app\\\\components\\\\Verification.tsx\",\n                    lineNumber: 49,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\LMS\\\\client\\\\app\\\\components\\\\Verification.tsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"D:\\\\LMS\\\\client\\\\app\\\\components\\\\Verification.tsx\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"D:\\\\LMS\\\\client\\\\app\\\\components\\\\Verification.tsx\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"lg:w-[70%] m-auto flex items-center justify-around\",\n                children: Object.keys(verifyNumber).map((key, index)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        ref: inputRefs[index],\n                        className: (0,_utils_Classes__WEBPACK_IMPORTED_MODULE_3__.cn)(\"w-[65px] h-[65px] bg-transparent border-[3px] rounded-[10px] flex items-center text-black dark:text-white justify-center text-[18px] font-Poppins outline-none text-center\", {\n                            \"shake border-red-500\": invalidError,\n                            \"dark:border-white border-[#0000004a]\": !invalidError\n                        }),\n                        maxLength: 1,\n                        value: verifyNumber[key],\n                        onChange: (e)=>handleInputChange(index, e.target.value)\n                    }, key, false, {\n                        fileName: \"D:\\\\LMS\\\\client\\\\app\\\\components\\\\Verification.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 13\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"D:\\\\LMS\\\\client\\\\app\\\\components\\\\Verification.tsx\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\LMS\\\\client\\\\app\\\\components\\\\Verification.tsx\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Verification, \"aSQ2KoXIsBi75Q4Tkr2s8iBth5s=\");\n_c = Verification;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Verification);\nvar _c;\n$RefreshReg$(_c, \"Verification\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL1ZlcmlmaWNhdGlvbi50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ2dEO0FBRVA7QUFDYTtBQUNoQjtBQWF0QyxNQUFNTSxlQUFnQyxDQUFDQzs7SUFDckMsTUFBTSxDQUFDQyxjQUFjQyxnQkFBZ0IsR0FBR1IsK0NBQVFBLENBQUM7SUFDakQsTUFBTSxDQUFDUyxjQUFjQyxnQkFBZ0IsR0FBR1YsK0NBQVFBLENBQWU7UUFDN0QsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztJQUNMO0lBQ0EsTUFBTVcsWUFBWTtRQUNoQlYsNkNBQU1BLENBQW1CO1FBQ3pCQSw2Q0FBTUEsQ0FBbUI7UUFDekJBLDZDQUFNQSxDQUFtQjtRQUN6QkEsNkNBQU1BLENBQW1CO0tBQzFCO0lBRUQsTUFBTVcsb0JBQW9CLENBQUNDLE9BQWVDO1FBQ3hDTixnQkFBZ0I7UUFDaEIsTUFBTU8sa0JBQWtCO1lBQUUsR0FBR04sWUFBWTtZQUFFLENBQUNJLE1BQU0sRUFBRUM7UUFBTTtRQUMxRCxJQUFJQSxVQUFVLE1BQU1ELFFBQVEsR0FBRztnQkFDN0JGO2FBQUFBLHNCQUFBQSxTQUFTLENBQUNFLFFBQVEsRUFBRSxDQUFDRyxPQUFPLGNBQTVCTCwwQ0FBQUEsb0JBQThCTSxLQUFLO1FBQ3JDLE9BQU8sSUFBSUgsTUFBTUksTUFBTSxLQUFLLEtBQUtMLFFBQVEsR0FBRztnQkFDMUNGO2FBQUFBLHVCQUFBQSxTQUFTLENBQUNFLFFBQVEsRUFBRSxDQUFDRyxPQUFPLGNBQTVCTCwyQ0FBQUEscUJBQThCTSxLQUFLO1FBQ3JDO0lBQ0Y7SUFDQSxxQkFDRSw4REFBQ0U7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNDO2dCQUFHRCxXQUFXbEIsaURBQU1BLENBQUNvQixLQUFLOzBCQUFFOzs7Ozs7MEJBRTdCLDhEQUFDQzs7Ozs7MEJBQ0QsOERBQUNKO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDRDtvQkFBSUMsV0FBVTs4QkFDYiw0RUFBQ2pCLDJHQUFtQkE7d0JBQUNxQixNQUFNOzs7Ozs7Ozs7Ozs7Ozs7OzBCQUcvQiw4REFBQ0Q7Ozs7OzBCQUNELDhEQUFDQTs7Ozs7MEJBQ0QsOERBQUNKO2dCQUFJQyxXQUFVOzBCQUNaSyxPQUFPQyxJQUFJLENBQUNqQixjQUFja0IsR0FBRyxDQUFDLENBQUNDLEtBQUtmO29CQUNuQyxxQkFDRSw4REFBQ2dCO3dCQUNDQyxNQUFLO3dCQUVMQyxLQUFLcEIsU0FBUyxDQUFDRSxNQUFNO3dCQUNyQk8sV0FBV2hCLGtEQUFFQSxDQUNYLDhLQUNBOzRCQUNFLHdCQUF3Qkc7NEJBQ3hCLHdDQUF3QyxDQUFDQTt3QkFDM0M7d0JBRUZ5QixXQUFXO3dCQUNYbEIsT0FBT0wsWUFBWSxDQUFDbUIsSUFBMEI7d0JBQzlDSyxVQUFVLENBQUNDLElBQU10QixrQkFBa0JDLE9BQU9xQixFQUFFQyxNQUFNLENBQUNyQixLQUFLO3VCQVhuRGM7Ozs7O2dCQWNYOzs7Ozs7Ozs7Ozs7QUFJUjtHQTNETXZCO0tBQUFBO0FBNkROLCtEQUFlQSxZQUFZQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL1ZlcmlmaWNhdGlvbi50c3g/ODE2NSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdG9hc3QgfSBmcm9tIFwicmVhY3QtaG90LXRvYXN0XCI7XHJcbmltcG9ydCB7IHN0eWxlcyB9IGZyb20gXCIuLi9zdHlsZXMvc3R5bGVcIjtcclxuaW1wb3J0IHsgVnNjV29ya3NwYWNlVHJ1c3RlZCB9IGZyb20gXCJyZWFjdC1pY29ucy92c2NcIjtcclxuaW1wb3J0IHsgY24gfSBmcm9tIFwiLi4vdXRpbHMvQ2xhc3Nlc1wiO1xyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gIHNldFJvdXRlOiAocm91dGU6IHN0cmluZykgPT4gdm9pZDtcclxuICBzZXRPcGVuOiAob3BlbjogYm9vbGVhbikgPT4gdm9pZDtcclxufVxyXG5cclxudHlwZSBWZXJpZnlOdW1iZXIgPSB7XHJcbiAgMDogc3RyaW5nO1xyXG4gIDE6IHN0cmluZztcclxuICAyOiBzdHJpbmc7XHJcbiAgMzogc3RyaW5nO1xyXG59O1xyXG5cclxuY29uc3QgVmVyaWZpY2F0aW9uOiBSZWFjdC5GQzxQcm9wcz4gPSAocHJvcHMpID0+IHtcclxuICBjb25zdCBbaW52YWxpZEVycm9yLCBzZXRJbnZhbGlkRXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFt2ZXJpZnlOdW1iZXIsIHNldFZlcmlmeU51bWJlcl0gPSB1c2VTdGF0ZTxWZXJpZnlOdW1iZXI+KHtcclxuICAgIDA6IFwiXCIsXHJcbiAgICAxOiBcIlwiLFxyXG4gICAgMjogXCJcIixcclxuICAgIDM6IFwiXCIsXHJcbiAgfSk7XHJcbiAgY29uc3QgaW5wdXRSZWZzID0gW1xyXG4gICAgdXNlUmVmPEhUTUxJbnB1dEVsZW1lbnQ+KG51bGwpLFxyXG4gICAgdXNlUmVmPEhUTUxJbnB1dEVsZW1lbnQ+KG51bGwpLFxyXG4gICAgdXNlUmVmPEhUTUxJbnB1dEVsZW1lbnQ+KG51bGwpLFxyXG4gICAgdXNlUmVmPEhUTUxJbnB1dEVsZW1lbnQ+KG51bGwpLFxyXG4gIF07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUlucHV0Q2hhbmdlID0gKGluZGV4OiBudW1iZXIsIHZhbHVlOiBzdHJpbmcpID0+IHtcclxuICAgIHNldEludmFsaWRFcnJvcihmYWxzZSk7XHJcbiAgICBjb25zdCBuZXdWZXJpZnlOdW1iZXIgPSB7IC4uLnZlcmlmeU51bWJlciwgW2luZGV4XTogdmFsdWUgfTtcclxuICAgIGlmICh2YWx1ZSA9PT0gXCJcIiAmJiBpbmRleCA+IDApIHtcclxuICAgICAgaW5wdXRSZWZzW2luZGV4IC0gMV0uY3VycmVudD8uZm9jdXMoKTtcclxuICAgIH0gZWxzZSBpZiAodmFsdWUubGVuZ3RoID09PSAxICYmIGluZGV4IDwgMykge1xyXG4gICAgICBpbnB1dFJlZnNbaW5kZXggKyAxXS5jdXJyZW50Py5mb2N1cygpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsXCI+XHJcbiAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+VmVyaWZpY2F0aW9uPC9oMT5cclxuXHJcbiAgICAgIDxiciAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBtdC0yXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LVs4MHB4XSBoLVs4MHB4XSByb3VuZGVkLWZ1bGwgYmctWyM0OTdkZjJdIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgICA8VnNjV29ya3NwYWNlVHJ1c3RlZCBzaXplPXs0MH0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxiciAvPlxyXG4gICAgICA8YnIgLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzp3LVs3MCVdIG0tYXV0byBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWFyb3VuZFwiPlxyXG4gICAgICAgIHtPYmplY3Qua2V5cyh2ZXJpZnlOdW1iZXIpLm1hcCgoa2V5LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIGtleT17a2V5fVxyXG4gICAgICAgICAgICAgIHJlZj17aW5wdXRSZWZzW2luZGV4XX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NuKFxyXG4gICAgICAgICAgICAgICAgXCJ3LVs2NXB4XSBoLVs2NXB4XSBiZy10cmFuc3BhcmVudCBib3JkZXItWzNweF0gcm91bmRlZC1bMTBweF0gZmxleCBpdGVtcy1jZW50ZXIgdGV4dC1ibGFjayBkYXJrOnRleHQtd2hpdGUganVzdGlmeS1jZW50ZXIgdGV4dC1bMThweF0gZm9udC1Qb3BwaW5zIG91dGxpbmUtbm9uZSB0ZXh0LWNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICBcInNoYWtlIGJvcmRlci1yZWQtNTAwXCI6IGludmFsaWRFcnJvcixcclxuICAgICAgICAgICAgICAgICAgXCJkYXJrOmJvcmRlci13aGl0ZSBib3JkZXItWyMwMDAwMDA0YV1cIjogIWludmFsaWRFcnJvcixcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIG1heExlbmd0aD17MX1cclxuICAgICAgICAgICAgICB2YWx1ZT17dmVyaWZ5TnVtYmVyW2tleSBhcyBrZXlvZiBWZXJpZnlOdW1iZXJdfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlSW5wdXRDaGFuZ2UoaW5kZXgsIGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFZlcmlmaWNhdGlvbjtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VSZWYiLCJzdHlsZXMiLCJWc2NXb3Jrc3BhY2VUcnVzdGVkIiwiY24iLCJWZXJpZmljYXRpb24iLCJwcm9wcyIsImludmFsaWRFcnJvciIsInNldEludmFsaWRFcnJvciIsInZlcmlmeU51bWJlciIsInNldFZlcmlmeU51bWJlciIsImlucHV0UmVmcyIsImhhbmRsZUlucHV0Q2hhbmdlIiwiaW5kZXgiLCJ2YWx1ZSIsIm5ld1ZlcmlmeU51bWJlciIsImN1cnJlbnQiLCJmb2N1cyIsImxlbmd0aCIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwidGl0bGUiLCJiciIsInNpemUiLCJPYmplY3QiLCJrZXlzIiwibWFwIiwia2V5IiwiaW5wdXQiLCJ0eXBlIiwicmVmIiwibWF4TGVuZ3RoIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/Verification.tsx\n"));

/***/ })

});