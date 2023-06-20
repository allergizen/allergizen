import { StyleSheet, Text, View, FlatList, Image } from 'react-native';

import { React, useState, useEffect, useContext } from 'react';
import Globals from '../assets/Globals.js';
import Colors from '../components/Colors';
import { useNavigation } from '@react-navigation/native';

import api from '../api/api';
import LastSavedCard from '../components/LastSavedCard';
import CronologyCard from '../components/CronologyCard.js';
import { Tab } from '@rneui/base';

import { useAsyncStorage } from '@react-native-async-storage/async-storage';

import { Provider, Context } from '../assets/Context';

const { getItem, setItem } = useAsyncStorage('productHistory');

const SAVED = [
  {
    name: 'Lista 1',
    color: '#E5E1FE',
    code: '001',
  },
  {
    name: 'Lista 2',
    color: '#A979C6',
    code: '002',
  },
  {
    name: 'Lista 3',
    color: '#7497EF',
    code: '003',
  },
  {
    name: 'Lista 4',
    color: '#f9df9f',
    code: '004',
  },
];

const Home = ({ navigation }) => {
  const [product, setProduct] = useState({});
  const { scanned } = useContext(Context);

  // const scanned = '';

  useEffect(() => {
    // Funzione che viene chiamata quando il valore di scanned cambia
    const handleScannedChange = (newValue) => {
      setTimeout(() => {
        getItem().then((res) => {
          const data = JSON.parse(res.toString());
          console.log(data);
          setProduct(data);
        });
      }, 1000);
      console.log(product);
    }; // Sottoscrivi all'evento di cambio di scanned
    if (scanned) {
      handleScannedChange(scanned);
    }
  }, [scanned]);
  //getItem().then((res) => console.log('HOME: ' + res));
  return (
    <Provider>
      <View style={styles.screen}>
        <View style={styles.welcomeView}>
          <Text style={[styles.title]}>Bentornato!</Text>
        </View>
        <View style={styles.productArea}>
          <View
            style={{
              flex: 6,
              flexDirection: 'column',
              paddingHorizontal: Globals.css.HorizontalPaddingView,
            }}
          >
            <Text style={[styles.h1]}>Liste Salvate</Text>
            <View style={{ flex: 4 }}>
              <FlatList
                horizontal={true}
                data={SAVED}
                renderItem={LastSavedCard}
                keyExtractor={(item) => item.code}
                showsHorizontalScrollIndicator={false}
              />
            </View>
          </View>
          <View
            style={{
              flex: 20,
              flexDirection: 'column',
              paddingHorizontal: Globals.css.HorizontalPaddingView,
            }}
          >
            <Text style={[styles.h1]}>Cronologia</Text>
            <View style={{ flex: 8 }}>
              <FlatList
                horizontal={false}
                data={product}
                renderItem={CronologyCard}
                keyExtractor={(item) => item.code}
              />
            </View>
          </View>
        </View>
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: 'column',
  },
  welcomeView: {
    flex: 2,
    justifyContent: 'center',
    paddingHorizontal: Globals.css.HorizontalPaddingView,
    backgroundColor: Colors.green,
    borderBottomEndRadius: 40,
    borderBottomStartRadius: 40,
    marginBottom: 20,
  },
  productArea: {
    flex: 10,
  },
  title: { fontSize: 40, fontWeight: 'bold' },
  h1: { fontSize: 20, flex: 1 },
  lastSaveCardStyle: {
    flex: 1,
    flexDirection: 'column',
    margin: 5,
    borderRadius: 10,
    padding: 5,
    borderWidth: 1,
    backgroundColor: Colors.light,
  },
  colorGreen: { color: Colors.green },
});

export default Home;
