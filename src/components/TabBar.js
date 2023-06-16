import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Image,
} from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Colors from './Colors';
import Home from '../screens/Home';
import Search from '../screens/Search';
import Scan from '../screens/Scan';
import Favorites from '../screens/Favorites';
import Login from '../screens/Login';
import TabBarScreen from './TabBarScreen';
const TabBar = () => {
  const Tab = createMaterialBottomTabNavigator();

  return (
    <View style={{ flex: 1, overflow: 'visible' }}>
      <Tab.Navigator
        initialRouteName='Home'
        activeColor={Colors.green}
        inactiveColor={Colors.inactive}
        barStyle={styles.tabBar}
        tabBarOptions={{ showLabel: false }}
      >
        <Tab.Screen
          name='Home'
          component={Home}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name='home' color={color} size={26} />
            ),
          }}
        />

        <Tab.Screen
          name='Search'
          component={Search}
          options={{
            tabBarLabel: 'Search',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name='magnify' color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name='Scan'
          component={Scan}
          options={({ color }) => ({
            tabBarIcon: ({ focused }) => (
              <View style={styles.scanButtonContainer}>
                <Image
                  style={{ width: 25, height: 25 }}
                  source={require('../assets/images/plus.png')}
                />
              </View>
            ),
            tabBarLabel: null,
          })}
        />

        <Tab.Screen
          name='Favorites'
          component={Favorites}
          options={{
            tabBarLabel: 'Favorites',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name='cards-heart-outline'
                color={color}
                size={26}
              />
            ),
          }}
        />
        <Tab.Screen
          name='Account'
          component={Login}
          options={{
            tabBarLabel: 'Account',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name='account' color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 20,
    marginHorizontal: 15,
    height: 60,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOpacity: 0.01,
    shadowOffset: {
      width: 10,
      height: 10,
    },
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  scanButtonContainer: {
    width: 55,
    height: 55,
    backgroundColor: Colors.green,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: -15,
  },
});

export default TabBar;
