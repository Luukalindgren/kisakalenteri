"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction HomePage({ kisatArray  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n        children: kisatArray.map((kisa)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                children: kisa.Name\n            }, kisa.ID, false, {\n                fileName: \"C:\\\\Projektit\\\\Kisakalenteri\\\\pages\\\\index.js\",\n                lineNumber: 5,\n                columnNumber: 17\n            }, this))\n    }, void 0, false, {\n        fileName: \"C:\\\\Projektit\\\\Kisakalenteri\\\\pages\\\\index.js\",\n        lineNumber: 3,\n        columnNumber: 9\n    }, this);\n}\nasync function getStaticProps() {\n    const res = await fetch(\"https://discgolfmetrix.com/api.php?content=courses_list&country_code=FI&name=anink%\");\n    const kisat = await res.json();\n    const kisatArray = kisat.courses;\n    return {\n        props: {\n            kisatArray\n        }\n    };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomePage);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFBQSxTQUFTQSxRQUFRLENBQUMsRUFBRUMsVUFBVSxHQUFFLEVBQUU7SUFDOUIscUJBQ0ksOERBQUNDLElBQUU7a0JBQ0VELFVBQVUsQ0FBQ0UsR0FBRyxDQUFDLENBQUNDLElBQUksaUJBQ2pCLDhEQUFDQyxJQUFFOzBCQUFnQkQsSUFBSSxDQUFDRSxJQUFJO2VBQW5CRixJQUFJLENBQUNHLEVBQUU7Ozs7b0JBQWtCLENBQ3BDOzs7OztZQUNELENBQ1I7Q0FDSjtBQUVNLGVBQWVDLGNBQWMsR0FBRztJQUNuQyxNQUFNQyxHQUFHLEdBQUcsTUFBTUMsS0FBSyxDQUFDLHFGQUFxRixDQUFDO0lBQzlHLE1BQU1DLEtBQUssR0FBRyxNQUFNRixHQUFHLENBQUNHLElBQUksRUFBRTtJQUM5QixNQUFNWCxVQUFVLEdBQUdVLEtBQUssQ0FBQ0UsT0FBTztJQUVoQyxPQUFPO1FBQUVDLEtBQUssRUFBRTtZQUFFYixVQUFVO1NBQUU7S0FBRTtDQUNuQztBQUVELGlFQUFlRCxRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8va2lzYWthbGVudGVyaS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gSG9tZVBhZ2UoeyBraXNhdEFycmF5IH0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICB7a2lzYXRBcnJheS5tYXAoKGtpc2EpID0+IChcclxuICAgICAgICAgICAgICAgIDxsaSBrZXk9e2tpc2EuSUR9PntraXNhLk5hbWV9PC9saT5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgPC91bD5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vZGlzY2dvbGZtZXRyaXguY29tL2FwaS5waHA/Y29udGVudD1jb3Vyc2VzX2xpc3QmY291bnRyeV9jb2RlPUZJJm5hbWU9YW5pbmslJylcclxuICAgIGNvbnN0IGtpc2F0ID0gYXdhaXQgcmVzLmpzb24oKVxyXG4gICAgY29uc3Qga2lzYXRBcnJheSA9IGtpc2F0LmNvdXJzZXNcclxuXHJcbiAgICByZXR1cm4geyBwcm9wczogeyBraXNhdEFycmF5IH0gfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZSJdLCJuYW1lcyI6WyJIb21lUGFnZSIsImtpc2F0QXJyYXkiLCJ1bCIsIm1hcCIsImtpc2EiLCJsaSIsIk5hbWUiLCJJRCIsImdldFN0YXRpY1Byb3BzIiwicmVzIiwiZmV0Y2giLCJraXNhdCIsImpzb24iLCJjb3Vyc2VzIiwicHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();