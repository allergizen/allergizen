import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import { React, useState } from 'react';
import { IconButton } from '@react-native-material/core';
import Colors from './Colors';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import api from '../api/api';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const CronologyCard = ({ item }) => {
  fetch(item.img).then((res) => res.blob().then());
  const numAll = api.get_allergens(item.allergens).length;

  return (
    <View
      style={[
        styles.cronologyCardStyle,
        api.get_allergens(item.allergens).length &&
        api.get_allergens(item.traces).length
          ? styles.allergy
          : api.get_allergens(item.allergens).length
          ? styles.allergy
          : api.get_allergens(item.traces).length
          ? styles.undefinedAllergy
          : styles.noAllergy,
      ]}
    >
      <View
        style={{
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

      <View style={{ flex: 2, padding: 5, marginLeft: 15 }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            textAlignVertical: 'center',
          }}
        >
          <Text style={{ fontSize: 25, lineHeight: 30 }}>
            {item.product_name.length > 16
              ? item.product_name.slice(0, 16) + '...'
              : item.product_name}
          </Text>
          <Text style={{ fontSize: 15, lineHeight: 20 }}>{item.brand}</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
              marginTop: 5,
            }}
          >
            {numAll > 0 ? (
              <MaterialCommunityIcons
                name='close-circle'
                color={'#000'}
                size={26}
              />
            ) : (
              <MaterialCommunityIcons
                name='check-circle'
                color={'#000'}
                size={26}
              />
            )}
            <Text style={{ fontSize: 12, marginLeft: 5 }}>
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
};

const styles = StyleSheet.create({
  allergy: {
    backgroundColor: Colors.lightRed,
  },

  noAllergy: {
    backgroundColor: Colors.lightGreen,
  },

  undefinedAllergy: {
    backgroundColor: Colors.lightYellow,
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
