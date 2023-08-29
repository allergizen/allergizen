"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useStyles = void 0;

var _react = require("react");

var _reactNativeFlexLayout = require("react-native-flex-layout");

var _ThemeContext = require("../base/ThemeContext");

var _WindowSizeClassContext = require("../base/WindowSizeClassContext");

var _useWindowSize = require("./use-window-size");

var _useSurfaceScale = require("./use-surface-scale");

var _useSurfaceColor = require("./use-surface-color");

const useStyles = (factory, deps) => {
  const theme = (0, _ThemeContext.useTheme)();
  const surfaceScale = (0, _useSurfaceScale.useSurfaceScale)();
  const surfaceColor = (0, _useSurfaceColor.useSurfaceColor)();
  const windowSizeClass = (0, _WindowSizeClassContext.useWindowSizeClass)();
  const windowSize = (0, _useWindowSize.useWindowSize)();
  const spacing = (0, _reactNativeFlexLayout.useSpacingFunc)();
  return (0, _react.useMemo)(() => factory({ ...theme,
    surfaceScale,
    surfaceColor,
    windowSizeClass,
    windowSize,
    spacing
  }), [factory, theme, surfaceScale, surfaceColor, windowSizeClass, windowSize, spacing, deps]);
};

exports.useStyles = useStyles;
//# sourceMappingURL=use-styles.js.map