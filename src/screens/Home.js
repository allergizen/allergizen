import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import React from 'react';
import Globals from '../assets/Globals.js';
import Colors from '../components/Colors';

const DATA = [
   { name: 'habeeb', img: '../assets/images/icon.png', code: '123' },
   { name: 'habeeb', img: '../assets/images/icon.png', code: '133' },
];
const renderItem = (item) => {
   return (
      <View style={{ width: 100, height: 50 }}>
         <View>
            <Text>{item.name}</Text>
         </View>
         {/* <Image source={require('../assets/images/adaptive-icon.png')} /> */}
      </View>
   );
};
const Home = () => {
   return (
      <View style={styles.screen}>
         <View style={styles.welcomeView}>
            <Text style={styles.title}>Bentornato!</Text>
         </View>
         <View style={styles.productArea}>
            <View
               style={{
                  backgroundColor: 'red',
                  flex: 2,
                  flexDirection: 'column',
                  paddingHorizontal: Globals.css.HorizontalPaddingView,
               }}>
               <Text style={styles.h1}>Ultimi Salvati</Text>
               <View style={{ flex: 2 }}>
                  <FlatList
                     horizontal={true}
                     data={DATA}
                     renderItem={renderItem}
                     keyExtractor={(item) => item.code}
                  />
               </View>
            </View>
            <View style={{ backgroundColor: 'blue', flex: 5 }}></View>
         </View>
      </View>
   );
};

const styles = StyleSheet.create({
   screen: { flex: 1, flexDirection: 'column' },
   welcomeView: {
      backgroundColor: Colors.background,
      flex: 3,
      justifyContent: 'center',
      paddingHorizontal: Globals.css.HorizontalPaddingView,
   },
   productArea: {
      backgroundColor: Colors.background,
      flex: 10,
   },
   title: { fontSize: 40 },
   h1: { fontSize: 20, flex: 1 },
});

export default Home;
