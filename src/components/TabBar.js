import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, Button } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Colors from './Colors';
import Home from '../screens/Home';
import Login from '../screens/Login';
import Scan from '../screens/Scan';
import Search from '../screens/Search';
import Favorites from '../screens/Favorites';

import { MaterialCommunityIcons } from '@expo/vector-icons';

const TabBar = () => {
   const Tab = createMaterialBottomTabNavigator();

   return (
      <NavigationContainer>
         <View style={{ flex: 1 }}>
            <Tab.Navigator
               initialRouteName="Home"
               activeColor={Colors.green}
               inactiveColor="#000"
               barStyle={{ backgroundColor: Colors.light }}>
               <Tab.Screen name="Home" component={Home} options={tabOptions.home} />
               <Tab.Screen name="Search" component={Search} options={tabOptions.search} />
               <Tab.Screen name="Scan" component={Scan} options={tabOptions.scan} />
               <Tab.Screen name="Favorites" component={Favorites} options={tabOptions.favorites} />
               <Tab.Screen name="Login" component={Login} options={tabOptions.loginPage} />
            </Tab.Navigator>
         </View>
      </NavigationContainer>
   );
};

const tabOptions = {
   home: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ color }) => <MaterialCommunityIcons name="home" color={color} size={26} />,
      tabBarBadge: 3,
   },
   search: {
      tabBarLabel: 'Search',
      tabBarIcon: ({ color }) => <MaterialCommunityIcons name="magnify" color={color} size={26} />,
   },
   scan: {
      tabBarLabel: 'Scan',
      tabBarIcon: ({ color }) => (
         <MaterialCommunityIcons name="plus-circle-outline" color={color} size={26} />
      ),
   },
   favorites: {
      tabBarLabel: 'Favorites',
      tabBarIcon: ({ color }) => (
         <MaterialCommunityIcons name="cards-heart-outline" color={color} size={26} />
      ),
   },
   loginPage: {
      tabBarLabel: 'Login',
      tabBarIcon: ({ color }) => <MaterialCommunityIcons name="account" color={color} size={26} />,
   },
};

const styles = StyleSheet.create({
   tabBarNavigator: {
      backgroundColor: 'white',
      position: 'absolute',
      bottom: 40,
      marginHorizontal: 15,
      height: 50,
      borderRadius: 20,
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowOffset: {
         width: 15,
         height: 15,
      },
   },
});

export default TabBar;
