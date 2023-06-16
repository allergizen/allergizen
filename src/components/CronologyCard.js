import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

import Colors from './Colors';

function CronologyCard({ item }) {
   const [image, setImage] = React.useState('');
   return (
      <View style={styles.cronologyCardStyle}>
         <View style={{ flex: 1, padding: 15 }}>
            <Image source={{ uri: item.img }} style={styles.imageBackground} resizeMode='contain' />
         </View>
         <View style={{ flex: 1, alignSelf: 'center' }}>
            <Text style={{ flex: 5, alignSelf: 'center', fontSize: 16 }}>{item.name}</Text>
         </View>
      </View>
   );
}

const styles = StyleSheet.create({
   cronologyCardStyle: {
      width: '90%',
      height: 200,
      flex: 1,
      flexDirection: 'row',
      margin: 5,
      borderRadius: 25,
      padding: 5,
      backgroundColor: '#fff',
      alignItems: 'space-between',
      justifyContent: 'center',
      alignSelf: 'center',
   },
   imageView: {
      borderRadius: 8,
      flex: 2,
   },
   imageBackground: {
      flex: 1,
      minWidth: 100,
      overflow: 'hidden',
   },
});

export default CronologyCard;
