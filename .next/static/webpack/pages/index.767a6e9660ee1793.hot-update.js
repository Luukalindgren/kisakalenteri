"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ HomePage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _public_LL_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/LL.png */ \"./public/LL.png\");\n// TODO-LISTA TÄRKEYSJÄRJESTYKSESSÄ:\n// - Muuta scraper.py siten, että se ajetaan aina kun sivu latautuu\n//   nyt se ajetaan vain kun ajetaan next dev/build/start... (KATSO package.json)\n// - Kalenteri, jotta päivän voi vaihtaa tulevaisuuteen.\n// - Päivän sääennusta ratakohtaisesti\n// - CSS\n// - Kirjautumissivu käyttäjille\n// - Tietokanta käyttäjätunnuksille\n// Kotisivu\n\n\n\nvar __N_SSG = true;\nfunction HomePage(props) {\n    var _this = this;\n    var kisat = props.kisat;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"main\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"logo-container\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    layout: \"fill\",\n                    src: _public_LL_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n                    className: \"logo\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Projektit\\\\Kisakalenteri\\\\pages\\\\index.js\",\n                    lineNumber: 21,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Projektit\\\\Kisakalenteri\\\\pages\\\\index.js\",\n                lineNumber: 20,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: \"u-list\",\n                    style: {},\n                    children: kisat.map(function(kisa) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"list-item\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    children: kisa.nimi\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Projektit\\\\Kisakalenteri\\\\pages\\\\index.js\",\n                                    lineNumber: 29,\n                                    columnNumber: 29\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: kisa.paikka\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Projektit\\\\Kisakalenteri\\\\pages\\\\index.js\",\n                                    lineNumber: 30,\n                                    columnNumber: 29\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                    children: kisa.aika\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Projektit\\\\Kisakalenteri\\\\pages\\\\index.js\",\n                                    lineNumber: 31,\n                                    columnNumber: 29\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: kisa.alue\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Projektit\\\\Kisakalenteri\\\\pages\\\\index.js\",\n                                    lineNumber: 32,\n                                    columnNumber: 29\n                                }, _this)\n                            ]\n                        }, kisa.ID, true, {\n                            fileName: \"C:\\\\Projektit\\\\Kisakalenteri\\\\pages\\\\index.js\",\n                            lineNumber: 26,\n                            columnNumber: 25\n                        }, _this);\n                    })\n                }, void 0, false, {\n                    fileName: \"C:\\\\Projektit\\\\Kisakalenteri\\\\pages\\\\index.js\",\n                    lineNumber: 24,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Projektit\\\\Kisakalenteri\\\\pages\\\\index.js\",\n                lineNumber: 23,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Projektit\\\\Kisakalenteri\\\\pages\\\\index.js\",\n        lineNumber: 19,\n        columnNumber: 9\n    }, this);\n};\n_c = HomePage;\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsb0NBQW9DO0FBQ3BDLG1FQUFtRTtBQUNuRSxpRkFBaUY7QUFDakYsd0RBQXdEO0FBQ3hELHNDQUFzQztBQUN0QyxRQUFRO0FBQ1IsZ0NBQWdDO0FBQ2hDLG1DQUFtQztBQUduQyxXQUFXO0FBRVg7QUFBOEI7QUFDSzs7QUFFcEIsU0FBU0UsUUFBUSxDQUFDQyxLQUFLLEVBQUU7O0lBQ3BDLElBQU1DLEtBQUssR0FBR0QsS0FBSyxDQUFDQyxLQUFLO0lBQ3pCLHFCQUNJLDhEQUFDQyxLQUFHO1FBQUNDLFNBQVMsRUFBQyxNQUFNOzswQkFDakIsOERBQUNELEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyxnQkFBZ0I7MEJBQzNCLDRFQUFDTixtREFBSztvQkFBQ08sTUFBTSxFQUFDLE1BQU07b0JBQUNDLEdBQUcsRUFBRVAsc0RBQUk7b0JBQUVLLFNBQVMsRUFBQyxNQUFNOzs7Ozt3QkFBRTs7Ozs7b0JBQ2hEOzBCQUNOLDhEQUFDRCxLQUFHO2dCQUFDQyxTQUFTLEVBQUMsV0FBVzswQkFDdEIsNEVBQUNHLElBQUU7b0JBQUNILFNBQVMsRUFBQyxRQUFRO29CQUFDSSxLQUFLLEVBQUUsRUFBRzs4QkFDNUJOLEtBQUssQ0FBQ08sR0FBRyxDQUFDLFNBQUNDLElBQUk7NkNBQ1osOERBQUNDLElBQUU7NEJBRUNQLFNBQVMsRUFBQyxXQUFXOzs4Q0FDckIsOERBQUNRLElBQUU7OENBQUVGLElBQUksQ0FBQ0csSUFBSTs7Ozs7eUNBQU07OENBQ3BCLDhEQUFDQyxHQUFDOzhDQUFFSixJQUFJLENBQUNLLE1BQU07Ozs7O3lDQUFLOzhDQUNwQiw4REFBQ0MsR0FBQzs4Q0FBRU4sSUFBSSxDQUFDTyxJQUFJOzs7Ozt5Q0FBSzs4Q0FDbEIsOERBQUNILEdBQUM7OENBQUVKLElBQUksQ0FBQ1EsSUFBSTs7Ozs7eUNBQUs7OzJCQUxiUixJQUFJLENBQUNTLEVBQUU7Ozs7aUNBTVg7cUJBQ1IsQ0FBQzs7Ozs7d0JBQ0Q7Ozs7O29CQUNIOzs7Ozs7WUFDSixDQUVUO0NBQ0o7QUF4QnVCbkIsS0FBQUEsUUFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRPRE8tTElTVEEgVMOEUktFWVNKw4RSSkVTVFlLU0VTU8OEOlxyXG4vLyAtIE11dXRhIHNjcmFwZXIucHkgc2l0ZW4sIGV0dMOkIHNlIGFqZXRhYW4gYWluYSBrdW4gc2l2dSBsYXRhdXR1dVxyXG4vLyAgIG55dCBzZSBhamV0YWFuIHZhaW4ga3VuIGFqZXRhYW4gbmV4dCBkZXYvYnVpbGQvc3RhcnQuLi4gKEtBVFNPIHBhY2thZ2UuanNvbilcclxuLy8gLSBLYWxlbnRlcmksIGpvdHRhIHDDpGl2w6RuIHZvaSB2YWlodGFhIHR1bGV2YWlzdXV0ZWVuLlxyXG4vLyAtIFDDpGl2w6RuIHPDpMOkZW5udXN0YSByYXRha29odGFpc2VzdGlcclxuLy8gLSBDU1NcclxuLy8gLSBLaXJqYXV0dW1pc3NpdnUga8OkeXR0w6RqaWxsZVxyXG4vLyAtIFRpZXRva2FudGEga8OkeXR0w6Rqw6R0dW5udWtzaWxsZVxyXG5cclxuXHJcbi8vIEtvdGlzaXZ1XHJcblxyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuaW1wb3J0IGxvZ28gZnJvbSAnLi4vcHVibGljL0xMLnBuZydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWVQYWdlKHByb3BzKSB7XHJcbiAgICBjb25zdCBraXNhdCA9IHByb3BzLmtpc2F0O1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWFpbic+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsb2dvLWNvbnRhaW5lcic+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2UgbGF5b3V0PVwiZmlsbFwiIHNyYz17bG9nb30gY2xhc3NOYW1lPVwibG9nb1wiLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT0ndS1saXN0JyBzdHlsZT17eyB9fT5cclxuICAgICAgICAgICAgICAgICAgICB7a2lzYXQubWFwKChraXNhKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17a2lzYS5JRH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxpc3QtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPntraXNhLm5pbWl9PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntraXNhLnBhaWtrYX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yj57a2lzYS5haWthfTwvYj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntraXNhLmFsdWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgKVxyXG59XHJcblxyXG4vLyBEYXRhbiBoYWtlbWluZW4gSlNPTjppc3RhXHJcbmltcG9ydCBmc3Byb21pc2VzIGZyb20gJ2ZzL3Byb21pc2VzJ1xyXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xyXG4gICAgY29uc3QgZmlsZVBhdGggPSBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgJ2RhdGEuanNvbicpO1xyXG4gICAgY29uc3QganNvbkRhdGEgPSBhd2FpdCBmc3Byb21pc2VzLnJlYWRGaWxlKGZpbGVQYXRoKTtcclxuICAgIGNvbnN0IG9iamVjdERhdGEgPSBKU09OLnBhcnNlKGpzb25EYXRhKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHByb3BzOiBvYmplY3REYXRhXHJcbiAgICB9XHJcbn0iXSwibmFtZXMiOlsiSW1hZ2UiLCJsb2dvIiwiSG9tZVBhZ2UiLCJwcm9wcyIsImtpc2F0IiwiZGl2IiwiY2xhc3NOYW1lIiwibGF5b3V0Iiwic3JjIiwidWwiLCJzdHlsZSIsIm1hcCIsImtpc2EiLCJsaSIsImgyIiwibmltaSIsInAiLCJwYWlra2EiLCJiIiwiYWlrYSIsImFsdWUiLCJJRCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});