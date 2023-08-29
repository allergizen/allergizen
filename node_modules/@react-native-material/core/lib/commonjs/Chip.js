"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _chromaJs = _interopRequireDefault(require("chroma-js"));

var _Pressable = _interopRequireDefault(require("./Pressable"));

var _Text = _interopRequireDefault(require("./Text"));

var _usePaletteColor = require("./hooks/use-palette-color");

var _ThemeContext = require("./base/ThemeContext");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const Chip = _ref => {
  let {
    label,
    leading,
    trailing,
    variant = 'filled',
    color = 'on-surface',
    style,
    contentContainerStyle,
    labelStyle,
    leadingContainerStyle,
    trailingContainerStyle,
    children,
    pressEffect,
    pressEffectColor,
    onPress,
    onPressIn,
    onPressOut,
    onLongPress,
    onBlur,
    onFocus,
    onMouseEnter,
    onMouseLeave,
    delayLongPress,
    disabled,
    hitSlop,
    pressRetentionOffset,
    android_disableSound,
    android_ripple,
    testOnly_pressed,
    ...rest
  } = _ref;
  const theme = (0, _ThemeContext.useTheme)();
  const palette = (0, _usePaletteColor.usePaletteColor)(color, theme.palette.surface.main);
  const scale = (0, _react.useMemo)(() => _chromaJs.default.scale([palette.on, palette.main]), [palette]);
  const labelElement = typeof label === 'string' ? /*#__PURE__*/_react.default.createElement(_Text.default, {
    variant: "body2",
    style: [{
      color: scale(0.87).hex()
    }, labelStyle]
  }, label) : typeof label === 'function' ? label({
    color: scale(0.87).hex()
  }) : label;
  const leadingElement = typeof leading === 'function' ? leading({
    color: scale(0.66).hex(),
    size: 24
  }) : leading;
  const trailingElement = typeof trailing === 'function' ? trailing({
    color: scale(0.66).hex(),
    size: 18
  }) : trailing;
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, _extends({
    style: [styles.container, variant === 'filled' && {
      backgroundColor: scale(0.08).hex()
    }, style]
  }, rest), /*#__PURE__*/_react.default.createElement(_Pressable.default, {
    pressEffect: pressEffect,
    pressEffectColor: pressEffectColor !== null && pressEffectColor !== void 0 ? pressEffectColor : scale(0.87).hex(),
    onPress: onPress,
    onPressIn: onPressIn,
    onPressOut: onPressOut,
    onLongPress: onLongPress,
    onBlur: onBlur,
    onFocus: onFocus,
    onMouseEnter: onMouseEnter,
    onMouseLeave: onMouseLeave,
    delayLongPress: delayLongPress,
    disabled: disabled,
    hitSlop: hitSlop,
    pressRetentionOffset: pressRetentionOffset,
    android_disableSound: android_disableSound,
    android_ripple: android_ripple,
    testOnly_pressed: testOnly_pressed,
    style: [styles.contentContainer, contentContainerStyle]
  }, leadingElement && /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [styles.leadingContainer, leadingContainerStyle]
  }, leadingElement), labelElement, children, trailingElement && /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [styles.trailingContainer, trailingContainerStyle]
  }, trailingElement), variant === 'outlined' && /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [_reactNative.StyleSheet.absoluteFill, styles.outline, {
      borderColor: scale(0.26).hex()
    }]
  })));
};

const styles = _reactNative.StyleSheet.create({
  container: {
    borderRadius: 16,
    overflow: 'hidden'
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    height: 32
  },
  leadingContainer: {
    marginStart: -8,
    marginEnd: 8
  },
  trailingContainer: {
    marginStart: 8,
    marginEnd: -4
  },
  outline: {
    borderWidth: 1,
    borderRadius: 16
  }
});

var _default = Chip;
exports.default = _default;
//# sourceMappingURL=Chip.js.map