import Icon from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
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
const Stack = createStackNavigator();

function MyStack() {
   return (
      <Stack.Navigator>
         <Stack.Screen name="Home" component={Home} />
         <Stack.Screen name="Search" component={Search} />
      </Stack.Navigator>
   );
}

export default function App() {
   return (
      <>
         <StatusBar animated={true} backgroundColor={colors.RED} />
         <NavigationContainer>
            <MyStack />
         </NavigationContainer>
      </>
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
   // account:{
   //   justifyContent: 'flex-end',
   //   alignItems: 'flex-end',
   // },
});
