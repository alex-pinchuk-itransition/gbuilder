webpackHotUpdate(0,{

/***/ 244:
/***/ function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(module) {\"use strict\";\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol ? \"symbol\" : typeof obj; };\n\n/* REACT HOT LOADER */if (true) {\n\t(function () {\n\t\tvar ReactHotAPI = __webpack_require__(77),\n\t\t    RootInstanceProvider = __webpack_require__(85),\n\t\t    ReactMount = __webpack_require__(87),\n\t\t    React = __webpack_require__(139);module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () {\n\t\t\treturn RootInstanceProvider.getRootInstances(ReactMount);\n\t\t}, React);\n\t})();\n}try {\n\t(function () {\n\n\t\t'use strict';\n\n\t\tObject.defineProperty(exports, \"__esModule\", {\n\t\t\tvalue: true\n\t\t});\n\n\t\tvar _createClass = function () {\n\t\t\tfunction defineProperties(target, props) {\n\t\t\t\tfor (var i = 0; i < props.length; i++) {\n\t\t\t\t\tvar descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if (\"value\" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);\n\t\t\t\t}\n\t\t\t}return function (Constructor, protoProps, staticProps) {\n\t\t\t\tif (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;\n\t\t\t};\n\t\t}();\n\n\t\tvar _react = __webpack_require__(139);\n\n\t\tvar _react2 = _interopRequireDefault(_react);\n\n\t\tvar _redux = __webpack_require__(245);\n\n\t\tvar _reactRedux = __webpack_require__(255);\n\n\t\tvar _reducers = __webpack_require__(263);\n\n\t\tvar reducers = _interopRequireWildcard(_reducers);\n\n\t\tfunction _interopRequireWildcard(obj) {\n\t\t\tif (obj && obj.__esModule) {\n\t\t\t\treturn obj;\n\t\t\t} else {\n\t\t\t\tvar newObj = {};if (obj != null) {\n\t\t\t\t\tfor (var key in obj) {\n\t\t\t\t\t\tif (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];\n\t\t\t\t\t}\n\t\t\t\t}newObj.default = obj;return newObj;\n\t\t\t}\n\t\t}\n\n\t\tfunction _interopRequireDefault(obj) {\n\t\t\treturn obj && obj.__esModule ? obj : { default: obj };\n\t\t}\n\n\t\tfunction _classCallCheck(instance, Constructor) {\n\t\t\tif (!(instance instanceof Constructor)) {\n\t\t\t\tthrow new TypeError(\"Cannot call a class as a function\");\n\t\t\t}\n\t\t}\n\n\t\tfunction _possibleConstructorReturn(self, call) {\n\t\t\tif (!self) {\n\t\t\t\tthrow new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n\t\t\t}return call && ((typeof call === \"undefined\" ? \"undefined\" : _typeof(call)) === \"object\" || typeof call === \"function\") ? call : self;\n\t\t}\n\n\t\tfunction _inherits(subClass, superClass) {\n\t\t\tif (typeof superClass !== \"function\" && superClass !== null) {\n\t\t\t\tthrow new TypeError(\"Super expression must either be null or a function, not \" + (typeof superClass === \"undefined\" ? \"undefined\" : _typeof(superClass)));\n\t\t\t}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;\n\t\t}\n\n\t\t// import FriendListApp from './FriendListApp';\n\n\t\t/*\n   * const reducer = combineReducers(reducers);\n   * const store = createStore(reducer);\n   */\n\n\t\tvar App = function (_Component) {\n\t\t\t_inherits(App, _Component);\n\n\t\t\tfunction App() {\n\t\t\t\t_classCallCheck(this, App);\n\n\t\t\t\treturn _possibleConstructorReturn(this, Object.getPrototypeOf(App).apply(this, arguments));\n\t\t\t}\n\n\t\t\t_createClass(App, [{\n\t\t\t\tkey: 'render',\n\t\t\t\tvalue: function render() {\n\t\t\t\t\treturn _react2.default.createElement('div', null, 'HELLO WORLD!!!');\n\t\t\t\t}\n\t\t\t}]);\n\n\t\t\treturn App;\n\t\t}(_react.Component);\n\n\t\t// <Provider store={store}>\n\t\t// // {() => <FriendListApp /> }\n\t\t// Hello World!\n\t\t// </Provider>\n\n\t\texports.default = App;\n\n\t\t/* REACT HOT LOADER */\n\t}).call(undefined);\n} finally {\n\tif (true) {\n\t\t(function () {\n\t\t\tvar foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false;if (module.exports && module.makeHot) {\n\t\t\t\tvar makeExportsHot = __webpack_require__(264);if (makeExportsHot(module, __webpack_require__(139))) {\n\t\t\t\t\tfoundReactClasses = true;\n\t\t\t\t}var shouldAcceptModule = true && foundReactClasses;if (shouldAcceptModule) {\n\t\t\t\t\tmodule.hot.accept(function (err) {\n\t\t\t\t\t\tif (err) {\n\t\t\t\t\t\t\tconsole.error(\"Cannot not apply hot update to \" + \"App.js\" + \": \" + err.message);\n\t\t\t\t\t\t}\n\t\t\t\t\t});\n\t\t\t\t}\n\t\t\t}module.hot.dispose(function (data) {\n\t\t\t\tdata.makeHot = module.makeHot;data.foundReactClasses = foundReactClasses;\n\t\t\t});\n\t\t})();\n\t}\n}\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/containers/App.js\n ** module id = 244\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/containers/App.js?");

/***/ }

})