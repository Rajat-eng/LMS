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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/style */ \"(app-pages-browser)/./app/styles/style.ts\");\n/* harmony import */ var _barrel_optimize_names_VscWorkspaceTrusted_react_icons_vsc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=VscWorkspaceTrusted!=!react-icons/vsc */ \"(app-pages-browser)/./node_modules/react-icons/vsc/index.mjs\");\n/* harmony import */ var _utils_Classes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/Classes */ \"(app-pages-browser)/./app/utils/Classes.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst Verification = (props)=>{\n    _s();\n    const [invalidError, setInvalidError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [verifyNumber, setVerifyNumber] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        0: \"\",\n        1: \"\",\n        2: \"\",\n        3: \"\"\n    });\n    const inputRefs = [\n        (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null),\n        (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null),\n        (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null),\n        (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null)\n    ];\n    const handleInputChange = (index, value)=>{\n        setInvalidError(false);\n        const newVerifyNumber = {\n            ...verifyNumber,\n            [index]: value\n        };\n        if (value === \"\" && index > 0) {\n            var _inputRefs__current;\n            console.log(\"dsadas\", value);\n            (_inputRefs__current = inputRefs[index - 1].current) === null || _inputRefs__current === void 0 ? void 0 : _inputRefs__current.focus();\n        } else if (value.length === 1 && index < 3) {\n            var _inputRefs__current1;\n            (_inputRefs__current1 = inputRefs[index + 1].current) === null || _inputRefs__current1 === void 0 ? void 0 : _inputRefs__current1.focus();\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: _styles_style__WEBPACK_IMPORTED_MODULE_2__.styles.title,\n                children: \"Verification\"\n            }, void 0, false, {\n                fileName: \"D:\\\\LMS\\\\client\\\\app\\\\components\\\\Verification.tsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"D:\\\\LMS\\\\client\\\\app\\\\components\\\\Verification.tsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full flex items-center justify-center mt-2\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-[80px] h-[80px] rounded-full bg-[#497df2] flex items-center justify-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_VscWorkspaceTrusted_react_icons_vsc__WEBPACK_IMPORTED_MODULE_4__.VscWorkspaceTrusted, {\n                        size: 40\n                    }, void 0, false, {\n                        fileName: \"D:\\\\LMS\\\\client\\\\app\\\\components\\\\Verification.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"D:\\\\LMS\\\\client\\\\app\\\\components\\\\Verification.tsx\",\n                    lineNumber: 50,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\LMS\\\\client\\\\app\\\\components\\\\Verification.tsx\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"D:\\\\LMS\\\\client\\\\app\\\\components\\\\Verification.tsx\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"D:\\\\LMS\\\\client\\\\app\\\\components\\\\Verification.tsx\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"lg:w-[70%] m-auto flex items-center justify-around\",\n                children: Object.keys(verifyNumber).map((key, index)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        ref: inputRefs[index],\n                        className: (0,_utils_Classes__WEBPACK_IMPORTED_MODULE_3__.cn)(\"w-[65px] h-[65px] bg-transparent border-[3px] rounded-[10px] flex items-center text-black dark:text-white justify-center text-[18px] font-Poppins outline-none text-center\", {\n                            \"shake border-red-500\": invalidError,\n                            \"dark:border-white border-[#0000004a]\": !invalidError\n                        }),\n                        maxLength: 1,\n                        value: verifyNumber[key],\n                        onChange: (e)=>handleInputChange(index, e.target.value)\n                    }, key, false, {\n                        fileName: \"D:\\\\LMS\\\\client\\\\app\\\\components\\\\Verification.tsx\",\n                        lineNumber: 59,\n                        columnNumber: 13\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"D:\\\\LMS\\\\client\\\\app\\\\components\\\\Verification.tsx\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"D:\\\\LMS\\\\client\\\\app\\\\components\\\\Verification.tsx\",\n                lineNumber: 77,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"D:\\\\LMS\\\\client\\\\app\\\\components\\\\Verification.tsx\",\n                lineNumber: 78,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full flex justify-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: _styles_style__WEBPACK_IMPORTED_MODULE_2__.styles.button,\n                    children: \"Verify OTP\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\LMS\\\\client\\\\app\\\\components\\\\Verification.tsx\",\n                    lineNumber: 80,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\LMS\\\\client\\\\app\\\\components\\\\Verification.tsx\",\n                lineNumber: 79,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"D:\\\\LMS\\\\client\\\\app\\\\components\\\\Verification.tsx\",\n                lineNumber: 82,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                className: \"text-center pt-4 font-Poppins text-[14px] text-black dark:text-white\",\n                children: [\n                    \"Go back to\",\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"text-[#2190ff] cursor-pointer\",\n                        onClick: ()=>props.setRoute(\"Sign-Up\"),\n                        children: \"Sign In ?\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\LMS\\\\client\\\\app\\\\components\\\\Verification.tsx\",\n                        lineNumber: 85,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\LMS\\\\client\\\\app\\\\components\\\\Verification.tsx\",\n                lineNumber: 83,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\LMS\\\\client\\\\app\\\\components\\\\Verification.tsx\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Verification, \"aSQ2KoXIsBi75Q4Tkr2s8iBth5s=\");\n_c = Verification;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Verification);\nvar _c;\n$RefreshReg$(_c, \"Verification\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL1ZlcmlmaWNhdGlvbi50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ2dEO0FBRVA7QUFDYTtBQUNoQjtBQWF0QyxNQUFNTSxlQUFnQyxDQUFDQzs7SUFDckMsTUFBTSxDQUFDQyxjQUFjQyxnQkFBZ0IsR0FBR1IsK0NBQVFBLENBQUM7SUFDakQsTUFBTSxDQUFDUyxjQUFjQyxnQkFBZ0IsR0FBR1YsK0NBQVFBLENBQWU7UUFDN0QsR0FBRztRQUNILEdBQUc7UUFDSCxHQUFHO1FBQ0gsR0FBRztJQUNMO0lBQ0EsTUFBTVcsWUFBWTtRQUNoQlYsNkNBQU1BLENBQW1CO1FBQ3pCQSw2Q0FBTUEsQ0FBbUI7UUFDekJBLDZDQUFNQSxDQUFtQjtRQUN6QkEsNkNBQU1BLENBQW1CO0tBQzFCO0lBRUQsTUFBTVcsb0JBQW9CLENBQUNDLE9BQWVDO1FBQ3hDTixnQkFBZ0I7UUFDaEIsTUFBTU8sa0JBQWtCO1lBQUUsR0FBR04sWUFBWTtZQUFFLENBQUNJLE1BQU0sRUFBRUM7UUFBTTtRQUMxRCxJQUFJQSxVQUFVLE1BQU1ELFFBQVEsR0FBRztnQkFFN0JGO1lBREFLLFFBQVFDLEdBQUcsQ0FBQyxVQUFVSDthQUN0Qkgsc0JBQUFBLFNBQVMsQ0FBQ0UsUUFBUSxFQUFFLENBQUNLLE9BQU8sY0FBNUJQLDBDQUFBQSxvQkFBOEJRLEtBQUs7UUFDckMsT0FBTyxJQUFJTCxNQUFNTSxNQUFNLEtBQUssS0FBS1AsUUFBUSxHQUFHO2dCQUMxQ0Y7YUFBQUEsdUJBQUFBLFNBQVMsQ0FBQ0UsUUFBUSxFQUFFLENBQUNLLE9BQU8sY0FBNUJQLDJDQUFBQSxxQkFBOEJRLEtBQUs7UUFDckM7SUFDRjtJQUNBLHFCQUNFLDhEQUFDRTtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0M7Z0JBQUdELFdBQVdwQixpREFBTUEsQ0FBQ3NCLEtBQUs7MEJBQUU7Ozs7OzswQkFFN0IsOERBQUNDOzs7OzswQkFDRCw4REFBQ0o7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNEO29CQUFJQyxXQUFVOzhCQUNiLDRFQUFDbkIsMkdBQW1CQTt3QkFBQ3VCLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7MEJBRy9CLDhEQUFDRDs7Ozs7MEJBQ0QsOERBQUNBOzs7OzswQkFDRCw4REFBQ0o7Z0JBQUlDLFdBQVU7MEJBQ1pLLE9BQU9DLElBQUksQ0FBQ25CLGNBQWNvQixHQUFHLENBQUMsQ0FBQ0MsS0FBS2pCO29CQUNuQyxxQkFDRSw4REFBQ2tCO3dCQUNDQyxNQUFLO3dCQUVMQyxLQUFLdEIsU0FBUyxDQUFDRSxNQUFNO3dCQUNyQlMsV0FBV2xCLGtEQUFFQSxDQUNYLDhLQUNBOzRCQUNFLHdCQUF3Qkc7NEJBQ3hCLHdDQUF3QyxDQUFDQTt3QkFDM0M7d0JBRUYyQixXQUFXO3dCQUNYcEIsT0FBT0wsWUFBWSxDQUFDcUIsSUFBMEI7d0JBQzlDSyxVQUFVLENBQUNDLElBQU14QixrQkFBa0JDLE9BQU91QixFQUFFQyxNQUFNLENBQUN2QixLQUFLO3VCQVhuRGdCOzs7OztnQkFjWDs7Ozs7OzBCQUVGLDhEQUFDTDs7Ozs7MEJBQ0QsOERBQUNBOzs7OzswQkFDRCw4REFBQ0o7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNnQjtvQkFBT2hCLFdBQVdwQixpREFBTUEsQ0FBQ29DLE1BQU07OEJBQUU7Ozs7Ozs7Ozs7OzBCQUVwQyw4REFBQ2I7Ozs7OzBCQUNELDhEQUFDYztnQkFBR2pCLFdBQVU7O29CQUF1RTtvQkFDeEU7a0NBQ1gsOERBQUNrQjt3QkFDQ2xCLFdBQVU7d0JBQ1ZtQixTQUFTLElBQU1uQyxNQUFNb0MsUUFBUSxDQUFDO2tDQUMvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTVQ7R0EzRU1yQztLQUFBQTtBQTZFTiwrREFBZUEsWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9WZXJpZmljYXRpb24udHN4PzgxNjUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSBcInJlYWN0LWhvdC10b2FzdFwiO1xyXG5pbXBvcnQgeyBzdHlsZXMgfSBmcm9tIFwiLi4vc3R5bGVzL3N0eWxlXCI7XHJcbmltcG9ydCB7IFZzY1dvcmtzcGFjZVRydXN0ZWQgfSBmcm9tIFwicmVhY3QtaWNvbnMvdnNjXCI7XHJcbmltcG9ydCB7IGNuIH0gZnJvbSBcIi4uL3V0aWxzL0NsYXNzZXNcIjtcclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICBzZXRSb3V0ZTogKHJvdXRlOiBzdHJpbmcpID0+IHZvaWQ7XHJcbiAgc2V0T3BlbjogKG9wZW46IGJvb2xlYW4pID0+IHZvaWQ7XHJcbn1cclxuXHJcbnR5cGUgVmVyaWZ5TnVtYmVyID0ge1xyXG4gIDA6IHN0cmluZztcclxuICAxOiBzdHJpbmc7XHJcbiAgMjogc3RyaW5nO1xyXG4gIDM6IHN0cmluZztcclxufTtcclxuXHJcbmNvbnN0IFZlcmlmaWNhdGlvbjogUmVhY3QuRkM8UHJvcHM+ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgW2ludmFsaWRFcnJvciwgc2V0SW52YWxpZEVycm9yXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbdmVyaWZ5TnVtYmVyLCBzZXRWZXJpZnlOdW1iZXJdID0gdXNlU3RhdGU8VmVyaWZ5TnVtYmVyPih7XHJcbiAgICAwOiBcIlwiLFxyXG4gICAgMTogXCJcIixcclxuICAgIDI6IFwiXCIsXHJcbiAgICAzOiBcIlwiLFxyXG4gIH0pO1xyXG4gIGNvbnN0IGlucHV0UmVmcyA9IFtcclxuICAgIHVzZVJlZjxIVE1MSW5wdXRFbGVtZW50PihudWxsKSxcclxuICAgIHVzZVJlZjxIVE1MSW5wdXRFbGVtZW50PihudWxsKSxcclxuICAgIHVzZVJlZjxIVE1MSW5wdXRFbGVtZW50PihudWxsKSxcclxuICAgIHVzZVJlZjxIVE1MSW5wdXRFbGVtZW50PihudWxsKSxcclxuICBdO1xyXG5cclxuICBjb25zdCBoYW5kbGVJbnB1dENoYW5nZSA9IChpbmRleDogbnVtYmVyLCB2YWx1ZTogc3RyaW5nKSA9PiB7XHJcbiAgICBzZXRJbnZhbGlkRXJyb3IoZmFsc2UpO1xyXG4gICAgY29uc3QgbmV3VmVyaWZ5TnVtYmVyID0geyAuLi52ZXJpZnlOdW1iZXIsIFtpbmRleF06IHZhbHVlIH07XHJcbiAgICBpZiAodmFsdWUgPT09IFwiXCIgJiYgaW5kZXggPiAwKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiZHNhZGFzXCIsIHZhbHVlKTtcclxuICAgICAgaW5wdXRSZWZzW2luZGV4IC0gMV0uY3VycmVudD8uZm9jdXMoKTtcclxuICAgIH0gZWxzZSBpZiAodmFsdWUubGVuZ3RoID09PSAxICYmIGluZGV4IDwgMykge1xyXG4gICAgICBpbnB1dFJlZnNbaW5kZXggKyAxXS5jdXJyZW50Py5mb2N1cygpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsXCI+XHJcbiAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+VmVyaWZpY2F0aW9uPC9oMT5cclxuXHJcbiAgICAgIDxiciAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBtdC0yXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LVs4MHB4XSBoLVs4MHB4XSByb3VuZGVkLWZ1bGwgYmctWyM0OTdkZjJdIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgICA8VnNjV29ya3NwYWNlVHJ1c3RlZCBzaXplPXs0MH0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxiciAvPlxyXG4gICAgICA8YnIgLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzp3LVs3MCVdIG0tYXV0byBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWFyb3VuZFwiPlxyXG4gICAgICAgIHtPYmplY3Qua2V5cyh2ZXJpZnlOdW1iZXIpLm1hcCgoa2V5LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIGtleT17a2V5fVxyXG4gICAgICAgICAgICAgIHJlZj17aW5wdXRSZWZzW2luZGV4XX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NuKFxyXG4gICAgICAgICAgICAgICAgXCJ3LVs2NXB4XSBoLVs2NXB4XSBiZy10cmFuc3BhcmVudCBib3JkZXItWzNweF0gcm91bmRlZC1bMTBweF0gZmxleCBpdGVtcy1jZW50ZXIgdGV4dC1ibGFjayBkYXJrOnRleHQtd2hpdGUganVzdGlmeS1jZW50ZXIgdGV4dC1bMThweF0gZm9udC1Qb3BwaW5zIG91dGxpbmUtbm9uZSB0ZXh0LWNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICBcInNoYWtlIGJvcmRlci1yZWQtNTAwXCI6IGludmFsaWRFcnJvcixcclxuICAgICAgICAgICAgICAgICAgXCJkYXJrOmJvcmRlci13aGl0ZSBib3JkZXItWyMwMDAwMDA0YV1cIjogIWludmFsaWRFcnJvcixcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIG1heExlbmd0aD17MX1cclxuICAgICAgICAgICAgICB2YWx1ZT17dmVyaWZ5TnVtYmVyW2tleSBhcyBrZXlvZiBWZXJpZnlOdW1iZXJdfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlSW5wdXRDaGFuZ2UoaW5kZXgsIGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8YnIgLz5cclxuICAgICAgPGJyIC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGZsZXgganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn0+VmVyaWZ5IE9UUDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGJyIC8+XHJcbiAgICAgIDxoNSBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBwdC00IGZvbnQtUG9wcGlucyB0ZXh0LVsxNHB4XSB0ZXh0LWJsYWNrIGRhcms6dGV4dC13aGl0ZVwiPlxyXG4gICAgICAgIEdvIGJhY2sgdG97XCIgXCJ9XHJcbiAgICAgICAgPHNwYW5cclxuICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtWyMyMTkwZmZdIGN1cnNvci1wb2ludGVyXCJcclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHByb3BzLnNldFJvdXRlKFwiU2lnbi1VcFwiKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBTaWduIEluID9cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgIDwvaDU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVmVyaWZpY2F0aW9uO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZVJlZiIsInN0eWxlcyIsIlZzY1dvcmtzcGFjZVRydXN0ZWQiLCJjbiIsIlZlcmlmaWNhdGlvbiIsInByb3BzIiwiaW52YWxpZEVycm9yIiwic2V0SW52YWxpZEVycm9yIiwidmVyaWZ5TnVtYmVyIiwic2V0VmVyaWZ5TnVtYmVyIiwiaW5wdXRSZWZzIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJpbmRleCIsInZhbHVlIiwibmV3VmVyaWZ5TnVtYmVyIiwiY29uc29sZSIsImxvZyIsImN1cnJlbnQiLCJmb2N1cyIsImxlbmd0aCIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwidGl0bGUiLCJiciIsInNpemUiLCJPYmplY3QiLCJrZXlzIiwibWFwIiwia2V5IiwiaW5wdXQiLCJ0eXBlIiwicmVmIiwibWF4TGVuZ3RoIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwiYnV0dG9uIiwiaDUiLCJzcGFuIiwib25DbGljayIsInNldFJvdXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/Verification.tsx\n"));

/***/ })

});