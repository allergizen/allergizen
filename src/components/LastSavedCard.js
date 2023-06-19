import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

import Colors from './Colors';

function LastSavedCard({ item }) {
   return (
      <View style={styles.lastSaveCardStyle}
backgroundColor={item.color}
      >
         <Text style={styles.title}>{item.name}</Text>
      </View>
   );
}

const styles = StyleSheet.create({
   lastSaveCardStyle: {
      width: 200,
      height: 70,
      margin: 5,
      borderRadius: 20,
      justifyContent: 'center', //Centered vertically
      alignItems: 'center', //Centered horizontally
      flex: 1,
      shadowColor: '#000',
      shadowRadius: 5,
      shadowOpacity: 0.1,
      shadowOffset: {
         width: 0,
         height: 2,
      }

   },
   title: {
      fontSize: 20,
      color: '#000000',
   }

});

export default LastSavedCard;
