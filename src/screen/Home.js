import { StyleSheet, Text, View } from 'react-native';
import api from '../../api/api.js'
import React, { useEffect, useState } from 'react';
import Globals from '../assets/Globals.js';
import { ScrollView } from 'react-native-gesture-handler';

const allergie = [
   'en:nuts'
]

function Prodotto(dati) {
   let stato = true

   for (let allergia of dati.allergens_hierarchy) {
      if (allergie.includes(allergia)) {
         stato = false
         break
      }
   }

   return <>
      <Text>Nome: {dati.product_name}</Text>
      <Text>Allergeni: {dati.allergens_hierarchy.join(',')}</Text>
      <Text>
         {
            stato? '' : 'ALLERGICO!!'
         }
      </Text>
      <Text></Text>
   </>
}

const Home = () => {
   const [data, setData] = useState({products: [{product_name: 'test', allergens_hierarchy: []}], product: {product_name: 'test', allergens_hierarchy: []}})

   // const [allergie, setAllergie] = useState([
   //    'en:milk'
   // ])

   useEffect(() => {
      
      api.from_name('nutella')
      .then(setData)

      // api.from_barcode('')
      // .then(setData)
   }, [])

   return (
      <View style={{ flex: 1 }}>
         <ScrollView style={styles.productArea}>
            {
               data.products.map(Prodotto)
            }
            {/* {
               Prodotto(data.product)
            } */}
         </ScrollView>
      </View>
   );
};

const styles = StyleSheet.create({
   screen: { flex: 1, flexDirection: 'column' },
   welcomeView: {
      backgroundColor: '#0d4',
      flex: 3,
      justifyContent: 'center',
      paddingHorizontal: Globals.HorizontalPaddingView,
   },
   productArea: {
      backgroundColor: 'coral',
      flex: 10,
      paddingTop: 50,
      paddingLeft: 20
   },

   welcomeText: { fontSize: 50 },
});

export default Home;
