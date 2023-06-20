import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { Provider, Context } from './src/assets/Context';

import Login from './src/screens/Login';
import Signup from './src/screens/Signup';
import ForgotPassword from './src/screens/ForgotPassword';
import TabBar from './src/components/TabBar';

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <Provider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName={'Login'}
            screenOptions={() => ({
              headerShown: false,
              gestureEnabled: false,
            })}
          >
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='Signup' component={Signup} />
            <Stack.Screen name='TabBar'>{() => <TabBar />}</Stack.Screen>
            <Stack.Screen name='ForgotPassword' component={ForgotPassword} />
          </Stack.Navigator>
        </NavigationContainer>
        <StatusBar style='auto' />
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
