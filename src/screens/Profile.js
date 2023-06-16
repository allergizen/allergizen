import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  Button,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';

const Profile = () => {
  return (
    <View>
      <Text>Favorite</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: 'column',
  },
  profile: {
    justifyContent: 'flex-end',
    paddingHorizontal: Globals.css.HorizontalPaddingView,
    flex: 1,
  },

  info: {
    justifyContent: 'flex-end',
    paddingHorizontal: Globals.css.HorizontalPaddingView / 2,
    flex: 2,
  },
  infoView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    maxHeight: 100,
  },
  productArea: {
    flex: 10,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    paddingHorizontal: Globals.css.HorizontalPaddingView,
  },
  h1: { fontSize: 20, fontWeight: '600' },
  text: {},
  buttonStyle: {
    borderRadius: 7,
    backgroundColor: Colors.idk,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'flex-end',
    marginTop: 5,
    maxWidth: 120,
    minHeight: 22,
    opacity: 0.75,
  },
  profileIcon: {
    width: 80,
    height: 80,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#d3d3d3',
  },
  screenLink: { flex: 8, paddingTop: 30, paddingHorizontal: 10 },
  screenCard: {
    height: 60,
    backgroundColor: Colors.profileScreenCard,
    borderRadius: 8,
  },
  logoutStyle: {
    borderRadius: 10,
    backgroundColor: Colors.profileScreenCard,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoutTextStyle: { fontSize: 18, color: Colors.red },
});

export default Profile;
