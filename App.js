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

export default function App() {
   return (
      <View style={{ flex: 1 }}>
         {/* <StatusBar animated={true} backgroundColor={colors.RED} /> */}
         <Home />
      </View>
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
