import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import { React, useState } from 'react';
import { IconButton } from '@react-native-material/core';
import api from '../api/api';
import Colors from './Colors';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';

allergy = 3;

const CronologyCard = ({ item }) => {
  fetch(item.img).then((res) => res.blob().then());
  //   console.log(item.product_name);
  return (
    <View
      style={[
        styles.cronologyCardStyle,
        item.allergy == 0
          ? styles.noAllergy
          : item.allergy == 1
          ? styles.allergy
          : styles.undefinedAllergy,
      ]}
    >
      <View
        style={{
          //  padding: 0,
          borderTopLeftRadius: 25,
          borderBottomLeftRadius: 25,
          overflow: 'hidden',
          maxHeight: 125,
          flex: 1,
        }}
      >
        <ImageBackground
          source={{ uri: item.img }}
          style={styles.imageBackground}
        />
      </View>

      <View
        style={{
          flex: 2,
          alignSelf: 'center',
          alignContent: 'center',
          padding: 5,
        }}
      >
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: 5,
          }}
        >
          <Text style={{ fontSize: 25 }}>{item.product_name}</Text>
          <Text style={{ fontSize: 15 }}>{item.brand}</Text>
          <Text style={{ fontSize: 12 }}>
            {item.allergens
              ? item.allergens.join(', ')
              : 'Non ci sono allergie'}
          </Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flex: 3 }}></View>
          <View style={{ flex: 1 }}>
            <IconButton
              icon={(props) => <Icon name='plus' {...props} />}
              color='green'
              onPress={() => {}}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  allergy: {
    backgroundColor: '#FEE1E1',
  },

  noAllergy: {
    backgroundColor: '#DFEBCB',
  },

  undefinedAllergy: {
    backgroundColor: '#FCEBC9',
  },

  cronologyCardStyle: {
    height: 125,
    flex: 1,
    flexDirection: 'row',
    margin: 5,
    borderRadius: 25,
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
    height: '100%',
    resizeMode: 'cover',
  },
});

export default CronologyCard;
