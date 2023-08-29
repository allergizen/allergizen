"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _PortalContext = require("./base/PortalContext");

var _Surface = _interopRequireDefault(require("./Surface"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const Dialog = _ref => {
  let {
    visible = false,
    onDismiss,
    children
  } = _ref;
  const [portalVisible, setPortalVisible] = (0, _react.useState)(visible);
  const animatedValue = (0, _react.useMemo)(() => new _reactNative.Animated.Value(visible ? 1 : 0), []);
  (0, _react.useEffect)(() => {
    if (visible) setPortalVisible(true);

    _reactNative.Animated.timing(animatedValue, {
      toValue: visible ? 1 : 0,
      duration: 225,
      easing: _reactNative.Easing.out(_reactNative.Easing.cubic),
      useNativeDriver: _reactNative.Platform.OS !== 'android'
    }).start(() => {
      if (!visible) setPortalVisible(false);
    });
  }, [visible]);
  if (!portalVisible) return null;
  return /*#__PURE__*/_react.default.createElement(_PortalContext.Portal, null, /*#__PURE__*/_react.default.createElement(_reactNative.TouchableWithoutFeedback, {
    onPress: onDismiss
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Animated.View, {
    style: [_reactNative.StyleSheet.absoluteFill, styles.backdrop, {
      opacity: animatedValue
    }]
  })), /*#__PURE__*/_react.default.createElement(_reactNative.Animated.View, {
    style: [_reactNative.StyleSheet.absoluteFill, styles.container, {
      opacity: animatedValue
    }],
    pointerEvents: "box-none",
    needsOffscreenAlphaCompositing: _reactNative.Platform.OS === 'android'
  }, /*#__PURE__*/_react.default.createElement(_Surface.default, {
    category: "medium",
    elevation: 24,
    style: [styles.surface]
  }, children)));
};

const styles = _reactNative.StyleSheet.create({
  backdrop: {
    backgroundColor: 'rgba(0,0,0,.5)'
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  surface: {
    width: 280,
    marginHorizontal: 40
  }
});

var _default = Dialog;
exports.default = _default;
//# sourceMappingURL=Dialog.js.map