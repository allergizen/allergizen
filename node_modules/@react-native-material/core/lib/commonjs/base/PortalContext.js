"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.usePortalContext = exports.PortalProvider = exports.PortalContext = exports.Portal = exports.Outlet = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const PortalContext = /*#__PURE__*/(0, _react.createContext)(null);
exports.PortalContext = PortalContext;

const usePortalContext = () => {
  const portal = (0, _react.useContext)(PortalContext);

  if (!portal) {
    throw new Error('usePortalContext must be used within a PortalContext');
  }

  return portal;
};

exports.usePortalContext = usePortalContext;

const PortalProvider = _ref => {
  let {
    children
  } = _ref;
  const [portals, setPortals] = (0, _react.useState)([]);
  return /*#__PURE__*/_react.default.createElement(PortalContext.Provider, {
    value: {
      portals,
      setPortals
    }
  }, children);
};

exports.PortalProvider = PortalProvider;

const Outlet = () => {
  const {
    portals
  } = usePortalContext();
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, portals.map(_ref2 => {
    let {
      key,
      children
    } = _ref2;
    return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
      key: key,
      pointerEvents: "box-none",
      style: _reactNative.StyleSheet.absoluteFill
    }, children);
  }));
};

exports.Outlet = Outlet;

const Portal = _ref3 => {
  let {
    key,
    children
  } = _ref3;
  const {
    setPortals
  } = usePortalContext();

  const _key = (0, _react.useMemo)(() => key !== null && key !== void 0 ? key : `${Date.now() + Math.random()}`, [key]);

  (0, _react.useEffect)(() => {
    setPortals(portals => [...portals, {
      key: _key,
      children
    }]);
    return () => {
      setPortals(portals => portals.filter(p => p.key !== _key));
    };
  }, [_key, setPortals, children]);
  return null;
};

exports.Portal = Portal;
//# sourceMappingURL=PortalContext.js.map