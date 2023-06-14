import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import React from 'react';
import Globals from '../assets/Globals.js';
import Colors from '../components/Colors';

const DATA = [
   { name: 'habeeb', img: '../assets/images/icon.png', code: '001' },
   { name: 'nero', img: '../assets/images/icon.png', code: '002' },
   { name: 'nero', img: '../assets/images/icon.png', code: '003' },
   { name: 'nero', img: '../assets/images/icon.png', code: '004' },
];
const renderItem = ({ item }) => {
   return (
      <View style={styles.lastSaveCardStyle}>
         <View>
            <Text style={{ color: 'red' }}>{item.name}</Text>
            <Image
               source={require('../assets/images/adaptive-icon.png')}
               style={{ height: 50, width: 50 }}
            />
         </View>
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
   lastSaveCardStyle: {
      width: 150,
      flex: 1,
      flexDirection: 'column',
      margin: 5,
      borderRadius: 10,
      padding: 5,
      backgroundColor: 'yellow',
   },
});

export default Home;
