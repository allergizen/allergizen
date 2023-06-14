import {
   StyleSheet,
   Text,
   SafeAreaView,
   TouchableWithoutFeedback,
   Platform,
   // StatusBar,
   View,
} from 'react-native';
import Colors from './src/components/Colors';

import Home from './src/screens/Home';
import Search from './src/screens/Search';
import Scan from './src/screens/Scan';
import Login from './src/screens/Login';
import TabBar from './src/components/TabBar';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import * as NavigationBar from 'expo-navigation-bar';
import { StatusBar } from 'expo-status-bar';

const Tab = createMaterialBottomTabNavigator();

export default function App() {
   NavigationBar.setBackgroundColorAsync("white");

   return (
      <>
         <StatusBar animated={false} style={'auto'} />
         <TabBar />
      </>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: Colors.green,
      justifyContent: 'space-between', // or 'center'
      alignItems: 'flex-start', // or 'center'
      padding: 30,
      paddingTop: Platform.OS === 'android' ? 60 : 0,
      flexDirection: 'row',
   },
   testo: {
      fontSize: 24,
   },
});
