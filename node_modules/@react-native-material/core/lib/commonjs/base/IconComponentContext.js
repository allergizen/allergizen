"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useIconComponent = exports.IconComponentProvider = exports.IconComponentContext = exports.Icon = void 0;

var _react = _interopRequireWildcard(require("react"));

var _usePaletteColor = require("../hooks/use-palette-color");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const IconComponentContext = /*#__PURE__*/(0, _react.createContext)(null);
exports.IconComponentContext = IconComponentContext;

const useIconComponent = () => (0, _react.useContext)(IconComponentContext);

exports.useIconComponent = useIconComponent;

const IconComponentProvider = _ref => {
  let {
    IconComponent,
    children
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(IconComponentContext.Provider, {
    value: IconComponent !== null && IconComponent !== void 0 ? IconComponent : null
  }, children);
};

exports.IconComponentProvider = IconComponentProvider;

const Icon = _ref2 => {
  let {
    color = 'on-background',
    ...rest
  } = _ref2;
  const IconComponent = useIconComponent();

  if (!IconComponent) {
    throw new Error('`IconComponent` is undefined. Seems like you forgot to wrap your component with `Provider`.');
  }

  const {
    main
  } = (0, _usePaletteColor.usePaletteColor)(color);
  return /*#__PURE__*/_react.default.createElement(IconComponent, _extends({}, rest, {
    color: main
  }));
};

exports.Icon = Icon;
//# sourceMappingURL=IconComponentContext.js.map