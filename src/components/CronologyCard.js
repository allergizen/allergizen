import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import { React, useState } from 'react';
import { IconButton } from '@react-native-material/core';
import Colors from './Colors';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import api from '../api/api';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const CronologyCard = ({ item }) => {
   if (item.code === 'History')
      return (
         <View style={{ alignItems: 'center', marginTop: 10, marginBottom: 5 }}>
            <Text style={{ fontSize: 22, fontWeight: '600' }}>{item.code}</Text>
         </View>
      );
   else if (item.code === '3mpty') {
      return <View style={{ minHeight: 100 }}></View>;
   } else {
      // if (item.img) fetch(item.img).then((res) => res.blob().then());
      const numAll = api.get_allergens(item.allergens).length;
      return (
         <View style={[styles.cronologyCardStyle]}>
            <View
               style={{
                  borderTopLeftRadius: 25,
                  borderBottomLeftRadius: 25,
                  overflow: 'hidden',
                  maxHeight: 125,
                  flex: 1,
               }}>
               <ImageBackground source={ item.img? {uri: item.img} : require('../assets/images/not_found.png') } style={styles.imageBackground} />
            </View>

            <View style={{ flex: 2, padding: 5, marginLeft: 15 }}>
               <View
                  style={{
                     flex: 1,
                     justifyContent: 'center',
                     textAlignVertical: 'center',
                  }}>
                  <Text style={{ fontSize: 18, lineHeight: 30 }}>
                     {item.product_name.length > 16
                        ? item.product_name.slice(0, 16) + '...'
                        : item.product_name}
                  </Text>
                  <Text style={{ fontSize: 12, lineHeight: 20 }}>{item.brand}</Text>
                  <View
                     style={{
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        marginTop: 5,
                     }}>
                     {numAll > 0 ? (
                        <MaterialCommunityIcons name='close-circle' color={'#000'} size={26} />
                     ) : (
                        <MaterialCommunityIcons name='check-circle' color={'#000'} size={26} />
                     )}
                     <Text
                        style={[
                           api.get_allergens(item.allergens).length &&
                           api.get_allergens(item.traces).length
                              ? styles.allergy
                              : api.get_allergens(item.allergens).length
                              ? styles.allergy
                              : api.get_allergens(item.traces).length
                              ? styles.undefinedAllergy
                              : styles.noAllergy,
                           {
                              fontSize: 14,
                              fontWeight: '500',
                              marginLeft: 5,
                              minHeight: 30,
                              padding: 5,
                              borderRadius: 8,
                           },
                        ]}>
                        {api.get_allergens(item.allergens).length &&
                        api.get_allergens(item.traces).length
                           ? 'Rilevati allergeni e tracce'
                           : api.get_allergens(item.allergens).length
                           ? 'Rilevati allergeni'
                           : api.get_allergens(item.traces).length
                           ? 'Rilevate tracce'
                           : 'Allergeni non presenti'}
                     </Text>
                  </View>
               </View>
            </View>
         </View>
      );
   }
};

const styles = StyleSheet.create({
   allergy: {
      backgroundColor: Colors.lightRed,
      color: Colors.textLightRed,
      // backgroundColor: '#fff',
   },

   noAllergy: {
      // backgroundColor: '#fff',
      backgroundColor: Colors.lightGreen,
      color: Colors.textLightGreen,
   },

   undefinedAllergy: {
      // backgroundColor: '#fff',
      backgroundColor: Colors.lightYellow,
      color: Colors.textLightYellow,
   },
   cronologyCardStyle: {
      height: 125,
      flex: 1,
      flexDirection: 'row',
      margin: 5,
      borderRadius: 25,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'space-around',
      alignSelf: 'center',
      //ombre
      shadowColor: '#000',
      shadowOffset: {
         width: 0,
         height: 5,
      },
   },
   imageView: {
      borderRadius: 8,
      flex: 2,
   },
   imageBackground: {
      height: '100%',
      resizeMode: 'cover',
   },
});

export default CronologyCard;
