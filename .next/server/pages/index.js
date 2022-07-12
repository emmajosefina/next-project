"use strict";
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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\next-project\\pages\\index.js";



function Header({
  title
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
    children: title ? title : "Default title"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 10
  }, this);
}

function HomePage() {
  const names = ["Ada Lovelace", "Grace Hopper", "Margaret Hamilton"];
  const {
    0: likes,
    1: setLikes
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);

  function handleClick() {
    setLikes(likes + 1);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Header, {
      title: "Develop. Preview. Ship. \uD83D\uDE80"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("ul", {
      children: names.map(name => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
        children: name
      }, name, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 11
      }, this))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
      onClick: handleClick,
      children: ["Like (", likes, ")"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7QUFFQSxTQUFTQyxNQUFULENBQWdCO0FBQUVDLEVBQUFBO0FBQUYsQ0FBaEIsRUFBMkI7QUFDekIsc0JBQU87QUFBQSxjQUFLQSxLQUFLLEdBQUdBLEtBQUgsR0FBVztBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFDRDs7QUFFYyxTQUFTQyxRQUFULEdBQW9CO0FBQ2pDLFFBQU1DLEtBQUssR0FBRyxDQUFDLGNBQUQsRUFBaUIsY0FBakIsRUFBaUMsbUJBQWpDLENBQWQ7QUFFQSxRQUFNO0FBQUEsT0FBQ0MsS0FBRDtBQUFBLE9BQVFDO0FBQVIsTUFBb0JOLCtDQUFRLENBQUMsQ0FBRCxDQUFsQzs7QUFFQSxXQUFTTyxXQUFULEdBQXVCO0FBQ3JCRCxJQUFBQSxRQUFRLENBQUNELEtBQUssR0FBRyxDQUFULENBQVI7QUFDRDs7QUFFRCxzQkFDRTtBQUFBLDRCQUNFLDhEQUFDLE1BQUQ7QUFBUSxXQUFLLEVBQUM7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRTtBQUFBLGdCQUNHRCxLQUFLLENBQUNJLEdBQU4sQ0FBV0MsSUFBRCxpQkFDVDtBQUFBLGtCQUFnQkE7QUFBaEIsU0FBU0EsSUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREQ7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkYsZUFRRTtBQUFRLGFBQU8sRUFBRUYsV0FBakI7QUFBQSwyQkFBcUNGLEtBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBWUQ7Ozs7Ozs7Ozs7QUMzQkQ7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxyXG5cclxuZnVuY3Rpb24gSGVhZGVyKHsgdGl0bGUgfSkge1xyXG4gIHJldHVybiA8aDE+e3RpdGxlID8gdGl0bGUgOiBcIkRlZmF1bHQgdGl0bGVcIn08L2gxPlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lUGFnZSgpIHtcclxuICBjb25zdCBuYW1lcyA9IFtcIkFkYSBMb3ZlbGFjZVwiLCBcIkdyYWNlIEhvcHBlclwiLCBcIk1hcmdhcmV0IEhhbWlsdG9uXCJdXHJcblxyXG4gIGNvbnN0IFtsaWtlcywgc2V0TGlrZXNdID0gdXNlU3RhdGUoMClcclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlQ2xpY2soKSB7XHJcbiAgICBzZXRMaWtlcyhsaWtlcyArIDEpXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPEhlYWRlciB0aXRsZT1cIkRldmVsb3AuIFByZXZpZXcuIFNoaXAuIPCfmoBcIiAvPlxyXG4gICAgICA8dWw+XHJcbiAgICAgICAge25hbWVzLm1hcCgobmFtZSkgPT4gKFxyXG4gICAgICAgICAgPGxpIGtleT17bmFtZX0+e25hbWV9PC9saT5cclxuICAgICAgICApKX1cclxuICAgICAgPC91bD5cclxuXHJcbiAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlQ2xpY2t9Pkxpa2UgKHtsaWtlc30pPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkhlYWRlciIsInRpdGxlIiwiSG9tZVBhZ2UiLCJuYW1lcyIsImxpa2VzIiwic2V0TGlrZXMiLCJoYW5kbGVDbGljayIsIm1hcCIsIm5hbWUiXSwic291cmNlUm9vdCI6IiJ9