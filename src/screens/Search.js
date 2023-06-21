import React, { useState } from 'react';
import Globals from '../assets/Globals.js';
import Colors from '../components/Colors';

import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { SearchBar } from 'react-native-elements';
import api from '../api/api.js';
import { CrossIcon, CheckIcon, QuestionIcon } from '../assets/svgIcons.js';
import { ActivityIndicator } from 'react-native-paper';
import { Shadow } from 'react-native-shadow-2';
import Svg, { Path } from 'react-native-svg';

const HeartIcon = (props) => (
  <Svg fill='none' viewBox='0 0 24 24' {...props}>
    <Path
      stroke='#ad0000'
      strokeWidth={2}
      d='M19.237 6.237a4.098 4.098 0 0 1 .135 5.654L12 20.001l-7.372-8.11a4.098 4.098 0 1 1 6.231-5.316L12 8.001l1.14-1.426a4.098 4.098 0 0 1 6.097-.338Z'
    />
  </Svg>
);

// const Nutriscore = () => {
//   return (
//     <SvgUri
//       uri={`https://static.openfoodfacts.org/images/attributes/nutriscore-a.svg`}
//     ></SvgUri>
//   );
// };

// TODO: usa le cronologyCard come elementi della flatlist
// TODO: aggiungi 3/4 card i più cercati (con un pulsante preferiti) se non hai cercato niente

export default function App() {
  const [search, setSearch] = useState('');
  const [dati, setDati] = useState(null);
  const [loading, setLoading] = useState(false);

  const updateSearch = (s) => {
    setSearch(s);
  };

  const handleSearch = () => {
    setDati(null);
    setLoading(true);

    api.from_name(search).then((res) => {
      setLoading(false);
      setDati(res);
    });
  };

  const handleFavourite = (prodotto) => {
    // TODO: AGGIUNGI PRODOTTO AI PREFERITI
    alert('Aggiunto ai preferiti!');
  };

  const renderItem = ({ item }) => (
    /*
   api.get_allergens(item.allergens).length &&
        api.get_allergens(item.traces).length
          ? styles.allergy
          : api.get_allergens(item.allergens).length
          ? styles.allergy
          : api.get_allergens(item.traces).length
          ? styles.undefinedAllergy
          : styles.noAllergy,
   -------------------------------
   {api.get_allergens(item.allergens).length !== 0 ? (
              <CrossIcon height={50} width={50} />
            ) : api.get_allergens(item.traces).length === 0 ? (
              <CheckIcon height={50} width={50} />
            ) : (
              <QuestionIcon
                height={35}
                width={35}
                style={{ top: 7.5, left: 7.5 }}
              />
            )}
   */
    <View
      style={[
        styles.product,
        api.get_allergens(item.allergens).length != 0
          ? { backgroundColor: Colors.red }
          : api.get_allergens(item.traces).length === 0
          ? { backgroundColor: Colors.green }
          : { backgroundColor: Colors.yellow },
      ]}
    >
      <Image
        source={{ uri: item.image_url }}
        style={styles.img}
        resizeMode='contain'
      />
      <View>
        <Text style={styles.productTitle} numberOfLines={1}>
          {item.product_name}
        </Text>
        <Text style={styles.productBrand} numberOfLines={1}>
          {item.brands}
        </Text>
        <Shadow distance={7.5} offset={[10, 20]} startColor='#00000030'>
          <View style={styles.productStatus}>
            {api.get_allergens(item.allergens).length !== 0 ? (
              <CrossIcon height={50} width={50} />
            ) : api.get_allergens(item.traces).length === 0 ? (
              <CheckIcon height={50} width={50} />
            ) : (
              <QuestionIcon
                height={35}
                width={35}
                style={{ top: 7.5, left: 7.5 }}
              />
            )}
          </View>
        </Shadow>
        <View style={styles.productSave}>
          <TouchableOpacity onPress={() => handleFavourite(item)}>
            <HeartIcon height={40} width={40} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.screen}>
      <View stylex={styles.SearchView}>
        <Text style={styles.title}>Cerca</Text>
      </View>
      <View style={styles.searchArea}>
        <SearchBar
          placeholder='Cerca qui...'
          onChangeText={updateSearch}
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
      <FlatList
        data={dati?.products || []}
        renderItem={renderItem}
        keyExtractor={(item) => item.code}
        contentContainerStyle={[styles.productArea, { paddingBottom: 150 }]}
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
        ListFooterComponent={<View style={{ marginBottom: 150 }} />}
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
  },
  productArea: {
    top: 30,
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    gap: 20,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  product: {
    width: 150,
    height: 250,
    backgroundColor: 'white',
    display: 'flex',
    borderRadius: 10,
    marginVertical: 0,
    borderWidth: 1,
    borderColor: 'lightgray',
    borderStyle: 'solid',
  },
  img: {
    width: '90%',
    height: 120,
    marginHorizontal: '5%',
    top: 5,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  productTitle: {
    fontSize: 20,
    top: 5,
    marginHorizontal: '5%',
  },
  productBrand: {
    marginHorizontal: '5%',
    top: 2,
    color: 'gray',
  },
  productStatus: {
    top: 20,
    height: 50,
    width: 50,
    left: 10,
    alignSelf: 'center',
    backgroundColor: 'white',
    borderRadius: 8,
  },
  productSave: {
    left: 90,
    top: -25,
  },
});
