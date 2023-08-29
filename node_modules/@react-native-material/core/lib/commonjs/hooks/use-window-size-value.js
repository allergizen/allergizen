"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useWindowSizeValue = void 0;

var _react = require("react");

var _useWindowSize = require("./use-window-size");

const useWindowSizeValue = query => {
  const windowSize = (0, _useWindowSize.useWindowSize)();
  return (0, _react.useMemo)(() => windowSize(query), [windowSize, query]);
};

exports.useWindowSizeValue = useWindowSizeValue;
//# sourceMappingURL=use-window-size-value.js.map