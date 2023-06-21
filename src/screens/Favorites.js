import React from 'react';
import { useState } from 'react';

import { useContext } from 'react';
import { Context, Provider } from '../assets/Context';

import Globals from '../assets/Globals.js';
import Colors from '../components/Colors';

import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image } from 'react-native';
import Profile from './Profile.js';
import { getFirestore, collection, getDoc, doc, deleteDoc } from 'firebase/firestore/lite';
import { KEY, AD, PRID, STBU, MSI, AI } from '@env';
import { app } from './Login';
import { IconButton } from '@react-native-material/core';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';




const firebaseConfig = {
   apiKey: KEY,
   authDomain: AD,
   projectId: PRID,
   storageBucket: STBU,
   messagingSenderId: MSI,
   appId: AI,
};

// const app = initializeApp(firebaseConfig);
const db = getFirestore(app);



const Favorites = () => {
   const [data, setData] = useState([]);

   const { UID } = useContext(Context);
   var readed = false;
   async function getSaved() {
      if (readed) return;
      var query = await getDoc(doc(db, 'users', UID));
      const newData = Object.keys(query.data().favourites).map((obj) => ({
         code: obj,
         brand: query.data().favourites[obj].brand,
         img: query.data().favourites[obj].img,
         name: query.data().favourites[obj].name,
      }));
      setData(newData);
      readed = true;
   }

   const removeAllergy = async (code) => {
      await deleteDoc(doc(db, 'users', UID, 'favourites', code));
   };
   

   const Item = ({ name, img, brand, code }) => (
      <View style={styles.card}>
         <View style={{ flexDirection: 'row' }}>
            <View style={{ flex: 1 }}>
               <Image source={{ uri: img }} style={{ height: 50, width: 50 }} />
            </View>
            <View style={{ flex: 3 }}>
               <Text style={styles.cardTitle}>{name}</Text>
               <Text style={styles.cardSubtitle}>{brand}</Text>
            </View>
            <View style={{ flex: 1 }}>
               <IconButton
                  icon={(props) => <Icon name={'close'} {...props} />}
                  color={'red'}
                  onPress={() => ({})}
               />
            </View>

         </View>
      </View>
   );


   if (!readed) {
      getSaved();
      var interval = setInterval(() => {
         if (readed) {
            clearInterval(interval);
         }
      }, 100);
   }

   return (
      <View style={styles.screen}>
         <View stylex={styles.savedView}>
            <Text style={styles.title}>Salvati</Text>
         </View>
         <View style={styles.productArea}>
            <SafeAreaView>
               <FlatList
                  data={data}
                  renderItem={({ item }) =>
                     item.name === null ? null : (
                        <Item name={item.name} brand={item.brand} img={item.img} />
                     )
                  }
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
      fontWeight: 'bold'
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

export default Favorites;
