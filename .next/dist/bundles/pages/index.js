module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios__ = __webpack_require__("axios");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_axios__);

var _jsxFileName = '/Users/thiagoleite/Projects/algorithms-node/pages/index.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var ListBroadBands = function (_Component) {
  _inherits(ListBroadBands, _Component);

  function ListBroadBands(props) {
    _classCallCheck(this, ListBroadBands);

    var _this = _possibleConstructorReturn(this, (ListBroadBands.__proto__ || Object.getPrototypeOf(ListBroadBands)).call(this, props));

    _this.state = {
      loading: true,
      data: []
    };
    return _this;
  }

  _createClass(ListBroadBands, [{
    key: 'componentDidMount',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var res;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return __WEBPACK_IMPORTED_MODULE_3_axios___default.a.get('/api/list-all-broadband/');

              case 2:
                res = _context.sent;

                this.setState({ loading: false, data: res.data });

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentDidMount() {
        return _ref.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          loading = _state.loading,
          data = _state.data;


      if (loading) {
        return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
          'div',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 27
            }
          },
          'Loading...'
        );
      }

      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
        'div',
        {
          className: 'jsx-453827835' + ' ' + 'content',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          }
        },
        data.map(function (item, i) {
          return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            'div',
            { key: i, className: 'jsx-453827835' + ' ' + 'cards',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 34
              }
            },
            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
              'ul',
              {
                className: 'jsx-453827835' + ' ' + 'bundles',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 35
                }
              },
              item.bundles.map(function (name, k) {
                return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                  'li',
                  { key: k, className: 'jsx-453827835',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 37
                    }
                  },
                  name
                );
              })
            ),
            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
              'div',
              {
                className: 'jsx-453827835' + ' ' + 'price',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 40
                }
              },
              'R$ ',
              item.total
            )
          );
        }),
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a, {
          styleId: '3535705628',
          css: '.cards.jsx-453827835{box-shadow:0px 1px 5px 0px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 3px 1px -2px rgba(0,0,0,0.12);padding:16px;margin-bottom:10px;background:white;}.price.jsx-453827835{font-weight:bold;}.bundles.jsx-453827835{display:inline-block;list-style:none;padding:0;margin:0;}.bundles.jsx-453827835 li.jsx-453827835{float:left;}.bundles.jsx-453827835 li.jsx-453827835:not(:last-child):after{content:" + ";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJDMEIsQUFLbUUsQUFNL0IsQUFHSSxBQU1WLEFBR0csV0FGaEIsR0FHQSxHQVpBLElBR2tCLGdCQUNOLFVBQ0QsU0FDWCx3REFaZSxhQUNNLG1CQUNGLGlCQUNuQiIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvdGhpYWdvbGVpdGUvUHJvamVjdHMvYWxnb3JpdGhtcy1ub2RlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuXG5cbmNsYXNzIExpc3RCcm9hZEJhbmRzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHsgXG4gICAgICBsb2FkaW5nOiB0cnVlLFxuICAgICAgZGF0YTogW11cbiAgICB9XG4gIH1cblxuICAgYXN5bmMgY29tcG9uZW50RGlkTW91bnQgKCkge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9saXN0LWFsbC1icm9hZGJhbmQvJyk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlLCBkYXRhOiByZXMuZGF0YSB9KVxuICB9XG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgbGV0IHtcbiAgICAgICAgICBsb2FkaW5nLFxuICAgICAgICAgIGRhdGFcbiAgICAgICAgfSA9IHRoaXMuc3RhdGVcblxuICAgICAgICBpZiAobG9hZGluZykge1xuICAgICAgICAgIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj5cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGRhdGEubWFwKChpdGVtLCBpKSA9PiBcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZHNcIiBrZXk9e2l9PlxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiYnVuZGxlc1wiPlxuICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmJ1bmRsZXMubWFwKChuYW1lLCBrKSA9PiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17a30+e25hbWV9PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJpY2VcIj5SJCB7aXRlbS50b3RhbH08L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAuY2FyZHMge1xuICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDFweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwcHggMnB4IDJweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwcHggM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAucHJpY2Uge1xuICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5idW5kbGVzIHtcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuYnVuZGxlcyBsaSB7XG4gICAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmJ1bmRsZXMgbGk6bm90KDpsYXN0LWNoaWxkKTphZnRlciB7XG4gICAgICAgICAgICAgICAgICBjb250ZW50OiBcIiArIFwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxuICAgICAgICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiYXJpYWxcIjtcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlZWVlZWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlzdEJyb2FkQmFuZHMiXX0= */\n/*@ sourceURL=pages/index.js */'
        }),
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a, {
          styleId: '669539694',
          css: 'body{font-family:"arial";background:#eeeeee;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9FaUMsQUFHdUMsb0JBQ0QsbUJBQ3JCIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy90aGlhZ29sZWl0ZS9Qcm9qZWN0cy9hbGdvcml0aG1zLW5vZGUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5cblxuY2xhc3MgTGlzdEJyb2FkQmFuZHMgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0geyBcbiAgICAgIGxvYWRpbmc6IHRydWUsXG4gICAgICBkYXRhOiBbXVxuICAgIH1cbiAgfVxuXG4gICBhc3luYyBjb21wb25lbnREaWRNb3VudCAoKSB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL2xpc3QtYWxsLWJyb2FkYmFuZC8nKTtcbiAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UsIGRhdGE6IHJlcy5kYXRhIH0pXG4gIH1cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICBsZXQge1xuICAgICAgICAgIGxvYWRpbmcsXG4gICAgICAgICAgZGF0YVxuICAgICAgICB9ID0gdGhpcy5zdGF0ZVxuXG4gICAgICAgIGlmIChsb2FkaW5nKSB7XG4gICAgICAgICAgcmV0dXJuIDxkaXY+TG9hZGluZy4uLjwvZGl2PlxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZGF0YS5tYXAoKGl0ZW0sIGkpID0+IFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkc1wiIGtleT17aX0+XG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJidW5kbGVzXCI+XG4gICAgICAgICAgICAgICAgICAgICAge2l0ZW0uYnVuZGxlcy5tYXAoKG5hbWUsIGspID0+IFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtrfT57bmFtZX08L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmljZVwiPlIkIHtpdGVtLnRvdGFsfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgIC5jYXJkcyB7XG4gICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMXB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDBweCAycHggMnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDBweCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5wcmljZSB7XG4gICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmJ1bmRsZXMge1xuICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5idW5kbGVzIGxpIHtcbiAgICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuYnVuZGxlcyBsaTpub3QoOmxhc3QtY2hpbGQpOmFmdGVyIHtcbiAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiICsgXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICAgIDxzdHlsZSBnbG9iYWwganN4PntgXG4gICAgICAgICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJhcmlhbFwiO1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2VlZWVlZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaXN0QnJvYWRCYW5kcyJdfQ== */\n/*@ sourceURL=pages/index.js */'
        })
      );
    }
  }]);

  return ListBroadBands;
}(__WEBPACK_IMPORTED_MODULE_2_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ListBroadBands);

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "axios":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "babel-runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/regenerator");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map