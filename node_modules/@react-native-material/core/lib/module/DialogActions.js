import React from 'react';
import { StyleSheet } from 'react-native';
import { HStack } from 'react-native-flex-layout';

const DialogActions = _ref => {
  let {
    children
  } = _ref;
  return /*#__PURE__*/React.createElement(HStack, {
    justify: "end",
    spacing: 2,
    style: [styles.container]
  }, children);
};

const styles = StyleSheet.create({
  container: {
    margin: 8
  }
});
export default DialogActions;
//# sourceMappingURL=DialogActions.js.map