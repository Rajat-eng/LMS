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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/style */ \"(app-pages-browser)/./app/styles/style.ts\");\n/* harmony import */ var _barrel_optimize_names_VscWorkspaceTrusted_react_icons_vsc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=VscWorkspaceTrusted!=!react-icons/vsc */ \"(app-pages-browser)/./node_modules/react-icons/vsc/index.mjs\");\n/* harmony import */ var _utils_Classes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/Classes */ \"(app-pages-browser)/./app/utils/Classes.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst Verification = (props)=>{\n    _s();\n    const [invalidError, setInvalidError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [verifyNumber, setVerifyNumber] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        0: \"\",\n        1: \"\",\n        2: \"\",\n        3: \"\"\n    });\n    const inputRefs = [\n        (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null),\n        (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null),\n        (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null),\n        (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null)\n    ];\n    const handleInputChange = (index, value)=>{\n        setInvalidError(false);\n        const newVerifyNumber = {\n            ...verifyNumber,\n            [index]: value\n        };\n        if (value === \"\" && index > 0) {\n            var _inputRefs__current;\n            console.log(\"dsadas\", value);\n            (_inputRefs__current = inputRefs[index - 1].current) === null || _inputRefs__current === void 0 ? void 0 : _inputRefs__current.focus();\n        } else if (value.length === 1 && index < 3) {\n            var _inputRefs__current1;\n            (_inputRefs__current1 = inputRefs[index + 1].current) === null || _inputRefs__current1 === void 0 ? void 0 : _inputRefs__current1.focus();\n        }\n        setVerifyNumber(newVerifyNumber);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: _styles_style__WEBPACK_IMPORTED_MODULE_2__.styles.title,\n                children: \"Verification\"\n            }, void 0, false, {\n                fileName: \"D:\\\\LMS\\\\client\\\\app\\\\components\\\\Verification.tsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"D:\\\\LMS\\\\client\\\\app\\\\components\\\\Verification.tsx\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full flex items-center justify-center mt-2\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-[80px] h-[80px] rounded-full bg-[#497df2] flex items-center justify-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_VscWorkspaceTrusted_react_icons_vsc__WEBPACK_IMPORTED_MODULE_4__.VscWorkspaceTrusted, {\n                        size: 40\n                    }, void 0, false, {\n                        fileName: \"D:\\\\LMS\\\\client\\\\app\\\\components\\\\Verification.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"D:\\\\LMS\\\\client\\\\app\\\\components\\\\Verification.tsx\",\n                    lineNumber: 51,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\LMS\\\\client\\\\app\\\\components\\\\Verification.tsx\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"D:\\\\LMS\\\\client\\\\app\\\\components\\\\Verification.tsx\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"D:\\\\LMS\\\\client\\\\app\\\\components\\\\Verification.tsx\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"lg:w-[70%] m-auto flex items-center justify-around\",\n                children: Object.keys(verifyNumber).map((key, index)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        ref: inputRefs[index],\n                        className: (0,_utils_Classes__WEBPACK_IMPORTED_MODULE_3__.cn)(\"w-[65px] h-[65px] bg-transparent border-[3px] rounded-[10px] flex items-center text-black dark:text-white justify-center text-[18px] font-Poppins outline-none text-center\", {\n                            \"shake border-red-500\": invalidError,\n                            \"dark:border-white border-[#0000004a]\": !invalidError\n                        }),\n                        maxLength: 1,\n                        value: verifyNumber[key],\n                        onChange: (e)=>handleInputChange(index, e.target.value)\n                    }, key, false, {\n                        fileName: \"D:\\\\LMS\\\\client\\\\app\\\\components\\\\Verification.tsx\",\n                        lineNumber: 60,\n                        columnNumber: 13\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"D:\\\\LMS\\\\client\\\\app\\\\components\\\\Verification.tsx\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"D:\\\\LMS\\\\client\\\\app\\\\components\\\\Verification.tsx\",\n                lineNumber: 78,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"D:\\\\LMS\\\\client\\\\app\\\\components\\\\Verification.tsx\",\n                lineNumber: 79,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full flex justify-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: _styles_style__WEBPACK_IMPORTED_MODULE_2__.styles.button,\n                    children: \"Verify OTP\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\LMS\\\\client\\\\app\\\\components\\\\Verification.tsx\",\n                    lineNumber: 81,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\LMS\\\\client\\\\app\\\\components\\\\Verification.tsx\",\n                lineNumber: 80,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"D:\\\\LMS\\\\client\\\\app\\\\components\\\\Verification.tsx\",\n                lineNumber: 83,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                className: \"text-center pt-4 font-Poppins text-[14px] text-black dark:text-white\",\n                children: [\n                    \"Go back to\",\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"text-[#2190ff] cursor-pointer\",\n                        onClick: ()=>props.setRoute(\"Sign-Up\"),\n                        children: \"Sign In ?\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\LMS\\\\client\\\\app\\\\components\\\\Verification.tsx\",\n                        lineNumber: 86,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\LMS\\\\client\\\\app\\\\components\\\\Verification.tsx\",\n                lineNumber: 84,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\LMS\\\\client\\\\app\\\\components\\\\Verification.tsx\",\n        lineNumber: 46,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Verification, \"aSQ2KoXIsBi75Q4Tkr2s8iBth5s=\");\n_c = Verification;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Verification);\nvar _c;\n$RefreshReg$(_c, \"Verification\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL1ZlcmlmaWNhdGlvbi50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ2dEO0FBRVA7QUFDYTtBQUNoQjtBQWF0QyxNQUFNTSxlQUFnQyxDQUFDQzs7SUFDckMsTUFBTSxDQUFDQyxjQUFjQyxnQkFBZ0IsR0FBR1IsK0NBQVFBLENBQVU7SUFDMUQsTUFBTSxDQUFDUyxjQUFjQyxnQkFBZ0IsR0FBR1YsK0NBQVFBLENBQWU7UUFDN0QsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztJQUNMO0lBQ0EsTUFBTVcsWUFBWTtRQUNoQlYsNkNBQU1BLENBQW1CO1FBQ3pCQSw2Q0FBTUEsQ0FBbUI7UUFDekJBLDZDQUFNQSxDQUFtQjtRQUN6QkEsNkNBQU1BLENBQW1CO0tBQzFCO0lBRUQsTUFBTVcsb0JBQW9CLENBQUNDLE9BQWVDO1FBQ3hDTixnQkFBZ0I7UUFDaEIsTUFBTU8sa0JBQWtCO1lBQUUsR0FBR04sWUFBWTtZQUFFLENBQUNJLE1BQU0sRUFBRUM7UUFBTTtRQUMxRCxJQUFJQSxVQUFVLE1BQU1ELFFBQVEsR0FBRztnQkFFN0JGO1lBREFLLFFBQVFDLEdBQUcsQ0FBQyxVQUFVSDthQUN0Qkgsc0JBQUFBLFNBQVMsQ0FBQ0UsUUFBUSxFQUFFLENBQUNLLE9BQU8sY0FBNUJQLDBDQUFBQSxvQkFBOEJRLEtBQUs7UUFDckMsT0FBTyxJQUFJTCxNQUFNTSxNQUFNLEtBQUssS0FBS1AsUUFBUSxHQUFHO2dCQUMxQ0Y7YUFBQUEsdUJBQUFBLFNBQVMsQ0FBQ0UsUUFBUSxFQUFFLENBQUNLLE9BQU8sY0FBNUJQLDJDQUFBQSxxQkFBOEJRLEtBQUs7UUFDckM7UUFDQVQsZ0JBQWdCSztJQUNsQjtJQUNBLHFCQUNFLDhEQUFDTTtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0M7Z0JBQUdELFdBQVdwQixpREFBTUEsQ0FBQ3NCLEtBQUs7MEJBQUU7Ozs7OzswQkFFN0IsOERBQUNDOzs7OzswQkFDRCw4REFBQ0o7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNEO29CQUFJQyxXQUFVOzhCQUNiLDRFQUFDbkIsMkdBQW1CQTt3QkFBQ3VCLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7MEJBRy9CLDhEQUFDRDs7Ozs7MEJBQ0QsOERBQUNBOzs7OzswQkFDRCw4REFBQ0o7Z0JBQUlDLFdBQVU7MEJBQ1pLLE9BQU9DLElBQUksQ0FBQ25CLGNBQWNvQixHQUFHLENBQUMsQ0FBQ0MsS0FBS2pCO29CQUNuQyxxQkFDRSw4REFBQ2tCO3dCQUNDQyxNQUFLO3dCQUVMQyxLQUFLdEIsU0FBUyxDQUFDRSxNQUFNO3dCQUNyQlMsV0FBV2xCLGtEQUFFQSxDQUNYLDhLQUNBOzRCQUNFLHdCQUF3Qkc7NEJBQ3hCLHdDQUF3QyxDQUFDQTt3QkFDM0M7d0JBRUYyQixXQUFXO3dCQUNYcEIsT0FBT0wsWUFBWSxDQUFDcUIsSUFBMEI7d0JBQzlDSyxVQUFVLENBQUNDLElBQU14QixrQkFBa0JDLE9BQU91QixFQUFFQyxNQUFNLENBQUN2QixLQUFLO3VCQVhuRGdCOzs7OztnQkFjWDs7Ozs7OzBCQUVGLDhEQUFDTDs7Ozs7MEJBQ0QsOERBQUNBOzs7OzswQkFDRCw4REFBQ0o7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNnQjtvQkFBT2hCLFdBQVdwQixpREFBTUEsQ0FBQ29DLE1BQU07OEJBQUU7Ozs7Ozs7Ozs7OzBCQUVwQyw4REFBQ2I7Ozs7OzBCQUNELDhEQUFDYztnQkFBR2pCLFdBQVU7O29CQUF1RTtvQkFDeEU7a0NBQ1gsOERBQUNrQjt3QkFDQ2xCLFdBQVU7d0JBQ1ZtQixTQUFTLElBQU1uQyxNQUFNb0MsUUFBUSxDQUFDO2tDQUMvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTVQ7R0E1RU1yQztLQUFBQTtBQThFTiwrREFBZUEsWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9WZXJpZmljYXRpb24udHN4PzgxNjUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSBcInJlYWN0LWhvdC10b2FzdFwiO1xyXG5pbXBvcnQgeyBzdHlsZXMgfSBmcm9tIFwiLi4vc3R5bGVzL3N0eWxlXCI7XHJcbmltcG9ydCB7IFZzY1dvcmtzcGFjZVRydXN0ZWQgfSBmcm9tIFwicmVhY3QtaWNvbnMvdnNjXCI7XHJcbmltcG9ydCB7IGNuIH0gZnJvbSBcIi4uL3V0aWxzL0NsYXNzZXNcIjtcclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICBzZXRSb3V0ZTogKHJvdXRlOiBzdHJpbmcpID0+IHZvaWQ7XHJcbiAgc2V0T3BlbjogKG9wZW46IGJvb2xlYW4pID0+IHZvaWQ7XHJcbn1cclxuXHJcbmludGVyZmFjZSBWZXJpZnlOdW1iZXIge1xyXG4gIDA6IHN0cmluZztcclxuICAxOiBzdHJpbmc7XHJcbiAgMjogc3RyaW5nO1xyXG4gIDM6IHN0cmluZztcclxufVxyXG5cclxuY29uc3QgVmVyaWZpY2F0aW9uOiBSZWFjdC5GQzxQcm9wcz4gPSAocHJvcHMpID0+IHtcclxuICBjb25zdCBbaW52YWxpZEVycm9yLCBzZXRJbnZhbGlkRXJyb3JdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gIGNvbnN0IFt2ZXJpZnlOdW1iZXIsIHNldFZlcmlmeU51bWJlcl0gPSB1c2VTdGF0ZTxWZXJpZnlOdW1iZXI+KHtcclxuICAgIDA6IFwiXCIsXHJcbiAgICAxOiBcIlwiLFxyXG4gICAgMjogXCJcIixcclxuICAgIDM6IFwiXCIsXHJcbiAgfSk7XHJcbiAgY29uc3QgaW5wdXRSZWZzID0gW1xyXG4gICAgdXNlUmVmPEhUTUxJbnB1dEVsZW1lbnQ+KG51bGwpLFxyXG4gICAgdXNlUmVmPEhUTUxJbnB1dEVsZW1lbnQ+KG51bGwpLFxyXG4gICAgdXNlUmVmPEhUTUxJbnB1dEVsZW1lbnQ+KG51bGwpLFxyXG4gICAgdXNlUmVmPEhUTUxJbnB1dEVsZW1lbnQ+KG51bGwpLFxyXG4gIF07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUlucHV0Q2hhbmdlID0gKGluZGV4OiBudW1iZXIsIHZhbHVlOiBzdHJpbmcpID0+IHtcclxuICAgIHNldEludmFsaWRFcnJvcihmYWxzZSk7XHJcbiAgICBjb25zdCBuZXdWZXJpZnlOdW1iZXIgPSB7IC4uLnZlcmlmeU51bWJlciwgW2luZGV4XTogdmFsdWUgfTtcclxuICAgIGlmICh2YWx1ZSA9PT0gXCJcIiAmJiBpbmRleCA+IDApIHtcclxuICAgICAgY29uc29sZS5sb2coXCJkc2FkYXNcIiwgdmFsdWUpO1xyXG4gICAgICBpbnB1dFJlZnNbaW5kZXggLSAxXS5jdXJyZW50Py5mb2N1cygpO1xyXG4gICAgfSBlbHNlIGlmICh2YWx1ZS5sZW5ndGggPT09IDEgJiYgaW5kZXggPCAzKSB7XHJcbiAgICAgIGlucHV0UmVmc1tpbmRleCArIDFdLmN1cnJlbnQ/LmZvY3VzKCk7XHJcbiAgICB9XHJcbiAgICBzZXRWZXJpZnlOdW1iZXIobmV3VmVyaWZ5TnVtYmVyKTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbFwiPlxyXG4gICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PlZlcmlmaWNhdGlvbjwvaDE+XHJcblxyXG4gICAgICA8YnIgLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbXQtMlwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1bODBweF0gaC1bODBweF0gcm91bmRlZC1mdWxsIGJnLVsjNDk3ZGYyXSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICAgICAgPFZzY1dvcmtzcGFjZVRydXN0ZWQgc2l6ZT17NDB9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8YnIgLz5cclxuICAgICAgPGJyIC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6dy1bNzAlXSBtLWF1dG8gZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1hcm91bmRcIj5cclxuICAgICAgICB7T2JqZWN0LmtleXModmVyaWZ5TnVtYmVyKS5tYXAoKGtleSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBrZXk9e2tleX1cclxuICAgICAgICAgICAgICByZWY9e2lucHV0UmVmc1tpbmRleF19XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbihcclxuICAgICAgICAgICAgICAgIFwidy1bNjVweF0gaC1bNjVweF0gYmctdHJhbnNwYXJlbnQgYm9yZGVyLVszcHhdIHJvdW5kZWQtWzEwcHhdIGZsZXggaXRlbXMtY2VudGVyIHRleHQtYmxhY2sgZGFyazp0ZXh0LXdoaXRlIGp1c3RpZnktY2VudGVyIHRleHQtWzE4cHhdIGZvbnQtUG9wcGlucyBvdXRsaW5lLW5vbmUgdGV4dC1jZW50ZXJcIixcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgXCJzaGFrZSBib3JkZXItcmVkLTUwMFwiOiBpbnZhbGlkRXJyb3IsXHJcbiAgICAgICAgICAgICAgICAgIFwiZGFyazpib3JkZXItd2hpdGUgYm9yZGVyLVsjMDAwMDAwNGFdXCI6ICFpbnZhbGlkRXJyb3IsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICBtYXhMZW5ndGg9ezF9XHJcbiAgICAgICAgICAgICAgdmFsdWU9e3ZlcmlmeU51bWJlcltrZXkgYXMga2V5b2YgVmVyaWZ5TnVtYmVyXX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUlucHV0Q2hhbmdlKGluZGV4LCBlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGJyIC8+XHJcbiAgICAgIDxiciAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBmbGV4IGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b259PlZlcmlmeSBPVFA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxiciAvPlxyXG4gICAgICA8aDUgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgcHQtNCBmb250LVBvcHBpbnMgdGV4dC1bMTRweF0gdGV4dC1ibGFjayBkYXJrOnRleHQtd2hpdGVcIj5cclxuICAgICAgICBHbyBiYWNrIHRve1wiIFwifVxyXG4gICAgICAgIDxzcGFuXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LVsjMjE5MGZmXSBjdXJzb3ItcG9pbnRlclwiXHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBwcm9wcy5zZXRSb3V0ZShcIlNpZ24tVXBcIil9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgU2lnbiBJbiA/XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICA8L2g1PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFZlcmlmaWNhdGlvbjtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VSZWYiLCJzdHlsZXMiLCJWc2NXb3Jrc3BhY2VUcnVzdGVkIiwiY24iLCJWZXJpZmljYXRpb24iLCJwcm9wcyIsImludmFsaWRFcnJvciIsInNldEludmFsaWRFcnJvciIsInZlcmlmeU51bWJlciIsInNldFZlcmlmeU51bWJlciIsImlucHV0UmVmcyIsImhhbmRsZUlucHV0Q2hhbmdlIiwiaW5kZXgiLCJ2YWx1ZSIsIm5ld1ZlcmlmeU51bWJlciIsImNvbnNvbGUiLCJsb2ciLCJjdXJyZW50IiwiZm9jdXMiLCJsZW5ndGgiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsInRpdGxlIiwiYnIiLCJzaXplIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsImtleSIsImlucHV0IiwidHlwZSIsInJlZiIsIm1heExlbmd0aCIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsImJ1dHRvbiIsImg1Iiwic3BhbiIsIm9uQ2xpY2siLCJzZXRSb3V0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/Verification.tsx\n"));

/***/ })

});