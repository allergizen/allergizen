import React from 'react';
import Globals from '../assets/Globals.js';
import Colors from '../components/Colors';

import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image } from 'react-native';

const DATA = [
   {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97sdfsdfsdf63',
      image: 'https://images.openfoodfacts.org/images/products/505/382/720/3555/front_it.12.400.jpg',
      name: 'Special K cioccolato',
      company: 'Kellog’s',
   },
   {
      id: '3ac68afc-c605-48d3-a4f8-fbd91asdfsdfa97f63',
      image: 'https://images.openfoodfacts.org/images/products/505/382/720/3555/front_it.12.400.jpg',

      name: 'Special K cioccolato',
      company: 'Kellog’s',
   },
   {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97dfsdff63',
      image: 'https://images.openfoodfacts.org/images/products/505/382/720/3555/front_it.12.400.jpg',
      name: 'Special K cioccolato',
      company: 'Kellog’s',
   },
];

const Item = ({ title, image, company }) => (
   //crea una card con immagine a sinistra e titolo e sottotitolo a destra
   <View style={styles.card}>
      <View style={{ flexDirection: 'row' }}>
         <View style={{ flex: 1 }}>
            <Image source={{ uri: image }} style={{ height: 50, width: 50 }} />
         </View>
         <View style={{ flex: 3 }}>
            <Text style={styles.cardTitle}>{title}</Text>
            <Text style={styles.cardSubtitle}>{company}</Text>
         </View>
      </View>
   </View>
);

const App = () => {
   return (
      <View style={styles.screen}>
         <View stylex={styles.savedView}>
            <Text style={styles.title}>Salvati</Text>
         </View>
         <View style={styles.productArea}>
            <SafeAreaView>
               <FlatList
                  data={DATA}
                  renderItem={({ item }) => (
                     <Item title={item.name} company={item.company} image={item.image} />
                  )}
                  keyExtractor={(item) => item.id}
               />
            </SafeAreaView>
         </View>
      </View>
   );
};

const styles = StyleSheet.create({
   screen: {
      flex: 1,
      flexDirection: 'column',
   },
   savedView: {
      backgroundColor: Colors.background,
      flex: 2,
      flexDirection: 'column',
      paddingHorizontal: Globals.css.HorizontalPaddingView,
   },
   productArea: {
      backgroundColor: Colors.background,
      flex: 10,
   },
   title: {
      fontSize: 40,
      marginVertical: 50,
      paddingHorizontal: Globals.css.HorizontalPaddingView,
   },

   h1: { fontSize: 20 },

   card: {
      backgroundColor: 'white',
      borderRadius: 15,
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
      flex: 1,
   },
   cardTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      color: Colors.text,
   },
   cardSubtitle: {
      fontSize: 15,
      color: Colors.text,
   },
   cardImage: {
      width: 50,
      height: 50,
   },
});

export default App;
