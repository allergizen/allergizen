function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { createContext, useContext } from 'react';
import { usePaletteColor } from '../hooks/use-palette-color';
export const IconComponentContext = /*#__PURE__*/createContext(null);
export const useIconComponent = () => useContext(IconComponentContext);
export const IconComponentProvider = _ref => {
  let {
    IconComponent,
    children
  } = _ref;
  return /*#__PURE__*/React.createElement(IconComponentContext.Provider, {
    value: IconComponent !== null && IconComponent !== void 0 ? IconComponent : null
  }, children);
};
export const Icon = _ref2 => {
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
  } = usePaletteColor(color);
  return /*#__PURE__*/React.createElement(IconComponent, _extends({}, rest, {
    color: main
  }));
};
//# sourceMappingURL=IconComponentContext.js.map