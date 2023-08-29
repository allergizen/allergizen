"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useWindowSizeClass = exports.defaultWindowSizes = exports.WindowSizeClassProvider = exports.WindowSizeClassContext = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const defaultWindowSizes = {
  base: 0,
  sm: 600,
  md: 905,
  lg: 1240,
  xl: 1440
};
exports.defaultWindowSizes = defaultWindowSizes;
const WindowSizeClassContext = /*#__PURE__*/(0, _react.createContext)('base');
exports.WindowSizeClassContext = WindowSizeClassContext;

const useWindowSizeClass = () => (0, _react.useContext)(WindowSizeClassContext);

exports.useWindowSizeClass = useWindowSizeClass;

const WindowSizeClassProvider = _ref => {
  let {
    windowSizes = defaultWindowSizes,
    children
  } = _ref;
  const {
    width
  } = (0, _reactNative.useWindowDimensions)();
  const windowSizeClass = (0, _react.useMemo)(() => {
    if (width >= windowSizes.base && width < windowSizes.sm) return 'base';
    if (width >= windowSizes.sm && width < windowSizes.md) return 'sm';
    if (width >= windowSizes.md && width < windowSizes.lg) return 'md';
    if (width >= windowSizes.lg && width < windowSizes.xl) return 'lg';
    return 'xl';
  }, [width, windowSizes]);
  return /*#__PURE__*/_react.default.createElement(WindowSizeClassContext.Provider, {
    value: windowSizeClass
  }, children);
};

exports.WindowSizeClassProvider = WindowSizeClassProvider;
//# sourceMappingURL=WindowSizeClassContext.js.map