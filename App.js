import {
   StyleSheet,
   Text,
   SafeAreaView,
   TouchableWithoutFeedback,
   Platform,
   StatusBar,
   View,
} from 'react-native';
import colors from './src/components/colors';

import Home from './src/screen/Home';
import Search from './src/screen/Search';
import Scan from './src/screen/Scan';
import Login from './src/screen/Login';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createMaterialBottomTabNavigator();

export default function App() {
   return (
      <NavigationContainer>
         <View style={{ flex: 1 }}>
            <StatusBar animated={true} backgroundColor={colors.RED} />

            <Tab.Navigator
               initialRouteName="Home"
               activeColor="#f0edf6"
               inactiveColor="#3e2465"
               barStyle={{ backgroundColor: '#694fad' }}>
               <Tab.Screen name="Home" component={Home} options={tabOptions.home} />
               <Tab.Screen name="Scan" component={Scan} options={tabOptions.scan} />
               <Tab.Screen name="Search" component={Search} options={tabOptions.search} />
               <Tab.Screen name="Login" component={Login} options={tabOptions.loginPage} />
            </Tab.Navigator>
         </View>
      </NavigationContainer>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: colors.green,
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
         <MaterialCommunityIcons name="barcode-scan" color={color} size={26} />
      ),
   },
   loginPage: {
      tabBarLabel: 'Login',
      tabBarIcon: ({ color }) => <MaterialCommunityIcons name="account" color={color} size={26} />,
   },
};
