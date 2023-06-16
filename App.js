import React from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Login from './src/screens/Login';
import Signup from './src/screens/Signup';
import TabBar from './src/components/TabBar';

const Stack = createStackNavigator();

export default function App() {
  const [userToken, setUserToken] = React.useState('asd');
  // React.useEffect(() => {
  //   // Verifica se l'utente è già autenticato e imposta il token
  //   // const checkUserToken = () => {
  //   //   const token = setUserToken(token); // Recupera il token di autenticazione dall'archiviazione o da altro luogo;
  //   // };
  //   // checkUserToken();
  // }, []);
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={
            userToken ? (userToken.length > 0 ? 'Home' : 'Login') : 'Login'
          }
          headerMode='none'
        >
          <Stack.Screen name='Login' component={Login} />
          <Stack.Screen name='Signup' component={Signup} />
          <Stack.Screen name='Home'>{() => <TabBar />}</Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style='auto' />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
