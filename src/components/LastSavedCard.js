import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

import Colors from './Colors';

function LastSavedCard({ item }) {
   return (
      <View style={styles.lastSaveCardStyle}>
         <View style={{ flex: 5 }}>
            <Image source={{ uri: item.img }} style={styles.imageBackground} resizeMode="contain" />
         </View>
         <View style={{ flex: 1 }}>
            <Text style={{ flex: 1, alignSelf: 'center', fontSize: 16 }}>{item.name}</Text>
         </View>
      </View>
   );
}

const styles = StyleSheet.create({
   lastSaveCardStyle: {
      width: 150,
      flex: 1,
      flexDirection: 'column',
      margin: 5,
      borderRadius: 10,
      padding: 5,
      backgroundColor: '#fff',
      alignItems: 'center',
   },
   imageView: {
      borderRadius: 20,
      flex: 5,
   },
   imageBackground: {
      flex: 1,
      minWidth: 100,
      overflow: 'hidden',
      backgroundColor: '#fff',
   },
});

export default LastSavedCard;
