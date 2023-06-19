import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import { React, useState } from 'react';
import { IconButton } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

import Colors from './Colors';
const CronologyCard = ({ item }) => {
   fetch(item.img).then((res) => res.blob().then());
   return (
      <View style={styles.cronologyCardStyle}>
         <View
            style={{
               padding: 0,
               borderRadius: 10,
               borderWidth: 0,
               borderColor: '#fff',
               overflow: 'hidden',
               maxHeight: 150,
            }}>
            <ImageBackground source={{ uri: item.img }} style={styles.imageBackground} />
         </View>

         <View style={{ flex: 2, alignSelf: 'center', alignContent: 'center', padding: 5}}>
            <Text style={{ alignSelf: 'center', fontSize: 25 }}>{item.name}</Text>
            <Text style={{ alignSelf: 'center', fontSize: 17 }}>Kellog's</Text>
            <View style={{ flexDirection: 'row' }}>
               <View style={{ flex: 3 }}>
                  <Text style={{fontSize: 20}}>Allergeni rilevati</Text>
               </View>
               <View style={{ flex: 1 }}>
                  < IconButton
                     icon={props => <Icon name="plus" {...props} />}
                     color="green" onPress={() => {
                        
                     }}
                  />               
               </View>
            </View>
         </View>
      </View>
   );
};

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
      alignItems: 'space-around',
      justifyContent: 'space-around',
      alignSelf: 'center',
   },
   imageView: {
      borderRadius: 8,
      flex: 2,
   },
   imageBackground: {
      // height: '90%',
      borderRadius: 5,
      flex: 1,
      // width: 50,
      width: '100%',
      // height: '100%',
      aspectRatio: 0.7,
      resizeMode: 'cover',
      margin: -1,
   },
});

export default CronologyCard;
