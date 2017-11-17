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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = handleRender;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(3);

var _reactRouterDom = __webpack_require__(4);

var _reactRedux = __webpack_require__(5);

var _App_ = __webpack_require__(6);

var _App_2 = _interopRequireDefault(_App_);

var _configureStore = __webpack_require__(9);

var _configureStore2 = _interopRequireDefault(_configureStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function renderFullPage(html, preloadedState) {
  return '\n    <!doctype html>\n    <html>\n      <head>\n        <meta charset=utf-8>\n        <title>React_Mentoring with SSR</title>\n      </head>\n      <body>\n        <div id=\'root\'>' + html + '</div>\n        <script>\n          window.PRELOADED_STATE = ' + JSON.stringify(preloadedState).replace(/</g, '\\u003c') + '\n        </script>\n        <script src="./public/bundle.js"></script>\n        </body>\n    </html>\n  ';
}
// import App from '../app/components/App';

function handleRender(req, res) {
  var store = (0, _configureStore2.default)();
  var context = {};
  var app = _react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(
      _reactRouterDom.StaticRouter,
      { location: req.url, context: context },
      _react2.default.createElement(_App_2.default, null)
    )
  );
  var html = (0, _server.renderToString)(app);

  if (context.url) {
    return res.redirect(context.url);
  }

  var preloadedState = store.getState();

  return res.send(renderFullPage(html, preloadedState));
}

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(7);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _App_ = __webpack_require__(8);

var _App_2 = _interopRequireDefault(_App_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App2 = function App2() {
  return _react2.default.createElement(
    'div',
    { className: _App_2.default.myClassName },
    'Hello444'
  );
};

// App2.propTypes = {
//   name: PropTypes.string.isRequired,
// };

exports.default = App2;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 8 */
/***/ (function(module, exports) {



/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = configureStore;

var _redux = __webpack_require__(1);

var _reduxThunk = __webpack_require__(10);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reducers = __webpack_require__(11);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function configureStore() {
  //  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  var store = (0, _redux.createStore)(_reducers2.default,
  //  composeEnhancers(
  (0, _redux.applyMiddleware)(_reduxThunk2.default
  //    ),
  ));

  return store;
}

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(1);

var _FilmsReducer = __webpack_require__(12);

var _FilmsReducer2 = _interopRequireDefault(_FilmsReducer);

var _ButtonReducer = __webpack_require__(13);

var _ButtonReducer2 = _interopRequireDefault(_ButtonReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var appReducer = (0, _redux.combineReducers)({
  filmsProp: _FilmsReducer2.default,
  buttonValueForSearch: _ButtonReducer2.default
});

exports.default = appReducer;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = FilmsReducer;
var initialState = {
  films: [],
  isFetching: false,
  currentFilm: '',
  similarFilms: [],
  isFetchingForSimilarFilms: false,
  typeOfSort: 'release_date'
};

function FilmsReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case 'FETCH_MOVIES_RECEIVE':
      return _extends({}, state, {
        films: action.payload
      });
    case 'FETCH_MOVIES_REQUEST':
      return _extends({}, state, {
        isFetching: action.payload
      });
    case 'FETCH_CURRENT_MOVIE_RECEIVE':
      return _extends({}, state, {
        currentFilm: action.payload
      });
    case 'GET_SIMILAR_MOVIES':
      return _extends({}, state, {
        similarFilms: action.payload
      });
    case 'FETCH_SIMILAR_MOVIES_REQUEST':
      return _extends({}, state, {
        isFetchingForSimilarFilms: action.payload
      });
    case 'CHANGE_TYPE_OF_SORT':
      return _extends({}, state, {
        typeOfSort: action.payload
      });
    default:
      return state;
  }
}

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ButtonReducer;
var initialState = 'movie';

function ButtonReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case 'CHANGE_TYPE_OF_SEARCH':
      return action.payload;
    default:
      return state;
  }
}

/***/ })
/******/ ]);
//# sourceMappingURL=bundleSSR.js.map