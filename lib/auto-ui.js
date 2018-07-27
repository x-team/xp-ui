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
/******/ 	return __webpack_require__(__webpack_require__.s = 34);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var addSemis = __webpack_require__(38);
var upsertCss = __webpack_require__(39);
var uniquifyName = __webpack_require__(40);

function isName(val) {
  return val && /^[a-zA-Z][a-zA-Z0-9-_ ]*$/.test(val);
}

function cmzNamed(name) {
  var comps = [name];
  var raw = [];

  // split parts into compositions & raw css

  for (var _len = arguments.length, parts = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    parts[_key - 1] = arguments[_key];
  }

  parts.filter(Boolean).forEach(function (p) {
    var group = isName(p) ? comps : raw;
    group.push(p);
  });

  var css = renderCss(name, raw);
  css && upsertCss(name, css);

  return comps.join(' ');
}

function renderCss(name, parts) {
  var selector = '.' + name;
  var output = '';

  var wrapped = [];
  var unwrapped = [];
  parts.forEach(function (part) {
    // replace name placeholders
    part = part.replace(/\?/g, name);

    // if no selector placeholder was given, we need to wrap it ourselves
    var isWrapped = part.indexOf('{') >= 0;
    var group = isWrapped ? wrapped : unwrapped;
    group.push(part);
  });

  if (unwrapped.length) {
    output += selector + ' {' + unwrapped.join('\n') + '}';

    if (wrapped.length) {
      output += '\n';
    }
  }

  if (wrapped.length) {
    // replace selector placeholders with the unique selector
    output += wrapped.map(function (part) {
      return part.replace(/&/g, selector);
    }).join('\n');
  }

  return addSemis(output);
}

var cmz = function cmz() {
  for (var _len2 = arguments.length, parts = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    parts[_key2] = arguments[_key2];
  }

  return cmzNamed.apply(undefined, [uniquifyName()].concat(parts));
};
cmz.named = cmzNamed;
cmz.reset = uniquifyName.reset;
cmz.sheets = upsertCss.sheets;

module.exports = cmz;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mediaQueries = exports.breakpoints = undefined;

var _color = __webpack_require__(41);

var _color2 = _interopRequireDefault(_color);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// wrap all theme colors in the `color` function,
// so we can call `.darken()`, `.lighten()`, etc.
function wrap(theme) {
  Object.keys(theme).forEach(function (k) {
    if (Array.isArray(theme[k])) {
      theme[k] = theme[k].map(function (c) {
        return (0, _color2.default)(c);
      });
    } else {
      theme[k] = (0, _color2.default)(theme[k]);
    }
  });

  return theme;
}

/**
 * Using named colors from http://chir.ag/projects/name-that-color/
 * Treat color hex values as constants and use theme colors with purpose
 */
var palette = {
  white: '#FFF',
  black: '#000',
  haiti: '#130E2E',
  fern: '#5CB85C',
  radicalRed: '#F63954',
  alto: '#D8D8D8',
  nobel: '#B3B3B3',
  tuna: '#34323B',
  scarpaFlow: '#5A5665',
  manatee: '#918CA0',
  athensGray: '#F0F1F4',
  athensGrayAlt: '#E6E6ED',
  mercury: '#E4E4E4',
  porcelain: '#E9EDEE',
  brickRed: '#D32F3B',
  wePeep: '#F7D9DC',
  bombay: '#B2B6BC'
};

exports.default = wrap({
  baseBrighter: palette.white,
  baseDarker: palette.haiti,
  baseDark: palette.black,
  baseRed: palette.radicalRed,
  baseLightRed: palette.wePeep,
  baseGreen: palette.fern,
  baseSilver: palette.alto,
  baseHighlight: palette.mercury,

  typoHeading: palette.tuna,
  typoSubheading: palette.radicalRed,
  typoParagraph: palette.scarpaFlow,
  typoHighlight: palette.haiti,
  typoLabel: palette.bombay,

  sliderToggle: palette.bombay,
  sliderBackground: palette.athensGray,

  formPlaceholder: palette.manatee,
  formText: palette.scarpaFlow,
  formBorder: palette.athensGrayAlt,
  formError: palette.brickRed,
  formErrorShadow: palette.wePeep,

  lineRed: palette.radicalRed,
  // roadmap timeline circle
  // rodamap level border
  lineSilver1: palette.mercury,
  // milestones circle and line
  // screen sections dividers
  lineSilver2: palette.porcelain,
  // roadmap timeline line
  lineSilver3: palette.athensGray,
  // horizontal ruler
  // collapsible section dividers
  lineSilver4: palette.athensGrayAlt,

  iconRed: palette.radicalRed,
  iconBright: palette.white,
  iconDark: palette.tuna,
  iconGray: palette.bombay,
  iconTextGray: palette.scarpaFlow,

  logoGray: palette.nobel
});
var breakpoints = exports.breakpoints = {
  xs: '480px',
  sm: '768px',
  md: '1024px',
  lg: '1280px',
  xl: '1440px'
};

var mediaQueries = exports.mediaQueries = {
  medium: '@media screen and (max-width: ' + breakpoints.md + ')',
  desktop: '@media screen and (min-width: ' + breakpoints.md + ')'
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

// source: https://stackoverflow.com/questions/5876332/how-can-i-differentiate-between-an-object-literal-other-javascript-objects
function isPlainObj(o) {
  return o && (typeof o === 'undefined' ? 'undefined' : _typeof(o)) === 'object' && o.constructor === Object && !o.$$typeof;
}

function normalizeClassNames(c) {
  return typeof c === 'string' ? c : c && c.filter(Boolean).map(normalizeClassNames).join(' ');
}

function baseElem(tag, className) {
  var defaultProps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  className = normalizeClassNames(className);

  return function () {
    for (var _len = arguments.length, children = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      children[_key - 1] = arguments[_key];
    }

    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    if (isPlainObj(props)) {
      var c = props.className ? className + ' ' + normalizeClassNames(props.className) : className;

      return _react.createElement.apply(undefined, [tag, _extends({}, defaultProps, props, { className: c })].concat(children));
    }

    return _react.createElement.apply(undefined, [tag, _extends({}, defaultProps, { className: className }), props].concat(children));
  };
}

var elem = baseElem.bind(null, 'div');

var types = Object.keys(_react.DOM);
types.forEach(function (type) {
  elem[type] = baseElem.bind(null, type);
});

exports.default = elem;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.typeface = undefined;

var _webfontloader = __webpack_require__(52);

var _webfontloader2 = _interopRequireDefault(_webfontloader);

var _theme = __webpack_require__(2);

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cmz = __webpack_require__(1);

_webfontloader2.default.load({
  google: {
    families: ['Open Sans:400,600,700,800', 'Source Sans Pro:300,700', 'Montserrat:400']
  }
});

/**
 * Using named typefaces according to their meaning
 */
var typeface = exports.typeface = {
  // headers, subheaders
  extraHeading: cmz.named('AutoUI_typo-22', /*cmz|*/'\n    font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif\n    font-weight: 800\n  ' /*|cmz*/),

  // roadmap level's subheader
  strongHeading: cmz.named('AutoUI_typo-28', /*cmz|*/'\n    font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif\n    font-weight: 700\n  ' /*|cmz*/),

  // collapsible section's title
  semiHeading: cmz.named('AutoUI_typo-34', /*cmz|*/'\n    font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif\n    font-weight: 600\n  ' /*|cmz*/),

  // regular text, form controls values/placeholders
  text: cmz.named('AutoUI_typo-40', /*cmz|*/'\n    font-family: "Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif\n    font-weight: 300\n  ' /*|cmz*/),

  // buttons, milestone levels' labels
  extra: cmz.named('AutoUI_typo-46', /*cmz|*/'\n    font-family: Montserrat, Arial, sans-serif\n    font-weight: 400\n  ' /*|cmz*/)

  // mixin for font smoothing
};var textRendering = cmz.named('AutoUI_typo-53', /*cmz|*/'\n  text-rendering: optimizeLegibility\n  -webkit-font-smoothing: antialiased\n  -moz-osx-font-smoothing: grayscale\n' /*|cmz*/);

exports.default = {
  // RoadmapHero title
  mainHeading: cmz.named('AutoUI_typo-61', textRendering, typeface.extraHeading, '\n      & {\n        font-size: 55px\n        text-transform: uppercase\n        margin: 0\n        color: ' + _theme2.default.typoHeading + '\n        letter-spacing: -1px\n        line-height: 51px\n\n        -ms-word-break: keep-all;\n        word-break: keep-all;\n\n        -webkit-hyphens: none;\n        -moz-hyphens: none;\n        hyphens: none;\n      }\n\n      @media screen and (max-width: ' + _theme.breakpoints.sm + ') {\n        & {\n          font-size: 35px\n          line-height: 32px\n        }\n      }\n    '),

  // in-page top-level headers
  headline: cmz.named('AutoUI_typo-91', textRendering, typeface.extraHeading, '\n      font-size: 36px\n      text-transform: uppercase\n      margin: 0 0 16px\n      color: ' + _theme2.default.typoHeading + '\n      letter-spacing: -1px\n      line-height: 49px\n    '),

  // CollapsibleSection title
  sectionHeading: cmz.named('AutoUI_typo-105', textRendering, typeface.semiHeading, '\n      font-size: 24px\n      margin: 0 0 10px\n      color: ' + _theme2.default.typoHeading + '\n      letter-spacing: -1px\n      line-height: 36px\n    '),

  // ApplicantBadge title
  badgeHeading: cmz.named('AutoUI_typo-118', textRendering, typeface.semiHeading, '\n      font-size: 19px\n      color: ' + _theme2.default.typoHeading + '\n      letter-spacing: -.3px\n      line-height: 19px\n      margin: 0\n      text-transform: uppercase\n    '),

  // RoadmapLevel's heading
  heading: cmz.named('AutoUI_typo-132', textRendering, typeface.extraHeading, '\n      text-transform: uppercase\n      font-size: 22px\n      margin: 0 0 .5rem\n      color: ' + _theme2.default.typoHeading + '\n      letter-spacing: -.61px\n      line-height: 30px\n    '),

  // RoadmapLevel's level text, applicant's badge name
  subheading: cmz.named('AutoUI_typo-146', textRendering, typeface.strongHeading, '\n      font-size: 18px\n      color: ' + _theme2.default.typoSubheading + '\n      margin: .625rem 0\n      letter-spacing: -.15px\n      line-height: 24px\n    '),

  // milestone levelN text, button value
  labelText: cmz.named('AutoUI_typo-159', textRendering, typeface.extra, /*cmz|*/'\n      font-size: 12px\n      text-transform: uppercase\n      line-height: 18px\n    ' /*|cmz*/),

  // regular text
  baseText: cmz.named('AutoUI_typo-170', textRendering, typeface.text, '\n      font-size: 20px\n      color: ' + _theme2.default.typoParagraph + '\n      line-height: 30px\n    '),

  // form input values
  formText: cmz.named('AutoUI_typo-181', textRendering, typeface.text, '\n      font-size: 18px\n      color: ' + _theme2.default.formText + '\n      line-height: 30px\n    '),

  // text divider
  divider: cmz.named('AutoUI_typo-192', '\n    & {\n      display: block\n      position: relative\n      width: 3.5rem\n      height: 2px\n      margin: 40px 0 35px\n      background-color: ' + _theme2.default.lineRed + '\n    }\n\n    @media screen and (max-width: ' + _theme.breakpoints.sm + ') {\n      & {\n        width: 2rem\n      }\n    }\n  ')
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _theme = __webpack_require__(2);

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var getIcon = function getIcon(_ref) {
  var icon = _ref.icon,
      color = _ref.color;

  if (!icon) {
    return null;
  }

  var colors = {
    default: _theme2.default.iconRed,
    inverted: _theme2.default.iconBright,
    monochrome: _theme2.default.iconDark,
    grayscale: _theme2.default.iconGray,
    text: _theme2.default.iconTextGray
  };

  var icons = {
    cog: _react2.default.createElement(
      'svg',
      { width: '26px', height: '26px', viewBox: '0 0 26 26' },
      _react2.default.createElement(
        'g',
        { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd', strokeLinecap: 'round', strokeLinejoin: 'round' },
        _react2.default.createElement(
          'g',
          { transform: 'translate(-402.000000, -198.000000)', strokeWidth: '2', stroke: colors[color] },
          _react2.default.createElement(
            'g',
            { transform: 'translate(392.000000, 186.000000)' },
            _react2.default.createElement(
              'g',
              { transform: 'translate(11.000000, 13.000000)' },
              _react2.default.createElement('path', { d: 'M20.6328668,14.0832105 L23.8832754,13.6579955 C24.0358928,12.5546655 24.0418946,11.4881989 23.8832754,10.3420045 L20.6328668,9.91678949 C20.413372,9.00463477 20.0541208,8.14991836 19.5782631,7.3723579 L21.5768657,4.77134527 C20.9080926,3.88576649 20.1184259,3.09620398 19.2327303,2.42666184 L16.6322319,4.42500081 C15.8537115,3.94749124 14.9980249,3.58743017 14.0857498,3.36796437 L13.6604787,0.117127232 C12.5312811,-0.0397565223 11.4655312,-0.0380419458 10.3449076,0.116269944 L9.91963653,3.3653925 C9.00564666,3.5848583 8.14910269,3.94491938 7.36886743,4.42157166 L4.76836905,2.42323269 C3.91868428,3.06448432 3.10843998,3.86176241 2.42423368,4.76534425 L4.42283629,7.36549959 C3.94440632,8.14563192 3.58344034,9.00292019 3.36394559,9.91764678 L0.113536964,10.3428618 C-0.0322212701,11.3973263 -0.043367488,12.5238031 0.113536964,13.6571382 L3.36394559,14.0823532 C3.58344034,14.9970798 3.94440632,15.8543681 4.42283629,16.6345004 L2.42423368,19.2346557 C3.06642731,20.0833711 3.8638106,20.8935086 4.76836905,21.5767673 L7.36886743,19.5784283 C8.14910269,20.0559379 9.00564666,20.4151417 9.91963653,20.6346075 L10.3449076,23.8837301 C11.4655312,24.0380419 12.5312811,24.0397565 13.6604787,23.8828728 L14.0857498,20.6320356 C14.9980249,20.4125698 15.8537115,20.0525088 16.6322319,19.5749992 L19.2327303,21.5733382 C20.1184259,20.903796 20.9080926,20.1142335 21.5768657,19.2286547 L19.5782631,16.6276421 C20.0541208,15.8500816 20.413372,14.9953652 20.6328668,14.0832105 Z', stroke: colors[color] }),
              _react2.default.createElement('path', { d: 'M16,12 C16,14.2091049 14.2092777,16 12.0003858,16 C9.79072235,16 8,14.2091049 8,12 C8,9.79089506 9.79072235,8 12.0003858,8 C14.2092777,8 16,9.79089506 16,12 Z', stroke: colors[color] })
            )
          )
        )
      )
    ),

    head: _react2.default.createElement(
      'svg',
      { width: '37px', height: '43px', viewBox: '0 0 37 43' },
      _react2.default.createElement(
        'g',
        { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd', strokeLinecap: 'round', strokeLinejoin: 'round' },
        _react2.default.createElement(
          'g',
          { transform: 'translate(-269.000000, -1104.000000)', stroke: colors[color], strokeWidth: '2' },
          _react2.default.createElement(
            'g',
            { transform: 'translate(0.000000, 823.000000)' },
            _react2.default.createElement(
              'g',
              { transform: 'translate(230.000000, 242.000000)' },
              _react2.default.createElement(
                'g',
                { transform: 'translate(40.000000, 40.000000)' },
                _react2.default.createElement('path', { d: 'M29.4146,11.3426 C29.3996,10.8916 28.9376,10.0396 28.6226,9.7316 C28.3076,9.4216 27.9346,9.0576 27.9236,8.7566 C27.9136,8.4566 27.7496,7.8396 27.0136,7.8656 C26.2806,7.8916 26.3086,7.1746 26.0296,6.9006 C25.7516,6.6286 25.4186,5.8666 24.8556,6.1496 C24.2906,6.4346 24.1496,5.4586 23.6406,5.2886 C23.1326,5.1186 22.6916,4.7946 21.9866,5.1586 C21.2826,5.5226 21.2996,4.4856 21.0586,4.2496 C20.8156,4.0126 20.1146,3.9436 19.7706,4.3326 C19.4246,4.7216 18.6946,4.3696 18.3596,4.0426 C18.0256,3.7156 17.1136,3.8056 16.8566,4.0966 C16.5976,4.3876 15.5826,4.5936 15.0806,4.6116 C14.5796,4.6306 13.6206,4.8896 13.6306,5.1536 C13.6386,5.4156 12.1666,6.3736 11.3166,6.6686 C10.4656,6.9606 10.4196,7.6796 10.4376,8.1696 C10.4536,8.6606 9.9236,9.3756 9.3546,10.0176 C8.7866,10.6596 9.1676,10.8166 9.0466,11.4606 C8.9256,12.1066 9.0716,12.1396 8.8486,12.9386 C8.6256,13.7386 9.3886,15.0316 9.3886,15.0316 C9.3886,15.0316 10.5146,15.4056 10.5396,16.1596 C10.5666,16.9116 11.5566,16.5006 11.9516,16.4876 C12.3456,16.4726 13.1066,16.7106 13.9246,17.5096 C14.7406,18.3116 14.8346,17.8916 15.5716,17.4516 C16.3086,17.0106 16.5386,17.4166 17.0226,17.8896 C17.5036,18.3626 18.1476,18.2646 18.5266,17.8376 C18.9056,17.4086 20.1656,17.5146 20.8096,17.4926 C21.4556,17.4706 21.2186,17.8916 20.9236,18.6956 C20.6296,19.4966 21.6176,18.9906 21.9206,18.9786 C22.2246,18.9676 22.2556,19.3076 22.7296,20.0636 C23.2056,20.8196 23.8526,20.8716 24.3546,21.3636 C24.8556,21.8546 25.3526,20.6676 25.9206,20.0256 C26.4896,19.3836 27.2886,19.1296 28.1656,19.0986 C29.0446,19.0666 28.6996,18.4946 28.6836,18.0056 C28.6666,17.5146 28.6466,16.9886 29.0256,16.5606 C29.4056,16.1316 29.7756,15.7146 29.3956,15.3406 C29.0136,14.9676 29.3666,14.5296 29.6946,14.1606 C30.0216,13.7916 29.8696,13.0616 29.4616,12.6606 C29.0536,12.2616 29.4306,11.7946 29.4146,11.3426 Z' }),
                _react2.default.createElement('path', { d: 'M31.6473,21.3934 C34.1223,17.1314 34.5023,16.4754 33.5213,9.6824 C31.7843,-2.3326 4.9933,-4.8146 3.6533,11.7634 C3.4843,13.3154 2.6563,17.7294 0.8903,19.4944 C0.3033,20.0824 -0.2007,20.7204 0.0803,21.4104 C0.5183,22.4844 1.8383,21.9844 2.9113,22.2174 C2.8503,22.7804 2.4943,24.4034 2.4943,24.5544 C2.4943,25.1144 2.8363,25.4864 3.5113,25.6614 C3.0823,26.3504 2.8043,26.8224 3.4563,27.4764 C3.7053,27.7264 3.8203,27.8394 3.8203,29.4304 C3.8203,31.6654 5.9723,32.6944 7.7853,32.4054 C10.8033,31.9474 10.4853,32.3234 11.7313,33.6814 C13.8843,36.0354 12.5813,38.0404 13.3263,39.9404 L13.4203,40.1864 L27.9003,35.9004 C26.9863,28.7314 30.3643,23.6024 31.6473,21.3934 Z' })
              )
            )
          )
        )
      )
    ),

    webcam: _react2.default.createElement(
      'svg',
      { width: '30px', height: '43px', viewBox: '0 0 30 43' },
      _react2.default.createElement(
        'g',
        { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd', strokeLinecap: 'round', strokeLinejoin: 'round' },
        _react2.default.createElement(
          'g',
          { transform: 'translate(-929.000000, -1363.000000)', stroke: colors[color], strokeWidth: '2' },
          _react2.default.createElement(
            'g',
            { transform: 'translate(0.000000, 823.000000)' },
            _react2.default.createElement(
              'g',
              { transform: 'translate(890.000000, 502.000000)' },
              _react2.default.createElement(
                'g',
                { transform: 'translate(40.000000, 39.000000)' },
                _react2.default.createElement('path', { d: 'M24.0924075,32.0243367 L25.9267191,38.5587291 C26.3906698,39.9139767 24.5652073,41 22.8876528,41 L5.0944503,41 C3.41436745,41 1.67234024,39.9778604 2.05285562,38.5587291 L3.88716729,32' }),
                _react2.default.createElement('path', { d: 'M28,14.9993443 C28,23.2832102 21.7309962,30 13.999388,30 C6.26777987,30 0,23.2832102 0,14.9993443 C0,6.71416707 6.26777987,0 13.999388,0 C21.7309962,0 28,6.71416707 28,14.9993443 Z' }),
                _react2.default.createElement('path', { d: 'M20,14.9992522 C20,18.313723 17.3152187,21 14.0007478,21 C10.686277,21 8,18.313723 8,14.9992522 C8,11.6847813 10.686277,9 14.0007478,9 C17.3152187,9 20,11.6847813 20,14.9992522 Z' })
              )
            )
          )
        )
      )
    ),

    message: _react2.default.createElement(
      'svg',
      { width: '37px', height: '36px', viewBox: '0 0 37 36' },
      _react2.default.createElement(
        'g',
        { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd', strokeLinecap: 'round', strokeLinejoin: 'round' },
        _react2.default.createElement(
          'g',
          { transform: 'translate(-269.000000, -1671.000000)', stroke: colors[color], strokeWidth: '2' },
          _react2.default.createElement(
            'g',
            { transform: 'translate(0.000000, 823.000000)' },
            _react2.default.createElement(
              'g',
              { transform: 'translate(230.000000, 805.000000)' },
              _react2.default.createElement(
                'g',
                { transform: 'translate(40.000000, 44.000000)' },
                _react2.default.createElement('path', { d: 'M8,8 L28,8' }),
                _react2.default.createElement('path', { d: 'M8,16 L28,16' }),
                _react2.default.createElement('polygon', { points: '35 -8.8817842e-16 0 -8.8817842e-16 0 26.3225806 19.4234914 26.3225806 19.4234914 34 27.8265841 26.3225806 35 26.3225806' })
              )
            )
          )
        )
      )
    ),

    terminal: _react2.default.createElement(
      'svg',
      { width: '42px', height: '37px', viewBox: '0 0 42 37' },
      _react2.default.createElement(
        'g',
        { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd', strokeLinecap: 'round', strokeLinejoin: 'round' },
        _react2.default.createElement(
          'g',
          { transform: 'translate(-929.000000, -1925.000000)', stroke: colors[color], strokeWidth: '2' },
          _react2.default.createElement(
            'g',
            { transform: 'translate(0.000000, 823.000000)' },
            _react2.default.createElement(
              'g',
              { transform: 'translate(890.000000, 1063.000000)' },
              _react2.default.createElement(
                'g',
                { transform: 'translate(40.000000, 40.000000)' },
                _react2.default.createElement('polygon', { points: '0 35 39 35 39 0 0 0' }),
                _react2.default.createElement('path', { d: 'M40,10 L1,10' }),
                _react2.default.createElement('path', { d: 'M33,4 L36,7' }),
                _react2.default.createElement('path', { d: 'M33,7 L36,4' }),
                _react2.default.createElement('polygon', { points: '26 7 29 7 29 4 26 4' }),
                _react2.default.createElement('path', { d: 'M19,7 L22,7' }),
                _react2.default.createElement('path', { d: 'M16,28 L24,28' }),
                _react2.default.createElement('polyline', { points: '7 28 13 21.500467 7 15' })
              )
            )
          )
        )
      )
    ),

    diamond: _react2.default.createElement(
      'svg',
      { width: '42px', height: '39px', viewBox: '0 0 42 39' },
      _react2.default.createElement(
        'g',
        { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd', strokeLinecap: 'round', strokeLinejoin: 'round' },
        _react2.default.createElement(
          'g',
          { transform: 'translate(-270.000000, -2228.000000)', stroke: colors[color], strokeWidth: '2' },
          _react2.default.createElement(
            'g',
            { transform: 'translate(0.000000, 823.000000)' },
            _react2.default.createElement(
              'g',
              { transform: 'translate(230.000000, 1367.000000)' },
              _react2.default.createElement(
                'g',
                { transform: 'translate(41.000000, 39.000000)' },
                _react2.default.createElement('polygon', { points: '20 37 40 12.2504334 32.308 0 20 0 7.692 0 0 12.2504334' }),
                _react2.default.createElement('path', { d: 'M0,12 L40,12' }),
                _react2.default.createElement('polyline', { points: '19 0 12 12.2504334 19 37' }),
                _react2.default.createElement('polyline', { points: '20 0 27 12.2504334 20 37' }),
                _react2.default.createElement('path', { d: 'M27,12 L32,0' }),
                _react2.default.createElement('path', { d: 'M12,12 L7,0' })
              )
            )
          )
        )
      )
    ),

    talking: _react2.default.createElement(
      'svg',
      { width: '42px', height: '42px', viewBox: '0 0 42 42' },
      _react2.default.createElement(
        'g',
        { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd', strokeLinecap: 'round', strokeLinejoin: 'round' },
        _react2.default.createElement(
          'g',
          { transform: 'translate(-929.000000, -2519.000000)', stroke: colors[color], strokeWidth: '2' },
          _react2.default.createElement(
            'g',
            { transform: 'translate(0.000000, 823.000000)' },
            _react2.default.createElement(
              'g',
              { transform: 'translate(890.000000, 1657.000000)' },
              _react2.default.createElement(
                'g',
                { transform: 'translate(40.000000, 40.000000)' },
                _react2.default.createElement('path', { d: 'M26,40 L26,38.2680197 C26,37.7816757 25.7128334,37.3459511 25.2795995,37.1742419 C20.1920813,35.1494627 17.3442635,32.6343692 16.8702897,31.0671504 L16.8702897,29.4225135 C17.9255522,28.31087 18.7572422,26.7595318 19.2500955,24.9431857 C20.4255905,24.0925799 20.7326301,22.3278458 19.7479171,21.0802245 L19.7479171,17.3998905 C19.7479171,13.6004518 17.6950241,11 13,11 C8.4271956,11 6.25009554,13.6004518 6.25009554,17.3998905 L6.25009554,21.0822096 C5.26836353,22.3278458 5.57440954,24.0905948 6.74791714,24.9421932 C7.24077047,26.7595318 8.0734541,28.31087 9.12971031,29.4225135 L9.12971031,31.0671504 C8.65673011,32.6323841 5.80692502,35.1474776 0.72040052,37.1742419 C0.287166552,37.3479362 0,37.7816757 0,38.2680197 L0,40' }),
                _react2.default.createElement('path', { d: 'M24.3309242,17.1681336 L26.3925929,17.1681336 L26.3925929,23 L33.6733524,16.8019674 C37.2694693,16.0984123 40,12.6362067 40,8.46746915 C40,3.79066356 36.5632297,0 32.3228414,0 L24.5532224,0 C20.7839884,0 17.648206,2.99680732 17,6.94921909' }),
                _react2.default.createElement('path', { d: 'M23,7 L33,7' }),
                _react2.default.createElement('path', { d: 'M23,10 L28,10' })
              )
            )
          )
        )
      )
    ),

    trophy: _react2.default.createElement(
      'svg',
      { width: '42px', height: '44px', viewBox: '0 0 42 44' },
      _react2.default.createElement(
        'g',
        { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd', strokeLinecap: 'round', strokeLinejoin: 'round' },
        _react2.default.createElement(
          'g',
          { transform: 'translate(-779.000000, -3206.000000)', stroke: colors[color], strokeWidth: '2' },
          _react2.default.createElement(
            'g',
            { transform: 'translate(0.000000, 823.000000)' },
            _react2.default.createElement(
              'g',
              { transform: 'translate(0.000000, 2294.000000)' },
              _react2.default.createElement(
                'g',
                { transform: 'translate(780.000000, 90.000000)' },
                _react2.default.createElement('polygon', { points: '27 42 13 42 14.1648584 38 25.8351416 38' }),
                _react2.default.createElement('path', { d: 'M8,20.8436224 C4.84548333,21.6809078 1.40934831,19.0724416 0.327855609,15.0167792 C-0.753637088,10.9611168 0.928250289,6.99425742 4.08178912,6.15599611 C4.94228964,5.92862139 5.82234698,5.95594539 6.67013556,6.19795797' }),
                _react2.default.createElement('path', { d: 'M32,20.8436247 C35.1545167,21.6808976 38.5896739,19.0724705 39.6721444,15.016869 C40.7536371,10.9612674 39.0717497,6.99446748 35.9182109,6.15621874 C35.0469541,5.9259199 34.1561405,5.95617102 33.2975957,6.20793839' }),
                _react2.default.createElement('path', { d: 'M31.6313185,0 L8.36868149,0 C7.61259135,0 7,0.609723493 7,1.36227397 L7,14 C7,21.7195525 12.8309988,28 20,28 C27.1680116,28 33,21.7195525 33,14 L33,1.36227397 C33,0.609723493 32.3874086,0 31.6313185,0 Z' }),
                _react2.default.createElement('path', { d: 'M22.9230988,10.5861741 C20.7148662,4.39776549 21.2428993,4.54522962 19.0863334,10.5861741 C12.3417691,10.7194003 12.6786357,10.2942968 17.8980005,14.1487042 C15.9481012,20.4255913 15.6195013,19.9964198 21.0052328,16.3464282 C26.5335642,20.0930342 26.0137977,20.2659232 24.1114317,14.1487042 C29.4857965,10.1803935 29.4723631,10.7153323 22.9230988,10.5861741 Z' }),
                _react2.default.createElement('path', { d: 'M19,38 L19,32' }),
                _react2.default.createElement('path', { d: 'M22,38 L22,32' })
              )
            )
          )
        )
      )
    ),

    plus: _react2.default.createElement(
      'svg',
      { width: '20px', height: '20px', viewBox: '0 0 20 20' },
      _react2.default.createElement(
        'g',
        { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
        _react2.default.createElement(
          'g',
          { transform: 'translate(-1191.000000, -1411.000000)', fill: colors[color] },
          _react2.default.createElement(
            'g',
            { transform: 'translate(387.000000, 933.000000)' },
            _react2.default.createElement(
              'g',
              { transform: 'translate(0.000000, 470.000000)' },
              _react2.default.createElement('path', { d: 'M813,17 L804,17 L804,19 L813,19 L813,28 L815,28 L815,19 L824,19 L824,17 L815,17 L815,8 L813,8 L813,17 Z' })
            )
          )
        )
      )
    ),

    minus: _react2.default.createElement(
      'svg',
      { width: '20px', height: '2px', viewBox: '0 0 20 2' },
      _react2.default.createElement(
        'g',
        { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
        _react2.default.createElement(
          'g',
          { transform: 'translate(-1161.000000, -1106.000000)', fill: colors[color] },
          _react2.default.createElement(
            'g',
            { transform: 'translate(357.000000, 933.000000)' },
            _react2.default.createElement(
              'g',
              { transform: 'translate(0.000000, 157.000000)' },
              _react2.default.createElement('rect', { x: '804', y: '16', width: '20', height: '2' })
            )
          )
        )
      )
    ),

    calendar: _react2.default.createElement(
      'svg',
      { width: '40px', height: '40px', viewBox: '0 0 16 16' },
      _react2.default.createElement(
        'g',
        { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
        _react2.default.createElement(
          'g',
          { transform: 'translate(-560.000000, -479.000000)', fill: colors[color] },
          _react2.default.createElement(
            'g',
            { transform: 'translate(363.000000, 309.000000)' },
            _react2.default.createElement(
              'g',
              { transform: 'translate(33.000000, 146.000000)' },
              _react2.default.createElement('path', {
                d: 'M177.993,40 L166.007,40 C164.901746,39.9989108 164.004951,39.1052439 164,38 L164,28 C163.999997,27.468352 164.211671,26.9585804 164.588259,26.5833058 C164.964847,26.2080312 165.475355,25.9981392 166.007,26 L168,26 L168,25 C168,24.4477153 168.447715,24 169,24 C169.552285,24 170,24.4477153 170,25 L170,26 L174,26 L174,25 C174,24.4477153 174.447715,24 175,24 C175.552285,24 176,24.4477153 176,25 L176,26 L177.993,26 C179.098254,26.0010892 179.995049,26.8947561 180,28 L180,38 C180.000003,38.531648 179.788329,39.0414196 179.411741,39.4166942 C179.035153,39.7919688 178.524645,40.0018608 177.993,40 L177.993,40 Z M178,28 L177.993,28 L176,28 L176,29 C176,29.5522847 175.552285,30 175,30 C174.447715,30 174,29.5522847 174,29 L174,28 L170,28 L170,29 C170,29.5522847 169.552285,30 169,30 C168.447715,30 168,29.5522847 168,29 L168,28 L166.007,28 C166.00479,27.998925 166.00221,27.998925 166,28 L166,38 L166.007,38 L177.993,38 C177.99521,38.001075 177.99779,38.001075 178,38 L178,28 L178,28 Z M175,36 C174.447715,36 174,35.5522847 174,35 C174,34.4477153 174.447715,34 175,34 C175.552285,34 176,34.4477153 176,35 C176,35.5522847 175.552285,36 175,36 L175,36 Z M175,33 C174.447715,33 174,32.5522847 174,32 C174,31.4477153 174.447715,31 175,31 C175.552285,31 176,31.4477153 176,32 C176,32.5522847 175.552285,33 175,33 L175,33 Z M172,36 C171.447715,36 171,35.5522847 171,35 C171,34.4477153 171.447715,34 172,34 C172.552285,34 173,34.4477153 173,35 C173,35.5522847 172.552285,36 172,36 L172,36 Z M172,33 C171.447715,33 171,32.5522847 171,32 C171,31.4477153 171.447715,31 172,31 C172.552285,31 173,31.4477153 173,32 C173,32.5522847 172.552285,33 172,33 L172,33 Z M169,36 C168.447715,36 168,35.5522847 168,35 C168,34.4477153 168.447715,34 169,34 C169.552285,34 170,34.4477153 170,35 C170,35.5522847 169.552285,36 169,36 L169,36 Z M169,33 C168.447715,33 168,32.5522847 168,32 C168,31.4477153 168.447715,31 169,31 C169.552285,31 170,31.4477153 170,32 C170,32.5522847 169.552285,33 169,33 L169,33 Z'
              })
            )
          )
        )
      )
    ),

    trashcan: _react2.default.createElement(
      'svg',
      { width: '15px', height: '18px', viewBox: '0 0 15 18' },
      _react2.default.createElement(
        'g',
        { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
        _react2.default.createElement(
          'g',
          { transform: 'translate(-1272.000000, -1013.000000)', fill: colors[color] },
          _react2.default.createElement(
            'g',
            { transform: 'translate(1272.000000, 1013.000000)' },
            _react2.default.createElement('rect', { x: '0', y: '3', width: '15', height: '2' }),
            _react2.default.createElement('rect', { x: '2', y: '16', width: '11', height: '2' }),
            _react2.default.createElement('rect', { x: '2', y: '5', width: '2', height: '12' }),
            _react2.default.createElement('rect', { x: '11', y: '5', width: '2', height: '12' }),
            _react2.default.createElement('rect', { x: '4', y: '0', width: '7', height: '2' }),
            _react2.default.createElement('path', { d: 'M8.8890873,10.4748737 L9.94974747,11.5355339 L8.53553391,12.9497475 L7.47487373,11.8890873 L6.41421356,12.9497475 L5,11.5355339 L6.06066017,10.4748737 L5,9.41421356 L6.41421356,8 L7.47487373,9.06066017 L8.53553391,8 L9.94974747,9.41421356 L8.8890873,10.4748737 Z' })
          )
        )
      )
    ),

    x: _react2.default.createElement(
      'svg',
      { width: '14px', height: '14px', viewBox: '0 0 14 14' },
      _react2.default.createElement(
        'g',
        { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd', strokeLinecap: 'square' },
        _react2.default.createElement(
          'g',
          { transform: 'translate(-1294.000000, -1073.000000)', stroke: colors[color], strokeWidth: '2' },
          _react2.default.createElement(
            'g',
            { transform: 'translate(1300.899495, 1079.899495) rotate(45.000000) translate(-1300.899495, -1079.899495) translate(1293.899495, 1072.899495)' },
            _react2.default.createElement('path', { d: 'M7,0 L7,14' }),
            _react2.default.createElement('path', { d: 'M14,7 L0,7' })
          )
        )
      )
    ),

    add: _react2.default.createElement(
      'svg',
      { width: '16px', height: '16px', viewBox: '0 0 16 16' },
      _react2.default.createElement(
        'g',
        { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
        _react2.default.createElement(
          'g',
          { transform: 'translate(-539.000000, -162.000000)' },
          _react2.default.createElement(
            'g',
            { transform: 'translate(539.000000, 162.000000)' },
            _react2.default.createElement('path', { d: 'M0.5,0.5 L0.5,14.5 L11.4545465,14.5 L11.4991824,4.38874719 L8.16377939,0.5 L0.5,0.5 Z', stroke: colors[color] }),
            _react2.default.createElement('path', { d: 'M2.5,5.5 L4.5,5.5', stroke: colors[color], strokeLinecap: 'square' }),
            _react2.default.createElement('path', { d: 'M2.5,7.5 L7.5,7.5', stroke: colors[color], strokeLinecap: 'square' }),
            _react2.default.createElement('path', { d: 'M2.5,9.5 L7.5,9.5', stroke: colors[color], strokeLinecap: 'square' }),
            _react2.default.createElement('path', { d: 'M2.5,11.5 L7.5,11.5', stroke: colors[color], strokeLinecap: 'square' }),
            _react2.default.createElement('path', { d: 'M7.5,1.5 L7.5,4.5', stroke: colors[color], strokeLinecap: 'square' }),
            _react2.default.createElement('path', { d: 'M7.01349488,5.49634026 L11.4125741,5.49634026', stroke: colors[color] }),
            _react2.default.createElement('circle', { fill: '#FFFFFF', cx: '11.5', cy: '11.5', r: '4.5' }),
            _react2.default.createElement('path', { d: 'M11.5,9.5 L11.5,13.5', stroke: colors[color], strokeLinecap: 'square' }),
            _react2.default.createElement('path', { d: 'M9.5,11.5 L13.5,11.5', stroke: colors[color], strokeLinecap: 'square' })
          )
        )
      )
    ),

    triangleup: _react2.default.createElement(
      'svg',
      { width: '9px', height: '5px', viewBox: '0 0 9 5' },
      _react2.default.createElement(
        'g',
        { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
        _react2.default.createElement('polygon', { fill: colors[color], transform: 'translate(4.242641, 4.242641) rotate(225.000000) translate(-4.242641, -4.242641) ', points: '7.24264069 1.24264069 7.24264069 7.24264069 1.24264069 7.24264069' })
      )
    ),

    triangledown: _react2.default.createElement(
      'svg',
      { width: '9px', height: '5px', viewBox: '0 0 9 5' },
      _react2.default.createElement(
        'g',
        { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
        _react2.default.createElement('polygon', { fill: colors[color], transform: 'translate(4.242641, 0.242641) scale(1, -1) rotate(225.000000) translate(-4.242641, -0.242641) ', points: '7.24264069 -2.75735931 7.24264069 3.24264069 1.24264069 3.24264069' })
      )
    ),

    hamburger: _react2.default.createElement(
      'svg',
      { width: '16px', height: '12px', viewBox: '0 0 16 12' },
      _react2.default.createElement(
        'g',
        { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd', strokeLinecap: 'square' },
        _react2.default.createElement(
          'g',
          { transform: 'translate(1.000000, 0.000000)', stroke: colors[color] },
          _react2.default.createElement('path', { d: 'M0.184210526,1 L13.8157895,1' }),
          _react2.default.createElement('path', { d: 'M0.184210526,6 L13.8157895,6' }),
          _react2.default.createElement('path', { d: 'M0.184210526,11 L13.8157895,11' })
        )
      )
    ),

    magnifier: _react2.default.createElement(
      'svg',
      { width: '16px', height: '17px', viewBox: '0 0 16 17' },
      _react2.default.createElement(
        'g',
        { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
        _react2.default.createElement('circle', { stroke: colors[color], cx: '7.5', cy: '7.5', r: '6.5' }),
        _react2.default.createElement('path', { d: 'M11.7538745,12.6062275 L15.5,16.5', stroke: colors[color], strokeLinecap: 'square' })
      )
    ),

    edit: _react2.default.createElement(
      'svg',
      { width: '14px', height: '14px', viewBox: '0 0 14 14' },
      _react2.default.createElement(
        'g',
        { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
        _react2.default.createElement('path', { d: 'M0,11.0444749 L0,14.0000305 L2.95555556,14.0000305 L11.5111111,5.36669717 L8.55555556,2.41114161 L0,11.0444749 Z M13.7666667,3.11114161 C14.0777778,2.8000305 14.0777778,2.33336383 13.7666667,2.02225272 L11.9777778,0.233333333 C11.6666667,-0.0777777778 11.2,-0.0777777778 10.8888889,0.233333333 L9.48888889,1.63333333 L12.4444444,4.58888889 L13.7666667,3.11114161 Z', fill: colors[color], fillRule: 'nonzero' })
      )
    ),

    check: _react2.default.createElement(
      'svg',
      { width: '17px', height: '13px', viewBox: '0 0 17 13' },
      _react2.default.createElement(
        'g',
        { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
        _react2.default.createElement('polyline', { stroke: colors[color], strokeWidth: '2', transform: 'translate(8.484296, 5.704309) rotate(6.000000) translate(-8.484296, -5.704309) ', points: '15.4842956 0.70430872 8.48429558 10.7043087 8.48429558 10.7043087 1.48429558 5.70430872' })
      )
    ),

    play: _react2.default.createElement(
      'svg',
      { width: '14px', height: '16px', viewBox: '0 0 14 16' },
      _react2.default.createElement(
        'g',
        { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
        _react2.default.createElement(
          'g',
          { transform: 'translate(-760.000000, -380.000000)', fill: colors[color] },
          _react2.default.createElement(
            'g',
            { transform: 'translate(685.000000, 216.000000)' },
            _react2.default.createElement(
              'g',
              { transform: 'translate(57.000000, 156.000000)' },
              _react2.default.createElement('polygon', { transform: 'translate(25.000000, 16.000000) rotate(90.000000) translate(-25.000000, -16.000000)', points: '25 9 33 23 17 23' })
            )
          )
        )
      )
    ),

    pause: _react2.default.createElement(
      'svg',
      { width: '14px', height: '16px', viewBox: '0 0 14 16' },
      _react2.default.createElement(
        'g',
        { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
        _react2.default.createElement('rect', { x: '0', y: '0', width: '5', height: '16', fill: colors[color] }),
        _react2.default.createElement('rect', { x: '9', y: '0', width: '5', height: '16', fill: colors[color] })
      )
    ),

    paperplane: _react2.default.createElement(
      'svg',
      { width: '17px', height: '17px', viewBox: '0 0 17 17' },
      _react2.default.createElement(
        'g',
        { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd', strokeLinecap: 'round' },
        _react2.default.createElement(
          'g',
          { transform: 'translate(-756.000000, -1327.000000)', fill: colors[color], stroke: colors[color] },
          _react2.default.createElement(
            'g',
            { transform: 'translate(516.000000, 684.000000)' },
            _react2.default.createElement(
              'g',
              { transform: 'translate(228.000000, 631.000000)' },
              _react2.default.createElement(
                'g',
                { transform: 'translate(23.018984, 18.018984) rotate(44.000000) translate(-23.018984, -18.018984) translate(14.518984, 9.518984)' },
                _react2.default.createElement('polygon', { transform: 'translate(8.500000, 8.500000) rotate(-1.000000) translate(-8.500000, -8.500000) ', points: '8.5 1 16 16 9.73060528 13.9603788 8.62544468 4.59226558 7.46910589 14.0393521 1 16' })
              )
            )
          )
        )
      )
    )
  };

  return icons[icon];
};

var SvgIcon = function (_PureComponent) {
  _inherits(SvgIcon, _PureComponent);

  function SvgIcon() {
    _classCallCheck(this, SvgIcon);

    return _possibleConstructorReturn(this, (SvgIcon.__proto__ || Object.getPrototypeOf(SvgIcon)).apply(this, arguments));
  }

  _createClass(SvgIcon, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          icon = _props.icon,
          color = _props.color;

      return getIcon({ icon: icon, color: color }) || null;
    }
  }]);

  return SvgIcon;
}(_react.PureComponent);

SvgIcon.defaultProps = {
  color: 'default'
};
exports.default = SvgIcon;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var isDate = __webpack_require__(28)

var MILLISECONDS_IN_HOUR = 3600000
var MILLISECONDS_IN_MINUTE = 60000
var DEFAULT_ADDITIONAL_DIGITS = 2

var parseTokenDateTimeDelimeter = /[T ]/
var parseTokenPlainTime = /:/

// year tokens
var parseTokenYY = /^(\d{2})$/
var parseTokensYYY = [
  /^([+-]\d{2})$/, // 0 additional digits
  /^([+-]\d{3})$/, // 1 additional digit
  /^([+-]\d{4})$/ // 2 additional digits
]

var parseTokenYYYY = /^(\d{4})/
var parseTokensYYYYY = [
  /^([+-]\d{4})/, // 0 additional digits
  /^([+-]\d{5})/, // 1 additional digit
  /^([+-]\d{6})/ // 2 additional digits
]

// date tokens
var parseTokenMM = /^-(\d{2})$/
var parseTokenDDD = /^-?(\d{3})$/
var parseTokenMMDD = /^-?(\d{2})-?(\d{2})$/
var parseTokenWww = /^-?W(\d{2})$/
var parseTokenWwwD = /^-?W(\d{2})-?(\d{1})$/

// time tokens
var parseTokenHH = /^(\d{2}([.,]\d*)?)$/
var parseTokenHHMM = /^(\d{2}):?(\d{2}([.,]\d*)?)$/
var parseTokenHHMMSS = /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/

// timezone tokens
var parseTokenTimezone = /([Z+-].*)$/
var parseTokenTimezoneZ = /^(Z)$/
var parseTokenTimezoneHH = /^([+-])(\d{2})$/
var parseTokenTimezoneHHMM = /^([+-])(\d{2}):?(\d{2})$/

/**
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If an argument is a string, the function tries to parse it.
 * Function accepts complete ISO 8601 formats as well as partial implementations.
 * ISO 8601: http://en.wikipedia.org/wiki/ISO_8601
 *
 * If all above fails, the function passes the given argument to Date constructor.
 *
 * @param {Date|String|Number} argument - the value to convert
 * @param {Object} [options] - the object with options
 * @param {0 | 1 | 2} [options.additionalDigits=2] - the additional number of digits in the extended year format
 * @returns {Date} the parsed date in the local time zone
 *
 * @example
 * // Convert string '2014-02-11T11:30:30' to date:
 * var result = parse('2014-02-11T11:30:30')
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Parse string '+02014101',
 * // if the additional number of digits in the extended year format is 1:
 * var result = parse('+02014101', {additionalDigits: 1})
 * //=> Fri Apr 11 2014 00:00:00
 */
function parse (argument, dirtyOptions) {
  if (isDate(argument)) {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime())
  } else if (typeof argument !== 'string') {
    return new Date(argument)
  }

  var options = dirtyOptions || {}
  var additionalDigits = options.additionalDigits
  if (additionalDigits == null) {
    additionalDigits = DEFAULT_ADDITIONAL_DIGITS
  } else {
    additionalDigits = Number(additionalDigits)
  }

  var dateStrings = splitDateString(argument)

  var parseYearResult = parseYear(dateStrings.date, additionalDigits)
  var year = parseYearResult.year
  var restDateString = parseYearResult.restDateString

  var date = parseDate(restDateString, year)

  if (date) {
    var timestamp = date.getTime()
    var time = 0
    var offset

    if (dateStrings.time) {
      time = parseTime(dateStrings.time)
    }

    if (dateStrings.timezone) {
      offset = parseTimezone(dateStrings.timezone)
    } else {
      // get offset accurate to hour in timezones that change offset
      offset = new Date(timestamp + time).getTimezoneOffset()
      offset = new Date(timestamp + time + offset * MILLISECONDS_IN_MINUTE).getTimezoneOffset()
    }

    return new Date(timestamp + time + offset * MILLISECONDS_IN_MINUTE)
  } else {
    return new Date(argument)
  }
}

function splitDateString (dateString) {
  var dateStrings = {}
  var array = dateString.split(parseTokenDateTimeDelimeter)
  var timeString

  if (parseTokenPlainTime.test(array[0])) {
    dateStrings.date = null
    timeString = array[0]
  } else {
    dateStrings.date = array[0]
    timeString = array[1]
  }

  if (timeString) {
    var token = parseTokenTimezone.exec(timeString)
    if (token) {
      dateStrings.time = timeString.replace(token[1], '')
      dateStrings.timezone = token[1]
    } else {
      dateStrings.time = timeString
    }
  }

  return dateStrings
}

function parseYear (dateString, additionalDigits) {
  var parseTokenYYY = parseTokensYYY[additionalDigits]
  var parseTokenYYYYY = parseTokensYYYYY[additionalDigits]

  var token

  // YYYY or ±YYYYY
  token = parseTokenYYYY.exec(dateString) || parseTokenYYYYY.exec(dateString)
  if (token) {
    var yearString = token[1]
    return {
      year: parseInt(yearString, 10),
      restDateString: dateString.slice(yearString.length)
    }
  }

  // YY or ±YYY
  token = parseTokenYY.exec(dateString) || parseTokenYYY.exec(dateString)
  if (token) {
    var centuryString = token[1]
    return {
      year: parseInt(centuryString, 10) * 100,
      restDateString: dateString.slice(centuryString.length)
    }
  }

  // Invalid ISO-formatted year
  return {
    year: null
  }
}

function parseDate (dateString, year) {
  // Invalid ISO-formatted year
  if (year === null) {
    return null
  }

  var token
  var date
  var month
  var week

  // YYYY
  if (dateString.length === 0) {
    date = new Date(0)
    date.setUTCFullYear(year)
    return date
  }

  // YYYY-MM
  token = parseTokenMM.exec(dateString)
  if (token) {
    date = new Date(0)
    month = parseInt(token[1], 10) - 1
    date.setUTCFullYear(year, month)
    return date
  }

  // YYYY-DDD or YYYYDDD
  token = parseTokenDDD.exec(dateString)
  if (token) {
    date = new Date(0)
    var dayOfYear = parseInt(token[1], 10)
    date.setUTCFullYear(year, 0, dayOfYear)
    return date
  }

  // YYYY-MM-DD or YYYYMMDD
  token = parseTokenMMDD.exec(dateString)
  if (token) {
    date = new Date(0)
    month = parseInt(token[1], 10) - 1
    var day = parseInt(token[2], 10)
    date.setUTCFullYear(year, month, day)
    return date
  }

  // YYYY-Www or YYYYWww
  token = parseTokenWww.exec(dateString)
  if (token) {
    week = parseInt(token[1], 10) - 1
    return dayOfISOYear(year, week)
  }

  // YYYY-Www-D or YYYYWwwD
  token = parseTokenWwwD.exec(dateString)
  if (token) {
    week = parseInt(token[1], 10) - 1
    var dayOfWeek = parseInt(token[2], 10) - 1
    return dayOfISOYear(year, week, dayOfWeek)
  }

  // Invalid ISO-formatted date
  return null
}

function parseTime (timeString) {
  var token
  var hours
  var minutes

  // hh
  token = parseTokenHH.exec(timeString)
  if (token) {
    hours = parseFloat(token[1].replace(',', '.'))
    return (hours % 24) * MILLISECONDS_IN_HOUR
  }

  // hh:mm or hhmm
  token = parseTokenHHMM.exec(timeString)
  if (token) {
    hours = parseInt(token[1], 10)
    minutes = parseFloat(token[2].replace(',', '.'))
    return (hours % 24) * MILLISECONDS_IN_HOUR +
      minutes * MILLISECONDS_IN_MINUTE
  }

  // hh:mm:ss or hhmmss
  token = parseTokenHHMMSS.exec(timeString)
  if (token) {
    hours = parseInt(token[1], 10)
    minutes = parseInt(token[2], 10)
    var seconds = parseFloat(token[3].replace(',', '.'))
    return (hours % 24) * MILLISECONDS_IN_HOUR +
      minutes * MILLISECONDS_IN_MINUTE +
      seconds * 1000
  }

  // Invalid ISO-formatted time
  return null
}

function parseTimezone (timezoneString) {
  var token
  var absoluteOffset

  // Z
  token = parseTokenTimezoneZ.exec(timezoneString)
  if (token) {
    return 0
  }

  // ±hh
  token = parseTokenTimezoneHH.exec(timezoneString)
  if (token) {
    absoluteOffset = parseInt(token[2], 10) * 60
    return (token[1] === '+') ? -absoluteOffset : absoluteOffset
  }

  // ±hh:mm or ±hhmm
  token = parseTokenTimezoneHHMM.exec(timezoneString)
  if (token) {
    absoluteOffset = parseInt(token[2], 10) * 60 + parseInt(token[3], 10)
    return (token[1] === '+') ? -absoluteOffset : absoluteOffset
  }

  return 0
}

function dayOfISOYear (isoYear, week, day) {
  week = week || 0
  day = day || 0
  var date = new Date(0)
  date.setUTCFullYear(isoYear, 0, 4)
  var fourthOfJanuaryDay = date.getUTCDay() || 7
  var diff = week * 7 + day + 1 - fourthOfJanuaryDay
  date.setUTCDate(date.getUTCDate() + diff)
  return date
}

module.exports = parse


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _theme = __webpack_require__(2);

var _theme2 = _interopRequireDefault(_theme);

var _typo = __webpack_require__(4);

var _typo2 = _interopRequireDefault(_typo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var cmz = __webpack_require__(1);

var baseStyles = {
  root: cmz.named('AutoUI_ui_Button-32', /*cmz|*/'\n    display: inline-block\n    border: 2px solid transparent\n    background: transparent\n    text-align: center\n    outline: none\n    margin: 2px auto\n    padding: 10px 19px\n    text-decoration: none\n    cursor: pointer\n    white-space: nowrap\n    transition: all .3s ease-out\n  ' /*|cmz*/),

  content: cmz.named('AutoUI_ui_Button-46', _typo2.default.labelText, /*cmz|*/'font-size: inherit' /*|cmz*/)

  // Color options
};var colorStyles = {
  monochrome: cmz.named('AutoUI_ui_Button-51', baseStyles.root, '\n    & {\n      background-color: ' + _theme2.default.baseDarker + '\n      border-color: ' + _theme2.default.baseDarker + '\n      color: ' + _theme2.default.baseBrighter + '\n    }\n\n    &.outlined {\n      color: ' + _theme2.default.baseDarker + '\n    }\n\n    &:hover {\n      background-color: ' + _theme2.default.baseDarker.lighten(0.5) + '\n      border-color: ' + _theme2.default.baseDarker.lighten(0.5) + '\n      color: ' + _theme2.default.baseBrighter + '\n    }\n  '),

  normal: cmz.named('AutoUI_ui_Button-70', baseStyles.root, '\n    & {\n      background-color: ' + _theme2.default.baseRed + '\n      border-color: ' + _theme2.default.baseRed + '\n      color: ' + _theme2.default.baseBrighter + '\n    }\n\n    &.outlined {\n      color: ' + _theme2.default.baseRed + '\n    }\n\n    &:hover {\n      background-color: ' + _theme2.default.baseRed.darken(0.2) + '\n      border-color: ' + _theme2.default.baseRed.darken(0.2) + '\n      color: ' + _theme2.default.baseBrighter + '\n    }\n  '),

  silver: cmz.named('AutoUI_ui_Button-89', baseStyles.root, '\n    & {\n      background-color: ' + _theme2.default.lineSilver2 + '\n      border-color: ' + _theme2.default.lineSilver2 + '\n      color: ' + _theme2.default.baseDark + '\n    }\n\n    &.outlined {\n      color: ' + _theme2.default.baseDark + '\n    }\n\n    &.outlined.raised:hover {\n      background-color: transparent\n      border-color: transparent\n    }\n\n    &:hover {\n      background-color: ' + _theme2.default.lineSilver2.darken(0.025) + '\n      border-color: ' + _theme2.default.lineSilver2.darken(0.025) + '\n      color: ' + _theme2.default.baseDark + '\n    }\n  ')

  // Size options
};var sizeStyles = {
  small: cmz.named('AutoUI_ui_Button-116', /*cmz|*/'\n    font-size: 10px !important\n    padding: 8px 16px\n  ' /*|cmz*/),

  normal: cmz.named('AutoUI_ui_Button-121', /*cmz|*/'font-size: 12px !important' /*|cmz*/),

  large: cmz.named('AutoUI_ui_Button-123', /*cmz|*/'\n    font-size: 16px !important\n    padding: 14px 24px\n  ' /*|cmz*/)

  // Button variations
};var extraStyles = {
  disabled: cmz.named('AutoUI_ui_Button-131', '\n    &, &:hover {\n      background: ' + _theme2.default.baseHighlight + '\n      border-color: transparent\n      color: ' + _theme2.default.baseBrighter + '\n      pointer-events: none\n    }\n  '),

  outlined: cmz.named('AutoUI_ui_Button-140', '\n    & {\n      background-color: transparent\n    }\n\n    &.' + colorStyles.normal + ' {\n      color: ' + _theme2.default.baseRed + '\n    }\n\n    &.' + colorStyles.monochrome + ' {\n      color: ' + _theme2.default.baseDarker + '\n    }\n  '),

  block: cmz.named('AutoUI_ui_Button-154', /*cmz|*/'\n    display: block\n    margin: 10px auto\n    width: 200px\n  ' /*|cmz*/),

  rounded: cmz.named('AutoUI_ui_Button-160', /*cmz|*/'\n    border-radius: 4px\n  ' /*|cmz*/),

  raised: cmz.named('AutoUI_ui_Button-164', /*cmz|*/'\n    &:hover {\n      box-shadow: 0 2px 10px 1px rgba(0, 0, 0, .08)\n    }\n  ' /*|cmz*/),

  link: cmz.named('AutoUI_ui_Button-170', '\n    &.link {\n      font-size: 18px !important\n      border-color: transparent\n      color: ' + _theme2.default.typoLabel + '\n      line-height: 22px\n    }\n\n    &.link span {\n      text-transform: initial\n    }\n\n    &.link:hover {\n      background-color: ' + _theme2.default.lineSilver2.darken(0.025) + '\n      border-color: ' + _theme2.default.lineSilver2.darken(0.025) + '\n    }\n  '),

  selected: cmz.named('AutoUI_ui_Button-188', '\n    & {\n      border-color: ' + _theme2.default.baseRed + '\n    }\n\n    &.outlined.raised:hover {\n      box-shadow: none\n      border-color: ' + _theme2.default.baseRed + '\n    }\n  ')
};

var Button = function (_PureComponent) {
  _inherits(Button, _PureComponent);

  function Button() {
    _classCallCheck(this, Button);

    return _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
  }

  _createClass(Button, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          customClassName = _props.className,
          size = _props.size,
          color = _props.color,
          outlined = _props.outlined,
          disabled = _props.disabled,
          rounded = _props.rounded,
          raised = _props.raised,
          link = _props.link,
          selected = _props.selected,
          block = _props.block,
          CustomComponent = _props.component,
          children = _props.children,
          rest = _objectWithoutProperties(_props, ['className', 'size', 'color', 'outlined', 'disabled', 'rounded', 'raised', 'link', 'selected', 'block', 'component', 'children']);

      var colorClassName = colorStyles[color] || '';
      var sizeClassName = sizeStyles[size] || '';
      var extraClassName = [(outlined || link) && extraStyles.outlined, (outlined || link) && 'outlined', rounded && extraStyles.rounded, rounded && 'rounded', raised && extraStyles.raised, raised && 'raised', link && extraStyles.link, link && 'link', selected && extraStyles.selected, selected && 'selected', block && extraStyles.block, disabled && extraStyles.disabled].filter(Boolean).join(' ');
      var buttonClassName = colorClassName + ' ' + sizeClassName + ' ' + extraClassName;

      return _react2.default.createElement(
        CustomComponent,
        _extends({}, rest, { className: String(customClassName) + ' ' + buttonClassName }),
        _react2.default.createElement(
          'span',
          { className: baseStyles.content },
          children
        )
      );
    }
  }]);

  return Button;
}(_react.PureComponent);

Button.defaultProps = {
  className: '',
  component: 'button',
  color: 'normal',
  size: 'normal',
  outlined: false,
  disabled: false,
  rounded: false,
  raised: false,
  link: false,
  selected: false,
  block: false
};
exports.default = Button;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _elem = __webpack_require__(3);

var _elem2 = _interopRequireDefault(_elem);

var _theme = __webpack_require__(2);

var _theme2 = _interopRequireDefault(_theme);

var _typo = __webpack_require__(4);

var _typo2 = _interopRequireDefault(_typo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cmz = __webpack_require__(1);

var Root = _elem2.default.section(cmz.named('AutoUI_ui_Text-29', /*cmz|*/'\n  white-space: pre-line\n  margin: 0\n  clear: both\n' /*|cmz*/));

var Heading = _elem2.default.h1();

var SubHeading = _elem2.default.h2();

var Level = _elem2.default.p();

var Divider = _elem2.default.span(cmz.named('AutoUI_ui_Text-41', _typo2.default.divider));

var Content = _elem2.default.div(cmz.named('AutoUI_ui_Text-43', _typo2.default.baseText, /*cmz|*/'margin: 15px 0' /*|cmz*/));

var PureContent = _elem2.default.span(cmz.named('AutoUI_ui_Text-48', _typo2.default.baseText));

var centerAlign = cmz.named('AutoUI_ui_Text-50', /*cmz|*/'text-align: center' /*|cmz*/);

var contentDividerCenter = cmz.named('AutoUI_ui_Text-52', /*cmz|*/'\n  margin-left: auto\n  margin-right: auto\n' /*|cmz*/);

var contentRequired = cmz.named('AutoUI_ui_Text-57', '\n  &::after {\n    content: \'*\'\n    margin-left: 5px\n    font-weight: bold\n    color: ' + _theme2.default.baseRed + '\n  }\n');

var Text = function (_PureComponent) {
  _inherits(Text, _PureComponent);

  function Text() {
    _classCallCheck(this, Text);

    return _possibleConstructorReturn(this, (Text.__proto__ || Object.getPrototypeOf(Text)).apply(this, arguments));
  }

  _createClass(Text, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          heading = _props.heading,
          subHeading = _props.subHeading,
          _props$headingType = _props.headingType,
          headingType = _props$headingType === undefined ? 'headline' : _props$headingType,
          _props$subHeadingType = _props.subHeadingType,
          subHeadingType = _props$subHeadingType === undefined ? 'heading' : _props$subHeadingType,
          level = _props.level,
          content = _props.content,
          isCentered = _props.isCentered,
          hasDivider = _props.hasDivider,
          isPureContent = _props.isPureContent,
          required = _props.required;

      var requiredProps = required ? { className: contentRequired } : {};

      if (isPureContent) {
        return PureContent(requiredProps, content);
      }

      return Root(isCentered ? { className: centerAlign } : {}, heading && Heading({ className: _typo2.default[headingType] }, heading), subHeading && SubHeading({ className: _typo2.default[subHeadingType] }, subHeading), level && Level({ className: _typo2.default.subheading }, level), hasDivider && Divider(isCentered ? { className: contentDividerCenter } : {}), Content(requiredProps, content));
    }
  }]);

  return Text;
}(_react.PureComponent);

Text.defaultProps = {
  isCentered: false,
  hasDivider: false,
  isPureContent: false,
  required: false
};
exports.default = Text;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _elem = __webpack_require__(3);

var _elem2 = _interopRequireDefault(_elem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cmz = __webpack_require__(1);

var Root = _elem2.default.div(cmz.named('AutoUI_ui_Avatar-15', /*cmz|*/'\n  display: inline-block\n  border-radius: 50%\n  overflow: hidden\n' /*|cmz*/));

var Image = _elem2.default.img(cmz.named('AutoUI_ui_Avatar-21', /*cmz|*/'\n  max-width: 100%\n  display:block\n  height: auto\n' /*|cmz*/));

var Avatar = function (_PureComponent) {
  _inherits(Avatar, _PureComponent);

  function Avatar() {
    _classCallCheck(this, Avatar);

    return _possibleConstructorReturn(this, (Avatar.__proto__ || Object.getPrototypeOf(Avatar)).apply(this, arguments));
  }

  _createClass(Avatar, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          alt = _props.alt,
          src = _props.src,
          size = _props.size;


      return Root(Image({
        alt: alt,
        src: src,
        width: size,
        height: size
      }));
    }
  }]);

  return Avatar;
}(_react.PureComponent);

Avatar.defaultProps = {
  size: 64,
  alt: ''
};
exports.default = Avatar;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cmz = __webpack_require__(1);

var cx = {
  list: cmz.named('AutoUI_ui_TruncatedList-8', /*cmz|*/'\n    list-style: none\n    margin: 0\n    padding: 0\n  ' /*|cmz*/),

  item: cmz.named('AutoUI_ui_TruncatedList-14', /*cmz|*/'\n    display: inline-block\n    padding: 0\n  ' /*|cmz*/),

  hidden: cmz.named('AutoUI_ui_TruncatedList-19', /*cmz|*/'\n    display: none\n  ' /*|cmz*/)
};

var TruncatedList = function (_PureComponent) {
  _inherits(TruncatedList, _PureComponent);

  function TruncatedList(props) {
    _classCallCheck(this, TruncatedList);

    var _this = _possibleConstructorReturn(this, (TruncatedList.__proto__ || Object.getPrototypeOf(TruncatedList)).call(this, props));

    _initialiseProps.call(_this);

    _this.state = _this.getUpToDateState({}, _this.props);
    return _this;
  }

  _createClass(TruncatedList, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var _this2 = this;

      if (!Object.is(prevProps, this.props)) {
        this.setState(function (prevState, props) {
          return _this2.getUpToDateState(prevState, props);
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props = this.props,
          items = _props.items,
          visible = _props.visible,
          increment = _props.increment,
          inserted = _props.inserted,
          viewMore = _props.viewMore,
          isFetching = _props.isFetching,
          hasMore = _props.hasMore,
          listClass = _props.listClass,
          itemClass = _props.itemClass;
      var _state = this.state,
          allVisible = _state.allVisible,
          hiddenItems = _state.hiddenItems,
          page = _state.page,
          itemsLength = _state.itemsLength;


      var realVisible = inserted ? visible - 1 : visible;
      var nextIncrement = increment || itemsLength - realVisible;
      var nextRealIncrement = hiddenItems < nextIncrement || inserted && nextIncrement + 1 === hiddenItems ? hiddenItems : nextIncrement;
      var nextView = increment ? realVisible + (page > 1 ? (page - 1) * increment : 0) : realVisible + nextRealIncrement;

      var renderShowMore = function renderShowMore() {
        return viewMore ? viewMore(nextRealIncrement, _this3.handleViewMore, isFetching) : _react2.default.createElement(
          'li',
          {
            className: [cx.item, itemClass].join(' '),
            onClick: !isFetching && _this3.handleViewMore
          },
          isFetching ? 'Loading more...' : increment ? '+' + nextRealIncrement + ' more' : '+' + hiddenItems + ' more'
        );
      };

      return itemsLength > 0 ? _react2.default.createElement(
        'ul',
        { className: [cx.list, listClass].join(' ') },
        items.map(function (item, i) {
          var isVisible = allVisible || i < realVisible || increment && i < nextView ? [cx.item, itemClass].join(' ') : [cx.item, cx.hidden].join(' ');
          return _react2.default.createElement(
            'li',
            { className: isVisible, key: i },
            item
          );
        }),
        (!allVisible || hasMore) && renderShowMore()
      ) : null;
    }
  }]);

  return TruncatedList;
}(_react.PureComponent);

TruncatedList.defaultProps = {
  items: [],
  visible: 2,
  increment: 0,
  inserted: false,
  isFetching: false,
  hasMore: false
};

var _initialiseProps = function _initialiseProps() {
  var _this4 = this;

  this.getUpToDateState = function (prevState, props) {
    var items = props.items,
        visible = props.visible,
        increment = props.increment,
        inserted = props.inserted,
        page = props.page;

    var hiddenAmount = items.length >= visible ? items.length - visible : 0;

    return {
      allVisible: prevState.allVisible || hiddenAmount === 0,
      hiddenItems: inserted ? hiddenAmount + 1 : hiddenAmount,
      page: page || prevState.page || 1,
      pagesCount: increment ? hiddenAmount / increment + 1 : 2,
      itemsLength: items.length
    };
  };

  this.handleViewMore = function (e) {
    e && e.stopPropagation();
    var _props2 = _this4.props,
        visible = _props2.visible,
        increment = _props2.increment,
        inserted = _props2.inserted;


    _this4.setState(function (prevState) {
      return {
        allVisible: increment ? prevState.page + 1 >= prevState.pagesCount : true,
        hiddenItems: increment ? prevState.itemsLength - (inserted ? visible - 1 : visible) - prevState.page * increment : 0,
        page: increment ? prevState.page + 1 : prevState.pagesCount
      };
    });
  };
};

exports.default = TruncatedList;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactClickOutside = __webpack_require__(47);

var _reactClickOutside2 = _interopRequireDefault(_reactClickOutside);

var _SvgIcon = __webpack_require__(5);

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

var _theme = __webpack_require__(2);

var _theme2 = _interopRequireDefault(_theme);

var _typo = __webpack_require__(4);

var _typo2 = _interopRequireDefault(_typo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cmz = __webpack_require__(1);

var styles = {
  dropdown: cmz.named('AutoUI_ui_Dropdown-17', _typo2.default.baseText, /*cmz|*/'\n      position: relative\n      display: inline-block\n    ' /*|cmz*/),
  label: cmz.named('AutoUI_ui_Dropdown-24', /*cmz|*/'\n    & {\n      font-weight: normal\n      cursor: pointer\n      display: flex\n      align-items: center\n      justify-content: center\n      line-height: 16px\n    }\n\n    & > * {\n      margin: 0 0 0 6px\n    }\n\n    & > :first-child {\n      margin: 0\n    }\n  ' /*|cmz*/),
  labelElement: cmz.named('AutoUI_ui_Dropdown-42', /*cmz|*/'\n    width: 100%\n    white-space: nowrap\n  ' /*|cmz*/),
  padded: cmz.named('AutoUI_ui_Dropdown-46', /*cmz|*/'\n    padding: 10px\n  ' /*|cmz*/),
  triangle: cmz.named('AutoUI_ui_Dropdown-49', /*cmz|*/'\n    transform: translateY(-3px)\n  ' /*|cmz*/),
  content: cmz.named('AutoUI_ui_Dropdown-52', /*cmz|*/'\n    position: absolute\n    z-index: 999\n    visibility: hidden\n    opacity: 0\n    transition: visibility 0s linear 0.2s, opacity 0.2s linear\n    width: inherit\n    top: 100%\n  ' /*|cmz*/),
  contentVisible: cmz.named('AutoUI_ui_Dropdown-61', /*cmz|*/'\n    visibility: visible\n    opacity: 1\n    transition-delay: 0s\n  ' /*|cmz*/),
  contentRight: cmz.named('AutoUI_ui_Dropdown-66', /*cmz|*/'\n    right: 0\n  ' /*|cmz*/),
  contentTop: cmz.named('AutoUI_ui_Dropdown-69', /*cmz|*/'\n    top: unset\n    bottom: 100%\n  ' /*|cmz*/),
  tooltip: cmz.named('AutoUI_ui_Dropdown-73', '\n    & {\n      box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.1)\n      box-sizing: border-box\n      min-width: 190px\n      border: 1px solid ' + _theme2.default.lineSilver2 + '\n      background: white\n      padding: 0 10px\n      white-space: nowrap\n      position: relative\n    }\n\n    &:before, &:after {\n      content: \'\'\n      position: absolute\n      left: 4px\n      display: block\n      border-left: 10px solid transparent\n      border-right: 10px solid transparent\n    }\n\n    &:before {\n      border-bottom: 10px solid ' + _theme2.default.lineSilver2 + '\n      bottom: 100%\n    }\n\n    &:after {\n      border-bottom: 10px solid ' + _theme2.default.baseBrighter + '\n      bottom: calc(100% - 1px)\n    }\n  '),
  tooltipTop: cmz.named('AutoUI_ui_Dropdown-104', '\n    &:before {\n      border-top: 10px solid ' + _theme2.default.lineSilver2 + '\n      border-bottom: none\n      bottom: -10px\n    }\n\n    &:after {\n      border-top: 10px solid ' + _theme2.default.baseBrighter + '\n      border-bottom: none\n      bottom: -9px\n    }\n  '),
  contentTooltip: cmz.named('AutoUI_ui_Dropdown-117', /*cmz|*/'\n    padding-top: 10px\n  ' /*|cmz*/),
  contentTooltipTop: cmz.named('AutoUI_ui_Dropdown-120', /*cmz|*/'\n    padding-top: unset\n    padding-bottom: 10px\n  ' /*|cmz*/)
};

var Dropdown = function (_PureComponent) {
  _inherits(Dropdown, _PureComponent);

  function Dropdown() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Dropdown);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Dropdown.__proto__ || Object.getPrototypeOf(Dropdown)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      open: false
    }, _this.toggle = function () {
      return _this.setState(function (prevState) {
        return { open: !prevState.open };
      });
    }, _this.open = function () {
      return _this.setState(function (prevState) {
        return { open: true };
      });
    }, _this.close = function () {
      return _this.setState(function () {
        return { open: false };
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Dropdown, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          icon = _props.icon,
          label = _props.label,
          children = _props.children,
          targetXOrigin = _props.targetXOrigin,
          targetYOrigin = _props.targetYOrigin,
          hover = _props.hover,
          indicator = _props.indicator,
          padded = _props.padded,
          toggle = _props.toggle,
          tooltip = _props.tooltip,
          className = _props.className;
      var open = this.state.open;


      var rootClasses = [styles.dropdown, className || ''].join(' ');
      var labelClasses = [styles.label, padded ? styles.padded : ''].join(' ');
      var contentClasses = [styles.content, open ? styles.contentVisible : '', targetXOrigin === 'right' ? styles.contentRight : '', targetYOrigin === 'top' ? styles.contentTop : '', tooltip && children ? targetYOrigin === 'top' ? styles.contentTooltipTop : styles.contentTooltip : ''].join(' ');
      var tooltipClasses = [styles.tooltip, targetYOrigin === 'top' ? styles.tooltipTop : ''].join(' ');

      var handleClick = function handleClick(e) {
        e && e.stopPropagation();
        return toggle ? _this2.toggle() : _this2.open();
      };

      var dropdownChildren = function dropdownChildren() {
        return _react2.default.Children.map(children, function (child) {
          var props = child.props;

          var _ref2 = props || false,
              closeDropdown = _ref2.closeDropdown;

          return closeDropdown ? _react2.default.cloneElement(child, { closeDropdown: _this2.close }) : child;
        });
      };

      return children || label || icon ? _react2.default.createElement(
        _reactClickOutside2.default,
        { onClickOutside: this.close },
        _react2.default.createElement(
          'div',
          {
            className: rootClasses,
            onMouseEnter: hover && this.open,
            onMouseLeave: hover && this.close
          },
          _react2.default.createElement(
            'div',
            { className: labelClasses, onClick: handleClick },
            icon && _react2.default.createElement(_SvgIcon2.default, { icon: icon, color: 'text' }),
            label && _react2.default.createElement(
              'span',
              { className: styles.labelElement },
              label
            ),
            indicator && _react2.default.createElement(
              'span',
              { className: styles.triangle },
              _react2.default.createElement(_SvgIcon2.default, {
                icon: open ? 'triangleup' : 'triangledown',
                color: 'text'
              })
            )
          ),
          children && _react2.default.createElement(
            'div',
            { className: contentClasses },
            tooltip ? _react2.default.createElement(
              'div',
              { className: tooltipClasses },
              dropdownChildren()
            ) : dropdownChildren()
          )
        )
      ) : null;
    }
  }]);

  return Dropdown;
}(_react.PureComponent);

Dropdown.defaultProps = {
  icon: '',
  label: '',
  children: null,
  targetXOrigin: 'left',
  targetYOrigin: 'bottom',
  hover: false,
  indicator: false,
  padded: false,
  toggle: true
};
exports.default = Dropdown;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (process.env.NODE_ENV !== 'production') {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _withAutosize = __webpack_require__(74);

var _withAutosize2 = _interopRequireDefault(_withAutosize);

var _Text = __webpack_require__(9);

var _Text2 = _interopRequireDefault(_Text);

var _elem = __webpack_require__(3);

var _elem2 = _interopRequireDefault(_elem);

var _theme = __webpack_require__(2);

var _theme2 = _interopRequireDefault(_theme);

var _typo = __webpack_require__(4);

var _typo2 = _interopRequireDefault(_typo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var cmz = __webpack_require__(1);

var circle = function circle(size) {
  return '\n  content: \' \';\n  position: absolute;\n  width: ' + size + 'px;\n  height: ' + size + 'px;\n  border-radius: 50%;\n';
};

var radioInputStyles = {
  circle: cmz.named('AutoUI_forms_InputField-42', '\n    ' + circle(18) + '\n    top: 6px\n    border: 1px solid ' + _theme2.default.formBorder + '\n    box-sizing: border-box\n    left: 0\n  '),

  input: cmz.named('AutoUI_forms_InputField-50', '\n    & {\n      display: none !important\n    }\n\n    &:checked ~ span:after {\n      ' + circle(10) + '\n      top: -1px\n      right: -1px\n      margin: 4px\n      background-color: ' + _theme2.default.baseRed + '\n    }\n  '),

  option: cmz.named('AutoUI_forms_InputField-64', /*cmz|*/'\n    margin-left: 50px\n  ' /*|cmz*/)
};

var labelStyles = cmz.named('AutoUI_forms_InputField-69', _typo2.default.baseText, /*cmz|*/'\n    margin-left: 30px\n    display: inherit\n  ' /*|cmz*/);

var ComponentRoot = _elem2.default.div();
var FieldRoot = _elem2.default.div(cmz.named('AutoUI_forms_InputField-78', /*cmz|*/'\n  display: inline-block\n  position: relative\n' /*|cmz*/));
var RadioCircle = _elem2.default.span(radioInputStyles.circle);
var Label = _elem2.default.label(labelStyles);

var inputStyles = [_typo2.default.formText, cmz.named('AutoUI_forms_InputField-87', '\n    & {\n      position: relative\n      display: table-cell\n      margin: 0\n      outline: none\n      width: 100%\n      height: 70px\n      padding: 8px 18px\n      border: 1px solid ' + _theme2.default.formBorder + '\n      box-sizing: border-box\n      z-index: 2\n    }\n\n    &::-webkit-input-placeholder {\n      color: ' + _theme2.default.formPlaceholder + '\n    }\n\n    &::-moz-placeholder {\n      color: ' + _theme2.default.formPlaceholder + '\n    }\n  ')];

var inputWithPostText = cmz.named('AutoUI_forms_InputField-111', /*cmz|*/'\n  margin-right: 10px\n' /*|cmz*/);

var errorInput = cmz.named('AutoUI_forms_InputField-115', '\n  background: ' + _theme2.default.formErrorShadow + '\n  border-color: ' + _theme2.default.formError + '\n  color: ' + _theme2.default.formError + '\n');

var checkboxInputStyles = {
  input: cmz.named('AutoUI_forms_InputField-122', '\n    & {\n      display: none !important\n    }\n\n    &:checked ~ span {\n      background-color: ' + _theme2.default.baseRed + '\n    }\n    &:checked ~ span:after {\n      opacity: 1\n    }\n  '),

  tick: cmz.named('AutoUI_forms_InputField-135', '\n    & {\n      position: absolute\n      width: 18px\n      height: 18px\n      top: 6px\n      left: 0\n      border: 1px solid ' + _theme2.default.formBorder + '\n      border-radius: 4px\n    }\n\n    &:after {\n      opacity: 0\n      content: \' \'\n      position: absolute\n      width: 8px\n      height: 4px\n      top: 5px\n      left: 4px\n      border: 2px solid ' + _theme2.default.baseBrighter + '\n      border-top: none\n      border-right: none\n      transform: rotate(-45deg)\n      transition: all 0.25s ease\n    }\n  ')
};

var CheckboxTick = _elem2.default.span(checkboxInputStyles.tick);

var slidingCheckboxInputStyles = {
  input: cmz.named('AutoUI_forms_InputField-166', '\n    & {\n      display: none !important\n    }\n\n    &:checked ~ span:before {\n      background-color: ' + _theme2.default.baseLightRed + '\n    }\n\n    &:checked ~ span:after {\n      background-color: ' + _theme2.default.baseRed + '\n      transform: translate(100%, -50%)\n    }\n  '),

  tick: cmz.named('AutoUI_forms_InputField-181', '\n    & {\n      margin-left: 26px\n      cursor: pointer\n    }\n\n    &:before {\n      content: \'\'\n      position: absolute\n      top: 50%\n      left: 0\n      width: 46px\n      height: 12px\n      border-radius: 12px\n      background-color: ' + _theme2.default.sliderBackground + '\n      transform: translateY(-50%)\n      transition: background-color 200ms ease-in-out\n    }\n\n    &:after {\n      content: \'\'\n      position: absolute\n      top: 50%\n      left: 0\n      width: 24px\n      height: 24px\n      border-radius: 50%\n      background-color: ' + _theme2.default.sliderToggle + '\n      transform: translateY(-50%)\n      transition: transform 300ms ease-in-out, background-color 200ms ease-in-out\n    }\n  ')
};

var SlidingCheckboxTick = _elem2.default.span(slidingCheckboxInputStyles.tick);

var textareaStyles = cmz.named('AutoUI_forms_InputField-217', /*cmz|*/'\n  height: auto\n  line-height: 30px\n  resize: vertical\n' /*|cmz*/);

var getTagName = function getTagName(type) {
  return type === 'textarea' ? 'textarea' : 'input';
};

var TextareaWithAutosize = (0, _withAutosize2.default)('textarea');

var customTypesDefinitions = {
  'sliding-checkbox': 'checkbox'
};

var getFinalType = function getFinalType(type) {
  return customTypesDefinitions[type] || type;
};

var inputFactory = function inputFactory(type) {
  var finalType = getFinalType(type);
  return _elem2.default[getTagName(finalType)](inputStyles);
};

var specialTypesDefinitions = {
  radio: {
    className: radioInputStyles.input,
    ElemBox: RadioCircle,
    ElemLabel: Label
  },
  checkbox: {
    className: checkboxInputStyles.input,
    ElemBox: CheckboxTick,
    ElemLabel: Label
  },
  'sliding-checkbox': {
    className: slidingCheckboxInputStyles.input,
    ElemBox: SlidingCheckboxTick,
    ElemLabel: Label
  }
};

var isSpecialType = function isSpecialType(type) {
  return Boolean(specialTypesDefinitions[type]);
};

var InputField = function (_PureComponent) {
  _inherits(InputField, _PureComponent);

  function InputField() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, InputField);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = InputField.__proto__ || Object.getPrototypeOf(InputField)).call.apply(_ref, [this].concat(args))), _this), _this.renderField = function () {
      var _props = _this.props,
          type = _props.type,
          label = _props.label,
          id = _props.id,
          name = _props.name,
          value = _props.value,
          onChange = _props.onChange,
          isInvalid = _props.isInvalid,
          postText = _props.postText,
          linesLimit = _props.linesLimit,
          rest = _objectWithoutProperties(_props, ['type', 'label', 'id', 'name', 'value', 'onChange', 'isInvalid', 'postText', 'linesLimit']);

      var Tag = inputFactory(type);
      var inputId = id || name;
      var labelId = inputId ? 'label-' + inputId : '';
      var errorClassName = isInvalid ? errorInput : '';
      var spacingClassName = postText ? inputWithPostText : '';
      var finalType = getFinalType(type);
      var baseProps = {
        name: name,
        id: inputId,
        value: value,
        onChange: onChange,
        'aria-labelledby': labelId
      };

      if (isSpecialType(type)) {
        var _specialTypesDefiniti = specialTypesDefinitions[type],
            ElemBox = _specialTypesDefiniti.ElemBox,
            ElemLabel = _specialTypesDefiniti.ElemLabel,
            className = _specialTypesDefiniti.className;


        return FieldRoot(ElemLabel(Tag(_extends({}, baseProps, {
          className: className + ' ' + spacingClassName,
          type: finalType
        }, rest)), ElemBox(), label));
      }

      if (type === 'textarea') {
        var props = _extends({}, baseProps, {
          className: inputStyles.join(' ') + ' ' + textareaStyles + ' ' + errorClassName + ' ' + spacingClassName,
          type: type,
          linesLimit: linesLimit
        }, rest);
        return _react2.default.createElement(TextareaWithAutosize, props);
      }

      return Tag(_extends({}, baseProps, {
        className: errorClassName + ' ' + spacingClassName,
        type: type
      }, rest));
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(InputField, [{
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          label = _props2.label,
          type = _props2.type,
          id = _props2.id,
          name = _props2.name,
          postText = _props2.postText,
          required = _props2.required;


      var inputId = id || name;
      var labelId = inputId ? 'label-' + inputId : '';

      var RootComponent = isSpecialType(type) ? FieldRoot : ComponentRoot;
      var postLabel = postText && _react2.default.createElement(_Text2.default, { content: postText, isPureContent: true });

      return RootComponent(label ? _react2.default.createElement(
        'label',
        { id: labelId },
        !isSpecialType(type) && _react2.default.createElement(_Text2.default, { content: label, required: required }),
        this.renderField(),
        postLabel
      ) : this.renderField());
    }
  }]);

  return InputField;
}(_react.PureComponent);

InputField.defaultProps = {
  type: 'text',
  isInvalid: false,
  required: false
};
exports.default = InputField;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(7)

/**
 * @category Millisecond Helpers
 * @summary Get the number of milliseconds between the given dates.
 *
 * @description
 * Get the number of milliseconds between the given dates.
 *
 * @param {Date|String|Number} dateLeft - the later date
 * @param {Date|String|Number} dateRight - the earlier date
 * @returns {Number} the number of milliseconds
 *
 * @example
 * // How many milliseconds are between
 * // 2 July 2014 12:30:20.600 and 2 July 2014 12:30:21.700?
 * var result = differenceInMilliseconds(
 *   new Date(2014, 6, 2, 12, 30, 21, 700),
 *   new Date(2014, 6, 2, 12, 30, 20, 600)
 * )
 * //=> 1100
 */
function differenceInMilliseconds (dirtyDateLeft, dirtyDateRight) {
  var dateLeft = parse(dirtyDateLeft)
  var dateRight = parse(dirtyDateRight)
  return dateLeft.getTime() - dateRight.getTime()
}

module.exports = differenceInMilliseconds


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var startOfWeek = __webpack_require__(88)

/**
 * @category ISO Week Helpers
 * @summary Return the start of an ISO week for the given date.
 *
 * @description
 * Return the start of an ISO week for the given date.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the start of an ISO week
 *
 * @example
 * // The start of an ISO week for 2 September 2014 11:55:00:
 * var result = startOfISOWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Mon Sep 01 2014 00:00:00
 */
function startOfISOWeek (dirtyDate) {
  return startOfWeek(dirtyDate, {weekStartsOn: 1})
}

module.exports = startOfISOWeek


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
	"aliceblue": [240, 248, 255],
	"antiquewhite": [250, 235, 215],
	"aqua": [0, 255, 255],
	"aquamarine": [127, 255, 212],
	"azure": [240, 255, 255],
	"beige": [245, 245, 220],
	"bisque": [255, 228, 196],
	"black": [0, 0, 0],
	"blanchedalmond": [255, 235, 205],
	"blue": [0, 0, 255],
	"blueviolet": [138, 43, 226],
	"brown": [165, 42, 42],
	"burlywood": [222, 184, 135],
	"cadetblue": [95, 158, 160],
	"chartreuse": [127, 255, 0],
	"chocolate": [210, 105, 30],
	"coral": [255, 127, 80],
	"cornflowerblue": [100, 149, 237],
	"cornsilk": [255, 248, 220],
	"crimson": [220, 20, 60],
	"cyan": [0, 255, 255],
	"darkblue": [0, 0, 139],
	"darkcyan": [0, 139, 139],
	"darkgoldenrod": [184, 134, 11],
	"darkgray": [169, 169, 169],
	"darkgreen": [0, 100, 0],
	"darkgrey": [169, 169, 169],
	"darkkhaki": [189, 183, 107],
	"darkmagenta": [139, 0, 139],
	"darkolivegreen": [85, 107, 47],
	"darkorange": [255, 140, 0],
	"darkorchid": [153, 50, 204],
	"darkred": [139, 0, 0],
	"darksalmon": [233, 150, 122],
	"darkseagreen": [143, 188, 143],
	"darkslateblue": [72, 61, 139],
	"darkslategray": [47, 79, 79],
	"darkslategrey": [47, 79, 79],
	"darkturquoise": [0, 206, 209],
	"darkviolet": [148, 0, 211],
	"deeppink": [255, 20, 147],
	"deepskyblue": [0, 191, 255],
	"dimgray": [105, 105, 105],
	"dimgrey": [105, 105, 105],
	"dodgerblue": [30, 144, 255],
	"firebrick": [178, 34, 34],
	"floralwhite": [255, 250, 240],
	"forestgreen": [34, 139, 34],
	"fuchsia": [255, 0, 255],
	"gainsboro": [220, 220, 220],
	"ghostwhite": [248, 248, 255],
	"gold": [255, 215, 0],
	"goldenrod": [218, 165, 32],
	"gray": [128, 128, 128],
	"green": [0, 128, 0],
	"greenyellow": [173, 255, 47],
	"grey": [128, 128, 128],
	"honeydew": [240, 255, 240],
	"hotpink": [255, 105, 180],
	"indianred": [205, 92, 92],
	"indigo": [75, 0, 130],
	"ivory": [255, 255, 240],
	"khaki": [240, 230, 140],
	"lavender": [230, 230, 250],
	"lavenderblush": [255, 240, 245],
	"lawngreen": [124, 252, 0],
	"lemonchiffon": [255, 250, 205],
	"lightblue": [173, 216, 230],
	"lightcoral": [240, 128, 128],
	"lightcyan": [224, 255, 255],
	"lightgoldenrodyellow": [250, 250, 210],
	"lightgray": [211, 211, 211],
	"lightgreen": [144, 238, 144],
	"lightgrey": [211, 211, 211],
	"lightpink": [255, 182, 193],
	"lightsalmon": [255, 160, 122],
	"lightseagreen": [32, 178, 170],
	"lightskyblue": [135, 206, 250],
	"lightslategray": [119, 136, 153],
	"lightslategrey": [119, 136, 153],
	"lightsteelblue": [176, 196, 222],
	"lightyellow": [255, 255, 224],
	"lime": [0, 255, 0],
	"limegreen": [50, 205, 50],
	"linen": [250, 240, 230],
	"magenta": [255, 0, 255],
	"maroon": [128, 0, 0],
	"mediumaquamarine": [102, 205, 170],
	"mediumblue": [0, 0, 205],
	"mediumorchid": [186, 85, 211],
	"mediumpurple": [147, 112, 219],
	"mediumseagreen": [60, 179, 113],
	"mediumslateblue": [123, 104, 238],
	"mediumspringgreen": [0, 250, 154],
	"mediumturquoise": [72, 209, 204],
	"mediumvioletred": [199, 21, 133],
	"midnightblue": [25, 25, 112],
	"mintcream": [245, 255, 250],
	"mistyrose": [255, 228, 225],
	"moccasin": [255, 228, 181],
	"navajowhite": [255, 222, 173],
	"navy": [0, 0, 128],
	"oldlace": [253, 245, 230],
	"olive": [128, 128, 0],
	"olivedrab": [107, 142, 35],
	"orange": [255, 165, 0],
	"orangered": [255, 69, 0],
	"orchid": [218, 112, 214],
	"palegoldenrod": [238, 232, 170],
	"palegreen": [152, 251, 152],
	"paleturquoise": [175, 238, 238],
	"palevioletred": [219, 112, 147],
	"papayawhip": [255, 239, 213],
	"peachpuff": [255, 218, 185],
	"peru": [205, 133, 63],
	"pink": [255, 192, 203],
	"plum": [221, 160, 221],
	"powderblue": [176, 224, 230],
	"purple": [128, 0, 128],
	"rebeccapurple": [102, 51, 153],
	"red": [255, 0, 0],
	"rosybrown": [188, 143, 143],
	"royalblue": [65, 105, 225],
	"saddlebrown": [139, 69, 19],
	"salmon": [250, 128, 114],
	"sandybrown": [244, 164, 96],
	"seagreen": [46, 139, 87],
	"seashell": [255, 245, 238],
	"sienna": [160, 82, 45],
	"silver": [192, 192, 192],
	"skyblue": [135, 206, 235],
	"slateblue": [106, 90, 205],
	"slategray": [112, 128, 144],
	"slategrey": [112, 128, 144],
	"snow": [255, 250, 250],
	"springgreen": [0, 255, 127],
	"steelblue": [70, 130, 180],
	"tan": [210, 180, 140],
	"teal": [0, 128, 128],
	"thistle": [216, 191, 216],
	"tomato": [255, 99, 71],
	"turquoise": [64, 224, 208],
	"violet": [238, 130, 238],
	"wheat": [245, 222, 179],
	"white": [255, 255, 255],
	"whitesmoke": [245, 245, 245],
	"yellow": [255, 255, 0],
	"yellowgreen": [154, 205, 50]
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

/* MIT license */
var cssKeywords = __webpack_require__(19);

// NOTE: conversions should only return primitive values (i.e. arrays, or
//       values that give correct `typeof` results).
//       do not use box values types (i.e. Number(), String(), etc.)

var reverseKeywords = {};
for (var key in cssKeywords) {
	if (cssKeywords.hasOwnProperty(key)) {
		reverseKeywords[cssKeywords[key]] = key;
	}
}

var convert = module.exports = {
	rgb: {channels: 3, labels: 'rgb'},
	hsl: {channels: 3, labels: 'hsl'},
	hsv: {channels: 3, labels: 'hsv'},
	hwb: {channels: 3, labels: 'hwb'},
	cmyk: {channels: 4, labels: 'cmyk'},
	xyz: {channels: 3, labels: 'xyz'},
	lab: {channels: 3, labels: 'lab'},
	lch: {channels: 3, labels: 'lch'},
	hex: {channels: 1, labels: ['hex']},
	keyword: {channels: 1, labels: ['keyword']},
	ansi16: {channels: 1, labels: ['ansi16']},
	ansi256: {channels: 1, labels: ['ansi256']},
	hcg: {channels: 3, labels: ['h', 'c', 'g']},
	apple: {channels: 3, labels: ['r16', 'g16', 'b16']},
	gray: {channels: 1, labels: ['gray']}
};

// hide .channels and .labels properties
for (var model in convert) {
	if (convert.hasOwnProperty(model)) {
		if (!('channels' in convert[model])) {
			throw new Error('missing channels property: ' + model);
		}

		if (!('labels' in convert[model])) {
			throw new Error('missing channel labels property: ' + model);
		}

		if (convert[model].labels.length !== convert[model].channels) {
			throw new Error('channel and label counts mismatch: ' + model);
		}

		var channels = convert[model].channels;
		var labels = convert[model].labels;
		delete convert[model].channels;
		delete convert[model].labels;
		Object.defineProperty(convert[model], 'channels', {value: channels});
		Object.defineProperty(convert[model], 'labels', {value: labels});
	}
}

convert.rgb.hsl = function (rgb) {
	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;
	var min = Math.min(r, g, b);
	var max = Math.max(r, g, b);
	var delta = max - min;
	var h;
	var s;
	var l;

	if (max === min) {
		h = 0;
	} else if (r === max) {
		h = (g - b) / delta;
	} else if (g === max) {
		h = 2 + (b - r) / delta;
	} else if (b === max) {
		h = 4 + (r - g) / delta;
	}

	h = Math.min(h * 60, 360);

	if (h < 0) {
		h += 360;
	}

	l = (min + max) / 2;

	if (max === min) {
		s = 0;
	} else if (l <= 0.5) {
		s = delta / (max + min);
	} else {
		s = delta / (2 - max - min);
	}

	return [h, s * 100, l * 100];
};

convert.rgb.hsv = function (rgb) {
	var r = rgb[0];
	var g = rgb[1];
	var b = rgb[2];
	var min = Math.min(r, g, b);
	var max = Math.max(r, g, b);
	var delta = max - min;
	var h;
	var s;
	var v;

	if (max === 0) {
		s = 0;
	} else {
		s = (delta / max * 1000) / 10;
	}

	if (max === min) {
		h = 0;
	} else if (r === max) {
		h = (g - b) / delta;
	} else if (g === max) {
		h = 2 + (b - r) / delta;
	} else if (b === max) {
		h = 4 + (r - g) / delta;
	}

	h = Math.min(h * 60, 360);

	if (h < 0) {
		h += 360;
	}

	v = ((max / 255) * 1000) / 10;

	return [h, s, v];
};

convert.rgb.hwb = function (rgb) {
	var r = rgb[0];
	var g = rgb[1];
	var b = rgb[2];
	var h = convert.rgb.hsl(rgb)[0];
	var w = 1 / 255 * Math.min(r, Math.min(g, b));

	b = 1 - 1 / 255 * Math.max(r, Math.max(g, b));

	return [h, w * 100, b * 100];
};

convert.rgb.cmyk = function (rgb) {
	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;
	var c;
	var m;
	var y;
	var k;

	k = Math.min(1 - r, 1 - g, 1 - b);
	c = (1 - r - k) / (1 - k) || 0;
	m = (1 - g - k) / (1 - k) || 0;
	y = (1 - b - k) / (1 - k) || 0;

	return [c * 100, m * 100, y * 100, k * 100];
};

/**
 * See https://en.m.wikipedia.org/wiki/Euclidean_distance#Squared_Euclidean_distance
 * */
function comparativeDistance(x, y) {
	return (
		Math.pow(x[0] - y[0], 2) +
		Math.pow(x[1] - y[1], 2) +
		Math.pow(x[2] - y[2], 2)
	);
}

convert.rgb.keyword = function (rgb) {
	var reversed = reverseKeywords[rgb];
	if (reversed) {
		return reversed;
	}

	var currentClosestDistance = Infinity;
	var currentClosestKeyword;

	for (var keyword in cssKeywords) {
		if (cssKeywords.hasOwnProperty(keyword)) {
			var value = cssKeywords[keyword];

			// Compute comparative distance
			var distance = comparativeDistance(rgb, value);

			// Check if its less, if so set as closest
			if (distance < currentClosestDistance) {
				currentClosestDistance = distance;
				currentClosestKeyword = keyword;
			}
		}
	}

	return currentClosestKeyword;
};

convert.keyword.rgb = function (keyword) {
	return cssKeywords[keyword];
};

convert.rgb.xyz = function (rgb) {
	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;

	// assume sRGB
	r = r > 0.04045 ? Math.pow(((r + 0.055) / 1.055), 2.4) : (r / 12.92);
	g = g > 0.04045 ? Math.pow(((g + 0.055) / 1.055), 2.4) : (g / 12.92);
	b = b > 0.04045 ? Math.pow(((b + 0.055) / 1.055), 2.4) : (b / 12.92);

	var x = (r * 0.4124) + (g * 0.3576) + (b * 0.1805);
	var y = (r * 0.2126) + (g * 0.7152) + (b * 0.0722);
	var z = (r * 0.0193) + (g * 0.1192) + (b * 0.9505);

	return [x * 100, y * 100, z * 100];
};

convert.rgb.lab = function (rgb) {
	var xyz = convert.rgb.xyz(rgb);
	var x = xyz[0];
	var y = xyz[1];
	var z = xyz[2];
	var l;
	var a;
	var b;

	x /= 95.047;
	y /= 100;
	z /= 108.883;

	x = x > 0.008856 ? Math.pow(x, 1 / 3) : (7.787 * x) + (16 / 116);
	y = y > 0.008856 ? Math.pow(y, 1 / 3) : (7.787 * y) + (16 / 116);
	z = z > 0.008856 ? Math.pow(z, 1 / 3) : (7.787 * z) + (16 / 116);

	l = (116 * y) - 16;
	a = 500 * (x - y);
	b = 200 * (y - z);

	return [l, a, b];
};

convert.hsl.rgb = function (hsl) {
	var h = hsl[0] / 360;
	var s = hsl[1] / 100;
	var l = hsl[2] / 100;
	var t1;
	var t2;
	var t3;
	var rgb;
	var val;

	if (s === 0) {
		val = l * 255;
		return [val, val, val];
	}

	if (l < 0.5) {
		t2 = l * (1 + s);
	} else {
		t2 = l + s - l * s;
	}

	t1 = 2 * l - t2;

	rgb = [0, 0, 0];
	for (var i = 0; i < 3; i++) {
		t3 = h + 1 / 3 * -(i - 1);
		if (t3 < 0) {
			t3++;
		}
		if (t3 > 1) {
			t3--;
		}

		if (6 * t3 < 1) {
			val = t1 + (t2 - t1) * 6 * t3;
		} else if (2 * t3 < 1) {
			val = t2;
		} else if (3 * t3 < 2) {
			val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
		} else {
			val = t1;
		}

		rgb[i] = val * 255;
	}

	return rgb;
};

convert.hsl.hsv = function (hsl) {
	var h = hsl[0];
	var s = hsl[1] / 100;
	var l = hsl[2] / 100;
	var smin = s;
	var lmin = Math.max(l, 0.01);
	var sv;
	var v;

	l *= 2;
	s *= (l <= 1) ? l : 2 - l;
	smin *= lmin <= 1 ? lmin : 2 - lmin;
	v = (l + s) / 2;
	sv = l === 0 ? (2 * smin) / (lmin + smin) : (2 * s) / (l + s);

	return [h, sv * 100, v * 100];
};

convert.hsv.rgb = function (hsv) {
	var h = hsv[0] / 60;
	var s = hsv[1] / 100;
	var v = hsv[2] / 100;
	var hi = Math.floor(h) % 6;

	var f = h - Math.floor(h);
	var p = 255 * v * (1 - s);
	var q = 255 * v * (1 - (s * f));
	var t = 255 * v * (1 - (s * (1 - f)));
	v *= 255;

	switch (hi) {
		case 0:
			return [v, t, p];
		case 1:
			return [q, v, p];
		case 2:
			return [p, v, t];
		case 3:
			return [p, q, v];
		case 4:
			return [t, p, v];
		case 5:
			return [v, p, q];
	}
};

convert.hsv.hsl = function (hsv) {
	var h = hsv[0];
	var s = hsv[1] / 100;
	var v = hsv[2] / 100;
	var vmin = Math.max(v, 0.01);
	var lmin;
	var sl;
	var l;

	l = (2 - s) * v;
	lmin = (2 - s) * vmin;
	sl = s * vmin;
	sl /= (lmin <= 1) ? lmin : 2 - lmin;
	sl = sl || 0;
	l /= 2;

	return [h, sl * 100, l * 100];
};

// http://dev.w3.org/csswg/css-color/#hwb-to-rgb
convert.hwb.rgb = function (hwb) {
	var h = hwb[0] / 360;
	var wh = hwb[1] / 100;
	var bl = hwb[2] / 100;
	var ratio = wh + bl;
	var i;
	var v;
	var f;
	var n;

	// wh + bl cant be > 1
	if (ratio > 1) {
		wh /= ratio;
		bl /= ratio;
	}

	i = Math.floor(6 * h);
	v = 1 - bl;
	f = 6 * h - i;

	if ((i & 0x01) !== 0) {
		f = 1 - f;
	}

	n = wh + f * (v - wh); // linear interpolation

	var r;
	var g;
	var b;
	switch (i) {
		default:
		case 6:
		case 0: r = v; g = n; b = wh; break;
		case 1: r = n; g = v; b = wh; break;
		case 2: r = wh; g = v; b = n; break;
		case 3: r = wh; g = n; b = v; break;
		case 4: r = n; g = wh; b = v; break;
		case 5: r = v; g = wh; b = n; break;
	}

	return [r * 255, g * 255, b * 255];
};

convert.cmyk.rgb = function (cmyk) {
	var c = cmyk[0] / 100;
	var m = cmyk[1] / 100;
	var y = cmyk[2] / 100;
	var k = cmyk[3] / 100;
	var r;
	var g;
	var b;

	r = 1 - Math.min(1, c * (1 - k) + k);
	g = 1 - Math.min(1, m * (1 - k) + k);
	b = 1 - Math.min(1, y * (1 - k) + k);

	return [r * 255, g * 255, b * 255];
};

convert.xyz.rgb = function (xyz) {
	var x = xyz[0] / 100;
	var y = xyz[1] / 100;
	var z = xyz[2] / 100;
	var r;
	var g;
	var b;

	r = (x * 3.2406) + (y * -1.5372) + (z * -0.4986);
	g = (x * -0.9689) + (y * 1.8758) + (z * 0.0415);
	b = (x * 0.0557) + (y * -0.2040) + (z * 1.0570);

	// assume sRGB
	r = r > 0.0031308
		? ((1.055 * Math.pow(r, 1.0 / 2.4)) - 0.055)
		: r * 12.92;

	g = g > 0.0031308
		? ((1.055 * Math.pow(g, 1.0 / 2.4)) - 0.055)
		: g * 12.92;

	b = b > 0.0031308
		? ((1.055 * Math.pow(b, 1.0 / 2.4)) - 0.055)
		: b * 12.92;

	r = Math.min(Math.max(0, r), 1);
	g = Math.min(Math.max(0, g), 1);
	b = Math.min(Math.max(0, b), 1);

	return [r * 255, g * 255, b * 255];
};

convert.xyz.lab = function (xyz) {
	var x = xyz[0];
	var y = xyz[1];
	var z = xyz[2];
	var l;
	var a;
	var b;

	x /= 95.047;
	y /= 100;
	z /= 108.883;

	x = x > 0.008856 ? Math.pow(x, 1 / 3) : (7.787 * x) + (16 / 116);
	y = y > 0.008856 ? Math.pow(y, 1 / 3) : (7.787 * y) + (16 / 116);
	z = z > 0.008856 ? Math.pow(z, 1 / 3) : (7.787 * z) + (16 / 116);

	l = (116 * y) - 16;
	a = 500 * (x - y);
	b = 200 * (y - z);

	return [l, a, b];
};

convert.lab.xyz = function (lab) {
	var l = lab[0];
	var a = lab[1];
	var b = lab[2];
	var x;
	var y;
	var z;

	y = (l + 16) / 116;
	x = a / 500 + y;
	z = y - b / 200;

	var y2 = Math.pow(y, 3);
	var x2 = Math.pow(x, 3);
	var z2 = Math.pow(z, 3);
	y = y2 > 0.008856 ? y2 : (y - 16 / 116) / 7.787;
	x = x2 > 0.008856 ? x2 : (x - 16 / 116) / 7.787;
	z = z2 > 0.008856 ? z2 : (z - 16 / 116) / 7.787;

	x *= 95.047;
	y *= 100;
	z *= 108.883;

	return [x, y, z];
};

convert.lab.lch = function (lab) {
	var l = lab[0];
	var a = lab[1];
	var b = lab[2];
	var hr;
	var h;
	var c;

	hr = Math.atan2(b, a);
	h = hr * 360 / 2 / Math.PI;

	if (h < 0) {
		h += 360;
	}

	c = Math.sqrt(a * a + b * b);

	return [l, c, h];
};

convert.lch.lab = function (lch) {
	var l = lch[0];
	var c = lch[1];
	var h = lch[2];
	var a;
	var b;
	var hr;

	hr = h / 360 * 2 * Math.PI;
	a = c * Math.cos(hr);
	b = c * Math.sin(hr);

	return [l, a, b];
};

convert.rgb.ansi16 = function (args) {
	var r = args[0];
	var g = args[1];
	var b = args[2];
	var value = 1 in arguments ? arguments[1] : convert.rgb.hsv(args)[2]; // hsv -> ansi16 optimization

	value = Math.round(value / 50);

	if (value === 0) {
		return 30;
	}

	var ansi = 30
		+ ((Math.round(b / 255) << 2)
		| (Math.round(g / 255) << 1)
		| Math.round(r / 255));

	if (value === 2) {
		ansi += 60;
	}

	return ansi;
};

convert.hsv.ansi16 = function (args) {
	// optimization here; we already know the value and don't need to get
	// it converted for us.
	return convert.rgb.ansi16(convert.hsv.rgb(args), args[2]);
};

convert.rgb.ansi256 = function (args) {
	var r = args[0];
	var g = args[1];
	var b = args[2];

	// we use the extended greyscale palette here, with the exception of
	// black and white. normal palette only has 4 greyscale shades.
	if (r === g && g === b) {
		if (r < 8) {
			return 16;
		}

		if (r > 248) {
			return 231;
		}

		return Math.round(((r - 8) / 247) * 24) + 232;
	}

	var ansi = 16
		+ (36 * Math.round(r / 255 * 5))
		+ (6 * Math.round(g / 255 * 5))
		+ Math.round(b / 255 * 5);

	return ansi;
};

convert.ansi16.rgb = function (args) {
	var color = args % 10;

	// handle greyscale
	if (color === 0 || color === 7) {
		if (args > 50) {
			color += 3.5;
		}

		color = color / 10.5 * 255;

		return [color, color, color];
	}

	var mult = (~~(args > 50) + 1) * 0.5;
	var r = ((color & 1) * mult) * 255;
	var g = (((color >> 1) & 1) * mult) * 255;
	var b = (((color >> 2) & 1) * mult) * 255;

	return [r, g, b];
};

convert.ansi256.rgb = function (args) {
	// handle greyscale
	if (args >= 232) {
		var c = (args - 232) * 10 + 8;
		return [c, c, c];
	}

	args -= 16;

	var rem;
	var r = Math.floor(args / 36) / 5 * 255;
	var g = Math.floor((rem = args % 36) / 6) / 5 * 255;
	var b = (rem % 6) / 5 * 255;

	return [r, g, b];
};

convert.rgb.hex = function (args) {
	var integer = ((Math.round(args[0]) & 0xFF) << 16)
		+ ((Math.round(args[1]) & 0xFF) << 8)
		+ (Math.round(args[2]) & 0xFF);

	var string = integer.toString(16).toUpperCase();
	return '000000'.substring(string.length) + string;
};

convert.hex.rgb = function (args) {
	var match = args.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
	if (!match) {
		return [0, 0, 0];
	}

	var colorString = match[0];

	if (match[0].length === 3) {
		colorString = colorString.split('').map(function (char) {
			return char + char;
		}).join('');
	}

	var integer = parseInt(colorString, 16);
	var r = (integer >> 16) & 0xFF;
	var g = (integer >> 8) & 0xFF;
	var b = integer & 0xFF;

	return [r, g, b];
};

convert.rgb.hcg = function (rgb) {
	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;
	var max = Math.max(Math.max(r, g), b);
	var min = Math.min(Math.min(r, g), b);
	var chroma = (max - min);
	var grayscale;
	var hue;

	if (chroma < 1) {
		grayscale = min / (1 - chroma);
	} else {
		grayscale = 0;
	}

	if (chroma <= 0) {
		hue = 0;
	} else
	if (max === r) {
		hue = ((g - b) / chroma) % 6;
	} else
	if (max === g) {
		hue = 2 + (b - r) / chroma;
	} else {
		hue = 4 + (r - g) / chroma + 4;
	}

	hue /= 6;
	hue %= 1;

	return [hue * 360, chroma * 100, grayscale * 100];
};

convert.hsl.hcg = function (hsl) {
	var s = hsl[1] / 100;
	var l = hsl[2] / 100;
	var c = 1;
	var f = 0;

	if (l < 0.5) {
		c = 2.0 * s * l;
	} else {
		c = 2.0 * s * (1.0 - l);
	}

	if (c < 1.0) {
		f = (l - 0.5 * c) / (1.0 - c);
	}

	return [hsl[0], c * 100, f * 100];
};

convert.hsv.hcg = function (hsv) {
	var s = hsv[1] / 100;
	var v = hsv[2] / 100;

	var c = s * v;
	var f = 0;

	if (c < 1.0) {
		f = (v - c) / (1 - c);
	}

	return [hsv[0], c * 100, f * 100];
};

convert.hcg.rgb = function (hcg) {
	var h = hcg[0] / 360;
	var c = hcg[1] / 100;
	var g = hcg[2] / 100;

	if (c === 0.0) {
		return [g * 255, g * 255, g * 255];
	}

	var pure = [0, 0, 0];
	var hi = (h % 1) * 6;
	var v = hi % 1;
	var w = 1 - v;
	var mg = 0;

	switch (Math.floor(hi)) {
		case 0:
			pure[0] = 1; pure[1] = v; pure[2] = 0; break;
		case 1:
			pure[0] = w; pure[1] = 1; pure[2] = 0; break;
		case 2:
			pure[0] = 0; pure[1] = 1; pure[2] = v; break;
		case 3:
			pure[0] = 0; pure[1] = w; pure[2] = 1; break;
		case 4:
			pure[0] = v; pure[1] = 0; pure[2] = 1; break;
		default:
			pure[0] = 1; pure[1] = 0; pure[2] = w;
	}

	mg = (1.0 - c) * g;

	return [
		(c * pure[0] + mg) * 255,
		(c * pure[1] + mg) * 255,
		(c * pure[2] + mg) * 255
	];
};

convert.hcg.hsv = function (hcg) {
	var c = hcg[1] / 100;
	var g = hcg[2] / 100;

	var v = c + g * (1.0 - c);
	var f = 0;

	if (v > 0.0) {
		f = c / v;
	}

	return [hcg[0], f * 100, v * 100];
};

convert.hcg.hsl = function (hcg) {
	var c = hcg[1] / 100;
	var g = hcg[2] / 100;

	var l = g * (1.0 - c) + 0.5 * c;
	var s = 0;

	if (l > 0.0 && l < 0.5) {
		s = c / (2 * l);
	} else
	if (l >= 0.5 && l < 1.0) {
		s = c / (2 * (1 - l));
	}

	return [hcg[0], s * 100, l * 100];
};

convert.hcg.hwb = function (hcg) {
	var c = hcg[1] / 100;
	var g = hcg[2] / 100;
	var v = c + g * (1.0 - c);
	return [hcg[0], (v - c) * 100, (1 - v) * 100];
};

convert.hwb.hcg = function (hwb) {
	var w = hwb[1] / 100;
	var b = hwb[2] / 100;
	var v = 1 - b;
	var c = v - w;
	var g = 0;

	if (c < 1) {
		g = (v - c) / (1 - c);
	}

	return [hwb[0], c * 100, g * 100];
};

convert.apple.rgb = function (apple) {
	return [(apple[0] / 65535) * 255, (apple[1] / 65535) * 255, (apple[2] / 65535) * 255];
};

convert.rgb.apple = function (rgb) {
	return [(rgb[0] / 255) * 65535, (rgb[1] / 255) * 65535, (rgb[2] / 255) * 65535];
};

convert.gray.rgb = function (args) {
	return [args[0] / 100 * 255, args[0] / 100 * 255, args[0] / 100 * 255];
};

convert.gray.hsl = convert.gray.hsv = function (args) {
	return [0, 0, args[0]];
};

convert.gray.hwb = function (gray) {
	return [0, 100, gray[0]];
};

convert.gray.cmyk = function (gray) {
	return [0, 0, 0, gray[0]];
};

convert.gray.lab = function (gray) {
	return [gray[0], 0, 0];
};

convert.gray.hex = function (gray) {
	var val = Math.round(gray[0] / 100 * 255) & 0xFF;
	var integer = (val << 16) + (val << 8) + val;

	var string = integer.toString(16).toUpperCase();
	return '000000'.substring(string.length) + string;
};

convert.rgb.gray = function (rgb) {
	var val = (rgb[0] + rgb[1] + rgb[2]) / 3;
	return [val / 255 * 100];
};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(48)(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(51)();
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var emptyFunction = __webpack_require__(13);

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction;

if (process.env.NODE_ENV !== 'production') {
  var printWarning = function printWarning(format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  warning = function warning(condition, format) {
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (format.indexOf('Failed Composite propType: ') === 0) {
      return; // Ignore CompositeComponent proptype check.
    }

    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

module.exports = warning;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _theme = __webpack_require__(2);

var _theme2 = _interopRequireDefault(_theme);

var _logo = __webpack_require__(24);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cmz = __webpack_require__(1);

var logoWrapper = cmz.named('AutoUI_ui_HeaderBar-12', /*cmz|*/'\n  display: flex\n  justify-content: center\n  box-shadow: 0 0 2px rgba(0, 0, 0, .25)\n  height: 58px\n  padding-top: 28px\n  width: 100%\n' /*|cmz*/);

var HeaderBar = function (_PureComponent) {
  _inherits(HeaderBar, _PureComponent);

  function HeaderBar() {
    _classCallCheck(this, HeaderBar);

    return _possibleConstructorReturn(this, (HeaderBar.__proto__ || Object.getPrototypeOf(HeaderBar)).apply(this, arguments));
  }

  _createClass(HeaderBar, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: logoWrapper },
        (0, _logo.xTeamLogo)(84, 30, _theme2.default.typoHeading)
      );
    }
  }]);

  return HeaderBar;
}(_react.PureComponent);

exports.default = HeaderBar;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.xTeamLogo = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var xTeamLogo = exports.xTeamLogo = function xTeamLogo(width, height, color) {
  return _react2.default.createElement(
    'svg',
    {
      xmlns: 'http://www.w3.org/2000/svg',
      width: width,
      height: height,
      viewBox: '0 0 960 328'
    },
    _react2.default.createElement('path', {
      d: 'm 932.472,109.99459 0,-8.12996 7.1503,0 c 3.4289,0 5.532,1.47291 5.532,3.94703 0,2.76892 -2.5227,4.18293 -5.8278,4.18293 l -6.8545,0 z m 15.3856,-4.29926 c 0,-3.8307 -3.4255,-6.244154 -8.1098,-6.244154 l -9.8622,0 0,21.558714 2.5864,0 0,-8.65918 6.3713,0 6.9731,8.65918 3.3654,0 -7.3326,-9.07207 c 3.5476,-0.64722 6.0084,-2.70835 6.0084,-6.24249 z m -9.6764,24.79962 c -11.3583,0 -19.8894,-8.77894 -19.8894,-19.61725 0,-10.8383 8.5913,-19.731809 20.0115,-19.731809 11.3582,0 19.8928,8.777176 19.8928,19.615579 0,10.83487 -8.5948,19.73348 -20.0149,19.73348 z m 0.1221,-40.998962 c -12.2026,0 -21.8154,9.717625 -21.8154,21.381712 0,11.66419 9.4959,21.26382 21.6933,21.26382 12.1991,0 21.8188,-9.71763 21.8188,-21.38005 0,-11.662522 -9.4958,-21.265482 -21.6967,-21.265482 z m -327.2965,24.956332 -77.5456,-0.18543 -5.5665,18.86722 28.4825,0.0696 -21.953,74.14786 20.5927,0.051 21.9496,-74.14973 28.4773,0.0696 5.563,-18.86888 z m 16.6084,55.21988 43.4502,0.10261 5.4049,-17.93696 -43.452,-0.10614 5.5699,-19.0004 49.4656,0.11966 5.4117,-18.20657 -69.9242,-0.1668 -27.5108,93.01498 65.0971,-0.17376 5.4134,-18.2049 -44.7812,0.2259 5.8554,-19.66762 z m -137.6902,-49.75104 -14.1424,-13.17415 -38.152,37.22374 -16.6771,-36.55642 -19.0984,10.28556 20.5549,41.12705 -42.0539,40.16994 14.9214,11.99073 35.1203,-35.12045 14.8078,34.46353 19.7759,-8.43524 -19.2308,-40.75071 44.1743,-41.22358 z m -10.4331,49.69371 41.1786,0.0872 5.8451,-17.55768 -41.1804,-0.0892 -5.8433,17.55954 z m 399.0727,-62.28473 -40.1193,71.49469 -33.1806,-70.55934 -29.1669,99.67017 20.677,0 13.5216,-47.26291 27.007,53.08908 31.0018,-52.72558 9.035,46.03168 21.3029,-0.2751 -18.9934,-92.47537 -1.0851,-6.98732 z m -160.6922,66.60927 17.5627,-23.36042 5.4685,23.36042 -23.0312,0 z m 25.5866,-65.48349 0,-0.0304 -73.1485,99.2507 22.204,0 11.783,-15.67354 40.8381,0 3.644,15.55692 20.9315,0 -26.1575,-99.23856 -0.091,0.13476',
      fill: color
    }),
    _react2.default.createElement('path', {
      d: 'M 249.2436,153.11201 91.8029,4.8828125e-5 17.8259,72.501145 100.6866,153.70689 0,258.64225 71.8892,328.00005 249.2436,153.11201',
      fill: color
    }),
    _react2.default.createElement('path', {
      d: 'm 185.3175,236.64673 72.2044,70.76534 73.9757,-72.49933 -72.2062,-70.76475 -73.9739,72.49874',
      fill: color
    }),
    _react2.default.createElement('path', {
      d: 'M 185.9194,70.171973 259.8985,142.67307 331.4976,72.501145 257.5202,4.8828125e-5 185.9194,70.171973',
      fill: color
    })
  );
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.throttle = throttle;
exports.isScrolledIntoView = isScrolledIntoView;
exports.getComponentDisplayName = getComponentDisplayName;
function throttle(callback, timeout) {
  var now = Date.now();
  return function () {
    if (now + timeout - Date.now() < 0) {
      callback();
      now = Date.now();
    }
  };
}

function isScrolledIntoView(element) {
  if (!element) return false;
  // Element's position relative to the viewport

  var _element$getBoundingC = element.getBoundingClientRect(),
      bottom = _element$getBoundingC.bottom;

  // Viewport offset


  var scrollPosition = window.scrollY;
  var docViewBottom = scrollPosition + window.innerHeight;

  // Element's position relative to the document
  var elemBottom = scrollPosition + bottom;

  return elemBottom <= docViewBottom;
}

function getComponentDisplayName(Component) {
  return Component.displayName || Component.name || 'Component';
}

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SvgIcon = __webpack_require__(5);

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

var _theme = __webpack_require__(2);

var _theme2 = _interopRequireDefault(_theme);

var _typo = __webpack_require__(4);

var _typo2 = _interopRequireDefault(_typo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cmz = __webpack_require__(1);

var cx = {
  root: cmz.named('AutoUI_ui_Milestones-27', /*cmz|*/'\n    margin: 0 auto\n    padding: 0 0 25px\n    max-width: 1158px\n  ' /*|cmz*/),

  milestones: cmz.named('AutoUI_ui_Milestones-33', /*cmz|*/'\n    margin: 0\n    padding-left: 0\n    list-style: none\n    position: relative\n    display: flex\n    justify-content: space-between\n  ' /*|cmz*/),

  milestone: cmz.named('AutoUI_ui_Milestones-42', '\n    & {\n      text-align: center\n      position: relative\n      width: 100%\n    }\n\n    &:before {\n      content: \'\'\n      position: absolute\n      height: .1em\n      background-color: ' + _theme2.default.lineSilver2 + '\n      width: 100%\n      left: -50%\n      top: 50%\n      transform: translateY(-50%)\n      transition: all .25s ease-out\n      z-index: 1\n    }\n\n    &:after {\n      content: \'\'\n      position: absolute\n      height: .1em\n      background-color: ' + _theme2.default.baseRed + '\n      width: 0\n      left: -50%\n      top: 50%\n      transform: translateY(-50%)\n      transition: all .25s ease-out\n      z-index: 2\n    }\n\n    &:first-child:before {\n      display: none\n    }\n\n    &:first-child:after {\n      display: none\n    }\n\n    &.isComplete + &.isCurrent:after {\n      width: 100%\n    }\n\n    &.isComplete + &.isComplete:after {\n      width: 100%\n    }\n  '),

  icon: cmz.named('AutoUI_ui_Milestones-92', '\n    & {\n      position: relative\n      display: inline-block\n      width: 1.9em\n      height: 1.9em\n      background-color: ' + _theme2.default.baseBrighter + '\n      border: 2px solid ' + _theme2.default.lineSilver2 + '\n      border-radius: 50%\n      padding: .5em\n      max-width: 100%\n      transition: all .25s ease-out\n      z-index: 10\n    }\n\n    .isCurrent & {\n      background-color: ' + _theme2.default.baseRed + '\n      border-color: transparent\n    }\n\n    .isComplete & {\n      background-color: ' + _theme2.default.baseBrighter + '\n      border: 2px solid ' + _theme2.default.baseRed + '\n    }\n\n    & > svg {\n      position: absolute\n      top: 50%\n      left: 50%\n      transform: translateX(-50%) translateY(-50%)\n      width: 47%\n      height: 47%\n    }\n  '),

  label: cmz.named('AutoUI_ui_Milestones-127', _typo2.default.labelText, '\n      display: block\n      color: ' + _theme2.default.typoHeading + '\n      position: absolute\n      padding-top: .5em\n      width: 100%\n      transition: all .25s ease-out\n    '),

  pointer: cmz.named('AutoUI_ui_Milestones-139', /*cmz|*/'cursor: pointer' /*|cmz*/)
};

var Milestones = function (_PureComponent) {
  _inherits(Milestones, _PureComponent);

  function Milestones() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Milestones);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Milestones.__proto__ || Object.getPrototypeOf(Milestones)).call.apply(_ref, [this].concat(args))), _this), _this.getCurrentState = function (levelIndex) {
      var level = _this.props.level;

      var state = 'normal';

      var stateMap = {
        normal: {
          statusClassName: '',
          iconColor: 'monochrome'
        },
        completed: {
          statusClassName: 'isComplete',
          iconColor: 'default'
        },
        current: {
          statusClassName: 'isCurrent',
          iconColor: 'inverted'
        }
      };

      if (levelIndex === level) {
        state = 'current';
      } else if (levelIndex < level) {
        state = 'completed';
      }

      return stateMap[state];
    }, _this.handleChangeMilestone = function (level, newLevel) {
      return function () {
        if (typeof level.handleClick === 'function') level.handleClick();
      };
    }, _this.renderMilestone = function (level, index) {
      var currentState = _this.getCurrentState(index);
      var label = level.label || 'Level ' + index;
      var pointerClassName = typeof level.handleClick === 'function' ? cx.pointer : '';

      return _react2.default.createElement(
        'li',
        { key: index, className: cx.milestone + ' ' + currentState.statusClassName },
        _react2.default.createElement(
          'div',
          {
            className: cx.icon + ' ' + pointerClassName,
            onClick: _this.handleChangeMilestone(level, index)
          },
          _react2.default.createElement(_SvgIcon2.default, { icon: level.icon, color: currentState.iconColor })
        ),
        _react2.default.createElement(
          'span',
          { className: cx.label },
          label
        )
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Milestones, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var levels = this.props.levels;


      if (!levels || !levels.length) return null;

      return _react2.default.createElement(
        'div',
        { className: cx.root },
        _react2.default.createElement(
          'ul',
          { className: cx.milestones },
          levels.map(function (level, index) {
            return _this2.renderMilestone(level, index + 1);
          })
        )
      );
    }
  }]);

  return Milestones;
}(_react.PureComponent);

Milestones.defaultProps = {
  level: 1
};
exports.default = Milestones;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _difference_in_seconds = __webpack_require__(79);

var _difference_in_seconds2 = _interopRequireDefault(_difference_in_seconds);

var _difference_in_minutes = __webpack_require__(80);

var _difference_in_minutes2 = _interopRequireDefault(_difference_in_minutes);

var _difference_in_hours = __webpack_require__(81);

var _difference_in_hours2 = _interopRequireDefault(_difference_in_hours);

var _format = __webpack_require__(82);

var _format2 = _interopRequireDefault(_format);

var _markdownToJsx = __webpack_require__(95);

var _markdownToJsx2 = _interopRequireDefault(_markdownToJsx);

var _Avatar = __webpack_require__(10);

var _Avatar2 = _interopRequireDefault(_Avatar);

var _Text = __webpack_require__(9);

var _Text2 = _interopRequireDefault(_Text);

var _FileLinks = __webpack_require__(97);

var _FileLinks2 = _interopRequireDefault(_FileLinks);

var _typo = __webpack_require__(4);

var _typo2 = _interopRequireDefault(_typo);

var _theme = __webpack_require__(2);

var _theme2 = _interopRequireDefault(_theme);

var _elem = __webpack_require__(3);

var _elem2 = _interopRequireDefault(_elem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cmz = __webpack_require__(1);

var Root = _elem2.default.div(cmz.named('AutoUI_ui_Note-28', /*cmz|*/'\n  display: flex\n' /*|cmz*/));

var AvatarWrapper = _elem2.default.div(cmz.named('AutoUI_ui_Note-32', /*cmz|*/'\n  margin-right: 16px\n  flex-shrink: 0\n' /*|cmz*/));

var Body = _elem2.default.div(cmz.named('AutoUI_ui_Note-37', /*cmz|*/'\n  display: flex\n  flex-direction: column\n' /*|cmz*/));

var Name = _elem2.default.span(cmz.named('AutoUI_ui_Note-42', _typo2.default.headline, /*cmz|*/'\n    font-size: 16px\n    line-height: normal\n    margin: 0\n    text-transform: uppercase\n  ' /*|cmz*/));

var Time = _elem2.default.span(cmz.named('AutoUI_ui_Note-52', _typo2.default.baseText, /*cmz|*/'\n    font-size: 12px\n    line-height: 12px\n    margin-top: 8px\n    margin-bottom: 10px\n  ' /*|cmz*/));

var TextWrapper = _elem2.default.div(cmz.named('AutoUI_ui_Note-62', '\n    & p:first-of-type {\n      margin-top: 0\n    }\n\n    & p:last-of-type {\n      margin-bottom: 0\n    }\n\n    & a {\n      color: ' + _theme2.default.baseRed + '\n      text-decoration: none\n    }\n\n    & a:hover {\n      text-decoration: underline\n    }\n  '));

var FileLinksWrapper = _elem2.default.div();

var timeFromNow = function timeFromNow(date) {
  var now = new Date();
  var hoursDelta = (0, _difference_in_hours2.default)(now, date);

  if (hoursDelta >= 24) {
    return (0, _format2.default)(date, 'DD MMM YY');
  }

  var minutesDelta = (0, _difference_in_minutes2.default)(now, date);

  if (minutesDelta >= 60) {
    return hoursDelta + ' h ago';
  }

  if ((0, _difference_in_seconds2.default)(now, date) >= 60) {
    return minutesDelta + ' m ago';
  }

  return 'just now';
};

var Note = function (_PureComponent) {
  _inherits(Note, _PureComponent);

  function Note() {
    _classCallCheck(this, Note);

    return _possibleConstructorReturn(this, (Note.__proto__ || Object.getPrototypeOf(Note)).apply(this, arguments));
  }

  _createClass(Note, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var date = this.props.date;


      if (date) {
        var now = new Date();
        var hoursDelta = (0, _difference_in_hours2.default)(now, date);
        if (hoursDelta < 1) {
          this.interval = window.setInterval(function () {
            return _this2.forceUpdate();
          }, 60 * 1000); // 1 minute
        } else if (hoursDelta < 24) {
          this.interval = window.setInterval(function () {
            return _this2.forceUpdate();
          }, 20 * 60 * 1000); // 20 minutes
        }
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.interval) {
        window.clearInterval(this.interval);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          avatar = _props.avatar,
          date = _props.date,
          name = _props.name,
          text = _props.text,
          files = _props.files;


      return Root(avatar && AvatarWrapper(_react2.default.createElement(_Avatar2.default, { alt: name, src: avatar, size: 40 })), Body(name && Name(name), date && Time(timeFromNow(date)), text && TextWrapper({}, _react2.default.createElement(_Text2.default, { content: _react2.default.createElement(
          _markdownToJsx2.default,
          null,
          text
        ), isPureContent: true })), FileLinksWrapper({}, _react2.default.createElement(_FileLinks2.default, { files: files }))));
    }
  }]);

  return Note;
}(_react.PureComponent);

exports.default = Note;

/***/ }),
/* 28 */
/***/ (function(module, exports) {

/**
 * @category Common Helpers
 * @summary Is the given argument an instance of Date?
 *
 * @description
 * Is the given argument an instance of Date?
 *
 * @param {*} argument - the argument to check
 * @returns {Boolean} the given argument is an instance of Date
 *
 * @example
 * // Is 'mayonnaise' a Date?
 * var result = isDate('mayonnaise')
 * //=> false
 */
function isDate (argument) {
  return argument instanceof Date
}

module.exports = isDate


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(7)
var startOfISOWeek = __webpack_require__(18)

/**
 * @category ISO Week-Numbering Year Helpers
 * @summary Get the ISO week-numbering year of the given date.
 *
 * @description
 * Get the ISO week-numbering year of the given date,
 * which always starts 3 days before the year's first Thursday.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} the ISO week-numbering year
 *
 * @example
 * // Which ISO-week numbering year is 2 January 2005?
 * var result = getISOYear(new Date(2005, 0, 2))
 * //=> 2004
 */
function getISOYear (dirtyDate) {
  var date = parse(dirtyDate)
  var year = date.getFullYear()

  var fourthOfJanuaryOfNextYear = new Date(0)
  fourthOfJanuaryOfNextYear.setFullYear(year + 1, 0, 4)
  fourthOfJanuaryOfNextYear.setHours(0, 0, 0, 0)
  var startOfNextYear = startOfISOWeek(fourthOfJanuaryOfNextYear)

  var fourthOfJanuaryOfThisYear = new Date(0)
  fourthOfJanuaryOfThisYear.setFullYear(year, 0, 4)
  fourthOfJanuaryOfThisYear.setHours(0, 0, 0, 0)
  var startOfThisYear = startOfISOWeek(fourthOfJanuaryOfThisYear)

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year
  } else {
    return year - 1
  }
}

module.exports = getISOYear


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(98);
var bytesToUuid = __webpack_require__(99);

function v4(options, buf, offset) {
  var i = buf && offset || 0;

  if (typeof(options) == 'string') {
    buf = options === 'binary' ? new Array(16) : null;
    options = null;
  }
  options = options || {};

  var rnds = options.random || (options.rng || rng)();

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  rnds[6] = (rnds[6] & 0x0f) | 0x40;
  rnds[8] = (rnds[8] & 0x3f) | 0x80;

  // Copy bytes to buffer, if provided
  if (buf) {
    for (var ii = 0; ii < 16; ++ii) {
      buf[i + ii] = rnds[ii];
    }
  }

  return buf || bytesToUuid(rnds);
}

module.exports = v4;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _theme = __webpack_require__(2);

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cmz = __webpack_require__(1);

var animatedStyles = {
  timeline: cmz.named('AutoUI_ui_RoadmapTimelineElement-14', '\n    & {\n      position: relative\n      height: 100%\n      min-height: 20px\n    }\n\n    &:before {\n      /* this is the vertical line */\n      content: \'\'\n      position: absolute\n      top: 17px\n      left: 7px\n      overflow: hidden\n      width: 2px\n      height: 100%\n      background: ' + _theme2.default.lineSilver3 + '\n      animation: process .6s linear forwards\n    }\n  '),
  timelineActive: cmz.named('AutoUI_ui_RoadmapTimelineElement-34', '\n    &:before {\n      background: ' + _theme2.default.baseRed + '\n    }\n  '),
  checkmarkBox: cmz.named('AutoUI_ui_RoadmapTimelineElement-39', /*cmz|*/'\n    width: 16px\n    position: absolute\n    top: 0\n    left: 0\n  ' /*|cmz*/),
  checkmarkCircle: cmz.named('AutoUI_ui_RoadmapTimelineElement-45', '\n    stroke-dasharray: 166\n    stroke-dashoffset: 0\n    stroke-width: 3\n    stroke-miterlimit: 10\n    stroke: ' + _theme2.default.lineSilver1 + '\n  '),
  checkmarkCircleActive: cmz.named('AutoUI_ui_RoadmapTimelineElement-52', '\n    & {\n      stroke: ' + _theme2.default.baseRed + '\n      fill: none\n      animation: stroke .6s cubic-bezier(.65, 0, .45, 1) forwards\n    }\n\n    @keyframes stroke {\n      100% {\n        stroke-dashoffset: 0\n      }\n    }\n  '),
  checkmark: cmz.named('AutoUI_ui_RoadmapTimelineElement-65', '\n    border-radius: 50%\n    display: block\n    stroke-width: 2\n    stroke: ' + _theme2.default.baseBrighter + '\n    stroke-miterlimit: 10\n    margin: 10% auto\n    box-shadow: inset 0 0 0 ' + _theme2.default.baseRed + '\n    transition: box-shadow ease-in-out .2s\n  '),
  checkmarkActive: cmz.named('AutoUI_ui_RoadmapTimelineElement-75', '\n    box-shadow: inset 0 0 0 8px ' + _theme2.default.baseRed + '\n  '),
  checkmarkCheck: cmz.named('AutoUI_ui_RoadmapTimelineElement-78', /*cmz|*/'\n    transform-origin: 50% 50%\n    opacity: 0\n    transition: opacity .2s\n  ' /*|cmz*/),
  checkmarkCheckActive: cmz.named('AutoUI_ui_RoadmapTimelineElement-83', /*cmz|*/'\n    opacity: 1\n  ' /*|cmz*/)
};

var RoadmapTimelineElement = function (_PureComponent) {
  _inherits(RoadmapTimelineElement, _PureComponent);

  function RoadmapTimelineElement() {
    _classCallCheck(this, RoadmapTimelineElement);

    return _possibleConstructorReturn(this, (RoadmapTimelineElement.__proto__ || Object.getPrototypeOf(RoadmapTimelineElement)).apply(this, arguments));
  }

  _createClass(RoadmapTimelineElement, [{
    key: 'render',
    value: function render() {
      var isDone = this.props.isDone;


      var cx = {
        active: isDone ? animatedStyles.timelineActive : '',
        box: animatedStyles.checkmarkBox,
        checkmark: animatedStyles.checkmark + ' ' + (isDone ? animatedStyles.checkmarkActive : ''),
        checkmarkCheck: animatedStyles.checkmarkCheck + ' ' + (isDone ? animatedStyles.checkmarkCheckActive : ''),
        circle: animatedStyles.checkmarkCircle + ' ' + (isDone ? animatedStyles.checkmarkCircleActive : '')
      };

      return _react2.default.createElement(
        'div',
        { className: animatedStyles.timeline + ' ' + cx.active },
        _react2.default.createElement(
          'div',
          { className: cx.box },
          _react2.default.createElement(
            'svg',
            { className: cx.checkmark,
              xmlns: 'http://www.w3.org/2000/svg',
              viewBox: '0 0 52 52' },
            _react2.default.createElement('circle', { className: cx.circle, cx: '26', cy: '26', r: '25', fill: 'none' }),
            _react2.default.createElement('path', { className: cx.checkmarkCheck, fill: 'none', d: 'M14.1 27.2l7.1 7.2 16.7-16.8' })
          )
        )
      );
    }
  }]);

  return RoadmapTimelineElement;
}(_react.PureComponent);

RoadmapTimelineElement.defaultProps = {
  isDone: false
};
exports.default = RoadmapTimelineElement;

/***/ }),
/* 32 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			var styleTarget = fn.call(this, selector);
			// Special case to return head of iframe instead of iframe itself
			if (styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[selector] = styleTarget;
		}
		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(116);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.XIcon = exports.VideoPlayer = exports.Typography = exports.TruncatedList = exports.TextareaEditor = exports.Text = exports.Tabs = exports.Tab = exports.SvgIcon = exports.SolutionForm = exports.SelectBox = exports.RoadmapTimelineElement = exports.RoadmapLevel = exports.RoadmapHero = exports.Roadmap = exports.NotesFeed = exports.Note = exports.MilestonesScreen = exports.Milestones = exports.Loader = exports.InputGroup = exports.InputField = exports.HorizontalRuler = exports.HeaderBar = exports.FooterList = exports.FooterBrands = exports.Footer = exports.FilterBar = exports.ErrorBox = exports.Dropdown = exports.ColorPalette = exports.CollapsibleSection = exports.Button = exports.Avatar = exports.AttachFiles = exports.ApplicantScreen = exports.ApplicantListFilter = exports.ApplicantGrid = exports.ApplicantBadge = undefined;

var _ApplicantBadge = __webpack_require__(35);

var _ApplicantBadge2 = _interopRequireDefault(_ApplicantBadge);

var _ApplicantGrid = __webpack_require__(53);

var _ApplicantGrid2 = _interopRequireDefault(_ApplicantGrid);

var _ApplicantListFilter = __webpack_require__(54);

var _ApplicantListFilter2 = _interopRequireDefault(_ApplicantListFilter);

var _ApplicantScreen = __webpack_require__(55);

var _ApplicantScreen2 = _interopRequireDefault(_ApplicantScreen);

var _AttachFiles = __webpack_require__(56);

var _AttachFiles2 = _interopRequireDefault(_AttachFiles);

var _Avatar = __webpack_require__(10);

var _Avatar2 = _interopRequireDefault(_Avatar);

var _Button = __webpack_require__(8);

var _Button2 = _interopRequireDefault(_Button);

var _CollapsibleSection = __webpack_require__(57);

var _CollapsibleSection2 = _interopRequireDefault(_CollapsibleSection);

var _ColorPalette = __webpack_require__(67);

var _ColorPalette2 = _interopRequireDefault(_ColorPalette);

var _Dropdown = __webpack_require__(12);

var _Dropdown2 = _interopRequireDefault(_Dropdown);

var _ErrorBox = __webpack_require__(68);

var _ErrorBox2 = _interopRequireDefault(_ErrorBox);

var _FilterBar = __webpack_require__(69);

var _FilterBar2 = _interopRequireDefault(_FilterBar);

var _Footer = __webpack_require__(70);

var _Footer2 = _interopRequireDefault(_Footer);

var _FooterBrands = __webpack_require__(71);

var _FooterBrands2 = _interopRequireDefault(_FooterBrands);

var _FooterList = __webpack_require__(72);

var _FooterList2 = _interopRequireDefault(_FooterList);

var _HeaderBar = __webpack_require__(23);

var _HeaderBar2 = _interopRequireDefault(_HeaderBar);

var _HorizontalRuler = __webpack_require__(73);

var _HorizontalRuler2 = _interopRequireDefault(_HorizontalRuler);

var _InputField = __webpack_require__(16);

var _InputField2 = _interopRequireDefault(_InputField);

var _InputGroup = __webpack_require__(75);

var _InputGroup2 = _interopRequireDefault(_InputGroup);

var _Loader = __webpack_require__(76);

var _Loader2 = _interopRequireDefault(_Loader);

var _Milestones = __webpack_require__(26);

var _Milestones2 = _interopRequireDefault(_Milestones);

var _MilestonesScreen = __webpack_require__(78);

var _MilestonesScreen2 = _interopRequireDefault(_MilestonesScreen);

var _Note = __webpack_require__(27);

var _Note2 = _interopRequireDefault(_Note);

var _NotesFeed = __webpack_require__(101);

var _NotesFeed2 = _interopRequireDefault(_NotesFeed);

var _Roadmap = __webpack_require__(102);

var _Roadmap2 = _interopRequireDefault(_Roadmap);

var _RoadmapHero = __webpack_require__(104);

var _RoadmapHero2 = _interopRequireDefault(_RoadmapHero);

var _RoadmapLevel = __webpack_require__(106);

var _RoadmapLevel2 = _interopRequireDefault(_RoadmapLevel);

var _RoadmapTimelineElement = __webpack_require__(31);

var _RoadmapTimelineElement2 = _interopRequireDefault(_RoadmapTimelineElement);

var _SelectBox = __webpack_require__(107);

var _SelectBox2 = _interopRequireDefault(_SelectBox);

var _SolutionForm = __webpack_require__(108);

var _SolutionForm2 = _interopRequireDefault(_SolutionForm);

var _SvgIcon = __webpack_require__(5);

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

var _Tab = __webpack_require__(110);

var _Tab2 = _interopRequireDefault(_Tab);

var _Tabs = __webpack_require__(111);

var _Tabs2 = _interopRequireDefault(_Tabs);

var _Text = __webpack_require__(9);

var _Text2 = _interopRequireDefault(_Text);

var _TextareaEditor = __webpack_require__(112);

var _TextareaEditor2 = _interopRequireDefault(_TextareaEditor);

var _TruncatedList = __webpack_require__(11);

var _TruncatedList2 = _interopRequireDefault(_TruncatedList);

var _Typography = __webpack_require__(120);

var _Typography2 = _interopRequireDefault(_Typography);

var _VideoPlayer = __webpack_require__(121);

var _VideoPlayer2 = _interopRequireDefault(_VideoPlayer);

var _XIcon = __webpack_require__(122);

var _XIcon2 = _interopRequireDefault(_XIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.ApplicantBadge = _ApplicantBadge2.default;
exports.ApplicantGrid = _ApplicantGrid2.default;
exports.ApplicantListFilter = _ApplicantListFilter2.default;
exports.ApplicantScreen = _ApplicantScreen2.default;
exports.AttachFiles = _AttachFiles2.default;
exports.Avatar = _Avatar2.default;
exports.Button = _Button2.default;
exports.CollapsibleSection = _CollapsibleSection2.default;
exports.ColorPalette = _ColorPalette2.default;
exports.Dropdown = _Dropdown2.default;
exports.ErrorBox = _ErrorBox2.default;
exports.FilterBar = _FilterBar2.default;
exports.Footer = _Footer2.default;
exports.FooterBrands = _FooterBrands2.default;
exports.FooterList = _FooterList2.default;
exports.HeaderBar = _HeaderBar2.default;
exports.HorizontalRuler = _HorizontalRuler2.default;
exports.InputField = _InputField2.default;
exports.InputGroup = _InputGroup2.default;
exports.Loader = _Loader2.default;
exports.Milestones = _Milestones2.default;
exports.MilestonesScreen = _MilestonesScreen2.default;
exports.Note = _Note2.default;
exports.NotesFeed = _NotesFeed2.default;
exports.Roadmap = _Roadmap2.default;
exports.RoadmapHero = _RoadmapHero2.default;
exports.RoadmapLevel = _RoadmapLevel2.default;
exports.RoadmapTimelineElement = _RoadmapTimelineElement2.default;
exports.SelectBox = _SelectBox2.default;
exports.SolutionForm = _SolutionForm2.default;
exports.SvgIcon = _SvgIcon2.default;
exports.Tab = _Tab2.default;
exports.Tabs = _Tabs2.default;
exports.Text = _Text2.default;
exports.TextareaEditor = _TextareaEditor2.default;
exports.TruncatedList = _TruncatedList2.default;
exports.Typography = _Typography2.default;
exports.VideoPlayer = _VideoPlayer2.default;
exports.XIcon = _XIcon2.default;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _md = __webpack_require__(36);

var _md2 = _interopRequireDefault(_md);

var _Avatar = __webpack_require__(10);

var _Avatar2 = _interopRequireDefault(_Avatar);

var _SvgIcon = __webpack_require__(5);

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

var _TruncatedList = __webpack_require__(11);

var _TruncatedList2 = _interopRequireDefault(_TruncatedList);

var _Dropdown = __webpack_require__(12);

var _Dropdown2 = _interopRequireDefault(_Dropdown);

var _theme = __webpack_require__(2);

var _theme2 = _interopRequireDefault(_theme);

var _typo = __webpack_require__(4);

var _typo2 = _interopRequireDefault(_typo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cmz = __webpack_require__(1);

var cardTheme = {
  mode: cmz.named('AutoUI_ui_ApplicantBadge-37', _typo2.default.baseText, '\n      & {\n        transition: all 0.4s ease-out\n        background: ' + _theme2.default.baseBrighter + '\n        border: 1px solid ' + _theme2.default.lineSilver2 + '\n        padding: 30px\n        display: grid\n        grid-template: \'avatar name control\' \'avatar infos infos\' \'tags tags tags\'\n        grid-template-columns: 90px 1fr auto\n        grid-template-rows: minmax(20px, auto) auto auto\n        grid-gap: 15px\n        margin: 0 10px\n        cursor: pointer\n      }\n\n      &:hover {\n        box-shadow: 0 1px 8px rgba(0, 0, 0, 0.2)\n      }\n    '),

  active: cmz.named('AutoUI_ui_ApplicantBadge-60', '\n    transition: all 0.2s ease-in\n    border: 1px solid ' + _theme2.default.baseRed + '\n    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.2)\n    margin: 0\n    padding: 30px 40px\n  '),

  name: cmz.named('AutoUI_ui_ApplicantBadge-68', _typo2.default.badgeHeading, /*cmz|*/'\n      grid-area: name\n      display: flex\n      align-items: flex-end\n      font-size: 17px\n    ' /*|cmz*/),

  avatar: cmz.named('AutoUI_ui_ApplicantBadge-77', /*cmz|*/'\n    grid-area: avatar\n    width: 90px\n    height: 90px\n  ' /*|cmz*/),

  controls: cmz.named('AutoUI_ui_ApplicantBadge-83', /*cmz|*/'\n    grid-area: control\n    display: flex\n  ' /*|cmz*/),

  control: cmz.named('AutoUI_ui_ApplicantBadge-88', '\n    & {\n      display: inline-block\n      padding: 0\n      margin: 0 0 0 5px\n      border: 0\n      border-radius: 2px\n      cursor: pointer\n      width: 20px\n      height: 20px\n      text-align: center\n      line-height: 1\n    }\n\n    &:hover {\n      background: ' + _theme2.default.baseRed + '\n    }\n\n    &:hover svg g,\n    &:hover svg polyline {\n      stroke: white\n    }\n  '),

  infos: cmz.named('AutoUI_ui_ApplicantBadge-112', /*cmz|*/'\n    grid-area: infos\n    width: 100%\n    display: flex\n    flex-wrap: wrap\n    align-items: flex-start\n    margin: 0 0 -10px\n  ' /*|cmz*/),

  info: cmz.named('AutoUI_ui_ApplicantBadge-121', _typo2.default.baseText, /*cmz|*/'\n      & {\n        margin: 0 20px 10px 0\n      }\n\n      &:last-of-type {\n        margin-right: 0\n      }\n    ' /*|cmz*/),

  moreinfos: cmz.named('AutoUI_ui_ApplicantBadge-133', '\n    & {\n      color: ' + _theme2.default.typoLabel + '\n      font-size: 17px\n      margin: 0 0 10px 0\n      cursor: pointer\n      align-self: flex-end\n    }\n\n    &:hover {\n      color: ' + _theme2.default.typoHighlight + '\n    }\n  '),

  label: cmz.named('AutoUI_ui_ApplicantBadge-147', '\n    display: block\n    color: ' + _theme2.default.typoLabel + '\n    white-space: nowrap\n    line-height: 1.2\n    font-size: 17px\n  '),

  value: cmz.named('AutoUI_ui_ApplicantBadge-155', '\n    display: block\n    color: ' + _theme2.default.typoParagraph + '\n    line-height: 1.2\n    font-size: 17px\n    white-space: normal\n  '),

  tip: cmz.named('AutoUI_ui_ApplicantBadge-163', '\n    font-size: 15px\n    color: ' + _theme2.default.typoParagraph + '\n    line-height: 1.4\n  '),

  tags: cmz.named('AutoUI_ui_ApplicantBadge-169', /*cmz|*/'\n    font-size: 14px\n    grid-area: tags\n    width: 100%\n    display: flex\n    flex-wrap: wrap\n    align-items: start\n    margin: 0 0 -10px\n  ' /*|cmz*/),

  tag: cmz.named('AutoUI_ui_ApplicantBadge-179', '\n    & {\n      border: 1px solid ' + _theme2.default.lineSilver2 + '\n      border-radius: 3px\n      padding: 0 10px\n      text-transform: uppercase\n      margin: 0 10px 10px 0\n      white-space: nowrap\n      color: ' + _theme2.default.typoParagraph + '\n    }\n\n    &:last-of-type {\n      margin-right: 0\n    }\n  '),

  moretags: cmz.named('AutoUI_ui_ApplicantBadge-195', '\n    & {\n      border: none\n      padding: 0 0 0 20px\n      text-transform: initial\n      margin: 0 0 10px 0\n      cursor: pointer\n    }\n\n    &:hover {\n      color: ' + _theme2.default.typoHighlight + '\n    }\n  '),

  purelabel: cmz.named('AutoUI_ui_ApplicantBadge-209', '\n    border: none\n    color: ' + _theme2.default.typoLabel + '\n    font-size: 17px\n  '),

  children: cmz.named('AutoUI_ui_ApplicantBadge-215', /*cmz|*/'\n    grid-column: 1 / -1\n    grid-row: 4 / -1\n  ' /*|cmz*/)
};

var tabularTheme = {}; // TODO: https://zube.io/x-team/xp-formerly-auto/c/1638

var ApplicantBadge = function (_PureComponent) {
  _inherits(ApplicantBadge, _PureComponent);

  function ApplicantBadge() {
    _classCallCheck(this, ApplicantBadge);

    return _possibleConstructorReturn(this, (ApplicantBadge.__proto__ || Object.getPrototypeOf(ApplicantBadge)).apply(this, arguments));
  }

  _createClass(ApplicantBadge, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          id = _props.id,
          mode = _props.mode,
          active = _props.active,
          name = _props.name,
          email = _props.email,
          info = _props.info,
          tags = _props.tags,
          avatar = _props.avatar,
          children = _props.children,
          exclusionFormRender = _props.exclusionFormRender;


      var cx = mode === 'card' ? cardTheme : tabularTheme;

      var mapInfosToRender = function mapInfosToRender(infos) {
        return _react2.default.createElement(_TruncatedList2.default, {
          inserted: true,
          visible: 4,
          listClass: cx.infos,
          itemClass: cx.info,
          items: infos && info.filter(function (info) {
            return info.value;
          }).map(function (info, i) {
            return _react2.default.createElement(
              _Dropdown2.default,
              {
                key: i,
                tooltip: true,
                hover: true,
                targetYOrigin: 'top',
                label: _react2.default.createElement(
                  'span',
                  null,
                  _react2.default.createElement(
                    'span',
                    { className: cx.label },
                    info.label
                  ),
                  _react2.default.createElement(
                    'span',
                    { className: cx.value },
                    info.value
                  )
                )
              },
              info.tip && _react2.default.createElement(
                'span',
                { className: cx.tip },
                info.tip
              )
            );
          }),
          viewMore: function viewMore(amount, action) {
            return _react2.default.createElement(
              'li',
              { className: [cx.info, cx.moreinfos].join(' '), onClick: action },
              '+ ' + amount + ' info'
            );
          }
        });
      };

      var mapTagsToRender = function mapTagsToRender(tags) {
        return _react2.default.createElement(_TruncatedList2.default, {
          inserted: true,
          visible: 5,
          items: tags,
          listClass: cx.tags,
          itemClass: cx.tag,
          viewMore: function viewMore(amount, action) {
            return _react2.default.createElement(
              'li',
              { className: [cx.tag, cx.moretags, cx.purelabel].join(' '), onClick: action },
              '+ ' + amount + ' more'
            );
          }
        });
      };

      var handleClick = function handleClick(e) {
        e.stopPropagation();
        var _props2 = _this2.props,
            id = _props2.id,
            onClick = _props2.onClick;

        onClick && onClick(id);
      };

      return id ? _react2.default.createElement(
        'div',
        { onClick: handleClick, className: [cx.mode, cx.displayControlsOnHover, active ? cx.active : ''].join(' ') },
        (name || email) && _react2.default.createElement(
          'div',
          { className: cx.name },
          name || email
        ),
        (avatar || email) && _react2.default.createElement(
          'div',
          { className: cx.avatar },
          avatar || _react2.default.createElement(_Avatar2.default, {
            src: 'https://www.gravatar.com/avatar/' + (0, _md2.default)(email) + '?s=90',
            email: name ? name + '\'s avatar' : 'avatar',
            size: 90
          })
        ),
        _react2.default.createElement(
          'div',
          { className: cx.controls },
          exclusionFormRender && _react2.default.createElement(
            _Dropdown2.default,
            {
              tooltip: true,
              label: _react2.default.createElement(
                'span',
                { className: cx.control },
                _react2.default.createElement(_SvgIcon2.default, { icon: 'x' })
              )
            },
            exclusionFormRender()
          )
        ),
        info && info.length > 0 && mapInfosToRender(info),
        tags && tags.length > 0 && mapTagsToRender(tags),
        children && _react2.default.createElement(
          'div',
          { className: cx.children },
          children
        )
      ) : null;
    }
  }]);

  return ApplicantBadge;
}(_react.PureComponent);

ApplicantBadge.defaultProps = {
  mode: 'card',
  active: false
};
exports.default = ApplicantBadge;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(37));
	}
	else if (typeof define === "function" && define.amd) {
		// AMD
		define(["./core"], factory);
	}
	else {
		// Global (browser)
		factory(root.CryptoJS);
	}
}(this, function (CryptoJS) {

	(function (Math) {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var WordArray = C_lib.WordArray;
	    var Hasher = C_lib.Hasher;
	    var C_algo = C.algo;

	    // Constants table
	    var T = [];

	    // Compute constants
	    (function () {
	        for (var i = 0; i < 64; i++) {
	            T[i] = (Math.abs(Math.sin(i + 1)) * 0x100000000) | 0;
	        }
	    }());

	    /**
	     * MD5 hash algorithm.
	     */
	    var MD5 = C_algo.MD5 = Hasher.extend({
	        _doReset: function () {
	            this._hash = new WordArray.init([
	                0x67452301, 0xefcdab89,
	                0x98badcfe, 0x10325476
	            ]);
	        },

	        _doProcessBlock: function (M, offset) {
	            // Swap endian
	            for (var i = 0; i < 16; i++) {
	                // Shortcuts
	                var offset_i = offset + i;
	                var M_offset_i = M[offset_i];

	                M[offset_i] = (
	                    (((M_offset_i << 8)  | (M_offset_i >>> 24)) & 0x00ff00ff) |
	                    (((M_offset_i << 24) | (M_offset_i >>> 8))  & 0xff00ff00)
	                );
	            }

	            // Shortcuts
	            var H = this._hash.words;

	            var M_offset_0  = M[offset + 0];
	            var M_offset_1  = M[offset + 1];
	            var M_offset_2  = M[offset + 2];
	            var M_offset_3  = M[offset + 3];
	            var M_offset_4  = M[offset + 4];
	            var M_offset_5  = M[offset + 5];
	            var M_offset_6  = M[offset + 6];
	            var M_offset_7  = M[offset + 7];
	            var M_offset_8  = M[offset + 8];
	            var M_offset_9  = M[offset + 9];
	            var M_offset_10 = M[offset + 10];
	            var M_offset_11 = M[offset + 11];
	            var M_offset_12 = M[offset + 12];
	            var M_offset_13 = M[offset + 13];
	            var M_offset_14 = M[offset + 14];
	            var M_offset_15 = M[offset + 15];

	            // Working varialbes
	            var a = H[0];
	            var b = H[1];
	            var c = H[2];
	            var d = H[3];

	            // Computation
	            a = FF(a, b, c, d, M_offset_0,  7,  T[0]);
	            d = FF(d, a, b, c, M_offset_1,  12, T[1]);
	            c = FF(c, d, a, b, M_offset_2,  17, T[2]);
	            b = FF(b, c, d, a, M_offset_3,  22, T[3]);
	            a = FF(a, b, c, d, M_offset_4,  7,  T[4]);
	            d = FF(d, a, b, c, M_offset_5,  12, T[5]);
	            c = FF(c, d, a, b, M_offset_6,  17, T[6]);
	            b = FF(b, c, d, a, M_offset_7,  22, T[7]);
	            a = FF(a, b, c, d, M_offset_8,  7,  T[8]);
	            d = FF(d, a, b, c, M_offset_9,  12, T[9]);
	            c = FF(c, d, a, b, M_offset_10, 17, T[10]);
	            b = FF(b, c, d, a, M_offset_11, 22, T[11]);
	            a = FF(a, b, c, d, M_offset_12, 7,  T[12]);
	            d = FF(d, a, b, c, M_offset_13, 12, T[13]);
	            c = FF(c, d, a, b, M_offset_14, 17, T[14]);
	            b = FF(b, c, d, a, M_offset_15, 22, T[15]);

	            a = GG(a, b, c, d, M_offset_1,  5,  T[16]);
	            d = GG(d, a, b, c, M_offset_6,  9,  T[17]);
	            c = GG(c, d, a, b, M_offset_11, 14, T[18]);
	            b = GG(b, c, d, a, M_offset_0,  20, T[19]);
	            a = GG(a, b, c, d, M_offset_5,  5,  T[20]);
	            d = GG(d, a, b, c, M_offset_10, 9,  T[21]);
	            c = GG(c, d, a, b, M_offset_15, 14, T[22]);
	            b = GG(b, c, d, a, M_offset_4,  20, T[23]);
	            a = GG(a, b, c, d, M_offset_9,  5,  T[24]);
	            d = GG(d, a, b, c, M_offset_14, 9,  T[25]);
	            c = GG(c, d, a, b, M_offset_3,  14, T[26]);
	            b = GG(b, c, d, a, M_offset_8,  20, T[27]);
	            a = GG(a, b, c, d, M_offset_13, 5,  T[28]);
	            d = GG(d, a, b, c, M_offset_2,  9,  T[29]);
	            c = GG(c, d, a, b, M_offset_7,  14, T[30]);
	            b = GG(b, c, d, a, M_offset_12, 20, T[31]);

	            a = HH(a, b, c, d, M_offset_5,  4,  T[32]);
	            d = HH(d, a, b, c, M_offset_8,  11, T[33]);
	            c = HH(c, d, a, b, M_offset_11, 16, T[34]);
	            b = HH(b, c, d, a, M_offset_14, 23, T[35]);
	            a = HH(a, b, c, d, M_offset_1,  4,  T[36]);
	            d = HH(d, a, b, c, M_offset_4,  11, T[37]);
	            c = HH(c, d, a, b, M_offset_7,  16, T[38]);
	            b = HH(b, c, d, a, M_offset_10, 23, T[39]);
	            a = HH(a, b, c, d, M_offset_13, 4,  T[40]);
	            d = HH(d, a, b, c, M_offset_0,  11, T[41]);
	            c = HH(c, d, a, b, M_offset_3,  16, T[42]);
	            b = HH(b, c, d, a, M_offset_6,  23, T[43]);
	            a = HH(a, b, c, d, M_offset_9,  4,  T[44]);
	            d = HH(d, a, b, c, M_offset_12, 11, T[45]);
	            c = HH(c, d, a, b, M_offset_15, 16, T[46]);
	            b = HH(b, c, d, a, M_offset_2,  23, T[47]);

	            a = II(a, b, c, d, M_offset_0,  6,  T[48]);
	            d = II(d, a, b, c, M_offset_7,  10, T[49]);
	            c = II(c, d, a, b, M_offset_14, 15, T[50]);
	            b = II(b, c, d, a, M_offset_5,  21, T[51]);
	            a = II(a, b, c, d, M_offset_12, 6,  T[52]);
	            d = II(d, a, b, c, M_offset_3,  10, T[53]);
	            c = II(c, d, a, b, M_offset_10, 15, T[54]);
	            b = II(b, c, d, a, M_offset_1,  21, T[55]);
	            a = II(a, b, c, d, M_offset_8,  6,  T[56]);
	            d = II(d, a, b, c, M_offset_15, 10, T[57]);
	            c = II(c, d, a, b, M_offset_6,  15, T[58]);
	            b = II(b, c, d, a, M_offset_13, 21, T[59]);
	            a = II(a, b, c, d, M_offset_4,  6,  T[60]);
	            d = II(d, a, b, c, M_offset_11, 10, T[61]);
	            c = II(c, d, a, b, M_offset_2,  15, T[62]);
	            b = II(b, c, d, a, M_offset_9,  21, T[63]);

	            // Intermediate hash value
	            H[0] = (H[0] + a) | 0;
	            H[1] = (H[1] + b) | 0;
	            H[2] = (H[2] + c) | 0;
	            H[3] = (H[3] + d) | 0;
	        },

	        _doFinalize: function () {
	            // Shortcuts
	            var data = this._data;
	            var dataWords = data.words;

	            var nBitsTotal = this._nDataBytes * 8;
	            var nBitsLeft = data.sigBytes * 8;

	            // Add padding
	            dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);

	            var nBitsTotalH = Math.floor(nBitsTotal / 0x100000000);
	            var nBitsTotalL = nBitsTotal;
	            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 15] = (
	                (((nBitsTotalH << 8)  | (nBitsTotalH >>> 24)) & 0x00ff00ff) |
	                (((nBitsTotalH << 24) | (nBitsTotalH >>> 8))  & 0xff00ff00)
	            );
	            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 14] = (
	                (((nBitsTotalL << 8)  | (nBitsTotalL >>> 24)) & 0x00ff00ff) |
	                (((nBitsTotalL << 24) | (nBitsTotalL >>> 8))  & 0xff00ff00)
	            );

	            data.sigBytes = (dataWords.length + 1) * 4;

	            // Hash final blocks
	            this._process();

	            // Shortcuts
	            var hash = this._hash;
	            var H = hash.words;

	            // Swap endian
	            for (var i = 0; i < 4; i++) {
	                // Shortcut
	                var H_i = H[i];

	                H[i] = (((H_i << 8)  | (H_i >>> 24)) & 0x00ff00ff) |
	                       (((H_i << 24) | (H_i >>> 8))  & 0xff00ff00);
	            }

	            // Return final computed hash
	            return hash;
	        },

	        clone: function () {
	            var clone = Hasher.clone.call(this);
	            clone._hash = this._hash.clone();

	            return clone;
	        }
	    });

	    function FF(a, b, c, d, x, s, t) {
	        var n = a + ((b & c) | (~b & d)) + x + t;
	        return ((n << s) | (n >>> (32 - s))) + b;
	    }

	    function GG(a, b, c, d, x, s, t) {
	        var n = a + ((b & d) | (c & ~d)) + x + t;
	        return ((n << s) | (n >>> (32 - s))) + b;
	    }

	    function HH(a, b, c, d, x, s, t) {
	        var n = a + (b ^ c ^ d) + x + t;
	        return ((n << s) | (n >>> (32 - s))) + b;
	    }

	    function II(a, b, c, d, x, s, t) {
	        var n = a + (c ^ (b | ~d)) + x + t;
	        return ((n << s) | (n >>> (32 - s))) + b;
	    }

	    /**
	     * Shortcut function to the hasher's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     *
	     * @return {WordArray} The hash.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hash = CryptoJS.MD5('message');
	     *     var hash = CryptoJS.MD5(wordArray);
	     */
	    C.MD5 = Hasher._createHelper(MD5);

	    /**
	     * Shortcut function to the HMAC's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     * @param {WordArray|string} key The secret key.
	     *
	     * @return {WordArray} The HMAC.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hmac = CryptoJS.HmacMD5(message, key);
	     */
	    C.HmacMD5 = Hasher._createHmacHelper(MD5);
	}(Math));


	return CryptoJS.MD5;

}));

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory) {
	if (true) {
		// CommonJS
		module.exports = exports = factory();
	}
	else if (typeof define === "function" && define.amd) {
		// AMD
		define([], factory);
	}
	else {
		// Global (browser)
		root.CryptoJS = factory();
	}
}(this, function () {

	/**
	 * CryptoJS core components.
	 */
	var CryptoJS = CryptoJS || (function (Math, undefined) {
	    /*
	     * Local polyfil of Object.create
	     */
	    var create = Object.create || (function () {
	        function F() {};

	        return function (obj) {
	            var subtype;

	            F.prototype = obj;

	            subtype = new F();

	            F.prototype = null;

	            return subtype;
	        };
	    }())

	    /**
	     * CryptoJS namespace.
	     */
	    var C = {};

	    /**
	     * Library namespace.
	     */
	    var C_lib = C.lib = {};

	    /**
	     * Base object for prototypal inheritance.
	     */
	    var Base = C_lib.Base = (function () {


	        return {
	            /**
	             * Creates a new object that inherits from this object.
	             *
	             * @param {Object} overrides Properties to copy into the new object.
	             *
	             * @return {Object} The new object.
	             *
	             * @static
	             *
	             * @example
	             *
	             *     var MyType = CryptoJS.lib.Base.extend({
	             *         field: 'value',
	             *
	             *         method: function () {
	             *         }
	             *     });
	             */
	            extend: function (overrides) {
	                // Spawn
	                var subtype = create(this);

	                // Augment
	                if (overrides) {
	                    subtype.mixIn(overrides);
	                }

	                // Create default initializer
	                if (!subtype.hasOwnProperty('init') || this.init === subtype.init) {
	                    subtype.init = function () {
	                        subtype.$super.init.apply(this, arguments);
	                    };
	                }

	                // Initializer's prototype is the subtype object
	                subtype.init.prototype = subtype;

	                // Reference supertype
	                subtype.$super = this;

	                return subtype;
	            },

	            /**
	             * Extends this object and runs the init method.
	             * Arguments to create() will be passed to init().
	             *
	             * @return {Object} The new object.
	             *
	             * @static
	             *
	             * @example
	             *
	             *     var instance = MyType.create();
	             */
	            create: function () {
	                var instance = this.extend();
	                instance.init.apply(instance, arguments);

	                return instance;
	            },

	            /**
	             * Initializes a newly created object.
	             * Override this method to add some logic when your objects are created.
	             *
	             * @example
	             *
	             *     var MyType = CryptoJS.lib.Base.extend({
	             *         init: function () {
	             *             // ...
	             *         }
	             *     });
	             */
	            init: function () {
	            },

	            /**
	             * Copies properties into this object.
	             *
	             * @param {Object} properties The properties to mix in.
	             *
	             * @example
	             *
	             *     MyType.mixIn({
	             *         field: 'value'
	             *     });
	             */
	            mixIn: function (properties) {
	                for (var propertyName in properties) {
	                    if (properties.hasOwnProperty(propertyName)) {
	                        this[propertyName] = properties[propertyName];
	                    }
	                }

	                // IE won't copy toString using the loop above
	                if (properties.hasOwnProperty('toString')) {
	                    this.toString = properties.toString;
	                }
	            },

	            /**
	             * Creates a copy of this object.
	             *
	             * @return {Object} The clone.
	             *
	             * @example
	             *
	             *     var clone = instance.clone();
	             */
	            clone: function () {
	                return this.init.prototype.extend(this);
	            }
	        };
	    }());

	    /**
	     * An array of 32-bit words.
	     *
	     * @property {Array} words The array of 32-bit words.
	     * @property {number} sigBytes The number of significant bytes in this word array.
	     */
	    var WordArray = C_lib.WordArray = Base.extend({
	        /**
	         * Initializes a newly created word array.
	         *
	         * @param {Array} words (Optional) An array of 32-bit words.
	         * @param {number} sigBytes (Optional) The number of significant bytes in the words.
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.lib.WordArray.create();
	         *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607]);
	         *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607], 6);
	         */
	        init: function (words, sigBytes) {
	            words = this.words = words || [];

	            if (sigBytes != undefined) {
	                this.sigBytes = sigBytes;
	            } else {
	                this.sigBytes = words.length * 4;
	            }
	        },

	        /**
	         * Converts this word array to a string.
	         *
	         * @param {Encoder} encoder (Optional) The encoding strategy to use. Default: CryptoJS.enc.Hex
	         *
	         * @return {string} The stringified word array.
	         *
	         * @example
	         *
	         *     var string = wordArray + '';
	         *     var string = wordArray.toString();
	         *     var string = wordArray.toString(CryptoJS.enc.Utf8);
	         */
	        toString: function (encoder) {
	            return (encoder || Hex).stringify(this);
	        },

	        /**
	         * Concatenates a word array to this word array.
	         *
	         * @param {WordArray} wordArray The word array to append.
	         *
	         * @return {WordArray} This word array.
	         *
	         * @example
	         *
	         *     wordArray1.concat(wordArray2);
	         */
	        concat: function (wordArray) {
	            // Shortcuts
	            var thisWords = this.words;
	            var thatWords = wordArray.words;
	            var thisSigBytes = this.sigBytes;
	            var thatSigBytes = wordArray.sigBytes;

	            // Clamp excess bits
	            this.clamp();

	            // Concat
	            if (thisSigBytes % 4) {
	                // Copy one byte at a time
	                for (var i = 0; i < thatSigBytes; i++) {
	                    var thatByte = (thatWords[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
	                    thisWords[(thisSigBytes + i) >>> 2] |= thatByte << (24 - ((thisSigBytes + i) % 4) * 8);
	                }
	            } else {
	                // Copy one word at a time
	                for (var i = 0; i < thatSigBytes; i += 4) {
	                    thisWords[(thisSigBytes + i) >>> 2] = thatWords[i >>> 2];
	                }
	            }
	            this.sigBytes += thatSigBytes;

	            // Chainable
	            return this;
	        },

	        /**
	         * Removes insignificant bits.
	         *
	         * @example
	         *
	         *     wordArray.clamp();
	         */
	        clamp: function () {
	            // Shortcuts
	            var words = this.words;
	            var sigBytes = this.sigBytes;

	            // Clamp
	            words[sigBytes >>> 2] &= 0xffffffff << (32 - (sigBytes % 4) * 8);
	            words.length = Math.ceil(sigBytes / 4);
	        },

	        /**
	         * Creates a copy of this word array.
	         *
	         * @return {WordArray} The clone.
	         *
	         * @example
	         *
	         *     var clone = wordArray.clone();
	         */
	        clone: function () {
	            var clone = Base.clone.call(this);
	            clone.words = this.words.slice(0);

	            return clone;
	        },

	        /**
	         * Creates a word array filled with random bytes.
	         *
	         * @param {number} nBytes The number of random bytes to generate.
	         *
	         * @return {WordArray} The random word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.lib.WordArray.random(16);
	         */
	        random: function (nBytes) {
	            var words = [];

	            var r = (function (m_w) {
	                var m_w = m_w;
	                var m_z = 0x3ade68b1;
	                var mask = 0xffffffff;

	                return function () {
	                    m_z = (0x9069 * (m_z & 0xFFFF) + (m_z >> 0x10)) & mask;
	                    m_w = (0x4650 * (m_w & 0xFFFF) + (m_w >> 0x10)) & mask;
	                    var result = ((m_z << 0x10) + m_w) & mask;
	                    result /= 0x100000000;
	                    result += 0.5;
	                    return result * (Math.random() > .5 ? 1 : -1);
	                }
	            });

	            for (var i = 0, rcache; i < nBytes; i += 4) {
	                var _r = r((rcache || Math.random()) * 0x100000000);

	                rcache = _r() * 0x3ade67b7;
	                words.push((_r() * 0x100000000) | 0);
	            }

	            return new WordArray.init(words, nBytes);
	        }
	    });

	    /**
	     * Encoder namespace.
	     */
	    var C_enc = C.enc = {};

	    /**
	     * Hex encoding strategy.
	     */
	    var Hex = C_enc.Hex = {
	        /**
	         * Converts a word array to a hex string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The hex string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var hexString = CryptoJS.enc.Hex.stringify(wordArray);
	         */
	        stringify: function (wordArray) {
	            // Shortcuts
	            var words = wordArray.words;
	            var sigBytes = wordArray.sigBytes;

	            // Convert
	            var hexChars = [];
	            for (var i = 0; i < sigBytes; i++) {
	                var bite = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
	                hexChars.push((bite >>> 4).toString(16));
	                hexChars.push((bite & 0x0f).toString(16));
	            }

	            return hexChars.join('');
	        },

	        /**
	         * Converts a hex string to a word array.
	         *
	         * @param {string} hexStr The hex string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Hex.parse(hexString);
	         */
	        parse: function (hexStr) {
	            // Shortcut
	            var hexStrLength = hexStr.length;

	            // Convert
	            var words = [];
	            for (var i = 0; i < hexStrLength; i += 2) {
	                words[i >>> 3] |= parseInt(hexStr.substr(i, 2), 16) << (24 - (i % 8) * 4);
	            }

	            return new WordArray.init(words, hexStrLength / 2);
	        }
	    };

	    /**
	     * Latin1 encoding strategy.
	     */
	    var Latin1 = C_enc.Latin1 = {
	        /**
	         * Converts a word array to a Latin1 string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The Latin1 string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var latin1String = CryptoJS.enc.Latin1.stringify(wordArray);
	         */
	        stringify: function (wordArray) {
	            // Shortcuts
	            var words = wordArray.words;
	            var sigBytes = wordArray.sigBytes;

	            // Convert
	            var latin1Chars = [];
	            for (var i = 0; i < sigBytes; i++) {
	                var bite = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
	                latin1Chars.push(String.fromCharCode(bite));
	            }

	            return latin1Chars.join('');
	        },

	        /**
	         * Converts a Latin1 string to a word array.
	         *
	         * @param {string} latin1Str The Latin1 string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Latin1.parse(latin1String);
	         */
	        parse: function (latin1Str) {
	            // Shortcut
	            var latin1StrLength = latin1Str.length;

	            // Convert
	            var words = [];
	            for (var i = 0; i < latin1StrLength; i++) {
	                words[i >>> 2] |= (latin1Str.charCodeAt(i) & 0xff) << (24 - (i % 4) * 8);
	            }

	            return new WordArray.init(words, latin1StrLength);
	        }
	    };

	    /**
	     * UTF-8 encoding strategy.
	     */
	    var Utf8 = C_enc.Utf8 = {
	        /**
	         * Converts a word array to a UTF-8 string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The UTF-8 string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var utf8String = CryptoJS.enc.Utf8.stringify(wordArray);
	         */
	        stringify: function (wordArray) {
	            try {
	                return decodeURIComponent(escape(Latin1.stringify(wordArray)));
	            } catch (e) {
	                throw new Error('Malformed UTF-8 data');
	            }
	        },

	        /**
	         * Converts a UTF-8 string to a word array.
	         *
	         * @param {string} utf8Str The UTF-8 string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Utf8.parse(utf8String);
	         */
	        parse: function (utf8Str) {
	            return Latin1.parse(unescape(encodeURIComponent(utf8Str)));
	        }
	    };

	    /**
	     * Abstract buffered block algorithm template.
	     *
	     * The property blockSize must be implemented in a concrete subtype.
	     *
	     * @property {number} _minBufferSize The number of blocks that should be kept unprocessed in the buffer. Default: 0
	     */
	    var BufferedBlockAlgorithm = C_lib.BufferedBlockAlgorithm = Base.extend({
	        /**
	         * Resets this block algorithm's data buffer to its initial state.
	         *
	         * @example
	         *
	         *     bufferedBlockAlgorithm.reset();
	         */
	        reset: function () {
	            // Initial values
	            this._data = new WordArray.init();
	            this._nDataBytes = 0;
	        },

	        /**
	         * Adds new data to this block algorithm's buffer.
	         *
	         * @param {WordArray|string} data The data to append. Strings are converted to a WordArray using UTF-8.
	         *
	         * @example
	         *
	         *     bufferedBlockAlgorithm._append('data');
	         *     bufferedBlockAlgorithm._append(wordArray);
	         */
	        _append: function (data) {
	            // Convert string to WordArray, else assume WordArray already
	            if (typeof data == 'string') {
	                data = Utf8.parse(data);
	            }

	            // Append
	            this._data.concat(data);
	            this._nDataBytes += data.sigBytes;
	        },

	        /**
	         * Processes available data blocks.
	         *
	         * This method invokes _doProcessBlock(offset), which must be implemented by a concrete subtype.
	         *
	         * @param {boolean} doFlush Whether all blocks and partial blocks should be processed.
	         *
	         * @return {WordArray} The processed data.
	         *
	         * @example
	         *
	         *     var processedData = bufferedBlockAlgorithm._process();
	         *     var processedData = bufferedBlockAlgorithm._process(!!'flush');
	         */
	        _process: function (doFlush) {
	            // Shortcuts
	            var data = this._data;
	            var dataWords = data.words;
	            var dataSigBytes = data.sigBytes;
	            var blockSize = this.blockSize;
	            var blockSizeBytes = blockSize * 4;

	            // Count blocks ready
	            var nBlocksReady = dataSigBytes / blockSizeBytes;
	            if (doFlush) {
	                // Round up to include partial blocks
	                nBlocksReady = Math.ceil(nBlocksReady);
	            } else {
	                // Round down to include only full blocks,
	                // less the number of blocks that must remain in the buffer
	                nBlocksReady = Math.max((nBlocksReady | 0) - this._minBufferSize, 0);
	            }

	            // Count words ready
	            var nWordsReady = nBlocksReady * blockSize;

	            // Count bytes ready
	            var nBytesReady = Math.min(nWordsReady * 4, dataSigBytes);

	            // Process blocks
	            if (nWordsReady) {
	                for (var offset = 0; offset < nWordsReady; offset += blockSize) {
	                    // Perform concrete-algorithm logic
	                    this._doProcessBlock(dataWords, offset);
	                }

	                // Remove processed words
	                var processedWords = dataWords.splice(0, nWordsReady);
	                data.sigBytes -= nBytesReady;
	            }

	            // Return processed words
	            return new WordArray.init(processedWords, nBytesReady);
	        },

	        /**
	         * Creates a copy of this object.
	         *
	         * @return {Object} The clone.
	         *
	         * @example
	         *
	         *     var clone = bufferedBlockAlgorithm.clone();
	         */
	        clone: function () {
	            var clone = Base.clone.call(this);
	            clone._data = this._data.clone();

	            return clone;
	        },

	        _minBufferSize: 0
	    });

	    /**
	     * Abstract hasher template.
	     *
	     * @property {number} blockSize The number of 32-bit words this hasher operates on. Default: 16 (512 bits)
	     */
	    var Hasher = C_lib.Hasher = BufferedBlockAlgorithm.extend({
	        /**
	         * Configuration options.
	         */
	        cfg: Base.extend(),

	        /**
	         * Initializes a newly created hasher.
	         *
	         * @param {Object} cfg (Optional) The configuration options to use for this hash computation.
	         *
	         * @example
	         *
	         *     var hasher = CryptoJS.algo.SHA256.create();
	         */
	        init: function (cfg) {
	            // Apply config defaults
	            this.cfg = this.cfg.extend(cfg);

	            // Set initial values
	            this.reset();
	        },

	        /**
	         * Resets this hasher to its initial state.
	         *
	         * @example
	         *
	         *     hasher.reset();
	         */
	        reset: function () {
	            // Reset data buffer
	            BufferedBlockAlgorithm.reset.call(this);

	            // Perform concrete-hasher logic
	            this._doReset();
	        },

	        /**
	         * Updates this hasher with a message.
	         *
	         * @param {WordArray|string} messageUpdate The message to append.
	         *
	         * @return {Hasher} This hasher.
	         *
	         * @example
	         *
	         *     hasher.update('message');
	         *     hasher.update(wordArray);
	         */
	        update: function (messageUpdate) {
	            // Append
	            this._append(messageUpdate);

	            // Update the hash
	            this._process();

	            // Chainable
	            return this;
	        },

	        /**
	         * Finalizes the hash computation.
	         * Note that the finalize operation is effectively a destructive, read-once operation.
	         *
	         * @param {WordArray|string} messageUpdate (Optional) A final message update.
	         *
	         * @return {WordArray} The hash.
	         *
	         * @example
	         *
	         *     var hash = hasher.finalize();
	         *     var hash = hasher.finalize('message');
	         *     var hash = hasher.finalize(wordArray);
	         */
	        finalize: function (messageUpdate) {
	            // Final message update
	            if (messageUpdate) {
	                this._append(messageUpdate);
	            }

	            // Perform concrete-hasher logic
	            var hash = this._doFinalize();

	            return hash;
	        },

	        blockSize: 512/32,

	        /**
	         * Creates a shortcut function to a hasher's object interface.
	         *
	         * @param {Hasher} hasher The hasher to create a helper for.
	         *
	         * @return {Function} The shortcut function.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var SHA256 = CryptoJS.lib.Hasher._createHelper(CryptoJS.algo.SHA256);
	         */
	        _createHelper: function (hasher) {
	            return function (message, cfg) {
	                return new hasher.init(cfg).finalize(message);
	            };
	        },

	        /**
	         * Creates a shortcut function to the HMAC's object interface.
	         *
	         * @param {Hasher} hasher The hasher to use in this HMAC helper.
	         *
	         * @return {Function} The shortcut function.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var HmacSHA256 = CryptoJS.lib.Hasher._createHmacHelper(CryptoJS.algo.SHA256);
	         */
	        _createHmacHelper: function (hasher) {
	            return function (message, key) {
	                return new C_algo.HMAC.init(hasher, key).finalize(message);
	            };
	        }
	    });

	    /**
	     * Algorithm namespace.
	     */
	    var C_algo = C.algo = {};

	    return C;
	}(Math));


	return CryptoJS;

}));

/***/ }),
/* 38 */
/***/ (function(module, exports) {

const hasSemi = /;\s*$/
module.exports = function addSemis (css) {
  return css.replace(/(\{\s*)([\s\S]+?)(\s*\})/g, function (matches, open, body, close) {
    return open + body
      .split('\n')
      .map(function (line) {
        const isEmpty = line.trim() === ''
        return isEmpty || hasSemi.test(line) ? line : line + ';'
      })
      .join('\n') + close
  })
}


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var sheets = {};
var hasDoc = typeof document !== 'undefined';

function upsertCss(id, css) {
  if (!hasDoc) {
    sheets[id] = css;
    return;
  }

  var head = document.querySelector('head');
  var el = head.querySelector('style[data-cmz="' + id + '"]');

  if (!el) {
    el = document.createElement('style');
    el.setAttribute('type', 'text/css');
    el.setAttribute('data-cmz', id);
    head.appendChild(el);
  }

  if (el.styleSheet) {
    el.styleSheet.cssText = css;
  } else {
    el.textContent = css;
  }

  return el;
}

upsertCss.sheets = sheets;
module.exports = upsertCss;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _names = { cmz: 0 };

module.exports = function uniquifyName(name) {
  if (name) {
    return name;
  }

  var newName = 'cmz';
  if (_names.cmz !== undefined) {
    newName += '-' + _names.cmz;
    _names.cmz += 1;
  } else {
    _names.cmz = 1;
  }
  return newName;
};

module.exports.reset = function () {
  _names = { cmz: 0 };
};

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var colorString = __webpack_require__(42);
var convert = __webpack_require__(45);

var _slice = [].slice;

var skippedModels = [
	// to be honest, I don't really feel like keyword belongs in color convert, but eh.
	'keyword',

	// gray conflicts with some method names, and has its own method defined.
	'gray',

	// shouldn't really be in color-convert either...
	'hex'
];

var hashedModelKeys = {};
Object.keys(convert).forEach(function (model) {
	hashedModelKeys[_slice.call(convert[model].labels).sort().join('')] = model;
});

var limiters = {};

function Color(obj, model) {
	if (!(this instanceof Color)) {
		return new Color(obj, model);
	}

	if (model && model in skippedModels) {
		model = null;
	}

	if (model && !(model in convert)) {
		throw new Error('Unknown model: ' + model);
	}

	var i;
	var channels;

	if (!obj) {
		this.model = 'rgb';
		this.color = [0, 0, 0];
		this.valpha = 1;
	} else if (obj instanceof Color) {
		this.model = obj.model;
		this.color = obj.color.slice();
		this.valpha = obj.valpha;
	} else if (typeof obj === 'string') {
		var result = colorString.get(obj);
		if (result === null) {
			throw new Error('Unable to parse color from string: ' + obj);
		}

		this.model = result.model;
		channels = convert[this.model].channels;
		this.color = result.value.slice(0, channels);
		this.valpha = typeof result.value[channels] === 'number' ? result.value[channels] : 1;
	} else if (obj.length) {
		this.model = model || 'rgb';
		channels = convert[this.model].channels;
		var newArr = _slice.call(obj, 0, channels);
		this.color = zeroArray(newArr, channels);
		this.valpha = typeof obj[channels] === 'number' ? obj[channels] : 1;
	} else if (typeof obj === 'number') {
		// this is always RGB - can be converted later on.
		obj &= 0xFFFFFF;
		this.model = 'rgb';
		this.color = [
			(obj >> 16) & 0xFF,
			(obj >> 8) & 0xFF,
			obj & 0xFF
		];
		this.valpha = 1;
	} else {
		this.valpha = 1;

		var keys = Object.keys(obj);
		if ('alpha' in obj) {
			keys.splice(keys.indexOf('alpha'), 1);
			this.valpha = typeof obj.alpha === 'number' ? obj.alpha : 0;
		}

		var hashedKeys = keys.sort().join('');
		if (!(hashedKeys in hashedModelKeys)) {
			throw new Error('Unable to parse color from object: ' + JSON.stringify(obj));
		}

		this.model = hashedModelKeys[hashedKeys];

		var labels = convert[this.model].labels;
		var color = [];
		for (i = 0; i < labels.length; i++) {
			color.push(obj[labels[i]]);
		}

		this.color = zeroArray(color);
	}

	// perform limitations (clamping, etc.)
	if (limiters[this.model]) {
		channels = convert[this.model].channels;
		for (i = 0; i < channels; i++) {
			var limit = limiters[this.model][i];
			if (limit) {
				this.color[i] = limit(this.color[i]);
			}
		}
	}

	this.valpha = Math.max(0, Math.min(1, this.valpha));

	if (Object.freeze) {
		Object.freeze(this);
	}
}

Color.prototype = {
	toString: function () {
		return this.string();
	},

	toJSON: function () {
		return this[this.model]();
	},

	string: function (places) {
		var self = this.model in colorString.to ? this : this.rgb();
		self = self.round(typeof places === 'number' ? places : 1);
		var args = self.valpha === 1 ? self.color : self.color.concat(this.valpha);
		return colorString.to[self.model](args);
	},

	percentString: function (places) {
		var self = this.rgb().round(typeof places === 'number' ? places : 1);
		var args = self.valpha === 1 ? self.color : self.color.concat(this.valpha);
		return colorString.to.rgb.percent(args);
	},

	array: function () {
		return this.valpha === 1 ? this.color.slice() : this.color.concat(this.valpha);
	},

	object: function () {
		var result = {};
		var channels = convert[this.model].channels;
		var labels = convert[this.model].labels;

		for (var i = 0; i < channels; i++) {
			result[labels[i]] = this.color[i];
		}

		if (this.valpha !== 1) {
			result.alpha = this.valpha;
		}

		return result;
	},

	unitArray: function () {
		var rgb = this.rgb().color;
		rgb[0] /= 255;
		rgb[1] /= 255;
		rgb[2] /= 255;

		if (this.valpha !== 1) {
			rgb.push(this.valpha);
		}

		return rgb;
	},

	unitObject: function () {
		var rgb = this.rgb().object();
		rgb.r /= 255;
		rgb.g /= 255;
		rgb.b /= 255;

		if (this.valpha !== 1) {
			rgb.alpha = this.valpha;
		}

		return rgb;
	},

	round: function (places) {
		places = Math.max(places || 0, 0);
		return new Color(this.color.map(roundToPlace(places)).concat(this.valpha), this.model);
	},

	alpha: function (val) {
		if (arguments.length) {
			return new Color(this.color.concat(Math.max(0, Math.min(1, val))), this.model);
		}

		return this.valpha;
	},

	// rgb
	red: getset('rgb', 0, maxfn(255)),
	green: getset('rgb', 1, maxfn(255)),
	blue: getset('rgb', 2, maxfn(255)),

	hue: getset(['hsl', 'hsv', 'hsl', 'hwb', 'hcg'], 0, function (val) { return ((val % 360) + 360) % 360; }), // eslint-disable-line brace-style

	saturationl: getset('hsl', 1, maxfn(100)),
	lightness: getset('hsl', 2, maxfn(100)),

	saturationv: getset('hsv', 1, maxfn(100)),
	value: getset('hsv', 2, maxfn(100)),

	chroma: getset('hcg', 1, maxfn(100)),
	gray: getset('hcg', 2, maxfn(100)),

	white: getset('hwb', 1, maxfn(100)),
	wblack: getset('hwb', 2, maxfn(100)),

	cyan: getset('cmyk', 0, maxfn(100)),
	magenta: getset('cmyk', 1, maxfn(100)),
	yellow: getset('cmyk', 2, maxfn(100)),
	black: getset('cmyk', 3, maxfn(100)),

	x: getset('xyz', 0, maxfn(100)),
	y: getset('xyz', 1, maxfn(100)),
	z: getset('xyz', 2, maxfn(100)),

	l: getset('lab', 0, maxfn(100)),
	a: getset('lab', 1),
	b: getset('lab', 2),

	keyword: function (val) {
		if (arguments.length) {
			return new Color(val);
		}

		return convert[this.model].keyword(this.color);
	},

	hex: function (val) {
		if (arguments.length) {
			return new Color(val);
		}

		return colorString.to.hex(this.rgb().round().color);
	},

	rgbNumber: function () {
		var rgb = this.rgb().color;
		return ((rgb[0] & 0xFF) << 16) | ((rgb[1] & 0xFF) << 8) | (rgb[2] & 0xFF);
	},

	luminosity: function () {
		// http://www.w3.org/TR/WCAG20/#relativeluminancedef
		var rgb = this.rgb().color;

		var lum = [];
		for (var i = 0; i < rgb.length; i++) {
			var chan = rgb[i] / 255;
			lum[i] = (chan <= 0.03928) ? chan / 12.92 : Math.pow(((chan + 0.055) / 1.055), 2.4);
		}

		return 0.2126 * lum[0] + 0.7152 * lum[1] + 0.0722 * lum[2];
	},

	contrast: function (color2) {
		// http://www.w3.org/TR/WCAG20/#contrast-ratiodef
		var lum1 = this.luminosity();
		var lum2 = color2.luminosity();

		if (lum1 > lum2) {
			return (lum1 + 0.05) / (lum2 + 0.05);
		}

		return (lum2 + 0.05) / (lum1 + 0.05);
	},

	level: function (color2) {
		var contrastRatio = this.contrast(color2);
		if (contrastRatio >= 7.1) {
			return 'AAA';
		}

		return (contrastRatio >= 4.5) ? 'AA' : '';
	},

	dark: function () {
		// YIQ equation from http://24ways.org/2010/calculating-color-contrast
		var rgb = this.rgb().color;
		var yiq = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
		return yiq < 128;
	},

	light: function () {
		return !this.dark();
	},

	negate: function () {
		var rgb = this.rgb();
		for (var i = 0; i < 3; i++) {
			rgb.color[i] = 255 - rgb.color[i];
		}
		return rgb;
	},

	lighten: function (ratio) {
		var hsl = this.hsl();
		hsl.color[2] += hsl.color[2] * ratio;
		return hsl;
	},

	darken: function (ratio) {
		var hsl = this.hsl();
		hsl.color[2] -= hsl.color[2] * ratio;
		return hsl;
	},

	saturate: function (ratio) {
		var hsl = this.hsl();
		hsl.color[1] += hsl.color[1] * ratio;
		return hsl;
	},

	desaturate: function (ratio) {
		var hsl = this.hsl();
		hsl.color[1] -= hsl.color[1] * ratio;
		return hsl;
	},

	whiten: function (ratio) {
		var hwb = this.hwb();
		hwb.color[1] += hwb.color[1] * ratio;
		return hwb;
	},

	blacken: function (ratio) {
		var hwb = this.hwb();
		hwb.color[2] += hwb.color[2] * ratio;
		return hwb;
	},

	grayscale: function () {
		// http://en.wikipedia.org/wiki/Grayscale#Converting_color_to_grayscale
		var rgb = this.rgb().color;
		var val = rgb[0] * 0.3 + rgb[1] * 0.59 + rgb[2] * 0.11;
		return Color.rgb(val, val, val);
	},

	fade: function (ratio) {
		return this.alpha(this.valpha - (this.valpha * ratio));
	},

	opaquer: function (ratio) {
		return this.alpha(this.valpha + (this.valpha * ratio));
	},

	rotate: function (degrees) {
		var hsl = this.hsl();
		var hue = hsl.color[0];
		hue = (hue + degrees) % 360;
		hue = hue < 0 ? 360 + hue : hue;
		hsl.color[0] = hue;
		return hsl;
	},

	mix: function (mixinColor, weight) {
		// ported from sass implementation in C
		// https://github.com/sass/libsass/blob/0e6b4a2850092356aa3ece07c6b249f0221caced/functions.cpp#L209
		var color1 = mixinColor.rgb();
		var color2 = this.rgb();
		var p = weight === undefined ? 0.5 : weight;

		var w = 2 * p - 1;
		var a = color1.alpha() - color2.alpha();

		var w1 = (((w * a === -1) ? w : (w + a) / (1 + w * a)) + 1) / 2.0;
		var w2 = 1 - w1;

		return Color.rgb(
				w1 * color1.red() + w2 * color2.red(),
				w1 * color1.green() + w2 * color2.green(),
				w1 * color1.blue() + w2 * color2.blue(),
				color1.alpha() * p + color2.alpha() * (1 - p));
	}
};

// model conversion methods and static constructors
Object.keys(convert).forEach(function (model) {
	if (skippedModels.indexOf(model) !== -1) {
		return;
	}

	var channels = convert[model].channels;

	// conversion methods
	Color.prototype[model] = function () {
		if (this.model === model) {
			return new Color(this);
		}

		if (arguments.length) {
			return new Color(arguments, model);
		}

		var newAlpha = typeof arguments[channels] === 'number' ? channels : this.valpha;
		return new Color(assertArray(convert[this.model][model].raw(this.color)).concat(newAlpha), model);
	};

	// 'static' construction methods
	Color[model] = function (color) {
		if (typeof color === 'number') {
			color = zeroArray(_slice.call(arguments), channels);
		}
		return new Color(color, model);
	};
});

function roundTo(num, places) {
	return Number(num.toFixed(places));
}

function roundToPlace(places) {
	return function (num) {
		return roundTo(num, places);
	};
}

function getset(model, channel, modifier) {
	model = Array.isArray(model) ? model : [model];

	model.forEach(function (m) {
		(limiters[m] || (limiters[m] = []))[channel] = modifier;
	});

	model = model[0];

	return function (val) {
		var result;

		if (arguments.length) {
			if (modifier) {
				val = modifier(val);
			}

			result = this[model]();
			result.color[channel] = val;
			return result;
		}

		result = this[model]().color[channel];
		if (modifier) {
			result = modifier(result);
		}

		return result;
	};
}

function maxfn(max) {
	return function (v) {
		return Math.max(0, Math.min(max, v));
	};
}

function assertArray(val) {
	return Array.isArray(val) ? val : [val];
}

function zeroArray(arr, length) {
	for (var i = 0; i < length; i++) {
		if (typeof arr[i] !== 'number') {
			arr[i] = 0;
		}
	}

	return arr;
}

module.exports = Color;


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

/* MIT license */
var colorNames = __webpack_require__(19);
var swizzle = __webpack_require__(43);

var reverseNames = {};

// create a list of reverse color names
for (var name in colorNames) {
	if (colorNames.hasOwnProperty(name)) {
		reverseNames[colorNames[name]] = name;
	}
}

var cs = module.exports = {
	to: {}
};

cs.get = function (string) {
	var prefix = string.substring(0, 3).toLowerCase();
	var val;
	var model;
	switch (prefix) {
		case 'hsl':
			val = cs.get.hsl(string);
			model = 'hsl';
			break;
		case 'hwb':
			val = cs.get.hwb(string);
			model = 'hwb';
			break;
		default:
			val = cs.get.rgb(string);
			model = 'rgb';
			break;
	}

	if (!val) {
		return null;
	}

	return {model: model, value: val};
};

cs.get.rgb = function (string) {
	if (!string) {
		return null;
	}

	var abbr = /^#([a-f0-9]{3,4})$/i;
	var hex = /^#([a-f0-9]{6})([a-f0-9]{2})?$/i;
	var rgba = /^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/;
	var per = /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/;
	var keyword = /(\D+)/;

	var rgb = [0, 0, 0, 1];
	var match;
	var i;
	var hexAlpha;

	if (match = string.match(hex)) {
		hexAlpha = match[2];
		match = match[1];

		for (i = 0; i < 3; i++) {
			// https://jsperf.com/slice-vs-substr-vs-substring-methods-long-string/19
			var i2 = i * 2;
			rgb[i] = parseInt(match.slice(i2, i2 + 2), 16);
		}

		if (hexAlpha) {
			rgb[3] = Math.round((parseInt(hexAlpha, 16) / 255) * 100) / 100;
		}
	} else if (match = string.match(abbr)) {
		match = match[1];
		hexAlpha = match[3];

		for (i = 0; i < 3; i++) {
			rgb[i] = parseInt(match[i] + match[i], 16);
		}

		if (hexAlpha) {
			rgb[3] = Math.round((parseInt(hexAlpha + hexAlpha, 16) / 255) * 100) / 100;
		}
	} else if (match = string.match(rgba)) {
		for (i = 0; i < 3; i++) {
			rgb[i] = parseInt(match[i + 1], 0);
		}

		if (match[4]) {
			rgb[3] = parseFloat(match[4]);
		}
	} else if (match = string.match(per)) {
		for (i = 0; i < 3; i++) {
			rgb[i] = Math.round(parseFloat(match[i + 1]) * 2.55);
		}

		if (match[4]) {
			rgb[3] = parseFloat(match[4]);
		}
	} else if (match = string.match(keyword)) {
		if (match[1] === 'transparent') {
			return [0, 0, 0, 0];
		}

		rgb = colorNames[match[1]];

		if (!rgb) {
			return null;
		}

		rgb[3] = 1;

		return rgb;
	} else {
		return null;
	}

	for (i = 0; i < 3; i++) {
		rgb[i] = clamp(rgb[i], 0, 255);
	}
	rgb[3] = clamp(rgb[3], 0, 1);

	return rgb;
};

cs.get.hsl = function (string) {
	if (!string) {
		return null;
	}

	var hsl = /^hsla?\(\s*([+-]?\d*[\.]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/;
	var match = string.match(hsl);

	if (match) {
		var alpha = parseFloat(match[4]);
		var h = ((parseFloat(match[1]) % 360) + 360) % 360;
		var s = clamp(parseFloat(match[2]), 0, 100);
		var l = clamp(parseFloat(match[3]), 0, 100);
		var a = clamp(isNaN(alpha) ? 1 : alpha, 0, 1);

		return [h, s, l, a];
	}

	return null;
};

cs.get.hwb = function (string) {
	if (!string) {
		return null;
	}

	var hwb = /^hwb\(\s*([+-]?\d*[\.]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/;
	var match = string.match(hwb);

	if (match) {
		var alpha = parseFloat(match[4]);
		var h = ((parseFloat(match[1]) % 360) + 360) % 360;
		var w = clamp(parseFloat(match[2]), 0, 100);
		var b = clamp(parseFloat(match[3]), 0, 100);
		var a = clamp(isNaN(alpha) ? 1 : alpha, 0, 1);
		return [h, w, b, a];
	}

	return null;
};

cs.to.hex = function () {
	var rgba = swizzle(arguments);

	return (
		'#' +
		hexDouble(rgba[0]) +
		hexDouble(rgba[1]) +
		hexDouble(rgba[2]) +
		(rgba[3] < 1
			? (hexDouble(Math.round(rgba[3] * 255)))
			: '')
	);
};

cs.to.rgb = function () {
	var rgba = swizzle(arguments);

	return rgba.length < 4 || rgba[3] === 1
		? 'rgb(' + Math.round(rgba[0]) + ', ' + Math.round(rgba[1]) + ', ' + Math.round(rgba[2]) + ')'
		: 'rgba(' + Math.round(rgba[0]) + ', ' + Math.round(rgba[1]) + ', ' + Math.round(rgba[2]) + ', ' + rgba[3] + ')';
};

cs.to.rgb.percent = function () {
	var rgba = swizzle(arguments);

	var r = Math.round(rgba[0] / 255 * 100);
	var g = Math.round(rgba[1] / 255 * 100);
	var b = Math.round(rgba[2] / 255 * 100);

	return rgba.length < 4 || rgba[3] === 1
		? 'rgb(' + r + '%, ' + g + '%, ' + b + '%)'
		: 'rgba(' + r + '%, ' + g + '%, ' + b + '%, ' + rgba[3] + ')';
};

cs.to.hsl = function () {
	var hsla = swizzle(arguments);
	return hsla.length < 4 || hsla[3] === 1
		? 'hsl(' + hsla[0] + ', ' + hsla[1] + '%, ' + hsla[2] + '%)'
		: 'hsla(' + hsla[0] + ', ' + hsla[1] + '%, ' + hsla[2] + '%, ' + hsla[3] + ')';
};

// hwb is a bit different than rgb(a) & hsl(a) since there is no alpha specific syntax
// (hwb have alpha optional & 1 is default value)
cs.to.hwb = function () {
	var hwba = swizzle(arguments);

	var a = '';
	if (hwba.length >= 4 && hwba[3] !== 1) {
		a = ', ' + hwba[3];
	}

	return 'hwb(' + hwba[0] + ', ' + hwba[1] + '%, ' + hwba[2] + '%' + a + ')';
};

cs.to.keyword = function (rgb) {
	return reverseNames[rgb.slice(0, 3)];
};

// helpers
function clamp(num, min, max) {
	return Math.min(Math.max(min, num), max);
}

function hexDouble(num) {
	var str = num.toString(16).toUpperCase();
	return (str.length < 2) ? '0' + str : str;
}


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isArrayish = __webpack_require__(44);

var concat = Array.prototype.concat;
var slice = Array.prototype.slice;

var swizzle = module.exports = function swizzle(args) {
	var results = [];

	for (var i = 0, len = args.length; i < len; i++) {
		var arg = args[i];

		if (isArrayish(arg)) {
			// http://jsperf.com/javascript-array-concat-vs-push/98
			results = concat.call(results, slice.call(arg));
		} else {
			results.push(arg);
		}
	}

	return results;
};

swizzle.wrap = function (fn) {
	return function () {
		return fn(swizzle(arguments));
	};
};


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isArrayish(obj) {
	if (!obj || typeof obj === 'string') {
		return false;
	}

	return obj instanceof Array || Array.isArray(obj) ||
		(obj.length >= 0 && (obj.splice instanceof Function ||
			(Object.getOwnPropertyDescriptor(obj, (obj.length - 1)) && obj.constructor.name !== 'String')));
};


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var conversions = __webpack_require__(20);
var route = __webpack_require__(46);

var convert = {};

var models = Object.keys(conversions);

function wrapRaw(fn) {
	var wrappedFn = function (args) {
		if (args === undefined || args === null) {
			return args;
		}

		if (arguments.length > 1) {
			args = Array.prototype.slice.call(arguments);
		}

		return fn(args);
	};

	// preserve .conversion property if there is one
	if ('conversion' in fn) {
		wrappedFn.conversion = fn.conversion;
	}

	return wrappedFn;
}

function wrapRounded(fn) {
	var wrappedFn = function (args) {
		if (args === undefined || args === null) {
			return args;
		}

		if (arguments.length > 1) {
			args = Array.prototype.slice.call(arguments);
		}

		var result = fn(args);

		// we're assuming the result is an array here.
		// see notice in conversions.js; don't use box types
		// in conversion functions.
		if (typeof result === 'object') {
			for (var len = result.length, i = 0; i < len; i++) {
				result[i] = Math.round(result[i]);
			}
		}

		return result;
	};

	// preserve .conversion property if there is one
	if ('conversion' in fn) {
		wrappedFn.conversion = fn.conversion;
	}

	return wrappedFn;
}

models.forEach(function (fromModel) {
	convert[fromModel] = {};

	Object.defineProperty(convert[fromModel], 'channels', {value: conversions[fromModel].channels});
	Object.defineProperty(convert[fromModel], 'labels', {value: conversions[fromModel].labels});

	var routes = route(fromModel);
	var routeModels = Object.keys(routes);

	routeModels.forEach(function (toModel) {
		var fn = routes[toModel];

		convert[fromModel][toModel] = wrapRounded(fn);
		convert[fromModel][toModel].raw = wrapRaw(fn);
	});
});

module.exports = convert;


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var conversions = __webpack_require__(20);

/*
	this function routes a model to all other models.

	all functions that are routed have a property `.conversion` attached
	to the returned synthetic function. This property is an array
	of strings, each with the steps in between the 'from' and 'to'
	color models (inclusive).

	conversions that are not possible simply are not included.
*/

function buildGraph() {
	var graph = {};
	// https://jsperf.com/object-keys-vs-for-in-with-closure/3
	var models = Object.keys(conversions);

	for (var len = models.length, i = 0; i < len; i++) {
		graph[models[i]] = {
			// http://jsperf.com/1-vs-infinity
			// micro-opt, but this is simple.
			distance: -1,
			parent: null
		};
	}

	return graph;
}

// https://en.wikipedia.org/wiki/Breadth-first_search
function deriveBFS(fromModel) {
	var graph = buildGraph();
	var queue = [fromModel]; // unshift -> queue -> pop

	graph[fromModel].distance = 0;

	while (queue.length) {
		var current = queue.pop();
		var adjacents = Object.keys(conversions[current]);

		for (var len = adjacents.length, i = 0; i < len; i++) {
			var adjacent = adjacents[i];
			var node = graph[adjacent];

			if (node.distance === -1) {
				node.distance = graph[current].distance + 1;
				node.parent = current;
				queue.unshift(adjacent);
			}
		}
	}

	return graph;
}

function link(from, to) {
	return function (args) {
		return to(from(args));
	};
}

function wrapConversion(toModel, graph) {
	var path = [graph[toModel].parent, toModel];
	var fn = conversions[graph[toModel].parent][toModel];

	var cur = graph[toModel].parent;
	while (graph[cur].parent) {
		path.unshift(graph[cur].parent);
		fn = link(conversions[graph[cur].parent][cur], fn);
		cur = graph[cur].parent;
	}

	fn.conversion = path;
	return fn;
}

module.exports = function (fromModel) {
	var graph = deriveBFS(fromModel);
	var conversion = {};

	var models = Object.keys(graph);
	for (var len = models.length, i = 0; i < len; i++) {
		var toModel = models[i];
		var node = graph[toModel];

		if (node.parent === null) {
			// no possible conversion, or this node is the source model.
			continue;
		}

		conversion[toModel] = wrapConversion(toModel, graph);
	}

	return conversion;
};



/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(21);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ClickOutside = function (_Component) {
  _inherits(ClickOutside, _Component);

  function ClickOutside(props) {
    _classCallCheck(this, ClickOutside);

    var _this = _possibleConstructorReturn(this, (ClickOutside.__proto__ || Object.getPrototypeOf(ClickOutside)).call(this, props));

    _this.handle = function (e) {
      if (e.type === 'touchend') _this.isTouch = true;
      if (e.type === 'click' && _this.isTouch) return;
      var onClickOutside = _this.props.onClickOutside;

      var el = _this.container;
      if (el && !el.contains(e.target)) onClickOutside(e);
    };

    _this.getContainer = _this.getContainer.bind(_this);
    _this.isTouch = false;
    return _this;
  }

  _createClass(ClickOutside, [{
    key: 'getContainer',
    value: function getContainer(ref) {
      this.container = ref;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          onClickOutside = _props.onClickOutside,
          props = _objectWithoutProperties(_props, ['children', 'onClickOutside']);

      return _react2.default.createElement(
        'div',
        _extends({}, props, { ref: this.getContainer }),
        children
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      document.addEventListener('touchend', this.handle, true);
      document.addEventListener('click', this.handle, true);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      document.removeEventListener('touchend', this.handle, true);
      document.removeEventListener('click', this.handle, true);
    }
  }]);

  return ClickOutside;
}(_react.Component);

ClickOutside.propTypes = {
  onClickOutside: _propTypes2.default.func.isRequired
};
exports.default = ClickOutside;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var emptyFunction = __webpack_require__(13);
var invariant = __webpack_require__(14);
var warning = __webpack_require__(22);
var assign = __webpack_require__(49);

var ReactPropTypesSecret = __webpack_require__(15);
var checkPropTypes = __webpack_require__(50);

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          invariant(
            false,
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            warning(
              false,
              'You are manually calling a React.PropTypes validation ' +
              'function for the `%s` prop on `%s`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.',
              propFullName,
              componentName
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunction.thatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        warning(
          false,
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received %s at index %s.',
          getPostfixForTypeWarning(checker),
          i
        );
        return emptyFunction.thatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (process.env.NODE_ENV !== 'production') {
  var invariant = __webpack_require__(14);
  var warning = __webpack_require__(22);
  var ReactPropTypesSecret = __webpack_require__(15);
  var loggedTypeFailures = {};
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'the `prop-types` package, but received `%s`.', componentName || 'React class', location, typeSpecName, typeof typeSpecs[typeSpecName]);
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
        }
      }
    }
  }
}

module.exports = checkPropTypes;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var emptyFunction = __webpack_require__(13);
var invariant = __webpack_require__(14);
var ReactPropTypesSecret = __webpack_require__(15);

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    invariant(
      false,
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/* Web Font Loader v1.6.28 - (c) Adobe Systems, Google. License: Apache 2.0 */(function(){function aa(a,b,c){return a.call.apply(a.bind,arguments)}function ba(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function p(a,b,c){p=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?aa:ba;return p.apply(null,arguments)}var q=Date.now||function(){return+new Date};function ca(a,b){this.a=a;this.o=b||a;this.c=this.o.document}var da=!!window.FontFace;function t(a,b,c,d){b=a.c.createElement(b);if(c)for(var e in c)c.hasOwnProperty(e)&&("style"==e?b.style.cssText=c[e]:b.setAttribute(e,c[e]));d&&b.appendChild(a.c.createTextNode(d));return b}function u(a,b,c){a=a.c.getElementsByTagName(b)[0];a||(a=document.documentElement);a.insertBefore(c,a.lastChild)}function v(a){a.parentNode&&a.parentNode.removeChild(a)}
function w(a,b,c){b=b||[];c=c||[];for(var d=a.className.split(/\s+/),e=0;e<b.length;e+=1){for(var f=!1,g=0;g<d.length;g+=1)if(b[e]===d[g]){f=!0;break}f||d.push(b[e])}b=[];for(e=0;e<d.length;e+=1){f=!1;for(g=0;g<c.length;g+=1)if(d[e]===c[g]){f=!0;break}f||b.push(d[e])}a.className=b.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function y(a,b){for(var c=a.className.split(/\s+/),d=0,e=c.length;d<e;d++)if(c[d]==b)return!0;return!1}
function ea(a){return a.o.location.hostname||a.a.location.hostname}function z(a,b,c){function d(){m&&e&&f&&(m(g),m=null)}b=t(a,"link",{rel:"stylesheet",href:b,media:"all"});var e=!1,f=!0,g=null,m=c||null;da?(b.onload=function(){e=!0;d()},b.onerror=function(){e=!0;g=Error("Stylesheet failed to load");d()}):setTimeout(function(){e=!0;d()},0);u(a,"head",b)}
function A(a,b,c,d){var e=a.c.getElementsByTagName("head")[0];if(e){var f=t(a,"script",{src:b}),g=!1;f.onload=f.onreadystatechange=function(){g||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(g=!0,c&&c(null),f.onload=f.onreadystatechange=null,"HEAD"==f.parentNode.tagName&&e.removeChild(f))};e.appendChild(f);setTimeout(function(){g||(g=!0,c&&c(Error("Script load timeout")))},d||5E3);return f}return null};function B(){this.a=0;this.c=null}function C(a){a.a++;return function(){a.a--;D(a)}}function E(a,b){a.c=b;D(a)}function D(a){0==a.a&&a.c&&(a.c(),a.c=null)};function F(a){this.a=a||"-"}F.prototype.c=function(a){for(var b=[],c=0;c<arguments.length;c++)b.push(arguments[c].replace(/[\W_]+/g,"").toLowerCase());return b.join(this.a)};function G(a,b){this.c=a;this.f=4;this.a="n";var c=(b||"n4").match(/^([nio])([1-9])$/i);c&&(this.a=c[1],this.f=parseInt(c[2],10))}function fa(a){return H(a)+" "+(a.f+"00")+" 300px "+I(a.c)}function I(a){var b=[];a=a.split(/,\s*/);for(var c=0;c<a.length;c++){var d=a[c].replace(/['"]/g,"");-1!=d.indexOf(" ")||/^\d/.test(d)?b.push("'"+d+"'"):b.push(d)}return b.join(",")}function J(a){return a.a+a.f}function H(a){var b="normal";"o"===a.a?b="oblique":"i"===a.a&&(b="italic");return b}
function ga(a){var b=4,c="n",d=null;a&&((d=a.match(/(normal|oblique|italic)/i))&&d[1]&&(c=d[1].substr(0,1).toLowerCase()),(d=a.match(/([1-9]00|normal|bold)/i))&&d[1]&&(/bold/i.test(d[1])?b=7:/[1-9]00/.test(d[1])&&(b=parseInt(d[1].substr(0,1),10))));return c+b};function ha(a,b){this.c=a;this.f=a.o.document.documentElement;this.h=b;this.a=new F("-");this.j=!1!==b.events;this.g=!1!==b.classes}function ia(a){a.g&&w(a.f,[a.a.c("wf","loading")]);K(a,"loading")}function L(a){if(a.g){var b=y(a.f,a.a.c("wf","active")),c=[],d=[a.a.c("wf","loading")];b||c.push(a.a.c("wf","inactive"));w(a.f,c,d)}K(a,"inactive")}function K(a,b,c){if(a.j&&a.h[b])if(c)a.h[b](c.c,J(c));else a.h[b]()};function ja(){this.c={}}function ka(a,b,c){var d=[],e;for(e in b)if(b.hasOwnProperty(e)){var f=a.c[e];f&&d.push(f(b[e],c))}return d};function M(a,b){this.c=a;this.f=b;this.a=t(this.c,"span",{"aria-hidden":"true"},this.f)}function N(a){u(a.c,"body",a.a)}function O(a){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+I(a.c)+";"+("font-style:"+H(a)+";font-weight:"+(a.f+"00")+";")};function P(a,b,c,d,e,f){this.g=a;this.j=b;this.a=d;this.c=c;this.f=e||3E3;this.h=f||void 0}P.prototype.start=function(){var a=this.c.o.document,b=this,c=q(),d=new Promise(function(d,e){function f(){q()-c>=b.f?e():a.fonts.load(fa(b.a),b.h).then(function(a){1<=a.length?d():setTimeout(f,25)},function(){e()})}f()}),e=null,f=new Promise(function(a,d){e=setTimeout(d,b.f)});Promise.race([f,d]).then(function(){e&&(clearTimeout(e),e=null);b.g(b.a)},function(){b.j(b.a)})};function Q(a,b,c,d,e,f,g){this.v=a;this.B=b;this.c=c;this.a=d;this.s=g||"BESbswy";this.f={};this.w=e||3E3;this.u=f||null;this.m=this.j=this.h=this.g=null;this.g=new M(this.c,this.s);this.h=new M(this.c,this.s);this.j=new M(this.c,this.s);this.m=new M(this.c,this.s);a=new G(this.a.c+",serif",J(this.a));a=O(a);this.g.a.style.cssText=a;a=new G(this.a.c+",sans-serif",J(this.a));a=O(a);this.h.a.style.cssText=a;a=new G("serif",J(this.a));a=O(a);this.j.a.style.cssText=a;a=new G("sans-serif",J(this.a));a=
O(a);this.m.a.style.cssText=a;N(this.g);N(this.h);N(this.j);N(this.m)}var R={D:"serif",C:"sans-serif"},S=null;function T(){if(null===S){var a=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);S=!!a&&(536>parseInt(a[1],10)||536===parseInt(a[1],10)&&11>=parseInt(a[2],10))}return S}Q.prototype.start=function(){this.f.serif=this.j.a.offsetWidth;this.f["sans-serif"]=this.m.a.offsetWidth;this.A=q();U(this)};
function la(a,b,c){for(var d in R)if(R.hasOwnProperty(d)&&b===a.f[R[d]]&&c===a.f[R[d]])return!0;return!1}function U(a){var b=a.g.a.offsetWidth,c=a.h.a.offsetWidth,d;(d=b===a.f.serif&&c===a.f["sans-serif"])||(d=T()&&la(a,b,c));d?q()-a.A>=a.w?T()&&la(a,b,c)&&(null===a.u||a.u.hasOwnProperty(a.a.c))?V(a,a.v):V(a,a.B):ma(a):V(a,a.v)}function ma(a){setTimeout(p(function(){U(this)},a),50)}function V(a,b){setTimeout(p(function(){v(this.g.a);v(this.h.a);v(this.j.a);v(this.m.a);b(this.a)},a),0)};function W(a,b,c){this.c=a;this.a=b;this.f=0;this.m=this.j=!1;this.s=c}var X=null;W.prototype.g=function(a){var b=this.a;b.g&&w(b.f,[b.a.c("wf",a.c,J(a).toString(),"active")],[b.a.c("wf",a.c,J(a).toString(),"loading"),b.a.c("wf",a.c,J(a).toString(),"inactive")]);K(b,"fontactive",a);this.m=!0;na(this)};
W.prototype.h=function(a){var b=this.a;if(b.g){var c=y(b.f,b.a.c("wf",a.c,J(a).toString(),"active")),d=[],e=[b.a.c("wf",a.c,J(a).toString(),"loading")];c||d.push(b.a.c("wf",a.c,J(a).toString(),"inactive"));w(b.f,d,e)}K(b,"fontinactive",a);na(this)};function na(a){0==--a.f&&a.j&&(a.m?(a=a.a,a.g&&w(a.f,[a.a.c("wf","active")],[a.a.c("wf","loading"),a.a.c("wf","inactive")]),K(a,"active")):L(a.a))};function oa(a){this.j=a;this.a=new ja;this.h=0;this.f=this.g=!0}oa.prototype.load=function(a){this.c=new ca(this.j,a.context||this.j);this.g=!1!==a.events;this.f=!1!==a.classes;pa(this,new ha(this.c,a),a)};
function qa(a,b,c,d,e){var f=0==--a.h;(a.f||a.g)&&setTimeout(function(){var a=e||null,m=d||null||{};if(0===c.length&&f)L(b.a);else{b.f+=c.length;f&&(b.j=f);var h,l=[];for(h=0;h<c.length;h++){var k=c[h],n=m[k.c],r=b.a,x=k;r.g&&w(r.f,[r.a.c("wf",x.c,J(x).toString(),"loading")]);K(r,"fontloading",x);r=null;if(null===X)if(window.FontFace){var x=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent),xa=/OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent)&&/Apple/.exec(window.navigator.vendor);
X=x?42<parseInt(x[1],10):xa?!1:!0}else X=!1;X?r=new P(p(b.g,b),p(b.h,b),b.c,k,b.s,n):r=new Q(p(b.g,b),p(b.h,b),b.c,k,b.s,a,n);l.push(r)}for(h=0;h<l.length;h++)l[h].start()}},0)}function pa(a,b,c){var d=[],e=c.timeout;ia(b);var d=ka(a.a,c,a.c),f=new W(a.c,b,e);a.h=d.length;b=0;for(c=d.length;b<c;b++)d[b].load(function(b,d,c){qa(a,f,b,d,c)})};function ra(a,b){this.c=a;this.a=b}
ra.prototype.load=function(a){function b(){if(f["__mti_fntLst"+d]){var c=f["__mti_fntLst"+d](),e=[],h;if(c)for(var l=0;l<c.length;l++){var k=c[l].fontfamily;void 0!=c[l].fontStyle&&void 0!=c[l].fontWeight?(h=c[l].fontStyle+c[l].fontWeight,e.push(new G(k,h))):e.push(new G(k))}a(e)}else setTimeout(function(){b()},50)}var c=this,d=c.a.projectId,e=c.a.version;if(d){var f=c.c.o;A(this.c,(c.a.api||"https://fast.fonts.net/jsapi")+"/"+d+".js"+(e?"?v="+e:""),function(e){e?a([]):(f["__MonotypeConfiguration__"+
d]=function(){return c.a},b())}).id="__MonotypeAPIScript__"+d}else a([])};function sa(a,b){this.c=a;this.a=b}sa.prototype.load=function(a){var b,c,d=this.a.urls||[],e=this.a.families||[],f=this.a.testStrings||{},g=new B;b=0;for(c=d.length;b<c;b++)z(this.c,d[b],C(g));var m=[];b=0;for(c=e.length;b<c;b++)if(d=e[b].split(":"),d[1])for(var h=d[1].split(","),l=0;l<h.length;l+=1)m.push(new G(d[0],h[l]));else m.push(new G(d[0]));E(g,function(){a(m,f)})};function ta(a,b){a?this.c=a:this.c=ua;this.a=[];this.f=[];this.g=b||""}var ua="https://fonts.googleapis.com/css";function va(a,b){for(var c=b.length,d=0;d<c;d++){var e=b[d].split(":");3==e.length&&a.f.push(e.pop());var f="";2==e.length&&""!=e[1]&&(f=":");a.a.push(e.join(f))}}
function wa(a){if(0==a.a.length)throw Error("No fonts to load!");if(-1!=a.c.indexOf("kit="))return a.c;for(var b=a.a.length,c=[],d=0;d<b;d++)c.push(a.a[d].replace(/ /g,"+"));b=a.c+"?family="+c.join("%7C");0<a.f.length&&(b+="&subset="+a.f.join(","));0<a.g.length&&(b+="&text="+encodeURIComponent(a.g));return b};function ya(a){this.f=a;this.a=[];this.c={}}
var za={latin:"BESbswy","latin-ext":"\u00e7\u00f6\u00fc\u011f\u015f",cyrillic:"\u0439\u044f\u0416",greek:"\u03b1\u03b2\u03a3",khmer:"\u1780\u1781\u1782",Hanuman:"\u1780\u1781\u1782"},Aa={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},Ba={i:"i",italic:"i",n:"n",normal:"n"},
Ca=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;
function Da(a){for(var b=a.f.length,c=0;c<b;c++){var d=a.f[c].split(":"),e=d[0].replace(/\+/g," "),f=["n4"];if(2<=d.length){var g;var m=d[1];g=[];if(m)for(var m=m.split(","),h=m.length,l=0;l<h;l++){var k;k=m[l];if(k.match(/^[\w-]+$/)){var n=Ca.exec(k.toLowerCase());if(null==n)k="";else{k=n[2];k=null==k||""==k?"n":Ba[k];n=n[1];if(null==n||""==n)n="4";else var r=Aa[n],n=r?r:isNaN(n)?"4":n.substr(0,1);k=[k,n].join("")}}else k="";k&&g.push(k)}0<g.length&&(f=g);3==d.length&&(d=d[2],g=[],d=d?d.split(","):
g,0<d.length&&(d=za[d[0]])&&(a.c[e]=d))}a.c[e]||(d=za[e])&&(a.c[e]=d);for(d=0;d<f.length;d+=1)a.a.push(new G(e,f[d]))}};function Ea(a,b){this.c=a;this.a=b}var Fa={Arimo:!0,Cousine:!0,Tinos:!0};Ea.prototype.load=function(a){var b=new B,c=this.c,d=new ta(this.a.api,this.a.text),e=this.a.families;va(d,e);var f=new ya(e);Da(f);z(c,wa(d),C(b));E(b,function(){a(f.a,f.c,Fa)})};function Ga(a,b){this.c=a;this.a=b}Ga.prototype.load=function(a){var b=this.a.id,c=this.c.o;b?A(this.c,(this.a.api||"https://use.typekit.net")+"/"+b+".js",function(b){if(b)a([]);else if(c.Typekit&&c.Typekit.config&&c.Typekit.config.fn){b=c.Typekit.config.fn;for(var e=[],f=0;f<b.length;f+=2)for(var g=b[f],m=b[f+1],h=0;h<m.length;h++)e.push(new G(g,m[h]));try{c.Typekit.load({events:!1,classes:!1,async:!0})}catch(l){}a(e)}},2E3):a([])};function Ha(a,b){this.c=a;this.f=b;this.a=[]}Ha.prototype.load=function(a){var b=this.f.id,c=this.c.o,d=this;b?(c.__webfontfontdeckmodule__||(c.__webfontfontdeckmodule__={}),c.__webfontfontdeckmodule__[b]=function(b,c){for(var g=0,m=c.fonts.length;g<m;++g){var h=c.fonts[g];d.a.push(new G(h.name,ga("font-weight:"+h.weight+";font-style:"+h.style)))}a(d.a)},A(this.c,(this.f.api||"https://f.fontdeck.com/s/css/js/")+ea(this.c)+"/"+b+".js",function(b){b&&a([])})):a([])};var Y=new oa(window);Y.a.c.custom=function(a,b){return new sa(b,a)};Y.a.c.fontdeck=function(a,b){return new Ha(b,a)};Y.a.c.monotype=function(a,b){return new ra(b,a)};Y.a.c.typekit=function(a,b){return new Ga(b,a)};Y.a.c.google=function(a,b){return new Ea(b,a)};var Z={load:p(Y.load,Y)}; true?!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(){return Z}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):"undefined"!==typeof module&&module.exports?module.exports=Z:(window.WebFont=Z,window.WebFontConfig&&Y.load(window.WebFontConfig));}());


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Button = __webpack_require__(8);

var _Button2 = _interopRequireDefault(_Button);

var _TruncatedList = __webpack_require__(11);

var _TruncatedList2 = _interopRequireDefault(_TruncatedList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cmz = __webpack_require__(1);

var cardTheme = {
  item: cmz.named('AutoUI_ui_ApplicantGrid-11', /*cmz|*/'\n    display: block\n    margin: 0 0 6px\n  ' /*|cmz*/),

  more: cmz.named('AutoUI_ui_ApplicantGrid-16', /*cmz|*/'\n    & button {\n      margin: 10px\n      width: calc(100% - 20px)\n    }\n  ' /*|cmz*/)
};

var tabularTheme = {}; // TODO: https://zube.io/x-team/xp-formerly-auto/c/1638

var ApplicantGrid = function (_PureComponent) {
  _inherits(ApplicantGrid, _PureComponent);

  function ApplicantGrid() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ApplicantGrid);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ApplicantGrid.__proto__ || Object.getPrototypeOf(ApplicantGrid)).call.apply(_ref, [this].concat(args))), _this), _this.handleViewMore = function (showMore) {
      var onViewMore = _this.props.onViewMore;

      onViewMore && onViewMore();
      showMore();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ApplicantGrid, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          items = _props.items,
          mode = _props.mode,
          visible = _props.visible,
          increment = _props.increment,
          isFetching = _props.isFetching,
          hasMore = _props.hasMore;

      var cx = mode === 'card' ? cardTheme : tabularTheme;

      return items ? _react2.default.createElement(_TruncatedList2.default, {
        items: items,
        visible: visible,
        increment: increment,
        itemClass: cx.item,
        isFetching: isFetching,
        hasMore: hasMore,
        viewMore: function viewMore(amount, action, isFetching) {
          return _react2.default.createElement(
            'li',
            { className: cx.more },
            _react2.default.createElement(
              _Button2.default,
              {
                block: true,
                outlined: true,
                disabled: isFetching,
                onClick: function onClick() {
                  return _this2.handleViewMore(action);
                }
              },
              'View more'
            )
          );
        }
      }) : null;
    }
  }]);

  return ApplicantGrid;
}(_react.PureComponent);

ApplicantGrid.defaultProps = {
  items: [],
  mode: 'card',
  visible: 50,
  increment: 50
};
exports.default = ApplicantGrid;

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _typo = __webpack_require__(4);

var _typo2 = _interopRequireDefault(_typo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cmz = __webpack_require__(1);

var option = cmz.named('AutoUI_forms_ApplicantListFilter-9', /*cmz|*/'\n  display: inline-block\n  margin: 5px\n  padding: 5px\n' /*|cmz*/);

var optionContainer = cmz.named('AutoUI_forms_ApplicantListFilter-15', _typo2.default.baseText, /*cmz|*/'\n  text-align: right\n' /*|cmz*/);

var label = cmz.named('AutoUI_forms_ApplicantListFilter-21', /*cmz|*/'\n  text-transform: capitalize\n' /*|cmz*/);

var ApplicantListFilter = function (_PureComponent) {
  _inherits(ApplicantListFilter, _PureComponent);

  function ApplicantListFilter() {
    _classCallCheck(this, ApplicantListFilter);

    return _possibleConstructorReturn(this, (ApplicantListFilter.__proto__ || Object.getPrototypeOf(ApplicantListFilter)).apply(this, arguments));
  }

  _createClass(ApplicantListFilter, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var handleCheck = this.props.handleCheck;

      var types = ['pending', 'accepted', 'excluded'];

      return _react2.default.createElement(
        'form',
        { className: optionContainer },
        types.map(function (name) {
          return _react2.default.createElement(
            'div',
            { key: name, className: option },
            _react2.default.createElement(
              'label',
              null,
              _react2.default.createElement('input', { type: 'checkbox', name: name, onChange: handleCheck }),
              _react2.default.createElement(
                'span',
                { className: label },
                name,
                ' (',
                _this2.props[name],
                ')'
              )
            )
          );
        })
      );
    }
  }]);

  return ApplicantListFilter;
}(_react.PureComponent);

exports.default = ApplicantListFilter;

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _elem = __webpack_require__(3);

var _elem2 = _interopRequireDefault(_elem);

var _HeaderBar = __webpack_require__(23);

var _HeaderBar2 = _interopRequireDefault(_HeaderBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cmz = __webpack_require__(1);

var Root = _elem2.default.div();

var Content = _elem2.default.div(cmz.named('AutoUI_ui_ApplicantScreen-15', /*cmz|*/'\n  max-width: 1280px\n  margin: 93px auto 0\n' /*|cmz*/));

var ApplicantScreen = function (_PureComponent) {
  _inherits(ApplicantScreen, _PureComponent);

  function ApplicantScreen() {
    _classCallCheck(this, ApplicantScreen);

    return _possibleConstructorReturn(this, (ApplicantScreen.__proto__ || Object.getPrototypeOf(ApplicantScreen)).apply(this, arguments));
  }

  _createClass(ApplicantScreen, [{
    key: 'render',
    value: function render() {
      return Root(_react2.default.createElement(_HeaderBar2.default, null), Content(this.props.children));
    }
  }]);

  return ApplicantScreen;
}(_react.PureComponent);

exports.default = ApplicantScreen;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Button = __webpack_require__(8);

var _Button2 = _interopRequireDefault(_Button);

var _SvgIcon = __webpack_require__(5);

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

var _theme = __webpack_require__(2);

var _theme2 = _interopRequireDefault(_theme);

var _typo = __webpack_require__(4);

var _typo2 = _interopRequireDefault(_typo);

var _elem = __webpack_require__(3);

var _elem2 = _interopRequireDefault(_elem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
/* global HTMLInputElement */

var cmz = __webpack_require__(1);

var Root = _elem2.default.div();

var FilesList = _elem2.default.div(cmz.named('AutoUI_ui_AttachFiles-34', /*cmz|*/'\n  margin-top: 30px\n' /*|cmz*/));

var FileItem = _elem2.default.div(cmz.named('AutoUI_ui_AttachFiles-38', '\n  position: relative\n  display: flex\n  align-items: start\n  height: 20px\n  margin-bottom: 20px\n  border-bottom: 2px solid ' + _theme2.default.baseSilver + '\n'));

var FileName = _elem2.default.a(cmz.named('AutoUI_ui_AttachFiles-47', _typo2.default.baseText, '\n    & {\n      width: 100%\n      font-size: 16px\n      line-height: 1\n      text-align: left\n      text-decoration: none\n    }\n\n    &:hover {\n      color: ' + _theme2.default.baseRed + '\n    }\n  '));

var FileAction = _elem2.default.div(cmz.named('AutoUI_ui_AttachFiles-64', /*cmz|*/'\n  cursor: pointer\n  line-height: normal\n' /*|cmz*/));

var FileProgress = _elem2.default.div(cmz.named('AutoUI_ui_AttachFiles-69', '\n  position: absolute\n  bottom: -2px\n  display: block\n  height: 2px\n  width: 0\n  background-color: ' + _theme2.default.baseRed + '\n  transition: width 0.5s\n'));

var ButtonLabel = _elem2.default.span(cmz.named('AutoUI_ui_AttachFiles-79', /*cmz|*/'\n  padding: 0 20px\n' /*|cmz*/));

var HiddenInput = _elem2.default.input(cmz.named('AutoUI_ui_AttachFiles-83', /*cmz|*/'\n  width: 0.1px\n  height: 0.1px\n  opacity: 0\n  overflow: hidden\n  position: absolute\n  zIndex: -1\n' /*|cmz*/));

var AttachFiles = function (_PureComponent) {
  _inherits(AttachFiles, _PureComponent);

  function AttachFiles() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AttachFiles);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AttachFiles.__proto__ || Object.getPrototypeOf(AttachFiles)).call.apply(_ref, [this].concat(args))), _this), _this.triggerFileSelection = function () {
      _this.fileInput.click();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AttachFiles, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          files = _props.files,
          acceptedTypes = _props.acceptedTypes,
          onCancel = _props.onCancel,
          onDelete = _props.onDelete,
          onFileUpload = _props.onFileUpload;


      var renderButton = function renderButton(file) {
        if (!file.progress || file.progress === 100) {
          return FileAction({
            onClick: function onClick() {
              return onDelete(file.id || file.filename);
            },
            title: 'Delete "' + file.filename + '" file'
          }, _react2.default.createElement(_SvgIcon2.default, { icon: 'trashcan', color: 'grayscale' }));
        } else {
          return FileAction({
            onClick: function onClick() {
              return onCancel(file.id || file.filename);
            },
            title: 'Cancel "' + file.filename + '" upload'
          }, _react2.default.createElement(_SvgIcon2.default, { icon: 'x', color: 'grayscale' }));
        }
      };

      var renderProgress = function renderProgress() {
        var progress = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

        if (progress !== 100) {
          return FileProgress({
            style: {
              width: progress + '%'
            }
          });
        }
      };

      var renderFiles = function renderFiles(files) {
        return files.length > 0 && FilesList(files.map(function (file) {
          return FileItem({
            key: file.id || file.filename,
            style: {
              borderBottomColor: file.progress !== 100 ? _theme2.default.baseSilver : 'transparent'
            }
          }, FileName({ href: file.path, target: '_blank' }, file.filename), renderButton(file), renderProgress(file.progress));
        }));
      };

      return Root(HiddenInput({
        type: 'file',
        accept: acceptedTypes,
        onChange: onFileUpload,
        ref: function ref(node) {
          _this2.fileInput = node;
        }
      }), _react2.default.createElement(
        _Button2.default,
        { outlined: true, onClick: this.triggerFileSelection },
        ButtonLabel('Attach a file')
      ), renderFiles(files));
    }
  }]);

  return AttachFiles;
}(_react.PureComponent);

AttachFiles.defaultProps = {
  files: [],
  onCancel: function onCancel() {},
  onDelete: function onDelete() {},
  onFileUpload: function onFileUpload() {}
};
exports.default = AttachFiles;

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _recompose = __webpack_require__(58);

var _elem = __webpack_require__(3);

var _elem2 = _interopRequireDefault(_elem);

var _theme = __webpack_require__(2);

var _theme2 = _interopRequireDefault(_theme);

var _typo = __webpack_require__(4);

var _typo2 = _interopRequireDefault(_typo);

var _SvgIcon = __webpack_require__(5);

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cmz = __webpack_require__(1);

var cx = {
  twoColSection: cmz.named('AutoUI_ui_CollapsibleSection-29', /*cmz|*/'display: flex' /*|cmz*/),
  clickable: cmz.named('AutoUI_ui_CollapsibleSection-30', /*cmz|*/'cursor: pointer' /*|cmz*/),
  small: cmz.named('AutoUI_ui_CollapsibleSection-31', /*cmz|*/'display: inline-block' /*|cmz*/)
};

var Root = _elem2.default.section(cmz.named('AutoUI_ui_CollapsibleSection-34', _typo2.default.baseText, '\n  & {\n    margin: 0\n    padding: 32px 16px\n    border-top: 1px solid ' + _theme2.default.lineSilver4 + '\n    position: relative\n  }\n\n  &.' + cx.small + ' {\n    padding: 0\n    border: none\n    flex: 1\n  }\n\n  &:first-child {\n    border-top: 1px solid transparent\n  }\n'), { 'data-test': 'portfolioItem' });

var Header = _elem2.default.h3(cmz.named('AutoUI_ui_CollapsibleSection-54', '\n  & {\n    margin: 0\n    padding-right: 24px\n  }\n\n  .' + cx.twoColSection + ' & {\n    width: 200px\n  }\n\n  &:hover {\n    color: ' + _theme2.default.baseDarker + '\n  }\n'));

var IconWrapper = _elem2.default.div(cmz.named('AutoUI_ui_CollapsibleSection-69', '\n  & {\n    position: absolute\n    top: 34px\n    right: 10px\n    cursor: pointer\n    width: 12px\n    height: 12px\n    display: block\n  }\n\n  .' + cx.small + ' & {\n    top: 0\n  }\n\n  & > svg {\n    width: 12px\n    height: 12px\n    display: block\n  }\n'));

var Content = _elem2.default.div(cmz.named('AutoUI_ui_CollapsibleSection-91', '\n  .' + cx.twoColSection + ' & {\n    width: calc(100% - 200px)\n  }\n\n  & p {\n    line-height: 36px\n  }\n\n  & > :only-child,\n  & > :nth-child(2) {\n    margin-top: 16px\n  }\n\n  .' + cx.twoColSection + ' & > :only-child,\n  .' + cx.small + ' & > :only-child,\n  .' + cx.clickable + ' & > :only-child {\n    margin-top: 0\n  }\n'));

var Visible = _elem2.default.div(cmz.named('AutoUI_ui_CollapsibleSection-112', '\n  & {\n    padding-top: 8px\n  }\n\n  .' + cx.twoColSection + ' & {\n    padding: 0 80px 0 0\n  }\n\n  & > :first-child {\n    margin-top: 0\n  }\n\n  & > :last-child {\n    margin-bottom: 0\n  }\n'));

var Children = _elem2.default.div(cmz.named('AutoUI_ui_CollapsibleSection-130', '\n  & {\n    padding: 0 80px 0 32px\n  }\n\n  .' + cx.twoColSection + ' & {\n    padding: 0 80px 0 0\n  }\n\n  & > :first-child {\n    margin-top: 0\n  }\n'));

var CollapsibleSection = function (_PureComponent) {
  _inherits(CollapsibleSection, _PureComponent);

  function CollapsibleSection() {
    _classCallCheck(this, CollapsibleSection);

    return _possibleConstructorReturn(this, (CollapsibleSection.__proto__ || Object.getPrototypeOf(CollapsibleSection)).apply(this, arguments));
  }

  _createClass(CollapsibleSection, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          title = _props.title,
          isTwoColumns = _props.isTwoColumns,
          toggleVisible = _props.toggleVisible,
          isCollapsed = _props.isCollapsed,
          handleToggleCollapse = _props.handleToggleCollapse,
          visible = _props.visible,
          small = _props.small,
          children = _props.children;


      var ContentBlock = (visible || children) && Content(visible && (isCollapsed || !isCollapsed && !toggleVisible) && Visible(visible), !isCollapsed && Children(children));

      var IconBlock = children && IconWrapper({
        onClick: function onClick() {
          return handleToggleCollapse(!isCollapsed);
        }
      }, _react2.default.createElement(_SvgIcon2.default, { icon: isCollapsed ? 'plus' : 'minus' }));

      return title !== '' && Root({
        onClick: function onClick() {
          return children && isCollapsed && handleToggleCollapse(false);
        },
        className: [isTwoColumns && cx.twoColSection, small && cx.small, isCollapsed && children && cx.clickable]
      }, Header({
        onClick: function onClick() {
          return children && handleToggleCollapse(!isCollapsed);
        },
        className: [children && cx.clickable, small ? _typo2.default.badgeHeading : _typo2.default.sectionHeading]
      }, title), IconBlock, ContentBlock);
    }
  }]);

  return CollapsibleSection;
}(_react.PureComponent);

CollapsibleSection.defaultProps = {
  title: '',
  isTwoColumns: false,
  toggleVisible: false,
  isCollapsed: true,
  handleToggleCollapse: function handleToggleCollapse() {},
  visible: null,
  small: false,
  children: null
};
exports.default = (0, _recompose.compose)((0, _recompose.withState)('isCollapsed', 'handleToggleCollapse', true), (0, _recompose.onlyUpdateForKeys)(['isCollapsed', 'visible', 'children']))(CollapsibleSection);

/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapProps", function() { return mapProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withProps", function() { return withProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withPropsOnChange", function() { return withPropsOnChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withHandlers", function() { return withHandlers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultProps", function() { return defaultProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renameProp", function() { return renameProp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renameProps", function() { return renameProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flattenProp", function() { return flattenProp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withState", function() { return withState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withStateHandlers", function() { return withStateHandlers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withReducer", function() { return withReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "branch", function() { return branch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderComponent", function() { return renderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderNothing", function() { return renderNothing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shouldUpdate", function() { return shouldUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pure", function() { return pure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onlyUpdateForKeys", function() { return onlyUpdateForKeys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onlyUpdateForPropTypes", function() { return onlyUpdateForPropTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withContext", function() { return withContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getContext", function() { return getContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lifecycle", function() { return lifecycle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toClass", function() { return toClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setStatic", function() { return setStatic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setPropTypes", function() { return setPropTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setDisplayName", function() { return setDisplayName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return compose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDisplayName", function() { return getDisplayName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapDisplayName", function() { return wrapDisplayName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isClassComponent", function() { return isClassComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSink", function() { return createSink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "componentFromProp", function() { return componentFromProp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nest", function() { return nest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hoistStatics", function() { return hoistStatics; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "componentFromStream", function() { return componentFromStream; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "componentFromStreamWithConfig", function() { return componentFromStreamWithConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapPropsStream", function() { return mapPropsStream; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapPropsStreamWithConfig", function() { return mapPropsStreamWithConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createEventHandler", function() { return createEventHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createEventHandlerWithConfig", function() { return createEventHandlerWithConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setObservableConfig", function() { return configureObservable; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_fbjs_lib_shallowEqual__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_fbjs_lib_shallowEqual___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_fbjs_lib_shallowEqual__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hoist_non_react_statics__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hoist_non_react_statics___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_hoist_non_react_statics__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_change_emitter__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_change_emitter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_change_emitter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_symbol_observable__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_symbol_observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_symbol_observable__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "shallowEqual", function() { return __WEBPACK_IMPORTED_MODULE_1_fbjs_lib_shallowEqual___default.a; });






var setStatic = function setStatic(key, value) {
  return function (BaseComponent) {
    /* eslint-disable no-param-reassign */
    BaseComponent[key] = value;
    /* eslint-enable no-param-reassign */
    return BaseComponent;
  };
};

var setDisplayName = function setDisplayName(displayName) {
  return setStatic('displayName', displayName);
};

var getDisplayName = function getDisplayName(Component$$1) {
  if (typeof Component$$1 === 'string') {
    return Component$$1;
  }

  if (!Component$$1) {
    return undefined;
  }

  return Component$$1.displayName || Component$$1.name || 'Component';
};

var wrapDisplayName = function wrapDisplayName(BaseComponent, hocName) {
  return hocName + '(' + getDisplayName(BaseComponent) + ')';
};

var mapProps = function mapProps(propsMapper) {
  return function (BaseComponent) {
    var factory = Object(__WEBPACK_IMPORTED_MODULE_0_react__["createFactory"])(BaseComponent);
    var MapProps = function MapProps(props) {
      return factory(propsMapper(props));
    };
    if (process.env.NODE_ENV !== 'production') {
      return setDisplayName(wrapDisplayName(BaseComponent, 'mapProps'))(MapProps);
    }
    return MapProps;
  };
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};









var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};



var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};









var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var withProps = function withProps(input) {
  var hoc = mapProps(function (props) {
    return _extends({}, props, typeof input === 'function' ? input(props) : input);
  });
  if (process.env.NODE_ENV !== 'production') {
    return function (BaseComponent) {
      return setDisplayName(wrapDisplayName(BaseComponent, 'withProps'))(hoc(BaseComponent));
    };
  }
  return hoc;
};

var pick = function pick(obj, keys) {
  var result = {};
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (obj.hasOwnProperty(key)) {
      result[key] = obj[key];
    }
  }
  return result;
};

var withPropsOnChange = function withPropsOnChange(shouldMapOrKeys, propsMapper) {
  return function (BaseComponent) {
    var factory = Object(__WEBPACK_IMPORTED_MODULE_0_react__["createFactory"])(BaseComponent);
    var shouldMap = typeof shouldMapOrKeys === 'function' ? shouldMapOrKeys : function (props, nextProps) {
      return !__WEBPACK_IMPORTED_MODULE_1_fbjs_lib_shallowEqual___default()(pick(props, shouldMapOrKeys), pick(nextProps, shouldMapOrKeys));
    };

    var WithPropsOnChange = function (_Component) {
      inherits(WithPropsOnChange, _Component);

      function WithPropsOnChange() {
        var _temp, _this, _ret;

        classCallCheck(this, WithPropsOnChange);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.computedProps = propsMapper(_this.props), _temp), possibleConstructorReturn(_this, _ret);
      }

      WithPropsOnChange.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        if (shouldMap(this.props, nextProps)) {
          this.computedProps = propsMapper(nextProps);
        }
      };

      WithPropsOnChange.prototype.render = function render() {
        return factory(_extends({}, this.props, this.computedProps));
      };

      return WithPropsOnChange;
    }(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

    if (process.env.NODE_ENV !== 'production') {
      return setDisplayName(wrapDisplayName(BaseComponent, 'withPropsOnChange'))(WithPropsOnChange);
    }
    return WithPropsOnChange;
  };
};

var mapValues = function mapValues(obj, func) {
  var result = {};
  /* eslint-disable no-restricted-syntax */
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      result[key] = func(obj[key], key);
    }
  }
  /* eslint-enable no-restricted-syntax */
  return result;
};

/* eslint-disable no-console */
var withHandlers = function withHandlers(handlers) {
  return function (BaseComponent) {
    var factory = Object(__WEBPACK_IMPORTED_MODULE_0_react__["createFactory"])(BaseComponent);

    var WithHandlers = function (_Component) {
      inherits(WithHandlers, _Component);

      function WithHandlers() {
        var _temp, _this, _ret;

        classCallCheck(this, WithHandlers);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), possibleConstructorReturn(_this, _ret);
      }

      WithHandlers.prototype.componentWillReceiveProps = function componentWillReceiveProps() {
        this.cachedHandlers = {};
      };

      WithHandlers.prototype.render = function render() {
        return factory(_extends({}, this.props, this.handlers));
      };

      return WithHandlers;
    }(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

    var _initialiseProps = function _initialiseProps() {
      var _this2 = this;

      this.cachedHandlers = {};
      this.handlers = mapValues(typeof handlers === 'function' ? handlers(this.props) : handlers, function (createHandler, handlerName) {
        return function () {
          var cachedHandler = _this2.cachedHandlers[handlerName];
          if (cachedHandler) {
            return cachedHandler.apply(undefined, arguments);
          }

          var handler = createHandler(_this2.props);
          _this2.cachedHandlers[handlerName] = handler;

          if (process.env.NODE_ENV !== 'production' && typeof handler !== 'function') {
            console.error(
            // eslint-disable-line no-console
            'withHandlers(): Expected a map of higher-order functions. ' + 'Refer to the docs for more info.');
          }

          return handler.apply(undefined, arguments);
        };
      });
    };

    if (process.env.NODE_ENV !== 'production') {
      return setDisplayName(wrapDisplayName(BaseComponent, 'withHandlers'))(WithHandlers);
    }
    return WithHandlers;
  };
};

var defaultProps = function defaultProps(props) {
  return function (BaseComponent) {
    var factory = Object(__WEBPACK_IMPORTED_MODULE_0_react__["createFactory"])(BaseComponent);
    var DefaultProps = function DefaultProps(ownerProps) {
      return factory(ownerProps);
    };
    DefaultProps.defaultProps = props;
    if (process.env.NODE_ENV !== 'production') {
      return setDisplayName(wrapDisplayName(BaseComponent, 'defaultProps'))(DefaultProps);
    }
    return DefaultProps;
  };
};

var omit = function omit(obj, keys) {
  var rest = objectWithoutProperties(obj, []);

  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (rest.hasOwnProperty(key)) {
      delete rest[key];
    }
  }
  return rest;
};

var renameProp = function renameProp(oldName, newName) {
  var hoc = mapProps(function (props) {
    var _babelHelpers$extends;

    return _extends({}, omit(props, [oldName]), (_babelHelpers$extends = {}, _babelHelpers$extends[newName] = props[oldName], _babelHelpers$extends));
  });
  if (process.env.NODE_ENV !== 'production') {
    return function (BaseComponent) {
      return setDisplayName(wrapDisplayName(BaseComponent, 'renameProp'))(hoc(BaseComponent));
    };
  }
  return hoc;
};

var keys = Object.keys;


var mapKeys = function mapKeys(obj, func) {
  return keys(obj).reduce(function (result, key) {
    var val = obj[key];
    /* eslint-disable no-param-reassign */
    result[func(val, key)] = val;
    /* eslint-enable no-param-reassign */
    return result;
  }, {});
};

var renameProps = function renameProps(nameMap) {
  var hoc = mapProps(function (props) {
    return _extends({}, omit(props, keys(nameMap)), mapKeys(pick(props, keys(nameMap)), function (_, oldName) {
      return nameMap[oldName];
    }));
  });
  if (process.env.NODE_ENV !== 'production') {
    return function (BaseComponent) {
      return setDisplayName(wrapDisplayName(BaseComponent, 'renameProps'))(hoc(BaseComponent));
    };
  }
  return hoc;
};

var flattenProp = function flattenProp(propName) {
  return function (BaseComponent) {
    var factory = Object(__WEBPACK_IMPORTED_MODULE_0_react__["createFactory"])(BaseComponent);
    var FlattenProp = function FlattenProp(props) {
      return factory(_extends({}, props, props[propName]));
    };

    if (process.env.NODE_ENV !== 'production') {
      return setDisplayName(wrapDisplayName(BaseComponent, 'flattenProp'))(FlattenProp);
    }
    return FlattenProp;
  };
};

var withState = function withState(stateName, stateUpdaterName, initialState) {
  return function (BaseComponent) {
    var factory = Object(__WEBPACK_IMPORTED_MODULE_0_react__["createFactory"])(BaseComponent);

    var WithState = function (_Component) {
      inherits(WithState, _Component);

      function WithState() {
        var _temp, _this, _ret;

        classCallCheck(this, WithState);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
          stateValue: typeof initialState === 'function' ? initialState(_this.props) : initialState
        }, _this.updateStateValue = function (updateFn, callback) {
          return _this.setState(function (_ref) {
            var stateValue = _ref.stateValue;
            return {
              stateValue: typeof updateFn === 'function' ? updateFn(stateValue) : updateFn
            };
          }, callback);
        }, _temp), possibleConstructorReturn(_this, _ret);
      }

      WithState.prototype.render = function render() {
        var _babelHelpers$extends;

        return factory(_extends({}, this.props, (_babelHelpers$extends = {}, _babelHelpers$extends[stateName] = this.state.stateValue, _babelHelpers$extends[stateUpdaterName] = this.updateStateValue, _babelHelpers$extends)));
      };

      return WithState;
    }(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

    if (process.env.NODE_ENV !== 'production') {
      return setDisplayName(wrapDisplayName(BaseComponent, 'withState'))(WithState);
    }
    return WithState;
  };
};

var withStateHandlers = function withStateHandlers(initialState, stateUpdaters) {
  return function (BaseComponent) {
    var factory = Object(__WEBPACK_IMPORTED_MODULE_0_react__["createFactory"])(BaseComponent);

    var WithStateHandlers = function (_Component) {
      inherits(WithStateHandlers, _Component);

      function WithStateHandlers() {
        var _temp, _this, _ret;

        classCallCheck(this, WithStateHandlers);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), possibleConstructorReturn(_this, _ret);
      }

      WithStateHandlers.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
        var propsChanged = nextProps !== this.props;
        // the idea is to skip render if stateUpdater handler return undefined
        // this allows to create no state update handlers with access to state and props
        var stateChanged = !__WEBPACK_IMPORTED_MODULE_1_fbjs_lib_shallowEqual___default()(nextState, this.state);
        return propsChanged || stateChanged;
      };

      WithStateHandlers.prototype.render = function render() {
        return factory(_extends({}, this.props, this.state, this.stateUpdaters));
      };

      return WithStateHandlers;
    }(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

    var _initialiseProps = function _initialiseProps() {
      var _this2 = this;

      this.state = typeof initialState === 'function' ? initialState(this.props) : initialState;
      this.stateUpdaters = mapValues(stateUpdaters, function (handler) {
        return function (mayBeEvent) {
          for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            args[_key2 - 1] = arguments[_key2];
          }

          // Having that functional form of setState can be called async
          // we need to persist SyntheticEvent
          if (mayBeEvent && typeof mayBeEvent.persist === 'function') {
            mayBeEvent.persist();
          }

          _this2.setState(function (state, props) {
            return handler(state, props).apply(undefined, [mayBeEvent].concat(args));
          });
        };
      });
    };

    if (process.env.NODE_ENV !== 'production') {
      return setDisplayName(wrapDisplayName(BaseComponent, 'withStateHandlers'))(WithStateHandlers);
    }
    return WithStateHandlers;
  };
};

var withReducer = function withReducer(stateName, dispatchName, reducer, initialState) {
  return function (BaseComponent) {
    var factory = Object(__WEBPACK_IMPORTED_MODULE_0_react__["createFactory"])(BaseComponent);

    var WithReducer = function (_Component) {
      inherits(WithReducer, _Component);

      function WithReducer() {
        var _temp, _this, _ret;

        classCallCheck(this, WithReducer);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
          stateValue: _this.initializeStateValue()
        }, _this.dispatch = function (action) {
          return _this.setState(function (_ref) {
            var stateValue = _ref.stateValue;
            return {
              stateValue: reducer(stateValue, action)
            };
          });
        }, _temp), possibleConstructorReturn(_this, _ret);
      }

      WithReducer.prototype.initializeStateValue = function initializeStateValue() {
        if (initialState !== undefined) {
          return typeof initialState === 'function' ? initialState(this.props) : initialState;
        }
        return reducer(undefined, { type: '@@recompose/INIT' });
      };

      WithReducer.prototype.render = function render() {
        var _babelHelpers$extends;

        return factory(_extends({}, this.props, (_babelHelpers$extends = {}, _babelHelpers$extends[stateName] = this.state.stateValue, _babelHelpers$extends[dispatchName] = this.dispatch, _babelHelpers$extends)));
      };

      return WithReducer;
    }(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

    if (process.env.NODE_ENV !== 'production') {
      return setDisplayName(wrapDisplayName(BaseComponent, 'withReducer'))(WithReducer);
    }
    return WithReducer;
  };
};

var identity = function identity(Component$$1) {
  return Component$$1;
};

var branch = function branch(test, left) {
  var right = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : identity;
  return function (BaseComponent) {
    var leftFactory = void 0;
    var rightFactory = void 0;
    var Branch = function Branch(props) {
      if (test(props)) {
        leftFactory = leftFactory || Object(__WEBPACK_IMPORTED_MODULE_0_react__["createFactory"])(left(BaseComponent));
        return leftFactory(props);
      }
      rightFactory = rightFactory || Object(__WEBPACK_IMPORTED_MODULE_0_react__["createFactory"])(right(BaseComponent));
      return rightFactory(props);
    };

    if (process.env.NODE_ENV !== 'production') {
      return setDisplayName(wrapDisplayName(BaseComponent, 'branch'))(Branch);
    }
    return Branch;
  };
};

var renderComponent = function renderComponent(Component$$1) {
  return function (_) {
    var factory = Object(__WEBPACK_IMPORTED_MODULE_0_react__["createFactory"])(Component$$1);
    var RenderComponent = function RenderComponent(props) {
      return factory(props);
    };
    if (process.env.NODE_ENV !== 'production') {
      RenderComponent.displayName = wrapDisplayName(Component$$1, 'renderComponent');
    }
    return RenderComponent;
  };
};

var Nothing = function (_Component) {
  inherits(Nothing, _Component);

  function Nothing() {
    classCallCheck(this, Nothing);
    return possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  Nothing.prototype.render = function render() {
    return null;
  };

  return Nothing;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var renderNothing = function renderNothing(_) {
  return Nothing;
};

var shouldUpdate = function shouldUpdate(test) {
  return function (BaseComponent) {
    var factory = Object(__WEBPACK_IMPORTED_MODULE_0_react__["createFactory"])(BaseComponent);

    var ShouldUpdate = function (_Component) {
      inherits(ShouldUpdate, _Component);

      function ShouldUpdate() {
        classCallCheck(this, ShouldUpdate);
        return possibleConstructorReturn(this, _Component.apply(this, arguments));
      }

      ShouldUpdate.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
        return test(this.props, nextProps);
      };

      ShouldUpdate.prototype.render = function render() {
        return factory(this.props);
      };

      return ShouldUpdate;
    }(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

    if (process.env.NODE_ENV !== 'production') {
      return setDisplayName(wrapDisplayName(BaseComponent, 'shouldUpdate'))(ShouldUpdate);
    }
    return ShouldUpdate;
  };
};

var pure = function pure(BaseComponent) {
  var hoc = shouldUpdate(function (props, nextProps) {
    return !__WEBPACK_IMPORTED_MODULE_1_fbjs_lib_shallowEqual___default()(props, nextProps);
  });

  if (process.env.NODE_ENV !== 'production') {
    return setDisplayName(wrapDisplayName(BaseComponent, 'pure'))(hoc(BaseComponent));
  }

  return hoc(BaseComponent);
};

var onlyUpdateForKeys = function onlyUpdateForKeys(propKeys) {
  var hoc = shouldUpdate(function (props, nextProps) {
    return !__WEBPACK_IMPORTED_MODULE_1_fbjs_lib_shallowEqual___default()(pick(nextProps, propKeys), pick(props, propKeys));
  });

  if (process.env.NODE_ENV !== 'production') {
    return function (BaseComponent) {
      return setDisplayName(wrapDisplayName(BaseComponent, 'onlyUpdateForKeys'))(hoc(BaseComponent));
    };
  }
  return hoc;
};

var onlyUpdateForPropTypes = function onlyUpdateForPropTypes(BaseComponent) {
  var propTypes = BaseComponent.propTypes;

  if (process.env.NODE_ENV !== 'production') {
    if (!propTypes) {
      /* eslint-disable */
      console.error('A component without any `propTypes` was passed to ' + '`onlyUpdateForPropTypes()`. Check the implementation of the ' + ('component with display name "' + getDisplayName(BaseComponent) + '".'));
      /* eslint-enable */
    }
  }

  var propKeys = Object.keys(propTypes || {});
  var OnlyUpdateForPropTypes = onlyUpdateForKeys(propKeys)(BaseComponent);

  if (process.env.NODE_ENV !== 'production') {
    return setDisplayName(wrapDisplayName(BaseComponent, 'onlyUpdateForPropTypes'))(OnlyUpdateForPropTypes);
  }
  return OnlyUpdateForPropTypes;
};

var withContext = function withContext(childContextTypes, getChildContext) {
  return function (BaseComponent) {
    var factory = Object(__WEBPACK_IMPORTED_MODULE_0_react__["createFactory"])(BaseComponent);

    var WithContext = function (_Component) {
      inherits(WithContext, _Component);

      function WithContext() {
        var _temp, _this, _ret;

        classCallCheck(this, WithContext);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.getChildContext = function () {
          return getChildContext(_this.props);
        }, _temp), possibleConstructorReturn(_this, _ret);
      }

      WithContext.prototype.render = function render() {
        return factory(this.props);
      };

      return WithContext;
    }(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

    WithContext.childContextTypes = childContextTypes;

    if (process.env.NODE_ENV !== 'production') {
      return setDisplayName(wrapDisplayName(BaseComponent, 'withContext'))(WithContext);
    }
    return WithContext;
  };
};

var getContext = function getContext(contextTypes) {
  return function (BaseComponent) {
    var factory = Object(__WEBPACK_IMPORTED_MODULE_0_react__["createFactory"])(BaseComponent);
    var GetContext = function GetContext(ownerProps, context) {
      return factory(_extends({}, ownerProps, context));
    };

    GetContext.contextTypes = contextTypes;

    if (process.env.NODE_ENV !== 'production') {
      return setDisplayName(wrapDisplayName(BaseComponent, 'getContext'))(GetContext);
    }
    return GetContext;
  };
};

/* eslint-disable no-console */
var lifecycle = function lifecycle(spec) {
  return function (BaseComponent) {
    var factory = Object(__WEBPACK_IMPORTED_MODULE_0_react__["createFactory"])(BaseComponent);

    if (process.env.NODE_ENV !== 'production' && spec.hasOwnProperty('render')) {
      console.error('lifecycle() does not support the render method; its behavior is to ' + 'pass all props and state to the base component.');
    }

    var Lifecycle = function (_Component) {
      inherits(Lifecycle, _Component);

      function Lifecycle() {
        classCallCheck(this, Lifecycle);
        return possibleConstructorReturn(this, _Component.apply(this, arguments));
      }

      Lifecycle.prototype.render = function render() {
        return factory(_extends({}, this.props, this.state));
      };

      return Lifecycle;
    }(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

    Object.keys(spec).forEach(function (hook) {
      return Lifecycle.prototype[hook] = spec[hook];
    });

    if (process.env.NODE_ENV !== 'production') {
      return setDisplayName(wrapDisplayName(BaseComponent, 'lifecycle'))(Lifecycle);
    }
    return Lifecycle;
  };
};

var isClassComponent = function isClassComponent(Component$$1) {
  return Boolean(Component$$1 && Component$$1.prototype && typeof Component$$1.prototype.render === 'function');
};

var toClass = function toClass(baseComponent) {
  if (isClassComponent(baseComponent)) {
    return baseComponent;
  }

  var ToClass = function (_Component) {
    inherits(ToClass, _Component);

    function ToClass() {
      classCallCheck(this, ToClass);
      return possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    ToClass.prototype.render = function render() {
      if (typeof baseComponent === 'string') {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(baseComponent, this.props);
      }
      return baseComponent(this.props, this.context);
    };

    return ToClass;
  }(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

  ToClass.displayName = getDisplayName(baseComponent);
  ToClass.propTypes = baseComponent.propTypes;
  ToClass.contextTypes = baseComponent.contextTypes;
  ToClass.defaultProps = baseComponent.defaultProps;

  return ToClass;
};

var setPropTypes = function setPropTypes(propTypes) {
  return setStatic('propTypes', propTypes);
};

function compose() {
  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(undefined, arguments));
    };
  });
}

var createSink = function createSink(callback) {
  return function (_Component) {
    inherits(Sink, _Component);

    function Sink() {
      classCallCheck(this, Sink);
      return possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    Sink.prototype.componentWillMount = function componentWillMount() {
      callback(this.props);
    };

    Sink.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      callback(nextProps);
    };

    Sink.prototype.render = function render() {
      return null;
    };

    return Sink;
  }(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);
};

var componentFromProp = function componentFromProp(propName) {
  var Component$$1 = function Component$$1(props) {
    return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(props[propName], omit(props, [propName]));
  };
  Component$$1.displayName = 'componentFromProp(' + propName + ')';
  return Component$$1;
};

var nest = function nest() {
  for (var _len = arguments.length, Components = Array(_len), _key = 0; _key < _len; _key++) {
    Components[_key] = arguments[_key];
  }

  var factories = Components.map(__WEBPACK_IMPORTED_MODULE_0_react__["createFactory"]);
  var Nest = function Nest(_ref) {
    var props = objectWithoutProperties(_ref, []),
        children = _ref.children;
    return factories.reduceRight(function (child, factory) {
      return factory(props, child);
    }, children);
  };

  if (process.env.NODE_ENV !== 'production') {
    var displayNames = Components.map(getDisplayName);
    Nest.displayName = 'nest(' + displayNames.join(', ') + ')';
  }

  return Nest;
};

var hoistStatics = function hoistStatics(higherOrderComponent) {
  return function (BaseComponent) {
    var NewComponent = higherOrderComponent(BaseComponent);
    __WEBPACK_IMPORTED_MODULE_2_hoist_non_react_statics___default()(NewComponent, BaseComponent);
    return NewComponent;
  };
};

var _config = {
  fromESObservable: null,
  toESObservable: null
};

var configureObservable = function configureObservable(c) {
  _config = c;
};

var config = {
  fromESObservable: function fromESObservable(observable) {
    return typeof _config.fromESObservable === 'function' ? _config.fromESObservable(observable) : observable;
  },
  toESObservable: function toESObservable(stream) {
    return typeof _config.toESObservable === 'function' ? _config.toESObservable(stream) : stream;
  }
};

var componentFromStreamWithConfig = function componentFromStreamWithConfig(config$$1) {
  return function (propsToVdom) {
    return function (_Component) {
      inherits(ComponentFromStream, _Component);

      function ComponentFromStream() {
        var _config$fromESObserva;

        var _temp, _this, _ret;

        classCallCheck(this, ComponentFromStream);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = { vdom: null }, _this.propsEmitter = Object(__WEBPACK_IMPORTED_MODULE_3_change_emitter__["createChangeEmitter"])(), _this.props$ = config$$1.fromESObservable((_config$fromESObserva = {
          subscribe: function subscribe(observer) {
            var unsubscribe = _this.propsEmitter.listen(function (props) {
              if (props) {
                observer.next(props);
              } else {
                observer.complete();
              }
            });
            return { unsubscribe: unsubscribe };
          }
        }, _config$fromESObserva[__WEBPACK_IMPORTED_MODULE_4_symbol_observable___default.a] = function () {
          return this;
        }, _config$fromESObserva)), _this.vdom$ = config$$1.toESObservable(propsToVdom(_this.props$)), _temp), possibleConstructorReturn(_this, _ret);
      }

      // Stream of props


      // Stream of vdom


      ComponentFromStream.prototype.componentWillMount = function componentWillMount() {
        var _this2 = this;

        // Subscribe to child prop changes so we know when to re-render
        this.subscription = this.vdom$.subscribe({
          next: function next(vdom) {
            _this2.setState({ vdom: vdom });
          }
        });
        this.propsEmitter.emit(this.props);
      };

      ComponentFromStream.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        // Receive new props from the owner
        this.propsEmitter.emit(nextProps);
      };

      ComponentFromStream.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
        return nextState.vdom !== this.state.vdom;
      };

      ComponentFromStream.prototype.componentWillUnmount = function componentWillUnmount() {
        // Call without arguments to complete stream
        this.propsEmitter.emit();

        // Clean-up subscription before un-mounting
        this.subscription.unsubscribe();
      };

      ComponentFromStream.prototype.render = function render() {
        return this.state.vdom;
      };

      return ComponentFromStream;
    }(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);
  };
};

var componentFromStream = function componentFromStream(propsToVdom) {
  return componentFromStreamWithConfig(config)(propsToVdom);
};

var identity$1 = function identity(t) {
  return t;
};

var mapPropsStreamWithConfig = function mapPropsStreamWithConfig(config$$1) {
  var componentFromStream = componentFromStreamWithConfig({
    fromESObservable: identity$1,
    toESObservable: identity$1
  });
  return function (transform) {
    return function (BaseComponent) {
      var factory = Object(__WEBPACK_IMPORTED_MODULE_0_react__["createFactory"])(BaseComponent);
      var fromESObservable = config$$1.fromESObservable,
          toESObservable = config$$1.toESObservable;

      return componentFromStream(function (props$) {
        var _ref;

        return _ref = {
          subscribe: function subscribe(observer) {
            var subscription = toESObservable(transform(fromESObservable(props$))).subscribe({
              next: function next(childProps) {
                return observer.next(factory(childProps));
              }
            });
            return {
              unsubscribe: function unsubscribe() {
                return subscription.unsubscribe();
              }
            };
          }
        }, _ref[__WEBPACK_IMPORTED_MODULE_4_symbol_observable___default.a] = function () {
          return this;
        }, _ref;
      });
    };
  };
};

var mapPropsStream = function mapPropsStream(transform) {
  var hoc = mapPropsStreamWithConfig(config)(transform);

  if (process.env.NODE_ENV !== 'production') {
    return function (BaseComponent) {
      return setDisplayName(wrapDisplayName(BaseComponent, 'mapPropsStream'))(hoc(BaseComponent));
    };
  }
  return hoc;
};

var createEventHandlerWithConfig = function createEventHandlerWithConfig(config$$1) {
  return function () {
    var _config$fromESObserva;

    var emitter = Object(__WEBPACK_IMPORTED_MODULE_3_change_emitter__["createChangeEmitter"])();
    var stream = config$$1.fromESObservable((_config$fromESObserva = {
      subscribe: function subscribe(observer) {
        var unsubscribe = emitter.listen(function (value) {
          return observer.next(value);
        });
        return { unsubscribe: unsubscribe };
      }
    }, _config$fromESObserva[__WEBPACK_IMPORTED_MODULE_4_symbol_observable___default.a] = function () {
      return this;
    }, _config$fromESObserva));
    return {
      handler: emitter.emit,
      stream: stream
    };
  };
};

var createEventHandler = createEventHandlerWithConfig(config);

// Higher-order component helpers



/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(6)))

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 * 
 */

/*eslint-disable no-self-compare */



var hasOwnProperty = Object.prototype.hasOwnProperty;

/**
 * inlined Object.is polyfill to avoid requiring consumers ship their own
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
 */
function is(x, y) {
  // SameValue algorithm
  if (x === y) {
    // Steps 1-5, 7-10
    // Steps 6.b-6.e: +0 != -0
    // Added the nonzero y check to make Flow happy, but it is redundant
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    // Step 6.a: NaN == NaN
    return x !== x && y !== y;
  }
}

/**
 * Performs equality by iterating through keys on an object and returning false
 * when any key has values which are not strictly equal between the arguments.
 * Returns true when the values of all keys are strictly equal.
 */
function shallowEqual(objA, objB) {
  if (is(objA, objB)) {
    return true;
  }

  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  // Test for A's keys different from B.
  for (var i = 0; i < keysA.length; i++) {
    if (!hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}

module.exports = shallowEqual;

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */


var REACT_STATICS = {
    childContextTypes: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    mixins: true,
    propTypes: true,
    type: true
};

var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = getPrototypeOf && getPrototypeOf(Object);

module.exports = function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
    if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components

        if (objectPrototype) {
            var inheritedComponent = getPrototypeOf(sourceComponent);
            if (inheritedComponent && inheritedComponent !== objectPrototype) {
                hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
            }
        }

        var keys = getOwnPropertyNames(sourceComponent);

        if (getOwnPropertySymbols) {
            keys = keys.concat(getOwnPropertySymbols(sourceComponent));
        }

        for (var i = 0; i < keys.length; ++i) {
            var key = keys[i];
            if (!REACT_STATICS[key] && !KNOWN_STATICS[key] && (!blacklist || !blacklist[key])) {
                var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
                try { // Avoid failures from read-only properties
                    defineProperty(targetComponent, key, descriptor);
                } catch (e) {}
            }
        }

        return targetComponent;
    }

    return targetComponent;
};


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var createChangeEmitter = exports.createChangeEmitter = function createChangeEmitter() {
  var currentListeners = [];
  var nextListeners = currentListeners;

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }

  function listen(listener) {
    if (typeof listener !== 'function') {
      throw new Error('Expected listener to be a function.');
    }

    var isSubscribed = true;

    ensureCanMutateNextListeners();
    nextListeners.push(listener);

    return function () {
      if (!isSubscribed) {
        return;
      }

      isSubscribed = false;

      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
    };
  }

  function emit() {
    currentListeners = nextListeners;
    var listeners = currentListeners;
    for (var i = 0; i < listeners.length; i++) {
      listeners[i].apply(listeners, arguments);
    }
  }

  return {
    listen: listen,
    emit: emit
  };
};

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(63);


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ponyfill = __webpack_require__(66);

var _ponyfill2 = _interopRequireDefault(_ponyfill);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var root; /* global window */


if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof global !== 'undefined') {
  root = global;
} else if (true) {
  root = module;
} else {
  root = Function('return this')();
}

var result = (0, _ponyfill2['default'])(root);
exports['default'] = result;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(64), __webpack_require__(65)(module)))

/***/ }),
/* 64 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports['default'] = symbolObservablePonyfill;
function symbolObservablePonyfill(root) {
	var result;
	var _Symbol = root.Symbol;

	if (typeof _Symbol === 'function') {
		if (_Symbol.observable) {
			result = _Symbol.observable;
		} else {
			result = _Symbol('observable');
			_Symbol.observable = result;
		}
	} else {
		result = '@@observable';
	}

	return result;
};

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _elem = __webpack_require__(3);

var _elem2 = _interopRequireDefault(_elem);

var _theme = __webpack_require__(2);

var _theme2 = _interopRequireDefault(_theme);

var _typo = __webpack_require__(4);

var _typo2 = _interopRequireDefault(_typo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cmz = __webpack_require__(1);

var Root = _elem2.default.section(cmz.named('AutoUI_ui_ColorPalette-14', /*cmz|*/'\n  display: flex\n  flex-wrap: wrap\n  justify-content: center\n' /*|cmz*/));

var Color = _elem2.default.div(cmz.named('AutoUI_ui_ColorPalette-20', _typo2.default.baseText, /*cmz|*/'\n    display: flex\n    flex-direction: column\n    justify-content: flex-end\n    width: 170px\n    height: 90px\n    margin: 10px\n    border-radius: 6px\n    box-shadow: 1px 1px 3px rgba(0, 0, 0, .3)\n  ' /*|cmz*/));

var ColorName = _elem2.default.div(cmz.named('AutoUI_ui_ColorPalette-34', '\n  background-color: ' + _theme2.default.baseBrighter + '\n  padding: 4px\n  text-align: center\n  border-radius: 0 0 6px 6px\n'));

var ColorPalette = function (_PureComponent) {
  _inherits(ColorPalette, _PureComponent);

  function ColorPalette() {
    _classCallCheck(this, ColorPalette);

    return _possibleConstructorReturn(this, (ColorPalette.__proto__ || Object.getPrototypeOf(ColorPalette)).apply(this, arguments));
  }

  _createClass(ColorPalette, [{
    key: 'render',
    value: function render() {
      var colorBlocks = [];

      Object.keys(_theme2.default).forEach(function (key, i) {
        colorBlocks.push(Color({
          key: i,
          style: { backgroundColor: 'rgb(' + _theme2.default[key].color[0] + ', ' + _theme2.default[key].color[1] + ', ' + _theme2.default[key].color[2] + ')' }
        }, ColorName(key)));
      });

      return Root(colorBlocks);
    }
  }]);

  return ColorPalette;
}(_react.PureComponent);

exports.default = ColorPalette;

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _elem = __webpack_require__(3);

var _elem2 = _interopRequireDefault(_elem);

var _theme = __webpack_require__(2);

var _theme2 = _interopRequireDefault(_theme);

var _typo = __webpack_require__(4);

var _typo2 = _interopRequireDefault(_typo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cmz = __webpack_require__(1);

var Root = _elem2.default.div(cmz.named('AutoUI_ui_ErrorBox-17', _typo2.default.baseText, '\n  & {\n    color: ' + _theme2.default.baseRed.darken(0.3) + '\n    border: 2px solid ' + _theme2.default.baseRed + '\n    border-radius: .175em\n    background: ' + _theme2.default.baseRed.lighten(0.65) + '\n    margin: 10px 0\n  }\n\n  & a {\n    color: ' + _theme2.default.baseRed.darken(0.3) + '\n  }\n'));

var List = _elem2.default.ul(cmz.named('AutoUI_ui_ErrorBox-33', /*cmz|*/'\n  list-style-type: none\n  padding: 3px\n  text-align: center\n' /*|cmz*/));

var Item = _elem2.default.li();

var ErrorBox = function (_PureComponent) {
  _inherits(ErrorBox, _PureComponent);

  function ErrorBox() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ErrorBox);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ErrorBox.__proto__ || Object.getPrototypeOf(ErrorBox)).call.apply(_ref, [this].concat(args))), _this), _this.renderErrorItem = function (err) {
      var errors = _this.props.errors;

      return Item({ key: err }, errors[err]);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ErrorBox, [{
    key: 'render',
    value: function render() {
      var errors = this.props.errors;


      var keys = Object.keys(errors);
      if (!keys.length) {
        return _react2.default.createElement('div', null);
      }

      return Root(List(keys.map(this.renderErrorItem)));
    }
  }]);

  return ErrorBox;
}(_react.PureComponent);

ErrorBox.defaultProps = {
  errors: {}
};
exports.default = ErrorBox;

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _elem = __webpack_require__(3);

var _elem2 = _interopRequireDefault(_elem);

var _theme = __webpack_require__(2);

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cmz = __webpack_require__(1);

var Root = _elem2.default.div(cmz.named('AutoUI_ui_FilterBar-17', '\n  border-bottom: ' + _theme2.default.lineSilver1 + ' solid 1px\n  margin: 0\n'));

var Form = _elem2.default.form(cmz.named('AutoUI_ui_FilterBar-22', /*cmz|*/'\n  padding: 10px 20px\n  box-sizing: border-box\n  width: 100%\n  max-width: 100%\n' /*|cmz*/));

var Filters = _elem2.default.div(cmz.named('AutoUI_ui_FilterBar-29', /*cmz|*/'\n  & {\n    display: flex\n    align-items: flex-end\n  }\n\n  & *:not(:last-child) {\n    margin-right: 20px\n  }\n\n  & input {\n    width: 240px\n    height: 40px\n    padding: 5px\n  }\n' /*|cmz*/));

var FilterBar = function (_PureComponent) {
  _inherits(FilterBar, _PureComponent);

  function FilterBar() {
    _classCallCheck(this, FilterBar);

    return _possibleConstructorReturn(this, (FilterBar.__proto__ || Object.getPrototypeOf(FilterBar)).apply(this, arguments));
  }

  _createClass(FilterBar, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          onSubmit = _props.onSubmit,
          children = _props.children;


      return children ? Root(Form({
        onSubmit: onSubmit
      }, Filters(children))) : null;
    }
  }]);

  return FilterBar;
}(_react.PureComponent);

exports.default = FilterBar;

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _logo = __webpack_require__(24);

var _theme = __webpack_require__(2);

var _theme2 = _interopRequireDefault(_theme);

var _typo = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cmz = __webpack_require__(1);

var cx = {
  footer: cmz.named('AutoUI_ui_Footer_Footer-20', '\n    & {\n      position: relative\n      width: calc(100% - 2rem)\n      max-width: 1280px\n      margin: 0 auto\n    }\n\n    ' + _theme.mediaQueries.mediaQueries + ' {\n      padding-bottom: 6.5rem\n    }\n\n    ' + _theme.mediaQueries.desktop + ' {\n      & {\n        width: calc(100% - 4rem)\n        padding: 6.5rem 0\n      }\n    }\n  '),

  links: cmz.named('AutoUI_ui_Footer_Footer-40', '\n    ' + _theme.mediaQueries.medium + ' {\n      & {\n        display: none\n      }\n    }\n\n    ' + _theme.mediaQueries.desktop + ' {\n      & {\n        display: flex\n        justify-content: center\n      }\n    }\n  '),

  column: cmz.named('AutoUI_ui_Footer_Footer-55', '\n    &:last-child {\n      margin-left: auto\n      width: 15%\n    }\n\n    ' + _theme.mediaQueries.desktop + ' {\n      & {\n        flex-grow: 1\n        max-width: 28%\n      }\n\n      &:last-child {\n        max-width: 120px\n      }\n    }\n\n    ' + _theme.mediaQueries.medium + ' {\n      & {\n        display: none\n      }\n    }\n  '),

  colophon: cmz.named('AutoUI_ui_Footer_Footer-79', '\n    & {\n      font-family: \'Open Sans\', sans-serif\n      color: ' + _theme2.default.baseDarker + '\n      font-size: 12px\n      overflow: hidden\n      margin-top: 3.125rem\n      padding-top: 2.5rem\n      border-top: 1px solid ' + _theme2.default.lineSilver2 + '\n    }\n\n    ' + _theme.mediaQueries.medium + ' {\n      & {\n        margin: auto\n        text-align: center\n        font-size: 14px\n        position: relative\n        margin-bottom: 4.5rem\n      }\n    }\n\n    ' + _theme.mediaQueries.desktop + ' {\n      & {\n        width: 80%\n        margin-left: 20%\n      }\n    }\n  '),

  copyright: cmz.named('AutoUI_ui_Footer_Footer-108', _typo.typeface.semiHeading, '\n      & {\n        font-size: 12px\n        font-weight: 400\n        opacity: .5\n        color: ' + _theme2.default.baseDarker + '\n      }\n\n      ' + _theme.mediaQueries.medium + ' {\n        & {\n          font-size: 14px\n        }\n      }\n    '),

  mobileLogo: cmz.named('AutoUI_ui_Footer_Footer-126', '\n    & {\n      text-align: center\n      margin-top: 32px\n    }\n\n    ' + _theme.mediaQueries.desktop + ' {\n      & {\n        display: none\n      }\n    }\n  ')
};

var Footer = function (_PureComponent) {
  _inherits(Footer, _PureComponent);

  function Footer() {
    _classCallCheck(this, Footer);

    return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).apply(this, arguments));
  }

  _createClass(Footer, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          lists = _props.lists,
          brands = _props.brands,
          copyright = _props.copyright;


      return _react2.default.createElement(
        'div',
        { className: cx.footer },
        _react2.default.createElement(
          'div',
          { className: cx.links },
          _react2.default.createElement(
            'div',
            { className: cx.column },
            (0, _logo.xTeamLogo)(94, 32, _theme2.default.logoGray)
          ),
          lists.map(function (item, id) {
            return _react2.default.createElement(
              'div',
              { key: id, className: cx.column },
              item
            );
          })
        ),
        _react2.default.createElement(
          'div',
          { className: cx.colophon },
          _react2.default.createElement(
            'div',
            null,
            brands
          ),
          _react2.default.createElement(
            'div',
            { className: cx.copyright },
            copyright
          ),
          _react2.default.createElement(
            'div',
            { className: cx.mobileLogo },
            (0, _logo.xTeamLogo)(94, 32, _theme2.default.logoGray)
          )
        )
      );
    }
  }]);

  return Footer;
}(_react.PureComponent);

exports.default = Footer;

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _theme = __webpack_require__(2);

var _theme2 = _interopRequireDefault(_theme);

var _typo = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cmz = __webpack_require__(1);

var cx = {
  logos: cmz.named('AutoUI_ui_Footer_FooterBrands-20', '\n    & {\n      list-style: none\n      margin: 0\n      padding: 0\n      display: flex\n    }\n\n    ' + _theme.mediaQueries.medium + ' {\n      & {\n        display: block\n      }\n    }\n  '),

  brand: cmz.named('AutoUI_ui_Footer_FooterBrands-35', '\n    & {\n      line-height: 3rem\n      margin-right: 1rem\n      display: inline-block\n      vertical-align: middle\n    }\n\n    &:last-child {\n      margin-right: 0\n    }\n\n    ' + _theme.mediaQueries.desktop + ' {\n      & {\n        line-height: 4rem\n        margin-right: 3rem\n      }\n    }\n  '),

  image: cmz.named('AutoUI_ui_Footer_FooterBrands-55', /*cmz|*/'\n    max-height: 4rem\n    display: inline-block\n    vertical-align: middle\n    max-width: 100%\n    opacity: 1\n    transition: all .3s ease-in\n  ' /*|cmz*/),

  brandContainer: cmz.named('AutoUI_ui_Footer_FooterBrands-64', '\n    ' + _theme.mediaQueries.medium + ' {\n      & {\n        margin: 1.5rem auto\n      }\n    }\n\n    ' + _theme.mediaQueries.desktop + ' {\n      & {\n        margin: 1.25rem auto\n      }\n    }\n  '),

  message: cmz.named('AutoUI_ui_Footer_FooterBrands-78', _typo.typeface.semiHeading, '\n      & {\n        font-size: 14px\n        font-weight: 400\n        color: ' + _theme2.default.baseDarker + '\n        text-transform: uppercase\n        opacity: .5\n        margin: 0\n      }\n\n      ' + _theme.mediaQueries.medium + ' {\n        & {\n          line-height: 1.715\n        }\n      }\n    ')
};

var FooterBrands = function (_PureComponent) {
  _inherits(FooterBrands, _PureComponent);

  function FooterBrands() {
    _classCallCheck(this, FooterBrands);

    return _possibleConstructorReturn(this, (FooterBrands.__proto__ || Object.getPrototypeOf(FooterBrands)).apply(this, arguments));
  }

  _createClass(FooterBrands, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          message = _props.message,
          brands = _props.brands;


      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h4',
          { className: cx.message },
          message
        ),
        _react2.default.createElement(
          'div',
          { className: cx.brandContainer },
          _react2.default.createElement(
            'ul',
            { className: cx.logos },
            brands.map(function (item, id) {
              return _react2.default.createElement(
                'li',
                { className: cx.brand, key: id },
                _react2.default.createElement(
                  'a',
                  { href: item.url },
                  _react2.default.createElement('img', { className: cx.image, src: item.image, alt: item.title })
                )
              );
            })
          )
        )
      );
    }
  }]);

  return FooterBrands;
}(_react.PureComponent);

exports.default = FooterBrands;

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _typo = __webpack_require__(4);

var _typo2 = _interopRequireDefault(_typo);

var _theme = __webpack_require__(2);

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cmz = __webpack_require__(1);

var cx = {
  link: cmz.named('AutoUI_ui_Footer_FooterList-22', _typo.typeface.text, '\n      & {\n        font-size: 16px\n        color: ' + _theme2.default.baseDarker + '\n        opacity: .7\n        text-decoration: none\n      }\n\n      &:hover {\n        opacity: 1\n      }\n    '),

  item: cmz.named('AutoUI_ui_Footer_FooterList-38', '\n    & {\n      margin-bottom: 11px\n    }\n\n    ' + _theme.mediaQueries.medium + ' {\n      & {\n        margin-top: 11px\n      }\n    }\n  '),

  list: cmz.named('AutoUI_ui_Footer_FooterList-50', /*cmz|*/'\n    list-style: none\n    margin: 0\n    padding: 0\n  ' /*|cmz*/),

  title: cmz.named('AutoUI_ui_Footer_FooterList-56', _typo2.default.sectionHeading, '\n      & {\n        font-size: 19px\n        text-transform: uppercase\n        letter-spacing: normal\n        margin: 0 0 30px\n      }\n\n      ' + _theme.mediaQueries.medium + ' {\n        &:not(:nth-child(2)) {\n          display: none\n        }\n      }\n    '),

  mobile: cmz.named('AutoUI_ui_Footer_FooterList-74', '\n    ' + _theme.mediaQueries.desktop + ' {\n      & {\n        display: none\n      }\n    }\n  ')
};

var FooterList = function (_PureComponent) {
  _inherits(FooterList, _PureComponent);

  function FooterList() {
    _classCallCheck(this, FooterList);

    return _possibleConstructorReturn(this, (FooterList.__proto__ || Object.getPrototypeOf(FooterList)).apply(this, arguments));
  }

  _createClass(FooterList, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          items = _props.items,
          title = _props.title;


      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h4',
          { className: cx.title },
          title
        ),
        _react2.default.createElement(
          'ul',
          { className: cx.list },
          items.map(function (item, id) {
            var mobile = item.mobileOnly ? cx.mobile : '';
            return _react2.default.createElement(
              'li',
              { key: id, className: cx.item + ' ' + mobile },
              _react2.default.createElement(
                'a',
                { href: item.url, className: cx.link },
                item.label
              )
            );
          })
        )
      );
    }
  }]);

  return FooterList;
}(_react.PureComponent);

exports.default = FooterList;

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _elem = __webpack_require__(3);

var _elem2 = _interopRequireDefault(_elem);

var _theme = __webpack_require__(2);

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cmz = __webpack_require__(1);

var Hr = _elem2.default.hr(cmz.named('AutoUI_ui_HorizontalRuler-12', '\n  height: 1px\n  background-color: ' + _theme2.default.lineSilver4 + '\n  border: 0\n'));

var HorizontalRuler = function (_PureComponent) {
  _inherits(HorizontalRuler, _PureComponent);

  function HorizontalRuler() {
    _classCallCheck(this, HorizontalRuler);

    return _possibleConstructorReturn(this, (HorizontalRuler.__proto__ || Object.getPrototypeOf(HorizontalRuler)).apply(this, arguments));
  }

  _createClass(HorizontalRuler, [{
    key: 'render',
    value: function render() {
      return Hr();
    }
  }]);

  return HorizontalRuler;
}(_react.PureComponent);

exports.default = HorizontalRuler;

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _helpers = __webpack_require__(25);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var withAutosize = function withAutosize(Component) {
  var WithAutosize = function (_PureComponent) {
    _inherits(WithAutosize, _PureComponent);

    function WithAutosize() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, WithAutosize);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = WithAutosize.__proto__ || Object.getPrototypeOf(WithAutosize)).call.apply(_ref, [this].concat(args))), _this), _this.setAutosize = function (elem) {
        if (!elem) return;

        _this.elem = elem;

        var value = _this.elem.value;
        _this.elem.value = '';
        _this.elem.baseScrollHeight = _this.elem.scrollHeight;
        _this.elem.value = value;

        var lineHeight = parseInt(window.getComputedStyle(_this.elem).getPropertyValue('line-height'), 10) || 16;
        var minLines = 2;
        var maxLines = _this.props.linesLimit;

        _this.elem.oninput = function () {
          _this.elem.rows = minLines;
          var hiddenLines = Math.ceil((_this.elem.scrollHeight - _this.elem.baseScrollHeight) / lineHeight);
          var lines = minLines + hiddenLines;
          _this.elem.rows = maxLines && lines >= maxLines ? maxLines : lines;
        };

        _this.elem.oninput();
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(WithAutosize, [{
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prevProps) {
        this.props.value !== prevProps.value && this.elem.oninput();
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props,
            linesLimit = _props.linesLimit,
            rest = _objectWithoutProperties(_props, ['linesLimit']);

        return _react2.default.createElement(Component, _extends({ ref: this.setAutosize }, rest));
      }
    }]);

    return WithAutosize;
  }(_react.PureComponent);

  WithAutosize.defaultProps = {
    linesLimit: 0
  };


  WithAutosize.displayName = 'WithAutosize(' + (0, _helpers.getComponentDisplayName)(Component) + ')';

  return WithAutosize;
};

exports.default = withAutosize;

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _InputField = __webpack_require__(16);

var _InputField2 = _interopRequireDefault(_InputField);

var _elem = __webpack_require__(3);

var _elem2 = _interopRequireDefault(_elem);

var _theme = __webpack_require__(2);

var _typo = __webpack_require__(4);

var _typo2 = _interopRequireDefault(_typo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var cmz = __webpack_require__(1);

var Root = _elem2.default.div(cmz.named('AutoUI_forms_InputGroup-22', /*cmz|*/'\n  position: relative\n  display: table\n  border-collapse: separate\n  width: 100%\n' /*|cmz*/));

var AddonText = _elem2.default.span([_typo2.default.baseText, cmz.named('AutoUI_forms_InputGroup-31', '\n    & {\n      width: 40%\n      padding: 6px 12px\n      text-align: left\n      white-space: nowrap\n      vertical-align: middle\n      display: table-cell\n      box-sizing: border-box\n      pointer-events: none\n    }\n\n    &:first-child {\n      border-right: 0\n    }\n\n    @media screen and (max-width: ' + _theme.breakpoints.xs + ') {\n      & {\n        display: block\n        width: 100%\n        padding-left: 0\n        padding-right: 0\n      }\n    }\n  ')]);

var InputGroup = function (_PureComponent) {
  _inherits(InputGroup, _PureComponent);

  function InputGroup() {
    _classCallCheck(this, InputGroup);

    return _possibleConstructorReturn(this, (InputGroup.__proto__ || Object.getPrototypeOf(InputGroup)).apply(this, arguments));
  }

  _createClass(InputGroup, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          name = _props.name,
          addonText = _props.addonText,
          rest = _objectWithoutProperties(_props, ['className', 'name', 'addonText']);

      return Root({ className: className }, AddonText(addonText), _react2.default.createElement(_InputField2.default, _extends({ name: name }, rest)));
    }
  }]);

  return InputGroup;
}(_react.PureComponent);

InputGroup.defaultProps = {
  className: '',
  type: 'text'
};
exports.default = InputGroup;

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _elem = __webpack_require__(3);

var _elem2 = _interopRequireDefault(_elem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Img = _elem2.default.img('', {
  src: __webpack_require__(77),
  alt: 'Loading...'
});

function Loader() {
  return Img();
}

exports.default = Loader;

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "6f647ce328b13c96401708c6fcbdb237.gif";

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _elem = __webpack_require__(3);

var _elem2 = _interopRequireDefault(_elem);

var _Milestones = __webpack_require__(26);

var _Milestones2 = _interopRequireDefault(_Milestones);

var _theme = __webpack_require__(2);

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cmz = __webpack_require__(1);

var Root = _elem2.default.div();

var CTA = _elem2.default.div();

var Wrapper = _elem2.default.div(cmz.named('AutoUI_ui_MilestonesScreen-25', '\n  & {\n    max-width: 840px\n    margin: 0 auto\n    padding-left: 60px\n    padding-right: 60px\n  }\n\n  @media screen and (max-width: ' + _theme.breakpoints.sm + ') {\n    & {\n      padding-left: 40px\n      padding-right: 40px\n    }\n  }\n\n  @media screen and (max-width: ' + _theme.breakpoints.xs + ') {\n    & {\n      padding-left: 20px\n      padding-right: 20px\n    }\n  }\n'));

var Content = _elem2.default.div(cmz.named('AutoUI_ui_MilestonesScreen-48', /*cmz|*/'\n  & > *:only-child,\n  & > *:first-child {\n    border-top: none !important\n  }\n\n  & > *:only-child,\n  & > *:last-child {\n    padding-bottom: 27px\n  }\n' /*|cmz*/));

var Block = _elem2.default.div(cmz.named('AutoUI_ui_MilestonesScreen-60', '\n  &:not(:empty) {\n    padding: 80px 0 84px\n    border-top: 1px solid ' + _theme2.default.lineSilver2 + '\n  }\n'));

var MilestonesScreen = function (_PureComponent) {
  _inherits(MilestonesScreen, _PureComponent);

  function MilestonesScreen() {
    _classCallCheck(this, MilestonesScreen);

    return _possibleConstructorReturn(this, (MilestonesScreen.__proto__ || Object.getPrototypeOf(MilestonesScreen)).apply(this, arguments));
  }

  _createClass(MilestonesScreen, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          level = _props.level,
          children = _props.children,
          cta = _props.cta;


      var milestones = level > 0 && _react2.default.createElement(_Milestones2.default, {
        level: level,
        levels: [{ icon: 'cog' }, { icon: 'webcam' }, { icon: 'message' }]
      });
      var childBlocks = _react.Children.map(children, function (child, index) {
        return Block({ key: index }, child, CTA(cta));
      });

      return Root(milestones, Wrapper(Content(childBlocks)));
    }
  }]);

  return MilestonesScreen;
}(_react.PureComponent);

MilestonesScreen.defaultProps = {
  level: 0,
  children: null,
  cta: null
};
exports.default = MilestonesScreen;

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

var differenceInMilliseconds = __webpack_require__(17)

/**
 * @category Second Helpers
 * @summary Get the number of seconds between the given dates.
 *
 * @description
 * Get the number of seconds between the given dates.
 *
 * @param {Date|String|Number} dateLeft - the later date
 * @param {Date|String|Number} dateRight - the earlier date
 * @returns {Number} the number of seconds
 *
 * @example
 * // How many seconds are between
 * // 2 July 2014 12:30:07.999 and 2 July 2014 12:30:20.000?
 * var result = differenceInSeconds(
 *   new Date(2014, 6, 2, 12, 30, 20, 0),
 *   new Date(2014, 6, 2, 12, 30, 7, 999)
 * )
 * //=> 12
 */
function differenceInSeconds (dirtyDateLeft, dirtyDateRight) {
  var diff = differenceInMilliseconds(dirtyDateLeft, dirtyDateRight) / 1000
  return diff > 0 ? Math.floor(diff) : Math.ceil(diff)
}

module.exports = differenceInSeconds


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

var differenceInMilliseconds = __webpack_require__(17)

var MILLISECONDS_IN_MINUTE = 60000

/**
 * @category Minute Helpers
 * @summary Get the number of minutes between the given dates.
 *
 * @description
 * Get the number of minutes between the given dates.
 *
 * @param {Date|String|Number} dateLeft - the later date
 * @param {Date|String|Number} dateRight - the earlier date
 * @returns {Number} the number of minutes
 *
 * @example
 * // How many minutes are between 2 July 2014 12:07:59 and 2 July 2014 12:20:00?
 * var result = differenceInMinutes(
 *   new Date(2014, 6, 2, 12, 20, 0),
 *   new Date(2014, 6, 2, 12, 7, 59)
 * )
 * //=> 12
 */
function differenceInMinutes (dirtyDateLeft, dirtyDateRight) {
  var diff = differenceInMilliseconds(dirtyDateLeft, dirtyDateRight) / MILLISECONDS_IN_MINUTE
  return diff > 0 ? Math.floor(diff) : Math.ceil(diff)
}

module.exports = differenceInMinutes


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

var differenceInMilliseconds = __webpack_require__(17)

var MILLISECONDS_IN_HOUR = 3600000

/**
 * @category Hour Helpers
 * @summary Get the number of hours between the given dates.
 *
 * @description
 * Get the number of hours between the given dates.
 *
 * @param {Date|String|Number} dateLeft - the later date
 * @param {Date|String|Number} dateRight - the earlier date
 * @returns {Number} the number of hours
 *
 * @example
 * // How many hours are between 2 July 2014 06:50:00 and 2 July 2014 19:00:00?
 * var result = differenceInHours(
 *   new Date(2014, 6, 2, 19, 0),
 *   new Date(2014, 6, 2, 6, 50)
 * )
 * //=> 12
 */
function differenceInHours (dirtyDateLeft, dirtyDateRight) {
  var diff = differenceInMilliseconds(dirtyDateLeft, dirtyDateRight) / MILLISECONDS_IN_HOUR
  return diff > 0 ? Math.floor(diff) : Math.ceil(diff)
}

module.exports = differenceInHours


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

var getDayOfYear = __webpack_require__(83)
var getISOWeek = __webpack_require__(87)
var getISOYear = __webpack_require__(29)
var parse = __webpack_require__(7)
var isValid = __webpack_require__(90)
var enLocale = __webpack_require__(91)

/**
 * @category Common Helpers
 * @summary Format the date.
 *
 * @description
 * Return the formatted date string in the given format.
 *
 * Accepted tokens:
 * | Unit                    | Token | Result examples                  |
 * |-------------------------|-------|----------------------------------|
 * | Month                   | M     | 1, 2, ..., 12                    |
 * |                         | Mo    | 1st, 2nd, ..., 12th              |
 * |                         | MM    | 01, 02, ..., 12                  |
 * |                         | MMM   | Jan, Feb, ..., Dec               |
 * |                         | MMMM  | January, February, ..., December |
 * | Quarter                 | Q     | 1, 2, 3, 4                       |
 * |                         | Qo    | 1st, 2nd, 3rd, 4th               |
 * | Day of month            | D     | 1, 2, ..., 31                    |
 * |                         | Do    | 1st, 2nd, ..., 31st              |
 * |                         | DD    | 01, 02, ..., 31                  |
 * | Day of year             | DDD   | 1, 2, ..., 366                   |
 * |                         | DDDo  | 1st, 2nd, ..., 366th             |
 * |                         | DDDD  | 001, 002, ..., 366               |
 * | Day of week             | d     | 0, 1, ..., 6                     |
 * |                         | do    | 0th, 1st, ..., 6th               |
 * |                         | dd    | Su, Mo, ..., Sa                  |
 * |                         | ddd   | Sun, Mon, ..., Sat               |
 * |                         | dddd  | Sunday, Monday, ..., Saturday    |
 * | Day of ISO week         | E     | 1, 2, ..., 7                     |
 * | ISO week                | W     | 1, 2, ..., 53                    |
 * |                         | Wo    | 1st, 2nd, ..., 53rd              |
 * |                         | WW    | 01, 02, ..., 53                  |
 * | Year                    | YY    | 00, 01, ..., 99                  |
 * |                         | YYYY  | 1900, 1901, ..., 2099            |
 * | ISO week-numbering year | GG    | 00, 01, ..., 99                  |
 * |                         | GGGG  | 1900, 1901, ..., 2099            |
 * | AM/PM                   | A     | AM, PM                           |
 * |                         | a     | am, pm                           |
 * |                         | aa    | a.m., p.m.                       |
 * | Hour                    | H     | 0, 1, ... 23                     |
 * |                         | HH    | 00, 01, ... 23                   |
 * |                         | h     | 1, 2, ..., 12                    |
 * |                         | hh    | 01, 02, ..., 12                  |
 * | Minute                  | m     | 0, 1, ..., 59                    |
 * |                         | mm    | 00, 01, ..., 59                  |
 * | Second                  | s     | 0, 1, ..., 59                    |
 * |                         | ss    | 00, 01, ..., 59                  |
 * | 1/10 of second          | S     | 0, 1, ..., 9                     |
 * | 1/100 of second         | SS    | 00, 01, ..., 99                  |
 * | Millisecond             | SSS   | 000, 001, ..., 999               |
 * | Timezone                | Z     | -01:00, +00:00, ... +12:00       |
 * |                         | ZZ    | -0100, +0000, ..., +1200         |
 * | Seconds timestamp       | X     | 512969520                        |
 * | Milliseconds timestamp  | x     | 512969520900                     |
 *
 * The characters wrapped in square brackets are escaped.
 *
 * The result may vary by locale.
 *
 * @param {Date|String|Number} date - the original date
 * @param {String} [format='YYYY-MM-DDTHH:mm:ss.SSSZ'] - the string of tokens
 * @param {Object} [options] - the object with options
 * @param {Object} [options.locale=enLocale] - the locale object
 * @returns {String} the formatted date string
 *
 * @example
 * // Represent 11 February 2014 in middle-endian format:
 * var result = format(
 *   new Date(2014, 1, 11),
 *   'MM/DD/YYYY'
 * )
 * //=> '02/11/2014'
 *
 * @example
 * // Represent 2 July 2014 in Esperanto:
 * var eoLocale = require('date-fns/locale/eo')
 * var result = format(
 *   new Date(2014, 6, 2),
 *   'Do [de] MMMM YYYY',
 *   {locale: eoLocale}
 * )
 * //=> '2-a de julio 2014'
 */
function format (dirtyDate, dirtyFormatStr, dirtyOptions) {
  var formatStr = dirtyFormatStr ? String(dirtyFormatStr) : 'YYYY-MM-DDTHH:mm:ss.SSSZ'
  var options = dirtyOptions || {}

  var locale = options.locale
  var localeFormatters = enLocale.format.formatters
  var formattingTokensRegExp = enLocale.format.formattingTokensRegExp
  if (locale && locale.format && locale.format.formatters) {
    localeFormatters = locale.format.formatters

    if (locale.format.formattingTokensRegExp) {
      formattingTokensRegExp = locale.format.formattingTokensRegExp
    }
  }

  var date = parse(dirtyDate)

  if (!isValid(date)) {
    return 'Invalid Date'
  }

  var formatFn = buildFormatFn(formatStr, localeFormatters, formattingTokensRegExp)

  return formatFn(date)
}

var formatters = {
  // Month: 1, 2, ..., 12
  'M': function (date) {
    return date.getMonth() + 1
  },

  // Month: 01, 02, ..., 12
  'MM': function (date) {
    return addLeadingZeros(date.getMonth() + 1, 2)
  },

  // Quarter: 1, 2, 3, 4
  'Q': function (date) {
    return Math.ceil((date.getMonth() + 1) / 3)
  },

  // Day of month: 1, 2, ..., 31
  'D': function (date) {
    return date.getDate()
  },

  // Day of month: 01, 02, ..., 31
  'DD': function (date) {
    return addLeadingZeros(date.getDate(), 2)
  },

  // Day of year: 1, 2, ..., 366
  'DDD': function (date) {
    return getDayOfYear(date)
  },

  // Day of year: 001, 002, ..., 366
  'DDDD': function (date) {
    return addLeadingZeros(getDayOfYear(date), 3)
  },

  // Day of week: 0, 1, ..., 6
  'd': function (date) {
    return date.getDay()
  },

  // Day of ISO week: 1, 2, ..., 7
  'E': function (date) {
    return date.getDay() || 7
  },

  // ISO week: 1, 2, ..., 53
  'W': function (date) {
    return getISOWeek(date)
  },

  // ISO week: 01, 02, ..., 53
  'WW': function (date) {
    return addLeadingZeros(getISOWeek(date), 2)
  },

  // Year: 00, 01, ..., 99
  'YY': function (date) {
    return addLeadingZeros(date.getFullYear(), 4).substr(2)
  },

  // Year: 1900, 1901, ..., 2099
  'YYYY': function (date) {
    return addLeadingZeros(date.getFullYear(), 4)
  },

  // ISO week-numbering year: 00, 01, ..., 99
  'GG': function (date) {
    return String(getISOYear(date)).substr(2)
  },

  // ISO week-numbering year: 1900, 1901, ..., 2099
  'GGGG': function (date) {
    return getISOYear(date)
  },

  // Hour: 0, 1, ... 23
  'H': function (date) {
    return date.getHours()
  },

  // Hour: 00, 01, ..., 23
  'HH': function (date) {
    return addLeadingZeros(date.getHours(), 2)
  },

  // Hour: 1, 2, ..., 12
  'h': function (date) {
    var hours = date.getHours()
    if (hours === 0) {
      return 12
    } else if (hours > 12) {
      return hours % 12
    } else {
      return hours
    }
  },

  // Hour: 01, 02, ..., 12
  'hh': function (date) {
    return addLeadingZeros(formatters['h'](date), 2)
  },

  // Minute: 0, 1, ..., 59
  'm': function (date) {
    return date.getMinutes()
  },

  // Minute: 00, 01, ..., 59
  'mm': function (date) {
    return addLeadingZeros(date.getMinutes(), 2)
  },

  // Second: 0, 1, ..., 59
  's': function (date) {
    return date.getSeconds()
  },

  // Second: 00, 01, ..., 59
  'ss': function (date) {
    return addLeadingZeros(date.getSeconds(), 2)
  },

  // 1/10 of second: 0, 1, ..., 9
  'S': function (date) {
    return Math.floor(date.getMilliseconds() / 100)
  },

  // 1/100 of second: 00, 01, ..., 99
  'SS': function (date) {
    return addLeadingZeros(Math.floor(date.getMilliseconds() / 10), 2)
  },

  // Millisecond: 000, 001, ..., 999
  'SSS': function (date) {
    return addLeadingZeros(date.getMilliseconds(), 3)
  },

  // Timezone: -01:00, +00:00, ... +12:00
  'Z': function (date) {
    return formatTimezone(date.getTimezoneOffset(), ':')
  },

  // Timezone: -0100, +0000, ... +1200
  'ZZ': function (date) {
    return formatTimezone(date.getTimezoneOffset())
  },

  // Seconds timestamp: 512969520
  'X': function (date) {
    return Math.floor(date.getTime() / 1000)
  },

  // Milliseconds timestamp: 512969520900
  'x': function (date) {
    return date.getTime()
  }
}

function buildFormatFn (formatStr, localeFormatters, formattingTokensRegExp) {
  var array = formatStr.match(formattingTokensRegExp)
  var length = array.length

  var i
  var formatter
  for (i = 0; i < length; i++) {
    formatter = localeFormatters[array[i]] || formatters[array[i]]
    if (formatter) {
      array[i] = formatter
    } else {
      array[i] = removeFormattingTokens(array[i])
    }
  }

  return function (date) {
    var output = ''
    for (var i = 0; i < length; i++) {
      if (array[i] instanceof Function) {
        output += array[i](date, formatters)
      } else {
        output += array[i]
      }
    }
    return output
  }
}

function removeFormattingTokens (input) {
  if (input.match(/\[[\s\S]/)) {
    return input.replace(/^\[|]$/g, '')
  }
  return input.replace(/\\/g, '')
}

function formatTimezone (offset, delimeter) {
  delimeter = delimeter || ''
  var sign = offset > 0 ? '-' : '+'
  var absOffset = Math.abs(offset)
  var hours = Math.floor(absOffset / 60)
  var minutes = absOffset % 60
  return sign + addLeadingZeros(hours, 2) + delimeter + addLeadingZeros(minutes, 2)
}

function addLeadingZeros (number, targetLength) {
  var output = Math.abs(number).toString()
  while (output.length < targetLength) {
    output = '0' + output
  }
  return output
}

module.exports = format


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(7)
var startOfYear = __webpack_require__(84)
var differenceInCalendarDays = __webpack_require__(85)

/**
 * @category Day Helpers
 * @summary Get the day of the year of the given date.
 *
 * @description
 * Get the day of the year of the given date.
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} the day of year
 *
 * @example
 * // Which day of the year is 2 July 2014?
 * var result = getDayOfYear(new Date(2014, 6, 2))
 * //=> 183
 */
function getDayOfYear (dirtyDate) {
  var date = parse(dirtyDate)
  var diff = differenceInCalendarDays(date, startOfYear(date))
  var dayOfYear = diff + 1
  return dayOfYear
}

module.exports = getDayOfYear


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(7)

/**
 * @category Year Helpers
 * @summary Return the start of a year for the given date.
 *
 * @description
 * Return the start of a year for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the start of a year
 *
 * @example
 * // The start of a year for 2 September 2014 11:55:00:
 * var result = startOfYear(new Date(2014, 8, 2, 11, 55, 00))
 * //=> Wed Jan 01 2014 00:00:00
 */
function startOfYear (dirtyDate) {
  var cleanDate = parse(dirtyDate)
  var date = new Date(0)
  date.setFullYear(cleanDate.getFullYear(), 0, 1)
  date.setHours(0, 0, 0, 0)
  return date
}

module.exports = startOfYear


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

var startOfDay = __webpack_require__(86)

var MILLISECONDS_IN_MINUTE = 60000
var MILLISECONDS_IN_DAY = 86400000

/**
 * @category Day Helpers
 * @summary Get the number of calendar days between the given dates.
 *
 * @description
 * Get the number of calendar days between the given dates.
 *
 * @param {Date|String|Number} dateLeft - the later date
 * @param {Date|String|Number} dateRight - the earlier date
 * @returns {Number} the number of calendar days
 *
 * @example
 * // How many calendar days are between
 * // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?
 * var result = differenceInCalendarDays(
 *   new Date(2012, 6, 2, 0, 0),
 *   new Date(2011, 6, 2, 23, 0)
 * )
 * //=> 366
 */
function differenceInCalendarDays (dirtyDateLeft, dirtyDateRight) {
  var startOfDayLeft = startOfDay(dirtyDateLeft)
  var startOfDayRight = startOfDay(dirtyDateRight)

  var timestampLeft = startOfDayLeft.getTime() -
    startOfDayLeft.getTimezoneOffset() * MILLISECONDS_IN_MINUTE
  var timestampRight = startOfDayRight.getTime() -
    startOfDayRight.getTimezoneOffset() * MILLISECONDS_IN_MINUTE

  // Round the number of days to the nearest integer
  // because the number of milliseconds in a day is not constant
  // (e.g. it's different in the day of the daylight saving time clock shift)
  return Math.round((timestampLeft - timestampRight) / MILLISECONDS_IN_DAY)
}

module.exports = differenceInCalendarDays


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(7)

/**
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the start of a day
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * var result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */
function startOfDay (dirtyDate) {
  var date = parse(dirtyDate)
  date.setHours(0, 0, 0, 0)
  return date
}

module.exports = startOfDay


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(7)
var startOfISOWeek = __webpack_require__(18)
var startOfISOYear = __webpack_require__(89)

var MILLISECONDS_IN_WEEK = 604800000

/**
 * @category ISO Week Helpers
 * @summary Get the ISO week of the given date.
 *
 * @description
 * Get the ISO week of the given date.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} the ISO week
 *
 * @example
 * // Which week of the ISO-week numbering year is 2 January 2005?
 * var result = getISOWeek(new Date(2005, 0, 2))
 * //=> 53
 */
function getISOWeek (dirtyDate) {
  var date = parse(dirtyDate)
  var diff = startOfISOWeek(date).getTime() - startOfISOYear(date).getTime()

  // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)
  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1
}

module.exports = getISOWeek


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(7)

/**
 * @category Week Helpers
 * @summary Return the start of a week for the given date.
 *
 * @description
 * Return the start of a week for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @param {Object} [options] - the object with options
 * @param {Number} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Date} the start of a week
 *
 * @example
 * // The start of a week for 2 September 2014 11:55:00:
 * var result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:
 * var result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), {weekStartsOn: 1})
 * //=> Mon Sep 01 2014 00:00:00
 */
function startOfWeek (dirtyDate, dirtyOptions) {
  var weekStartsOn = dirtyOptions ? (Number(dirtyOptions.weekStartsOn) || 0) : 0

  var date = parse(dirtyDate)
  var day = date.getDay()
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn

  date.setDate(date.getDate() - diff)
  date.setHours(0, 0, 0, 0)
  return date
}

module.exports = startOfWeek


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

var getISOYear = __webpack_require__(29)
var startOfISOWeek = __webpack_require__(18)

/**
 * @category ISO Week-Numbering Year Helpers
 * @summary Return the start of an ISO week-numbering year for the given date.
 *
 * @description
 * Return the start of an ISO week-numbering year,
 * which always starts 3 days before the year's first Thursday.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the start of an ISO year
 *
 * @example
 * // The start of an ISO week-numbering year for 2 July 2005:
 * var result = startOfISOYear(new Date(2005, 6, 2))
 * //=> Mon Jan 03 2005 00:00:00
 */
function startOfISOYear (dirtyDate) {
  var year = getISOYear(dirtyDate)
  var fourthOfJanuary = new Date(0)
  fourthOfJanuary.setFullYear(year, 0, 4)
  fourthOfJanuary.setHours(0, 0, 0, 0)
  var date = startOfISOWeek(fourthOfJanuary)
  return date
}

module.exports = startOfISOYear


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

var isDate = __webpack_require__(28)

/**
 * @category Common Helpers
 * @summary Is the given date valid?
 *
 * @description
 * Returns false if argument is Invalid Date and true otherwise.
 * Invalid Date is a Date, whose time value is NaN.
 *
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * @param {Date} date - the date to check
 * @returns {Boolean} the date is valid
 * @throws {TypeError} argument must be an instance of Date
 *
 * @example
 * // For the valid date:
 * var result = isValid(new Date(2014, 1, 31))
 * //=> true
 *
 * @example
 * // For the invalid date:
 * var result = isValid(new Date(''))
 * //=> false
 */
function isValid (dirtyDate) {
  if (isDate(dirtyDate)) {
    return !isNaN(dirtyDate)
  } else {
    throw new TypeError(toString.call(dirtyDate) + ' is not an instance of Date')
  }
}

module.exports = isValid


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

var buildDistanceInWordsLocale = __webpack_require__(92)
var buildFormatLocale = __webpack_require__(93)

/**
 * @category Locales
 * @summary English locale.
 */
module.exports = {
  distanceInWords: buildDistanceInWordsLocale(),
  format: buildFormatLocale()
}


/***/ }),
/* 92 */
/***/ (function(module, exports) {

function buildDistanceInWordsLocale () {
  var distanceInWordsLocale = {
    lessThanXSeconds: {
      one: 'less than a second',
      other: 'less than {{count}} seconds'
    },

    xSeconds: {
      one: '1 second',
      other: '{{count}} seconds'
    },

    halfAMinute: 'half a minute',

    lessThanXMinutes: {
      one: 'less than a minute',
      other: 'less than {{count}} minutes'
    },

    xMinutes: {
      one: '1 minute',
      other: '{{count}} minutes'
    },

    aboutXHours: {
      one: 'about 1 hour',
      other: 'about {{count}} hours'
    },

    xHours: {
      one: '1 hour',
      other: '{{count}} hours'
    },

    xDays: {
      one: '1 day',
      other: '{{count}} days'
    },

    aboutXMonths: {
      one: 'about 1 month',
      other: 'about {{count}} months'
    },

    xMonths: {
      one: '1 month',
      other: '{{count}} months'
    },

    aboutXYears: {
      one: 'about 1 year',
      other: 'about {{count}} years'
    },

    xYears: {
      one: '1 year',
      other: '{{count}} years'
    },

    overXYears: {
      one: 'over 1 year',
      other: 'over {{count}} years'
    },

    almostXYears: {
      one: 'almost 1 year',
      other: 'almost {{count}} years'
    }
  }

  function localize (token, count, options) {
    options = options || {}

    var result
    if (typeof distanceInWordsLocale[token] === 'string') {
      result = distanceInWordsLocale[token]
    } else if (count === 1) {
      result = distanceInWordsLocale[token].one
    } else {
      result = distanceInWordsLocale[token].other.replace('{{count}}', count)
    }

    if (options.addSuffix) {
      if (options.comparison > 0) {
        return 'in ' + result
      } else {
        return result + ' ago'
      }
    }

    return result
  }

  return {
    localize: localize
  }
}

module.exports = buildDistanceInWordsLocale


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

var buildFormattingTokensRegExp = __webpack_require__(94)

function buildFormatLocale () {
  // Note: in English, the names of days of the week and months are capitalized.
  // If you are making a new locale based on this one, check if the same is true for the language you're working on.
  // Generally, formatted dates should look like they are in the middle of a sentence,
  // e.g. in Spanish language the weekdays and months should be in the lowercase.
  var months3char = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  var monthsFull = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  var weekdays2char = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
  var weekdays3char = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  var weekdaysFull = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  var meridiemUppercase = ['AM', 'PM']
  var meridiemLowercase = ['am', 'pm']
  var meridiemFull = ['a.m.', 'p.m.']

  var formatters = {
    // Month: Jan, Feb, ..., Dec
    'MMM': function (date) {
      return months3char[date.getMonth()]
    },

    // Month: January, February, ..., December
    'MMMM': function (date) {
      return monthsFull[date.getMonth()]
    },

    // Day of week: Su, Mo, ..., Sa
    'dd': function (date) {
      return weekdays2char[date.getDay()]
    },

    // Day of week: Sun, Mon, ..., Sat
    'ddd': function (date) {
      return weekdays3char[date.getDay()]
    },

    // Day of week: Sunday, Monday, ..., Saturday
    'dddd': function (date) {
      return weekdaysFull[date.getDay()]
    },

    // AM, PM
    'A': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemUppercase[1] : meridiemUppercase[0]
    },

    // am, pm
    'a': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemLowercase[1] : meridiemLowercase[0]
    },

    // a.m., p.m.
    'aa': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemFull[1] : meridiemFull[0]
    }
  }

  // Generate ordinal version of formatters: M -> Mo, D -> Do, etc.
  var ordinalFormatters = ['M', 'D', 'DDD', 'd', 'Q', 'W']
  ordinalFormatters.forEach(function (formatterToken) {
    formatters[formatterToken + 'o'] = function (date, formatters) {
      return ordinal(formatters[formatterToken](date))
    }
  })

  return {
    formatters: formatters,
    formattingTokensRegExp: buildFormattingTokensRegExp(formatters)
  }
}

function ordinal (number) {
  var rem100 = number % 100
  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + 'st'
      case 2:
        return number + 'nd'
      case 3:
        return number + 'rd'
    }
  }
  return number + 'th'
}

module.exports = buildFormatLocale


/***/ }),
/* 94 */
/***/ (function(module, exports) {

var commonFormatterKeys = [
  'M', 'MM', 'Q', 'D', 'DD', 'DDD', 'DDDD', 'd',
  'E', 'W', 'WW', 'YY', 'YYYY', 'GG', 'GGGG',
  'H', 'HH', 'h', 'hh', 'm', 'mm',
  's', 'ss', 'S', 'SS', 'SSS',
  'Z', 'ZZ', 'X', 'x'
]

function buildFormattingTokensRegExp (formatters) {
  var formatterKeys = []
  for (var key in formatters) {
    if (formatters.hasOwnProperty(key)) {
      formatterKeys.push(key)
    }
  }

  var formattingTokens = commonFormatterKeys
    .concat(formatterKeys)
    .sort()
    .reverse()
  var formattingTokensRegExp = new RegExp(
    '(\\[[^\\[]*\\])|(\\\\)?' + '(' + formattingTokens.join('|') + '|.)', 'g'
  )

  return formattingTokensRegExp
}

module.exports = buildFormattingTokensRegExp


/***/ }),
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (immutable) */ __webpack_exports__["compiler"] = compiler;
/* harmony export (immutable) */ __webpack_exports__["default"] = Markdown;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_unquote__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_unquote___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_unquote__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/* @jsx h */
/**
 * markdown-to-jsx@6 is a fork of [simple-markdown v0.2.2](https://github.com/Khan/simple-markdown)
 * from Khan Academy. Thank you Khan devs for making such an awesome and extensible
 * parsing infra... without it, half of the optimizations here wouldn't be feasible. 🙏🏼
 */



/** TODO: Drop for React 16? */
var ATTRIBUTE_TO_JSX_PROP_MAP = {
    accesskey: 'accessKey',
    allowfullscreen: 'allowFullScreen',
    allowtransparency: 'allowTransparency',
    autocomplete: 'autoComplete',
    autofocus: 'autoFocus',
    autoplay: 'autoPlay',
    cellpadding: 'cellPadding',
    cellspacing: 'cellSpacing',
    charset: 'charSet',
    class: 'className',
    classid: 'classId',
    colspan: 'colSpan',
    contenteditable: 'contentEditable',
    contextmenu: 'contextMenu',
    crossorigin: 'crossOrigin',
    enctype: 'encType',
    for: 'htmlFor',
    formaction: 'formAction',
    formenctype: 'formEncType',
    formmethod: 'formMethod',
    formnovalidate: 'formNoValidate',
    formtarget: 'formTarget',
    frameborder: 'frameBorder',
    hreflang: 'hrefLang',
    inputmode: 'inputMode',
    keyparams: 'keyParams',
    keytype: 'keyType',
    marginheight: 'marginHeight',
    marginwidth: 'marginWidth',
    maxlength: 'maxLength',
    mediagroup: 'mediaGroup',
    minlength: 'minLength',
    novalidate: 'noValidate',
    radiogroup: 'radioGroup',
    readonly: 'readOnly',
    rowspan: 'rowSpan',
    spellcheck: 'spellCheck',
    srcdoc: 'srcDoc',
    srclang: 'srcLang',
    srcset: 'srcSet',
    tabindex: 'tabIndex',
    usemap: 'useMap'
};

var DO_NOT_PROCESS_HTML_ELEMENTS = ['style', 'script'];

/**
 * the attribute extractor regex looks for a valid attribute name,
 * followed by an equal sign (whitespace around the equal sign is allowed), followed
 * by one of the following:
 *
 * 1. a single quote-bounded string, e.g. 'foo'
 * 2. a double quote-bounded string, e.g. "bar"
 * 3. an interpolation, e.g. {something}
 *
 * JSX can be be interpolated into itself and is passed through the compiler using
 * the same options and setup as the current run.
 *
 * <Something children={<SomeOtherThing />} />
 *                      ==================
 *                              ↳ children: [<SomeOtherThing />]
 *
 * Otherwise, interpolations are handled as strings or simple booleans
 * unless HTML syntax is detected.
 *
 * <Something color={green} disabled={true} />
 *                   =====            ====
 *                     ↓                ↳ disabled: true
 *                     ↳ color: "green"
 *
 * Numbers are not parsed at this time due to complexities around int, float,
 * and the upcoming bigint functionality that would make handling it unwieldy.
 * Parse the string in your component as desired.
 *
 * <Something someBigNumber={123456789123456789} />
 *                           ==================
 *                                   ↳ someBigNumber: "123456789123456789"
 */
var ATTR_EXTRACTOR_R = /([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi;

/** TODO: Write explainers for each of these */

var AUTOLINK_MAILTO_CHECK_R = /mailto:/i;
var BLOCK_END_R = /\n{2,}$/;
var BLOCKQUOTE_R = /^( *>[^\n]+(\n[^\n]+)*\n*)+\n{2,}/;
var BLOCKQUOTE_TRIM_LEFT_MULTILINE_R = /^ *> ?/gm;
var BREAK_LINE_R = /^ {2,}\n/;
var BREAK_THEMATIC_R = /^(?:( *[-*_]) *){3,}(?:\n *)+\n/;
var CODE_BLOCK_FENCED_R = /^\s*(`{3,}|~{3,}) *(\S+)? *\n([\s\S]+?)\s*\1 *(?:\n *)+\n/;
var CODE_BLOCK_R = /^(?: {4}[^\n]+\n*)+(?:\n *)+\n/;
var CODE_INLINE_R = /^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/;
var CONSECUTIVE_NEWLINE_R = /^(?:\n *)*\n/;
var CR_NEWLINE_R = /\r\n?/g;
var DETECT_BLOCK_SYNTAX = /(^[-*] |^#+ ?\w|^ {2,}|^-{2,}|^> )/m;
var FOOTNOTE_R = /^\[\^(.*)\](:.*)\n/;
var FOOTNOTE_REFERENCE_R = /^\[\^(.*)\]/;
var FORMFEED_R = /\f/g;
var GFM_TASK_R = /^\s*?\[(x|\s)\]/;
var HEADING_R = /^ *(#{1,6}) *([^\n]+?) *#* *\n+/;
var HEADING_SETEXT_R = /^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/;

/**
 * Explanation:
 *
 * 1. Look for a starting tag, preceeded by any amount of spaces
 *    ^ *<
 *
 * 2. Capture the tag name (capture 1)
 *    ([^ >/]+)
 *
 * 3. Ignore a space after the starting tag and capture the attribute portion of the tag (capture 2)
 *     ?([^>]*)\/{0}>
 *
 * 4. Ensure a matching closing tag is present in the rest of the input string
 *    (?=[\s\S]*<\/\1>)
 *
 * 5. Capture everything until the matching closing tag -- this might include additional pairs
 *    of the same tag type found in step 2 (capture 3)
 *    ((?:[\s\S]*?(?:<\1[^>]*>[\s\S]*?<\/\1>)*[\s\S]*?)*?)<\/\1>
 *
 * 6. Capture excess newlines afterward
 *    \n*
 */
var HTML_BLOCK_ELEMENT_R = /^ *<([A-Za-z][^ >/]*) ?([^>]*)\/{0}>\s*((?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1)[\s\S])*?)<\/\1>\n*/;

var HTML_COMMENT_R = /^<!--.*?-->/;

/**
 * borrowed from React 15(https://github.com/facebook/react/blob/894d20744cba99383ffd847dbd5b6e0800355a5c/src/renderers/dom/shared/HTMLDOMPropertyConfig.js)
 */
var HTML_CUSTOM_ATTR_R = /^(data|aria|x)-[a-z_][a-z\d_.-]*$/;

var HTML_SELF_CLOSING_ELEMENT_R = /^ *<([A-Za-z][\w:]*)\s*((?:<.*?>|[^>])*)>(?!<\/\1>)\s*/;
var INTERPOLATION_R = /^\{.*\}$/;
var LINK_AUTOLINK_BARE_URL_R = /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/;
var LINK_AUTOLINK_MAILTO_R = /^<([^ >]+@[^ >]+)>/;
var LINK_AUTOLINK_R = /^<([^ >]+:\/[^ >]+)>/;
var LIST_ITEM_END_R = / *\n+$/;
var LIST_LOOKBEHIND_R = /(?:^|\n)( *)$/;
var CAPTURE_LETTER_AFTER_HYPHEN = /-([a-z])?/gi;
var NP_TABLE_R = /^(.*\|?.*)\n *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*)\n?/;
var PARAGRAPH_R = /^((?:[^\n]|\n(?! *\n))+)(?:\n *)+\n/;
var REFERENCE_IMAGE_OR_LINK = /^\[([^\]]*)\]:\s*(\S+)\s*("([^"]*)")?/;
var REFERENCE_IMAGE_R = /^!\[([^\]]*)\] ?\[([^\]]*)\]/;
var REFERENCE_LINK_R = /^\[([^\]]*)\] ?\[([^\]]*)\]/;
var SHOULD_RENDER_AS_BLOCK_R = /(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/;
var TAB_R = /\t/g;
var TABLE_TRIM_PIPES = /(^ *\||\| *$)/g;
var TABLE_CENTER_ALIGN = /^ *:-+: *$/;
var TABLE_LEFT_ALIGN = /^ *:-+ *$/;
var TABLE_RIGHT_ALIGN = /^ *-+: *$/;
var TABLE_ROW_SPLIT = / *\| */;
var TEXT_BOLD_R = /^[*_]{2}([\s\S]+?)[*_]{2}(?!\*|_)/;
var TEXT_EMPHASIZED_R = /^[*_]{1}([\s\S]+?)[*_]{1}(?!\*|_)/;
var TEXT_ESCAPED_R = /^\\([^0-9A-Za-z\s])/;
var TEXT_PLAIN_R = /^[\s\S]+?(?=[^0-9A-Z\s\u00c0-\uffff]|\d+\.|\n\n| {2,}\n|\w+:\S|$)/i;
var TEXT_STRIKETHROUGHED_R = /^~~(?=\S)([\s\S]*?\S)~~/;
var TRIM_NEWLINES_AND_TRAILING_WHITESPACE_R = /(^\n+|(\n|\s)+$)/g;

/**
 * Indented-style code blocks cannot be used inside arbitrary HTML at this time because
 * it's not clear if the indentation is intentional or just there from how the composer
 * laid things out.
 */
var TRIM_HTML = /^\s*| {4,}|\s*$/gm;

var UNESCAPE_URL_R = /\\([^0-9A-Z\s])/gi;

// recognize a `*` `-`, `+`, `1.`, `2.`... list bullet
var LIST_BULLET = '(?:[*+-]|\\d+\\.)';

// recognize the start of a list item:
// leading space plus a bullet plus a space (`   * `)
var LIST_ITEM_PREFIX = '( *)(' + LIST_BULLET + ') +';
var LIST_ITEM_PREFIX_R = new RegExp('^' + LIST_ITEM_PREFIX);

// recognize an individual list item:
//  * hi
//    this is part of the same item
//
//    as is this, which is a new paragraph in the same item
//
//  * but this is not part of the same item
var LIST_ITEM_R = new RegExp(LIST_ITEM_PREFIX + '[^\\n]*(?:\\n' + '(?!\\1' + LIST_BULLET + ' )[^\\n]*)*(\\n|$)', 'gm');

// check whether a list item has paragraphs: if it does,
// we leave the newlines at the end
var LIST_R = new RegExp('^( *)(' + LIST_BULLET + ') ' + '[\\s\\S]+?(?:\\n{2,}(?! )' + '(?!\\1' + LIST_BULLET + ' )\\n*' +
// the \\s*$ here is so that we can parse the inside of nested
// lists, where our content might end before we receive two `\n`s
'|\\s*\\n*$)');

var LINK_INSIDE = '(?:\\[[^\\]]*\\]|[^\\[\\]]|\\](?=[^\\[]*\\]))*';
var LINK_HREF_AND_TITLE = '\\s*<?((?:[^\\s\\\\]|\\\\.)*?)>?(?:\\s+[\'"]([\\s\\S]*?)[\'"])?\\s*';

var LINK_R = new RegExp('^\\[(' + LINK_INSIDE + ')\\]\\(' + LINK_HREF_AND_TITLE + '\\)');

var IMAGE_R = new RegExp('^!\\[(' + LINK_INSIDE + ')\\]\\(' + LINK_HREF_AND_TITLE + '\\)');

// based on https://stackoverflow.com/a/18123682/1141611
// not complete, but probably good enough
function slugify(str) {
    return str.replace(/[ÀÁÂÃÄÅàáâãäåæÆ]/g, 'a').replace(/[çÇ]/g, 'c').replace(/[ðÐ]/g, 'd').replace(/[ÈÉÊËéèêë]/g, 'e').replace(/[ÏïÎîÍíÌì]/g, 'i').replace(/[Ññ]/g, 'n').replace(/[øØœŒÕõÔôÓóÒò]/g, 'o').replace(/[ÜüÛûÚúÙù]/g, 'u').replace(/[ŸÿÝý]/g, 'y').replace(/[^a-z0-9- ]/gi, '').replace(/ /gi, '-').toLowerCase();
}

function parseTableAlignCapture(alignCapture) {
    if (TABLE_RIGHT_ALIGN.test(alignCapture)) {
        return 'right';
    } else if (TABLE_CENTER_ALIGN.test(alignCapture)) {
        return 'center';
    } else if (TABLE_LEFT_ALIGN.test(alignCapture)) {
        return 'left';
    }

    return null;
}

function parseTableHeader(capture, parse, state) {
    var headerText = capture[1].replace(TABLE_TRIM_PIPES, '').trim().split(TABLE_ROW_SPLIT);

    return headerText.map(function (text) {
        return parse(text, state);
    });
}

function parseTableAlign(capture /*, parse, state*/) {
    var alignText = capture[2].replace(TABLE_TRIM_PIPES, '').trim().split(TABLE_ROW_SPLIT);

    return alignText.map(parseTableAlignCapture);
}

function parseTableCells(capture, parse, state) {
    var rowsText = capture[3].replace(TABLE_TRIM_PIPES, '').trim().split('\n');

    return rowsText.map(function (rowText) {
        return rowText.replace(TABLE_TRIM_PIPES, '').split(TABLE_ROW_SPLIT).map(function (text) {
            return parse(text.trim(), state);
        });
    });
}

function parseTable(capture, parse, state) {
    state.inline = true;
    var header = parseTableHeader(capture, parse, state);
    var align = parseTableAlign(capture, parse, state);
    var cells = parseTableCells(capture, parse, state);
    state.inline = false;

    return {
        align: align,
        cells: cells,
        header: header,
        type: 'table'
    };
}

function getTableStyle(node, colIndex) {
    return node.align[colIndex] == null ? {} : {
        textAlign: node.align[colIndex]
    };
}

/** TODO: remove for react 16 */
function normalizeAttributeKey(key) {
    var hyphenIndex = key.indexOf('-');

    if (hyphenIndex !== -1 && key.match(HTML_CUSTOM_ATTR_R) === null) {
        key = key.replace(CAPTURE_LETTER_AFTER_HYPHEN, function (_, letter) {
            return letter.toUpperCase();
        });
    }

    return key;
}

function isInterpolation(value) {
    return INTERPOLATION_R.test(value);
}

function attributeValueToJSXPropValue(key, value) {
    if (key === 'style') {
        return value.split(/;\s?/).reduce(function (styles, kvPair) {
            var key = kvPair.slice(0, kvPair.indexOf(':'));

            // snake-case to camelCase
            // also handles PascalCasing vendor prefixes
            var camelCasedKey = key.replace(/(-[a-z])/g, function toUpper(substr) {
                return substr[1].toUpperCase();
            });

            // key.length + 1 to skip over the colon
            styles[camelCasedKey] = kvPair.slice(key.length + 1).trim();

            return styles;
        }, {});
    } else if (isInterpolation(value)) {
        // return as a string and let the consumer decide what to do with it
        value = value.slice(1, value.length - 1);
    }

    if (value === 'true') {
        return true;
    } else if (value === 'false') {
        return false;
    }

    return value;
}

function normalizeWhitespace(source) {
    return source.replace(CR_NEWLINE_R, '\n').replace(FORMFEED_R, '').replace(TAB_R, '    ');
}

/**
 * Creates a parser for a given set of rules, with the precedence
 * specified as a list of rules.
 *
 * @rules: an object containing
 * rule type -> {match, order, parse} objects
 * (lower order is higher precedence)
 * (Note: `order` is added to defaultRules after creation so that
 *  the `order` of defaultRules in the source matches the `order`
 *  of defaultRules in terms of `order` fields.)
 *
 * @returns The resulting parse function, with the following parameters:
 *   @source: the input source string to be parsed
 *   @state: an optional object to be threaded through parse
 *     calls. Allows clients to add stateful operations to
 *     parsing, such as keeping track of how many levels deep
 *     some nesting is. For an example use-case, see passage-ref
 *     parsing in src/widgets/passage/passage-markdown.jsx
 */
function parserFor(rules) {
    // Sorts rules in order of increasing order, then
    // ascending rule name in case of ties.
    var ruleList = Object.keys(rules);

    /* istanbul ignore next */
    if (process.env.NODE_ENV !== 'production') {
        ruleList.forEach(function (type) {
            var order = rules[type].order;
            if (process.env.NODE_ENV !== 'production' && (typeof order !== 'number' || !isFinite(order)) && typeof console !== 'undefined') {
                console.warn('markdown-to-jsx: Invalid order for rule `' + type + '`: ' + order);
            }
        });
    }

    ruleList.sort(function (typeA, typeB) {
        var orderA = rules[typeA].order;
        var orderB = rules[typeB].order;

        // First sort based on increasing order
        if (orderA !== orderB) {
            return orderA - orderB;

            // Then based on increasing unicode lexicographic ordering
        } else if (typeA < typeB) {
            return -1;
        }

        return 1;
    });

    function nestedParse(source, state) {
        var result = [];

        // We store the previous capture so that match functions can
        // use some limited amount of lookbehind. Lists use this to
        // ensure they don't match arbitrary '- ' or '* ' in inline
        // text (see the list rule for more information).
        var prevCapture = '';
        while (source) {
            var i = 0;
            while (i < ruleList.length) {
                var ruleType = ruleList[i];
                var rule = rules[ruleType];
                var capture = rule.match(source, state, prevCapture);

                if (capture) {
                    var currCaptureString = capture[0];
                    source = source.substring(currCaptureString.length);
                    var parsed = rule.parse(capture, nestedParse, state);

                    // We also let rules override the default type of
                    // their parsed node if they would like to, so that
                    // there can be a single output function for all links,
                    // even if there are several rules to parse them.
                    if (parsed.type == null) {
                        parsed.type = ruleType;
                    }

                    result.push(parsed);

                    prevCapture = currCaptureString;
                    break;
                }

                i++;
            }
        }

        return result;
    }

    return function outerParse(source, state) {
        return nestedParse(normalizeWhitespace(source), state);
    };
}

// Creates a match function for an inline scoped or simple element from a regex
function inlineRegex(regex) {
    return function match(source, state) {
        if (state.inline) {
            return regex.exec(source);
        } else {
            return null;
        }
    };
}

// basically any inline element except links
function simpleInlineRegex(regex) {
    return function match(source, state) {
        if (state.inline || state.simple) {
            return regex.exec(source);
        } else {
            return null;
        }
    };
}

// Creates a match function for a block scoped element from a regex
function blockRegex(regex) {
    return function match(source, state) {
        if (state.inline || state.simple) {
            return null;
        } else {
            return regex.exec(source);
        }
    };
}

// Creates a match function from a regex, ignoring block/inline scope
function anyScopeRegex(regex) {
    return function match(source /*, state*/) {
        return regex.exec(source);
    };
}

function reactFor(outputFunc) {
    return function nestedReactOutput(ast, state) {
        state = state || {};
        if (Array.isArray(ast)) {
            var oldKey = state.key;
            var result = [];

            // map nestedOutput over the ast, except group any text
            // nodes together into a single string output.
            var lastWasString = false;

            for (var i = 0; i < ast.length; i++) {
                state.key = i;

                var nodeOut = nestedReactOutput(ast[i], state);
                var isString = typeof nodeOut === 'string';

                if (isString && lastWasString) {
                    result[result.length - 1] += nodeOut;
                } else {
                    result.push(nodeOut);
                }

                lastWasString = isString;
            }

            state.key = oldKey;

            return result;
        }

        return outputFunc(ast, nestedReactOutput, state);
    };
}

function sanitizeUrl(url) {
    try {
        var prot = decodeURIComponent(url).replace(/[^A-Z0-9/:]/gi, '').toLowerCase();

        if (prot.indexOf('javascript:') === 0) {
            return null;
        }
    } catch (e) {
        // decodeURIComponent sometimes throws a URIError
        // See `decodeURIComponent('a%AFc');`
        // http://stackoverflow.com/questions/9064536/javascript-decodeuricomponent-malformed-uri-exception
        return null;
    }

    return url;
}

function unescapeUrl(rawUrlString) {
    return rawUrlString.replace(UNESCAPE_URL_R, '$1');
}

/**
 * Everything inline, including links.
 */
function parseInline(parse, content, state) {
    var isCurrentlyInline = state.inline || false;
    var isCurrentlySimple = state.simple || false;
    state.inline = true;
    state.simple = true;
    var result = parse(content, state);
    state.inline = isCurrentlyInline;
    state.simple = isCurrentlySimple;
    return result;
}

/**
 * Anything inline that isn't a link.
 */
function parseSimpleInline(parse, content, state) {
    var isCurrentlyInline = state.inline || false;
    var isCurrentlySimple = state.simple || false;
    state.inline = false;
    state.simple = true;
    var result = parse(content, state);
    state.inline = isCurrentlyInline;
    state.simple = isCurrentlySimple;
    return result;
}

function parseBlock(parse, content, state) {
    state.inline = false;
    return parse(content + '\n\n', state);
}

function parseCaptureInline(capture, parse, state) {
    return {
        content: parseInline(parse, capture[1], state)
    };
}

function captureNothing() {
    return {};
}
function renderNothing() {
    return null;
}

function ruleOutput(rules) {
    return function nestedRuleOutput(ast, outputFunc, state) {
        return rules[ast.type].react(ast, outputFunc, state);
    };
}

function cx() {
    return Array.prototype.slice.call(arguments).filter(Boolean).join(' ');
}

function get(src, path, fb) {
    var ptr = src;
    var frags = path.split('.');

    while (frags.length) {
        ptr = ptr[frags[0]];

        if (ptr === undefined) break;else frags.shift();
    }

    return ptr || fb;
}

function getTag(tag, overrides) {
    var override = get(overrides, tag);
    return typeof override === 'function' ? override : get(overrides, tag + '.component', tag);
}

/**
 * anything that must scan the tree before everything else
 */
var PARSE_PRIORITY_MAX = 1;

/**
 * scans for block-level constructs
 */
var PARSE_PRIORITY_HIGH = 2;

/**
 * inline w/ more priority than other inline
 */
var PARSE_PRIORITY_MED = 3;

/**
 * inline elements
 */
var PARSE_PRIORITY_LOW = 4;

/**
 * bare text and stuff that is considered leftovers
 */
var PARSE_PRIORITY_MIN = 5;

function compiler(markdown, options) {
    options = options || {};
    options.overrides = options.overrides || {};

    var createElementFn = options.createElement || __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement;

    // eslint-disable-next-line no-unused-vars
    function h(tag, props) {
        var overrideProps = get(options.overrides, tag + '.props', {});

        for (var _len = arguments.length, children = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
            children[_key - 2] = arguments[_key];
        }

        return createElementFn.apply(undefined, [getTag(tag, options.overrides), _extends({}, overrideProps, props, {
            className: cx(props && props.className, overrideProps.className) || undefined
        })].concat(children));
    }

    function compile(input) {
        var inline = false;

        if (options.forceInline) {
            inline = true;
        } else if (!options.forceBlock) {
            /**
             * should not contain any block-level markdown like newlines, lists, headings,
             * thematic breaks, blockquotes, tables, etc
             */
            inline = SHOULD_RENDER_AS_BLOCK_R.test(input) === false;
        }

        var arr = emitter(parser(inline ? input : input.replace(TRIM_NEWLINES_AND_TRAILING_WHITESPACE_R, '') + '\n\n', { inline: inline }));

        var jsx = void 0;
        if (arr.length > 1) {
            jsx = inline ? h(
                'span',
                null,
                arr
            ) : h(
                'div',
                null,
                arr
            );
        } else if (arr.length === 1) {
            jsx = arr[0];

            // TODO: remove this for React 16
            if (typeof jsx === 'string') {
                jsx = h(
                    'span',
                    null,
                    jsx
                );
            }
        } else {
            // TODO: return null for React 16
            jsx = h('span', null);
        }

        return jsx;
    }

    function attrStringToMap(str) {
        var attributes = str.match(ATTR_EXTRACTOR_R);

        return attributes ? attributes.reduce(function (map, raw, index) {
            var delimiterIdx = raw.indexOf('=');

            if (delimiterIdx !== -1) {
                var key = normalizeAttributeKey(raw.slice(0, delimiterIdx)).trim();
                var value = __WEBPACK_IMPORTED_MODULE_1_unquote___default()(raw.slice(delimiterIdx + 1).trim());

                var mappedKey = ATTRIBUTE_TO_JSX_PROP_MAP[key] || key;
                var normalizedValue = map[mappedKey] = attributeValueToJSXPropValue(key, value);

                if (HTML_BLOCK_ELEMENT_R.test(normalizedValue) || HTML_SELF_CLOSING_ELEMENT_R.test(normalizedValue)) {
                    map[mappedKey] = __WEBPACK_IMPORTED_MODULE_0_react___default.a.cloneElement(compile(normalizedValue.trim()), { key: index });
                }
            } else {
                map[ATTRIBUTE_TO_JSX_PROP_MAP[raw] || raw] = true;
            }

            return map;
        }, {}) : undefined;
    }

    /* istanbul ignore next */
    if (process.env.NODE_ENV !== 'production') {
        if (typeof markdown !== 'string') {
            throw new Error('markdown-to-jsx: the first argument must be\n                             a string');
        }

        if (Object.prototype.toString.call(options.overrides) !== '[object Object]') {
            throw new Error('markdown-to-jsx: options.overrides (second argument property) must be\n                             undefined or an object literal with shape:\n                             {\n                                htmltagname: {\n                                    component: string|ReactComponent(optional),\n                                    props: object(optional)\n                                }\n                             }');
        }
    }

    var footnotes = [];
    var refs = {};

    /**
     * each rule's react() output function goes through our custom h() JSX pragma;
     * this allows the override functionality to be automatically applied
     */
    var rules = {
        blockQuote: {
            match: blockRegex(BLOCKQUOTE_R),
            order: PARSE_PRIORITY_HIGH,
            parse: function parse(capture, _parse, state) {
                return {
                    content: _parse(capture[0].replace(BLOCKQUOTE_TRIM_LEFT_MULTILINE_R, ''), state)
                };
            },
            react: function react(node, output, state) {
                return h(
                    'blockquote',
                    { key: state.key },
                    output(node.content, state)
                );
            }
        },

        breakLine: {
            match: anyScopeRegex(BREAK_LINE_R),
            order: PARSE_PRIORITY_HIGH,
            parse: captureNothing,
            react: function react(_, __, state) {
                return h('br', { key: state.key });
            }
        },

        breakThematic: {
            match: blockRegex(BREAK_THEMATIC_R),
            order: PARSE_PRIORITY_HIGH,
            parse: captureNothing,
            react: function react(_, __, state) {
                return h('hr', { key: state.key });
            }
        },

        codeBlock: {
            match: blockRegex(CODE_BLOCK_R),
            order: PARSE_PRIORITY_MAX,
            parse: function parse(capture /*, parse, state*/) {
                var content = capture[0].replace(/^ {4}/gm, '').replace(/\n+$/, '');
                return {
                    content: content,
                    lang: undefined
                };
            },
            react: function react(node, output, state) {
                return h(
                    'pre',
                    { key: state.key },
                    h(
                        'code',
                        { className: node.lang ? 'lang-' + node.lang : '' },
                        node.content
                    )
                );
            }
        },

        codeFenced: {
            match: blockRegex(CODE_BLOCK_FENCED_R),
            order: PARSE_PRIORITY_MAX,
            parse: function parse(capture /*, parse, state*/) {
                return {
                    content: capture[3],
                    lang: capture[2] || undefined,
                    type: 'codeBlock'
                };
            }
        },

        codeInline: {
            match: simpleInlineRegex(CODE_INLINE_R),
            order: PARSE_PRIORITY_LOW,
            parse: function parse(capture /*, parse, state*/) {
                return {
                    content: capture[2]
                };
            },
            react: function react(node, output, state) {
                return h(
                    'code',
                    { key: state.key },
                    node.content
                );
            }
        },

        /**
         * footnotes are emitted at the end of compilation in a special <footer> block
         */
        footnote: {
            match: blockRegex(FOOTNOTE_R),
            order: PARSE_PRIORITY_MAX,
            parse: function parse(capture /*, parse, state*/) {
                footnotes.push({
                    footnote: capture[2],
                    identifier: capture[1]
                });

                return {};
            },

            react: renderNothing
        },

        footnoteReference: {
            match: inlineRegex(FOOTNOTE_REFERENCE_R),
            order: PARSE_PRIORITY_HIGH,
            parse: function parse(capture /*, parse*/) {
                return {
                    content: capture[1],
                    target: '#' + capture[1]
                };
            },
            react: function react(node, output, state) {
                return h(
                    'a',
                    { key: state.key, href: sanitizeUrl(node.target) },
                    h(
                        'sup',
                        { key: state.key },
                        node.content
                    )
                );
            }
        },

        gfmTask: {
            match: inlineRegex(GFM_TASK_R),
            order: PARSE_PRIORITY_HIGH,
            parse: function parse(capture /*, parse, state*/) {
                return {
                    completed: capture[1].toLowerCase() === 'x'
                };
            },
            react: function react(node, output, state) {
                return h('input', {
                    checked: node.completed,
                    key: state.key,
                    readOnly: true,
                    type: 'checkbox'
                });
            }
        },

        heading: {
            match: blockRegex(HEADING_R),
            order: PARSE_PRIORITY_HIGH,
            parse: function parse(capture, _parse2, state) {
                return {
                    content: parseInline(_parse2, capture[2], state),
                    id: slugify(capture[2]),
                    level: capture[1].length
                };
            },
            react: function react(node, output, state) {
                var Tag = 'h' + node.level;
                return h(
                    Tag,
                    { id: node.id, key: state.key },
                    output(node.content, state)
                );
            }
        },

        headingSetext: {
            match: blockRegex(HEADING_SETEXT_R),
            order: PARSE_PRIORITY_MAX,
            parse: function parse(capture, _parse3, state) {
                return {
                    content: parseInline(_parse3, capture[1], state),
                    level: capture[2] === '=' ? 1 : 2,
                    type: 'heading'
                };
            }
        },

        htmlBlock: {
            /**
             * find the first matching end tag and process the interior
             */
            match: anyScopeRegex(HTML_BLOCK_ELEMENT_R),
            order: PARSE_PRIORITY_HIGH,
            parse: function parse(capture, _parse4, state) {
                var trimmed = capture[3].replace(TRIM_HTML, '');
                var parseFunc = DETECT_BLOCK_SYNTAX.test(trimmed) ? parseBlock : parseInline;

                var noInnerParse = DO_NOT_PROCESS_HTML_ELEMENTS.indexOf(capture[1]) !== -1;

                return {
                    attrs: attrStringToMap(capture[2]),
                    /**
                     * if another html block is detected within, parse as block,
                     * otherwise parse as inline to pick up any further markdown
                     */
                    content: noInnerParse ? capture[3] : parseFunc(_parse4, trimmed, state),

                    noInnerParse: noInnerParse,

                    tag: capture[1]
                };
            },
            react: function react(node, output, state) {
                return h(
                    node.tag,
                    _extends({ key: state.key }, node.attrs),
                    node.noInnerParse ? node.content : output(node.content, state)
                );
            }
        },

        htmlComment: {
            match: anyScopeRegex(HTML_COMMENT_R),
            order: PARSE_PRIORITY_HIGH,
            parse: function parse() {
                return {};
            },

            react: renderNothing
        },

        htmlSelfClosing: {
            /**
             * find the first matching end tag and process the interior
             */
            match: anyScopeRegex(HTML_SELF_CLOSING_ELEMENT_R),
            order: PARSE_PRIORITY_HIGH,
            parse: function parse(capture /*, parse, state*/) {
                return {
                    attrs: attrStringToMap(capture[2]),
                    tag: capture[1]
                };
            },
            react: function react(node, output, state) {
                return h(node.tag, _extends({}, node.attrs, { key: state.key }));
            }
        },

        image: {
            match: simpleInlineRegex(IMAGE_R),
            order: PARSE_PRIORITY_HIGH,
            parse: function parse(capture /*, parse, state*/) {
                return {
                    alt: capture[1],
                    target: unescapeUrl(capture[2]),
                    title: capture[3]
                };
            },
            react: function react(node, output, state) {
                return h('img', {
                    key: state.key,
                    alt: node.alt || undefined,
                    title: node.title || undefined,
                    src: sanitizeUrl(node.target)
                });
            }
        },

        link: {
            match: inlineRegex(LINK_R, false),
            order: PARSE_PRIORITY_LOW,
            parse: function parse(capture, _parse5, state) {
                return {
                    content: parseSimpleInline(_parse5, capture[1], state),
                    target: unescapeUrl(capture[2]),
                    title: capture[3]
                };
            },
            react: function react(node, output, state) {
                return h(
                    'a',
                    {
                        key: state.key,
                        href: sanitizeUrl(node.target),
                        title: node.title
                    },
                    output(node.content, state)
                );
            }
        },

        // https://daringfireball.net/projects/markdown/syntax#autolink
        linkAngleBraceStyleDetector: {
            match: inlineRegex(LINK_AUTOLINK_R),
            order: PARSE_PRIORITY_MAX,
            parse: function parse(capture /*, parse, state*/) {
                return {
                    content: [{
                        content: capture[1],
                        type: 'text'
                    }],
                    target: capture[1],
                    type: 'link'
                };
            }
        },

        linkBareUrlDetector: {
            match: inlineRegex(LINK_AUTOLINK_BARE_URL_R),
            order: PARSE_PRIORITY_MAX,
            parse: function parse(capture /*, parse, state*/) {
                return {
                    content: [{
                        content: capture[1],
                        type: 'text'
                    }],
                    target: capture[1],
                    title: undefined,
                    type: 'link'
                };
            }
        },

        linkMailtoDetector: {
            match: inlineRegex(LINK_AUTOLINK_MAILTO_R),
            order: PARSE_PRIORITY_MAX,
            parse: function parse(capture /*, parse, state*/) {
                var address = capture[1];
                var target = capture[1];

                // Check for a `mailto:` already existing in the link:
                if (!AUTOLINK_MAILTO_CHECK_R.test(target)) {
                    target = 'mailto:' + target;
                }

                return {
                    content: [{
                        content: address.replace('mailto:', ''),
                        type: 'text'
                    }],
                    target: target,
                    type: 'link'
                };
            }
        },

        list: {
            match: function match(source, state, prevCapture) {
                // We only want to break into a list if we are at the start of a
                // line. This is to avoid parsing "hi * there" with "* there"
                // becoming a part of a list.
                // You might wonder, "but that's inline, so of course it wouldn't
                // start a list?". You would be correct! Except that some of our
                // lists can be inline, because they might be inside another list,
                // in which case we can parse with inline scope, but need to allow
                // nested lists inside this inline scope.
                var isStartOfLine = LIST_LOOKBEHIND_R.exec(prevCapture);
                var isListBlock = state._list || !state.inline;

                if (isStartOfLine && isListBlock) {
                    source = isStartOfLine[1] + source;

                    return LIST_R.exec(source);
                } else {
                    return null;
                }
            },

            order: PARSE_PRIORITY_HIGH,
            parse: function parse(capture, _parse6, state) {
                var bullet = capture[2];
                var ordered = bullet.length > 1;
                var start = ordered ? +bullet : undefined;
                var items = capture[0]
                // recognize the end of a paragraph block inside a list item:
                // two or more newlines at end end of the item
                .replace(BLOCK_END_R, '\n').match(LIST_ITEM_R);

                var lastItemWasAParagraph = false;
                var itemContent = items.map(function (item, i) {
                    // We need to see how far indented the item is:
                    var space = LIST_ITEM_PREFIX_R.exec(item)[0].length;

                    // And then we construct a regex to "unindent" the subsequent
                    // lines of the items by that amount:
                    var spaceRegex = new RegExp('^ {1,' + space + '}', 'gm');

                    // Before processing the item, we need a couple things
                    var content = item
                    // remove indents on trailing lines:
                    .replace(spaceRegex, '')
                    // remove the bullet:
                    .replace(LIST_ITEM_PREFIX_R, '');

                    // Handling "loose" lists, like:
                    //
                    //  * this is wrapped in a paragraph
                    //
                    //  * as is this
                    //
                    //  * as is this
                    var isLastItem = i === items.length - 1;
                    var containsBlocks = content.indexOf('\n\n') !== -1;

                    // Any element in a list is a block if it contains multiple
                    // newlines. The last element in the list can also be a block
                    // if the previous item in the list was a block (this is
                    // because non-last items in the list can end with \n\n, but
                    // the last item can't, so we just "inherit" this property
                    // from our previous element).
                    var thisItemIsAParagraph = containsBlocks || isLastItem && lastItemWasAParagraph;
                    lastItemWasAParagraph = thisItemIsAParagraph;

                    // backup our state for restoration afterwards. We're going to
                    // want to set state._list to true, and state.inline depending
                    // on our list's looseness.
                    var oldStateInline = state.inline;
                    var oldStateList = state._list;
                    state._list = true;

                    // Parse inline if we're in a tight list, or block if we're in
                    // a loose list.
                    var adjustedContent = void 0;
                    if (thisItemIsAParagraph) {
                        state.inline = false;
                        adjustedContent = content.replace(LIST_ITEM_END_R, '\n\n');
                    } else {
                        state.inline = true;
                        adjustedContent = content.replace(LIST_ITEM_END_R, '');
                    }

                    var result = _parse6(adjustedContent, state);

                    // Restore our state before returning
                    state.inline = oldStateInline;
                    state._list = oldStateList;

                    return result;
                });

                return {
                    items: itemContent,
                    ordered: ordered,
                    start: start
                };
            },
            react: function react(node, output, state) {
                var Tag = node.ordered ? 'ol' : 'ul';

                return h(
                    Tag,
                    { key: state.key, start: node.start },
                    node.items.map(function generateListItem(item, i) {
                        return h(
                            'li',
                            { key: i },
                            output(item, state)
                        );
                    })
                );
            }
        },

        newlineCoalescer: {
            match: blockRegex(CONSECUTIVE_NEWLINE_R),
            order: PARSE_PRIORITY_LOW,
            parse: captureNothing,
            react: function react() /*node, output, state*/{
                return '\n';
            }
        },

        paragraph: {
            match: blockRegex(PARAGRAPH_R),
            order: PARSE_PRIORITY_LOW,
            parse: parseCaptureInline,
            react: function react(node, output, state) {
                return h(
                    'p',
                    { key: state.key },
                    output(node.content, state)
                );
            }
        },

        ref: {
            match: inlineRegex(REFERENCE_IMAGE_OR_LINK),
            order: PARSE_PRIORITY_MAX,
            parse: function parse(capture /*, parse*/) {
                refs[capture[1]] = {
                    target: capture[2],
                    title: capture[4]
                };

                return {};
            },

            react: renderNothing
        },

        refImage: {
            match: simpleInlineRegex(REFERENCE_IMAGE_R),
            order: PARSE_PRIORITY_MAX,
            parse: function parse(capture) {
                return {
                    alt: capture[1] || undefined,
                    ref: capture[2]
                };
            },
            react: function react(node, output, state) {
                return h('img', {
                    key: state.key,
                    alt: node.alt,
                    src: sanitizeUrl(refs[node.ref].target),
                    title: refs[node.ref].title
                });
            }
        },

        refLink: {
            match: inlineRegex(REFERENCE_LINK_R),
            order: PARSE_PRIORITY_MAX,
            parse: function parse(capture, _parse7, state) {
                return {
                    content: _parse7(capture[1], state),
                    ref: capture[2]
                };
            },
            react: function react(node, output, state) {
                return h(
                    'a',
                    {
                        key: state.key,
                        href: sanitizeUrl(refs[node.ref].target),
                        title: refs[node.ref].title
                    },
                    output(node.content, state)
                );
            }
        },

        table: {
            match: blockRegex(NP_TABLE_R),
            order: PARSE_PRIORITY_HIGH,
            parse: parseTable,
            react: function react(node, output, state) {
                return h(
                    'table',
                    { key: state.key },
                    h(
                        'thead',
                        null,
                        h(
                            'tr',
                            null,
                            node.header.map(function generateHeaderCell(content, i) {
                                return h(
                                    'th',
                                    {
                                        key: i,
                                        style: getTableStyle(node, i),
                                        scope: 'col'
                                    },
                                    output(content, state)
                                );
                            })
                        )
                    ),
                    h(
                        'tbody',
                        null,
                        node.cells.map(function generateTableRow(row, i) {
                            return h(
                                'tr',
                                { key: i },
                                row.map(function generateTableCell(content, c) {
                                    return h(
                                        'td',
                                        {
                                            key: c,
                                            style: getTableStyle(node, c)
                                        },
                                        output(content, state)
                                    );
                                })
                            );
                        })
                    )
                );
            }
        },

        text: {
            // Here we look for anything followed by non-symbols,
            // double newlines, or double-space-newlines
            // We break on any symbol characters so that this grammar
            // is easy to extend without needing to modify this regex
            match: anyScopeRegex(TEXT_PLAIN_R),
            order: PARSE_PRIORITY_MIN,
            parse: function parse(capture /*, parse, state*/) {
                return {
                    content: capture[0]
                };
            },
            react: function react(node /*, output, state*/) {
                return node.content;
            }
        },

        textBolded: {
            match: simpleInlineRegex(TEXT_BOLD_R),
            order: PARSE_PRIORITY_MED,
            parse: parseCaptureInline,
            react: function react(node, output, state) {
                return h(
                    'strong',
                    { key: state.key },
                    output(node.content, state)
                );
            }
        },

        textEmphasized: {
            match: simpleInlineRegex(TEXT_EMPHASIZED_R),
            order: PARSE_PRIORITY_LOW,
            parse: function parse(capture, _parse8, state) {
                return {
                    content: _parse8(capture[2] || capture[1], state)
                };
            },
            react: function react(node, output, state) {
                return h(
                    'em',
                    { key: state.key },
                    output(node.content, state)
                );
            }
        },

        textEscaped: {
            // We don't allow escaping numbers, letters, or spaces here so that
            // backslashes used in plain text still get rendered. But allowing
            // escaping anything else provides a very flexible escape mechanism,
            // regardless of how this grammar is extended.
            match: simpleInlineRegex(TEXT_ESCAPED_R),
            order: PARSE_PRIORITY_HIGH,
            parse: function parse(capture /*, parse, state*/) {
                return {
                    content: capture[1],
                    type: 'text'
                };
            }
        },

        textStrikethroughed: {
            match: simpleInlineRegex(TEXT_STRIKETHROUGHED_R),
            order: PARSE_PRIORITY_LOW,
            parse: parseCaptureInline,
            react: function react(node, output, state) {
                return h(
                    'del',
                    { key: state.key },
                    output(node.content, state)
                );
            }
        }
    };

    // Object.keys(rules).forEach(key => {
    //     let parse = rules[key].parse;

    //     rules[key].parse = (...args) => {
    //         console.log(key, args[0]);
    //         return parse(...args);
    //     };
    // });

    var parser = parserFor(rules);
    var emitter = reactFor(ruleOutput(rules));

    var jsx = compile(markdown);

    if (footnotes.length) {
        jsx.props.children.push(h(
            'footer',
            null,
            footnotes.map(function createFootnote(def) {
                return h(
                    'div',
                    { id: def.identifier, key: def.identifier },
                    def.identifier,
                    emitter(parser(def.footnote, { inline: true }))
                );
            })
        ));
    }

    return jsx;
}

/**
 * A simple HOC for easy React use. Feed the markdown content as a direct child
 * and the rest is taken care of automatically.
 *
 * @param  {String}   options.children   must be a string
 * @param  {Object}   options.options    markdown-to-jsx options (arg 2 of the compiler)
 *
 * @return {ReactElement} the compiled JSX
 */

function Markdown(_ref) {
    var children = _ref.children,
        options = _ref.options,
        props = _objectWithoutProperties(_ref, ['children', 'options']);

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.cloneElement(compiler(children, options), props);
}

if (process.env.NODE_ENV !== 'production') {
    var PropTypes = __webpack_require__(21);

    Markdown.propTypes = {
        children: PropTypes.string.isRequired,
        options: PropTypes.object
    };
}

//# sourceMappingURL=index.esm.js.map
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(6)))

/***/ }),
/* 96 */
/***/ (function(module, exports) {

var reg = /[\'\"]/

module.exports = function unquote(str) {
  if (!str) {
    return ''
  }
  if (reg.test(str.charAt(0))) {
    str = str.substr(1)
  }
  if (reg.test(str.charAt(str.length - 1))) {
    str = str.substr(0, str.length - 1)
  }
  return str
}


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _v = __webpack_require__(30);

var _v2 = _interopRequireDefault(_v);

var _elem = __webpack_require__(3);

var _elem2 = _interopRequireDefault(_elem);

var _FileLink = __webpack_require__(100);

var _FileLink2 = _interopRequireDefault(_FileLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cmz = __webpack_require__(1);

var Root = _elem2.default.div();

var FileLinkWrapper = _elem2.default.div(cmz.named('AutoUI_ui_FileLinks-17', /*cmz|*/'\n  margin: 0 0 10px\n' /*|cmz*/));

var FileLinks = function (_PureComponent) {
  _inherits(FileLinks, _PureComponent);

  function FileLinks() {
    _classCallCheck(this, FileLinks);

    return _possibleConstructorReturn(this, (FileLinks.__proto__ || Object.getPrototypeOf(FileLinks)).apply(this, arguments));
  }

  _createClass(FileLinks, [{
    key: 'render',
    value: function render() {
      var files = this.props.files;


      return Root(files && files.map(function (file) {
        return FileLinkWrapper({ key: (0, _v2.default)() }, _react2.default.createElement(_FileLink2.default, { path: file.path, name: file.filename }));
      }));
    }
  }]);

  return FileLinks;
}(_react.PureComponent);

exports.default = FileLinks;

/***/ }),
/* 98 */
/***/ (function(module, exports) {

// Unique ID creation requires a high quality random # generator.  In the
// browser this is a little complicated due to unknown quality of Math.random()
// and inconsistent support for the `crypto` API.  We do the best we can via
// feature-detection

// getRandomValues needs to be invoked in a context where "this" is a Crypto implementation.
var getRandomValues = (typeof(crypto) != 'undefined' && crypto.getRandomValues.bind(crypto)) ||
                      (typeof(msCrypto) != 'undefined' && msCrypto.getRandomValues.bind(msCrypto));
if (getRandomValues) {
  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
  var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef

  module.exports = function whatwgRNG() {
    getRandomValues(rnds8);
    return rnds8;
  };
} else {
  // Math.random()-based (RNG)
  //
  // If all else fails, use Math.random().  It's fast, but is of unspecified
  // quality.
  var rnds = new Array(16);

  module.exports = function mathRNG() {
    for (var i = 0, r; i < 16; i++) {
      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
    }

    return rnds;
  };
}


/***/ }),
/* 99 */
/***/ (function(module, exports) {

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex;
  return bth[buf[i++]] + bth[buf[i++]] +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] +
          bth[buf[i++]] + bth[buf[i++]] +
          bth[buf[i++]] + bth[buf[i++]];
}

module.exports = bytesToUuid;


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _elem = __webpack_require__(3);

var _elem2 = _interopRequireDefault(_elem);

var _theme = __webpack_require__(2);

var _theme2 = _interopRequireDefault(_theme);

var _typo = __webpack_require__(4);

var _typo2 = _interopRequireDefault(_typo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cmz = __webpack_require__(1);

var Root = _elem2.default.div(cmz.named('AutoUI_ui_FileLink-16', /*cmz|*/'\n  display: flex\n' /*|cmz*/));

var LinkWrapper = _elem2.default.div(cmz.named('AutoUI_ui_FileLink-20', _typo2.default.baseText, ' & a {\n      font-size: 16px\n      color: ' + _theme2.default.baseRed + '\n      text-decoration: none\n    }\n\n    & a:hover {\n      text-decoration: underline\n    }\n  '));

var FileLink = function (_PureComponent) {
  _inherits(FileLink, _PureComponent);

  function FileLink() {
    _classCallCheck(this, FileLink);

    return _possibleConstructorReturn(this, (FileLink.__proto__ || Object.getPrototypeOf(FileLink)).apply(this, arguments));
  }

  _createClass(FileLink, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          path = _props.path,
          name = _props.name;


      return Root(LinkWrapper(_react2.default.createElement(
        'a',
        { href: path, target: '_blank' },
        name || 'View Attachment'
      )));
    }
  }]);

  return FileLink;
}(_react.PureComponent);

exports.default = FileLink;

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _v = __webpack_require__(30);

var _v2 = _interopRequireDefault(_v);

var _elem = __webpack_require__(3);

var _elem2 = _interopRequireDefault(_elem);

var _Note = __webpack_require__(27);

var _Note2 = _interopRequireDefault(_Note);

var _Button = __webpack_require__(8);

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cmz = __webpack_require__(1);

var Root = _elem2.default.div();

var NoteWrapper = _elem2.default.div(cmz.named('AutoUI_ui_NotesFeed-23', /*cmz|*/'\n  margin: 0 0 40px\n' /*|cmz*/));

var buttonClass = cmz.named('AutoUI_ui_NotesFeed-27', /*cmz|*/'\n  width: 100%\n' /*|cmz*/);

var NotesFeed = function (_PureComponent) {
  _inherits(NotesFeed, _PureComponent);

  function NotesFeed() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, NotesFeed);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = NotesFeed.__proto__ || Object.getPrototypeOf(NotesFeed)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      page: 1,
      perPage: 2
    }, _this.viewMore = function () {
      return _this.setState(function (prevState) {
        return { page: prevState.page + 1 };
      });
    }, _this.showViewMore = function () {
      var total = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var _this$state = _this.state,
          page = _this$state.page,
          perPage = _this$state.perPage;

      return total / perPage > page;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(NotesFeed, [{
    key: 'render',
    value: function render() {
      var _state = this.state,
          page = _state.page,
          perPage = _state.perPage;
      var notes = this.props.notes;


      return Root(notes && notes.filter(function (note, i) {
        return page * perPage > i;
      }).map(function (note) {
        return NoteWrapper({
          key: (0, _v2.default)()
        }, _react2.default.createElement(_Note2.default, {
          avatar: note.author_avatar,
          date: note.updated_at,
          name: note.author_name,
          text: note.body,
          files: note.files
        }));
      }), this.showViewMore(notes && notes.length) && _react2.default.createElement(
        _Button2.default,
        {
          outlined: true,
          block: true,
          color: 'silver',
          onClick: this.viewMore,
          className: buttonClass,
          type: 'button'
        },
        'View more'
      ));
    }
  }]);

  return NotesFeed;
}(_react.PureComponent);

exports.default = NotesFeed;

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(103);

var _RoadmapTimelineElement = __webpack_require__(31);

var _RoadmapTimelineElement2 = _interopRequireDefault(_RoadmapTimelineElement);

var _elem = __webpack_require__(3);

var _elem2 = _interopRequireDefault(_elem);

var _helpers = __webpack_require__(25);

var _theme = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cmz = __webpack_require__(1);

var overlap = 300;

var columnClassName = cmz.named('AutoUI_ui_Roadmap-27', /*cmz|*/'\n  display: flex\n  flex-direction: column\n' /*|cmz*/);

var breakpoints = {
  small: '@media screen and (max-width: ' + _theme.breakpoints.sm + ')'
};

var Root = _elem2.default.div(cmz.named('AutoUI_ui_Roadmap-36', columnClassName));

var Level = _elem2.default.div(cmz.named('AutoUI_ui_Roadmap-40', columnClassName, '\n    & {\n      position: relative\n      width: 100%\n      margin-top: -' + overlap + 'px\n      min-height: ' + overlap * 2 + 'px\n      padding: 10px 0\n    }\n\n    &:first-child {\n      margin-top: 0\n    }\n\n    &:last-child {\n      align-items: center\n      margin-top: 0\n      padding-top: 80px\n    }\n\n    &:nth-child(even) {\n      align-items: flex-end\n    }\n\n    ' + breakpoints.small + ' {\n      & {\n        min-height: auto\n      }\n\n      &,\n      &:first-child {\n        margin: 40px 0 0 0\n      }\n\n      &,\n      &:nth-child(even) {\n        align-items: center\n      }\n    }\n  '));

var Box = _elem2.default.div(cmz.named('AutoUI_ui_Roadmap-83', '\n  & {\n    width: 45%\n    min-height: 2rem\n    z-index: 2\n  }\n\n  .isFinal & {\n    width: auto\n    padding-left: 6rem\n    padding-right: 6rem\n  }\n\n  ' + breakpoints.small + ' {\n    & {\n      width: 90%\n    }\n\n    .isFinal & {\n      width: 90%\n      padding-left: 0\n      padding-right: 0\n    }\n  }\n'));

var Line = _elem2.default.div(cmz.named('AutoUI_ui_Roadmap-109', '\n  & {\n    width: 1px\n    height: auto\n    position: absolute\n    top: 10px\n    bottom: ' + (overlap + 7) + 'px\n    left: 50%\n    margin-left: -8px\n    z-index: 1\n  }\n\n  .isSecondLast & {\n    bottom: 0\n  }\n\n  .isFinal & {\n    top: 17px\n    height: 20px\n  }\n\n  ' + breakpoints.small + ' {\n    & {\n      display: none\n    }\n  }\n'));

var Roadmap = function (_PureComponent) {
  _inherits(Roadmap, _PureComponent);

  function Roadmap() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Roadmap);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Roadmap.__proto__ || Object.getPrototypeOf(Roadmap)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      activeVisible: 0
    }, _this.levelEl = [], _this.throttledScrollHandler = function () {}, _this.handleDocumentScroll = function () {
      _this.levelEl.forEach(function (element, index) {
        var elNode = (0, _reactDom.findDOMNode)(element);
        if ((0, _helpers.isScrolledIntoView)(elNode)) {
          _this.setState({ activeVisible: index });
        }
      });
    }, _this.renderRoadmap = function () {
      var activeVisible = _this.state.activeVisible;
      var children = _this.props.children;

      var childrenCount = _react.Children.count(children);

      return _react.Children.map(children, function (child, index) {
        var isLastChild = index === childrenCount - 1;
        var isSecondLastChild = index === childrenCount - 2;

        var isActiveRoadmapLevel = index === activeVisible;
        var isActiveTimelineElement = index <= activeVisible;

        var timelineElement = Line(_react2.default.createElement(_RoadmapTimelineElement2.default, { isDone: isActiveTimelineElement }));

        return Level({
          className: [isSecondLastChild && 'isSecondLast', isLastChild && 'isFinal']
        }, Box({
          ref: function ref(node) {
            _this.levelEl[index] = node;
          }
        }, _react2.default.cloneElement(child, { isActive: isActiveRoadmapLevel })), timelineElement);
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Roadmap, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.throttledScrollHandler = (0, _helpers.throttle)(this.handleDocumentScroll, 350);
      window.addEventListener('scroll', this.throttledScrollHandler);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('scroll', this.throttledScrollHandler);
    }
  }, {
    key: 'render',
    value: function render() {
      return Root(this.renderRoadmap());
    }
  }]);

  return Roadmap;
}(_react.PureComponent);

Roadmap.defaultProps = {
  children: null
};
exports.default = Roadmap;

/***/ }),
/* 103 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Text = __webpack_require__(9);

var _Text2 = _interopRequireDefault(_Text);

var _theme = __webpack_require__(2);

var _elem = __webpack_require__(3);

var _elem2 = _interopRequireDefault(_elem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cmz = __webpack_require__(1);

var Root = _elem2.default.div(cmz.named('AutoUI_ui_RoadmapHero-25', '\n  & {\n    display: flex\n    flex-wrap: wrap\n    justify-content: space-around\n  }\n\n  @media screen and (max-width: ' + _theme.breakpoints.sm + ') {\n    & {\n      margin: 0 0 35px 0\n    }\n  }\n'));

var HeroHeading = _elem2.default.div(cmz.named('AutoUI_ui_RoadmapHero-39', '\n    & {\n      width: 60%\n    }\n    \n    @media screen and (max-width: ' + _theme.breakpoints.sm + ') {\n      & {\n        margin: 35px 0 \n        width: 85%\n      }\n    }\n'));
var HeroImage = _elem2.default.img();

var RoadmapHero = function (_PureComponent) {
  _inherits(RoadmapHero, _PureComponent);

  function RoadmapHero() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, RoadmapHero);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = RoadmapHero.__proto__ || Object.getPrototypeOf(RoadmapHero)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      isCentered: false
    }, _this.updateAlignment = function () {
      var mq = window.matchMedia('(max-width: ' + _theme.breakpoints.xs + ')');
      _this.setState({ isCentered: !!mq.matches });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(RoadmapHero, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      window.addEventListener('resize', this.updateAlignment);
      this.updateAlignment();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.updateAlignment);
    }
  }, {
    key: 'render',
    value: function render() {
      var isCentered = this.state.isCentered;
      var _props = this.props,
          heading = _props.heading,
          content = _props.content,
          imgUrl = _props.imgUrl,
          hasDivider = _props.hasDivider;


      return Root(HeroHeading(_react2.default.createElement(_Text2.default, { heading: heading, content: content, hasDivider: hasDivider, headingType: 'mainHeading', isCentered: isCentered })), HeroImage({
        src: imgUrl,
        alt: 'X-Team Roadmap'
      }));
    }
  }]);

  return RoadmapHero;
}(_react.PureComponent);

RoadmapHero.defaultProps = {
  imgUrl: __webpack_require__(105),
  hasDivider: true
};
exports.default = RoadmapHero;

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "9b763a8d6b786b4bae25e47d04bcff97.png";

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SvgIcon = __webpack_require__(5);

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

var _Text = __webpack_require__(9);

var _Text2 = _interopRequireDefault(_Text);

var _Button = __webpack_require__(8);

var _Button2 = _interopRequireDefault(_Button);

var _elem = __webpack_require__(3);

var _elem2 = _interopRequireDefault(_elem);

var _theme = __webpack_require__(2);

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cmz = __webpack_require__(1);

var Root = _elem2.default.section(cmz.named('AutoUI_ui_RoadmapLevel-31', '\n  & {\n    border: 1px solid ' + _theme2.default.lineSilver1 + ';\n    padding: 2.5rem;\n  }\n\n  &:first-child {\n    margin-top: 0;\n  }\n\n  &:last-child {\n    margin-bottom: 0;\n  }\n'));

var active = cmz.named('AutoUI_ui_RoadmapLevel-46', 'border: 1px solid ' + _theme2.default.lineRed);
var centered = cmz.named('AutoUI_ui_RoadmapLevel-47', /*cmz|*/'\n  text-align: center;\n  border: none;\n' /*|cmz*/);
var ctaButtonStyles = cmz.named('AutoUI_ui_RoadmapLevel-51', /*cmz|*/'margin-top: 3rem' /*|cmz*/);

var RoadmapLevel = function (_PureComponent) {
  _inherits(RoadmapLevel, _PureComponent);

  function RoadmapLevel() {
    _classCallCheck(this, RoadmapLevel);

    return _possibleConstructorReturn(this, (RoadmapLevel.__proto__ || Object.getPrototypeOf(RoadmapLevel)).apply(this, arguments));
  }

  _createClass(RoadmapLevel, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          icon = _props.icon,
          heading = _props.heading,
          level = _props.level,
          body = _props.body,
          isActive = _props.isActive,
          isCentered = _props.isCentered,
          cta = _props.cta;


      if (!icon && !heading && !level && !body) {
        return null;
      }

      var buttonCTA = cta.label && _react2.default.createElement(
        _Button2.default,
        { className: ctaButtonStyles, block: true, onClick: cta.handle, 'data-test': 'roadmapStart' },
        cta.label
      );
      var levelLabel = level ? 'Level ' + level : '';

      return Root({
        className: [isActive && active, isCentered && centered]
      }, _react2.default.createElement(_SvgIcon2.default, {
        icon: icon
      }), _react2.default.createElement(_Text2.default, {
        subHeading: heading,
        level: levelLabel,
        content: body,
        isCentered: isCentered,
        subHeadingType: 'heading'
      }), buttonCTA);
    }
  }]);

  return RoadmapLevel;
}(_react.PureComponent);

RoadmapLevel.defaultProps = {
  heading: '',
  level: 0,
  body: '',
  isActive: false,
  isCentered: false,
  cta: {
    label: '',
    handle: function handle() {}
  }
};
exports.default = RoadmapLevel;

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _InputField = __webpack_require__(16);

var _InputField2 = _interopRequireDefault(_InputField);

var _SvgIcon = __webpack_require__(5);

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

var _Dropdown = __webpack_require__(12);

var _Dropdown2 = _interopRequireDefault(_Dropdown);

var _typo = __webpack_require__(4);

var _typo2 = _interopRequireDefault(_typo);

var _theme = __webpack_require__(2);

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cmz = __webpack_require__(1);

var styles = {
  selectbox: cmz.named('AutoUI_ui_SelectBox-15', '\n    background: ' + _theme2.default.baseBrighter + '\n    position: relative\n    width: 100%\n  '),
  dropdown: cmz.named('AutoUI_ui_SelectBox-20', /*cmz|*/'\n    width: 100%\n  ' /*|cmz*/),
  placeholder: cmz.named('AutoUI_ui_SelectBox-23', _typo2.default.baseText, '\n      border: 1px solid ' + _theme2.default.lineSilver2 + '\n      padding: 0 20px\n      height: 60px\n      width: 100%\n      box-sizing: border-box\n      display: flex\n      align-items: center\n      position: relative\n      border-radius: 2px\n    '),
  selects: cmz.named('AutoUI_ui_SelectBox-37', '\n    & {\n      width: 100%\n    }\n\n    & > div {\n      display: block\n      line-height: 1.1\n    }\n\n    & > div:first-of-type {\n      font-size: 15px\n      color: ' + _theme2.default.typoLabel + '\n      padding: 10px 0 0\n      transition: color 0.15s ease-out, font-size 0.15s ease-out\n    }\n\n    & > div:last-of-type {\n      width: calc(100% - 20px)\n      white-space: nowrap\n      overflow: auto\n      padding: 0 0 10px\n      transition: visibility 0s, opacity 0.15s ease-out, padding 0.15s ease-out\n      visibility: visible\n      opacity: 1\n    }\n  '),
  selectsEmpty: cmz.named('AutoUI_ui_SelectBox-64', /*cmz|*/'\n    & > div:first-of-type {\n      transition: color 0.15s ease-out, font-size 0.15s ease-out\n    }\n\n    & > div:last-of-type {\n      transition: visibility 1s, opacity 0.15s ease-out, padding 0.15s ease-out\n      visibility: hidden\n      opacity: 0\n    }\n  ' /*|cmz*/),
  search: cmz.named('AutoUI_ui_SelectBox-75', /*cmz|*/'\n    position: relative\n  ' /*|cmz*/),
  // The !important used below is required to override the global input[type="text"] styles
  searchinput: cmz.named('AutoUI_ui_SelectBox-79', /*cmz|*/'\n    padding: 23px 30px 20px 52px !important\n    height: 60px !important\n    width: 100%\n  ' /*|cmz*/),
  magnifier: cmz.named('AutoUI_ui_SelectBox-84', /*cmz|*/'\n    & {\n      position: absolute\n      z-index: 5\n      top: 23px\n      left: 22px\n    }\n\n    & svg {\n      position: absolute\n    }\n  ' /*|cmz*/),
  triangle: cmz.named('AutoUI_ui_SelectBox-96', /*cmz|*/'\n    & {\n      position: absolute\n      z-index: 5\n      top: 50%\n      right: 30px\n    }\n\n    & svg {\n      position: absolute\n    }\n  ' /*|cmz*/),
  close: cmz.named('AutoUI_ui_SelectBox-108', /*cmz|*/'\n    & {\n      position: absolute\n      z-index: 5\n      top: calc(50% - 7px)\n      right: 40px\n      cursor: pointer\n    }\n\n    & svg {\n      position: absolute\n    }\n  ' /*|cmz*/),
  label: cmz.named('AutoUI_ui_SelectBox-121', _typo2.default.baseText, /*cmz|*/'\n      line-height: 1\n    ' /*|cmz*/),
  labelevent: cmz.named('AutoUI_ui_SelectBox-127', _typo2.default.baseText, /*cmz|*/'\n      line-height: 1\n      font-style: italic\n    ' /*|cmz*/),
  list: cmz.named('AutoUI_ui_SelectBox-134', '\n    list-style: none\n    margin: 0\n    padding: 0\n    border: 1px solid ' + _theme2.default.lineSilver2 + '\n    border-top: none\n    overflow-y: scroll\n    background: ' + _theme2.default.baseBrighter + '\n    width: 100%\n    box-sizing: border-box\n  '),
  shadow: cmz.named('AutoUI_ui_SelectBox-145', /*cmz|*/'\n    box-shadow: 0 5px 12px rgba(0, 0, 0, 0.15)\n  ' /*|cmz*/),
  item: cmz.named('AutoUI_ui_SelectBox-148', /*cmz|*/'\n    & {\n      min-height: 30px\n      margin: 22px\n      display: flex\n      justify-content: space-between\n      align-items: center\n    }\n\n    &:last-child {\n      border-bottom: none\n    }\n  ' /*|cmz*/),
  lined: cmz.named('AutoUI_ui_SelectBox-161', '\n    border-bottom: 1px solid ' + _theme2.default.lineSilver2 + '\n    margin: 0 22px\n    padding: 15px 0\n  '),
  editing: cmz.named('AutoUI_ui_SelectBox-166', '\n    & input {\n      border-bottom: 1px solid ' + _theme2.default.baseRed + '\n    }\n  '),
  control: cmz.named('AutoUI_ui_SelectBox-171', /*cmz|*/'\n    flex-shrink: 0\n    display: flex\n  ' /*|cmz*/),
  controlbutton: cmz.named('AutoUI_ui_SelectBox-175', /*cmz|*/'\n    cursor: pointer\n    padding: 5px\n    display: flex\n    align-items: center\n  ' /*|cmz*/),
  saving: cmz.named('AutoUI_ui_SelectBox-181', _typo2.default.baseText),
  selecting: cmz.named('AutoUI_ui_SelectBox-182', _typo2.default.baseText, /*cmz|*/'\n      padding: 0 0 0 30px\n      position: relative\n    ' /*|cmz*/),
  selectingdots: cmz.named('AutoUI_ui_SelectBox-189', '\n    & {\n      position: absolute\n      top: calc(50% - 9px)\n      left: 0\n      width: 20px\n      height: 20px\n      border-top-color: ' + _theme2.default.lineSilver2 + '\n      border-left-color: ' + _theme2.default.lineSilver2 + '\n      animation: spinner 400ms linear infinite\n      border-bottom-color: transparent\n      border-right-color: transparent\n      border-style: solid\n      border-width: 2px\n      border-radius: 50%\n      box-sizing: border-box\n      display: inline-block\n      vertical-align: middle\n    }\n\n    @keyframes spinner {\n      0% {\n        transform: rotate(0deg)\n      }\n      100% {\n        transform: rotate(360deg)\n      }\n    }\n  '),
  editinput: cmz.named('AutoUI_ui_SelectBox-218', _typo2.default.baseText, /*cmz|*/'\n      & {\n        width: 70%\n        height: 30px\n      }\n\n      & input {\n        height: 30px\n        padding: 0\n        border-top: none\n        border-right: none\n        border-left: none\n      }\n    ' /*|cmz*/),
  nothinglabel: cmz.named('AutoUI_ui_SelectBox-235', _typo2.default.baseText, /*cmz|*/'\n      display: block\n      margin: 15px 22px\n    ' /*|cmz*/),
  createnew: cmz.named('AutoUI_ui_SelectBox-242', _typo2.default.baseText, '\n      & {\n        display: flex\n        align-items: center\n        margin: 15px 22px\n        color: ' + _theme2.default.baseRed + '\n        cursor: pointer\n      }\n\n      & svg {\n        transform: scale(0.7)\n        margin-right: 8px\n      }\n    ')
};

var SelectBox = function (_Component) {
  _inherits(SelectBox, _Component);

  function SelectBox() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, SelectBox);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SelectBox.__proto__ || Object.getPrototypeOf(SelectBox)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      search: '',
      items: _this.props.items || [],
      view: _this.props.items || [],
      expanded: _this.props.expanded || false,
      creating: _this.props.creating || false
    }, _this.mapItemsInput = function (items, view) {
      return items.map(function (each, i) {
        var viewItem = view.find(function (item) {
          return item.id === each.id;
        }) || {};
        return {
          id: each.id,
          value: each.value,
          selected: each.selected || false,
          selecting: each.selecting || viewItem.selecting || false,
          editing: each.editing || viewItem.editing || false,
          saving: each.saving || viewItem.saving || false,
          hidden: each.hidden || viewItem.hidden || false
        };
      });
    }, _this.getUncachedItem = function (item) {
      return _this.state.view.find(function (obj) {
        return obj.id === item.id;
      });
    }, _this.updateItemsState = function (updatedItem) {
      var view = _this.state.view;

      var newItems = view && view.filter(function (each) {
        return Boolean(each.id);
      }).map(function (each, i) {
        return each.id === updatedItem.id ? _extends({}, each, updatedItem) : each;
      });
      _this.setState({ view: newItems });
    }, _this.handleSearch = function (input) {
      var view = _this.state.view;

      var match = new RegExp(input.trim().toUpperCase(), 'g');
      var filteredItems = view && view.map(function (item) {
        var itemMatch = item && item.value && item.value.toUpperCase().match(match);
        return _extends({}, item, { hidden: !(itemMatch && itemMatch.length > 0) });
      });
      _this.setState(_extends({}, _this.state, { search: input, view: filteredItems }));
    }, _this.handleSelect = function (item) {
      var onSelect = _this.props.onSelect;

      if (!item.selecting && onSelect) {
        _this.updateItemsState(_extends({}, _this.getUncachedItem(item), {
          selecting: true
        }));
        Promise.resolve(onSelect(_extends({}, _this.getUncachedItem(item), {
          selected: !item.selected
        }))).then(function (reponseItem) {
          _this.updateItemsState(_extends({}, _this.getUncachedItem(reponseItem || item), {
            selected: !item.selected,
            selecting: false
          }));
        }); // to do: catch state
      }
    }, _this.handleClick = function (item) {
      var onClick = _this.props.onClick;

      if (!item.selecting && onClick) {
        _this.updateItemsState(_extends({}, _this.getUncachedItem(item), {
          selecting: true
        }));
        Promise.resolve(onClick(_extends({}, _this.getUncachedItem(item), {
          selected: !item.selected
        }))).then(function (reponseItem) {
          _this.updateItemsState(_extends({}, _this.getUncachedItem(reponseItem || item), {
            selected: !item.selected,
            selecting: false
          }));
        }); // to do: catch state
      } else {
        _this.handleSelect(item);
      }
    }, _this.handleCreateNew = function () {
      var onCreateNew = _this.props.onCreateNew;
      var search = _this.state.search;


      if (onCreateNew) {
        var pr = onCreateNew(search);

        // Check if pr is a Promise
        if (pr && typeof pr.then === 'function') {
          _this.setState(function () {
            return { creating: true };
          });
          Promise.resolve(pr).then(function (reponseItem) {
            _this.setState(function () {
              return {
                view: [].concat(_toConsumableArray(_this.state.view), [reponseItem]),
                creating: false
              };
            });
          });
        }
      }
    }, _this.handleStartEditing = function (item) {
      var updatedItem = _extends({}, item, { editing: item.value });
      _this.updateItemsState(updatedItem);
    }, _this.handleEditChange = function (item, input) {
      var value = input.target.value;

      var updatedItem = _extends({}, item, { editing: value });
      _this.updateItemsState(updatedItem);
    }, _this.handleCancelEdit = function (item) {
      var updatedItem = _extends({}, item, { editing: '' });
      _this.updateItemsState(updatedItem);
    }, _this.handleEdit = function (item) {
      var onEdit = _this.props.onEdit;

      if (onEdit) {
        _this.updateItemsState(_extends({}, _this.getUncachedItem(item), {
          saving: true
        }));
        Promise.resolve(onEdit(_extends({}, _this.getUncachedItem(item), {
          value: item.editing
        }))).then(function (reponseItem) {
          _this.updateItemsState(_extends({}, _this.getUncachedItem(reponseItem || item), {
            value: reponseItem.value || item.value,
            saving: false,
            editing: false
          }));
        }); // to do: catch state
      }
    }, _this.handleEditingKeyUp = function (e, item) {
      var evt = e || window.event;

      if (evt.keyCode === 27) {
        // Esc
        _this.handleCancelEdit(item);
      }

      if (evt.keyCode === 13) {
        // Enter
        _this.handleEdit(item);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SelectBox, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      var _this2 = this;

      if (!Object.is(prevProps, this.props)) {
        var viewItems = this.mapItemsInput(this.props.items || [], this.state.view);
        this.setState(function (prevState, props) {
          var newState = _extends({}, prevState, {
            items: viewItems,
            view: viewItems,
            expanded: _this2.props.expanded
          });

          if (typeof props.creating !== 'undefined') {
            newState.creating = props.creating;
          }

          return newState;
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props = this.props,
          placeholder = _props.placeholder,
          collectionName = _props.collectionName,
          visibleItems = _props.visibleItems,
          width = _props.width,
          expanded = _props.expanded,
          hasSearch = _props.hasSearch,
          onSelect = _props.onSelect,
          onEdit = _props.onEdit,
          onCreateNew = _props.onCreateNew,
          lined = _props.lined;
      var _state = this.state,
          view = _state.view,
          search = _state.search,
          creating = _state.creating;


      var filteredItems = view && view.filter(function (item) {
        return !item.hidden;
      });

      var renderCheckboxOrString = function renderCheckboxOrString(item) {
        return onSelect ? item.selecting ? _react2.default.createElement(
          'span',
          { className: styles.selecting },
          _react2.default.createElement('span', { className: styles.selectingdots }),
          item.value
        ) : _react2.default.createElement(_InputField2.default, {
          key: '' + item.id + (item.selected ? 'selected' : 'unselected'),
          type: 'checkbox',
          label: item.value,
          name: item.value,
          checked: item.selected,
          onChange: function onChange() {
            return _this3.handleSelect(item);
          }
        }) : item.selecting ? _react2.default.createElement(
          'span',
          { className: styles.labelevent },
          item.value
        ) : _react2.default.createElement(
          'span',
          { className: styles.label, onClick: function onClick() {
              return _this3.handleClick(item);
            } },
          item.value
        );
      };

      var renderEditable = function renderEditable(item) {
        return onEdit && _react2.default.createElement(
          'span',
          { className: styles.controlbutton, onClick: function onClick() {
              return _this3.handleStartEditing(item);
            } },
          _react2.default.createElement(_SvgIcon2.default, { icon: 'edit', color: 'grayscale' })
        );
      };

      var itemClasses = function itemClasses(item) {
        return [styles.item, lined || !expanded ? styles.lined : '', item.editing && item.editing !== item.value ? styles.editing : ''].join(' ');
      };

      var renderIsSavingOrEditing = function renderIsSavingOrEditing(item) {
        return item.saving ? _react2.default.createElement(
          'li',
          { className: itemClasses(item), key: item.id },
          _react2.default.createElement(
            'span',
            { className: styles.saving },
            'Saving "',
            item.editing,
            '"...'
          )
        ) : _react2.default.createElement(
          'li',
          { className: itemClasses(item), key: item.id },
          _react2.default.createElement(
            'span',
            { className: styles.editinput },
            _react2.default.createElement(_InputField2.default, {
              name: item.value,
              value: item.editing,
              onChange: function onChange() {
                var input = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                return _this3.handleEditChange(item, input);
              },
              autoFocus: 'autofocus',
              onFocus: function onFocus(e) {
                var val = e.target.value;
                e.target.value = '';
                e.target.value = val;
              },
              onKeyUp: function onKeyUp(e) {
                return _this3.handleEditingKeyUp(e, item);
              }
            })
          ),
          _react2.default.createElement(
            'span',
            { className: styles.control },
            _react2.default.createElement(
              'span',
              { className: styles.controlbutton, onClick: function onClick() {
                  return _this3.handleCancelEdit(item);
                } },
              _react2.default.createElement(_SvgIcon2.default, { icon: 'x', color: 'grayscale' })
            ),
            _react2.default.createElement(
              'span',
              { className: styles.controlbutton, onClick: function onClick() {
                  return _this3.handleEdit(item);
                } },
              _react2.default.createElement(_SvgIcon2.default, { icon: 'check', color: 'grayscale' })
            )
          )
        );
      };

      var renderIsEditing = function renderIsEditing(item) {
        return item.editing ? renderIsSavingOrEditing(item) : _react2.default.createElement(
          'li',
          { className: itemClasses(item), key: item.id },
          renderCheckboxOrString(item),
          renderEditable(item)
        );
      };

      var renderItemsOrEmpty = function renderItemsOrEmpty() {
        return filteredItems && filteredItems.length > 0 ? filteredItems.map(function (item) {
          return renderIsEditing(item);
        }) : _react2.default.createElement(
          'li',
          null,
          creating ? _react2.default.createElement(
            'span',
            { className: styles.nothinglabel },
            'Adding new ',
            collectionName,
            ' "',
            search,
            '"...'
          ) : _react2.default.createElement(
            'span',
            null,
            _react2.default.createElement(
              'span',
              { className: styles.nothinglabel },
              'No Results for "',
              search,
              '"'
            ),
            onCreateNew && _react2.default.createElement(
              'span',
              { className: styles.createnew, onClick: _this3.handleCreateNew },
              _react2.default.createElement(_SvgIcon2.default, { icon: 'plus' }),
              _react2.default.createElement(
                'span',
                null,
                'Add new ',
                collectionName,
                ' "',
                search,
                '"'
              )
            )
          )
        );
      };

      var renderItems = function renderItems() {
        return filteredItems && filteredItems.length > 0 || search ? _react2.default.createElement(
          'ul',
          { className: styles.list, style: {
              maxHeight: visibleItems ? visibleItems * 61 + 'px' : 'auto',
              width: width ? width + 'px' : '100%'
            } },
          renderItemsOrEmpty()
        ) : '';
      };

      var selectsClass = filteredItems && filteredItems.filter(function (item) {
        return item.selected;
      }).length > 0 ? styles.selects : styles.selectsEmpty;
      var renderSearchLabel = function renderSearchLabel() {
        var isSearch = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        return isSearch ? _react2.default.createElement(
          'div',
          { className: styles.search },
          _react2.default.createElement(
            'div',
            { className: styles.magnifier },
            _react2.default.createElement(_SvgIcon2.default, { icon: 'magnifier', color: 'grayscale' })
          ),
          _react2.default.createElement(_InputField2.default, {
            name: 'search',
            value: search,
            placeholder: hasSearch ? 'Search' : placeholder,
            onChange: function onChange() {
              var input = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
              return _this3.handleSearch(input.target.value);
            },
            className: styles.searchinput,
            autoComplete: 'off',
            disabled: creating
          }),
          search !== '' && _react2.default.createElement(
            'div',
            { className: styles.close, onClick: function onClick() {
                return _this3.handleSearch('');
              } },
            _react2.default.createElement(_SvgIcon2.default, { icon: 'x', color: 'grayscale' })
          )
        ) : _react2.default.createElement(
          'div',
          { className: styles.placeholder },
          _react2.default.createElement(
            'div',
            { className: selectsClass },
            _react2.default.createElement(
              'div',
              null,
              placeholder
            ),
            _react2.default.createElement(
              'div',
              null,
              filteredItems.filter(function (item) {
                return item.selected;
              }).map(function (item) {
                return item.value;
              }).join(', ')
            )
          ),
          _react2.default.createElement(
            'div',
            { className: styles.triangle },
            _react2.default.createElement(_SvgIcon2.default, { icon: 'triangledown', color: 'grayscale' })
          )
        );
      };

      var labelIsSearch = placeholder === 'Search';

      return _react2.default.createElement(
        'div',
        { className: styles.selectbox, style: { width: width ? width + 'px' : '100%' } },
        expanded ? _react2.default.createElement(
          'div',
          null,
          renderSearchLabel(labelIsSearch || hasSearch),
          renderItems()
        ) : _react2.default.createElement(
          _Dropdown2.default,
          {
            toggle: !labelIsSearch,
            label: renderSearchLabel(labelIsSearch && !hasSearch),
            className: styles.dropdown
          },
          _react2.default.createElement(
            'div',
            { className: expanded ? '' : styles.shadow },
            hasSearch && renderSearchLabel(true),
            renderItems()
          )
        )
      );
    }
  }]);

  return SelectBox;
}(_react.Component);

SelectBox.defaultProps = {
  placeholder: 'Search',
  items: [],
  expanded: false,
  hasSearch: false,
  lined: false,
  collectionName: ''
};
exports.default = SelectBox;

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Title = __webpack_require__(109);

var _Title2 = _interopRequireDefault(_Title);

var _Button = __webpack_require__(8);

var _Button2 = _interopRequireDefault(_Button);

var _elem = __webpack_require__(3);

var _elem2 = _interopRequireDefault(_elem);

var _theme = __webpack_require__(2);

var _theme2 = _interopRequireDefault(_theme);

var _typo = __webpack_require__(4);

var _typo2 = _interopRequireDefault(_typo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cmz = __webpack_require__(1);

var utilStyles = {
  maxWidth: cmz.named('AutoUI_forms_SolutionForm_index-27', /*cmz|*/'max-width: 840px' /*|cmz*/),
  noOutline: cmz.named('AutoUI_forms_SolutionForm_index-28', /*cmz|*/'outline: none' /*|cmz*/),
  noTextDecoration: cmz.named('AutoUI_forms_SolutionForm_index-29', /*cmz|*/'text-decoration: none' /*|cmz*/)
};

var Root = _elem2.default.div([utilStyles.maxWidth, cmz.named('AutoUI_forms_SolutionForm_index-34', /*cmz|*/'\n    text-align: left\n    min-width: 320px\n    margin: 0 auto\n  ' /*|cmz*/)]);

var Form = _elem2.default.form([utilStyles.maxWidth, cmz.named('AutoUI_forms_SolutionForm_index-43', /*cmz|*/'\n    margin: 30px auto\n    position: relative\n  ' /*|cmz*/)]);

var textareaStyles = [utilStyles.noOutline, _typo2.default.formText, cmz.named('AutoUI_forms_SolutionForm_index-52', '\n    & {\n      display: block\n      width: 100%\n      height: 156px\n      padding: 10px 20px\n      margin-bottom: 100px\n      resize: vertical\n      border: 1px solid ' + _theme2.default.lineSilver3 + '\n      box-sizing: border-box\n    }\n\n    &::-webkit-input-placeholder {\n      color: ' + _theme2.default.formPlaceholder + '\n    }\n\n    &::-moz-placeholder {\n      color: ' + _theme2.default.formPlaceholder + '\n    }\n  ')];

var errorTextarea = cmz.named('AutoUI_forms_SolutionForm_index-74', '\n  background: ' + _theme2.default.formErrorShadow + '\n  border-color: ' + _theme2.default.formError + '\n  color: ' + _theme2.default.formError + '\n');

var Textarea = _elem2.default.textarea(textareaStyles);
var TextareaError = _elem2.default.textarea(textareaStyles[1] + ' ' + textareaStyles[2] + ' ' + errorTextarea);

var SolutionForm = function (_PureComponent) {
  _inherits(SolutionForm, _PureComponent);

  function SolutionForm() {
    _classCallCheck(this, SolutionForm);

    return _possibleConstructorReturn(this, (SolutionForm.__proto__ || Object.getPrototypeOf(SolutionForm)).apply(this, arguments));
  }

  _createClass(SolutionForm, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          disableButton = _props.disableButton,
          hasAttempted = _props.hasAttempted,
          isSubmitting = _props.isSubmitting,
          maxAttempts = _props.maxAttempts,
          takenAttempts = _props.takenAttempts,
          onSubmit = _props.onSubmit,
          onValueChange = _props.onValueChange;


      var TextareaComponent = hasAttempted ? TextareaError : Textarea;

      return Root(_react2.default.createElement(_Title2.default, { hasAttempted: hasAttempted, maxAttempts: maxAttempts }), Form({ onSubmit: onSubmit }, TextareaComponent({
        name: 'solution',
        onChange: onValueChange,
        placeholder: 'Paste your solution here.'
      }), _react2.default.createElement(
        _Button2.default,
        { disabled: isSubmitting || disableButton, 'data-test': 'solutionSubmit' },
        isSubmitting ? 'Checking...' : 'Submit (' + (takenAttempts + 1) + ' of ' + maxAttempts + ')'
      )));
    }
  }]);

  return SolutionForm;
}(_react.PureComponent);

SolutionForm.defaultProps = {
  disableButton: false,
  hasAttempted: false,
  isSubmitting: false,
  maxAttempts: 3,
  takenAttempts: 0
};
exports.default = SolutionForm;

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _elem = __webpack_require__(3);

var _elem2 = _interopRequireDefault(_elem);

var _Text = __webpack_require__(9);

var _Text2 = _interopRequireDefault(_Text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cmz = __webpack_require__(1);

var Root = _elem2.default.div(cmz.named('AutoUI_forms_SolutionForm_Title-16', /*cmz|*/'\n  margin: 0 0 35px 0\n  text-align: left\n' /*|cmz*/));

var SolutionFormTitle = function (_PureComponent) {
  _inherits(SolutionFormTitle, _PureComponent);

  function SolutionFormTitle() {
    _classCallCheck(this, SolutionFormTitle);

    return _possibleConstructorReturn(this, (SolutionFormTitle.__proto__ || Object.getPrototypeOf(SolutionFormTitle)).apply(this, arguments));
  }

  _createClass(SolutionFormTitle, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          hasAttempted = _props.hasAttempted,
          maxAttempts = _props.maxAttempts;


      return Root(_react2.default.createElement(_Text2.default, {
        heading: hasAttempted ? 'Oops!' : 'Got it?',
        content: hasAttempted ? 'You haven\u2019t submitted the right solution. Please try again.' : 'Paste the solution below. You get ' + maxAttempts + ' chances, use them wisely.'
      }));
    }
  }]);

  return SolutionFormTitle;
}(_react.PureComponent);

SolutionFormTitle.defaultProps = {
  hasAttempted: false,
  maxAttempts: 3
};
exports.default = SolutionFormTitle;

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _elem = __webpack_require__(3);

var _elem2 = _interopRequireDefault(_elem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Root = _elem2.default.div();

function Tab(_ref) {
  var children = _ref.children;

  return Root(children);
}

exports.default = Tab;

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _theme = __webpack_require__(2);

var _theme2 = _interopRequireDefault(_theme);

var _typo = __webpack_require__(4);

var _typo2 = _interopRequireDefault(_typo);

var _elem = __webpack_require__(3);

var _elem2 = _interopRequireDefault(_elem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cmz = __webpack_require__(1);

var tabsStyles = {
  root: cmz.named('AutoUI_ui_Tabs_Tabs-15', _typo2.default.formText, '\n    position: relative;\n    margin: 1em 0 1.5em;\n    background-color: ' + _theme2.default.baseBrighter + ';\n    border-radius: 3px;\n  '),

  tabnav: cmz.named('AutoUI_ui_Tabs_Tabs-22', '\n    padding: .5em .625em 0 0;\n    background: ' + _theme2.default.baseBrighter + ';\n    margin-bottom: 20px;\n    position: relative;\n  '),

  tabnavTabs: cmz.named('AutoUI_ui_Tabs_Tabs-29', '\n    list-style: none;\n    margin: 0 0 -1px;\n    padding-left: 0;\n    border: 0 solid ' + _theme2.default.baseSilver + ';\n    border-bottom-width: 1px;\n  '),

  line: cmz.named('AutoUI_ui_Tabs_Tabs-37', '\n    & {\n      border: 0 solid ' + _theme2.default.baseRed + '\n      width: 100%;\n      position: absolute;\n      bottom: -1px;\n    }\n\n    &.active {\n      border-bottom-width: 2px;\n      width: 100%;\n    }\n  '),

  tabnavTab: cmz.named('AutoUI_ui_Tabs_Tabs-51', '\n    & {\n      position: relative;\n      display: inline-block;\n      border-color: ' + _theme2.default.baseSilver + ';\n      border-style: solid;\n      user-select: none;\n      border-width: 0;\n      padding: 0 0 .6rem 0;\n      margin-right: 1rem;\n    }\n\n    & > a {\n      position: relative;\n      display: block;\n      color: ' + _theme2.default.sliderToggle + ';\n      outline: none;\n      font-weight: 600;\n      text-decoration: none;\n    }\n\n    & > a:hover,\n    & > a:focus {\n      text-decoration: none;\n      background-color: transparent;\n    }\n\n    & > a:hover {\n      color: ' + _theme2.default.formText + ';\n    }\n\n    &:hover {\n      cursor: pointer;\n      transition: all 1s ease-out;\n      transition-property: background-color, color;\n    }\n\n    &.active {\n      cursor: default;\n      transition-property: none;\n    }\n\n    &.active > a,\n    &.active > a:hover,\n    &.active > a:focus {\n      cursor: default;\n    }\n\n    &.active > a {\n      background-color: transparent;\n      color: ' + _theme2.default.formText + ';\n    }\n  ')
};

tabsStyles.tab = {
  content: cmz.named('AutoUI_ui_Tabs_Tabs-107', _typo2.default.formText, '\n    background-color: ' + _theme2.default.baseBrighter + ';\n  '),

  pane: cmz.named('AutoUI_ui_Tabs_Tabs-111', /*cmz|*/'\n    margin: 0 .5em .5em 0;\n  ' /*|cmz*/)
};

var Root = _elem2.default.section(tabsStyles.root);

var Tabs = function (_Component) {
  _inherits(Tabs, _Component);

  function Tabs() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Tabs);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Tabs.__proto__ || Object.getPrototypeOf(Tabs)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      activeTabKey: _this.props.defaultActiveTabKey || 0
    }, _this.handleTabClick = function (index) {
      return function (event) {
        event.preventDefault();
        _this.setState({ activeTabKey: index });
      };
    }, _this._renderTab = function (child, index) {
      var isActiveTab = _this.state.activeTabKey === index;
      var activeClassName = isActiveTab ? 'active' : '';

      if (!child) {
        return null;
      }

      return _react2.default.createElement(
        'li',
        { key: index, role: 'presentation', className: tabsStyles.tabnavTab + ' ' + activeClassName },
        _react2.default.createElement(
          'a',
          {
            href: '',
            onClick: _this.handleTabClick(index),
            role: 'tab',
            'aria-controls': 'tabs-pane-' + index,
            'aria-selected': isActiveTab,
            tabIndex: index
          },
          child.props.title
        ),
        _react2.default.createElement('div', { className: tabsStyles.line + ' ' + activeClassName })
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Tabs, [{
    key: '_renderTabs',
    value: function _renderTabs() {
      return _react2.default.createElement(
        'nav',
        { className: tabsStyles.tabnav },
        _react2.default.createElement(
          'ul',
          { className: tabsStyles.tabnavTabs, role: 'tablist' },
          _react2.default.Children.map(this.props.children, this._renderTab)
        )
      );
    }
  }, {
    key: '_renderTabContent',
    value: function _renderTabContent() {
      var children = _react2.default.Children.toArray(this.props.children);
      return _react2.default.createElement(
        'div',
        { className: tabsStyles.tab.content },
        _react2.default.createElement(
          'div',
          {
            className: tabsStyles.tab.pane,
            role: 'tabpanel',
            'aria-labelledby': 'tabs-tab-' + this.state.activeTabKey,
            'aria-hidden': 'false'
          },
          children[this.state.activeTabKey]
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      return Root(this._renderTabs(), this._renderTabContent());
    }
  }]);

  return Tabs;
}(_react.Component);

Tabs.defaultProps = {
  defaultActiveTabKey: 0
};
exports.default = Tabs;

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _MediumEditorWrapper = __webpack_require__(113);

var _MediumEditorWrapper2 = _interopRequireDefault(_MediumEditorWrapper);

var _elem = __webpack_require__(3);

var _elem2 = _interopRequireDefault(_elem);

var _theme = __webpack_require__(2);

var _theme2 = _interopRequireDefault(_theme);

var _typo = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* global HTMLTextAreaElement */


var cmz = __webpack_require__(1);

var textCountStyles = cmz.named('AutoUI_ui_TextareaEditor_TextareaEditor-13', '\n  & {\n    text-align: right\n    color: ' + _theme2.default.lineRed + '\n    height: 40px\n  }\n\n  & > .hidden {\n    visibility: hidden\n  }\n');

var utilStyles = {
  maxWidth: cmz.named('AutoUI_ui_TextareaEditor_TextareaEditor-26', /*cmz|*/'max-width: 840px' /*|cmz*/)
};

var editorContainerStyles = cmz.named('AutoUI_ui_TextareaEditor_TextareaEditor-29', '\n  & {\n    display: block\n    width: 100%\n    padding: 8px 18px\n    margin-bottom: 20px\n    border: 1px solid ' + _theme2.default.lineSilver3 + '\n    overflow: scroll\n    box-sizing: border-box\n    line-height: 30px\n  }\n\n  & .editable {\n    height: 100%\n    outline: none\n  }\n\n  & :first-child {\n    margin-top: 0\n  }\n\n  & :last-child {\n    margin-bottom: 0\n  }\n');

var Root = _elem2.default.div([utilStyles.maxWidth, _typo.typeface.text, cmz.named('AutoUI_ui_TextareaEditor_TextareaEditor-58', /*cmz|*/'\n    font-weight: 300\n    font-size: 18px\n    text-align: left\n    display: block\n    width: 100%\n    margin-bottom: 20px\n    box-sizing: border-box\n    min-width: 320px\n    margin: 0 auto\n  ' /*|cmz*/)]);

var editableClass = cmz.named('AutoUI_ui_TextareaEditor_TextareaEditor-71', /*cmz|*/'\n  resize: vertical\n' /*|cmz*/);

var TextareaEditor = function (_PureComponent) {
  _inherits(TextareaEditor, _PureComponent);

  function TextareaEditor() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, TextareaEditor);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TextareaEditor.__proto__ || Object.getPrototypeOf(TextareaEditor)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      id: _this.props.id || 'default',
      text: _this.props.text || '',
      html: _this.props.html || '',
      shouldShowTextLength: false,
      options: {
        placeholder: {
          text: _this.props.placeholder
        },
        disableEditing: _this.props.disableEditing || false,
        toolbar: !_this.props.disableEditing
      }
    }, _this.changeShouldShowTextLength = function (val) {
      _this.setState(function () {
        return { shouldShowTextLength: val };
      });
    }, _this.handleChange = function (text, html) {
      _this.setState(function () {
        return { text: text, html: html };
      });
      var onChange = _this.props.onChange;

      if (typeof onChange === 'function') {
        onChange(text, html);
      }
    }, _this.handleFocus = function (target) {
      var _this$state = _this.state,
          text = _this$state.text,
          html = _this$state.html;
      var onFocus = _this.props.onFocus;


      _this.changeShouldShowTextLength(true);

      if (typeof onFocus === 'function') {
        onFocus(target, text, html);
      }
    }, _this.handleBlur = function (target) {
      var _this$state2 = _this.state,
          text = _this$state2.text,
          html = _this$state2.html;
      var onBlur = _this.props.onBlur;


      _this.changeShouldShowTextLength(false);

      if (typeof onBlur === 'function') {
        onBlur(target, text, html);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TextareaEditor, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          charLimit = _props.charLimit,
          linesLimit = _props.linesLimit;
      var _state = this.state,
          id = _state.id,
          text = _state.text,
          html = _state.html,
          shouldShowTextLength = _state.shouldShowTextLength,
          options = _state.options;


      var counterVisibilityClassName = shouldShowTextLength ? '' : 'hidden';
      var editableClassName = options.disableEditing ? '' : editableClass;

      return Root(_react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: editorContainerStyles + ' ' + editableClassName },
          _react2.default.createElement(_MediumEditorWrapper2.default, {
            text: text,
            html: html,
            id: id,
            charLimit: charLimit,
            linesLimit: linesLimit,
            options: options,
            onChange: this.handleChange,
            onFocus: this.handleFocus,
            onBlur: this.handleBlur
          })
        ),
        _react2.default.createElement(
          'div',
          { className: textCountStyles },
          _react2.default.createElement(
            'p',
            { className: counterVisibilityClassName },
            text.length,
            '/',
            charLimit
          )
        )
      ));
    }
  }]);

  return TextareaEditor;
}(_react.PureComponent);

TextareaEditor.defaultProps = {
  charLimit: 1000,
  linesLimit: 0
};
exports.default = TextareaEditor;

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
/* global HTMLElement SyntheticInputEvent */

// $FlowFixMe

// $FlowFixMe


var _react = __webpack_require__(0);

var _elem = __webpack_require__(3);

var _elem2 = _interopRequireDefault(_elem);

__webpack_require__(114);

__webpack_require__(117);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MediumEditor = __webpack_require__(119);

var getCropText = function getCropText(text, charLimit, currentCount) {
  return text.substring(0, Math.min(charLimit, text.length, charLimit - currentCount));
};

var getDelimitedHTML = function getDelimitedHTML(initialHTML, charLimit) {
  var initialTextLength = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

  var getClone = function getClone(parent, node) {
    if (!node || !parent || textCount > charLimit) return;
    var nodeCopy = node.cloneNode(false);
    parent.appendChild(nodeCopy);
    if (node.childNodes.length === 0) {
      var content = node.textContent;
      nodeCopy.textContent = getCropText(content, charLimit, textCount);
      textCount += content.length;
      return;
    }
    node.childNodes.forEach(function (it) {
      return getClone(nodeCopy, it);
    });
  };

  var textCount = initialTextLength;

  var tmpContainer = document.createElement('div');
  getClone(tmpContainer, initialHTML);
  return tmpContainer;
};

var pasteWithCharLimitExtension = function pasteWithCharLimitExtension(charLimit) {
  return MediumEditor.extensions.paste.extend({
    cleanPastedHTML: true,
    doPaste: function doPaste(pastedHTML, pastedPlain, editable) {
      // handle case when clean Paste
      var selectionCount = MediumEditor.selection.getSelectionRange(this.document).toString().length;
      pastedPlain = getCropText(pastedPlain, charLimit + selectionCount, editable.textContent.length);
      MediumEditor.extensions.paste.prototype.doPaste.call(this, pastedHTML, pastedPlain, editable);
    },
    pasteHTML: function pasteHTML(html, options) {
      options = MediumEditor.util.defaults({}, options, {
        cleanAttrs: this.cleanAttrs,
        cleanTags: this.cleanTags,
        unwrapTags: this.unwrapTags
      });

      var elList = void 0,
          workEl = void 0,
          i = void 0,
          fragmentBody = void 0,
          pasteBlock = this.document.createDocumentFragment(); // eslint-disable-line one-var
      var currentText = this.base.elements[0].textContent;
      pasteBlock.appendChild(this.document.createElement('body'));

      fragmentBody = pasteBlock.querySelector('body');
      fragmentBody.innerHTML = html;

      this.cleanupSpans(fragmentBody);

      elList = fragmentBody.querySelectorAll('*');
      for (i = 0; i < elList.length; i += 1) {
        workEl = elList[i];
        if (workEl.nodeName.toLowerCase() && this.getEditorOption('targetBlank') === 'a') {
          MediumEditor.util.setTargetBlank(workEl);
        }

        MediumEditor.util.cleanupAttrs(workEl, options.cleanAttrs);
        MediumEditor.util.cleanupTags(workEl, options.cleanTags);
        MediumEditor.util.unwrapTags(workEl, options.unwrapTags);
      }
      var selectionCount = MediumEditor.selection.getSelectionRange(this.document).toString().length;
      var cropFragment = getDelimitedHTML(fragmentBody, charLimit + selectionCount, currentText.length);

      MediumEditor.util.insertHTMLCommand(this.document, cropFragment.innerHTML.replace(/&nbsp;/g, ' '));
    }
  });
};

var MediumEditorWrapper = function (_PureComponent) {
  _inherits(MediumEditorWrapper, _PureComponent);

  function MediumEditorWrapper() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, MediumEditorWrapper);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MediumEditorWrapper.__proto__ || Object.getPrototypeOf(MediumEditorWrapper)).call.apply(_ref, [this].concat(args))), _this), _this.componentDidMount = function () {
      if (!_this.input) return;
      var subscribeFunction = function subscribeFunction(fun) {
        return function (event) {
          return fun(_this.input);
        };
      };
      var _this$props = _this.props,
          charLimit = _this$props.charLimit,
          options = _this$props.options,
          html = _this$props.html,
          text = _this$props.text,
          id = _this$props.id,
          onChange = _this$props.onChange,
          onFocus = _this$props.onFocus,
          onBlur = _this$props.onBlur;

      var defaultOptions = {};
      if (charLimit != null) {
        var PasteWithCharLimitExtension = pasteWithCharLimitExtension(charLimit);
        defaultOptions.extensions = {
          paste: new PasteWithCharLimitExtension()
        };
      }
      _this.medium = new MediumEditor('.editable-' + id, _extends({}, defaultOptions, options));
      _this.medium.setContent(html || text);

      if (options && !options.disableEditing) {
        if (charLimit != null) {
          _this.medium.on(_this.input, 'keypress', function (event) {
            var selectionCount = MediumEditor.selection.getSelectionRange(document).toString().length;
            if (_this.input.textContent.length >= charLimit + selectionCount) {
              event.preventDefault();
              event.stopPropagation();
            }
          });
        }

        _this.medium.subscribe('editableInput', function (event) {
          var _this$input = _this.input,
              textContent = _this$input.textContent,
              innerHTML = _this$input.innerHTML;

          onChange(textContent, innerHTML);
        });

        _this.medium.subscribe('focus', subscribeFunction(onFocus));
        _this.medium.subscribe('blur', subscribeFunction(function (target) {
          return onBlur(target);
        }));
      }

      _this.setAutosize();
    }, _this.componentDidUpdate = function () {
      _this.medium.restoreSelection();
    }, _this.componentWillUnmount = function () {
      _this.medium.destroy();
    }, _this.setAutosize = function () {
      var lineHeight = 44.4;
      var maxLines = _this.props.linesLimit;

      if (maxLines) {
        var maxHeight = maxLines * lineHeight + 'px';
        _this.input.style.maxHeight = maxHeight;
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(MediumEditorWrapper, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          id = _props.id,
          options = _props.options;

      if (this.medium) {
        this.medium.saveSelection();
      }
      return (0, _elem2.default)('editable-' + id + ' ' + (options && options.disableEditing ? '' : 'editable'), { style: { minHeight: 100 }, ref: function ref(node) {
          _this2.input = node;
        } })();
    }
  }]);

  return MediumEditorWrapper;
}(_react.PureComponent);

exports.default = MediumEditorWrapper;

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(115);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(33)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../css-loader/index.js!./medium-editor.css", function() {
			var newContent = require("!!../../../css-loader/index.js!./medium-editor.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(32)(false);
// imports


// module
exports.push([module.i, "@-webkit-keyframes medium-editor-image-loading {\n  0% {\n    -webkit-transform: scale(0);\n            transform: scale(0); }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n\n@keyframes medium-editor-image-loading {\n  0% {\n    -webkit-transform: scale(0);\n            transform: scale(0); }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n\n@-webkit-keyframes medium-editor-pop-upwards {\n  0% {\n    opacity: 0;\n    -webkit-transform: matrix(0.97, 0, 0, 1, 0, 12);\n            transform: matrix(0.97, 0, 0, 1, 0, 12); }\n  20% {\n    opacity: .7;\n    -webkit-transform: matrix(0.99, 0, 0, 1, 0, 2);\n            transform: matrix(0.99, 0, 0, 1, 0, 2); }\n  40% {\n    opacity: 1;\n    -webkit-transform: matrix(1, 0, 0, 1, 0, -1);\n            transform: matrix(1, 0, 0, 1, 0, -1); }\n  100% {\n    -webkit-transform: matrix(1, 0, 0, 1, 0, 0);\n            transform: matrix(1, 0, 0, 1, 0, 0); } }\n\n@keyframes medium-editor-pop-upwards {\n  0% {\n    opacity: 0;\n    -webkit-transform: matrix(0.97, 0, 0, 1, 0, 12);\n            transform: matrix(0.97, 0, 0, 1, 0, 12); }\n  20% {\n    opacity: .7;\n    -webkit-transform: matrix(0.99, 0, 0, 1, 0, 2);\n            transform: matrix(0.99, 0, 0, 1, 0, 2); }\n  40% {\n    opacity: 1;\n    -webkit-transform: matrix(1, 0, 0, 1, 0, -1);\n            transform: matrix(1, 0, 0, 1, 0, -1); }\n  100% {\n    -webkit-transform: matrix(1, 0, 0, 1, 0, 0);\n            transform: matrix(1, 0, 0, 1, 0, 0); } }\n\n.medium-editor-anchor-preview {\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 16px;\n  left: 0;\n  line-height: 1.4;\n  max-width: 280px;\n  position: absolute;\n  text-align: center;\n  top: 0;\n  word-break: break-all;\n  word-wrap: break-word;\n  visibility: hidden;\n  z-index: 2000; }\n  .medium-editor-anchor-preview a {\n    color: #fff;\n    display: inline-block;\n    margin: 5px 5px 10px; }\n\n.medium-editor-anchor-preview-active {\n  visibility: visible; }\n\n.medium-editor-dragover {\n  background: #ddd; }\n\n.medium-editor-image-loading {\n  -webkit-animation: medium-editor-image-loading 1s infinite ease-in-out;\n          animation: medium-editor-image-loading 1s infinite ease-in-out;\n  background-color: #333;\n  border-radius: 100%;\n  display: inline-block;\n  height: 40px;\n  width: 40px; }\n\n.medium-editor-placeholder {\n  position: relative; }\n  .medium-editor-placeholder:after {\n    content: attr(data-placeholder) !important;\n    font-style: italic;\n    position: absolute;\n    left: 0;\n    top: 0;\n    white-space: pre;\n    padding: inherit;\n    margin: inherit; }\n\n.medium-editor-placeholder-relative {\n  position: relative; }\n  .medium-editor-placeholder-relative:after {\n    content: attr(data-placeholder) !important;\n    font-style: italic;\n    position: relative;\n    white-space: pre;\n    padding: inherit;\n    margin: inherit; }\n\n.medium-toolbar-arrow-under:after, .medium-toolbar-arrow-over:before {\n  border-style: solid;\n  content: '';\n  display: block;\n  height: 0;\n  left: 50%;\n  margin-left: -8px;\n  position: absolute;\n  width: 0; }\n\n.medium-toolbar-arrow-under:after {\n  border-width: 8px 8px 0 8px; }\n\n.medium-toolbar-arrow-over:before {\n  border-width: 0 8px 8px 8px;\n  top: -8px; }\n\n.medium-editor-toolbar {\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 16px;\n  left: 0;\n  position: absolute;\n  top: 0;\n  visibility: hidden;\n  z-index: 2000; }\n  .medium-editor-toolbar ul {\n    margin: 0;\n    padding: 0; }\n  .medium-editor-toolbar li {\n    float: left;\n    list-style: none;\n    margin: 0;\n    padding: 0; }\n    .medium-editor-toolbar li button {\n      box-sizing: border-box;\n      cursor: pointer;\n      display: block;\n      font-size: 14px;\n      line-height: 1.33;\n      margin: 0;\n      padding: 15px;\n      text-decoration: none; }\n      .medium-editor-toolbar li button:focus {\n        outline: none; }\n    .medium-editor-toolbar li .medium-editor-action-underline {\n      text-decoration: underline; }\n    .medium-editor-toolbar li .medium-editor-action-pre {\n      font-family: Consolas, \"Liberation Mono\", Menlo, Courier, monospace;\n      font-size: 12px;\n      font-weight: 100;\n      padding: 15px 0; }\n\n.medium-editor-toolbar-active {\n  visibility: visible; }\n\n.medium-editor-sticky-toolbar {\n  position: fixed;\n  top: 1px; }\n\n.medium-editor-relative-toolbar {\n  position: relative; }\n\n.medium-editor-toolbar-active.medium-editor-stalker-toolbar {\n  -webkit-animation: medium-editor-pop-upwards 160ms forwards linear;\n          animation: medium-editor-pop-upwards 160ms forwards linear; }\n\n.medium-editor-action-bold {\n  font-weight: bolder; }\n\n.medium-editor-action-italic {\n  font-style: italic; }\n\n.medium-editor-toolbar-form {\n  display: none; }\n  .medium-editor-toolbar-form input,\n  .medium-editor-toolbar-form a {\n    font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif; }\n  .medium-editor-toolbar-form .medium-editor-toolbar-form-row {\n    line-height: 14px;\n    margin-left: 5px;\n    padding-bottom: 5px; }\n  .medium-editor-toolbar-form .medium-editor-toolbar-input,\n  .medium-editor-toolbar-form label {\n    border: none;\n    box-sizing: border-box;\n    font-size: 14px;\n    margin: 0;\n    padding: 6px;\n    width: 316px;\n    display: inline-block; }\n    .medium-editor-toolbar-form .medium-editor-toolbar-input:focus,\n    .medium-editor-toolbar-form label:focus {\n      -webkit-appearance: none;\n         -moz-appearance: none;\n              appearance: none;\n      border: none;\n      box-shadow: none;\n      outline: 0; }\n  .medium-editor-toolbar-form a {\n    display: inline-block;\n    font-size: 24px;\n    font-weight: bolder;\n    margin: 0 10px;\n    text-decoration: none; }\n\n.medium-editor-toolbar-form-active {\n  display: block; }\n\n.medium-editor-toolbar-actions:after {\n  clear: both;\n  content: \"\";\n  display: table; }\n\n.medium-editor-element {\n  word-wrap: break-word;\n  min-height: 30px; }\n  .medium-editor-element img {\n    max-width: 100%; }\n  .medium-editor-element sub {\n    vertical-align: sub; }\n  .medium-editor-element sup {\n    vertical-align: super; }\n\n.medium-editor-hidden {\n  display: none; }\n", ""]);

// exports


/***/ }),
/* 116 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(118);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(33)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../css-loader/index.js!./default.css", function() {
			var newContent = require("!!../../../../css-loader/index.js!./default.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(32)(false);
// imports


// module
exports.push([module.i, ".medium-toolbar-arrow-under:after {\n  border-color: #242424 transparent transparent transparent;\n  top: 50px; }\n\n.medium-toolbar-arrow-over:before {\n  border-color: transparent transparent #242424 transparent;\n  top: -8px; }\n\n.medium-editor-toolbar {\n  background-color: #242424;\n  background: -webkit-linear-gradient(top, #242424, rgba(36, 36, 36, 0.75));\n  background: linear-gradient(to bottom, #242424, rgba(36, 36, 36, 0.75));\n  border: 1px solid #000;\n  border-radius: 5px;\n  box-shadow: 0 0 3px #000; }\n  .medium-editor-toolbar li button {\n    background-color: #242424;\n    background: -webkit-linear-gradient(top, #242424, rgba(36, 36, 36, 0.89));\n    background: linear-gradient(to bottom, #242424, rgba(36, 36, 36, 0.89));\n    border: 0;\n    border-right: 1px solid #000;\n    border-left: 1px solid #333;\n    border-left: 1px solid rgba(255, 255, 255, 0.1);\n    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3);\n    color: #fff;\n    height: 50px;\n    min-width: 50px;\n    -webkit-transition: background-color .2s ease-in;\n            transition: background-color .2s ease-in; }\n    .medium-editor-toolbar li button:hover {\n      background-color: #000;\n      color: yellow; }\n  .medium-editor-toolbar li .medium-editor-button-first {\n    border-bottom-left-radius: 5px;\n    border-top-left-radius: 5px; }\n  .medium-editor-toolbar li .medium-editor-button-last {\n    border-bottom-right-radius: 5px;\n    border-top-right-radius: 5px; }\n  .medium-editor-toolbar li .medium-editor-button-active {\n    background-color: #000;\n    background: -webkit-linear-gradient(top, #242424, rgba(0, 0, 0, 0.89));\n    background: linear-gradient(to bottom, #242424, rgba(0, 0, 0, 0.89));\n    color: #fff; }\n\n.medium-editor-toolbar-form {\n  background: #242424;\n  border-radius: 5px;\n  color: #999; }\n  .medium-editor-toolbar-form .medium-editor-toolbar-input {\n    background: #242424;\n    box-sizing: border-box;\n    color: #ccc;\n    height: 50px; }\n  .medium-editor-toolbar-form a {\n    color: #fff; }\n\n.medium-editor-toolbar-anchor-preview {\n  background: #242424;\n  border-radius: 5px;\n  color: #fff; }\n\n.medium-editor-placeholder:after {\n  color: #b3b3b1; }\n", ""]);

// exports


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {var __WEBPACK_AMD_DEFINE_RESULT__;/*global self, document, DOMException */

/*! @source http://purl.eligrey.com/github/classList.js/blob/master/classList.js */

// Full polyfill for browsers with no classList support
if (!("classList" in document.createElement("_"))) {
  (function (view) {

  "use strict";

  if (!('Element' in view)) return;

  var
      classListProp = "classList"
    , protoProp = "prototype"
    , elemCtrProto = view.Element[protoProp]
    , objCtr = Object
    , strTrim = String[protoProp].trim || function () {
      return this.replace(/^\s+|\s+$/g, "");
    }
    , arrIndexOf = Array[protoProp].indexOf || function (item) {
      var
          i = 0
        , len = this.length
      ;
      for (; i < len; i++) {
        if (i in this && this[i] === item) {
          return i;
        }
      }
      return -1;
    }
    // Vendors: please allow content code to instantiate DOMExceptions
    , DOMEx = function (type, message) {
      this.name = type;
      this.code = DOMException[type];
      this.message = message;
    }
    , checkTokenAndGetIndex = function (classList, token) {
      if (token === "") {
        throw new DOMEx(
            "SYNTAX_ERR"
          , "An invalid or illegal string was specified"
        );
      }
      if (/\s/.test(token)) {
        throw new DOMEx(
            "INVALID_CHARACTER_ERR"
          , "String contains an invalid character"
        );
      }
      return arrIndexOf.call(classList, token);
    }
    , ClassList = function (elem) {
      var
          trimmedClasses = strTrim.call(elem.getAttribute("class") || "")
        , classes = trimmedClasses ? trimmedClasses.split(/\s+/) : []
        , i = 0
        , len = classes.length
      ;
      for (; i < len; i++) {
        this.push(classes[i]);
      }
      this._updateClassName = function () {
        elem.setAttribute("class", this.toString());
      };
    }
    , classListProto = ClassList[protoProp] = []
    , classListGetter = function () {
      return new ClassList(this);
    }
  ;
  // Most DOMException implementations don't allow calling DOMException's toString()
  // on non-DOMExceptions. Error's toString() is sufficient here.
  DOMEx[protoProp] = Error[protoProp];
  classListProto.item = function (i) {
    return this[i] || null;
  };
  classListProto.contains = function (token) {
    token += "";
    return checkTokenAndGetIndex(this, token) !== -1;
  };
  classListProto.add = function () {
    var
        tokens = arguments
      , i = 0
      , l = tokens.length
      , token
      , updated = false
    ;
    do {
      token = tokens[i] + "";
      if (checkTokenAndGetIndex(this, token) === -1) {
        this.push(token);
        updated = true;
      }
    }
    while (++i < l);

    if (updated) {
      this._updateClassName();
    }
  };
  classListProto.remove = function () {
    var
        tokens = arguments
      , i = 0
      , l = tokens.length
      , token
      , updated = false
      , index
    ;
    do {
      token = tokens[i] + "";
      index = checkTokenAndGetIndex(this, token);
      while (index !== -1) {
        this.splice(index, 1);
        updated = true;
        index = checkTokenAndGetIndex(this, token);
      }
    }
    while (++i < l);

    if (updated) {
      this._updateClassName();
    }
  };
  classListProto.toggle = function (token, force) {
    token += "";

    var
        result = this.contains(token)
      , method = result ?
        force !== true && "remove"
      :
        force !== false && "add"
    ;

    if (method) {
      this[method](token);
    }

    if (force === true || force === false) {
      return force;
    } else {
      return !result;
    }
  };
  classListProto.toString = function () {
    return this.join(" ");
  };

  if (objCtr.defineProperty) {
    var classListPropDesc = {
        get: classListGetter
      , enumerable: true
      , configurable: true
    };
    try {
      objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
    } catch (ex) { // IE 8 doesn't support enumerable:true
      if (ex.number === -0x7FF5EC54) {
        classListPropDesc.enumerable = false;
        objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
      }
    }
  } else if (objCtr[protoProp].__defineGetter__) {
    elemCtrProto.__defineGetter__(classListProp, classListGetter);
  }

  }(self));
}

/* Blob.js
 * A Blob implementation.
 * 2014-07-24
 *
 * By Eli Grey, http://eligrey.com
 * By Devin Samarin, https://github.com/dsamarin
 * License: X11/MIT
 *   See https://github.com/eligrey/Blob.js/blob/master/LICENSE.md
 */

/*global self, unescape */
/*jslint bitwise: true, regexp: true, confusion: true, es5: true, vars: true, white: true,
  plusplus: true */

/*! @source http://purl.eligrey.com/github/Blob.js/blob/master/Blob.js */

(function (view) {
  "use strict";

  view.URL = view.URL || view.webkitURL;

  if (view.Blob && view.URL) {
    try {
      new Blob;
      return;
    } catch (e) {}
  }

  // Internally we use a BlobBuilder implementation to base Blob off of
  // in order to support older browsers that only have BlobBuilder
  var BlobBuilder = view.BlobBuilder || view.WebKitBlobBuilder || view.MozBlobBuilder || (function(view) {
    var
        get_class = function(object) {
        return Object.prototype.toString.call(object).match(/^\[object\s(.*)\]$/)[1];
      }
      , FakeBlobBuilder = function BlobBuilder() {
        this.data = [];
      }
      , FakeBlob = function Blob(data, type, encoding) {
        this.data = data;
        this.size = data.length;
        this.type = type;
        this.encoding = encoding;
      }
      , FBB_proto = FakeBlobBuilder.prototype
      , FB_proto = FakeBlob.prototype
      , FileReaderSync = view.FileReaderSync
      , FileException = function(type) {
        this.code = this[this.name = type];
      }
      , file_ex_codes = (
          "NOT_FOUND_ERR SECURITY_ERR ABORT_ERR NOT_READABLE_ERR ENCODING_ERR "
        + "NO_MODIFICATION_ALLOWED_ERR INVALID_STATE_ERR SYNTAX_ERR"
      ).split(" ")
      , file_ex_code = file_ex_codes.length
      , real_URL = view.URL || view.webkitURL || view
      , real_create_object_URL = real_URL.createObjectURL
      , real_revoke_object_URL = real_URL.revokeObjectURL
      , URL = real_URL
      , btoa = view.btoa
      , atob = view.atob

      , ArrayBuffer = view.ArrayBuffer
      , Uint8Array = view.Uint8Array

      , origin = /^[\w-]+:\/*\[?[\w\.:-]+\]?(?::[0-9]+)?/
    ;
    FakeBlob.fake = FB_proto.fake = true;
    while (file_ex_code--) {
      FileException.prototype[file_ex_codes[file_ex_code]] = file_ex_code + 1;
    }
    // Polyfill URL
    if (!real_URL.createObjectURL) {
      URL = view.URL = function(uri) {
        var
            uri_info = document.createElementNS("http://www.w3.org/1999/xhtml", "a")
          , uri_origin
        ;
        uri_info.href = uri;
        if (!("origin" in uri_info)) {
          if (uri_info.protocol.toLowerCase() === "data:") {
            uri_info.origin = null;
          } else {
            uri_origin = uri.match(origin);
            uri_info.origin = uri_origin && uri_origin[1];
          }
        }
        return uri_info;
      };
    }
    URL.createObjectURL = function(blob) {
      var
          type = blob.type
        , data_URI_header
      ;
      if (type === null) {
        type = "application/octet-stream";
      }
      if (blob instanceof FakeBlob) {
        data_URI_header = "data:" + type;
        if (blob.encoding === "base64") {
          return data_URI_header + ";base64," + blob.data;
        } else if (blob.encoding === "URI") {
          return data_URI_header + "," + decodeURIComponent(blob.data);
        } if (btoa) {
          return data_URI_header + ";base64," + btoa(blob.data);
        } else {
          return data_URI_header + "," + encodeURIComponent(blob.data);
        }
      } else if (real_create_object_URL) {
        return real_create_object_URL.call(real_URL, blob);
      }
    };
    URL.revokeObjectURL = function(object_URL) {
      if (object_URL.substring(0, 5) !== "data:" && real_revoke_object_URL) {
        real_revoke_object_URL.call(real_URL, object_URL);
      }
    };
    FBB_proto.append = function(data/*, endings*/) {
      var bb = this.data;
      // decode data to a binary string
      if (Uint8Array && (data instanceof ArrayBuffer || data instanceof Uint8Array)) {
        var
            str = ""
          , buf = new Uint8Array(data)
          , i = 0
          , buf_len = buf.length
        ;
        for (; i < buf_len; i++) {
          str += String.fromCharCode(buf[i]);
        }
        bb.push(str);
      } else if (get_class(data) === "Blob" || get_class(data) === "File") {
        if (FileReaderSync) {
          var fr = new FileReaderSync;
          bb.push(fr.readAsBinaryString(data));
        } else {
          // async FileReader won't work as BlobBuilder is sync
          throw new FileException("NOT_READABLE_ERR");
        }
      } else if (data instanceof FakeBlob) {
        if (data.encoding === "base64" && atob) {
          bb.push(atob(data.data));
        } else if (data.encoding === "URI") {
          bb.push(decodeURIComponent(data.data));
        } else if (data.encoding === "raw") {
          bb.push(data.data);
        }
      } else {
        if (typeof data !== "string") {
          data += ""; // convert unsupported types to strings
        }
        // decode UTF-16 to binary string
        bb.push(unescape(encodeURIComponent(data)));
      }
    };
    FBB_proto.getBlob = function(type) {
      if (!arguments.length) {
        type = null;
      }
      return new FakeBlob(this.data.join(""), type, "raw");
    };
    FBB_proto.toString = function() {
      return "[object BlobBuilder]";
    };
    FB_proto.slice = function(start, end, type) {
      var args = arguments.length;
      if (args < 3) {
        type = null;
      }
      return new FakeBlob(
          this.data.slice(start, args > 1 ? end : this.data.length)
        , type
        , this.encoding
      );
    };
    FB_proto.toString = function() {
      return "[object Blob]";
    };
    FB_proto.close = function() {
      this.size = 0;
      delete this.data;
    };
    return FakeBlobBuilder;
  }(view));

  view.Blob = function(blobParts, options) {
    var type = options ? (options.type || "") : "";
    var builder = new BlobBuilder();
    if (blobParts) {
      for (var i = 0, len = blobParts.length; i < len; i++) {
        if (Uint8Array && blobParts[i] instanceof Uint8Array) {
          builder.append(blobParts[i].buffer);
        }
        else {
          builder.append(blobParts[i]);
        }
      }
    }
    var blob = builder.getBlob(type);
    if (!blob.slice && blob.webkitSlice) {
      blob.slice = blob.webkitSlice;
    }
    return blob;
  };

  var getPrototypeOf = Object.getPrototypeOf || function(object) {
    return object.__proto__;
  };
  view.Blob.prototype = getPrototypeOf(new view.Blob());
}(typeof self !== "undefined" && self || typeof window !== "undefined" && window || this.content || this));

(function (root, factory) {
    'use strict';
    var isElectron = typeof module === 'object' && typeof process !== 'undefined' && process && process.versions && process.versions.electron;
    if (!isElectron && typeof module === 'object') {
        module.exports = factory;
    } else if (true) {
        !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
            return factory;
        }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {
        root.MediumEditor = factory;
    }
}(this, function () {

    'use strict';

function MediumEditor(elements, options) {
    'use strict';
    return this.init(elements, options);
}

MediumEditor.extensions = {};
/*jshint unused: true */
(function (window) {
    'use strict';

    function copyInto(overwrite, dest) {
        var prop,
            sources = Array.prototype.slice.call(arguments, 2);
        dest = dest || {};
        for (var i = 0; i < sources.length; i++) {
            var source = sources[i];
            if (source) {
                for (prop in source) {
                    if (source.hasOwnProperty(prop) &&
                        typeof source[prop] !== 'undefined' &&
                        (overwrite || dest.hasOwnProperty(prop) === false)) {
                        dest[prop] = source[prop];
                    }
                }
            }
        }
        return dest;
    }

    // https://developer.mozilla.org/en-US/docs/Web/API/Node/contains
    // Some browsers (including phantom) don't return true for Node.contains(child)
    // if child is a text node.  Detect these cases here and use a fallback
    // for calls to Util.isDescendant()
    var nodeContainsWorksWithTextNodes = false;
    try {
        var testParent = document.createElement('div'),
            testText = document.createTextNode(' ');
        testParent.appendChild(testText);
        nodeContainsWorksWithTextNodes = testParent.contains(testText);
    } catch (exc) {}

    var Util = {

        // http://stackoverflow.com/questions/17907445/how-to-detect-ie11#comment30165888_17907562
        // by rg89
        isIE: ((navigator.appName === 'Microsoft Internet Explorer') || ((navigator.appName === 'Netscape') && (new RegExp('Trident/.*rv:([0-9]{1,}[.0-9]{0,})').exec(navigator.userAgent) !== null))),

        isEdge: (/Edge\/\d+/).exec(navigator.userAgent) !== null,

        // if firefox
        isFF: (navigator.userAgent.toLowerCase().indexOf('firefox') > -1),

        // http://stackoverflow.com/a/11752084/569101
        isMac: (window.navigator.platform.toUpperCase().indexOf('MAC') >= 0),

        // https://github.com/jashkenas/underscore
        // Lonely letter MUST USE the uppercase code
        keyCode: {
            BACKSPACE: 8,
            TAB: 9,
            ENTER: 13,
            ESCAPE: 27,
            SPACE: 32,
            DELETE: 46,
            K: 75, // K keycode, and not k
            M: 77,
            V: 86
        },

        /**
         * Returns true if it's metaKey on Mac, or ctrlKey on non-Mac.
         * See #591
         */
        isMetaCtrlKey: function (event) {
            if ((Util.isMac && event.metaKey) || (!Util.isMac && event.ctrlKey)) {
                return true;
            }

            return false;
        },

        /**
         * Returns true if the key associated to the event is inside keys array
         *
         * @see : https://github.com/jquery/jquery/blob/0705be475092aede1eddae01319ec931fb9c65fc/src/event.js#L473-L484
         * @see : http://stackoverflow.com/q/4471582/569101
         */
        isKey: function (event, keys) {
            var keyCode = Util.getKeyCode(event);

            // it's not an array let's just compare strings!
            if (false === Array.isArray(keys)) {
                return keyCode === keys;
            }

            if (-1 === keys.indexOf(keyCode)) {
                return false;
            }

            return true;
        },

        getKeyCode: function (event) {
            var keyCode = event.which;

            // getting the key code from event
            if (null === keyCode) {
                keyCode = event.charCode !== null ? event.charCode : event.keyCode;
            }

            return keyCode;
        },

        blockContainerElementNames: [
            // elements our editor generates
            'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'blockquote', 'pre', 'ul', 'li', 'ol',
            // all other known block elements
            'address', 'article', 'aside', 'audio', 'canvas', 'dd', 'dl', 'dt', 'fieldset',
            'figcaption', 'figure', 'footer', 'form', 'header', 'hgroup', 'main', 'nav',
            'noscript', 'output', 'section', 'video',
            'table', 'thead', 'tbody', 'tfoot', 'tr', 'th', 'td'
        ],

        emptyElementNames: ['br', 'col', 'colgroup', 'hr', 'img', 'input', 'source', 'wbr'],

        extend: function extend(/* dest, source1, source2, ...*/) {
            var args = [true].concat(Array.prototype.slice.call(arguments));
            return copyInto.apply(this, args);
        },

        defaults: function defaults(/*dest, source1, source2, ...*/) {
            var args = [false].concat(Array.prototype.slice.call(arguments));
            return copyInto.apply(this, args);
        },

        /*
         * Create a link around the provided text nodes which must be adjacent to each other and all be
         * descendants of the same closest block container. If the preconditions are not met, unexpected
         * behavior will result.
         */
        createLink: function (document, textNodes, href, target) {
            var anchor = document.createElement('a');
            Util.moveTextRangeIntoElement(textNodes[0], textNodes[textNodes.length - 1], anchor);
            anchor.setAttribute('href', href);
            if (target) {
                if (target === '_blank') {
                    anchor.setAttribute('rel', 'noopener noreferrer');
                }
                anchor.setAttribute('target', target);
            }
            return anchor;
        },

        /*
         * Given the provided match in the format {start: 1, end: 2} where start and end are indices into the
         * textContent of the provided element argument, modify the DOM inside element to ensure that the text
         * identified by the provided match can be returned as text nodes that contain exactly that text, without
         * any additional text at the beginning or end of the returned array of adjacent text nodes.
         *
         * The only DOM manipulation performed by this function is splitting the text nodes, non-text nodes are
         * not affected in any way.
         */
        findOrCreateMatchingTextNodes: function (document, element, match) {
            var treeWalker = document.createTreeWalker(element, NodeFilter.SHOW_ALL, null, false),
                matchedNodes = [],
                currentTextIndex = 0,
                startReached = false,
                currentNode = null,
                newNode = null;

            while ((currentNode = treeWalker.nextNode()) !== null) {
                if (currentNode.nodeType > 3) {
                    continue;
                } else if (currentNode.nodeType === 3) {
                    if (!startReached && match.start < (currentTextIndex + currentNode.nodeValue.length)) {
                        startReached = true;
                        newNode = Util.splitStartNodeIfNeeded(currentNode, match.start, currentTextIndex);
                    }
                    if (startReached) {
                        Util.splitEndNodeIfNeeded(currentNode, newNode, match.end, currentTextIndex);
                    }
                    if (startReached && currentTextIndex === match.end) {
                        break; // Found the node(s) corresponding to the link. Break out and move on to the next.
                    } else if (startReached && currentTextIndex > (match.end + 1)) {
                        throw new Error('PerformLinking overshot the target!'); // should never happen...
                    }

                    if (startReached) {
                        matchedNodes.push(newNode || currentNode);
                    }

                    currentTextIndex += currentNode.nodeValue.length;
                    if (newNode !== null) {
                        currentTextIndex += newNode.nodeValue.length;
                        // Skip the newNode as we'll already have pushed it to the matches
                        treeWalker.nextNode();
                    }
                    newNode = null;
                } else if (currentNode.tagName.toLowerCase() === 'img') {
                    if (!startReached && (match.start <= currentTextIndex)) {
                        startReached = true;
                    }
                    if (startReached) {
                        matchedNodes.push(currentNode);
                    }
                }
            }
            return matchedNodes;
        },

        /*
         * Given the provided text node and text coordinates, split the text node if needed to make it align
         * precisely with the coordinates.
         *
         * This function is intended to be called from Util.findOrCreateMatchingTextNodes.
         */
        splitStartNodeIfNeeded: function (currentNode, matchStartIndex, currentTextIndex) {
            if (matchStartIndex !== currentTextIndex) {
                return currentNode.splitText(matchStartIndex - currentTextIndex);
            }
            return null;
        },

        /*
         * Given the provided text node and text coordinates, split the text node if needed to make it align
         * precisely with the coordinates. The newNode argument should from the result of Util.splitStartNodeIfNeeded,
         * if that function has been called on the same currentNode.
         *
         * This function is intended to be called from Util.findOrCreateMatchingTextNodes.
         */
        splitEndNodeIfNeeded: function (currentNode, newNode, matchEndIndex, currentTextIndex) {
            var textIndexOfEndOfFarthestNode,
                endSplitPoint;
            textIndexOfEndOfFarthestNode = currentTextIndex + currentNode.nodeValue.length +
                    (newNode ? newNode.nodeValue.length : 0) - 1;
            endSplitPoint = matchEndIndex - currentTextIndex -
                    (newNode ? currentNode.nodeValue.length : 0);
            if (textIndexOfEndOfFarthestNode >= matchEndIndex &&
                    currentTextIndex !== textIndexOfEndOfFarthestNode &&
                    endSplitPoint !== 0) {
                (newNode || currentNode).splitText(endSplitPoint);
            }
        },

        /*
        * Take an element, and break up all of its text content into unique pieces such that:
         * 1) All text content of the elements are in separate blocks. No piece of text content should span
         *    across multiple blocks. This means no element return by this function should have
         *    any blocks as children.
         * 2) The union of the textcontent of all of the elements returned here covers all
         *    of the text within the element.
         *
         *
         * EXAMPLE:
         * In the event that we have something like:
         *
         * <blockquote>
         *   <p>Some Text</p>
         *   <ol>
         *     <li>List Item 1</li>
         *     <li>List Item 2</li>
         *   </ol>
         * </blockquote>
         *
         * This function would return these elements as an array:
         *   [ <p>Some Text</p>, <li>List Item 1</li>, <li>List Item 2</li> ]
         *
         * Since the <blockquote> and <ol> elements contain blocks within them they are not returned.
         * Since the <p> and <li>'s don't contain block elements and cover all the text content of the
         * <blockquote> container, they are the elements returned.
         */
        splitByBlockElements: function (element) {
            if (element.nodeType !== 3 && element.nodeType !== 1) {
                return [];
            }

            var toRet = [],
                blockElementQuery = MediumEditor.util.blockContainerElementNames.join(',');

            if (element.nodeType === 3 || element.querySelectorAll(blockElementQuery).length === 0) {
                return [element];
            }

            for (var i = 0; i < element.childNodes.length; i++) {
                var child = element.childNodes[i];
                if (child.nodeType === 3) {
                    toRet.push(child);
                } else if (child.nodeType === 1) {
                    var blockElements = child.querySelectorAll(blockElementQuery);
                    if (blockElements.length === 0) {
                        toRet.push(child);
                    } else {
                        toRet = toRet.concat(MediumEditor.util.splitByBlockElements(child));
                    }
                }
            }

            return toRet;
        },

        // Find the next node in the DOM tree that represents any text that is being
        // displayed directly next to the targetNode (passed as an argument)
        // Text that appears directly next to the current node can be:
        //  - A sibling text node
        //  - A descendant of a sibling element
        //  - A sibling text node of an ancestor
        //  - A descendant of a sibling element of an ancestor
        findAdjacentTextNodeWithContent: function findAdjacentTextNodeWithContent(rootNode, targetNode, ownerDocument) {
            var pastTarget = false,
                nextNode,
                nodeIterator = ownerDocument.createNodeIterator(rootNode, NodeFilter.SHOW_TEXT, null, false);

            // Use a native NodeIterator to iterate over all the text nodes that are descendants
            // of the rootNode.  Once past the targetNode, choose the first non-empty text node
            nextNode = nodeIterator.nextNode();
            while (nextNode) {
                if (nextNode === targetNode) {
                    pastTarget = true;
                } else if (pastTarget) {
                    if (nextNode.nodeType === 3 && nextNode.nodeValue && nextNode.nodeValue.trim().length > 0) {
                        break;
                    }
                }
                nextNode = nodeIterator.nextNode();
            }

            return nextNode;
        },

        // Find an element's previous sibling within a medium-editor element
        // If one doesn't exist, find the closest ancestor's previous sibling
        findPreviousSibling: function (node) {
            if (!node || Util.isMediumEditorElement(node)) {
                return false;
            }

            var previousSibling = node.previousSibling;
            while (!previousSibling && !Util.isMediumEditorElement(node.parentNode)) {
                node = node.parentNode;
                previousSibling = node.previousSibling;
            }

            return previousSibling;
        },

        isDescendant: function isDescendant(parent, child, checkEquality) {
            if (!parent || !child) {
                return false;
            }
            if (parent === child) {
                return !!checkEquality;
            }
            // If parent is not an element, it can't have any descendants
            if (parent.nodeType !== 1) {
                return false;
            }
            if (nodeContainsWorksWithTextNodes || child.nodeType !== 3) {
                return parent.contains(child);
            }
            var node = child.parentNode;
            while (node !== null) {
                if (node === parent) {
                    return true;
                }
                node = node.parentNode;
            }
            return false;
        },

        // https://github.com/jashkenas/underscore
        isElement: function isElement(obj) {
            return !!(obj && obj.nodeType === 1);
        },

        // https://github.com/jashkenas/underscore
        throttle: function (func, wait) {
            var THROTTLE_INTERVAL = 50,
                context,
                args,
                result,
                timeout = null,
                previous = 0,
                later = function () {
                    previous = Date.now();
                    timeout = null;
                    result = func.apply(context, args);
                    if (!timeout) {
                        context = args = null;
                    }
                };

            if (!wait && wait !== 0) {
                wait = THROTTLE_INTERVAL;
            }

            return function () {
                var now = Date.now(),
                    remaining = wait - (now - previous);

                context = this;
                args = arguments;
                if (remaining <= 0 || remaining > wait) {
                    if (timeout) {
                        clearTimeout(timeout);
                        timeout = null;
                    }
                    previous = now;
                    result = func.apply(context, args);
                    if (!timeout) {
                        context = args = null;
                    }
                } else if (!timeout) {
                    timeout = setTimeout(later, remaining);
                }
                return result;
            };
        },

        traverseUp: function (current, testElementFunction) {
            if (!current) {
                return false;
            }

            do {
                if (current.nodeType === 1) {
                    if (testElementFunction(current)) {
                        return current;
                    }
                    // do not traverse upwards past the nearest containing editor
                    if (Util.isMediumEditorElement(current)) {
                        return false;
                    }
                }

                current = current.parentNode;
            } while (current);

            return false;
        },

        htmlEntities: function (str) {
            // converts special characters (like <) into their escaped/encoded values (like &lt;).
            // This allows you to show to display the string without the browser reading it as HTML.
            return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
        },

        // http://stackoverflow.com/questions/6690752/insert-html-at-caret-in-a-contenteditable-div
        insertHTMLCommand: function (doc, html) {
            var selection, range, el, fragment, node, lastNode, toReplace,
                res = false,
                ecArgs = ['insertHTML', false, html];

            /* Edge's implementation of insertHTML is just buggy right now:
             * - Doesn't allow leading white space at the beginning of an element
             * - Found a case when a <font size="2"> tag was inserted when calling alignCenter inside a blockquote
             *
             * There are likely other bugs, these are just the ones we found so far.
             * For now, let's just use the same fallback we did for IE
             */
            if (!MediumEditor.util.isEdge && doc.queryCommandSupported('insertHTML')) {
                try {
                    return doc.execCommand.apply(doc, ecArgs);
                } catch (ignore) {}
            }

            selection = doc.getSelection();
            if (selection.rangeCount) {
                range = selection.getRangeAt(0);
                toReplace = range.commonAncestorContainer;

                // https://github.com/yabwe/medium-editor/issues/748
                // If the selection is an empty editor element, create a temporary text node inside of the editor
                // and select it so that we don't delete the editor element
                if (Util.isMediumEditorElement(toReplace) && !toReplace.firstChild) {
                    range.selectNode(toReplace.appendChild(doc.createTextNode('')));
                } else if ((toReplace.nodeType === 3 && range.startOffset === 0 && range.endOffset === toReplace.nodeValue.length) ||
                        (toReplace.nodeType !== 3 && toReplace.innerHTML === range.toString())) {
                    // Ensure range covers maximum amount of nodes as possible
                    // By moving up the DOM and selecting ancestors whose only child is the range
                    while (!Util.isMediumEditorElement(toReplace) &&
                            toReplace.parentNode &&
                            toReplace.parentNode.childNodes.length === 1 &&
                            !Util.isMediumEditorElement(toReplace.parentNode)) {
                        toReplace = toReplace.parentNode;
                    }
                    range.selectNode(toReplace);
                }
                range.deleteContents();

                el = doc.createElement('div');
                el.innerHTML = html;
                fragment = doc.createDocumentFragment();
                while (el.firstChild) {
                    node = el.firstChild;
                    lastNode = fragment.appendChild(node);
                }
                range.insertNode(fragment);

                // Preserve the selection:
                if (lastNode) {
                    range = range.cloneRange();
                    range.setStartAfter(lastNode);
                    range.collapse(true);
                    MediumEditor.selection.selectRange(doc, range);
                }
                res = true;
            }

            // https://github.com/yabwe/medium-editor/issues/992
            // If we're monitoring calls to execCommand, notify listeners as if a real call had happened
            if (doc.execCommand.callListeners) {
                doc.execCommand.callListeners(ecArgs, res);
            }
            return res;
        },

        execFormatBlock: function (doc, tagName) {
            // Get the top level block element that contains the selection
            var blockContainer = Util.getTopBlockContainer(MediumEditor.selection.getSelectionStart(doc)),
                childNodes;

            // Special handling for blockquote
            if (tagName === 'blockquote') {
                if (blockContainer) {
                    childNodes = Array.prototype.slice.call(blockContainer.childNodes);
                    // Check if the blockquote has a block element as a child (nested blocks)
                    if (childNodes.some(function (childNode) {
                        return Util.isBlockContainer(childNode);
                    })) {
                        // FF handles blockquote differently on formatBlock
                        // allowing nesting, we need to use outdent
                        // https://developer.mozilla.org/en-US/docs/Rich-Text_Editing_in_Mozilla
                        return doc.execCommand('outdent', false, null);
                    }
                }

                // When IE blockquote needs to be called as indent
                // http://stackoverflow.com/questions/1816223/rich-text-editor-with-blockquote-function/1821777#1821777
                if (Util.isIE) {
                    return doc.execCommand('indent', false, tagName);
                }
            }

            // If the blockContainer is already the element type being passed in
            // treat it as 'undo' formatting and just convert it to a <p>
            if (blockContainer && tagName === blockContainer.nodeName.toLowerCase()) {
                tagName = 'p';
            }

            // When IE we need to add <> to heading elements
            // http://stackoverflow.com/questions/10741831/execcommand-formatblock-headings-in-ie
            if (Util.isIE) {
                tagName = '<' + tagName + '>';
            }

            // When FF, IE and Edge, we have to handle blockquote node seperately as 'formatblock' does not work.
            // https://developer.mozilla.org/en-US/docs/Web/API/Document/execCommand#Commands
            if (blockContainer && blockContainer.nodeName.toLowerCase() === 'blockquote') {
                // For IE, just use outdent
                if (Util.isIE && tagName === '<p>') {
                    return doc.execCommand('outdent', false, tagName);
                }

                // For Firefox and Edge, make sure there's a nested block element before calling outdent
                if ((Util.isFF || Util.isEdge) && tagName === 'p') {
                    childNodes = Array.prototype.slice.call(blockContainer.childNodes);
                    // If there are some non-block elements we need to wrap everything in a <p> before we outdent
                    if (childNodes.some(function (childNode) {
                        return !Util.isBlockContainer(childNode);
                    })) {
                        doc.execCommand('formatBlock', false, tagName);
                    }
                    return doc.execCommand('outdent', false, tagName);
                }
            }

            return doc.execCommand('formatBlock', false, tagName);
        },

        /**
         * Set target to blank on the given el element
         *
         * TODO: not sure if this should be here
         *
         * When creating a link (using core -> createLink) the selection returned by Firefox will be the parent of the created link
         * instead of the created link itself (as it is for Chrome for example), so we retrieve all "a" children to grab the good one by
         * using `anchorUrl` to ensure that we are adding target="_blank" on the good one.
         * This isn't a bulletproof solution anyway ..
         */
        setTargetBlank: function (el, anchorUrl) {
            var i, url = anchorUrl || false;
            if (el.nodeName.toLowerCase() === 'a') {
                el.target = '_blank';
                el.rel = 'noopener noreferrer';
            } else {
                el = el.getElementsByTagName('a');

                for (i = 0; i < el.length; i += 1) {
                    if (false === url || url === el[i].attributes.href.value) {
                        el[i].target = '_blank';
                        el[i].rel = 'noopener noreferrer';
                    }
                }
            }
        },

        /*
         * this function is called to explicitly remove the target='_blank' as FF holds on to _blank value even
         * after unchecking the checkbox on anchor form
         */
        removeTargetBlank: function (el, anchorUrl) {
            var i;
            if (el.nodeName.toLowerCase() === 'a') {
                el.removeAttribute('target');
                el.removeAttribute('rel');
            } else {
                el = el.getElementsByTagName('a');

                for (i = 0; i < el.length; i += 1) {
                    if (anchorUrl === el[i].attributes.href.value) {
                        el[i].removeAttribute('target');
                        el[i].removeAttribute('rel');
                    }
                }
            }
        },

        /*
         * this function adds one or several classes on an a element.
         * if el parameter is not an a, it will look for a children of el.
         * if no a children are found, it will look for the a parent.
         */
        addClassToAnchors: function (el, buttonClass) {
            var classes = buttonClass.split(' '),
                i,
                j;
            if (el.nodeName.toLowerCase() === 'a') {
                for (j = 0; j < classes.length; j += 1) {
                    el.classList.add(classes[j]);
                }
            } else {
                var aChildren = el.getElementsByTagName('a');
                if (aChildren.length === 0) {
                    var parentAnchor = Util.getClosestTag(el, 'a');
                    el = parentAnchor ? [parentAnchor] : [];
                } else {
                    el = aChildren;
                }
                for (i = 0; i < el.length; i += 1) {
                    for (j = 0; j < classes.length; j += 1) {
                        el[i].classList.add(classes[j]);
                    }
                }
            }
        },

        isListItem: function (node) {
            if (!node) {
                return false;
            }
            if (node.nodeName.toLowerCase() === 'li') {
                return true;
            }

            var parentNode = node.parentNode,
                tagName = parentNode.nodeName.toLowerCase();
            while (tagName === 'li' || (!Util.isBlockContainer(parentNode) && tagName !== 'div')) {
                if (tagName === 'li') {
                    return true;
                }
                parentNode = parentNode.parentNode;
                if (parentNode) {
                    tagName = parentNode.nodeName.toLowerCase();
                } else {
                    return false;
                }
            }
            return false;
        },

        cleanListDOM: function (ownerDocument, element) {
            if (element.nodeName.toLowerCase() !== 'li') {
                return;
            }

            var list = element.parentElement;

            if (list.parentElement.nodeName.toLowerCase() === 'p') { // yes we need to clean up
                Util.unwrap(list.parentElement, ownerDocument);

                // move cursor at the end of the text inside the list
                // for some unknown reason, the cursor is moved to end of the "visual" line
                MediumEditor.selection.moveCursor(ownerDocument, element.firstChild, element.firstChild.textContent.length);
            }
        },

        /* splitDOMTree
         *
         * Given a root element some descendant element, split the root element
         * into its own element containing the descendant element and all elements
         * on the left or right side of the descendant ('right' is default)
         *
         * example:
         *
         *         <div>
         *      /    |   \
         *  <span> <span> <span>
         *   / \    / \    / \
         *  1   2  3   4  5   6
         *
         *  If I wanted to split this tree given the <div> as the root and "4" as the leaf
         *  the result would be (the prime ' marks indicates nodes that are created as clones):
         *
         *   SPLITTING OFF 'RIGHT' TREE       SPLITTING OFF 'LEFT' TREE
         *
         *     <div>            <div>'              <div>'      <div>
         *      / \              / \                 / \          |
         * <span> <span>   <span>' <span>       <span> <span>   <span>
         *   / \    |        |      / \           /\     /\       /\
         *  1   2   3        4     5   6         1  2   3  4     5  6
         *
         *  The above example represents splitting off the 'right' or 'left' part of a tree, where
         *  the <div>' would be returned as an element not appended to the DOM, and the <div>
         *  would remain in place where it was
         *
        */
        splitOffDOMTree: function (rootNode, leafNode, splitLeft) {
            var splitOnNode = leafNode,
                createdNode = null,
                splitRight = !splitLeft;

            // loop until we hit the root
            while (splitOnNode !== rootNode) {
                var currParent = splitOnNode.parentNode,
                    newParent = currParent.cloneNode(false),
                    targetNode = (splitRight ? splitOnNode : currParent.firstChild),
                    appendLast;

                // Create a new parent element which is a clone of the current parent
                if (createdNode) {
                    if (splitRight) {
                        // If we're splitting right, add previous created element before siblings
                        newParent.appendChild(createdNode);
                    } else {
                        // If we're splitting left, add previous created element last
                        appendLast = createdNode;
                    }
                }
                createdNode = newParent;

                while (targetNode) {
                    var sibling = targetNode.nextSibling;
                    // Special handling for the 'splitNode'
                    if (targetNode === splitOnNode) {
                        if (!targetNode.hasChildNodes()) {
                            targetNode.parentNode.removeChild(targetNode);
                        } else {
                            // For the node we're splitting on, if it has children, we need to clone it
                            // and not just move it
                            targetNode = targetNode.cloneNode(false);
                        }
                        // If the resulting split node has content, add it
                        if (targetNode.textContent) {
                            createdNode.appendChild(targetNode);
                        }

                        targetNode = (splitRight ? sibling : null);
                    } else {
                        // For general case, just remove the element and only
                        // add it to the split tree if it contains something
                        targetNode.parentNode.removeChild(targetNode);
                        if (targetNode.hasChildNodes() || targetNode.textContent) {
                            createdNode.appendChild(targetNode);
                        }

                        targetNode = sibling;
                    }
                }

                // If we had an element we wanted to append at the end, do that now
                if (appendLast) {
                    createdNode.appendChild(appendLast);
                }

                splitOnNode = currParent;
            }

            return createdNode;
        },

        moveTextRangeIntoElement: function (startNode, endNode, newElement) {
            if (!startNode || !endNode) {
                return false;
            }

            var rootNode = Util.findCommonRoot(startNode, endNode);
            if (!rootNode) {
                return false;
            }

            if (endNode === startNode) {
                var temp = startNode.parentNode,
                    sibling = startNode.nextSibling;
                temp.removeChild(startNode);
                newElement.appendChild(startNode);
                if (sibling) {
                    temp.insertBefore(newElement, sibling);
                } else {
                    temp.appendChild(newElement);
                }
                return newElement.hasChildNodes();
            }

            // create rootChildren array which includes all the children
            // we care about
            var rootChildren = [],
                firstChild,
                lastChild,
                nextNode;
            for (var i = 0; i < rootNode.childNodes.length; i++) {
                nextNode = rootNode.childNodes[i];
                if (!firstChild) {
                    if (Util.isDescendant(nextNode, startNode, true)) {
                        firstChild = nextNode;
                    }
                } else {
                    if (Util.isDescendant(nextNode, endNode, true)) {
                        lastChild = nextNode;
                        break;
                    } else {
                        rootChildren.push(nextNode);
                    }
                }
            }

            var afterLast = lastChild.nextSibling,
                fragment = rootNode.ownerDocument.createDocumentFragment();

            // build up fragment on startNode side of tree
            if (firstChild === startNode) {
                firstChild.parentNode.removeChild(firstChild);
                fragment.appendChild(firstChild);
            } else {
                fragment.appendChild(Util.splitOffDOMTree(firstChild, startNode));
            }

            // add any elements between firstChild & lastChild
            rootChildren.forEach(function (element) {
                element.parentNode.removeChild(element);
                fragment.appendChild(element);
            });

            // build up fragment on endNode side of the tree
            if (lastChild === endNode) {
                lastChild.parentNode.removeChild(lastChild);
                fragment.appendChild(lastChild);
            } else {
                fragment.appendChild(Util.splitOffDOMTree(lastChild, endNode, true));
            }

            // Add fragment into passed in element
            newElement.appendChild(fragment);

            if (lastChild.parentNode === rootNode) {
                // If last child is in the root, insert newElement in front of it
                rootNode.insertBefore(newElement, lastChild);
            } else if (afterLast) {
                // If last child was removed, but it had a sibling, insert in front of it
                rootNode.insertBefore(newElement, afterLast);
            } else {
                // lastChild was removed and was the last actual element just append
                rootNode.appendChild(newElement);
            }

            return newElement.hasChildNodes();
        },

        /* based on http://stackoverflow.com/a/6183069 */
        depthOfNode: function (inNode) {
            var theDepth = 0,
                node = inNode;
            while (node.parentNode !== null) {
                node = node.parentNode;
                theDepth++;
            }
            return theDepth;
        },

        findCommonRoot: function (inNode1, inNode2) {
            var depth1 = Util.depthOfNode(inNode1),
                depth2 = Util.depthOfNode(inNode2),
                node1 = inNode1,
                node2 = inNode2;

            while (depth1 !== depth2) {
                if (depth1 > depth2) {
                    node1 = node1.parentNode;
                    depth1 -= 1;
                } else {
                    node2 = node2.parentNode;
                    depth2 -= 1;
                }
            }

            while (node1 !== node2) {
                node1 = node1.parentNode;
                node2 = node2.parentNode;
            }

            return node1;
        },
        /* END - based on http://stackoverflow.com/a/6183069 */

        isElementAtBeginningOfBlock: function (node) {
            var textVal,
                sibling;
            while (!Util.isBlockContainer(node) && !Util.isMediumEditorElement(node)) {
                sibling = node;
                while (sibling = sibling.previousSibling) {
                    textVal = sibling.nodeType === 3 ? sibling.nodeValue : sibling.textContent;
                    if (textVal.length > 0) {
                        return false;
                    }
                }
                node = node.parentNode;
            }
            return true;
        },

        isMediumEditorElement: function (element) {
            return element && element.getAttribute && !!element.getAttribute('data-medium-editor-element');
        },

        getContainerEditorElement: function (element) {
            return Util.traverseUp(element, function (node) {
                return Util.isMediumEditorElement(node);
            });
        },

        isBlockContainer: function (element) {
            return element && element.nodeType !== 3 && Util.blockContainerElementNames.indexOf(element.nodeName.toLowerCase()) !== -1;
        },

        /* Finds the closest ancestor which is a block container element
         * If element is within editor element but not within any other block element,
         * the editor element is returned
         */
        getClosestBlockContainer: function (node) {
            return Util.traverseUp(node, function (node) {
                return Util.isBlockContainer(node) || Util.isMediumEditorElement(node);
            });
        },

        /* Finds highest level ancestor element which is a block container element
         * If element is within editor element but not within any other block element,
         * the editor element is returned
         */
        getTopBlockContainer: function (element) {
            var topBlock = Util.isBlockContainer(element) ? element : false;
            Util.traverseUp(element, function (el) {
                if (Util.isBlockContainer(el)) {
                    topBlock = el;
                }
                if (!topBlock && Util.isMediumEditorElement(el)) {
                    topBlock = el;
                    return true;
                }
                return false;
            });
            return topBlock;
        },

        getFirstSelectableLeafNode: function (element) {
            while (element && element.firstChild) {
                element = element.firstChild;
            }

            // We don't want to set the selection to an element that can't have children, this messes up Gecko.
            element = Util.traverseUp(element, function (el) {
                return Util.emptyElementNames.indexOf(el.nodeName.toLowerCase()) === -1;
            });
            // Selecting at the beginning of a table doesn't work in PhantomJS.
            if (element.nodeName.toLowerCase() === 'table') {
                var firstCell = element.querySelector('th, td');
                if (firstCell) {
                    element = firstCell;
                }
            }
            return element;
        },

        // TODO: remove getFirstTextNode AND _getFirstTextNode when jumping in 6.0.0 (no code references)
        getFirstTextNode: function (element) {
            Util.warn('getFirstTextNode is deprecated and will be removed in version 6.0.0');
            return Util._getFirstTextNode(element);
        },

        _getFirstTextNode: function (element) {
            if (element.nodeType === 3) {
                return element;
            }

            for (var i = 0; i < element.childNodes.length; i++) {
                var textNode = Util._getFirstTextNode(element.childNodes[i]);
                if (textNode !== null) {
                    return textNode;
                }
            }
            return null;
        },

        ensureUrlHasProtocol: function (url) {
            if (url.indexOf('://') === -1) {
                return 'http://' + url;
            }
            return url;
        },

        warn: function () {
            if (window.console !== undefined && typeof window.console.warn === 'function') {
                window.console.warn.apply(window.console, arguments);
            }
        },

        deprecated: function (oldName, newName, version) {
            // simple deprecation warning mechanism.
            var m = oldName + ' is deprecated, please use ' + newName + ' instead.';
            if (version) {
                m += ' Will be removed in ' + version;
            }
            Util.warn(m);
        },

        deprecatedMethod: function (oldName, newName, args, version) {
            // run the replacement and warn when someone calls a deprecated method
            Util.deprecated(oldName, newName, version);
            if (typeof this[newName] === 'function') {
                this[newName].apply(this, args);
            }
        },

        cleanupAttrs: function (el, attrs) {
            attrs.forEach(function (attr) {
                el.removeAttribute(attr);
            });
        },

        cleanupTags: function (el, tags) {
            if (tags.indexOf(el.nodeName.toLowerCase()) !== -1) {
                el.parentNode.removeChild(el);
            }
        },

        unwrapTags: function (el, tags) {
            if (tags.indexOf(el.nodeName.toLowerCase()) !== -1) {
                MediumEditor.util.unwrap(el, document);
            }
        },

        // get the closest parent
        getClosestTag: function (el, tag) {
            return Util.traverseUp(el, function (element) {
                return element.nodeName.toLowerCase() === tag.toLowerCase();
            });
        },

        unwrap: function (el, doc) {
            var fragment = doc.createDocumentFragment(),
                nodes = Array.prototype.slice.call(el.childNodes);

            // cast nodeList to array since appending child
            // to a different node will alter length of el.childNodes
            for (var i = 0; i < nodes.length; i++) {
                fragment.appendChild(nodes[i]);
            }

            if (fragment.childNodes.length) {
                el.parentNode.replaceChild(fragment, el);
            } else {
                el.parentNode.removeChild(el);
            }
        },

        guid: function () {
            function _s4() {
                return Math
                    .floor((1 + Math.random()) * 0x10000)
                    .toString(16)
                    .substring(1);
            }

            return _s4() + _s4() + '-' + _s4() + '-' + _s4() + '-' + _s4() + '-' + _s4() + _s4() + _s4();
        }
    };

    MediumEditor.util = Util;
}(window));

(function () {
    'use strict';

    var Extension = function (options) {
        MediumEditor.util.extend(this, options);
    };

    Extension.extend = function (protoProps) {
        // magic extender thinger. mostly borrowed from backbone/goog.inherits
        // place this function on some thing you want extend-able.
        //
        // example:
        //
        //      function Thing(args){
        //          this.options = args;
        //      }
        //
        //      Thing.prototype = { foo: "bar" };
        //      Thing.extend = extenderify;
        //
        //      var ThingTwo = Thing.extend({ foo: "baz" });
        //
        //      var thingOne = new Thing(); // foo === "bar"
        //      var thingTwo = new ThingTwo(); // foo === "baz"
        //
        //      which seems like some simply shallow copy nonsense
        //      at first, but a lot more is going on there.
        //
        //      passing a `constructor` to the extend props
        //      will cause the instance to instantiate through that
        //      instead of the parent's constructor.

        var parent = this,
            child;

        // The constructor function for the new subclass is either defined by you
        // (the "constructor" property in your `extend` definition), or defaulted
        // by us to simply call the parent's constructor.

        if (protoProps && protoProps.hasOwnProperty('constructor')) {
            child = protoProps.constructor;
        } else {
            child = function () {
                return parent.apply(this, arguments);
            };
        }

        // das statics (.extend comes over, so your subclass can have subclasses too)
        MediumEditor.util.extend(child, parent);

        // Set the prototype chain to inherit from `parent`, without calling
        // `parent`'s constructor function.
        var Surrogate = function () {
            this.constructor = child;
        };
        Surrogate.prototype = parent.prototype;
        child.prototype = new Surrogate();

        if (protoProps) {
            MediumEditor.util.extend(child.prototype, protoProps);
        }

        // todo: $super?

        return child;
    };

    Extension.prototype = {
        /* init: [function]
         *
         * Called by MediumEditor during initialization.
         * The .base property will already have been set to
         * current instance of MediumEditor when this is called.
         * All helper methods will exist as well
         */
        init: function () {},

        /* base: [MediumEditor instance]
         *
         * If not overriden, this will be set to the current instance
         * of MediumEditor, before the init method is called
         */
        base: undefined,

        /* name: [string]
         *
         * 'name' of the extension, used for retrieving the extension.
         * If not set, MediumEditor will set this to be the key
         * used when passing the extension into MediumEditor via the
         * 'extensions' option
         */
        name: undefined,

        /* checkState: [function (node)]
         *
         * If implemented, this function will be called one or more times
         * the state of the editor & toolbar are updated.
         * When the state is updated, the editor does the following:
         *
         * 1) Find the parent node containing the current selection
         * 2) Call checkState on the extension, passing the node as an argument
         * 3) Get the parent node of the previous node
         * 4) Repeat steps #2 and #3 until we move outside the parent contenteditable
         */
        checkState: undefined,

        /* destroy: [function ()]
         *
         * This method should remove any created html, custom event handlers
         * or any other cleanup tasks that should be performed.
         * If implemented, this function will be called when MediumEditor's
         * destroy method has been called.
         */
        destroy: undefined,

        /* As alternatives to checkState, these functions provide a more structured
         * path to updating the state of an extension (usually a button) whenever
         * the state of the editor & toolbar are updated.
         */

        /* queryCommandState: [function ()]
         *
         * If implemented, this function will be called once on each extension
         * when the state of the editor/toolbar is being updated.
         *
         * If this function returns a non-null value, the extension will
         * be ignored as the code climbs the dom tree.
         *
         * If this function returns true, and the setActive() function is defined
         * setActive() will be called
         */
        queryCommandState: undefined,

        /* isActive: [function ()]
         *
         * If implemented, this function will be called when MediumEditor
         * has determined that this extension is 'active' for the current selection.
         * This may be called when the editor & toolbar are being updated,
         * but only if queryCommandState() or isAlreadyApplied() functions
         * are implemented, and when called, return true.
         */
        isActive: undefined,

        /* isAlreadyApplied: [function (node)]
         *
         * If implemented, this function is similar to checkState() in
         * that it will be called repeatedly as MediumEditor moves up
         * the DOM to update the editor & toolbar after a state change.
         *
         * NOTE: This function will NOT be called if checkState() has
         * been implemented. This function will NOT be called if
         * queryCommandState() is implemented and returns a non-null
         * value when called
         */
        isAlreadyApplied: undefined,

        /* setActive: [function ()]
         *
         * If implemented, this function is called when MediumEditor knows
         * that this extension is currently enabled.  Currently, this
         * function is called when updating the editor & toolbar, and
         * only if queryCommandState() or isAlreadyApplied(node) return
         * true when called
         */
        setActive: undefined,

        /* setInactive: [function ()]
         *
         * If implemented, this function is called when MediumEditor knows
         * that this extension is currently disabled.  Curently, this
         * is called at the beginning of each state change for
         * the editor & toolbar. After calling this, MediumEditor
         * will attempt to update the extension, either via checkState()
         * or the combination of queryCommandState(), isAlreadyApplied(node),
         * isActive(), and setActive()
         */
        setInactive: undefined,

        /* getInteractionElements: [function ()]
         *
         * If the extension renders any elements that the user can interact with,
         * this method should be implemented and return the root element or an array
         * containing all of the root elements. MediumEditor will call this function
         * during interaction to see if the user clicked on something outside of the editor.
         * The elements are used to check if the target element of a click or
         * other user event is a descendant of any extension elements.
         * This way, the editor can also count user interaction within editor elements as
         * interactions with the editor, and thus not trigger 'blur'
         */
        getInteractionElements: undefined,

        /************************ Helpers ************************
         * The following are helpers that are either set by MediumEditor
         * during initialization, or are helper methods which either
         * route calls to the MediumEditor instance or provide common
         * functionality for all extensions
         *********************************************************/

        /* window: [Window]
         *
         * If not overriden, this will be set to the window object
         * to be used by MediumEditor and its extensions.  This is
         * passed via the 'contentWindow' option to MediumEditor
         * and is the global 'window' object by default
         */
        'window': undefined,

        /* document: [Document]
         *
         * If not overriden, this will be set to the document object
         * to be used by MediumEditor and its extensions. This is
         * passed via the 'ownerDocument' optin to MediumEditor
         * and is the global 'document' object by default
         */
        'document': undefined,

        /* getEditorElements: [function ()]
         *
         * Helper function which returns an array containing
         * all the contenteditable elements for this instance
         * of MediumEditor
         */
        getEditorElements: function () {
            return this.base.elements;
        },

        /* getEditorId: [function ()]
         *
         * Helper function which returns a unique identifier
         * for this instance of MediumEditor
         */
        getEditorId: function () {
            return this.base.id;
        },

        /* getEditorOptions: [function (option)]
         *
         * Helper function which returns the value of an option
         * used to initialize this instance of MediumEditor
         */
        getEditorOption: function (option) {
            return this.base.options[option];
        }
    };

    /* List of method names to add to the prototype of Extension
     * Each of these methods will be defined as helpers that
     * just call directly into the MediumEditor instance.
     *
     * example for 'on' method:
     * Extension.prototype.on = function () {
     *     return this.base.on.apply(this.base, arguments);
     * }
     */
    [
        // general helpers
        'execAction',

        // event handling
        'on',
        'off',
        'subscribe',
        'trigger'

    ].forEach(function (helper) {
        Extension.prototype[helper] = function () {
            return this.base[helper].apply(this.base, arguments);
        };
    });

    MediumEditor.Extension = Extension;
})();

(function () {
    'use strict';

    function filterOnlyParentElements(node) {
        if (MediumEditor.util.isBlockContainer(node)) {
            return NodeFilter.FILTER_ACCEPT;
        } else {
            return NodeFilter.FILTER_SKIP;
        }
    }

    var Selection = {
        findMatchingSelectionParent: function (testElementFunction, contentWindow) {
            var selection = contentWindow.getSelection(),
                range,
                current;

            if (selection.rangeCount === 0) {
                return false;
            }

            range = selection.getRangeAt(0);
            current = range.commonAncestorContainer;

            return MediumEditor.util.traverseUp(current, testElementFunction);
        },

        getSelectionElement: function (contentWindow) {
            return this.findMatchingSelectionParent(function (el) {
                return MediumEditor.util.isMediumEditorElement(el);
            }, contentWindow);
        },

        // http://stackoverflow.com/questions/17678843/cant-restore-selection-after-html-modify-even-if-its-the-same-html
        // Tim Down
        exportSelection: function (root, doc) {
            if (!root) {
                return null;
            }

            var selectionState = null,
                selection = doc.getSelection();

            if (selection.rangeCount > 0) {
                var range = selection.getRangeAt(0),
                    preSelectionRange = range.cloneRange(),
                    start;

                preSelectionRange.selectNodeContents(root);
                preSelectionRange.setEnd(range.startContainer, range.startOffset);
                start = preSelectionRange.toString().length;

                selectionState = {
                    start: start,
                    end: start + range.toString().length
                };

                // Check to see if the selection starts with any images
                // if so we need to make sure the the beginning of the selection is
                // set correctly when importing selection
                if (this.doesRangeStartWithImages(range, doc)) {
                    selectionState.startsWithImage = true;
                }

                // Check to see if the selection has any trailing images
                // if so, this this means we need to look for them when we import selection
                var trailingImageCount = this.getTrailingImageCount(root, selectionState, range.endContainer, range.endOffset);
                if (trailingImageCount) {
                    selectionState.trailingImageCount = trailingImageCount;
                }

                // If start = 0 there may still be an empty paragraph before it, but we don't care.
                if (start !== 0) {
                    var emptyBlocksIndex = this.getIndexRelativeToAdjacentEmptyBlocks(doc, root, range.startContainer, range.startOffset);
                    if (emptyBlocksIndex !== -1) {
                        selectionState.emptyBlocksIndex = emptyBlocksIndex;
                    }
                }
            }

            return selectionState;
        },

        // http://stackoverflow.com/questions/17678843/cant-restore-selection-after-html-modify-even-if-its-the-same-html
        // Tim Down
        //
        // {object} selectionState - the selection to import
        // {DOMElement} root - the root element the selection is being restored inside of
        // {Document} doc - the document to use for managing selection
        // {boolean} [favorLaterSelectionAnchor] - defaults to false. If true, import the cursor immediately
        //      subsequent to an anchor tag if it would otherwise be placed right at the trailing edge inside the
        //      anchor. This cursor positioning, even though visually equivalent to the user, can affect behavior
        //      in MS IE.
        importSelection: function (selectionState, root, doc, favorLaterSelectionAnchor) {
            if (!selectionState || !root) {
                return;
            }

            var range = doc.createRange();
            range.setStart(root, 0);
            range.collapse(true);

            var node = root,
                nodeStack = [],
                charIndex = 0,
                foundStart = false,
                foundEnd = false,
                trailingImageCount = 0,
                stop = false,
                nextCharIndex,
                allowRangeToStartAtEndOfNode = false,
                lastTextNode = null;

            // When importing selection, the start of the selection may lie at the end of an element
            // or at the beginning of an element.  Since visually there is no difference between these 2
            // we will try to move the selection to the beginning of an element since this is generally
            // what users will expect and it's a more predictable behavior.
            //
            // However, there are some specific cases when we don't want to do this:
            //  1) We're attempting to move the cursor outside of the end of an anchor [favorLaterSelectionAnchor = true]
            //  2) The selection starts with an image, which is special since an image doesn't have any 'content'
            //     as far as selection and ranges are concerned
            //  3) The selection starts after a specified number of empty block elements (selectionState.emptyBlocksIndex)
            //
            // For these cases, we want the selection to start at a very specific location, so we should NOT
            // automatically move the cursor to the beginning of the first actual chunk of text
            if (favorLaterSelectionAnchor || selectionState.startsWithImage || typeof selectionState.emptyBlocksIndex !== 'undefined') {
                allowRangeToStartAtEndOfNode = true;
            }

            while (!stop && node) {
                // Only iterate over elements and text nodes
                if (node.nodeType > 3) {
                    node = nodeStack.pop();
                    continue;
                }

                // If we hit a text node, we need to add the amount of characters to the overall count
                if (node.nodeType === 3 && !foundEnd) {
                    nextCharIndex = charIndex + node.length;
                    // Check if we're at or beyond the start of the selection we're importing
                    if (!foundStart && selectionState.start >= charIndex && selectionState.start <= nextCharIndex) {
                        // NOTE: We only want to allow a selection to start at the END of an element if
                        //  allowRangeToStartAtEndOfNode is true
                        if (allowRangeToStartAtEndOfNode || selectionState.start < nextCharIndex) {
                            range.setStart(node, selectionState.start - charIndex);
                            foundStart = true;
                        }
                        // We're at the end of a text node where the selection could start but we shouldn't
                        // make the selection start here because allowRangeToStartAtEndOfNode is false.
                        // However, we should keep a reference to this node in case there aren't any more
                        // text nodes after this, so that we have somewhere to import the selection to
                        else {
                            lastTextNode = node;
                        }
                    }
                    // We've found the start of the selection, check if we're at or beyond the end of the selection we're importing
                    if (foundStart && selectionState.end >= charIndex && selectionState.end <= nextCharIndex) {
                        if (!selectionState.trailingImageCount) {
                            range.setEnd(node, selectionState.end - charIndex);
                            stop = true;
                        } else {
                            foundEnd = true;
                        }
                    }
                    charIndex = nextCharIndex;
                } else {
                    if (selectionState.trailingImageCount && foundEnd) {
                        if (node.nodeName.toLowerCase() === 'img') {
                            trailingImageCount++;
                        }
                        if (trailingImageCount === selectionState.trailingImageCount) {
                            // Find which index the image is in its parent's children
                            var endIndex = 0;
                            while (node.parentNode.childNodes[endIndex] !== node) {
                                endIndex++;
                            }
                            range.setEnd(node.parentNode, endIndex + 1);
                            stop = true;
                        }
                    }

                    if (!stop && node.nodeType === 1) {
                        // this is an element
                        // add all its children to the stack
                        var i = node.childNodes.length - 1;
                        while (i >= 0) {
                            nodeStack.push(node.childNodes[i]);
                            i -= 1;
                        }
                    }
                }

                if (!stop) {
                    node = nodeStack.pop();
                }
            }

            // If we've gone through the entire text but didn't find the beginning of a text node
            // to make the selection start at, we should fall back to starting the selection
            // at the END of the last text node we found
            if (!foundStart && lastTextNode) {
                range.setStart(lastTextNode, lastTextNode.length);
                range.setEnd(lastTextNode, lastTextNode.length);
            }

            if (typeof selectionState.emptyBlocksIndex !== 'undefined') {
                range = this.importSelectionMoveCursorPastBlocks(doc, root, selectionState.emptyBlocksIndex, range);
            }

            // If the selection is right at the ending edge of a link, put it outside the anchor tag instead of inside.
            if (favorLaterSelectionAnchor) {
                range = this.importSelectionMoveCursorPastAnchor(selectionState, range);
            }

            this.selectRange(doc, range);
        },

        // Utility method called from importSelection only
        importSelectionMoveCursorPastAnchor: function (selectionState, range) {
            var nodeInsideAnchorTagFunction = function (node) {
                return node.nodeName.toLowerCase() === 'a';
            };
            if (selectionState.start === selectionState.end &&
                    range.startContainer.nodeType === 3 &&
                    range.startOffset === range.startContainer.nodeValue.length &&
                    MediumEditor.util.traverseUp(range.startContainer, nodeInsideAnchorTagFunction)) {
                var prevNode = range.startContainer,
                    currentNode = range.startContainer.parentNode;
                while (currentNode !== null && currentNode.nodeName.toLowerCase() !== 'a') {
                    if (currentNode.childNodes[currentNode.childNodes.length - 1] !== prevNode) {
                        currentNode = null;
                    } else {
                        prevNode = currentNode;
                        currentNode = currentNode.parentNode;
                    }
                }
                if (currentNode !== null && currentNode.nodeName.toLowerCase() === 'a') {
                    var currentNodeIndex = null;
                    for (var i = 0; currentNodeIndex === null && i < currentNode.parentNode.childNodes.length; i++) {
                        if (currentNode.parentNode.childNodes[i] === currentNode) {
                            currentNodeIndex = i;
                        }
                    }
                    range.setStart(currentNode.parentNode, currentNodeIndex + 1);
                    range.collapse(true);
                }
            }
            return range;
        },

        // Uses the emptyBlocksIndex calculated by getIndexRelativeToAdjacentEmptyBlocks
        // to move the cursor back to the start of the correct paragraph
        importSelectionMoveCursorPastBlocks: function (doc, root, index, range) {
            var treeWalker = doc.createTreeWalker(root, NodeFilter.SHOW_ELEMENT, filterOnlyParentElements, false),
                startContainer = range.startContainer,
                startBlock,
                targetNode,
                currIndex = 0;
            index = index || 1; // If index is 0, we still want to move to the next block

            // Chrome counts newlines and spaces that separate block elements as actual elements.
            // If the selection is inside one of these text nodes, and it has a previous sibling
            // which is a block element, we want the treewalker to start at the previous sibling
            // and NOT at the parent of the textnode
            if (startContainer.nodeType === 3 && MediumEditor.util.isBlockContainer(startContainer.previousSibling)) {
                startBlock = startContainer.previousSibling;
            } else {
                startBlock = MediumEditor.util.getClosestBlockContainer(startContainer);
            }

            // Skip over empty blocks until we hit the block we want the selection to be in
            while (treeWalker.nextNode()) {
                if (!targetNode) {
                    // Loop through all blocks until we hit the starting block element
                    if (startBlock === treeWalker.currentNode) {
                        targetNode = treeWalker.currentNode;
                    }
                } else {
                    targetNode = treeWalker.currentNode;
                    currIndex++;
                    // We hit the target index, bail
                    if (currIndex === index) {
                        break;
                    }
                    // If we find a non-empty block, ignore the emptyBlocksIndex and just put selection here
                    if (targetNode.textContent.length > 0) {
                        break;
                    }
                }
            }

            if (!targetNode) {
                targetNode = startBlock;
            }

            // We're selecting a high-level block node, so make sure the cursor gets moved into the deepest
            // element at the beginning of the block
            range.setStart(MediumEditor.util.getFirstSelectableLeafNode(targetNode), 0);

            return range;
        },

        // Returns -1 unless the cursor is at the beginning of a paragraph/block
        // If the paragraph/block is preceeded by empty paragraphs/block (with no text)
        // it will return the number of empty paragraphs before the cursor.
        // Otherwise, it will return 0, which indicates the cursor is at the beginning
        // of a paragraph/block, and not at the end of the paragraph/block before it
        getIndexRelativeToAdjacentEmptyBlocks: function (doc, root, cursorContainer, cursorOffset) {
            // If there is text in front of the cursor, that means there isn't only empty blocks before it
            if (cursorContainer.textContent.length > 0 && cursorOffset > 0) {
                return -1;
            }

            // Check if the block that contains the cursor has any other text in front of the cursor
            var node = cursorContainer;
            if (node.nodeType !== 3) {
                node = cursorContainer.childNodes[cursorOffset];
            }
            if (node) {
                // The element isn't at the beginning of a block, so it has content before it
                if (!MediumEditor.util.isElementAtBeginningOfBlock(node)) {
                    return -1;
                }

                var previousSibling = MediumEditor.util.findPreviousSibling(node);
                // If there is no previous sibling, this is the first text element in the editor
                if (!previousSibling) {
                    return -1;
                }
                // If the previous sibling has text, then there are no empty blocks before this
                else if (previousSibling.nodeValue) {
                    return -1;
                }
            }

            // Walk over block elements, counting number of empty blocks between last piece of text
            // and the block the cursor is in
            var closestBlock = MediumEditor.util.getClosestBlockContainer(cursorContainer),
                treeWalker = doc.createTreeWalker(root, NodeFilter.SHOW_ELEMENT, filterOnlyParentElements, false),
                emptyBlocksCount = 0;
            while (treeWalker.nextNode()) {
                var blockIsEmpty = treeWalker.currentNode.textContent === '';
                if (blockIsEmpty || emptyBlocksCount > 0) {
                    emptyBlocksCount += 1;
                }
                if (treeWalker.currentNode === closestBlock) {
                    return emptyBlocksCount;
                }
                if (!blockIsEmpty) {
                    emptyBlocksCount = 0;
                }
            }

            return emptyBlocksCount;
        },

        // Returns true if the selection range begins with an image tag
        // Returns false if the range starts with any non empty text nodes
        doesRangeStartWithImages: function (range, doc) {
            if (range.startOffset !== 0 || range.startContainer.nodeType !== 1) {
                return false;
            }

            if (range.startContainer.nodeName.toLowerCase() === 'img') {
                return true;
            }

            var img = range.startContainer.querySelector('img');
            if (!img) {
                return false;
            }

            var treeWalker = doc.createTreeWalker(range.startContainer, NodeFilter.SHOW_ALL, null, false);
            while (treeWalker.nextNode()) {
                var next = treeWalker.currentNode;
                // If we hit the image, then there isn't any text before the image so
                // the image is at the beginning of the range
                if (next === img) {
                    break;
                }
                // If we haven't hit the iamge, but found text that contains content
                // then the range doesn't start with an image
                if (next.nodeValue) {
                    return false;
                }
            }

            return true;
        },

        getTrailingImageCount: function (root, selectionState, endContainer, endOffset) {
            // If the endOffset of a range is 0, the endContainer doesn't contain images
            // If the endContainer is a text node, there are no trailing images
            if (endOffset === 0 || endContainer.nodeType !== 1) {
                return 0;
            }

            // If the endContainer isn't an image, and doesn't have an image descendants
            // there are no trailing images
            if (endContainer.nodeName.toLowerCase() !== 'img' && !endContainer.querySelector('img')) {
                return 0;
            }

            var lastNode = endContainer.childNodes[endOffset - 1];
            while (lastNode.hasChildNodes()) {
                lastNode = lastNode.lastChild;
            }

            var node = root,
                nodeStack = [],
                charIndex = 0,
                foundStart = false,
                foundEnd = false,
                stop = false,
                nextCharIndex,
                trailingImages = 0;

            while (!stop && node) {
                // Only iterate over elements and text nodes
                if (node.nodeType > 3) {
                    node = nodeStack.pop();
                    continue;
                }

                if (node.nodeType === 3 && !foundEnd) {
                    trailingImages = 0;
                    nextCharIndex = charIndex + node.length;
                    if (!foundStart && selectionState.start >= charIndex && selectionState.start <= nextCharIndex) {
                        foundStart = true;
                    }
                    if (foundStart && selectionState.end >= charIndex && selectionState.end <= nextCharIndex) {
                        foundEnd = true;
                    }
                    charIndex = nextCharIndex;
                } else {
                    if (node.nodeName.toLowerCase() === 'img') {
                        trailingImages++;
                    }

                    if (node === lastNode) {
                        stop = true;
                    } else if (node.nodeType === 1) {
                        // this is an element
                        // add all its children to the stack
                        var i = node.childNodes.length - 1;
                        while (i >= 0) {
                            nodeStack.push(node.childNodes[i]);
                            i -= 1;
                        }
                    }
                }

                if (!stop) {
                    node = nodeStack.pop();
                }
            }

            return trailingImages;
        },

        // determine if the current selection contains any 'content'
        // content being any non-white space text or an image
        selectionContainsContent: function (doc) {
            var sel = doc.getSelection();

            // collapsed selection or selection withour range doesn't contain content
            if (!sel || sel.isCollapsed || !sel.rangeCount) {
                return false;
            }

            // if toString() contains any text, the selection contains some content
            if (sel.toString().trim() !== '') {
                return true;
            }

            // if selection contains only image(s), it will return empty for toString()
            // so check for an image manually
            var selectionNode = this.getSelectedParentElement(sel.getRangeAt(0));
            if (selectionNode) {
                if (selectionNode.nodeName.toLowerCase() === 'img' ||
                    (selectionNode.nodeType === 1 && selectionNode.querySelector('img'))) {
                    return true;
                }
            }

            return false;
        },

        selectionInContentEditableFalse: function (contentWindow) {
            // determine if the current selection is exclusively inside
            // a contenteditable="false", though treat the case of an
            // explicit contenteditable="true" inside a "false" as false.
            var sawtrue,
                sawfalse = this.findMatchingSelectionParent(function (el) {
                    var ce = el && el.getAttribute('contenteditable');
                    if (ce === 'true') {
                        sawtrue = true;
                    }
                    return el.nodeName !== '#text' && ce === 'false';
                }, contentWindow);

            return !sawtrue && sawfalse;
        },

        // http://stackoverflow.com/questions/4176923/html-of-selected-text
        // by Tim Down
        getSelectionHtml: function getSelectionHtml(doc) {
            var i,
                html = '',
                sel = doc.getSelection(),
                len,
                container;
            if (sel.rangeCount) {
                container = doc.createElement('div');
                for (i = 0, len = sel.rangeCount; i < len; i += 1) {
                    container.appendChild(sel.getRangeAt(i).cloneContents());
                }
                html = container.innerHTML;
            }
            return html;
        },

        /**
         *  Find the caret position within an element irrespective of any inline tags it may contain.
         *
         *  @param {DOMElement} An element containing the cursor to find offsets relative to.
         *  @param {Range} A Range representing cursor position. Will window.getSelection if none is passed.
         *  @return {Object} 'left' and 'right' attributes contain offsets from begining and end of Element
         */
        getCaretOffsets: function getCaretOffsets(element, range) {
            var preCaretRange, postCaretRange;

            if (!range) {
                range = window.getSelection().getRangeAt(0);
            }

            preCaretRange = range.cloneRange();
            postCaretRange = range.cloneRange();

            preCaretRange.selectNodeContents(element);
            preCaretRange.setEnd(range.endContainer, range.endOffset);

            postCaretRange.selectNodeContents(element);
            postCaretRange.setStart(range.endContainer, range.endOffset);

            return {
                left: preCaretRange.toString().length,
                right: postCaretRange.toString().length
            };
        },

        // http://stackoverflow.com/questions/15867542/range-object-get-selection-parent-node-chrome-vs-firefox
        rangeSelectsSingleNode: function (range) {
            var startNode = range.startContainer;
            return startNode === range.endContainer &&
                startNode.hasChildNodes() &&
                range.endOffset === range.startOffset + 1;
        },

        getSelectedParentElement: function (range) {
            if (!range) {
                return null;
            }

            // Selection encompasses a single element
            if (this.rangeSelectsSingleNode(range) && range.startContainer.childNodes[range.startOffset].nodeType !== 3) {
                return range.startContainer.childNodes[range.startOffset];
            }

            // Selection range starts inside a text node, so get its parent
            if (range.startContainer.nodeType === 3) {
                return range.startContainer.parentNode;
            }

            // Selection starts inside an element
            return range.startContainer;
        },

        getSelectedElements: function (doc) {
            var selection = doc.getSelection(),
                range,
                toRet,
                currNode;

            if (!selection.rangeCount || selection.isCollapsed || !selection.getRangeAt(0).commonAncestorContainer) {
                return [];
            }

            range = selection.getRangeAt(0);

            if (range.commonAncestorContainer.nodeType === 3) {
                toRet = [];
                currNode = range.commonAncestorContainer;
                while (currNode.parentNode && currNode.parentNode.childNodes.length === 1) {
                    toRet.push(currNode.parentNode);
                    currNode = currNode.parentNode;
                }

                return toRet;
            }

            return [].filter.call(range.commonAncestorContainer.getElementsByTagName('*'), function (el) {
                return (typeof selection.containsNode === 'function') ? selection.containsNode(el, true) : true;
            });
        },

        selectNode: function (node, doc) {
            var range = doc.createRange();
            range.selectNodeContents(node);
            this.selectRange(doc, range);
        },

        select: function (doc, startNode, startOffset, endNode, endOffset) {
            var range = doc.createRange();
            range.setStart(startNode, startOffset);
            if (endNode) {
                range.setEnd(endNode, endOffset);
            } else {
                range.collapse(true);
            }
            this.selectRange(doc, range);
            return range;
        },

        /**
         *  Clear the current highlighted selection and set the caret to the start or the end of that prior selection, defaults to end.
         *
         *  @param {DomDocument} doc            Current document
         *  @param {boolean} moveCursorToStart  A boolean representing whether or not to set the caret to the beginning of the prior selection.
         */
        clearSelection: function (doc, moveCursorToStart) {
            if (moveCursorToStart) {
                doc.getSelection().collapseToStart();
            } else {
                doc.getSelection().collapseToEnd();
            }
        },

        /**
         * Move cursor to the given node with the given offset.
         *
         * @param  {DomDocument} doc     Current document
         * @param  {DomElement}  node    Element where to jump
         * @param  {integer}     offset  Where in the element should we jump, 0 by default
         */
        moveCursor: function (doc, node, offset) {
            this.select(doc, node, offset);
        },

        getSelectionRange: function (ownerDocument) {
            var selection = ownerDocument.getSelection();
            if (selection.rangeCount === 0) {
                return null;
            }
            return selection.getRangeAt(0);
        },

        selectRange: function (ownerDocument, range) {
            var selection = ownerDocument.getSelection();

            selection.removeAllRanges();
            selection.addRange(range);
        },

        // http://stackoverflow.com/questions/1197401/how-can-i-get-the-element-the-caret-is-in-with-javascript-when-using-contentedi
        // by You
        getSelectionStart: function (ownerDocument) {
            var node = ownerDocument.getSelection().anchorNode,
                startNode = (node && node.nodeType === 3 ? node.parentNode : node);

            return startNode;
        }
    };

    MediumEditor.selection = Selection;
}());

(function () {
    'use strict';

    function isElementDescendantOfExtension(extensions, element) {
        if (!extensions) {
            return false;
        }

        return extensions.some(function (extension) {
            if (typeof extension.getInteractionElements !== 'function') {
                return false;
            }

            var extensionElements = extension.getInteractionElements();
            if (!extensionElements) {
                return false;
            }

            if (!Array.isArray(extensionElements)) {
                extensionElements = [extensionElements];
            }
            return extensionElements.some(function (el) {
                return MediumEditor.util.isDescendant(el, element, true);
            });
        });
    }

    var Events = function (instance) {
        this.base = instance;
        this.options = this.base.options;
        this.events = [];
        this.disabledEvents = {};
        this.customEvents = {};
        this.listeners = {};
    };

    Events.prototype = {
        InputEventOnContenteditableSupported: !MediumEditor.util.isIE && !MediumEditor.util.isEdge,

        // Helpers for event handling

        attachDOMEvent: function (targets, event, listener, useCapture) {
            var win = this.base.options.contentWindow,
                doc = this.base.options.ownerDocument;

            targets = MediumEditor.util.isElement(targets) || [win, doc].indexOf(targets) > -1 ? [targets] : targets;

            Array.prototype.forEach.call(targets, function (target) {
                target.addEventListener(event, listener, useCapture);
                this.events.push([target, event, listener, useCapture]);
            }.bind(this));
        },

        detachDOMEvent: function (targets, event, listener, useCapture) {
            var index, e,
                win = this.base.options.contentWindow,
                doc = this.base.options.ownerDocument;

            if (targets) {
                targets = MediumEditor.util.isElement(targets) || [win, doc].indexOf(targets) > -1 ? [targets] : targets;

                Array.prototype.forEach.call(targets, function (target) {
                    index = this.indexOfListener(target, event, listener, useCapture);
                    if (index !== -1) {
                        e = this.events.splice(index, 1)[0];
                        e[0].removeEventListener(e[1], e[2], e[3]);
                    }
                }.bind(this));
            }
        },

        indexOfListener: function (target, event, listener, useCapture) {
            var i, n, item;
            for (i = 0, n = this.events.length; i < n; i = i + 1) {
                item = this.events[i];
                if (item[0] === target && item[1] === event && item[2] === listener && item[3] === useCapture) {
                    return i;
                }
            }
            return -1;
        },

        detachAllDOMEvents: function () {
            var e = this.events.pop();
            while (e) {
                e[0].removeEventListener(e[1], e[2], e[3]);
                e = this.events.pop();
            }
        },

        detachAllEventsFromElement: function (element) {
            var filtered = this.events.filter(function (e) {
                return e && e[0].getAttribute && e[0].getAttribute('medium-editor-index') === element.getAttribute('medium-editor-index');
            });

            for (var i = 0, len = filtered.length; i < len; i++) {
                var e = filtered[i];
                this.detachDOMEvent(e[0], e[1], e[2], e[3]);
            }
        },

        // Attach all existing handlers to a new element
        attachAllEventsToElement: function (element) {
            if (this.listeners['editableInput']) {
                this.contentCache[element.getAttribute('medium-editor-index')] = element.innerHTML;
            }

            if (this.eventsCache) {
                this.eventsCache.forEach(function (e) {
                    this.attachDOMEvent(element, e['name'], e['handler'].bind(this));
                }, this);
            }
        },

        enableCustomEvent: function (event) {
            if (this.disabledEvents[event] !== undefined) {
                delete this.disabledEvents[event];
            }
        },

        disableCustomEvent: function (event) {
            this.disabledEvents[event] = true;
        },

        // custom events
        attachCustomEvent: function (event, listener) {
            this.setupListener(event);
            if (!this.customEvents[event]) {
                this.customEvents[event] = [];
            }
            this.customEvents[event].push(listener);
        },

        detachCustomEvent: function (event, listener) {
            var index = this.indexOfCustomListener(event, listener);
            if (index !== -1) {
                this.customEvents[event].splice(index, 1);
                // TODO: If array is empty, should detach internal listeners via destroyListener()
            }
        },

        indexOfCustomListener: function (event, listener) {
            if (!this.customEvents[event] || !this.customEvents[event].length) {
                return -1;
            }

            return this.customEvents[event].indexOf(listener);
        },

        detachAllCustomEvents: function () {
            this.customEvents = {};
            // TODO: Should detach internal listeners here via destroyListener()
        },

        triggerCustomEvent: function (name, data, editable) {
            if (this.customEvents[name] && !this.disabledEvents[name]) {
                this.customEvents[name].forEach(function (listener) {
                    listener(data, editable);
                });
            }
        },

        // Cleaning up

        destroy: function () {
            this.detachAllDOMEvents();
            this.detachAllCustomEvents();
            this.detachExecCommand();

            if (this.base.elements) {
                this.base.elements.forEach(function (element) {
                    element.removeAttribute('data-medium-focused');
                });
            }
        },

        // Listening to calls to document.execCommand

        // Attach a listener to be notified when document.execCommand is called
        attachToExecCommand: function () {
            if (this.execCommandListener) {
                return;
            }

            // Store an instance of the listener so:
            // 1) We only attach to execCommand once
            // 2) We can remove the listener later
            this.execCommandListener = function (execInfo) {
                this.handleDocumentExecCommand(execInfo);
            }.bind(this);

            // Ensure that execCommand has been wrapped correctly
            this.wrapExecCommand();

            // Add listener to list of execCommand listeners
            this.options.ownerDocument.execCommand.listeners.push(this.execCommandListener);
        },

        // Remove our listener for calls to document.execCommand
        detachExecCommand: function () {
            var doc = this.options.ownerDocument;
            if (!this.execCommandListener || !doc.execCommand.listeners) {
                return;
            }

            // Find the index of this listener in the array of listeners so it can be removed
            var index = doc.execCommand.listeners.indexOf(this.execCommandListener);
            if (index !== -1) {
                doc.execCommand.listeners.splice(index, 1);
            }

            // If the list of listeners is now empty, put execCommand back to its original state
            if (!doc.execCommand.listeners.length) {
                this.unwrapExecCommand();
            }
        },

        // Wrap document.execCommand in a custom method so we can listen to calls to it
        wrapExecCommand: function () {
            var doc = this.options.ownerDocument;

            // Ensure all instance of MediumEditor only wrap execCommand once
            if (doc.execCommand.listeners) {
                return;
            }

            // Helper method to call all listeners to execCommand
            var callListeners = function (args, result) {
                if (doc.execCommand.listeners) {
                    doc.execCommand.listeners.forEach(function (listener) {
                        listener({
                            command: args[0],
                            value: args[2],
                            args: args,
                            result: result
                        });
                    });
                }
            },

                // Create a wrapper method for execCommand which will:
                // 1) Call document.execCommand with the correct arguments
                // 2) Loop through any listeners and notify them that execCommand was called
                //    passing extra info on the call
                // 3) Return the result
                wrapper = function () {
                    var result = doc.execCommand.orig.apply(this, arguments);

                    if (!doc.execCommand.listeners) {
                        return result;
                    }

                    var args = Array.prototype.slice.call(arguments);
                    callListeners(args, result);

                    return result;
                };

            // Store a reference to the original execCommand
            wrapper.orig = doc.execCommand;

            // Attach an array for storing listeners
            wrapper.listeners = [];

            // Helper for notifying listeners
            wrapper.callListeners = callListeners;

            // Overwrite execCommand
            doc.execCommand = wrapper;
        },

        // Revert document.execCommand back to its original self
        unwrapExecCommand: function () {
            var doc = this.options.ownerDocument;
            if (!doc.execCommand.orig) {
                return;
            }

            // Use the reference to the original execCommand to revert back
            doc.execCommand = doc.execCommand.orig;
        },

        // Listening to browser events to emit events medium-editor cares about
        setupListener: function (name) {
            if (this.listeners[name]) {
                return;
            }

            switch (name) {
                case 'externalInteraction':
                    // Detecting when user has interacted with elements outside of MediumEditor
                    this.attachDOMEvent(this.options.ownerDocument.body, 'mousedown', this.handleBodyMousedown.bind(this), true);
                    this.attachDOMEvent(this.options.ownerDocument.body, 'click', this.handleBodyClick.bind(this), true);
                    this.attachDOMEvent(this.options.ownerDocument.body, 'focus', this.handleBodyFocus.bind(this), true);
                    break;
                case 'blur':
                    // Detecting when focus is lost
                    this.setupListener('externalInteraction');
                    break;
                case 'focus':
                    // Detecting when focus moves into some part of MediumEditor
                    this.setupListener('externalInteraction');
                    break;
                case 'editableInput':
                    // setup cache for knowing when the content has changed
                    this.contentCache = {};
                    this.base.elements.forEach(function (element) {
                        this.contentCache[element.getAttribute('medium-editor-index')] = element.innerHTML;
                    }, this);

                    // Attach to the 'oninput' event, handled correctly by most browsers
                    if (this.InputEventOnContenteditableSupported) {
                        this.attachToEachElement('input', this.handleInput);
                    }

                    // For browsers which don't support the input event on contenteditable (IE)
                    // we'll attach to 'selectionchange' on the document and 'keypress' on the editables
                    if (!this.InputEventOnContenteditableSupported) {
                        this.setupListener('editableKeypress');
                        this.keypressUpdateInput = true;
                        this.attachDOMEvent(document, 'selectionchange', this.handleDocumentSelectionChange.bind(this));
                        // Listen to calls to execCommand
                        this.attachToExecCommand();
                    }
                    break;
                case 'editableClick':
                    // Detecting click in the contenteditables
                    this.attachToEachElement('click', this.handleClick);
                    break;
                case 'editableBlur':
                    // Detecting blur in the contenteditables
                    this.attachToEachElement('blur', this.handleBlur);
                    break;
                case 'editableKeypress':
                    // Detecting keypress in the contenteditables
                    this.attachToEachElement('keypress', this.handleKeypress);
                    break;
                case 'editableKeyup':
                    // Detecting keyup in the contenteditables
                    this.attachToEachElement('keyup', this.handleKeyup);
                    break;
                case 'editableKeydown':
                    // Detecting keydown on the contenteditables
                    this.attachToEachElement('keydown', this.handleKeydown);
                    break;
                case 'editableKeydownSpace':
                    // Detecting keydown for SPACE on the contenteditables
                    this.setupListener('editableKeydown');
                    break;
                case 'editableKeydownEnter':
                    // Detecting keydown for ENTER on the contenteditables
                    this.setupListener('editableKeydown');
                    break;
                case 'editableKeydownTab':
                    // Detecting keydown for TAB on the contenteditable
                    this.setupListener('editableKeydown');
                    break;
                case 'editableKeydownDelete':
                    // Detecting keydown for DELETE/BACKSPACE on the contenteditables
                    this.setupListener('editableKeydown');
                    break;
                case 'editableMouseover':
                    // Detecting mouseover on the contenteditables
                    this.attachToEachElement('mouseover', this.handleMouseover);
                    break;
                case 'editableDrag':
                    // Detecting dragover and dragleave on the contenteditables
                    this.attachToEachElement('dragover', this.handleDragging);
                    this.attachToEachElement('dragleave', this.handleDragging);
                    break;
                case 'editableDrop':
                    // Detecting drop on the contenteditables
                    this.attachToEachElement('drop', this.handleDrop);
                    break;
                // TODO: We need to have a custom 'paste' event separate from 'editablePaste'
                // Need to think about the way to introduce this without breaking folks
                case 'editablePaste':
                    // Detecting paste on the contenteditables
                    this.attachToEachElement('paste', this.handlePaste);
                    break;
            }
            this.listeners[name] = true;
        },

        attachToEachElement: function (name, handler) {
            // build our internal cache to know which element got already what handler attached
            if (!this.eventsCache) {
                this.eventsCache = [];
            }

            this.base.elements.forEach(function (element) {
                this.attachDOMEvent(element, name, handler.bind(this));
            }, this);

            this.eventsCache.push({ 'name': name, 'handler': handler });
        },

        cleanupElement: function (element) {
            var index = element.getAttribute('medium-editor-index');
            if (index) {
                this.detachAllEventsFromElement(element);
                if (this.contentCache) {
                    delete this.contentCache[index];
                }
            }
        },

        focusElement: function (element) {
            element.focus();
            this.updateFocus(element, { target: element, type: 'focus' });
        },

        updateFocus: function (target, eventObj) {
            var hadFocus = this.base.getFocusedElement(),
                toFocus;

            // For clicks, we need to know if the mousedown that caused the click happened inside the existing focused element
            // or one of the extension elements.  If so, we don't want to focus another element
            if (hadFocus &&
                eventObj.type === 'click' &&
                this.lastMousedownTarget &&
                (MediumEditor.util.isDescendant(hadFocus, this.lastMousedownTarget, true) ||
                    isElementDescendantOfExtension(this.base.extensions, this.lastMousedownTarget))) {
                toFocus = hadFocus;
            }

            if (!toFocus) {
                this.base.elements.some(function (element) {
                    // If the target is part of an editor element, this is the element getting focus
                    if (!toFocus && (MediumEditor.util.isDescendant(element, target, true))) {
                        toFocus = element;
                    }

                    // bail if we found an element that's getting focus
                    return !!toFocus;
                }, this);
            }

            // Check if the target is external (not part of the editor, toolbar, or any other extension)
            var externalEvent = !MediumEditor.util.isDescendant(hadFocus, target, true) &&
                !isElementDescendantOfExtension(this.base.extensions, target);

            if (toFocus !== hadFocus) {
                // If element has focus, and focus is going outside of editor
                // Don't blur focused element if clicking on editor, toolbar, or anchorpreview
                if (hadFocus && externalEvent) {
                    // Trigger blur on the editable that has lost focus
                    hadFocus.removeAttribute('data-medium-focused');
                    this.triggerCustomEvent('blur', eventObj, hadFocus);
                }

                // If focus is going into an editor element
                if (toFocus) {
                    // Trigger focus on the editable that now has focus
                    toFocus.setAttribute('data-medium-focused', true);
                    this.triggerCustomEvent('focus', eventObj, toFocus);
                }
            }

            if (externalEvent) {
                this.triggerCustomEvent('externalInteraction', eventObj);
            }
        },

        updateInput: function (target, eventObj) {
            if (!this.contentCache) {
                return;
            }
            // An event triggered which signifies that the user may have changed someting
            // Look in our cache of input for the contenteditables to see if something changed
            var index = target.getAttribute('medium-editor-index'),
                html = target.innerHTML;

            if (html !== this.contentCache[index]) {
                // The content has changed since the last time we checked, fire the event
                this.triggerCustomEvent('editableInput', eventObj, target);
            }
            this.contentCache[index] = html;
        },

        handleDocumentSelectionChange: function (event) {
            // When selectionchange fires, target and current target are set
            // to document, since this is where the event is handled
            // However, currentTarget will have an 'activeElement' property
            // which will point to whatever element has focus.
            if (event.currentTarget && event.currentTarget.activeElement) {
                var activeElement = event.currentTarget.activeElement,
                    currentTarget;
                // We can look at the 'activeElement' to determine if the selectionchange has
                // happened within a contenteditable owned by this instance of MediumEditor
                this.base.elements.some(function (element) {
                    if (MediumEditor.util.isDescendant(element, activeElement, true)) {
                        currentTarget = element;
                        return true;
                    }
                    return false;
                }, this);

                // We know selectionchange fired within one of our contenteditables
                if (currentTarget) {
                    this.updateInput(currentTarget, { target: activeElement, currentTarget: currentTarget });
                }
            }
        },

        handleDocumentExecCommand: function () {
            // document.execCommand has been called
            // If one of our contenteditables currently has focus, we should
            // attempt to trigger the 'editableInput' event
            var target = this.base.getFocusedElement();
            if (target) {
                this.updateInput(target, { target: target, currentTarget: target });
            }
        },

        handleBodyClick: function (event) {
            this.updateFocus(event.target, event);
        },

        handleBodyFocus: function (event) {
            this.updateFocus(event.target, event);
        },

        handleBodyMousedown: function (event) {
            this.lastMousedownTarget = event.target;
        },

        handleInput: function (event) {
            this.updateInput(event.currentTarget, event);
        },

        handleClick: function (event) {
            this.triggerCustomEvent('editableClick', event, event.currentTarget);
        },

        handleBlur: function (event) {
            this.triggerCustomEvent('editableBlur', event, event.currentTarget);
        },

        handleKeypress: function (event) {
            this.triggerCustomEvent('editableKeypress', event, event.currentTarget);

            // If we're doing manual detection of the editableInput event we need
            // to check for input changes during 'keypress'
            if (this.keypressUpdateInput) {
                var eventObj = { target: event.target, currentTarget: event.currentTarget };

                // In IE, we need to let the rest of the event stack complete before we detect
                // changes to input, so using setTimeout here
                setTimeout(function () {
                    this.updateInput(eventObj.currentTarget, eventObj);
                }.bind(this), 0);
            }
        },

        handleKeyup: function (event) {
            this.triggerCustomEvent('editableKeyup', event, event.currentTarget);
        },

        handleMouseover: function (event) {
            this.triggerCustomEvent('editableMouseover', event, event.currentTarget);
        },

        handleDragging: function (event) {
            this.triggerCustomEvent('editableDrag', event, event.currentTarget);
        },

        handleDrop: function (event) {
            this.triggerCustomEvent('editableDrop', event, event.currentTarget);
        },

        handlePaste: function (event) {
            this.triggerCustomEvent('editablePaste', event, event.currentTarget);
        },

        handleKeydown: function (event) {

            this.triggerCustomEvent('editableKeydown', event, event.currentTarget);

            if (MediumEditor.util.isKey(event, MediumEditor.util.keyCode.SPACE)) {
                return this.triggerCustomEvent('editableKeydownSpace', event, event.currentTarget);
            }

            if (MediumEditor.util.isKey(event, MediumEditor.util.keyCode.ENTER) || (event.ctrlKey && MediumEditor.util.isKey(event, MediumEditor.util.keyCode.M))) {
                return this.triggerCustomEvent('editableKeydownEnter', event, event.currentTarget);
            }

            if (MediumEditor.util.isKey(event, MediumEditor.util.keyCode.TAB)) {
                return this.triggerCustomEvent('editableKeydownTab', event, event.currentTarget);
            }

            if (MediumEditor.util.isKey(event, [MediumEditor.util.keyCode.DELETE, MediumEditor.util.keyCode.BACKSPACE])) {
                return this.triggerCustomEvent('editableKeydownDelete', event, event.currentTarget);
            }
        }
    };

    MediumEditor.Events = Events;
}());

(function () {
    'use strict';

    var Button = MediumEditor.Extension.extend({

        /* Button Options */

        /* action: [string]
         * The action argument to pass to MediumEditor.execAction()
         * when the button is clicked
         */
        action: undefined,

        /* aria: [string]
         * The value to add as the aria-label attribute of the button
         * element displayed in the toolbar.
         * This is also used as the tooltip for the button
         */
        aria: undefined,

        /* tagNames: [Array]
         * NOTE: This is not used if useQueryState is set to true.
         *
         * Array of element tag names that would indicate that this
         * button has already been applied. If this action has already
         * been applied, the button will be displayed as 'active' in the toolbar
         *
         * Example:
         * For 'bold', if the text is ever within a <b> or <strong>
         * tag that indicates the text is already bold. So the array
         * of tagNames for bold would be: ['b', 'strong']
         */
        tagNames: undefined,

        /* style: [Object]
         * NOTE: This is not used if useQueryState is set to true.
         *
         * A pair of css property & value(s) that indicate that this
         * button has already been applied. If this action has already
         * been applied, the button will be displayed as 'active' in the toolbar
         * Properties of the object:
         *   prop [String]: name of the css property
         *   value [String]: value(s) of the css property
         *                   multiple values can be separated by a '|'
         *
         * Example:
         * For 'bold', if the text is ever within an element with a 'font-weight'
         * style property set to '700' or 'bold', that indicates the text
         * is already bold.  So the style object for bold would be:
         * { prop: 'font-weight', value: '700|bold' }
         */
        style: undefined,

        /* useQueryState: [boolean]
         * Enables/disables whether this button should use the built-in
         * document.queryCommandState() method to determine whether
         * the action has already been applied.  If the action has already
         * been applied, the button will be displayed as 'active' in the toolbar
         *
         * Example:
         * For 'bold', if this is set to true, the code will call:
         * document.queryCommandState('bold') which will return true if the
         * browser thinks the text is already bold, and false otherwise
         */
        useQueryState: undefined,

        /* contentDefault: [string]
         * Default innerHTML to put inside the button
         */
        contentDefault: undefined,

        /* contentFA: [string]
         * The innerHTML to use for the content of the button
         * if the `buttonLabels` option for MediumEditor is set to 'fontawesome'
         */
        contentFA: undefined,

        /* classList: [Array]
         * An array of classNames (strings) to be added to the button
         */
        classList: undefined,

        /* attrs: [object]
         * A set of key-value pairs to add to the button as custom attributes
         */
        attrs: undefined,

        // The button constructor can optionally accept the name of a built-in button
        // (ie 'bold', 'italic', etc.)
        // When the name of a button is passed, it will initialize itself with the
        // configuration for that button
        constructor: function (options) {
            if (Button.isBuiltInButton(options)) {
                MediumEditor.Extension.call(this, this.defaults[options]);
            } else {
                MediumEditor.Extension.call(this, options);
            }
        },

        init: function () {
            MediumEditor.Extension.prototype.init.apply(this, arguments);

            this.button = this.createButton();
            this.on(this.button, 'click', this.handleClick.bind(this));
        },

        /* getButton: [function ()]
         *
         * If implemented, this function will be called when
         * the toolbar is being created.  The DOM Element returned
         * by this function will be appended to the toolbar along
         * with any other buttons.
         */
        getButton: function () {
            return this.button;
        },

        getAction: function () {
            return (typeof this.action === 'function') ? this.action(this.base.options) : this.action;
        },

        getAria: function () {
            return (typeof this.aria === 'function') ? this.aria(this.base.options) : this.aria;
        },

        getTagNames: function () {
            return (typeof this.tagNames === 'function') ? this.tagNames(this.base.options) : this.tagNames;
        },

        createButton: function () {
            var button = this.document.createElement('button'),
                content = this.contentDefault,
                ariaLabel = this.getAria(),
                buttonLabels = this.getEditorOption('buttonLabels');
            // Add class names
            button.classList.add('medium-editor-action');
            button.classList.add('medium-editor-action-' + this.name);
            if (this.classList) {
                this.classList.forEach(function (className) {
                    button.classList.add(className);
                });
            }

            // Add attributes
            button.setAttribute('data-action', this.getAction());
            if (ariaLabel) {
                button.setAttribute('title', ariaLabel);
                button.setAttribute('aria-label', ariaLabel);
            }
            if (this.attrs) {
                Object.keys(this.attrs).forEach(function (attr) {
                    button.setAttribute(attr, this.attrs[attr]);
                }, this);
            }

            if (buttonLabels === 'fontawesome' && this.contentFA) {
                content = this.contentFA;
            }
            button.innerHTML = content;
            return button;
        },

        handleClick: function (event) {
            event.preventDefault();
            event.stopPropagation();

            var action = this.getAction();

            if (action) {
                this.execAction(action);
            }
        },

        isActive: function () {
            return this.button.classList.contains(this.getEditorOption('activeButtonClass'));
        },

        setInactive: function () {
            this.button.classList.remove(this.getEditorOption('activeButtonClass'));
            delete this.knownState;
        },

        setActive: function () {
            this.button.classList.add(this.getEditorOption('activeButtonClass'));
            delete this.knownState;
        },

        queryCommandState: function () {
            var queryState = null;
            if (this.useQueryState) {
                queryState = this.base.queryCommandState(this.getAction());
            }
            return queryState;
        },

        isAlreadyApplied: function (node) {
            var isMatch = false,
                tagNames = this.getTagNames(),
                styleVals,
                computedStyle;

            if (this.knownState === false || this.knownState === true) {
                return this.knownState;
            }

            if (tagNames && tagNames.length > 0) {
                isMatch = tagNames.indexOf(node.nodeName.toLowerCase()) !== -1;
            }

            if (!isMatch && this.style) {
                styleVals = this.style.value.split('|');
                computedStyle = this.window.getComputedStyle(node, null).getPropertyValue(this.style.prop);
                styleVals.forEach(function (val) {
                    if (!this.knownState) {
                        isMatch = (computedStyle.indexOf(val) !== -1);
                        // text-decoration is not inherited by default
                        // so if the computed style for text-decoration doesn't match
                        // don't write to knownState so we can fallback to other checks
                        if (isMatch || this.style.prop !== 'text-decoration') {
                            this.knownState = isMatch;
                        }
                    }
                }, this);
            }

            return isMatch;
        }
    });

    Button.isBuiltInButton = function (name) {
        return (typeof name === 'string') && MediumEditor.extensions.button.prototype.defaults.hasOwnProperty(name);
    };

    MediumEditor.extensions.button = Button;
}());

(function () {
    'use strict';

    /* MediumEditor.extensions.button.defaults: [Object]
     * Set of default config options for all of the built-in MediumEditor buttons
     */
    MediumEditor.extensions.button.prototype.defaults = {
        'bold': {
            name: 'bold',
            action: 'bold',
            aria: 'bold',
            tagNames: ['b', 'strong'],
            style: {
                prop: 'font-weight',
                value: '700|bold'
            },
            useQueryState: true,
            contentDefault: '<b>B</b>',
            contentFA: '<i class="fa fa-bold"></i>'
        },
        'italic': {
            name: 'italic',
            action: 'italic',
            aria: 'italic',
            tagNames: ['i', 'em'],
            style: {
                prop: 'font-style',
                value: 'italic'
            },
            useQueryState: true,
            contentDefault: '<b><i>I</i></b>',
            contentFA: '<i class="fa fa-italic"></i>'
        },
        'underline': {
            name: 'underline',
            action: 'underline',
            aria: 'underline',
            tagNames: ['u'],
            style: {
                prop: 'text-decoration',
                value: 'underline'
            },
            useQueryState: true,
            contentDefault: '<b><u>U</u></b>',
            contentFA: '<i class="fa fa-underline"></i>'
        },
        'strikethrough': {
            name: 'strikethrough',
            action: 'strikethrough',
            aria: 'strike through',
            tagNames: ['strike'],
            style: {
                prop: 'text-decoration',
                value: 'line-through'
            },
            useQueryState: true,
            contentDefault: '<s>A</s>',
            contentFA: '<i class="fa fa-strikethrough"></i>'
        },
        'superscript': {
            name: 'superscript',
            action: 'superscript',
            aria: 'superscript',
            tagNames: ['sup'],
            /* firefox doesn't behave the way we want it to, so we CAN'T use queryCommandState for superscript
               https://github.com/guardian/scribe/blob/master/BROWSERINCONSISTENCIES.md#documentquerycommandstate */
            // useQueryState: true
            contentDefault: '<b>x<sup>1</sup></b>',
            contentFA: '<i class="fa fa-superscript"></i>'
        },
        'subscript': {
            name: 'subscript',
            action: 'subscript',
            aria: 'subscript',
            tagNames: ['sub'],
            /* firefox doesn't behave the way we want it to, so we CAN'T use queryCommandState for subscript
               https://github.com/guardian/scribe/blob/master/BROWSERINCONSISTENCIES.md#documentquerycommandstate */
            // useQueryState: true
            contentDefault: '<b>x<sub>1</sub></b>',
            contentFA: '<i class="fa fa-subscript"></i>'
        },
        'image': {
            name: 'image',
            action: 'image',
            aria: 'image',
            tagNames: ['img'],
            contentDefault: '<b>image</b>',
            contentFA: '<i class="fa fa-picture-o"></i>'
        },
        'html': {
            name: 'html',
            action: 'html',
            aria: 'evaluate html',
            tagNames: ['iframe', 'object'],
            contentDefault: '<b>html</b>',
            contentFA: '<i class="fa fa-code"></i>'
        },
        'orderedlist': {
            name: 'orderedlist',
            action: 'insertorderedlist',
            aria: 'ordered list',
            tagNames: ['ol'],
            useQueryState: true,
            contentDefault: '<b>1.</b>',
            contentFA: '<i class="fa fa-list-ol"></i>'
        },
        'unorderedlist': {
            name: 'unorderedlist',
            action: 'insertunorderedlist',
            aria: 'unordered list',
            tagNames: ['ul'],
            useQueryState: true,
            contentDefault: '<b>&bull;</b>',
            contentFA: '<i class="fa fa-list-ul"></i>'
        },
        'indent': {
            name: 'indent',
            action: 'indent',
            aria: 'indent',
            tagNames: [],
            contentDefault: '<b>&rarr;</b>',
            contentFA: '<i class="fa fa-indent"></i>'
        },
        'outdent': {
            name: 'outdent',
            action: 'outdent',
            aria: 'outdent',
            tagNames: [],
            contentDefault: '<b>&larr;</b>',
            contentFA: '<i class="fa fa-outdent"></i>'
        },
        'justifyCenter': {
            name: 'justifyCenter',
            action: 'justifyCenter',
            aria: 'center justify',
            tagNames: [],
            style: {
                prop: 'text-align',
                value: 'center'
            },
            contentDefault: '<b>C</b>',
            contentFA: '<i class="fa fa-align-center"></i>'
        },
        'justifyFull': {
            name: 'justifyFull',
            action: 'justifyFull',
            aria: 'full justify',
            tagNames: [],
            style: {
                prop: 'text-align',
                value: 'justify'
            },
            contentDefault: '<b>J</b>',
            contentFA: '<i class="fa fa-align-justify"></i>'
        },
        'justifyLeft': {
            name: 'justifyLeft',
            action: 'justifyLeft',
            aria: 'left justify',
            tagNames: [],
            style: {
                prop: 'text-align',
                value: 'left'
            },
            contentDefault: '<b>L</b>',
            contentFA: '<i class="fa fa-align-left"></i>'
        },
        'justifyRight': {
            name: 'justifyRight',
            action: 'justifyRight',
            aria: 'right justify',
            tagNames: [],
            style: {
                prop: 'text-align',
                value: 'right'
            },
            contentDefault: '<b>R</b>',
            contentFA: '<i class="fa fa-align-right"></i>'
        },
        // Known inline elements that are not removed, or not removed consistantly across browsers:
        // <span>, <label>, <br>
        'removeFormat': {
            name: 'removeFormat',
            aria: 'remove formatting',
            action: 'removeFormat',
            contentDefault: '<b>X</b>',
            contentFA: '<i class="fa fa-eraser"></i>'
        },

        /***** Buttons for appending block elements (append-<element> action) *****/

        'quote': {
            name: 'quote',
            action: 'append-blockquote',
            aria: 'blockquote',
            tagNames: ['blockquote'],
            contentDefault: '<b>&ldquo;</b>',
            contentFA: '<i class="fa fa-quote-right"></i>'
        },
        'pre': {
            name: 'pre',
            action: 'append-pre',
            aria: 'preformatted text',
            tagNames: ['pre'],
            contentDefault: '<b>0101</b>',
            contentFA: '<i class="fa fa-code fa-lg"></i>'
        },
        'h1': {
            name: 'h1',
            action: 'append-h1',
            aria: 'header type one',
            tagNames: ['h1'],
            contentDefault: '<b>H1</b>',
            contentFA: '<i class="fa fa-header"><sup>1</sup>'
        },
        'h2': {
            name: 'h2',
            action: 'append-h2',
            aria: 'header type two',
            tagNames: ['h2'],
            contentDefault: '<b>H2</b>',
            contentFA: '<i class="fa fa-header"><sup>2</sup>'
        },
        'h3': {
            name: 'h3',
            action: 'append-h3',
            aria: 'header type three',
            tagNames: ['h3'],
            contentDefault: '<b>H3</b>',
            contentFA: '<i class="fa fa-header"><sup>3</sup>'
        },
        'h4': {
            name: 'h4',
            action: 'append-h4',
            aria: 'header type four',
            tagNames: ['h4'],
            contentDefault: '<b>H4</b>',
            contentFA: '<i class="fa fa-header"><sup>4</sup>'
        },
        'h5': {
            name: 'h5',
            action: 'append-h5',
            aria: 'header type five',
            tagNames: ['h5'],
            contentDefault: '<b>H5</b>',
            contentFA: '<i class="fa fa-header"><sup>5</sup>'
        },
        'h6': {
            name: 'h6',
            action: 'append-h6',
            aria: 'header type six',
            tagNames: ['h6'],
            contentDefault: '<b>H6</b>',
            contentFA: '<i class="fa fa-header"><sup>6</sup>'
        }
    };

})();

(function () {
    'use strict';

    /* Base functionality for an extension which will display
     * a 'form' inside the toolbar
     */
    var FormExtension = MediumEditor.extensions.button.extend({

        init: function () {
            MediumEditor.extensions.button.prototype.init.apply(this, arguments);
        },

        // default labels for the form buttons
        formSaveLabel: '&#10003;',
        formCloseLabel: '&times;',

        /* activeClass: [string]
         * set class which added to shown form
         */
        activeClass: 'medium-editor-toolbar-form-active',

        /* hasForm: [boolean]
         *
         * Setting this to true will cause getForm() to be called
         * when the toolbar is created, so the form can be appended
         * inside the toolbar container
         */
        hasForm: true,

        /* getForm: [function ()]
         *
         * When hasForm is true, this function must be implemented
         * and return a DOM Element which will be appended to
         * the toolbar container. The form should start hidden, and
         * the extension can choose when to hide/show it
         */
        getForm: function () {},

        /* isDisplayed: [function ()]
         *
         * This function should return true/false reflecting
         * whether the form is currently displayed
         */
        isDisplayed: function () {
            if (this.hasForm) {
                return this.getForm().classList.contains(this.activeClass);
            }
            return false;
        },

        /* hideForm: [function ()]
         *
         * This function should show the form element inside
         * the toolbar container
         */
        showForm: function () {
            if (this.hasForm) {
                this.getForm().classList.add(this.activeClass);
            }
        },

        /* hideForm: [function ()]
         *
         * This function should hide the form element inside
         * the toolbar container
         */
        hideForm: function () {
            if (this.hasForm) {
                this.getForm().classList.remove(this.activeClass);
            }
        },

        /************************ Helpers ************************
         * The following are helpers that are either set by MediumEditor
         * during initialization, or are helper methods which either
         * route calls to the MediumEditor instance or provide common
         * functionality for all form extensions
         *********************************************************/

        /* showToolbarDefaultActions: [function ()]
         *
         * Helper method which will turn back the toolbar after canceling
         * the customized form
         */
        showToolbarDefaultActions: function () {
            var toolbar = this.base.getExtensionByName('toolbar');
            if (toolbar) {
                toolbar.showToolbarDefaultActions();
            }
        },

        /* hideToolbarDefaultActions: [function ()]
         *
         * Helper function which will hide the default contents of the
         * toolbar, but leave the toolbar container in the same state
         * to allow a form to display its custom contents inside the toolbar
         */
        hideToolbarDefaultActions: function () {
            var toolbar = this.base.getExtensionByName('toolbar');
            if (toolbar) {
                toolbar.hideToolbarDefaultActions();
            }
        },

        /* setToolbarPosition: [function ()]
         *
         * Helper function which will update the size and position
         * of the toolbar based on the toolbar content and the current
         * position of the user's selection
         */
        setToolbarPosition: function () {
            var toolbar = this.base.getExtensionByName('toolbar');
            if (toolbar) {
                toolbar.setToolbarPosition();
            }
        }
    });

    MediumEditor.extensions.form = FormExtension;
})();
(function () {
    'use strict';

    var AnchorForm = MediumEditor.extensions.form.extend({
        /* Anchor Form Options */

        /* customClassOption: [string]  (previously options.anchorButton + options.anchorButtonClass)
         * Custom class name the user can optionally have added to their created links (ie 'button').
         * If passed as a non-empty string, a checkbox will be displayed allowing the user to choose
         * whether to have the class added to the created link or not.
         */
        customClassOption: null,

        /* customClassOptionText: [string]
         * text to be shown in the checkbox when the __customClassOption__ is being used.
         */
        customClassOptionText: 'Button',

        /* linkValidation: [boolean]  (previously options.checkLinkFormat)
         * enables/disables check for common URL protocols on anchor links.
         */
        linkValidation: false,

        /* placeholderText: [string]  (previously options.anchorInputPlaceholder)
         * text to be shown as placeholder of the anchor input.
         */
        placeholderText: 'Paste or type a link',

        /* targetCheckbox: [boolean]  (previously options.anchorTarget)
         * enables/disables displaying a "Open in new window" checkbox, which when checked
         * changes the `target` attribute of the created link.
         */
        targetCheckbox: false,

        /* targetCheckboxText: [string]  (previously options.anchorInputCheckboxLabel)
         * text to be shown in the checkbox enabled via the __targetCheckbox__ option.
         */
        targetCheckboxText: 'Open in new window',

        // Options for the Button base class
        name: 'anchor',
        action: 'createLink',
        aria: 'link',
        tagNames: ['a'],
        contentDefault: '<b>#</b>',
        contentFA: '<i class="fa fa-link"></i>',

        init: function () {
            MediumEditor.extensions.form.prototype.init.apply(this, arguments);

            this.subscribe('editableKeydown', this.handleKeydown.bind(this));
        },

        // Called when the button the toolbar is clicked
        // Overrides ButtonExtension.handleClick
        handleClick: function (event) {
            event.preventDefault();
            event.stopPropagation();

            var range = MediumEditor.selection.getSelectionRange(this.document);

            if (range.startContainer.nodeName.toLowerCase() === 'a' ||
                range.endContainer.nodeName.toLowerCase() === 'a' ||
                MediumEditor.util.getClosestTag(MediumEditor.selection.getSelectedParentElement(range), 'a')) {
                return this.execAction('unlink');
            }

            if (!this.isDisplayed()) {
                this.showForm();
            }

            return false;
        },

        // Called when user hits the defined shortcut (CTRL / COMMAND + K)
        handleKeydown: function (event) {
            if (MediumEditor.util.isKey(event, MediumEditor.util.keyCode.K) && MediumEditor.util.isMetaCtrlKey(event) && !event.shiftKey) {
                this.handleClick(event);
            }
        },

        // Called by medium-editor to append form to the toolbar
        getForm: function () {
            if (!this.form) {
                this.form = this.createForm();
            }
            return this.form;
        },

        getTemplate: function () {
            var template = [
                '<input type="text" class="medium-editor-toolbar-input" placeholder="', this.placeholderText, '">'
            ];

            template.push(
                '<a href="#" class="medium-editor-toolbar-save">',
                this.getEditorOption('buttonLabels') === 'fontawesome' ? '<i class="fa fa-check"></i>' : this.formSaveLabel,
                '</a>'
            );

            template.push('<a href="#" class="medium-editor-toolbar-close">',
                this.getEditorOption('buttonLabels') === 'fontawesome' ? '<i class="fa fa-times"></i>' : this.formCloseLabel,
                '</a>');

            // both of these options are slightly moot with the ability to
            // override the various form buildup/serialize functions.

            if (this.targetCheckbox) {
                // fixme: ideally, this targetCheckboxText would be a formLabel too,
                // figure out how to deprecate? also consider `fa-` icon default implcations.
                template.push(
                    '<div class="medium-editor-toolbar-form-row">',
                    '<input type="checkbox" class="medium-editor-toolbar-anchor-target" id="medium-editor-toolbar-anchor-target-field-' + this.getEditorId() + '">',
                    '<label for="medium-editor-toolbar-anchor-target-field-' + this.getEditorId() + '">',
                    this.targetCheckboxText,
                    '</label>',
                    '</div>'
                );
            }

            if (this.customClassOption) {
                // fixme: expose this `Button` text as a formLabel property, too
                // and provide similar access to a `fa-` icon default.
                template.push(
                    '<div class="medium-editor-toolbar-form-row">',
                    '<input type="checkbox" class="medium-editor-toolbar-anchor-button">',
                    '<label>',
                    this.customClassOptionText,
                    '</label>',
                    '</div>'
                );
            }

            return template.join('');

        },

        // Used by medium-editor when the default toolbar is to be displayed
        isDisplayed: function () {
            return MediumEditor.extensions.form.prototype.isDisplayed.apply(this);
        },

        hideForm: function () {
            MediumEditor.extensions.form.prototype.hideForm.apply(this);
            this.getInput().value = '';
        },

        showForm: function (opts) {
            var input = this.getInput(),
                targetCheckbox = this.getAnchorTargetCheckbox(),
                buttonCheckbox = this.getAnchorButtonCheckbox();

            opts = opts || { value: '' };
            // TODO: This is for backwards compatability
            // We don't need to support the 'string' argument in 6.0.0
            if (typeof opts === 'string') {
                opts = {
                    value: opts
                };
            }

            this.base.saveSelection();
            this.hideToolbarDefaultActions();
            MediumEditor.extensions.form.prototype.showForm.apply(this);
            this.setToolbarPosition();

            input.value = opts.value;
            input.focus();

            // If we have a target checkbox, we want it to be checked/unchecked
            // based on whether the existing link has target=_blank
            if (targetCheckbox) {
                targetCheckbox.checked = opts.target === '_blank';
            }

            // If we have a custom class checkbox, we want it to be checked/unchecked
            // based on whether an existing link already has the class
            if (buttonCheckbox) {
                var classList = opts.buttonClass ? opts.buttonClass.split(' ') : [];
                buttonCheckbox.checked = (classList.indexOf(this.customClassOption) !== -1);
            }
        },

        // Called by core when tearing down medium-editor (destroy)
        destroy: function () {
            if (!this.form) {
                return false;
            }

            if (this.form.parentNode) {
                this.form.parentNode.removeChild(this.form);
            }

            delete this.form;
        },

        // core methods

        getFormOpts: function () {
            // no notion of private functions? wanted `_getFormOpts`
            var targetCheckbox = this.getAnchorTargetCheckbox(),
                buttonCheckbox = this.getAnchorButtonCheckbox(),
                opts = {
                    value: this.getInput().value.trim()
                };

            if (this.linkValidation) {
                opts.value = this.checkLinkFormat(opts.value);
            }

            opts.target = '_self';
            if (targetCheckbox && targetCheckbox.checked) {
                opts.target = '_blank';
            }

            if (buttonCheckbox && buttonCheckbox.checked) {
                opts.buttonClass = this.customClassOption;
            }

            return opts;
        },

        doFormSave: function () {
            var opts = this.getFormOpts();
            this.completeFormSave(opts);
        },

        completeFormSave: function (opts) {
            this.base.restoreSelection();
            this.execAction(this.action, opts);
            this.base.checkSelection();
        },

        ensureEncodedUri: function (str) {
            return str === decodeURI(str) ? encodeURI(str) : str;
        },

        ensureEncodedUriComponent: function (str) {
            return str === decodeURIComponent(str) ? encodeURIComponent(str) : str;
        },

        ensureEncodedParam: function (param) {
            var split = param.split('='),
                key = split[0],
                val = split[1];

            return key + (val === undefined ? '' : '=' + this.ensureEncodedUriComponent(val));
        },

        ensureEncodedQuery: function (queryString) {
            return queryString.split('&').map(this.ensureEncodedParam.bind(this)).join('&');
        },

        checkLinkFormat: function (value) {
            // Matches any alphabetical characters followed by ://
            // Matches protocol relative "//"
            // Matches common external protocols "mailto:" "tel:" "maps:"
            // Matches relative hash link, begins with "#"
            var urlSchemeRegex = /^([a-z]+:)?\/\/|^(mailto|tel|maps):|^\#/i,
                hasScheme = urlSchemeRegex.test(value),
                scheme = '',
                // telRegex is a regex for checking if the string is a telephone number
                telRegex = /^\+?\s?\(?(?:\d\s?\-?\)?){3,20}$/,
                urlParts = value.match(/^(.*?)(?:\?(.*?))?(?:#(.*))?$/),
                path = urlParts[1],
                query = urlParts[2],
                fragment = urlParts[3];

            if (telRegex.test(value)) {
                return 'tel:' + value;
            }

            if (!hasScheme) {
                var host = path.split('/')[0];
                // if the host part of the path looks like a hostname
                if (host.match(/.+(\.|:).+/) || host === 'localhost') {
                    scheme = 'http://';
                }
            }

            return scheme +
                // Ensure path is encoded
                this.ensureEncodedUri(path) +
                // Ensure query is encoded
                (query === undefined ? '' : '?' + this.ensureEncodedQuery(query)) +
                // Include fragment unencoded as encodeUriComponent is too
                // heavy handed for the many characters allowed in a fragment
                (fragment === undefined ? '' : '#' + fragment);
        },

        doFormCancel: function () {
            this.base.restoreSelection();
            this.base.checkSelection();
        },

        // form creation and event handling
        attachFormEvents: function (form) {
            var close = form.querySelector('.medium-editor-toolbar-close'),
                save = form.querySelector('.medium-editor-toolbar-save'),
                input = form.querySelector('.medium-editor-toolbar-input');

            // Handle clicks on the form itself
            this.on(form, 'click', this.handleFormClick.bind(this));

            // Handle typing in the textbox
            this.on(input, 'keyup', this.handleTextboxKeyup.bind(this));

            // Handle close button clicks
            this.on(close, 'click', this.handleCloseClick.bind(this));

            // Handle save button clicks (capture)
            this.on(save, 'click', this.handleSaveClick.bind(this), true);

        },

        createForm: function () {
            var doc = this.document,
                form = doc.createElement('div');

            // Anchor Form (div)
            form.className = 'medium-editor-toolbar-form';
            form.id = 'medium-editor-toolbar-form-anchor-' + this.getEditorId();
            form.innerHTML = this.getTemplate();
            this.attachFormEvents(form);

            return form;
        },

        getInput: function () {
            return this.getForm().querySelector('input.medium-editor-toolbar-input');
        },

        getAnchorTargetCheckbox: function () {
            return this.getForm().querySelector('.medium-editor-toolbar-anchor-target');
        },

        getAnchorButtonCheckbox: function () {
            return this.getForm().querySelector('.medium-editor-toolbar-anchor-button');
        },

        handleTextboxKeyup: function (event) {
            // For ENTER -> create the anchor
            if (event.keyCode === MediumEditor.util.keyCode.ENTER) {
                event.preventDefault();
                this.doFormSave();
                return;
            }

            // For ESCAPE -> close the form
            if (event.keyCode === MediumEditor.util.keyCode.ESCAPE) {
                event.preventDefault();
                this.doFormCancel();
            }
        },

        handleFormClick: function (event) {
            // make sure not to hide form when clicking inside the form
            event.stopPropagation();
        },

        handleSaveClick: function (event) {
            // Clicking Save -> create the anchor
            event.preventDefault();
            this.doFormSave();
        },

        handleCloseClick: function (event) {
            // Click Close -> close the form
            event.preventDefault();
            this.doFormCancel();
        }
    });

    MediumEditor.extensions.anchor = AnchorForm;
}());

(function () {
    'use strict';

    var AnchorPreview = MediumEditor.Extension.extend({
        name: 'anchor-preview',

        // Anchor Preview Options

        /* hideDelay: [number]  (previously options.anchorPreviewHideDelay)
         * time in milliseconds to show the anchor tag preview after the mouse has left the anchor tag.
         */
        hideDelay: 500,

        /* previewValueSelector: [string]
         * the default selector to locate where to put the activeAnchor value in the preview
         */
        previewValueSelector: 'a',

        /* showWhenToolbarIsVisible: [boolean]
         * determines whether the anchor tag preview shows up when the toolbar is visible
         */
        showWhenToolbarIsVisible: false,

        /* showOnEmptyLinks: [boolean]
        * determines whether the anchor tag preview shows up on links with href="" or href="#something"
        */
        showOnEmptyLinks: true,

        init: function () {
            this.anchorPreview = this.createPreview();

            this.getEditorOption('elementsContainer').appendChild(this.anchorPreview);

            this.attachToEditables();
        },

        getInteractionElements: function () {
            return this.getPreviewElement();
        },

        // TODO: Remove this function in 6.0.0
        getPreviewElement: function () {
            return this.anchorPreview;
        },

        createPreview: function () {
            var el = this.document.createElement('div');

            el.id = 'medium-editor-anchor-preview-' + this.getEditorId();
            el.className = 'medium-editor-anchor-preview';
            el.innerHTML = this.getTemplate();

            this.on(el, 'click', this.handleClick.bind(this));

            return el;
        },

        getTemplate: function () {
            return '<div class="medium-editor-toolbar-anchor-preview" id="medium-editor-toolbar-anchor-preview">' +
                '    <a class="medium-editor-toolbar-anchor-preview-inner"></a>' +
                '</div>';
        },

        destroy: function () {
            if (this.anchorPreview) {
                if (this.anchorPreview.parentNode) {
                    this.anchorPreview.parentNode.removeChild(this.anchorPreview);
                }
                delete this.anchorPreview;
            }
        },

        hidePreview: function () {
            if (this.anchorPreview) {
                this.anchorPreview.classList.remove('medium-editor-anchor-preview-active');
            }
            this.activeAnchor = null;
        },

        showPreview: function (anchorEl) {
            if (this.anchorPreview.classList.contains('medium-editor-anchor-preview-active') ||
                    anchorEl.getAttribute('data-disable-preview')) {
                return true;
            }

            if (this.previewValueSelector) {
                this.anchorPreview.querySelector(this.previewValueSelector).textContent = anchorEl.attributes.href.value;
                this.anchorPreview.querySelector(this.previewValueSelector).href = anchorEl.attributes.href.value;
            }

            this.anchorPreview.classList.add('medium-toolbar-arrow-over');
            this.anchorPreview.classList.remove('medium-toolbar-arrow-under');

            if (!this.anchorPreview.classList.contains('medium-editor-anchor-preview-active')) {
                this.anchorPreview.classList.add('medium-editor-anchor-preview-active');
            }

            this.activeAnchor = anchorEl;

            this.positionPreview();
            this.attachPreviewHandlers();

            return this;
        },

        positionPreview: function (activeAnchor) {
            activeAnchor = activeAnchor || this.activeAnchor;
            var containerWidth = this.window.innerWidth,
                buttonHeight = this.anchorPreview.offsetHeight,
                boundary = activeAnchor.getBoundingClientRect(),
                diffLeft = this.diffLeft,
                diffTop = this.diffTop,
                elementsContainer = this.getEditorOption('elementsContainer'),
                elementsContainerAbsolute = ['absolute', 'fixed'].indexOf(window.getComputedStyle(elementsContainer).getPropertyValue('position')) > -1,
                relativeBoundary = {},
                halfOffsetWidth, defaultLeft, middleBoundary, elementsContainerBoundary, top;

            halfOffsetWidth = this.anchorPreview.offsetWidth / 2;
            var toolbarExtension = this.base.getExtensionByName('toolbar');
            if (toolbarExtension) {
                diffLeft = toolbarExtension.diffLeft;
                diffTop = toolbarExtension.diffTop;
            }
            defaultLeft = diffLeft - halfOffsetWidth;

            // If container element is absolute / fixed, recalculate boundaries to be relative to the container
            if (elementsContainerAbsolute) {
                elementsContainerBoundary = elementsContainer.getBoundingClientRect();
                ['top', 'left'].forEach(function (key) {
                    relativeBoundary[key] = boundary[key] - elementsContainerBoundary[key];
                });

                relativeBoundary.width = boundary.width;
                relativeBoundary.height = boundary.height;
                boundary = relativeBoundary;

                containerWidth = elementsContainerBoundary.width;

                // Adjust top position according to container scroll position
                top = elementsContainer.scrollTop;
            } else {
                // Adjust top position according to window scroll position
                top = this.window.pageYOffset;
            }

            middleBoundary = boundary.left + boundary.width / 2;
            top += buttonHeight + boundary.top + boundary.height - diffTop - this.anchorPreview.offsetHeight;

            this.anchorPreview.style.top = Math.round(top) + 'px';
            this.anchorPreview.style.right = 'initial';
            if (middleBoundary < halfOffsetWidth) {
                this.anchorPreview.style.left = defaultLeft + halfOffsetWidth + 'px';
                this.anchorPreview.style.right = 'initial';
            } else if ((containerWidth - middleBoundary) < halfOffsetWidth) {
                this.anchorPreview.style.left = 'auto';
                this.anchorPreview.style.right = 0;
            } else {
                this.anchorPreview.style.left = defaultLeft + middleBoundary + 'px';
                this.anchorPreview.style.right = 'initial';
            }
        },

        attachToEditables: function () {
            this.subscribe('editableMouseover', this.handleEditableMouseover.bind(this));
            this.subscribe('positionedToolbar', this.handlePositionedToolbar.bind(this));
        },

        handlePositionedToolbar: function () {
            // If the toolbar is visible and positioned, we don't need to hide the preview
            // when showWhenToolbarIsVisible is true
            if (!this.showWhenToolbarIsVisible) {
                this.hidePreview();
            }
        },

        handleClick: function (event) {
            var anchorExtension = this.base.getExtensionByName('anchor'),
                activeAnchor = this.activeAnchor;

            if (anchorExtension && activeAnchor) {
                event.preventDefault();

                this.base.selectElement(this.activeAnchor);

                // Using setTimeout + delay because:
                // We may actually be displaying the anchor form, which should be controlled by delay
                this.base.delay(function () {
                    if (activeAnchor) {
                        var opts = {
                            value: activeAnchor.attributes.href.value,
                            target: activeAnchor.getAttribute('target'),
                            buttonClass: activeAnchor.getAttribute('class')
                        };
                        anchorExtension.showForm(opts);
                        activeAnchor = null;
                    }
                }.bind(this));
            }

            this.hidePreview();
        },

        handleAnchorMouseout: function () {
            this.anchorToPreview = null;
            this.off(this.activeAnchor, 'mouseout', this.instanceHandleAnchorMouseout);
            this.instanceHandleAnchorMouseout = null;
        },

        handleEditableMouseover: function (event) {
            var target = MediumEditor.util.getClosestTag(event.target, 'a');

            if (false === target) {
                return;
            }

            // Detect empty href attributes
            // The browser will make href="" or href="#top"
            // into absolute urls when accessed as event.target.href, so check the html
            if (!this.showOnEmptyLinks &&
                (!/href=["']\S+["']/.test(target.outerHTML) || /href=["']#\S+["']/.test(target.outerHTML))) {
                return true;
            }

            // only show when toolbar is not present
            var toolbar = this.base.getExtensionByName('toolbar');
            if (!this.showWhenToolbarIsVisible && toolbar && toolbar.isDisplayed && toolbar.isDisplayed()) {
                return true;
            }

            // detach handler for other anchor in case we hovered multiple anchors quickly
            if (this.activeAnchor && this.activeAnchor !== target) {
                this.detachPreviewHandlers();
            }

            this.anchorToPreview = target;

            this.instanceHandleAnchorMouseout = this.handleAnchorMouseout.bind(this);
            this.on(this.anchorToPreview, 'mouseout', this.instanceHandleAnchorMouseout);
            // Using setTimeout + delay because:
            // - We're going to show the anchor preview according to the configured delay
            //   if the mouse has not left the anchor tag in that time
            this.base.delay(function () {
                if (this.anchorToPreview) {
                    this.showPreview(this.anchorToPreview);
                }
            }.bind(this));
        },

        handlePreviewMouseover: function () {
            this.lastOver = (new Date()).getTime();
            this.hovering = true;
        },

        handlePreviewMouseout: function (event) {
            if (!event.relatedTarget || !/anchor-preview/.test(event.relatedTarget.className)) {
                this.hovering = false;
            }
        },

        updatePreview: function () {
            if (this.hovering) {
                return true;
            }
            var durr = (new Date()).getTime() - this.lastOver;
            if (durr > this.hideDelay) {
                // hide the preview 1/2 second after mouse leaves the link
                this.detachPreviewHandlers();
            }
        },

        detachPreviewHandlers: function () {
            // cleanup
            clearInterval(this.intervalTimer);
            if (this.instanceHandlePreviewMouseover) {
                this.off(this.anchorPreview, 'mouseover', this.instanceHandlePreviewMouseover);
                this.off(this.anchorPreview, 'mouseout', this.instanceHandlePreviewMouseout);
                if (this.activeAnchor) {
                    this.off(this.activeAnchor, 'mouseover', this.instanceHandlePreviewMouseover);
                    this.off(this.activeAnchor, 'mouseout', this.instanceHandlePreviewMouseout);
                }
            }

            this.hidePreview();

            this.hovering = this.instanceHandlePreviewMouseover = this.instanceHandlePreviewMouseout = null;
        },

        // TODO: break up method and extract out handlers
        attachPreviewHandlers: function () {
            this.lastOver = (new Date()).getTime();
            this.hovering = true;

            this.instanceHandlePreviewMouseover = this.handlePreviewMouseover.bind(this);
            this.instanceHandlePreviewMouseout = this.handlePreviewMouseout.bind(this);

            this.intervalTimer = setInterval(this.updatePreview.bind(this), 200);

            this.on(this.anchorPreview, 'mouseover', this.instanceHandlePreviewMouseover);
            this.on(this.anchorPreview, 'mouseout', this.instanceHandlePreviewMouseout);
            this.on(this.activeAnchor, 'mouseover', this.instanceHandlePreviewMouseover);
            this.on(this.activeAnchor, 'mouseout', this.instanceHandlePreviewMouseout);
        }
    });

    MediumEditor.extensions.anchorPreview = AnchorPreview;
}());

(function () {
    'use strict';

    var WHITESPACE_CHARS,
        KNOWN_TLDS_FRAGMENT,
        LINK_REGEXP_TEXT,
        KNOWN_TLDS_REGEXP,
        LINK_REGEXP;

    WHITESPACE_CHARS = [' ', '\t', '\n', '\r', '\u00A0', '\u2000', '\u2001', '\u2002', '\u2003',
                                    '\u2028', '\u2029'];
    KNOWN_TLDS_FRAGMENT = 'com|net|org|edu|gov|mil|aero|asia|biz|cat|coop|info|int|jobs|mobi|museum|name|post|pro|tel|travel|' +
        'xxx|ac|ad|ae|af|ag|ai|al|am|an|ao|aq|ar|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|' +
        'bz|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|co|cr|cs|cu|cv|cx|cy|cz|dd|de|dj|dk|dm|do|dz|ec|ee|eg|eh|er|es|et|eu|fi|fj|' +
        'fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|in|io|iq|ir|' +
        'is|it|je|jm|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mh|mk|ml|mm|' +
        'mn|mo|mp|mq|mr|ms|mt|mu|mv|mw|mx|my|mz|na|nc|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|pa|pe|pf|pg|ph|pk|pl|pm|pn|pr|ps|' +
        'pt|pw|py|qa|re|ro|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|ja|sk|sl|sm|sn|so|sr|ss|st|su|sv|sx|sy|sz|tc|td|tf|tg|th|' +
        'tj|tk|tl|tm|tn|to|tp|tr|tt|tv|tw|tz|ua|ug|uk|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|ye|yt|yu|za|zm|zw';

    LINK_REGEXP_TEXT =
        '(' +
        // Version of Gruber URL Regexp optimized for JS: http://stackoverflow.com/a/17733640
        '((?:(https?://|ftps?://|nntp://)|www\\d{0,3}[.]|[a-z0-9.\\-]+[.](' + KNOWN_TLDS_FRAGMENT + ')\\\/)\\S+(?:[^\\s`!\\[\\]{};:\'\".,?\u00AB\u00BB\u201C\u201D\u2018\u2019]))' +
        // Addition to above Regexp to support bare domains/one level subdomains with common non-i18n TLDs and without www prefix:
        ')|(([a-z0-9\\-]+\\.)?[a-z0-9\\-]+\\.(' + KNOWN_TLDS_FRAGMENT + '))';

    KNOWN_TLDS_REGEXP = new RegExp('^(' + KNOWN_TLDS_FRAGMENT + ')$', 'i');

    LINK_REGEXP = new RegExp(LINK_REGEXP_TEXT, 'gi');

    function nodeIsNotInsideAnchorTag(node) {
        return !MediumEditor.util.getClosestTag(node, 'a');
    }

    var AutoLink = MediumEditor.Extension.extend({
        init: function () {
            MediumEditor.Extension.prototype.init.apply(this, arguments);

            this.disableEventHandling = false;
            this.subscribe('editableKeypress', this.onKeypress.bind(this));
            this.subscribe('editableBlur', this.onBlur.bind(this));
            // MS IE has it's own auto-URL detect feature but ours is better in some ways. Be consistent.
            this.document.execCommand('AutoUrlDetect', false, false);
        },

        isLastInstance: function () {
            var activeInstances = 0;
            for (var i = 0; i < this.window._mediumEditors.length; i++) {
                var editor = this.window._mediumEditors[i];
                if (editor !== null && editor.getExtensionByName('autoLink') !== undefined) {
                    activeInstances++;
                }
            }
            return activeInstances === 1;
        },

        destroy: function () {
            // Turn AutoUrlDetect back on
            if (this.document.queryCommandSupported('AutoUrlDetect') && this.isLastInstance()) {
                this.document.execCommand('AutoUrlDetect', false, true);
            }
        },

        onBlur: function (blurEvent, editable) {
            this.performLinking(editable);
        },

        onKeypress: function (keyPressEvent) {
            if (this.disableEventHandling) {
                return;
            }

            if (MediumEditor.util.isKey(keyPressEvent, [MediumEditor.util.keyCode.SPACE, MediumEditor.util.keyCode.ENTER])) {
                clearTimeout(this.performLinkingTimeout);
                // Saving/restoring the selection in the middle of a keypress doesn't work well...
                this.performLinkingTimeout = setTimeout(function () {
                    try {
                        var sel = this.base.exportSelection();
                        if (this.performLinking(keyPressEvent.target)) {
                            // pass true for favorLaterSelectionAnchor - this is needed for links at the end of a
                            // paragraph in MS IE, or MS IE causes the link to be deleted right after adding it.
                            this.base.importSelection(sel, true);
                        }
                    } catch (e) {
                        if (window.console) {
                            window.console.error('Failed to perform linking', e);
                        }
                        this.disableEventHandling = true;
                    }
                }.bind(this), 0);
            }
        },

        performLinking: function (contenteditable) {
            /*
            Perform linking on blockElement basis, blockElements are HTML elements with text content and without
            child element.

            Example:
            - HTML content
            <blockquote>
              <p>link.</p>
              <p>my</p>
            </blockquote>

            - blockElements
            [<p>link.</p>, <p>my</p>]

            otherwise the detection can wrongly find the end of one paragraph and the beginning of another paragraph
            to constitute a link, such as a paragraph ending "link." and the next paragraph beginning with "my" is
            interpreted into "link.my" and the code tries to create a link across blockElements - which doesn't work
            and is terrible.
            (Medium deletes the spaces/returns between P tags so the textContent ends up without paragraph spacing)
            */
            var blockElements = MediumEditor.util.splitByBlockElements(contenteditable),
                documentModified = false;
            if (blockElements.length === 0) {
                blockElements = [contenteditable];
            }
            for (var i = 0; i < blockElements.length; i++) {
                documentModified = this.removeObsoleteAutoLinkSpans(blockElements[i]) || documentModified;
                documentModified = this.performLinkingWithinElement(blockElements[i]) || documentModified;
            }
            this.base.events.updateInput(contenteditable, { target: contenteditable, currentTarget: contenteditable });
            return documentModified;
        },

        removeObsoleteAutoLinkSpans: function (element) {
            if (!element || element.nodeType === 3) {
                return false;
            }

            var spans = element.querySelectorAll('span[data-auto-link="true"]'),
                documentModified = false;

            for (var i = 0; i < spans.length; i++) {
                var textContent = spans[i].textContent;
                if (textContent.indexOf('://') === -1) {
                    textContent = MediumEditor.util.ensureUrlHasProtocol(textContent);
                }
                if (spans[i].getAttribute('data-href') !== textContent && nodeIsNotInsideAnchorTag(spans[i])) {
                    documentModified = true;
                    var trimmedTextContent = textContent.replace(/\s+$/, '');
                    if (spans[i].getAttribute('data-href') === trimmedTextContent) {
                        var charactersTrimmed = textContent.length - trimmedTextContent.length,
                            subtree = MediumEditor.util.splitOffDOMTree(spans[i], this.splitTextBeforeEnd(spans[i], charactersTrimmed));
                        spans[i].parentNode.insertBefore(subtree, spans[i].nextSibling);
                    } else {
                        // Some editing has happened to the span, so just remove it entirely. The user can put it back
                        // around just the href content if they need to prevent it from linking
                        MediumEditor.util.unwrap(spans[i], this.document);
                    }
                }
            }
            return documentModified;
        },

        splitTextBeforeEnd: function (element, characterCount) {
            var treeWalker = this.document.createTreeWalker(element, NodeFilter.SHOW_TEXT, null, false),
                lastChildNotExhausted = true;

            // Start the tree walker at the last descendant of the span
            while (lastChildNotExhausted) {
                lastChildNotExhausted = treeWalker.lastChild() !== null;
            }

            var currentNode,
                currentNodeValue,
                previousNode;
            while (characterCount > 0 && previousNode !== null) {
                currentNode = treeWalker.currentNode;
                currentNodeValue = currentNode.nodeValue;
                if (currentNodeValue.length > characterCount) {
                    previousNode = currentNode.splitText(currentNodeValue.length - characterCount);
                    characterCount = 0;
                } else {
                    previousNode = treeWalker.previousNode();
                    characterCount -= currentNodeValue.length;
                }
            }
            return previousNode;
        },

        performLinkingWithinElement: function (element) {
            var matches = this.findLinkableText(element),
                linkCreated = false;

            for (var matchIndex = 0; matchIndex < matches.length; matchIndex++) {
                var matchingTextNodes = MediumEditor.util.findOrCreateMatchingTextNodes(this.document, element,
                        matches[matchIndex]);
                if (this.shouldNotLink(matchingTextNodes)) {
                    continue;
                }
                this.createAutoLink(matchingTextNodes, matches[matchIndex].href);
            }
            return linkCreated;
        },

        shouldNotLink: function (textNodes) {
            var shouldNotLink = false;
            for (var i = 0; i < textNodes.length && shouldNotLink === false; i++) {
                // Do not link if the text node is either inside an anchor or inside span[data-auto-link]
                shouldNotLink = !!MediumEditor.util.traverseUp(textNodes[i], function (node) {
                    return node.nodeName.toLowerCase() === 'a' ||
                        (node.getAttribute && node.getAttribute('data-auto-link') === 'true');
                });
            }
            return shouldNotLink;
        },

        findLinkableText: function (contenteditable) {
            var textContent = contenteditable.textContent,
                match = null,
                matches = [];

            while ((match = LINK_REGEXP.exec(textContent)) !== null) {
                var matchOk = true,
                    matchEnd = match.index + match[0].length;
                // If the regexp detected something as a link that has text immediately preceding/following it, bail out.
                matchOk = (match.index === 0 || WHITESPACE_CHARS.indexOf(textContent[match.index - 1]) !== -1) &&
                    (matchEnd === textContent.length || WHITESPACE_CHARS.indexOf(textContent[matchEnd]) !== -1);
                // If the regexp detected a bare domain that doesn't use one of our expected TLDs, bail out.
                matchOk = matchOk && (match[0].indexOf('/') !== -1 ||
                    KNOWN_TLDS_REGEXP.test(match[0].split('.').pop().split('?').shift()));

                if (matchOk) {
                    matches.push({
                        href: match[0],
                        start: match.index,
                        end: matchEnd
                    });
                }
            }
            return matches;
        },

        createAutoLink: function (textNodes, href) {
            href = MediumEditor.util.ensureUrlHasProtocol(href);
            var anchor = MediumEditor.util.createLink(this.document, textNodes, href, this.getEditorOption('targetBlank') ? '_blank' : null),
                span = this.document.createElement('span');
            span.setAttribute('data-auto-link', 'true');
            span.setAttribute('data-href', href);
            anchor.insertBefore(span, anchor.firstChild);
            while (anchor.childNodes.length > 1) {
                span.appendChild(anchor.childNodes[1]);
            }
        }

    });

    MediumEditor.extensions.autoLink = AutoLink;
}());

(function () {
    'use strict';

    var CLASS_DRAG_OVER = 'medium-editor-dragover';

    function clearClassNames(element) {
        var editable = MediumEditor.util.getContainerEditorElement(element),
            existing = Array.prototype.slice.call(editable.parentElement.querySelectorAll('.' + CLASS_DRAG_OVER));

        existing.forEach(function (el) {
            el.classList.remove(CLASS_DRAG_OVER);
        });
    }

    var FileDragging = MediumEditor.Extension.extend({
        name: 'fileDragging',

        allowedTypes: ['image'],

        init: function () {
            MediumEditor.Extension.prototype.init.apply(this, arguments);

            this.subscribe('editableDrag', this.handleDrag.bind(this));
            this.subscribe('editableDrop', this.handleDrop.bind(this));
        },

        handleDrag: function (event) {
            event.preventDefault();
            event.dataTransfer.dropEffect = 'copy';

            var target = event.target.classList ? event.target : event.target.parentElement;

            // Ensure the class gets removed from anything that had it before
            clearClassNames(target);

            if (event.type === 'dragover') {
                target.classList.add(CLASS_DRAG_OVER);
            }
        },

        handleDrop: function (event) {
            // Prevent file from opening in the current window
            event.preventDefault();
            event.stopPropagation();
            // Select the dropping target, and set the selection to the end of the target
            // https://github.com/yabwe/medium-editor/issues/980
            this.base.selectElement(event.target);
            var selection = this.base.exportSelection();
            selection.start = selection.end;
            this.base.importSelection(selection);
            // IE9 does not support the File API, so prevent file from opening in the window
            // but also don't try to actually get the file
            if (event.dataTransfer.files) {
                Array.prototype.slice.call(event.dataTransfer.files).forEach(function (file) {
                    if (this.isAllowedFile(file)) {
                        if (file.type.match('image')) {
                            this.insertImageFile(file);
                        }
                    }
                }, this);
            }

            // Make sure we remove our class from everything
            clearClassNames(event.target);
        },

        isAllowedFile: function (file) {
            return this.allowedTypes.some(function (fileType) {
                return !!file.type.match(fileType);
            });
        },

        insertImageFile: function (file) {
            if (typeof FileReader !== 'function') {
                return;
            }
            var fileReader = new FileReader();
            fileReader.readAsDataURL(file);

            // attach the onload event handler, makes it easier to listen in with jasmine
            fileReader.addEventListener('load', function (e) {
                var addImageElement = this.document.createElement('img');
                addImageElement.src = e.target.result;
                MediumEditor.util.insertHTMLCommand(this.document, addImageElement.outerHTML);
            }.bind(this));
        }
    });

    MediumEditor.extensions.fileDragging = FileDragging;
}());

(function () {
    'use strict';

    var KeyboardCommands = MediumEditor.Extension.extend({
        name: 'keyboard-commands',

        /* KeyboardCommands Options */

        /* commands: [Array]
         * Array of objects describing each command and the combination of keys that will trigger it
         * Required for each object:
         *   command [String] (argument passed to editor.execAction())
         *   key [String] (keyboard character that triggers this command)
         *   meta [boolean] (whether the ctrl/meta key has to be active or inactive)
         *   shift [boolean] (whether the shift key has to be active or inactive)
         *   alt [boolean] (whether the alt key has to be active or inactive)
         */
        commands: [
            {
                command: 'bold',
                key: 'B',
                meta: true,
                shift: false,
                alt: false
            },
            {
                command: 'italic',
                key: 'I',
                meta: true,
                shift: false,
                alt: false
            },
            {
                command: 'underline',
                key: 'U',
                meta: true,
                shift: false,
                alt: false
            }
        ],

        init: function () {
            MediumEditor.Extension.prototype.init.apply(this, arguments);

            this.subscribe('editableKeydown', this.handleKeydown.bind(this));
            this.keys = {};
            this.commands.forEach(function (command) {
                var keyCode = command.key.charCodeAt(0);
                if (!this.keys[keyCode]) {
                    this.keys[keyCode] = [];
                }
                this.keys[keyCode].push(command);
            }, this);
        },

        handleKeydown: function (event) {
            var keyCode = MediumEditor.util.getKeyCode(event);
            if (!this.keys[keyCode]) {
                return;
            }

            var isMeta = MediumEditor.util.isMetaCtrlKey(event),
                isShift = !!event.shiftKey,
                isAlt = !!event.altKey;

            this.keys[keyCode].forEach(function (data) {
                if (data.meta === isMeta &&
                    data.shift === isShift &&
                    (data.alt === isAlt ||
                     undefined === data.alt)) { // TODO deprecated: remove check for undefined === data.alt when jumping to 6.0.0
                    event.preventDefault();
                    event.stopPropagation();

                    // command can be a function to execute
                    if (typeof data.command === 'function') {
                        data.command.apply(this);
                    }
                    // command can be false so the shortcut is just disabled
                    else if (false !== data.command) {
                        this.execAction(data.command);
                    }
                }
            }, this);
        }
    });

    MediumEditor.extensions.keyboardCommands = KeyboardCommands;
}());

(function () {
    'use strict';

    var FontNameForm = MediumEditor.extensions.form.extend({

        name: 'fontname',
        action: 'fontName',
        aria: 'change font name',
        contentDefault: '&#xB1;', // ±
        contentFA: '<i class="fa fa-font"></i>',

        fonts: ['', 'Arial', 'Verdana', 'Times New Roman'],

        init: function () {
            MediumEditor.extensions.form.prototype.init.apply(this, arguments);
        },

        // Called when the button the toolbar is clicked
        // Overrides ButtonExtension.handleClick
        handleClick: function (event) {
            event.preventDefault();
            event.stopPropagation();

            if (!this.isDisplayed()) {
                // Get FontName of current selection (convert to string since IE returns this as number)
                var fontName = this.document.queryCommandValue('fontName') + '';
                this.showForm(fontName);
            }

            return false;
        },

        // Called by medium-editor to append form to the toolbar
        getForm: function () {
            if (!this.form) {
                this.form = this.createForm();
            }
            return this.form;
        },

        // Used by medium-editor when the default toolbar is to be displayed
        isDisplayed: function () {
            return this.getForm().style.display === 'block';
        },

        hideForm: function () {
            this.getForm().style.display = 'none';
            this.getSelect().value = '';
        },

        showForm: function (fontName) {
            var select = this.getSelect();

            this.base.saveSelection();
            this.hideToolbarDefaultActions();
            this.getForm().style.display = 'block';
            this.setToolbarPosition();

            select.value = fontName || '';
            select.focus();
        },

        // Called by core when tearing down medium-editor (destroy)
        destroy: function () {
            if (!this.form) {
                return false;
            }

            if (this.form.parentNode) {
                this.form.parentNode.removeChild(this.form);
            }

            delete this.form;
        },

        // core methods

        doFormSave: function () {
            this.base.restoreSelection();
            this.base.checkSelection();
        },

        doFormCancel: function () {
            this.base.restoreSelection();
            this.clearFontName();
            this.base.checkSelection();
        },

        // form creation and event handling
        createForm: function () {
            var doc = this.document,
                form = doc.createElement('div'),
                select = doc.createElement('select'),
                close = doc.createElement('a'),
                save = doc.createElement('a'),
                option;

            // Font Name Form (div)
            form.className = 'medium-editor-toolbar-form';
            form.id = 'medium-editor-toolbar-form-fontname-' + this.getEditorId();

            // Handle clicks on the form itself
            this.on(form, 'click', this.handleFormClick.bind(this));

            // Add font names
            for (var i = 0; i<this.fonts.length; i++) {
                option = doc.createElement('option');
                option.innerHTML = this.fonts[i];
                option.value = this.fonts[i];
                select.appendChild(option);
            }

            select.className = 'medium-editor-toolbar-select';
            form.appendChild(select);

            // Handle typing in the textbox
            this.on(select, 'change', this.handleFontChange.bind(this));

            // Add save buton
            save.setAttribute('href', '#');
            save.className = 'medium-editor-toobar-save';
            save.innerHTML = this.getEditorOption('buttonLabels') === 'fontawesome' ?
                             '<i class="fa fa-check"></i>' :
                             '&#10003;';
            form.appendChild(save);

            // Handle save button clicks (capture)
            this.on(save, 'click', this.handleSaveClick.bind(this), true);

            // Add close button
            close.setAttribute('href', '#');
            close.className = 'medium-editor-toobar-close';
            close.innerHTML = this.getEditorOption('buttonLabels') === 'fontawesome' ?
                              '<i class="fa fa-times"></i>' :
                              '&times;';
            form.appendChild(close);

            // Handle close button clicks
            this.on(close, 'click', this.handleCloseClick.bind(this));

            return form;
        },

        getSelect: function () {
            return this.getForm().querySelector('select.medium-editor-toolbar-select');
        },

        clearFontName: function () {
            MediumEditor.selection.getSelectedElements(this.document).forEach(function (el) {
                if (el.nodeName.toLowerCase() === 'font' && el.hasAttribute('face')) {
                    el.removeAttribute('face');
                }
            });
        },

        handleFontChange: function () {
            var font = this.getSelect().value;
            if (font === '') {
                this.clearFontName();
            } else {
                this.execAction('fontName', { value: font });
            }
        },

        handleFormClick: function (event) {
            // make sure not to hide form when clicking inside the form
            event.stopPropagation();
        },

        handleSaveClick: function (event) {
            // Clicking Save -> create the font size
            event.preventDefault();
            this.doFormSave();
        },

        handleCloseClick: function (event) {
            // Click Close -> close the form
            event.preventDefault();
            this.doFormCancel();
        }
    });

    MediumEditor.extensions.fontName = FontNameForm;
}());

(function () {
    'use strict';

    var FontSizeForm = MediumEditor.extensions.form.extend({

        name: 'fontsize',
        action: 'fontSize',
        aria: 'increase/decrease font size',
        contentDefault: '&#xB1;', // ±
        contentFA: '<i class="fa fa-text-height"></i>',

        init: function () {
            MediumEditor.extensions.form.prototype.init.apply(this, arguments);
        },

        // Called when the button the toolbar is clicked
        // Overrides ButtonExtension.handleClick
        handleClick: function (event) {
            event.preventDefault();
            event.stopPropagation();

            if (!this.isDisplayed()) {
                // Get fontsize of current selection (convert to string since IE returns this as number)
                var fontSize = this.document.queryCommandValue('fontSize') + '';
                this.showForm(fontSize);
            }

            return false;
        },

        // Called by medium-editor to append form to the toolbar
        getForm: function () {
            if (!this.form) {
                this.form = this.createForm();
            }
            return this.form;
        },

        // Used by medium-editor when the default toolbar is to be displayed
        isDisplayed: function () {
            return this.getForm().style.display === 'block';
        },

        hideForm: function () {
            this.getForm().style.display = 'none';
            this.getInput().value = '';
        },

        showForm: function (fontSize) {
            var input = this.getInput();

            this.base.saveSelection();
            this.hideToolbarDefaultActions();
            this.getForm().style.display = 'block';
            this.setToolbarPosition();

            input.value = fontSize || '';
            input.focus();
        },

        // Called by core when tearing down medium-editor (destroy)
        destroy: function () {
            if (!this.form) {
                return false;
            }

            if (this.form.parentNode) {
                this.form.parentNode.removeChild(this.form);
            }

            delete this.form;
        },

        // core methods

        doFormSave: function () {
            this.base.restoreSelection();
            this.base.checkSelection();
        },

        doFormCancel: function () {
            this.base.restoreSelection();
            this.clearFontSize();
            this.base.checkSelection();
        },

        // form creation and event handling
        createForm: function () {
            var doc = this.document,
                form = doc.createElement('div'),
                input = doc.createElement('input'),
                close = doc.createElement('a'),
                save = doc.createElement('a');

            // Font Size Form (div)
            form.className = 'medium-editor-toolbar-form';
            form.id = 'medium-editor-toolbar-form-fontsize-' + this.getEditorId();

            // Handle clicks on the form itself
            this.on(form, 'click', this.handleFormClick.bind(this));

            // Add font size slider
            input.setAttribute('type', 'range');
            input.setAttribute('min', '1');
            input.setAttribute('max', '7');
            input.className = 'medium-editor-toolbar-input';
            form.appendChild(input);

            // Handle typing in the textbox
            this.on(input, 'change', this.handleSliderChange.bind(this));

            // Add save buton
            save.setAttribute('href', '#');
            save.className = 'medium-editor-toobar-save';
            save.innerHTML = this.getEditorOption('buttonLabels') === 'fontawesome' ?
                             '<i class="fa fa-check"></i>' :
                             '&#10003;';
            form.appendChild(save);

            // Handle save button clicks (capture)
            this.on(save, 'click', this.handleSaveClick.bind(this), true);

            // Add close button
            close.setAttribute('href', '#');
            close.className = 'medium-editor-toobar-close';
            close.innerHTML = this.getEditorOption('buttonLabels') === 'fontawesome' ?
                              '<i class="fa fa-times"></i>' :
                              '&times;';
            form.appendChild(close);

            // Handle close button clicks
            this.on(close, 'click', this.handleCloseClick.bind(this));

            return form;
        },

        getInput: function () {
            return this.getForm().querySelector('input.medium-editor-toolbar-input');
        },

        clearFontSize: function () {
            MediumEditor.selection.getSelectedElements(this.document).forEach(function (el) {
                if (el.nodeName.toLowerCase() === 'font' && el.hasAttribute('size')) {
                    el.removeAttribute('size');
                }
            });
        },

        handleSliderChange: function () {
            var size = this.getInput().value;
            if (size === '4') {
                this.clearFontSize();
            } else {
                this.execAction('fontSize', { value: size });
            }
        },

        handleFormClick: function (event) {
            // make sure not to hide form when clicking inside the form
            event.stopPropagation();
        },

        handleSaveClick: function (event) {
            // Clicking Save -> create the font size
            event.preventDefault();
            this.doFormSave();
        },

        handleCloseClick: function (event) {
            // Click Close -> close the form
            event.preventDefault();
            this.doFormCancel();
        }
    });

    MediumEditor.extensions.fontSize = FontSizeForm;
}());
(function () {
    'use strict';

    /* Helpers and internal variables that don't need to be members of actual paste handler */

    var pasteBinDefaultContent = '%ME_PASTEBIN%',
        lastRange = null,
        keyboardPasteEditable = null,
        stopProp = function (event) {
            event.stopPropagation();
        };

    /*jslint regexp: true*/
    /*
        jslint does not allow character negation, because the negation
        will not match any unicode characters. In the regexes in this
        block, negation is used specifically to match the end of an html
        tag, and in fact unicode characters *should* be allowed.
    */
    function createReplacements() {
        return [
            // Remove anything but the contents within the BODY element
            [new RegExp(/^[\s\S]*<body[^>]*>\s*|\s*<\/body[^>]*>[\s\S]*$/g), ''],

            // cleanup comments added by Chrome when pasting html
            [new RegExp(/<!--StartFragment-->|<!--EndFragment-->/g), ''],

            // Trailing BR elements
            [new RegExp(/<br>$/i), ''],

            // replace two bogus tags that begin pastes from google docs
            [new RegExp(/<[^>]*docs-internal-guid[^>]*>/gi), ''],
            [new RegExp(/<\/b>(<br[^>]*>)?$/gi), ''],

             // un-html spaces and newlines inserted by OS X
            [new RegExp(/<span class="Apple-converted-space">\s+<\/span>/g), ' '],
            [new RegExp(/<br class="Apple-interchange-newline">/g), '<br>'],

            // replace google docs italics+bold with a span to be replaced once the html is inserted
            [new RegExp(/<span[^>]*(font-style:italic;font-weight:(bold|700)|font-weight:(bold|700);font-style:italic)[^>]*>/gi), '<span class="replace-with italic bold">'],

            // replace google docs italics with a span to be replaced once the html is inserted
            [new RegExp(/<span[^>]*font-style:italic[^>]*>/gi), '<span class="replace-with italic">'],

            //[replace google docs bolds with a span to be replaced once the html is inserted
            [new RegExp(/<span[^>]*font-weight:(bold|700)[^>]*>/gi), '<span class="replace-with bold">'],

             // replace manually entered b/i/a tags with real ones
            [new RegExp(/&lt;(\/?)(i|b|a)&gt;/gi), '<$1$2>'],

             // replace manually a tags with real ones, converting smart-quotes from google docs
            [new RegExp(/&lt;a(?:(?!href).)+href=(?:&quot;|&rdquo;|&ldquo;|"|“|”)(((?!&quot;|&rdquo;|&ldquo;|"|“|”).)*)(?:&quot;|&rdquo;|&ldquo;|"|“|”)(?:(?!&gt;).)*&gt;/gi), '<a href="$1">'],

            // Newlines between paragraphs in html have no syntactic value,
            // but then have a tendency to accidentally become additional paragraphs down the line
            [new RegExp(/<\/p>\n+/gi), '</p>'],
            [new RegExp(/\n+<p/gi), '<p'],

            // Microsoft Word makes these odd tags, like <o:p></o:p>
            [new RegExp(/<\/?o:[a-z]*>/gi), ''],

            // Microsoft Word adds some special elements around list items
            [new RegExp(/<!\[if !supportLists\]>(((?!<!).)*)<!\[endif]\>/gi), '$1']
        ];
    }
    /*jslint regexp: false*/

    /**
     * Gets various content types out of the Clipboard API. It will also get the
     * plain text using older IE and WebKit API.
     *
     * @param {event} event Event fired on paste.
     * @param {win} reference to window
     * @param {doc} reference to document
     * @return {Object} Object with mime types and data for those mime types.
     */
    function getClipboardContent(event, win, doc) {
        var dataTransfer = event.clipboardData || win.clipboardData || doc.dataTransfer,
            data = {};

        if (!dataTransfer) {
            return data;
        }

        // Use old WebKit/IE API
        if (dataTransfer.getData) {
            var legacyText = dataTransfer.getData('Text');
            if (legacyText && legacyText.length > 0) {
                data['text/plain'] = legacyText;
            }
        }

        if (dataTransfer.types) {
            for (var i = 0; i < dataTransfer.types.length; i++) {
                var contentType = dataTransfer.types[i];
                data[contentType] = dataTransfer.getData(contentType);
            }
        }

        return data;
    }

    var PasteHandler = MediumEditor.Extension.extend({
        /* Paste Options */

        /* forcePlainText: [boolean]
         * Forces pasting as plain text.
         */
        forcePlainText: true,

        /* cleanPastedHTML: [boolean]
         * cleans pasted content from different sources, like google docs etc.
         */
        cleanPastedHTML: false,

        /* preCleanReplacements: [Array]
         * custom pairs (2 element arrays) of RegExp and replacement text to use during past when
         * __forcePlainText__ or __cleanPastedHTML__ are `true` OR when calling `cleanPaste(text)` helper method.
         * These replacements are executed before any medium editor defined replacements.
         */
        preCleanReplacements: [],

        /* cleanReplacements: [Array]
         * custom pairs (2 element arrays) of RegExp and replacement text to use during paste when
         * __forcePlainText__ or __cleanPastedHTML__ are `true` OR when calling `cleanPaste(text)` helper method.
         * These replacements are executed after any medium editor defined replacements.
         */
        cleanReplacements: [],

        /* cleanAttrs:: [Array]
         * list of element attributes to remove during paste when __cleanPastedHTML__ is `true` or when
         * calling `cleanPaste(text)` or `pasteHTML(html, options)` helper methods.
         */
        cleanAttrs: ['class', 'style', 'dir'],

        /* cleanTags: [Array]
         * list of element tag names to remove during paste when __cleanPastedHTML__ is `true` or when
         * calling `cleanPaste(text)` or `pasteHTML(html, options)` helper methods.
         */
        cleanTags: ['meta'],

        /* unwrapTags: [Array]
         * list of element tag names to unwrap (remove the element tag but retain its child elements)
         * during paste when __cleanPastedHTML__ is `true` or when
         * calling `cleanPaste(text)` or `pasteHTML(html, options)` helper methods.
         */
        unwrapTags: [],

        init: function () {
            MediumEditor.Extension.prototype.init.apply(this, arguments);

            if (this.forcePlainText || this.cleanPastedHTML) {
                this.subscribe('editableKeydown', this.handleKeydown.bind(this));
                // We need access to the full event data in paste
                // so we can't use the editablePaste event here
                this.getEditorElements().forEach(function (element) {
                    this.on(element, 'paste', this.handlePaste.bind(this));
                }, this);
                this.subscribe('addElement', this.handleAddElement.bind(this));
            }
        },

        handleAddElement: function (event, editable) {
            this.on(editable, 'paste', this.handlePaste.bind(this));
        },

        destroy: function () {
            // Make sure pastebin is destroyed in case it's still around for some reason
            if (this.forcePlainText || this.cleanPastedHTML) {
                this.removePasteBin();
            }
        },

        handlePaste: function (event, editable) {
            if (event.defaultPrevented) {
                return;
            }

            var clipboardContent = getClipboardContent(event, this.window, this.document),
                pastedHTML = clipboardContent['text/html'],
                pastedPlain = clipboardContent['text/plain'];

            if (this.window.clipboardData && event.clipboardData === undefined && !pastedHTML) {
                // If window.clipboardData exists, but event.clipboardData doesn't exist,
                // we're probably in IE. IE only has two possibilities for clipboard
                // data format: 'Text' and 'URL'.
                //
                // For IE, we'll fallback to 'Text' for text/html
                pastedHTML = pastedPlain;
            }

            if (pastedHTML || pastedPlain) {
                event.preventDefault();

                this.doPaste(pastedHTML, pastedPlain, editable);
            }
        },

        doPaste: function (pastedHTML, pastedPlain, editable) {
            var paragraphs,
                html = '',
                p;

            if (this.cleanPastedHTML && pastedHTML) {
                return this.cleanPaste(pastedHTML);
            }

            if (!pastedPlain) {
                return;
            }

            if (!(this.getEditorOption('disableReturn') || (editable && editable.getAttribute('data-disable-return')))) {
                paragraphs = pastedPlain.split(/[\r\n]+/g);
                // If there are no \r\n in data, don't wrap in <p>
                if (paragraphs.length > 1) {
                    for (p = 0; p < paragraphs.length; p += 1) {
                        if (paragraphs[p] !== '') {
                            html += '<p>' + MediumEditor.util.htmlEntities(paragraphs[p]) + '</p>';
                        }
                    }
                } else {
                    html = MediumEditor.util.htmlEntities(paragraphs[0]);
                }
            } else {
                html = MediumEditor.util.htmlEntities(pastedPlain);
            }
            MediumEditor.util.insertHTMLCommand(this.document, html);
        },

        handlePasteBinPaste: function (event) {
            if (event.defaultPrevented) {
                this.removePasteBin();
                return;
            }

            var clipboardContent = getClipboardContent(event, this.window, this.document),
                pastedHTML = clipboardContent['text/html'],
                pastedPlain = clipboardContent['text/plain'],
                editable = keyboardPasteEditable;

            // If we have valid html already, or we're not in cleanPastedHTML mode
            // we can ignore the paste bin and just paste now
            if (!this.cleanPastedHTML || pastedHTML) {
                event.preventDefault();
                this.removePasteBin();
                this.doPaste(pastedHTML, pastedPlain, editable);

                // The event handling code listens for paste on the editable element
                // in order to trigger the editablePaste event.  Since this paste event
                // is happening on the pastebin, the event handling code never knows about it
                // So, we have to trigger editablePaste manually
                this.trigger('editablePaste', { currentTarget: editable, target: editable }, editable);
                return;
            }

            // We need to look at the paste bin, so do a setTimeout to let the paste
            // fall through into the paste bin
            setTimeout(function () {
                // Only look for HTML if we're in cleanPastedHTML mode
                if (this.cleanPastedHTML) {
                    // If clipboard didn't have HTML, try the paste bin
                    pastedHTML = this.getPasteBinHtml();
                }

                // If we needed the paste bin, we're done with it now, remove it
                this.removePasteBin();

                // Handle the paste with the html from the paste bin
                this.doPaste(pastedHTML, pastedPlain, editable);

                // The event handling code listens for paste on the editable element
                // in order to trigger the editablePaste event.  Since this paste event
                // is happening on the pastebin, the event handling code never knows about it
                // So, we have to trigger editablePaste manually
                this.trigger('editablePaste', { currentTarget: editable, target: editable }, editable);
            }.bind(this), 0);
        },

        handleKeydown: function (event, editable) {
            // if it's not Ctrl+V, do nothing
            if (!(MediumEditor.util.isKey(event, MediumEditor.util.keyCode.V) && MediumEditor.util.isMetaCtrlKey(event))) {
                return;
            }

            event.stopImmediatePropagation();

            this.removePasteBin();
            this.createPasteBin(editable);
        },

        createPasteBin: function (editable) {
            var rects,
                range = MediumEditor.selection.getSelectionRange(this.document),
                top = this.window.pageYOffset;

            keyboardPasteEditable = editable;

            if (range) {
                rects = range.getClientRects();

                // on empty line, rects is empty so we grab information from the first container of the range
                if (rects.length) {
                    top += rects[0].top;
                } else if (range.startContainer.getBoundingClientRect !== undefined) {
                    top += range.startContainer.getBoundingClientRect().top;
                } else {
                    top += range.getBoundingClientRect().top;
                }
            }

            lastRange = range;

            var pasteBinElm = this.document.createElement('div');
            pasteBinElm.id = this.pasteBinId = 'medium-editor-pastebin-' + (+Date.now());
            pasteBinElm.setAttribute('style', 'border: 1px red solid; position: absolute; top: ' + top + 'px; width: 10px; height: 10px; overflow: hidden; opacity: 0');
            pasteBinElm.setAttribute('contentEditable', true);
            pasteBinElm.innerHTML = pasteBinDefaultContent;

            this.document.body.appendChild(pasteBinElm);

            // avoid .focus() to stop other event (actually the paste event)
            this.on(pasteBinElm, 'focus', stopProp);
            this.on(pasteBinElm, 'focusin', stopProp);
            this.on(pasteBinElm, 'focusout', stopProp);

            pasteBinElm.focus();

            MediumEditor.selection.selectNode(pasteBinElm, this.document);

            if (!this.boundHandlePaste) {
                this.boundHandlePaste = this.handlePasteBinPaste.bind(this);
            }

            this.on(pasteBinElm, 'paste', this.boundHandlePaste);
        },

        removePasteBin: function () {
            if (null !== lastRange) {
                MediumEditor.selection.selectRange(this.document, lastRange);
                lastRange = null;
            }

            if (null !== keyboardPasteEditable) {
                keyboardPasteEditable = null;
            }

            var pasteBinElm = this.getPasteBin();
            if (!pasteBinElm) {
                return;
            }

            if (pasteBinElm) {
                this.off(pasteBinElm, 'focus', stopProp);
                this.off(pasteBinElm, 'focusin', stopProp);
                this.off(pasteBinElm, 'focusout', stopProp);
                this.off(pasteBinElm, 'paste', this.boundHandlePaste);
                pasteBinElm.parentElement.removeChild(pasteBinElm);
            }
        },

        getPasteBin: function () {
            return this.document.getElementById(this.pasteBinId);
        },

        getPasteBinHtml: function () {
            var pasteBinElm = this.getPasteBin();

            if (!pasteBinElm) {
                return false;
            }

            // WebKit has a nice bug where it clones the paste bin if you paste from for example notepad
            // so we need to force plain text mode in this case
            if (pasteBinElm.firstChild && pasteBinElm.firstChild.id === 'mcepastebin') {
                return false;
            }

            var pasteBinHtml = pasteBinElm.innerHTML;

            // If paste bin is empty try using plain text mode
            // since that is better than nothing right
            if (!pasteBinHtml || pasteBinHtml === pasteBinDefaultContent) {
                return false;
            }

            return pasteBinHtml;
        },

        cleanPaste: function (text) {
            var i, elList, tmp, workEl,
                multiline = /<p|<br|<div/.test(text),
                replacements = [].concat(
                    this.preCleanReplacements || [],
                    createReplacements(),
                    this.cleanReplacements || []);

            for (i = 0; i < replacements.length; i += 1) {
                text = text.replace(replacements[i][0], replacements[i][1]);
            }

            if (!multiline) {
                return this.pasteHTML(text);
            }

            // create a temporary div to cleanup block elements
            tmp = this.document.createElement('div');

            // double br's aren't converted to p tags, but we want paragraphs.
            tmp.innerHTML = '<p>' + text.split('<br><br>').join('</p><p>') + '</p>';

            // block element cleanup
            elList = tmp.querySelectorAll('a,p,div,br');
            for (i = 0; i < elList.length; i += 1) {
                workEl = elList[i];

                // Microsoft Word replaces some spaces with newlines.
                // While newlines between block elements are meaningless, newlines within
                // elements are sometimes actually spaces.
                workEl.innerHTML = workEl.innerHTML.replace(/\n/gi, ' ');

                switch (workEl.nodeName.toLowerCase()) {
                    case 'p':
                    case 'div':
                        this.filterCommonBlocks(workEl);
                        break;
                    case 'br':
                        this.filterLineBreak(workEl);
                        break;
                }
            }

            this.pasteHTML(tmp.innerHTML);
        },

        pasteHTML: function (html, options) {
            options = MediumEditor.util.defaults({}, options, {
                cleanAttrs: this.cleanAttrs,
                cleanTags: this.cleanTags,
                unwrapTags: this.unwrapTags
            });

            var elList, workEl, i, fragmentBody, pasteBlock = this.document.createDocumentFragment();

            pasteBlock.appendChild(this.document.createElement('body'));

            fragmentBody = pasteBlock.querySelector('body');
            fragmentBody.innerHTML = html;

            this.cleanupSpans(fragmentBody);

            elList = fragmentBody.querySelectorAll('*');
            for (i = 0; i < elList.length; i += 1) {
                workEl = elList[i];

                if ('a' === workEl.nodeName.toLowerCase() && this.getEditorOption('targetBlank')) {
                    MediumEditor.util.setTargetBlank(workEl);
                }

                MediumEditor.util.cleanupAttrs(workEl, options.cleanAttrs);
                MediumEditor.util.cleanupTags(workEl, options.cleanTags);
                MediumEditor.util.unwrapTags(workEl, options.unwrapTags);
            }

            MediumEditor.util.insertHTMLCommand(this.document, fragmentBody.innerHTML.replace(/&nbsp;/g, ' '));
        },

        // TODO (6.0): Make this an internal helper instead of member of paste handler
        isCommonBlock: function (el) {
            return (el && (el.nodeName.toLowerCase() === 'p' || el.nodeName.toLowerCase() === 'div'));
        },

        // TODO (6.0): Make this an internal helper instead of member of paste handler
        filterCommonBlocks: function (el) {
            if (/^\s*$/.test(el.textContent) && el.parentNode) {
                el.parentNode.removeChild(el);
            }
        },

        // TODO (6.0): Make this an internal helper instead of member of paste handler
        filterLineBreak: function (el) {
            if (this.isCommonBlock(el.previousElementSibling)) {
                // remove stray br's following common block elements
                this.removeWithParent(el);
            } else if (this.isCommonBlock(el.parentNode) && (el.parentNode.firstChild === el || el.parentNode.lastChild === el)) {
                // remove br's just inside open or close tags of a div/p
                this.removeWithParent(el);
            } else if (el.parentNode && el.parentNode.childElementCount === 1 && el.parentNode.textContent === '') {
                // and br's that are the only child of elements other than div/p
                this.removeWithParent(el);
            }
        },

        // TODO (6.0): Make this an internal helper instead of member of paste handler
        // remove an element, including its parent, if it is the only element within its parent
        removeWithParent: function (el) {
            if (el && el.parentNode) {
                if (el.parentNode.parentNode && el.parentNode.childElementCount === 1) {
                    el.parentNode.parentNode.removeChild(el.parentNode);
                } else {
                    el.parentNode.removeChild(el);
                }
            }
        },

        // TODO (6.0): Make this an internal helper instead of member of paste handler
        cleanupSpans: function (containerEl) {
            var i,
                el,
                newEl,
                spans = containerEl.querySelectorAll('.replace-with'),
                isCEF = function (el) {
                    return (el && el.nodeName !== '#text' && el.getAttribute('contenteditable') === 'false');
                };

            for (i = 0; i < spans.length; i += 1) {
                el = spans[i];
                newEl = this.document.createElement(el.classList.contains('bold') ? 'b' : 'i');

                if (el.classList.contains('bold') && el.classList.contains('italic')) {
                    // add an i tag as well if this has both italics and bold
                    newEl.innerHTML = '<i>' + el.innerHTML + '</i>';
                } else {
                    newEl.innerHTML = el.innerHTML;
                }
                el.parentNode.replaceChild(newEl, el);
            }

            spans = containerEl.querySelectorAll('span');
            for (i = 0; i < spans.length; i += 1) {
                el = spans[i];

                // bail if span is in contenteditable = false
                if (MediumEditor.util.traverseUp(el, isCEF)) {
                    return false;
                }

                // remove empty spans, replace others with their contents
                MediumEditor.util.unwrap(el, this.document);
            }
        }
    });

    MediumEditor.extensions.paste = PasteHandler;
}());

(function () {
    'use strict';

    var Placeholder = MediumEditor.Extension.extend({
        name: 'placeholder',

        /* Placeholder Options */

        /* text: [string]
         * Text to display in the placeholder
         */
        text: 'Type your text',

        /* hideOnClick: [boolean]
         * Should we hide the placeholder on click (true) or when user starts typing (false)
         */
        hideOnClick: true,

        init: function () {
            MediumEditor.Extension.prototype.init.apply(this, arguments);

            this.initPlaceholders();
            this.attachEventHandlers();
        },

        initPlaceholders: function () {
            this.getEditorElements().forEach(this.initElement, this);
        },

        handleAddElement: function (event, editable) {
            this.initElement(editable);
        },

        initElement: function (el) {
            if (!el.getAttribute('data-placeholder')) {
                el.setAttribute('data-placeholder', this.text);
            }
            this.updatePlaceholder(el);
        },

        destroy: function () {
            this.getEditorElements().forEach(this.cleanupElement, this);
        },

        handleRemoveElement: function (event, editable) {
            this.cleanupElement(editable);
        },

        cleanupElement: function (el) {
            if (el.getAttribute('data-placeholder') === this.text) {
                el.removeAttribute('data-placeholder');
            }
        },

        showPlaceholder: function (el) {
            if (el) {
                // https://github.com/yabwe/medium-editor/issues/234
                // In firefox, styling the placeholder with an absolutely positioned
                // pseudo element causes the cursor to appear in a bad location
                // when the element is completely empty, so apply a different class to
                // style it with a relatively positioned pseudo element
                if (MediumEditor.util.isFF && el.childNodes.length === 0) {
                    el.classList.add('medium-editor-placeholder-relative');
                    el.classList.remove('medium-editor-placeholder');
                } else {
                    el.classList.add('medium-editor-placeholder');
                    el.classList.remove('medium-editor-placeholder-relative');
                }
            }
        },

        hidePlaceholder: function (el) {
            if (el) {
                el.classList.remove('medium-editor-placeholder');
                el.classList.remove('medium-editor-placeholder-relative');
            }
        },

        updatePlaceholder: function (el, dontShow) {
            // If the element has content, hide the placeholder
            if (el.querySelector('img, blockquote, ul, ol, table') || (el.textContent.replace(/^\s+|\s+$/g, '') !== '')) {
                return this.hidePlaceholder(el);
            }

            if (!dontShow) {
                this.showPlaceholder(el);
            }
        },

        attachEventHandlers: function () {
            if (this.hideOnClick) {
                // For the 'hideOnClick' option, the placeholder should always be hidden on focus
                this.subscribe('focus', this.handleFocus.bind(this));
            }

            // If the editor has content, it should always hide the placeholder
            this.subscribe('editableInput', this.handleInput.bind(this));

            // When the editor loses focus, check if the placeholder should be visible
            this.subscribe('blur', this.handleBlur.bind(this));

            // Need to know when elements are added/removed from the editor
            this.subscribe('addElement', this.handleAddElement.bind(this));
            this.subscribe('removeElement', this.handleRemoveElement.bind(this));
        },

        handleInput: function (event, element) {
            // If the placeholder should be hidden on focus and the
            // element has focus, don't show the placeholder
            var dontShow = this.hideOnClick && (element === this.base.getFocusedElement());

            // Editor's content has changed, check if the placeholder should be hidden
            this.updatePlaceholder(element, dontShow);
        },

        handleFocus: function (event, element) {
            // Editor has focus, hide the placeholder
            this.hidePlaceholder(element);
        },

        handleBlur: function (event, element) {
            // Editor has lost focus, check if the placeholder should be shown
            this.updatePlaceholder(element);
        }
    });

    MediumEditor.extensions.placeholder = Placeholder;
}());

(function () {
    'use strict';

    var Toolbar = MediumEditor.Extension.extend({
        name: 'toolbar',

        /* Toolbar Options */

        /* align: ['left'|'center'|'right']
         * When the __static__ option is true, this aligns the static toolbar
         * relative to the medium-editor element.
         */
        align: 'center',

        /* allowMultiParagraphSelection: [boolean]
         * enables/disables whether the toolbar should be displayed when
         * selecting multiple paragraphs/block elements
         */
        allowMultiParagraphSelection: true,

        /* buttons: [Array]
         * the names of the set of buttons to display on the toolbar.
         */
        buttons: ['bold', 'italic', 'underline', 'anchor', 'h2', 'h3', 'quote'],

        /* diffLeft: [Number]
         * value in pixels to be added to the X axis positioning of the toolbar.
         */
        diffLeft: 0,

        /* diffTop: [Number]
         * value in pixels to be added to the Y axis positioning of the toolbar.
         */
        diffTop: -10,

        /* firstButtonClass: [string]
         * CSS class added to the first button in the toolbar.
         */
        firstButtonClass: 'medium-editor-button-first',

        /* lastButtonClass: [string]
         * CSS class added to the last button in the toolbar.
         */
        lastButtonClass: 'medium-editor-button-last',

        /* standardizeSelectionStart: [boolean]
         * enables/disables standardizing how the beginning of a range is decided
         * between browsers whenever the selected text is analyzed for updating toolbar buttons status.
         */
        standardizeSelectionStart: false,

        /* static: [boolean]
         * enable/disable the toolbar always displaying in the same location
         * relative to the medium-editor element.
         */
        static: false,

        /* sticky: [boolean]
         * When the __static__ option is true, this enables/disables the toolbar
         * "sticking" to the viewport and staying visible on the screen while
         * the page scrolls.
         */
        sticky: false,

        /* stickyTopOffset: [Number]
         * Value in pixel of the top offset above the toolbar
         */
        stickyTopOffset: 0,

        /* updateOnEmptySelection: [boolean]
         * When the __static__ option is true, this enables/disables updating
         * the state of the toolbar buttons even when the selection is collapsed
         * (there is no selection, just a cursor).
         */
        updateOnEmptySelection: false,

        /* relativeContainer: [node]
         * appending the toolbar to a given node instead of body
         */
        relativeContainer: null,

        init: function () {
            MediumEditor.Extension.prototype.init.apply(this, arguments);

            this.initThrottledMethods();

            if (!this.relativeContainer) {
                this.getEditorOption('elementsContainer').appendChild(this.getToolbarElement());
            } else {
                this.relativeContainer.appendChild(this.getToolbarElement());
            }
        },

        // Helper method to execute method for every extension, but ignoring the toolbar extension
        forEachExtension: function (iterator, context) {
            return this.base.extensions.forEach(function (command) {
                if (command === this) {
                    return;
                }
                return iterator.apply(context || this, arguments);
            }, this);
        },

        // Toolbar creation/deletion

        createToolbar: function () {
            var toolbar = this.document.createElement('div');

            toolbar.id = 'medium-editor-toolbar-' + this.getEditorId();
            toolbar.className = 'medium-editor-toolbar';

            if (this.static) {
                toolbar.className += ' static-toolbar';
            } else if (this.relativeContainer) {
                toolbar.className += ' medium-editor-relative-toolbar';
            } else {
                toolbar.className += ' medium-editor-stalker-toolbar';
            }

            toolbar.appendChild(this.createToolbarButtons());

            // Add any forms that extensions may have
            this.forEachExtension(function (extension) {
                if (extension.hasForm) {
                    toolbar.appendChild(extension.getForm());
                }
            });

            this.attachEventHandlers();

            return toolbar;
        },

        createToolbarButtons: function () {
            var ul = this.document.createElement('ul'),
                li,
                btn,
                buttons,
                extension,
                buttonName,
                buttonOpts;

            ul.id = 'medium-editor-toolbar-actions' + this.getEditorId();
            ul.className = 'medium-editor-toolbar-actions';
            ul.style.display = 'block';

            this.buttons.forEach(function (button) {
                if (typeof button === 'string') {
                    buttonName = button;
                    buttonOpts = null;
                } else {
                    buttonName = button.name;
                    buttonOpts = button;
                }

                // If the button already exists as an extension, it'll be returned
                // othwerise it'll create the default built-in button
                extension = this.base.addBuiltInExtension(buttonName, buttonOpts);

                if (extension && typeof extension.getButton === 'function') {
                    btn = extension.getButton(this.base);
                    li = this.document.createElement('li');
                    if (MediumEditor.util.isElement(btn)) {
                        li.appendChild(btn);
                    } else {
                        li.innerHTML = btn;
                    }
                    ul.appendChild(li);
                }
            }, this);

            buttons = ul.querySelectorAll('button');
            if (buttons.length > 0) {
                buttons[0].classList.add(this.firstButtonClass);
                buttons[buttons.length - 1].classList.add(this.lastButtonClass);
            }

            return ul;
        },

        destroy: function () {
            if (this.toolbar) {
                if (this.toolbar.parentNode) {
                    this.toolbar.parentNode.removeChild(this.toolbar);
                }
                delete this.toolbar;
            }
        },

        // Toolbar accessors

        getInteractionElements: function () {
            return this.getToolbarElement();
        },

        getToolbarElement: function () {
            if (!this.toolbar) {
                this.toolbar = this.createToolbar();
            }

            return this.toolbar;
        },

        getToolbarActionsElement: function () {
            return this.getToolbarElement().querySelector('.medium-editor-toolbar-actions');
        },

        // Toolbar event handlers

        initThrottledMethods: function () {
            // throttledPositionToolbar is throttled because:
            // - It will be called when the browser is resizing, which can fire many times very quickly
            // - For some event (like resize) a slight lag in UI responsiveness is OK and provides performance benefits
            this.throttledPositionToolbar = MediumEditor.util.throttle(function () {
                if (this.base.isActive) {
                    this.positionToolbarIfShown();
                }
            }.bind(this));
        },

        attachEventHandlers: function () {
            // MediumEditor custom events for when user beings and ends interaction with a contenteditable and its elements
            this.subscribe('blur', this.handleBlur.bind(this));
            this.subscribe('focus', this.handleFocus.bind(this));

            // Updating the state of the toolbar as things change
            this.subscribe('editableClick', this.handleEditableClick.bind(this));
            this.subscribe('editableKeyup', this.handleEditableKeyup.bind(this));

            // Handle mouseup on document for updating the selection in the toolbar
            this.on(this.document.documentElement, 'mouseup', this.handleDocumentMouseup.bind(this));

            // Add a scroll event for sticky toolbar
            if (this.static && this.sticky) {
                // On scroll (capture), re-position the toolbar
                this.on(this.window, 'scroll', this.handleWindowScroll.bind(this), true);
            }

            // On resize, re-position the toolbar
            this.on(this.window, 'resize', this.handleWindowResize.bind(this));
        },

        handleWindowScroll: function () {
            this.positionToolbarIfShown();
        },

        handleWindowResize: function () {
            this.throttledPositionToolbar();
        },

        handleDocumentMouseup: function (event) {
            // Do not trigger checkState when mouseup fires over the toolbar
            if (event &&
                    event.target &&
                    MediumEditor.util.isDescendant(this.getToolbarElement(), event.target)) {
                return false;
            }
            this.checkState();
        },

        handleEditableClick: function () {
            // Delay the call to checkState to handle bug where selection is empty
            // immediately after clicking inside a pre-existing selection
            setTimeout(function () {
                this.checkState();
            }.bind(this), 0);
        },

        handleEditableKeyup: function () {
            this.checkState();
        },

        handleBlur: function () {
            // Kill any previously delayed calls to hide the toolbar
            clearTimeout(this.hideTimeout);

            // Blur may fire even if we have a selection, so we want to prevent any delayed showToolbar
            // calls from happening in this specific case
            clearTimeout(this.delayShowTimeout);

            // Delay the call to hideToolbar to handle bug with multiple editors on the page at once
            this.hideTimeout = setTimeout(function () {
                this.hideToolbar();
            }.bind(this), 1);
        },

        handleFocus: function () {
            this.checkState();
        },

        // Hiding/showing toolbar

        isDisplayed: function () {
            return this.getToolbarElement().classList.contains('medium-editor-toolbar-active');
        },

        showToolbar: function () {
            clearTimeout(this.hideTimeout);
            if (!this.isDisplayed()) {
                this.getToolbarElement().classList.add('medium-editor-toolbar-active');
                this.trigger('showToolbar', {}, this.base.getFocusedElement());
            }
        },

        hideToolbar: function () {
            if (this.isDisplayed()) {
                this.getToolbarElement().classList.remove('medium-editor-toolbar-active');
                this.trigger('hideToolbar', {}, this.base.getFocusedElement());
            }
        },

        isToolbarDefaultActionsDisplayed: function () {
            return this.getToolbarActionsElement().style.display === 'block';
        },

        hideToolbarDefaultActions: function () {
            if (this.isToolbarDefaultActionsDisplayed()) {
                this.getToolbarActionsElement().style.display = 'none';
            }
        },

        showToolbarDefaultActions: function () {
            this.hideExtensionForms();

            if (!this.isToolbarDefaultActionsDisplayed()) {
                this.getToolbarActionsElement().style.display = 'block';
            }

            // Using setTimeout + options.delay because:
            // We will actually be displaying the toolbar, which should be controlled by options.delay
            this.delayShowTimeout = this.base.delay(function () {
                this.showToolbar();
            }.bind(this));
        },

        hideExtensionForms: function () {
            // Hide all extension forms
            this.forEachExtension(function (extension) {
                if (extension.hasForm && extension.isDisplayed()) {
                    extension.hideForm();
                }
            });
        },

        // Responding to changes in user selection

        // Checks for existance of multiple block elements in the current selection
        multipleBlockElementsSelected: function () {
            var regexEmptyHTMLTags = /<[^\/>][^>]*><\/[^>]+>/gim, // http://stackoverflow.com/questions/3129738/remove-empty-tags-using-regex
                regexBlockElements = new RegExp('<(' + MediumEditor.util.blockContainerElementNames.join('|') + ')[^>]*>', 'g'),
                selectionHTML = MediumEditor.selection.getSelectionHtml(this.document).replace(regexEmptyHTMLTags, ''), // Filter out empty blocks from selection
                hasMultiParagraphs = selectionHTML.match(regexBlockElements); // Find how many block elements are within the html

            return !!hasMultiParagraphs && hasMultiParagraphs.length > 1;
        },

        modifySelection: function () {
            var selection = this.window.getSelection(),
                selectionRange = selection.getRangeAt(0);

            /*
            * In firefox, there are cases (ie doubleclick of a word) where the selectionRange start
            * will be at the very end of an element.  In other browsers, the selectionRange start
            * would instead be at the very beginning of an element that actually has content.
            * example:
            *   <span>foo</span><span>bar</span>
            *
            * If the text 'bar' is selected, most browsers will have the selectionRange start at the beginning
            * of the 'bar' span.  However, there are cases where firefox will have the selectionRange start
            * at the end of the 'foo' span.  The contenteditable behavior will be ok, but if there are any
            * properties on the 'bar' span, they won't be reflected accurately in the toolbar
            * (ie 'Bold' button wouldn't be active)
            *
            * So, for cases where the selectionRange start is at the end of an element/node, find the next
            * adjacent text node that actually has content in it, and move the selectionRange start there.
            */
            if (this.standardizeSelectionStart &&
                    selectionRange.startContainer.nodeValue &&
                    (selectionRange.startOffset === selectionRange.startContainer.nodeValue.length)) {
                var adjacentNode = MediumEditor.util.findAdjacentTextNodeWithContent(MediumEditor.selection.getSelectionElement(this.window), selectionRange.startContainer, this.document);
                if (adjacentNode) {
                    var offset = 0;
                    while (adjacentNode.nodeValue.substr(offset, 1).trim().length === 0) {
                        offset = offset + 1;
                    }
                    selectionRange = MediumEditor.selection.select(this.document, adjacentNode, offset,
                        selectionRange.endContainer, selectionRange.endOffset);
                }
            }
        },

        checkState: function () {
            if (this.base.preventSelectionUpdates) {
                return;
            }

            // If no editable has focus OR selection is inside contenteditable = false
            // hide toolbar
            if (!this.base.getFocusedElement() ||
                    MediumEditor.selection.selectionInContentEditableFalse(this.window)) {
                return this.hideToolbar();
            }

            // If there's no selection element, selection element doesn't belong to this editor
            // or toolbar is disabled for this selection element
            // hide toolbar
            var selectionElement = MediumEditor.selection.getSelectionElement(this.window);
            if (!selectionElement ||
                    this.getEditorElements().indexOf(selectionElement) === -1 ||
                    selectionElement.getAttribute('data-disable-toolbar')) {
                return this.hideToolbar();
            }

            // Now we know there's a focused editable with a selection

            // If the updateOnEmptySelection option is true, show the toolbar
            if (this.updateOnEmptySelection && this.static) {
                return this.showAndUpdateToolbar();
            }

            // If we don't have a 'valid' selection -> hide toolbar
            if (!MediumEditor.selection.selectionContainsContent(this.document) ||
                (this.allowMultiParagraphSelection === false && this.multipleBlockElementsSelected())) {
                return this.hideToolbar();
            }

            this.showAndUpdateToolbar();
        },

        // Updating the toolbar

        showAndUpdateToolbar: function () {
            this.modifySelection();
            this.setToolbarButtonStates();
            this.trigger('positionToolbar', {}, this.base.getFocusedElement());
            this.showToolbarDefaultActions();
            this.setToolbarPosition();
        },

        setToolbarButtonStates: function () {
            this.forEachExtension(function (extension) {
                if (typeof extension.isActive === 'function' &&
                    typeof extension.setInactive === 'function') {
                    extension.setInactive();
                }
            });

            this.checkActiveButtons();
        },

        checkActiveButtons: function () {
            var manualStateChecks = [],
                queryState = null,
                selectionRange = MediumEditor.selection.getSelectionRange(this.document),
                parentNode,
                updateExtensionState = function (extension) {
                    if (typeof extension.checkState === 'function') {
                        extension.checkState(parentNode);
                    } else if (typeof extension.isActive === 'function' &&
                               typeof extension.isAlreadyApplied === 'function' &&
                               typeof extension.setActive === 'function') {
                        if (!extension.isActive() && extension.isAlreadyApplied(parentNode)) {
                            extension.setActive();
                        }
                    }
                };

            if (!selectionRange) {
                return;
            }

            // Loop through all extensions
            this.forEachExtension(function (extension) {
                // For those extensions where we can use document.queryCommandState(), do so
                if (typeof extension.queryCommandState === 'function') {
                    queryState = extension.queryCommandState();
                    // If queryCommandState returns a valid value, we can trust the browser
                    // and don't need to do our manual checks
                    if (queryState !== null) {
                        if (queryState && typeof extension.setActive === 'function') {
                            extension.setActive();
                        }
                        return;
                    }
                }
                // We can't use queryCommandState for this extension, so add to manualStateChecks
                manualStateChecks.push(extension);
            });

            parentNode = MediumEditor.selection.getSelectedParentElement(selectionRange);

            // Make sure the selection parent isn't outside of the contenteditable
            if (!this.getEditorElements().some(function (element) {
                    return MediumEditor.util.isDescendant(element, parentNode, true);
                })) {
                return;
            }

            // Climb up the DOM and do manual checks for whether a certain extension is currently enabled for this node
            while (parentNode) {
                manualStateChecks.forEach(updateExtensionState);

                // we can abort the search upwards if we leave the contentEditable element
                if (MediumEditor.util.isMediumEditorElement(parentNode)) {
                    break;
                }
                parentNode = parentNode.parentNode;
            }
        },

        // Positioning toolbar

        positionToolbarIfShown: function () {
            if (this.isDisplayed()) {
                this.setToolbarPosition();
            }
        },

        setToolbarPosition: function () {
            var container = this.base.getFocusedElement(),
                selection = this.window.getSelection();

            // If there isn't a valid selection, bail
            if (!container) {
                return this;
            }

            if (this.static || !selection.isCollapsed) {
                this.showToolbar();

                // we don't need any absolute positioning if relativeContainer is set
                if (!this.relativeContainer) {
                    if (this.static) {
                        this.positionStaticToolbar(container);
                    } else {
                        this.positionToolbar(selection);
                    }
                }

                this.trigger('positionedToolbar', {}, this.base.getFocusedElement());
            }
        },

        positionStaticToolbar: function (container) {
            // position the toolbar at left 0, so we can get the real width of the toolbar
            this.getToolbarElement().style.left = '0';

            // document.documentElement for IE 9
            var scrollTop = (this.document.documentElement && this.document.documentElement.scrollTop) || this.document.body.scrollTop,
                windowWidth = this.window.innerWidth,
                toolbarElement = this.getToolbarElement(),
                containerRect = container.getBoundingClientRect(),
                containerTop = containerRect.top + scrollTop,
                containerCenter = (containerRect.left + (containerRect.width / 2)),
                toolbarHeight = toolbarElement.offsetHeight,
                toolbarWidth = toolbarElement.offsetWidth,
                halfOffsetWidth = toolbarWidth / 2,
                targetLeft;

            if (this.sticky) {
                // If it's beyond the height of the editor, position it at the bottom of the editor
                if (scrollTop > (containerTop + container.offsetHeight - toolbarHeight - this.stickyTopOffset)) {
                    toolbarElement.style.top = (containerTop + container.offsetHeight - toolbarHeight) + 'px';
                    toolbarElement.classList.remove('medium-editor-sticky-toolbar');
                // Stick the toolbar to the top of the window
                } else if (scrollTop > (containerTop - toolbarHeight - this.stickyTopOffset)) {
                    toolbarElement.classList.add('medium-editor-sticky-toolbar');
                    toolbarElement.style.top = this.stickyTopOffset + 'px';
                // Normal static toolbar position
                } else {
                    toolbarElement.classList.remove('medium-editor-sticky-toolbar');
                    toolbarElement.style.top = containerTop - toolbarHeight + 'px';
                }
            } else {
                toolbarElement.style.top = containerTop - toolbarHeight + 'px';
            }

            switch (this.align) {
                case 'left':
                    targetLeft = containerRect.left;
                    break;

                case 'right':
                    targetLeft = containerRect.right - toolbarWidth;
                    break;

                case 'center':
                    targetLeft = containerCenter - halfOffsetWidth;
                    break;
            }

            if (targetLeft < 0) {
                targetLeft = 0;
            } else if ((targetLeft + toolbarWidth) > windowWidth) {
                targetLeft = (windowWidth - Math.ceil(toolbarWidth) - 1);
            }

            toolbarElement.style.left = targetLeft + 'px';
        },

        positionToolbar: function (selection) {
            // position the toolbar at left 0, so we can get the real width of the toolbar
            this.getToolbarElement().style.left = '0';
            this.getToolbarElement().style.right = 'initial';

            var range = selection.getRangeAt(0),
                boundary = range.getBoundingClientRect();

            // Handle selections with just images
            if (!boundary || ((boundary.height === 0 && boundary.width === 0) && range.startContainer === range.endContainer)) {
                // If there's a nested image, use that for the bounding rectangle
                if (range.startContainer.nodeType === 1 && range.startContainer.querySelector('img')) {
                    boundary = range.startContainer.querySelector('img').getBoundingClientRect();
                } else {
                    boundary = range.startContainer.getBoundingClientRect();
                }
            }

            var containerWidth = this.window.innerWidth,
                toolbarElement = this.getToolbarElement(),
                toolbarHeight = toolbarElement.offsetHeight,
                toolbarWidth = toolbarElement.offsetWidth,
                halfOffsetWidth = toolbarWidth / 2,
                buttonHeight = 50,
                defaultLeft = this.diffLeft - halfOffsetWidth,
                elementsContainer = this.getEditorOption('elementsContainer'),
                elementsContainerAbsolute = ['absolute', 'fixed'].indexOf(window.getComputedStyle(elementsContainer).getPropertyValue('position')) > -1,
                positions = {},
                relativeBoundary = {},
                middleBoundary, elementsContainerBoundary;

            // If container element is absolute / fixed, recalculate boundaries to be relative to the container
            if (elementsContainerAbsolute) {
                elementsContainerBoundary = elementsContainer.getBoundingClientRect();
                ['top', 'left'].forEach(function (key) {
                    relativeBoundary[key] = boundary[key] - elementsContainerBoundary[key];
                });

                relativeBoundary.width = boundary.width;
                relativeBoundary.height = boundary.height;
                boundary = relativeBoundary;

                containerWidth = elementsContainerBoundary.width;

                // Adjust top position according to container scroll position
                positions.top = elementsContainer.scrollTop;
            } else {
                // Adjust top position according to window scroll position
                positions.top = this.window.pageYOffset;
            }

            middleBoundary = boundary.left + boundary.width / 2;
            positions.top += boundary.top - toolbarHeight;

            if (boundary.top < buttonHeight) {
                toolbarElement.classList.add('medium-toolbar-arrow-over');
                toolbarElement.classList.remove('medium-toolbar-arrow-under');
                positions.top += buttonHeight + boundary.height - this.diffTop;
            } else {
                toolbarElement.classList.add('medium-toolbar-arrow-under');
                toolbarElement.classList.remove('medium-toolbar-arrow-over');
                positions.top += this.diffTop;
            }

            if (middleBoundary < halfOffsetWidth) {
                positions.left = defaultLeft + halfOffsetWidth;
                positions.right = 'initial';
            } else if ((containerWidth - middleBoundary) < halfOffsetWidth) {
                positions.left = 'auto';
                positions.right = 0;
            } else {
                positions.left = defaultLeft + middleBoundary;
                positions.right = 'initial';
            }

            ['top', 'left', 'right'].forEach(function (key) {
                toolbarElement.style[key] = positions[key] + (isNaN(positions[key]) ? '' : 'px');
            });
        }
    });

    MediumEditor.extensions.toolbar = Toolbar;
}());

(function () {
    'use strict';

    var ImageDragging = MediumEditor.Extension.extend({
        init: function () {
            MediumEditor.Extension.prototype.init.apply(this, arguments);

            this.subscribe('editableDrag', this.handleDrag.bind(this));
            this.subscribe('editableDrop', this.handleDrop.bind(this));
        },

        handleDrag: function (event) {
            var className = 'medium-editor-dragover';
            event.preventDefault();
            event.dataTransfer.dropEffect = 'copy';

            if (event.type === 'dragover') {
                event.target.classList.add(className);
            } else if (event.type === 'dragleave') {
                event.target.classList.remove(className);
            }
        },

        handleDrop: function (event) {
            var className = 'medium-editor-dragover',
                files;
            event.preventDefault();
            event.stopPropagation();

            // IE9 does not support the File API, so prevent file from opening in a new window
            // but also don't try to actually get the file
            if (event.dataTransfer.files) {
                files = Array.prototype.slice.call(event.dataTransfer.files, 0);
                files.some(function (file) {
                    if (file.type.match('image')) {
                        var fileReader, id;
                        fileReader = new FileReader();
                        fileReader.readAsDataURL(file);

                        id = 'medium-img-' + (+new Date());
                        MediumEditor.util.insertHTMLCommand(this.document, '<img class="medium-editor-image-loading" id="' + id + '" />');

                        fileReader.onload = function () {
                            var img = this.document.getElementById(id);
                            if (img) {
                                img.removeAttribute('id');
                                img.removeAttribute('class');
                                img.src = fileReader.result;
                            }
                        }.bind(this);
                    }
                }.bind(this));
            }
            event.target.classList.remove(className);
        }
    });

    MediumEditor.extensions.imageDragging = ImageDragging;
}());

(function () {
    'use strict';

    // Event handlers that shouldn't be exposed externally

    function handleDisableExtraSpaces(event) {
        var node = MediumEditor.selection.getSelectionStart(this.options.ownerDocument),
            textContent = node.textContent,
            caretPositions = MediumEditor.selection.getCaretOffsets(node);

        if ((textContent[caretPositions.left - 1] === undefined) || (textContent[caretPositions.left - 1].trim() === '') || (textContent[caretPositions.left] !== undefined && textContent[caretPositions.left].trim() === '')) {
            event.preventDefault();
        }
    }

    function handleDisabledEnterKeydown(event, element) {
        if (this.options.disableReturn || element.getAttribute('data-disable-return')) {
            event.preventDefault();
        } else if (this.options.disableDoubleReturn || element.getAttribute('data-disable-double-return')) {
            var node = MediumEditor.selection.getSelectionStart(this.options.ownerDocument);

            // if current text selection is empty OR previous sibling text is empty OR it is not a list
            if ((node && node.textContent.trim() === '' && node.nodeName.toLowerCase() !== 'li') ||
                (node.previousElementSibling && node.previousElementSibling.nodeName.toLowerCase() !== 'br' &&
                 node.previousElementSibling.textContent.trim() === '')) {
                event.preventDefault();
            }
        }
    }

    function handleTabKeydown(event) {
        // Override tab only for pre nodes
        var node = MediumEditor.selection.getSelectionStart(this.options.ownerDocument),
            tag = node && node.nodeName.toLowerCase();

        if (tag === 'pre') {
            event.preventDefault();
            MediumEditor.util.insertHTMLCommand(this.options.ownerDocument, '    ');
        }

        // Tab to indent list structures!
        if (MediumEditor.util.isListItem(node)) {
            event.preventDefault();

            // If Shift is down, outdent, otherwise indent
            if (event.shiftKey) {
                this.options.ownerDocument.execCommand('outdent', false, null);
            } else {
                this.options.ownerDocument.execCommand('indent', false, null);
            }
        }
    }

    function handleBlockDeleteKeydowns(event) {
        var p, node = MediumEditor.selection.getSelectionStart(this.options.ownerDocument),
            tagName = node.nodeName.toLowerCase(),
            isEmpty = /^(\s+|<br\/?>)?$/i,
            isHeader = /h\d/i;

        if (MediumEditor.util.isKey(event, [MediumEditor.util.keyCode.BACKSPACE, MediumEditor.util.keyCode.ENTER]) &&
                // has a preceeding sibling
                node.previousElementSibling &&
                // in a header
                isHeader.test(tagName) &&
                // at the very end of the block
                MediumEditor.selection.getCaretOffsets(node).left === 0) {
            if (MediumEditor.util.isKey(event, MediumEditor.util.keyCode.BACKSPACE) && isEmpty.test(node.previousElementSibling.innerHTML)) {
                // backspacing the begining of a header into an empty previous element will
                // change the tagName of the current node to prevent one
                // instead delete previous node and cancel the event.
                node.previousElementSibling.parentNode.removeChild(node.previousElementSibling);
                event.preventDefault();
            } else if (!this.options.disableDoubleReturn && MediumEditor.util.isKey(event, MediumEditor.util.keyCode.ENTER)) {
                // hitting return in the begining of a header will create empty header elements before the current one
                // instead, make "<p><br></p>" element, which are what happens if you hit return in an empty paragraph
                p = this.options.ownerDocument.createElement('p');
                p.innerHTML = '<br>';
                node.previousElementSibling.parentNode.insertBefore(p, node);
                event.preventDefault();
            }
        } else if (MediumEditor.util.isKey(event, MediumEditor.util.keyCode.DELETE) &&
                    // between two sibling elements
                    node.nextElementSibling &&
                    node.previousElementSibling &&
                    // not in a header
                    !isHeader.test(tagName) &&
                    // in an empty tag
                    isEmpty.test(node.innerHTML) &&
                    // when the next tag *is* a header
                    isHeader.test(node.nextElementSibling.nodeName.toLowerCase())) {
            // hitting delete in an empty element preceding a header, ex:
            //  <p>[CURSOR]</p><h1>Header</h1>
            // Will cause the h1 to become a paragraph.
            // Instead, delete the paragraph node and move the cursor to the begining of the h1

            // remove node and move cursor to start of header
            MediumEditor.selection.moveCursor(this.options.ownerDocument, node.nextElementSibling);

            node.previousElementSibling.parentNode.removeChild(node);

            event.preventDefault();
        } else if (MediumEditor.util.isKey(event, MediumEditor.util.keyCode.BACKSPACE) &&
                tagName === 'li' &&
                // hitting backspace inside an empty li
                isEmpty.test(node.innerHTML) &&
                // is first element (no preceeding siblings)
                !node.previousElementSibling &&
                // parent also does not have a sibling
                !node.parentElement.previousElementSibling &&
                // is not the only li in a list
                node.nextElementSibling &&
                node.nextElementSibling.nodeName.toLowerCase() === 'li') {
            // backspacing in an empty first list element in the first list (with more elements) ex:
            //  <ul><li>[CURSOR]</li><li>List Item 2</li></ul>
            // will remove the first <li> but add some extra element before (varies based on browser)
            // Instead, this will:
            // 1) remove the list element
            // 2) create a paragraph before the list
            // 3) move the cursor into the paragraph

            // create a paragraph before the list
            p = this.options.ownerDocument.createElement('p');
            p.innerHTML = '<br>';
            node.parentElement.parentElement.insertBefore(p, node.parentElement);

            // move the cursor into the new paragraph
            MediumEditor.selection.moveCursor(this.options.ownerDocument, p);

            // remove the list element
            node.parentElement.removeChild(node);

            event.preventDefault();
        } else if (MediumEditor.util.isKey(event, MediumEditor.util.keyCode.BACKSPACE) &&
                (MediumEditor.util.getClosestTag(node, 'blockquote') !== false) &&
                MediumEditor.selection.getCaretOffsets(node).left === 0) {

            // when cursor is at the begining of the element and the element is <blockquote>
            // then pressing backspace key should change the <blockquote> to a <p> tag
            event.preventDefault();
            MediumEditor.util.execFormatBlock(this.options.ownerDocument, 'p');
        } else if (MediumEditor.util.isKey(event, MediumEditor.util.keyCode.ENTER) &&
                (MediumEditor.util.getClosestTag(node, 'blockquote') !== false) &&
                MediumEditor.selection.getCaretOffsets(node).right === 0) {

            // when cursor is at the end of <blockquote>,
            // then pressing enter key should create <p> tag, not <blockquote>
            p = this.options.ownerDocument.createElement('p');
            p.innerHTML = '<br>';
            node.parentElement.insertBefore(p, node.nextSibling);

            // move the cursor into the new paragraph
            MediumEditor.selection.moveCursor(this.options.ownerDocument, p);

            event.preventDefault();
        } else if (MediumEditor.util.isKey(event, MediumEditor.util.keyCode.BACKSPACE) &&
                MediumEditor.util.isMediumEditorElement(node.parentElement) &&
                !node.previousElementSibling &&
                node.nextElementSibling &&
                isEmpty.test(node.innerHTML)) {

            // when cursor is in the first element, it's empty and user presses backspace,
            // do delete action instead to get rid of the first element and move caret to 2nd
            event.preventDefault();
            MediumEditor.selection.moveCursor(this.options.ownerDocument, node.nextSibling);
            node.parentElement.removeChild(node);
        }
    }

    function handleKeyup(event) {
        var node = MediumEditor.selection.getSelectionStart(this.options.ownerDocument),
            tagName;

        if (!node) {
            return;
        }

        // https://github.com/yabwe/medium-editor/issues/994
        // Firefox thrown an error when calling `formatBlock` on an empty editable blockContainer that's not a <div>
        if (MediumEditor.util.isMediumEditorElement(node) && node.children.length === 0 && !MediumEditor.util.isBlockContainer(node)) {
            this.options.ownerDocument.execCommand('formatBlock', false, 'p');
        }

        // https://github.com/yabwe/medium-editor/issues/834
        // https://github.com/yabwe/medium-editor/pull/382
        // Don't call format block if this is a block element (ie h1, figCaption, etc.)
        if (MediumEditor.util.isKey(event, MediumEditor.util.keyCode.ENTER) &&
            !MediumEditor.util.isListItem(node) &&
            !MediumEditor.util.isBlockContainer(node)) {

            tagName = node.nodeName.toLowerCase();
            // For anchor tags, unlink
            if (tagName === 'a') {
                this.options.ownerDocument.execCommand('unlink', false, null);
            } else if (!event.shiftKey && !event.ctrlKey) {
                this.options.ownerDocument.execCommand('formatBlock', false, 'p');
            }
        }
    }

    function handleEditableInput(event, editable) {
        var textarea = editable.parentNode.querySelector('textarea[medium-editor-textarea-id="' + editable.getAttribute('medium-editor-textarea-id') + '"]');
        if (textarea) {
            textarea.value = editable.innerHTML.trim();
        }
    }

    // Internal helper methods which shouldn't be exposed externally

    function addToEditors(win) {
        if (!win._mediumEditors) {
            // To avoid breaking users who are assuming that the unique id on
            // medium-editor elements will start at 1, inserting a 'null' in the
            // array so the unique-id can always map to the index of the editor instance
            win._mediumEditors = [null];
        }

        // If this already has a unique id, re-use it
        if (!this.id) {
            this.id = win._mediumEditors.length;
        }

        win._mediumEditors[this.id] = this;
    }

    function removeFromEditors(win) {
        if (!win._mediumEditors || !win._mediumEditors[this.id]) {
            return;
        }

        /* Setting the instance to null in the array instead of deleting it allows:
         * 1) Each instance to preserve its own unique-id, even after being destroyed
         *    and initialized again
         * 2) The unique-id to always correspond to an index in the array of medium-editor
         *    instances. Thus, we will be able to look at a contenteditable, and determine
         *    which instance it belongs to, by indexing into the global array.
         */
        win._mediumEditors[this.id] = null;
    }

    function createElementsArray(selector, doc, filterEditorElements) {
        var elements = [];

        if (!selector) {
            selector = [];
        }
        // If string, use as query selector
        if (typeof selector === 'string') {
            selector = doc.querySelectorAll(selector);
        }
        // If element, put into array
        if (MediumEditor.util.isElement(selector)) {
            selector = [selector];
        }

        if (filterEditorElements) {
            // Remove elements that have already been initialized by the editor
            // selecotr might not be an array (ie NodeList) so use for loop
            for (var i = 0; i < selector.length; i++) {
                var el = selector[i];
                if (MediumEditor.util.isElement(el) &&
                    !el.getAttribute('data-medium-editor-element') &&
                    !el.getAttribute('medium-editor-textarea-id')) {
                    elements.push(el);
                }
            }
        } else {
            // Convert NodeList (or other array like object) into an array
            elements = Array.prototype.slice.apply(selector);
        }

        return elements;
    }

    function cleanupTextareaElement(element) {
        var textarea = element.parentNode.querySelector('textarea[medium-editor-textarea-id="' + element.getAttribute('medium-editor-textarea-id') + '"]');
        if (textarea) {
            // Un-hide the textarea
            textarea.classList.remove('medium-editor-hidden');
            textarea.removeAttribute('medium-editor-textarea-id');
        }
        if (element.parentNode) {
            element.parentNode.removeChild(element);
        }
    }

    function setExtensionDefaults(extension, defaults) {
        Object.keys(defaults).forEach(function (prop) {
            if (extension[prop] === undefined) {
                extension[prop] = defaults[prop];
            }
        });
        return extension;
    }

    function initExtension(extension, name, instance) {
        var extensionDefaults = {
            'window': instance.options.contentWindow,
            'document': instance.options.ownerDocument,
            'base': instance
        };

        // Add default options into the extension
        extension = setExtensionDefaults(extension, extensionDefaults);

        // Call init on the extension
        if (typeof extension.init === 'function') {
            extension.init();
        }

        // Set extension name (if not already set)
        if (!extension.name) {
            extension.name = name;
        }
        return extension;
    }

    function isToolbarEnabled() {
        // If any of the elements don't have the toolbar disabled
        // We need a toolbar
        if (this.elements.every(function (element) {
                return !!element.getAttribute('data-disable-toolbar');
            })) {
            return false;
        }

        return this.options.toolbar !== false;
    }

    function isAnchorPreviewEnabled() {
        // If toolbar is disabled, don't add
        if (!isToolbarEnabled.call(this)) {
            return false;
        }

        return this.options.anchorPreview !== false;
    }

    function isPlaceholderEnabled() {
        return this.options.placeholder !== false;
    }

    function isAutoLinkEnabled() {
        return this.options.autoLink !== false;
    }

    function isImageDraggingEnabled() {
        return this.options.imageDragging !== false;
    }

    function isKeyboardCommandsEnabled() {
        return this.options.keyboardCommands !== false;
    }

    function shouldUseFileDraggingExtension() {
        // Since the file-dragging extension replaces the image-dragging extension,
        // we need to check if the user passed an overrided image-dragging extension.
        // If they have, to avoid breaking users, we won't use file-dragging extension.
        return !this.options.extensions['imageDragging'];
    }

    function createContentEditable(textarea) {
        var div = this.options.ownerDocument.createElement('div'),
            now = Date.now(),
            uniqueId = 'medium-editor-' + now,
            atts = textarea.attributes;

        // Some browsers can move pretty fast, since we're using a timestamp
        // to make a unique-id, ensure that the id is actually unique on the page
        while (this.options.ownerDocument.getElementById(uniqueId)) {
            now++;
            uniqueId = 'medium-editor-' + now;
        }

        div.className = textarea.className;
        div.id = uniqueId;
        div.innerHTML = textarea.value;

        textarea.setAttribute('medium-editor-textarea-id', uniqueId);

        // re-create all attributes from the textearea to the new created div
        for (var i = 0, n = atts.length; i < n; i++) {
            // do not re-create existing attributes
            if (!div.hasAttribute(atts[i].nodeName)) {
                div.setAttribute(atts[i].nodeName, atts[i].value);
            }
        }

        // If textarea has a form, listen for reset on the form to clear
        // the content of the created div
        if (textarea.form) {
            this.on(textarea.form, 'reset', function (event) {
                if (!event.defaultPrevented) {
                    this.resetContent(this.options.ownerDocument.getElementById(uniqueId));
                }
            }.bind(this));
        }

        textarea.classList.add('medium-editor-hidden');
        textarea.parentNode.insertBefore(
            div,
            textarea
        );

        return div;
    }

    function initElement(element, editorId) {
        if (!element.getAttribute('data-medium-editor-element')) {
            if (element.nodeName.toLowerCase() === 'textarea') {
                element = createContentEditable.call(this, element);

                // Make sure we only attach to editableInput once for <textarea> elements
                if (!this.instanceHandleEditableInput) {
                    this.instanceHandleEditableInput = handleEditableInput.bind(this);
                    this.subscribe('editableInput', this.instanceHandleEditableInput);
                }
            }

            if (!this.options.disableEditing && !element.getAttribute('data-disable-editing')) {
                element.setAttribute('contentEditable', true);
                element.setAttribute('spellcheck', this.options.spellcheck);
            }

            // Make sure we only attach to editableKeydownEnter once for disable-return options
            if (!this.instanceHandleEditableKeydownEnter) {
                if (element.getAttribute('data-disable-return') || element.getAttribute('data-disable-double-return')) {
                    this.instanceHandleEditableKeydownEnter = handleDisabledEnterKeydown.bind(this);
                    this.subscribe('editableKeydownEnter', this.instanceHandleEditableKeydownEnter);
                }
            }

            // if we're not disabling return, add a handler to help handle cleanup
            // for certain cases when enter is pressed
            if (!this.options.disableReturn && !element.getAttribute('data-disable-return')) {
                this.on(element, 'keyup', handleKeyup.bind(this));
            }

            var elementId = MediumEditor.util.guid();

            element.setAttribute('data-medium-editor-element', true);
            element.classList.add('medium-editor-element');
            element.setAttribute('role', 'textbox');
            element.setAttribute('aria-multiline', true);
            element.setAttribute('data-medium-editor-editor-index', editorId);
            // TODO: Merge data-medium-editor-element and medium-editor-index attributes for 6.0.0
            // medium-editor-index is not named correctly anymore and can be re-purposed to signify
            // whether the element has been initialized or not
            element.setAttribute('medium-editor-index', elementId);
            initialContent[elementId] = element.innerHTML;

            this.events.attachAllEventsToElement(element);
        }

        return element;
    }

    function attachHandlers() {
        // attach to tabs
        this.subscribe('editableKeydownTab', handleTabKeydown.bind(this));

        // Bind keys which can create or destroy a block element: backspace, delete, return
        this.subscribe('editableKeydownDelete', handleBlockDeleteKeydowns.bind(this));
        this.subscribe('editableKeydownEnter', handleBlockDeleteKeydowns.bind(this));

        // Bind double space event
        if (this.options.disableExtraSpaces) {
            this.subscribe('editableKeydownSpace', handleDisableExtraSpaces.bind(this));
        }

        // Make sure we only attach to editableKeydownEnter once for disable-return options
        if (!this.instanceHandleEditableKeydownEnter) {
            // disabling return or double return
            if (this.options.disableReturn || this.options.disableDoubleReturn) {
                this.instanceHandleEditableKeydownEnter = handleDisabledEnterKeydown.bind(this);
                this.subscribe('editableKeydownEnter', this.instanceHandleEditableKeydownEnter);
            }
        }
    }

    function initExtensions() {

        this.extensions = [];

        // Passed in extensions
        Object.keys(this.options.extensions).forEach(function (name) {
            // Always save the toolbar extension for last
            if (name !== 'toolbar' && this.options.extensions[name]) {
                this.extensions.push(initExtension(this.options.extensions[name], name, this));
            }
        }, this);

        // 4 Cases for imageDragging + fileDragging extensons:
        //
        // 1. ImageDragging ON + No Custom Image Dragging Extension:
        //    * Use fileDragging extension (default options)
        // 2. ImageDragging OFF + No Custom Image Dragging Extension:
        //    * Use fileDragging extension w/ images turned off
        // 3. ImageDragging ON + Custom Image Dragging Extension:
        //    * Don't use fileDragging (could interfere with custom image dragging extension)
        // 4. ImageDragging OFF + Custom Image Dragging:
        //    * Don't use fileDragging (could interfere with custom image dragging extension)
        if (shouldUseFileDraggingExtension.call(this)) {
            var opts = this.options.fileDragging;
            if (!opts) {
                opts = {};

                // Image is in the 'allowedTypes' list by default.
                // If imageDragging is off override the 'allowedTypes' list with an empty one
                if (!isImageDraggingEnabled.call(this)) {
                    opts.allowedTypes = [];
                }
            }
            this.addBuiltInExtension('fileDragging', opts);
        }

        // Built-in extensions
        var builtIns = {
            paste: true,
            'anchor-preview': isAnchorPreviewEnabled.call(this),
            autoLink: isAutoLinkEnabled.call(this),
            keyboardCommands: isKeyboardCommandsEnabled.call(this),
            placeholder: isPlaceholderEnabled.call(this)
        };
        Object.keys(builtIns).forEach(function (name) {
            if (builtIns[name]) {
                this.addBuiltInExtension(name);
            }
        }, this);

        // Users can pass in a custom toolbar extension
        // so check for that first and if it's not present
        // just create the default toolbar
        var toolbarExtension = this.options.extensions['toolbar'];
        if (!toolbarExtension && isToolbarEnabled.call(this)) {
            // Backwards compatability
            var toolbarOptions = MediumEditor.util.extend({}, this.options.toolbar, {
                allowMultiParagraphSelection: this.options.allowMultiParagraphSelection // deprecated
            });
            toolbarExtension = new MediumEditor.extensions.toolbar(toolbarOptions);
        }

        // If the toolbar is not disabled, so we actually have an extension
        // initialize it and add it to the extensions array
        if (toolbarExtension) {
            this.extensions.push(initExtension(toolbarExtension, 'toolbar', this));
        }
    }

    function mergeOptions(defaults, options) {
        var deprecatedProperties = [
            ['allowMultiParagraphSelection', 'toolbar.allowMultiParagraphSelection']
        ];
        // warn about using deprecated properties
        if (options) {
            deprecatedProperties.forEach(function (pair) {
                if (options.hasOwnProperty(pair[0]) && options[pair[0]] !== undefined) {
                    MediumEditor.util.deprecated(pair[0], pair[1], 'v6.0.0');
                }
            });
        }

        return MediumEditor.util.defaults({}, options, defaults);
    }

    function execActionInternal(action, opts) {
        /*jslint regexp: true*/
        var appendAction = /^append-(.+)$/gi,
            justifyAction = /justify([A-Za-z]*)$/g, /* Detecting if is justifyCenter|Right|Left */
            match,
            cmdValueArgument;
        /*jslint regexp: false*/

        // Actions starting with 'append-' should attempt to format a block of text ('formatBlock') using a specific
        // type of block element (ie append-blockquote, append-h1, append-pre, etc.)
        match = appendAction.exec(action);
        if (match) {
            return MediumEditor.util.execFormatBlock(this.options.ownerDocument, match[1]);
        }

        if (action === 'fontSize') {
            // TODO: Deprecate support for opts.size in 6.0.0
            if (opts.size) {
                MediumEditor.util.deprecated('.size option for fontSize command', '.value', '6.0.0');
            }
            cmdValueArgument = opts.value || opts.size;
            return this.options.ownerDocument.execCommand('fontSize', false, cmdValueArgument);
        }

        if (action === 'fontName') {
            // TODO: Deprecate support for opts.name in 6.0.0
            if (opts.name) {
                MediumEditor.util.deprecated('.name option for fontName command', '.value', '6.0.0');
            }
            cmdValueArgument = opts.value || opts.name;
            return this.options.ownerDocument.execCommand('fontName', false, cmdValueArgument);
        }

        if (action === 'createLink') {
            return this.createLink(opts);
        }

        if (action === 'image') {
            var src = this.options.contentWindow.getSelection().toString().trim();
            return this.options.ownerDocument.execCommand('insertImage', false, src);
        }

        if (action === 'html') {
            var html = this.options.contentWindow.getSelection().toString().trim();
            return MediumEditor.util.insertHTMLCommand(this.options.ownerDocument, html);
        }

        /* Issue: https://github.com/yabwe/medium-editor/issues/595
         * If the action is to justify the text */
        if (justifyAction.exec(action)) {
            var result = this.options.ownerDocument.execCommand(action, false, null),
                parentNode = MediumEditor.selection.getSelectedParentElement(MediumEditor.selection.getSelectionRange(this.options.ownerDocument));
            if (parentNode) {
                cleanupJustifyDivFragments.call(this, MediumEditor.util.getTopBlockContainer(parentNode));
            }

            return result;
        }

        cmdValueArgument = opts && opts.value;
        return this.options.ownerDocument.execCommand(action, false, cmdValueArgument);
    }

    /* If we've just justified text within a container block
     * Chrome may have removed <br> elements and instead wrapped lines in <div> elements
     * with a text-align property.  If so, we want to fix this
     */
    function cleanupJustifyDivFragments(blockContainer) {
        if (!blockContainer) {
            return;
        }

        var textAlign,
            childDivs = Array.prototype.slice.call(blockContainer.childNodes).filter(function (element) {
                var isDiv = element.nodeName.toLowerCase() === 'div';
                if (isDiv && !textAlign) {
                    textAlign = element.style.textAlign;
                }
                return isDiv;
            });

        /* If we found child <div> elements with text-align style attributes
         * we should fix this by:
         *
         * 1) Unwrapping each <div> which has a text-align style
         * 2) Insert a <br> element after each set of 'unwrapped' div children
         * 3) Set the text-align style of the parent block element
         */
        if (childDivs.length) {
            // Since we're mucking with the HTML, preserve selection
            this.saveSelection();
            childDivs.forEach(function (div) {
                if (div.style.textAlign === textAlign) {
                    var lastChild = div.lastChild;
                    if (lastChild) {
                        // Instead of a div, extract the child elements and add a <br>
                        MediumEditor.util.unwrap(div, this.options.ownerDocument);
                        var br = this.options.ownerDocument.createElement('BR');
                        lastChild.parentNode.insertBefore(br, lastChild.nextSibling);
                    }
                }
            }, this);
            blockContainer.style.textAlign = textAlign;
            // We're done, so restore selection
            this.restoreSelection();
        }
    }

    var initialContent = {};

    MediumEditor.prototype = {
        // NOT DOCUMENTED - exposed for backwards compatability
        init: function (elements, options) {
            this.options = mergeOptions.call(this, this.defaults, options);
            this.origElements = elements;

            if (!this.options.elementsContainer) {
                this.options.elementsContainer = this.options.ownerDocument.body;
            }

            return this.setup();
        },

        setup: function () {
            if (this.isActive) {
                return;
            }

            addToEditors.call(this, this.options.contentWindow);
            this.events = new MediumEditor.Events(this);
            this.elements = [];

            this.addElements(this.origElements);

            if (this.elements.length === 0) {
                return;
            }

            this.isActive = true;

            // Call initialization helpers
            initExtensions.call(this);
            attachHandlers.call(this);
        },

        destroy: function () {
            if (!this.isActive) {
                return;
            }

            this.isActive = false;

            this.extensions.forEach(function (extension) {
                if (typeof extension.destroy === 'function') {
                    extension.destroy();
                }
            }, this);

            this.events.destroy();

            this.elements.forEach(function (element) {
                // Reset elements content, fix for issue where after editor destroyed the red underlines on spelling errors are left
                if (this.options.spellcheck) {
                    element.innerHTML = element.innerHTML;
                }

                // cleanup extra added attributes
                element.removeAttribute('contentEditable');
                element.removeAttribute('spellcheck');
                element.removeAttribute('data-medium-editor-element');
                element.classList.remove('medium-editor-element');
                element.removeAttribute('role');
                element.removeAttribute('aria-multiline');
                element.removeAttribute('medium-editor-index');
                element.removeAttribute('data-medium-editor-editor-index');

                // Remove any elements created for textareas
                if (element.getAttribute('medium-editor-textarea-id')) {
                    cleanupTextareaElement(element);
                }
            }, this);
            this.elements = [];
            this.instanceHandleEditableKeydownEnter = null;
            this.instanceHandleEditableInput = null;

            removeFromEditors.call(this, this.options.contentWindow);
        },

        on: function (target, event, listener, useCapture) {
            this.events.attachDOMEvent(target, event, listener, useCapture);

            return this;
        },

        off: function (target, event, listener, useCapture) {
            this.events.detachDOMEvent(target, event, listener, useCapture);

            return this;
        },

        subscribe: function (event, listener) {
            this.events.attachCustomEvent(event, listener);

            return this;
        },

        unsubscribe: function (event, listener) {
            this.events.detachCustomEvent(event, listener);

            return this;
        },

        trigger: function (name, data, editable) {
            this.events.triggerCustomEvent(name, data, editable);

            return this;
        },

        delay: function (fn) {
            var self = this;
            return setTimeout(function () {
                if (self.isActive) {
                    fn();
                }
            }, this.options.delay);
        },

        serialize: function () {
            var i,
                elementid,
                content = {},
                len = this.elements.length;

            for (i = 0; i < len; i += 1) {
                elementid = (this.elements[i].id !== '') ? this.elements[i].id : 'element-' + i;
                content[elementid] = {
                    value: this.elements[i].innerHTML.trim()
                };
            }
            return content;
        },

        getExtensionByName: function (name) {
            var extension;
            if (this.extensions && this.extensions.length) {
                this.extensions.some(function (ext) {
                    if (ext.name === name) {
                        extension = ext;
                        return true;
                    }
                    return false;
                });
            }
            return extension;
        },

        /**
         * NOT DOCUMENTED - exposed as a helper for other extensions to use
         */
        addBuiltInExtension: function (name, opts) {
            var extension = this.getExtensionByName(name),
                merged;
            if (extension) {
                return extension;
            }

            switch (name) {
                case 'anchor':
                    merged = MediumEditor.util.extend({}, this.options.anchor, opts);
                    extension = new MediumEditor.extensions.anchor(merged);
                    break;
                case 'anchor-preview':
                    extension = new MediumEditor.extensions.anchorPreview(this.options.anchorPreview);
                    break;
                case 'autoLink':
                    extension = new MediumEditor.extensions.autoLink();
                    break;
                case 'fileDragging':
                    extension = new MediumEditor.extensions.fileDragging(opts);
                    break;
                case 'fontname':
                    extension = new MediumEditor.extensions.fontName(this.options.fontName);
                    break;
                case 'fontsize':
                    extension = new MediumEditor.extensions.fontSize(opts);
                    break;
                case 'keyboardCommands':
                    extension = new MediumEditor.extensions.keyboardCommands(this.options.keyboardCommands);
                    break;
                case 'paste':
                    extension = new MediumEditor.extensions.paste(this.options.paste);
                    break;
                case 'placeholder':
                    extension = new MediumEditor.extensions.placeholder(this.options.placeholder);
                    break;
                default:
                    // All of the built-in buttons for MediumEditor are extensions
                    // so check to see if the extension we're creating is a built-in button
                    if (MediumEditor.extensions.button.isBuiltInButton(name)) {
                        if (opts) {
                            merged = MediumEditor.util.defaults({}, opts, MediumEditor.extensions.button.prototype.defaults[name]);
                            extension = new MediumEditor.extensions.button(merged);
                        } else {
                            extension = new MediumEditor.extensions.button(name);
                        }
                    }
            }

            if (extension) {
                this.extensions.push(initExtension(extension, name, this));
            }

            return extension;
        },

        stopSelectionUpdates: function () {
            this.preventSelectionUpdates = true;
        },

        startSelectionUpdates: function () {
            this.preventSelectionUpdates = false;
        },

        checkSelection: function () {
            var toolbar = this.getExtensionByName('toolbar');
            if (toolbar) {
                toolbar.checkState();
            }
            return this;
        },

        // Wrapper around document.queryCommandState for checking whether an action has already
        // been applied to the current selection
        queryCommandState: function (action) {
            var fullAction = /^full-(.+)$/gi,
                match,
                queryState = null;

            // Actions starting with 'full-' need to be modified since this is a medium-editor concept
            match = fullAction.exec(action);
            if (match) {
                action = match[1];
            }

            try {
                queryState = this.options.ownerDocument.queryCommandState(action);
            } catch (exc) {
                queryState = null;
            }

            return queryState;
        },

        execAction: function (action, opts) {
            /*jslint regexp: true*/
            var fullAction = /^full-(.+)$/gi,
                match,
                result;
            /*jslint regexp: false*/

            // Actions starting with 'full-' should be applied to to the entire contents of the editable element
            // (ie full-bold, full-append-pre, etc.)
            match = fullAction.exec(action);
            if (match) {
                // Store the current selection to be restored after applying the action
                this.saveSelection();
                // Select all of the contents before calling the action
                this.selectAllContents();
                result = execActionInternal.call(this, match[1], opts);
                // Restore the previous selection
                this.restoreSelection();
            } else {
                result = execActionInternal.call(this, action, opts);
            }

            // do some DOM clean-up for known browser issues after the action
            if (action === 'insertunorderedlist' || action === 'insertorderedlist') {
                MediumEditor.util.cleanListDOM(this.options.ownerDocument, this.getSelectedParentElement());
            }

            this.checkSelection();
            return result;
        },

        getSelectedParentElement: function (range) {
            if (range === undefined) {
                range = this.options.contentWindow.getSelection().getRangeAt(0);
            }
            return MediumEditor.selection.getSelectedParentElement(range);
        },

        selectAllContents: function () {
            var currNode = MediumEditor.selection.getSelectionElement(this.options.contentWindow);

            if (currNode) {
                // Move to the lowest descendant node that still selects all of the contents
                while (currNode.children.length === 1) {
                    currNode = currNode.children[0];
                }

                this.selectElement(currNode);
            }
        },

        selectElement: function (element) {
            MediumEditor.selection.selectNode(element, this.options.ownerDocument);

            var selElement = MediumEditor.selection.getSelectionElement(this.options.contentWindow);
            if (selElement) {
                this.events.focusElement(selElement);
            }
        },

        getFocusedElement: function () {
            var focused;
            this.elements.some(function (element) {
                // Find the element that has focus
                if (!focused && element.getAttribute('data-medium-focused')) {
                    focused = element;
                }

                // bail if we found the element that had focus
                return !!focused;
            }, this);

            return focused;
        },

        // Export the state of the selection in respect to one of this
        // instance of MediumEditor's elements
        exportSelection: function () {
            var selectionElement = MediumEditor.selection.getSelectionElement(this.options.contentWindow),
                editableElementIndex = this.elements.indexOf(selectionElement),
                selectionState = null;

            if (editableElementIndex >= 0) {
                selectionState = MediumEditor.selection.exportSelection(selectionElement, this.options.ownerDocument);
            }

            if (selectionState !== null && editableElementIndex !== 0) {
                selectionState.editableElementIndex = editableElementIndex;
            }

            return selectionState;
        },

        saveSelection: function () {
            this.selectionState = this.exportSelection();
        },

        // Restore a selection based on a selectionState returned by a call
        // to MediumEditor.exportSelection
        importSelection: function (selectionState, favorLaterSelectionAnchor) {
            if (!selectionState) {
                return;
            }

            var editableElement = this.elements[selectionState.editableElementIndex || 0];
            MediumEditor.selection.importSelection(selectionState, editableElement, this.options.ownerDocument, favorLaterSelectionAnchor);
        },

        restoreSelection: function () {
            this.importSelection(this.selectionState);
        },

        createLink: function (opts) {
            var currentEditor = MediumEditor.selection.getSelectionElement(this.options.contentWindow),
                customEvent = {},
                targetUrl;

            // Make sure the selection is within an element this editor is tracking
            if (this.elements.indexOf(currentEditor) === -1) {
                return;
            }

            try {
                this.events.disableCustomEvent('editableInput');
                // TODO: Deprecate support for opts.url in 6.0.0
                if (opts.url) {
                    MediumEditor.util.deprecated('.url option for createLink', '.value', '6.0.0');
                }
                targetUrl = opts.url || opts.value;
                if (targetUrl && targetUrl.trim().length > 0) {
                    var currentSelection = this.options.contentWindow.getSelection();
                    if (currentSelection) {
                        var currRange = currentSelection.getRangeAt(0),
                            commonAncestorContainer = currRange.commonAncestorContainer,
                            exportedSelection,
                            startContainerParentElement,
                            endContainerParentElement,
                            textNodes;

                        // If the selection is contained within a single text node
                        // and the selection starts at the beginning of the text node,
                        // MSIE still says the startContainer is the parent of the text node.
                        // If the selection is contained within a single text node, we
                        // want to just use the default browser 'createLink', so we need
                        // to account for this case and adjust the commonAncestorContainer accordingly
                        if (currRange.endContainer.nodeType === 3 &&
                            currRange.startContainer.nodeType !== 3 &&
                            currRange.startOffset === 0 &&
                            currRange.startContainer.firstChild === currRange.endContainer) {
                            commonAncestorContainer = currRange.endContainer;
                        }

                        startContainerParentElement = MediumEditor.util.getClosestBlockContainer(currRange.startContainer);
                        endContainerParentElement = MediumEditor.util.getClosestBlockContainer(currRange.endContainer);

                        // If the selection is not contained within a single text node
                        // but the selection is contained within the same block element
                        // we want to make sure we create a single link, and not multiple links
                        // which can happen with the built in browser functionality
                        if (commonAncestorContainer.nodeType !== 3 && commonAncestorContainer.textContent.length !== 0 && startContainerParentElement === endContainerParentElement) {
                            var parentElement = (startContainerParentElement || currentEditor),
                                fragment = this.options.ownerDocument.createDocumentFragment();

                            // since we are going to create a link from an extracted text,
                            // be sure that if we are updating a link, we won't let an empty link behind (see #754)
                            // (Workaroung for Chrome)
                            this.execAction('unlink');

                            exportedSelection = this.exportSelection();
                            fragment.appendChild(parentElement.cloneNode(true));

                            if (currentEditor === parentElement) {
                                // We have to avoid the editor itself being wiped out when it's the only block element,
                                // as our reference inside this.elements gets detached from the page when insertHTML runs.
                                // If we just use [parentElement, 0] and [parentElement, parentElement.childNodes.length]
                                // as the range boundaries, this happens whenever parentElement === currentEditor.
                                // The tradeoff to this workaround is that a orphaned tag can sometimes be left behind at
                                // the end of the editor's content.
                                // In Gecko:
                                // as an empty <strong></strong> if parentElement.lastChild is a <strong> tag.
                                // In WebKit:
                                // an invented <br /> tag at the end in the same situation
                                MediumEditor.selection.select(
                                    this.options.ownerDocument,
                                    parentElement.firstChild,
                                    0,
                                    parentElement.lastChild,
                                    parentElement.lastChild.nodeType === 3 ?
                                    parentElement.lastChild.nodeValue.length : parentElement.lastChild.childNodes.length
                                );
                            } else {
                                MediumEditor.selection.select(
                                    this.options.ownerDocument,
                                    parentElement,
                                    0,
                                    parentElement,
                                    parentElement.childNodes.length
                                );
                            }

                            var modifiedExportedSelection = this.exportSelection();

                            textNodes = MediumEditor.util.findOrCreateMatchingTextNodes(
                                this.options.ownerDocument,
                                fragment,
                                {
                                    start: exportedSelection.start - modifiedExportedSelection.start,
                                    end: exportedSelection.end - modifiedExportedSelection.start,
                                    editableElementIndex: exportedSelection.editableElementIndex
                                }
                            );
                            // If textNodes are not present, when changing link on images
                            // ex: <a><img src="http://image.test.com"></a>, change fragment to currRange.startContainer
                            // and set textNodes array to [imageElement, imageElement]
                            if (textNodes.length === 0) {
                                fragment = this.options.ownerDocument.createDocumentFragment();
                                fragment.appendChild(commonAncestorContainer.cloneNode(true));
                                textNodes = [fragment.firstChild.firstChild, fragment.firstChild.lastChild];
                            }

                            // Creates the link in the document fragment
                            MediumEditor.util.createLink(this.options.ownerDocument, textNodes, targetUrl.trim());

                            // Chrome trims the leading whitespaces when inserting HTML, which messes up restoring the selection.
                            var leadingWhitespacesCount = (fragment.firstChild.innerHTML.match(/^\s+/) || [''])[0].length;

                            // Now move the created link back into the original document in a way to preserve undo/redo history
                            MediumEditor.util.insertHTMLCommand(this.options.ownerDocument, fragment.firstChild.innerHTML.replace(/^\s+/, ''));
                            exportedSelection.start -= leadingWhitespacesCount;
                            exportedSelection.end -= leadingWhitespacesCount;

                            this.importSelection(exportedSelection);
                        } else {
                            this.options.ownerDocument.execCommand('createLink', false, targetUrl);
                        }

                        if (this.options.targetBlank || opts.target === '_blank') {
                            MediumEditor.util.setTargetBlank(MediumEditor.selection.getSelectionStart(this.options.ownerDocument), targetUrl);
                        } else {
                            MediumEditor.util.removeTargetBlank(MediumEditor.selection.getSelectionStart(this.options.ownerDocument), targetUrl);
                        }

                        if (opts.buttonClass) {
                            MediumEditor.util.addClassToAnchors(MediumEditor.selection.getSelectionStart(this.options.ownerDocument), opts.buttonClass);
                        }
                    }
                }
                // Fire input event for backwards compatibility if anyone was listening directly to the DOM input event
                if (this.options.targetBlank || opts.target === '_blank' || opts.buttonClass) {
                    customEvent = this.options.ownerDocument.createEvent('HTMLEvents');
                    customEvent.initEvent('input', true, true, this.options.contentWindow);
                    for (var i = 0, len = this.elements.length; i < len; i += 1) {
                        this.elements[i].dispatchEvent(customEvent);
                    }
                }
            } finally {
                this.events.enableCustomEvent('editableInput');
            }
            // Fire our custom editableInput event
            this.events.triggerCustomEvent('editableInput', customEvent, currentEditor);
        },

        cleanPaste: function (text) {
            this.getExtensionByName('paste').cleanPaste(text);
        },

        pasteHTML: function (html, options) {
            this.getExtensionByName('paste').pasteHTML(html, options);
        },

        setContent: function (html, index) {
            index = index || 0;

            if (this.elements[index]) {
                var target = this.elements[index];
                target.innerHTML = html;
                this.checkContentChanged(target);
            }
        },

        getContent: function (index) {
            index = index || 0;

            if (this.elements[index]) {
                return this.elements[index].innerHTML.trim();
            }
            return null;
        },

        checkContentChanged: function (editable) {
            editable = editable || MediumEditor.selection.getSelectionElement(this.options.contentWindow);
            this.events.updateInput(editable, { target: editable, currentTarget: editable });
        },

        resetContent: function (element) {
            // For all elements that exist in the this.elements array, we can assume:
            // - Its initial content has been set in the initialContent object
            // - It has a medium-editor-index attribute which is the key value in the initialContent object

            if (element) {
                var index = this.elements.indexOf(element);
                if (index !== -1) {
                    this.setContent(initialContent[element.getAttribute('medium-editor-index')], index);
                }
                return;
            }

            this.elements.forEach(function (el, idx) {
                this.setContent(initialContent[el.getAttribute('medium-editor-index')], idx);
            }, this);
        },

        addElements: function (selector) {
            // Convert elements into an array
            var elements = createElementsArray(selector, this.options.ownerDocument, true);

            // Do we have elements to add now?
            if (elements.length === 0) {
                return false;
            }

            elements.forEach(function (element) {
                // Initialize all new elements (we check that in those functions don't worry)
                element = initElement.call(this, element, this.id);

                // Add new elements to our internal elements array
                this.elements.push(element);

                // Trigger event so extensions can know when an element has been added
                this.trigger('addElement', { target: element, currentTarget: element }, element);
            }, this);
        },

        removeElements: function (selector) {
            // Convert elements into an array
            var elements = createElementsArray(selector, this.options.ownerDocument),
                toRemove = elements.map(function (el) {
                    // For textareas, make sure we're looking at the editor div and not the textarea itself
                    if (el.getAttribute('medium-editor-textarea-id') && el.parentNode) {
                        return el.parentNode.querySelector('div[medium-editor-textarea-id="' + el.getAttribute('medium-editor-textarea-id') + '"]');
                    } else {
                        return el;
                    }
                });

            this.elements = this.elements.filter(function (element) {
                // If this is an element we want to remove
                if (toRemove.indexOf(element) !== -1) {
                    this.events.cleanupElement(element);
                    if (element.getAttribute('medium-editor-textarea-id')) {
                        cleanupTextareaElement(element);
                    }
                    // Trigger event so extensions can clean-up elements that are being removed
                    this.trigger('removeElement', { target: element, currentTarget: element }, element);
                    return false;
                }
                return true;
            }, this);
        }
    };

    MediumEditor.getEditorFromElement = function (element) {
        var index = element.getAttribute('data-medium-editor-editor-index'),
            win = element && element.ownerDocument && (element.ownerDocument.defaultView || element.ownerDocument.parentWindow);
        if (win && win._mediumEditors && win._mediumEditors[index]) {
            return win._mediumEditors[index];
        }
        return null;
    };
}());

(function () {
    // summary: The default options hash used by the Editor

    MediumEditor.prototype.defaults = {
        activeButtonClass: 'medium-editor-button-active',
        buttonLabels: false,
        delay: 0,
        disableReturn: false,
        disableDoubleReturn: false,
        disableExtraSpaces: false,
        disableEditing: false,
        autoLink: false,
        elementsContainer: false,
        contentWindow: window,
        ownerDocument: document,
        targetBlank: false,
        extensions: {},
        spellcheck: true
    };
})();

MediumEditor.parseVersionString = function (release) {
    var split = release.split('-'),
        version = split[0].split('.'),
        preRelease = (split.length > 1) ? split[1] : '';
    return {
        major: parseInt(version[0], 10),
        minor: parseInt(version[1], 10),
        revision: parseInt(version[2], 10),
        preRelease: preRelease,
        toString: function () {
            return [version[0], version[1], version[2]].join('.') + (preRelease ? '-' + preRelease : '');
        }
    };
};

MediumEditor.version = MediumEditor.parseVersionString.call(this, ({
    // grunt-bump looks for this:
    'version': '5.23.3'
}).version);

    return MediumEditor;
}()));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _elem = __webpack_require__(3);

var _elem2 = _interopRequireDefault(_elem);

var _theme = __webpack_require__(2);

var _theme2 = _interopRequireDefault(_theme);

var _typo = __webpack_require__(4);

var _typo2 = _interopRequireDefault(_typo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cmz = __webpack_require__(1);

var Root = _elem2.default.section(cmz.named('AutoUI_ui_Typography-14', /*cmz|*/'\n  display: flex\n  flex-wrap: wrap\n  justify-content: center\n' /*|cmz*/));

var Item = _elem2.default.div(cmz.named('AutoUI_ui_Typography-20', _typo2.default.baseText, /*cmz|*/'\n    display: flex\n    flex-direction: column\n    justify-content: flex-end\n    min-width: 170px\n    max-width: 370px\n    min-height: 90px\n    margin: 30px 10px\n    border-radius: 2px\n    box-shadow: 1px 1px 3px rgba(0, 0, 0, .3)\n  ' /*|cmz*/));

var SampleText = _elem2.default.span(cmz.named('AutoUI_ui_Typography-35', /*cmz|*/'\n  text-align: center\n  padding: 10px\n  flex-grow: 1\n' /*|cmz*/));

var TypoName = _elem2.default.div(cmz.named('AutoUI_ui_Typography-41', '\n  background-color: ' + _theme2.default.baseHighlight + '\n  padding: 4px\n  text-align: center\n  border-top: 1px solid ' + _theme2.default.typoParagraph + '\n'));

var Typography = function (_PureComponent) {
  _inherits(Typography, _PureComponent);

  function Typography() {
    _classCallCheck(this, Typography);

    return _possibleConstructorReturn(this, (Typography.__proto__ || Object.getPrototypeOf(Typography)).apply(this, arguments));
  }

  _createClass(Typography, [{
    key: 'render',
    value: function render() {
      var typoBlocks = [];

      Object.keys(_typo2.default).filter(function (key) {
        return key !== 'divider';
      }).forEach(function (key, i) {
        typoBlocks.push(Item({ key: i }, SampleText({ className: _typo2.default[key] }, 'The quick brown fox jumps over the lazy dog'), TypoName(key)));
      });

      return Root(typoBlocks);
    }
  }]);

  return Typography;
}(_react.PureComponent);

exports.default = Typography;

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cmz = __webpack_require__(1);

var iframeStyles = cmz.named('AutoUI_ui_VideoPlayer-20', /*cmz|*/'\n  border: 0;\n' /*|cmz*/);

var videoStyles = cmz.named('AutoUI_ui_VideoPlayer-24', /*cmz|*/'\n  text-align: center;\n  margin: 0 auto 20px;\n' /*|cmz*/);

var VideoPlayer = function (_PureComponent) {
  _inherits(VideoPlayer, _PureComponent);

  function VideoPlayer() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, VideoPlayer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = VideoPlayer.__proto__ || Object.getPrototypeOf(VideoPlayer)).call.apply(_ref, [this].concat(args))), _this), _this.getEmbeddedVideoSrc = function () {
      var _this$props = _this.props,
          src = _this$props.src,
          autoPlay = _this$props.autoPlay,
          showControls = _this$props.showControls,
          loop = _this$props.loop,
          muted = _this$props.muted,
          poster = _this$props.poster,
          preload = _this$props.preload;


      return Object.entries({
        autoplay: autoPlay,
        controls: showControls,
        loop: loop,
        muted: muted,
        poster: poster,
        preload: preload
      }).reduce(function (result, _ref2) {
        var _ref3 = _slicedToArray(_ref2, 2),
            key = _ref3[0],
            val = _ref3[1];

        var value = typeof val !== 'boolean' ? val : val === true ? 1 : 0;

        return result + '&' + key + '=' + String(value);
      }, src + '?showinfo=0');
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(VideoPlayer, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          src = _props.src,
          embedded = _props.embedded,
          width = _props.width,
          height = _props.height,
          autoPlay = _props.autoPlay,
          showControls = _props.showControls,
          loop = _props.loop,
          muted = _props.muted,
          poster = _props.poster,
          preload = _props.preload;


      return embedded ? _react2.default.createElement('iframe', {
        className: iframeStyles,
        src: this.getEmbeddedVideoSrc(),
        width: width,
        height: height
      }) : _react2.default.createElement(
        'video',
        {
          className: videoStyles,
          width: width,
          height: height,
          autoPlay: autoPlay,
          controls: showControls,
          loop: loop,
          muted: muted,
          poster: poster,
          preload: preload,
          src: src
        },
        'Video cannot be played in this browser.'
      );
    }
  }]);

  return VideoPlayer;
}(_react.PureComponent);

VideoPlayer.defaultProps = {
  embedded: false,
  autoPlay: false,
  showControls: true,
  loop: false,
  muted: false,
  poster: '',
  preload: 'auto'
};
exports.default = VideoPlayer;

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _elem = __webpack_require__(3);

var _elem2 = _interopRequireDefault(_elem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cmz = __webpack_require__(1);

var Img = _elem2.default.img(cmz.named('AutoUI_ui_XIcon-11', /*cmz|*/'\n  width: 55px\n  margin: 0 0 56px 0\n' /*|cmz*/), {
  src: __webpack_require__(123),
  alt: 'X-Team Logo'
});

var XIcon = function (_PureComponent) {
  _inherits(XIcon, _PureComponent);

  function XIcon() {
    _classCallCheck(this, XIcon);

    return _possibleConstructorReturn(this, (XIcon.__proto__ || Object.getPrototypeOf(XIcon)).apply(this, arguments));
  }

  _createClass(XIcon, [{
    key: 'render',
    value: function render() {
      return Img();
    }
  }]);

  return XIcon;
}(_react.PureComponent);

exports.default = XIcon;

/***/ }),
/* 123 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH8AAACACAMAAAAVp0btAAAAPFBMVEVMaXFYU1IjISAuKyspJiYEBANeWFgDAwIYGBgqKChMSEdnYWBSTUw7NzZEQD84NDRAPDsBAQEAAAAcGhmojgR2AAAAEXRSTlMAQf/p9v41+wMFaiZUt4rHnuUwTmUAAARhSURBVGjexZvrdoIwEIRBQInYWvD937XhIkbIZWc2oue0/8J8Owlkk2yKIvEzxbXq7H/yZ4qyuvLNi7a4PgYewMrXw+lGA5hR/kIDWPmTbU4DTNFfehZglu9pgEW+JwEm8+fmFMAqzwEs0c/NT/ggdOTHJ9Rn7Alr9D3nwJs8DuBETzmwkZ8ASvkTNvIwwCjfu+0xB3byYBfsoscc8MhDDnjl5Q545QEHAvJSBwLyYgeC8jKAoLwQwDP0kC6IyIsAItFLHIjKCwCi0acdMMUtJp8ESESfciApnwAQyMcABPJRgKT5cQCR/Nj8cbVSZPRhAKF80AFh9CEAsXzAAXH0fgBA3gsARO8DgOQ9AKD8FgCU3wFA5vsAQPkdABj9Op+2Mz0svwA8f78PuL37HpmKar4CdDXR/pVRtG6uizSvnr1f0gDXGeBcEx1gB9AKcFIBGBxgmki9qwUYoCUANvO4OdiBXRqhA0Ad8GQxii54oADeJErhAAgQyOGOciCYQh4DEMlgjwCIJtA5AKqBz98/7kByAfVZBwRL6E86IFrBfw5AuIGgAzDBLrDzvWwHRwdQBBwANpA0AL8LQLXbgKrkO3g0QNOvAPV2/w7ZQOQdaLwOwBuohknp7G9oVoCucjZgK3D/VtEFza4L8O3jrA4Q0ed0gIpeA+A4MA5CLnpNF/RvXUDL53HgflYcwKkHYbv8FQc70L8ANPIZHND+JoCGAbhYAJNB365LGmoyrEql+bq5uOq+LW8K9fCn92amz05bmE71+neVJnob+k+t+fzx8udFvuG/v9a8uzb65kJPf3nkG3b+tc2zyJPpz9w8hzwF4DbXynMO/OWTZwB+HxnlUYDWyjc55TGA8TiiuQw55RGAseyozxs9Vj9wewz55aUAhjlNkcjLADLI98E3R1I/wKWbIvk0wIfl0/UD3Wfl4wAtmW8sz5TIxwAML1+K5cP1A3aldOfkT4h8yAE23QGjDznApjuEfMABasKn5L0AfxeV/L2Hmu+6QCn/04PN385fiynfGA6Lfnf+TKU7q4fm3uMjt1nP3w2X7ry6sOOO/+vbU57ZYHgNYeqzvdpPTvjuAG5Tp27BjyZ97LutvwEdeA2dHPKCc8dg9Oc6gzzogNO840pn9p9vACCDvLf+Tvgwt3mu6AGAN3qi8ClWfykAWIfes/CLqdsx9H7Vhr7FC+cS+XPy+L/c1N2AhYOp+uMogKc5WDiZXj910eP/0lN3AxSOStaPQYCAeUDhrGz9HAAI9p24cFh2gSAAEBk60sLpm3T/xAMQHbmywvGb/P5Jtz/+T9TdpAvnb8j9mw1A8uaEBYjX7WA3mDYAorqbSCaAX6DaHP+L6m4idTv4DTYHQHhzKFK3w1ygc47/a2ndjReAvUC4AAA3xwJ1O+wFyhkA2Xj2ACjub84AYN3Nrm5HcX91BLiXmrobnTxz/P8GoJVnjl+dpUwOecWp53fknRf3O/Lri/st+QXge/Lzi3uA/D8VOT3fioLq1AAAAABJRU5ErkJggg=="

/***/ })
/******/ ]);