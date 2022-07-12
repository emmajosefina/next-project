"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ HomePage; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\next-project\\pages\\index.js",
    _s = $RefreshSig$();




function Header(_ref) {
  var title = _ref.title;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
    children: title ? title : "Default title"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 10
  }, this);
}

_c = Header;
function HomePage() {
  _s();

  var _this = this;

  var names = ["Ada Lovelace", "Grace Hopper", "Margaret Hamilton"];

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
      likes = _useState[0],
      setLikes = _useState[1];

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
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
        children: "Hej"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, this), names.map(function (name) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
          children: name
        }, name, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 11
        }, _this);
      })]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
      onClick: handleClick,
      children: ["Like (", likes, ")"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 5
  }, this);
}

_s(HomePage, "m4sdoi624sGASZMfyLgbxubRP0c=");

_c2 = HomePage;

var _c, _c2;

$RefreshReg$(_c, "Header");
$RefreshReg$(_c2, "HomePage");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNDVjYzg5ZTY1NmFiMzU3Zjc3NzkuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7O0FBRUEsU0FBU0MsTUFBVCxPQUEyQjtBQUFBLE1BQVRDLEtBQVMsUUFBVEEsS0FBUztBQUN6QixzQkFBTztBQUFBLGNBQUtBLEtBQUssR0FBR0EsS0FBSCxHQUFXO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUNEOztLQUZRRDtBQUlNLFNBQVNFLFFBQVQsR0FBb0I7QUFBQTs7QUFBQTs7QUFDakMsTUFBTUMsS0FBSyxHQUFHLENBQUMsY0FBRCxFQUFpQixjQUFqQixFQUFpQyxtQkFBakMsQ0FBZDs7QUFFQSxrQkFBMEJKLCtDQUFRLENBQUMsQ0FBRCxDQUFsQztBQUFBLE1BQU9LLEtBQVA7QUFBQSxNQUFjQyxRQUFkOztBQUVBLFdBQVNDLFdBQVQsR0FBdUI7QUFDckJELElBQUFBLFFBQVEsQ0FBQ0QsS0FBSyxHQUFHLENBQVQsQ0FBUjtBQUNEOztBQUVELHNCQUNFO0FBQUEsNEJBQ0UsOERBQUMsTUFBRDtBQUFRLFdBQUssRUFBQztBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixFQUVHRCxLQUFLLENBQUNJLEdBQU4sQ0FBVSxVQUFDQyxJQUFEO0FBQUEsNEJBQ1Q7QUFBQSxvQkFBZ0JBO0FBQWhCLFdBQVNBLElBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEUztBQUFBLE9BQVYsQ0FGSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRixlQVNFO0FBQVEsYUFBTyxFQUFFRixXQUFqQjtBQUFBLDJCQUFxQ0YsS0FBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFhRDs7R0F0QnVCRjs7TUFBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxyXG5cclxuZnVuY3Rpb24gSGVhZGVyKHsgdGl0bGUgfSkge1xyXG4gIHJldHVybiA8aDE+e3RpdGxlID8gdGl0bGUgOiBcIkRlZmF1bHQgdGl0bGVcIn08L2gxPlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lUGFnZSgpIHtcclxuICBjb25zdCBuYW1lcyA9IFtcIkFkYSBMb3ZlbGFjZVwiLCBcIkdyYWNlIEhvcHBlclwiLCBcIk1hcmdhcmV0IEhhbWlsdG9uXCJdXHJcblxyXG4gIGNvbnN0IFtsaWtlcywgc2V0TGlrZXNdID0gdXNlU3RhdGUoMClcclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlQ2xpY2soKSB7XHJcbiAgICBzZXRMaWtlcyhsaWtlcyArIDEpXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPEhlYWRlciB0aXRsZT1cIkRldmVsb3AuIFByZXZpZXcuIFNoaXAuIPCfmoBcIiAvPlxyXG4gICAgICA8dWw+XHJcbiAgICAgICAgPGxpPkhlajwvbGk+XHJcbiAgICAgICAge25hbWVzLm1hcCgobmFtZSkgPT4gKFxyXG4gICAgICAgICAgPGxpIGtleT17bmFtZX0+e25hbWV9PC9saT5cclxuICAgICAgICApKX1cclxuICAgICAgPC91bD5cclxuXHJcbiAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlQ2xpY2t9Pkxpa2UgKHtsaWtlc30pPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiSGVhZGVyIiwidGl0bGUiLCJIb21lUGFnZSIsIm5hbWVzIiwibGlrZXMiLCJzZXRMaWtlcyIsImhhbmRsZUNsaWNrIiwibWFwIiwibmFtZSJdLCJzb3VyY2VSb290IjoiIn0=