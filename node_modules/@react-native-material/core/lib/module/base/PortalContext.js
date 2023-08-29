import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { StyleSheet, View } from 'react-native';
export const PortalContext = /*#__PURE__*/createContext(null);
export const usePortalContext = () => {
  const portal = useContext(PortalContext);

  if (!portal) {
    throw new Error('usePortalContext must be used within a PortalContext');
  }

  return portal;
};
export const PortalProvider = _ref => {
  let {
    children
  } = _ref;
  const [portals, setPortals] = useState([]);
  return /*#__PURE__*/React.createElement(PortalContext.Provider, {
    value: {
      portals,
      setPortals
    }
  }, children);
};
export const Outlet = () => {
  const {
    portals
  } = usePortalContext();
  return /*#__PURE__*/React.createElement(React.Fragment, null, portals.map(_ref2 => {
    let {
      key,
      children
    } = _ref2;
    return /*#__PURE__*/React.createElement(View, {
      key: key,
      pointerEvents: "box-none",
      style: StyleSheet.absoluteFill
    }, children);
  }));
};
export const Portal = _ref3 => {
  let {
    key,
    children
  } = _ref3;
  const {
    setPortals
  } = usePortalContext();

  const _key = useMemo(() => key !== null && key !== void 0 ? key : `${Date.now() + Math.random()}`, [key]);

  useEffect(() => {
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
//# sourceMappingURL=PortalContext.js.map