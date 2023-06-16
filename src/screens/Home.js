import { StyleSheet, Text, View, FlatList } from 'react-native';

import React from 'react';
import Globals from '../assets/Globals.js';
import Colors from '../components/Colors';

import LastSavedCard from '../components/LastSavedCard';
import CronologyCard from '../components/CronologyCard.js';

const SAVED = [
  {
    name: 'Nutella',
    img: 'https://images.openfoodfacts.org/images/products/301/762/042/5035/front_fr.427.400.jpg',
    code: '001',
  },
  {
    name: 'Acqua',
    img: 'https://images.openfoodfacts.org/images/products/327/408/000/5003/front_it.558.full.jpg',
    code: '002',
  },
  {
    name: 'Nutella Biscuit',
    img: 'https://images.openfoodfacts.org/images/products/800/050/031/0427/front_it.108.400.jpg',
    code: '003',
  },
  {
    name: 'Noir',
    img: 'https://images.openfoodfacts.org/images/products/304/692/002/2606/front_it.188.400.jpg',
    code: '004',
  },
];
const CRONOLOGY = [
  {
    name: 'Nutella',
    img: 'https://images.openfoodfacts.org/images/products/301/762/042/5035/front_fr.427.400.jpg',
    code: '001',
  },
  {
    name: 'Acqua',
    img: 'https://images.openfoodfacts.org/images/products/327/408/000/5003/front_it.558.full.jpg',
    code: '002',
  },
  {
    name: 'Nutella Biscuit',
    img: 'https://images.openfoodfacts.org/images/products/800/050/031/0427/front_it.108.400.jpg',
    code: '003',
  },
  {
    name: 'Noir',
    img: 'https://images.openfoodfacts.org/images/products/304/692/002/2606/front_it.188.400.jpg',
    code: '004',
  },
  {
    name: 'Nutella',
    img: 'https://images.openfoodfacts.org/images/products/301/762/042/5035/front_fr.427.400.jpg',
    code: '00113434',
  },
  {
    name: 'Acqua',
    img: 'https://images.openfoodfacts.org/images/products/327/408/000/5003/front_it.558.full.jpg',
    code: '002142123',
  },
  {
    name: 'Nutella Biscuit',
    img: 'https://images.openfoodfacts.org/images/products/800/050/031/0427/front_it.108.400.jpg',
    code: '001231233',
  },
  {
    name: 'Noir',
    img: 'https://images.openfoodfacts.org/images/products/304/692/002/2606/front_it.188.400.jpg',
    code: '0045324141324',
  },
  {
    name: 'Nutella',
    img: 'https://images.openfoodfacts.org/images/products/301/762/042/5035/front_fr.427.400.jpg',
    code: '00213',
  },
  {
    name: 'Acqua',
    img: 'https://images.openfoodfacts.org/images/products/327/408/000/5003/front_it.558.full.jpg',
    code: '002134',
  },
  {
    name: 'Nutella Biscuit',
    img: 'https://images.openfoodfacts.org/images/products/800/050/031/0427/front_it.108.400.jpg',
    code: '00312',
  },
  {
    name: 'Noir',
    img: 'https://images.openfoodfacts.org/images/products/304/692/002/2606/front_it.188.400.jpg',
    code: '004123',
  },
];

const Home = () => {
  return (
    <>
      <View style={styles.screen}>
        <View style={styles.welcomeView}>
          <Text style={[styles.title, styles.colorGreen]}>Bentornato!</Text>
        </View>
        <View style={styles.productArea}>
          <View
            style={{
              flex: 6,
              flexDirection: 'column',
              paddingHorizontal: Globals.css.HorizontalPaddingView,
            }}
          >
            <Text style={[styles.h1, styles.colorGreen]}>Ultimi Salvati</Text>
            <View style={{ flex: 4 }}>
              <FlatList
                horizontal={true}
                data={SAVED}
                renderItem={LastSavedCard}
                keyExtractor={(item) => item.code}
              />
            </View>
          </View>
          <View
            style={{
              flex: 12,
              flexDirection: 'column',
              paddingHorizontal: Globals.css.HorizontalPaddingView,
            }}
          >
            <Text style={[styles.h1, styles.colorGreen]}>Cronologia</Text>
            <View style={{ flex: 8 }}>
              <FlatList
                horizontal={false}
                data={CRONOLOGY}
                renderItem={CronologyCard}
                keyExtractor={(item) => item.code}
              />
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: Colors.background,
  },
  welcomeView: {
    flex: 2,
    justifyContent: 'center',
    paddingHorizontal: Globals.css.HorizontalPaddingView,
  },
  productArea: {
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
    borderWidth: 1,
    backgroundColor: Colors.light,
  },
  colorGreen: { color: Colors.green },
});

export default Home;
