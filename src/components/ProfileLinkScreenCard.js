import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import React from 'react';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ProfileLinkScreenCard = (args) => {
  return (
    <TouchableOpacity style={styles.screenCard}>
      <>
        <MaterialCommunityIcons
          name={args.iconName}
          color={'#333'}
          size={24}
          style={{ marginRight: 10 }}
        />
        <Text>{args.nameScreen}</Text>
      </>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  screenCard: {
    height: 60,
    backgroundColor: '#e2e2e2',
    borderRadius: 8,
    marginVertical: 5,
    padding: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});

export default ProfileLinkScreenCard;
