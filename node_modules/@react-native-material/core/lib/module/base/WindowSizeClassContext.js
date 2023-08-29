import React, { createContext, useContext, useMemo } from 'react';
import { useWindowDimensions } from 'react-native';
export const defaultWindowSizes = {
  base: 0,
  sm: 600,
  md: 905,
  lg: 1240,
  xl: 1440
};
export const WindowSizeClassContext = /*#__PURE__*/createContext('base');
export const useWindowSizeClass = () => useContext(WindowSizeClassContext);
export const WindowSizeClassProvider = _ref => {
  let {
    windowSizes = defaultWindowSizes,
    children
  } = _ref;
  const {
    width
  } = useWindowDimensions();
  const windowSizeClass = useMemo(() => {
    if (width >= windowSizes.base && width < windowSizes.sm) return 'base';
    if (width >= windowSizes.sm && width < windowSizes.md) return 'sm';
    if (width >= windowSizes.md && width < windowSizes.lg) return 'md';
    if (width >= windowSizes.lg && width < windowSizes.xl) return 'lg';
    return 'xl';
  }, [width, windowSizes]);
  return /*#__PURE__*/React.createElement(WindowSizeClassContext.Provider, {
    value: windowSizeClass
  }, children);
};
//# sourceMappingURL=WindowSizeClassContext.js.map