"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useWindowSize = void 0;

var _react = require("react");

var _WindowSizeClassContext = require("../base/WindowSizeClassContext");

const classes = ['base', 'sm', 'md', 'lg', 'xl'];

const useWindowSize = () => {
  const windowSizeClass = (0, _WindowSizeClassContext.useWindowSizeClass)();
  return (0, _react.useCallback)(query => {
    const keys = Object.keys(query);
    let nearest = windowSizeClass;

    while (!keys.includes(nearest)) {
      nearest = classes[classes.indexOf(nearest) - 1];
    }

    return query[nearest];
  }, [windowSizeClass]);
};

exports.useWindowSize = useWindowSize;
//# sourceMappingURL=use-window-size.js.map