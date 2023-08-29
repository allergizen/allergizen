import React from 'react';
import { SpacingFuncProvider } from 'react-native-flex-layout';
import { ThemeProvider } from './ThemeContext';
import { WindowSizeClassProvider } from './WindowSizeClassContext';
import { IconComponentProvider } from './IconComponentContext';
import { Outlet, PortalProvider } from './PortalContext';
export const Provider = _ref => {
  let {
    theme,
    windowSizes,
    spacingFunc,
    IconComponent,
    children
  } = _ref;
  return /*#__PURE__*/React.createElement(ThemeProvider, {
    theme: theme
  }, /*#__PURE__*/React.createElement(WindowSizeClassProvider, {
    windowSizes: windowSizes
  }, /*#__PURE__*/React.createElement(SpacingFuncProvider, {
    spacingFunc: spacingFunc
  }, /*#__PURE__*/React.createElement(IconComponentProvider, {
    IconComponent: IconComponent
  }, /*#__PURE__*/React.createElement(PortalProvider, null, children, /*#__PURE__*/React.createElement(Outlet, null))))));
};
//# sourceMappingURL=Provider.js.map