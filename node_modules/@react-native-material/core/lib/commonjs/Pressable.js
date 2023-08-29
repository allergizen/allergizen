"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _chromaJs = _interopRequireDefault(require("chroma-js"));

var _usePaletteColor = require("./hooks/use-palette-color");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const Pressable = _ref => {
  let {
    pressEffect = _reactNative.Platform.select({
      android: 'android-ripple',
      web: 'ripple',
      default: 'highlight'
    }),
    pressEffectColor = 'on-background',
    onLayout,
    onPressIn,
    onPressOut,
    onFocus,
    onBlur,
    android_ripple,
    onMouseEnter,
    onMouseLeave,
    children,
    ...rest
  } = _ref;
  const {
    main: color
  } = (0, _usePaletteColor.usePaletteColor)(pressEffectColor);
  const [size, setSize] = (0, _react.useState)({
    width: 0,
    height: 0
  });
  const [ripples, setRipples] = (0, _react.useState)([]);
  const handleLayout = (0, _react.useCallback)(event => {
    const {
      width,
      height
    } = event.nativeEvent.layout;
    setSize({
      width,
      height
    });
    onLayout === null || onLayout === void 0 ? void 0 : onLayout(event);
  }, [onLayout]);
  const [pressed, setPressed] = (0, _react.useState)(false);
  const handlePressIn = (0, _react.useCallback)(event => {
    setPressed(true);
    onPressIn === null || onPressIn === void 0 ? void 0 : onPressIn(event);

    if (pressEffect === 'ripple') {
      const {
        locationX,
        locationY
      } = event.nativeEvent;
      const x = (locationX !== null && locationX !== void 0 ? locationX : size.width / 2) - 0.5;
      const y = (locationY !== null && locationY !== void 0 ? locationY : size.height / 2) - 0.5;
      const scale = new _reactNative.Animated.Value(0);
      const opacity = new _reactNative.Animated.Value(1);
      const ripple = {
        key: `${Date.now() + Math.random()}`,
        style: {
          start: x,
          top: y,
          transform: [{
            scale
          }],
          opacity
        }
      };
      setRipples(prevState => [...prevState, ripple]);

      _reactNative.Animated.timing(scale, {
        toValue: Math.max(size.width * 1.25 + Math.abs(size.width / 2 - x) * 2, size.height * 1.25 + Math.abs(size.height / 2 - y) * 2),
        easing: _reactNative.Easing.out(_reactNative.Easing.ease),
        duration: 400,
        useNativeDriver: false
      }).start();
    }
  }, [onPressIn, pressEffect, size]);
  const handlePressOut = (0, _react.useCallback)(event => {
    setPressed(false);
    onPressOut === null || onPressOut === void 0 ? void 0 : onPressOut(event);

    if (pressEffect === 'ripple') {
      _reactNative.Animated.timing(ripples[ripples.length - 1].style.opacity, {
        toValue: 0,
        easing: _reactNative.Easing.out(_reactNative.Easing.ease),
        duration: 400,
        useNativeDriver: false
      }).start(() => {
        setRipples(prevState => prevState.slice(1));
      });
    }
  }, [pressEffect, ripples, onPressOut]);
  const [focused, setFocused] = (0, _react.useState)(false);
  const handleFocus = (0, _react.useCallback)(event => {
    setFocused(true);
    onFocus === null || onFocus === void 0 ? void 0 : onFocus(event);
  }, [onFocus]);
  const handleBlur = (0, _react.useCallback)(event => {
    setFocused(false);
    onBlur === null || onBlur === void 0 ? void 0 : onBlur(event);
  }, [onBlur]);
  const [hovered, setHovered] = (0, _react.useState)(false);
  const handleMouseEnter = (0, _react.useCallback)(event => {
    setHovered(true);
    onMouseEnter === null || onMouseEnter === void 0 ? void 0 : onMouseEnter(event);
  }, [onMouseEnter]);
  const handleMouseLeave = (0, _react.useCallback)(event => {
    setHovered(false);
    onMouseLeave === null || onMouseLeave === void 0 ? void 0 : onMouseLeave(event);
  }, [onMouseLeave]);
  return /*#__PURE__*/_react.default.createElement(_reactNative.Pressable, _extends({
    android_ripple: pressEffect === 'android-ripple' ? android_ripple !== null && android_ripple !== void 0 ? android_ripple : {
      color: (0, _chromaJs.default)(color).alpha(0.26).hex()
    } : undefined,
    onLayout: handleLayout,
    onPressIn: handlePressIn,
    onPressOut: handlePressOut,
    onFocus: handleFocus,
    onBlur: handleBlur,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave
  }, rest), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [_reactNative.StyleSheet.absoluteFill, {
      backgroundColor: hovered && !rest.disabled ? (0, _chromaJs.default)(color).alpha(0.04).hex() : 'transparent'
    }, {
      transition: 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms'
    }]
  }), focused && !rest.disabled && /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [_reactNative.StyleSheet.absoluteFill, {
      backgroundColor: (0, _chromaJs.default)(color).alpha(0.12).hex()
    }]
  }), pressEffect === 'highlight' && pressed && /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [_reactNative.StyleSheet.absoluteFill, {
      backgroundColor: (0, _chromaJs.default)(color).alpha(0.26).hex()
    }]
  }), pressEffect === 'ripple' && ripples.length !== 0 && /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [_reactNative.StyleSheet.absoluteFill, styles.effectContainer]
  }, ripples.map(ripple => /*#__PURE__*/_react.default.createElement(_reactNative.Animated.View, {
    key: ripple.key,
    style: [styles.ripple, {
      backgroundColor: (0, _chromaJs.default)(color).alpha(0.1).hex()
    }, ripple.style]
  }))), children);
};

const styles = _reactNative.StyleSheet.create({
  effectContainer: {
    overflow: 'hidden'
  },
  ripple: {
    position: 'absolute',
    width: 1,
    height: 1,
    borderRadius: 0.5
  }
});

var _default = Pressable;
exports.default = _default;
//# sourceMappingURL=Pressable.js.map