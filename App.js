import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { ScanProvider, ScanContext } from './src/assets/Context';

import Login from './src/screens/Login';
import Signup from './src/screens/Signup';
import ForgotPassword from './src/screens/ForgotPassword';
import TabBar from './src/components/TabBar';

const Stack = createStackNavigator();

export default function App() {
   const [userToken, setUserToken] = React.useState('asduiahduiw');

   // React.useEffect(() => {
   //   // Verifica se l'utente è già autenticato e imposta il token
   //   // const checkUserToken = () => {
   //   //   const token = setUserToken(token); // Recupera il token di autenticazione dall'archiviazione o da altro luogo;
   //   // };
   //   // checkUserToken();
   // }, []);

   return (
      <>
         <ScanProvider>
            <NavigationContainer>
               <Stack.Navigator
                  initialRouteName={
                     userToken ? (userToken.length > 0 ? 'TabBar' : 'Login') : 'Login'
                  }
                  screenOptions={() => ({
                     headerShown: false,
                  })}>
                  <Stack.Screen name='Login' component={Login} />
                  <Stack.Screen name='Signup' component={Signup} />
                  <Stack.Screen name='TabBar'>{() => <TabBar />}</Stack.Screen>
                  <Stack.Screen name='ForgotPassword' component={ForgotPassword} />
               </Stack.Navigator>
            </NavigationContainer>
            <StatusBar style='auto' />
         </ScanProvider>
      </>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#fff',
   },
});
