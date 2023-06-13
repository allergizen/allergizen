import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Globals from '../assets/Globals.js';

const Home = () => {
   return (
      <View style={{ flex: 1 }}>
         <View style={styles.welcomeView}>
            <Text style={styles.welcomeText}>Bentornato!</Text>
         </View>
         <View style={styles.productArea}></View>
      </View>
   );
};

const styles = StyleSheet.create({
   screen: { flex: 1, flexDirection: 'column' },
   welcomeView: {
      backgroundColor: '#0d4',
      flex: 3,
      justifyContent: 'center',
      paddingHorizontal: Globals.HorizontalPaddingView,
   },
   productArea: { backgroundColor: 'red', flex: 10 },

   welcomeText: { fontSize: 50 },
});

export default Home;
