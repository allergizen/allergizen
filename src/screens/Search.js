import React, { useState } from 'react';
import Globals from '../assets/Globals.js';
import Colors from '../components/Colors';

import {
  View,
  StyleSheet,
  Text,
  FlatList,
} from 'react-native';
import { SearchBar } from 'react-native-elements';
import api from '../api/api.js';
import { ActivityIndicator } from 'react-native-paper';
import CronologyCard from '../components/CronologyCard.js';

const pippo = [
  {
    product_name: 'Kinder Bueno',
    img: 'https://images.openfoodfacts.org/images/products/800/050/003/7560/front_en.192.400.jpg',
    code: '8000500037560',
    brand: 'Kinder',
    allergens: 'en:gluten,en:milk,en:nuts,en:soybeans',
    traces: ''
  },
  {
    product_name: "NESQUIK Moins de Sucres",
    img: 'https://images.openfoodfacts.org/images/products/761/303/553/0799/front_en.199.400.jpg',
    code: '7613035530799',
    brand: "Nestlé,Nesquik",
    allergens: "en:gluten,en:soybeans",
    traces: ''
  },
  {
    product_name: "Basilico",
    img: 'https://images.openfoodfacts.org/images/products/807/680/951/3722/front_fr.900.400.jpg',
    code: '8076809513722',
    brand: "Barilla",
    allergens: "",
    traces: ''
  },
  {
    product_name: "Ferrero Rocher",
    img: 'https://images.openfoodfacts.org/images/products/800/050/016/7113/front_it.139.400.jpg',
    code: '8000500167113',
    brand: "Ferrero",
    allergens: "en:gluten,en:milk,en:nuts,en:soybeans",
    traces: ''
  },
  {
    product_name: "Penne rigate n.73",
    img: 'https://images.openfoodfacts.org/images/products/807/680/208/5738/front_it.3333.400.jpg',
    code: '8076802085738',
    brand: "Barilla",
    allergens: "en:gluten,en:soybeans",
    traces: ''
  },
  {
    product_name: 'Nutella',
    img: 'https://images.openfoodfacts.org/images/products/301/762/042/5035/front_fr.427.100.jpg',
    code: '3017620425035',
    brand: 'Ferrero',
    allergens: 'en:milk,en:nuts,en:soybeans',
    traces: ''
  }
]

// TODO: usa le cronologyCard come elementi della flatlist 👍
// TODO: aggiungi 3/4 card i più cercati (con un pulsante preferiti) se non hai cercato niente 👍

export default function App() {
  const [search, setSearch] = useState('');
  const [dati, setDati] = useState(pippo.sort(() => 0.5 - Math.random()).slice(0, 3));
  const [loading, setLoading] = useState(null);

  const handleSearch = () => {
    setDati(null);
    setLoading(true);

    api.from_name(search).then((res) => {
      setLoading(false);
      setDati(res.products.map(api.normalize_data));

    })
    .catch(res => {
      setLoading(false);
      setDati([]);
    })
  };

  const handleFavourite = (prodotto) => {
    // TODO: AGGIUNGI PRODOTTO AI PREFERITI
    alert('Aggiunto ai preferiti!');
  };

  return (
    <View style={styles.screen}>
      <View stylex={styles.SearchView}>
        <Text style={styles.title}>Cerca</Text>
      </View>
      <View style={styles.searchArea}>
        <SearchBar
          placeholder='Cerca qui...'
          onChangeText={setSearch}
          inputContainerStyle={{ backgroundColor: 'white' }}
          leftIconContainerStyle={{ backgroundColor: 'white' }}
          inputStyle={{ backgroundColor: 'white' }}
          containerStyle={{
            backgroundColor: 'white',
            justifyContent: 'space-around',
            borderTopWidth: 0,
            borderBottomWidth: 0,
            marginHorizontal: 20,
            marginTop: 10,
            borderRadius: 30,
          }}
          onSubmitEditing={handleSearch}
          value={search}
          platform='default'
        />
      </View>

      {(!loading && dati && dati.length == 0)?
        <Text style={{fontSize: 20, fontWeight: 'bold', textAlign: 'center', top: 35}}>
          Nessun prodotto trovato
        </Text>
      : (loading === null)?
        <Text style={{fontSize: 20, fontWeight: 'bold', textAlign: 'center', top: 35}}>
          Prodotti più cercati dagli utenti
        </Text>
      : <></>}

      <FlatList
        horizontal={false}
        data={dati || []}
        renderItem={CronologyCard}
        contentContainerStyle={{top: 40, marginHorizontal: 5}}
        keyExtractor={item => item.code}
        ListEmptyComponent={() =>
          loading ? (
            <ActivityIndicator
              color='limegreen'
              size='large'
              style={{
                marginHorizontal: '40%',
                marginTop: 200,
                position: 'relative',
              }}
            />
          ) : null
        }
        ListFooterComponent={<View style={{ marginBottom: 140 }} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: 'column',
  },
  SearchView: {
    backgroundColor: Colors.background,
    flex: 2,
    flexDirection: 'column',
    paddingHorizontal: Globals.css.HorizontalPaddingView,
  },
  searchArea: {
    backgroundColor: Colors.background,
    marginTop: -45,
  },
  title: {
    fontSize: 40,
    marginVertical: 50,
    paddingHorizontal: Globals.css.HorizontalPaddingView,
    fontWeight: 'bold',
  }
});
