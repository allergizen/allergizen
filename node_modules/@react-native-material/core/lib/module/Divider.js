import React from 'react';
import { View } from 'react-native';
import chroma from 'chroma-js';
import { useTheme } from './base/ThemeContext';

const Divider = _ref => {
  let {
    color,
    inset,
    leadingInset,
    trailingInset,
    style
  } = _ref;
  const {
    palette
  } = useTheme();
  return /*#__PURE__*/React.createElement(View, {
    style: [{
      height: 1,
      backgroundColor: color !== null && color !== void 0 ? color : chroma(palette.surface.on).alpha(0.08).hex(),
      marginStart: inset !== null && inset !== void 0 ? inset : leadingInset,
      marginEnd: inset !== null && inset !== void 0 ? inset : trailingInset
    }, style]
  });
};

export default Divider;
//# sourceMappingURL=Divider.js.map