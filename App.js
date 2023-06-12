import Icon from 'react-native-vector-icons/Ionicons';
import { StyleSheet, Text, SafeAreaView, TouchableWithoutFeedback, Platform } from 'react-native';
import colors from './colors';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>

      <Text style={styles.testo} >Bentornato!</Text>
      <TouchableWithoutFeedback onPress={() => console.log('Ciao!')}> 
      <Icon name="person-circle" size={48} style={styles.account}/>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.RED,
    justifyContent: 'space-between', // or 'center'
    alignItems: 'flex-start', // or 'center'
    padding: 30,
    paddingTop: Platform.OS === 'android' ? 40 : 0,
    flexDirection: 'row',
  },
  testo:{
    fontSize: 24,
  },
  // account:{
  //   justifyContent: 'flex-end',
  //   alignItems: 'flex-end',
  // },
});
