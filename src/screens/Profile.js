import {
   View,
   Text,
   StyleSheet,
   SafeAreaView,
   Image,
   TouchableOpacity,
   FlatList,
   ScrollView,
} from 'react-native';
import React from 'react';

import { IconButton } from '@react-native-material/core';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import Dialog from 'react-native-dialog';

import Colors from '../components/Colors';
import Globals from '../assets/Globals';
import ProfileLinkScreenCard from '../components/ProfileLinkScreenCard';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDoc, doc } from 'firebase/firestore/lite';
import { KEY, AD, PRID, STBU, MSI, AI } from '@env';
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';
import { app } from './Login';
import { useContext, useState, useEffect } from 'react';
import { Context, Provider } from '../assets/Context';

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
var readed = false;
var DATA = [];

const Profile = () => {
   const { UID } = useContext(Context);

   const addAllergia = async (allergia) => {
      await setDoc(
         doc(db, 'users', UID),
         {
            allergie: {
               [allergia]: true,
            },
         },
         { merge: true },
      );
   };

   const removeAllergia = async (allergia) => {
      await setDoc(
         doc(db, 'users', UID),
         {
            allergie: {
               [allergia]: false,
            },
         },
         { merge: true },
      );
   };

   var [name, setName] = React.useState('nome');
   var [email, setEmail] = React.useState('email@example.it');
   async function getInfo() {
      if (readed) return;
      readed = true;
      var query = await getDoc(doc(db, 'users', UID));
      setName(query.data().nome);
      setEmail(query.data().email);
      Object.keys(query.data().allergie).forEach((key) => {
         if (key == 'Anidridesolforosa') key = 'Anidride solforosa';
         if (key == 'Fruttaaguscio') key = 'Frutta a guscio';
         DATA.push({ allergia: key, state: query.data().allergie[key] });
      });
   }

   const Item = ({ name, state }) => (
      //crea una card con il nome a sinistra e il bottone a destra
      <View style={styles.card}>
         <View style={{ flexDirection: 'row' }}>
            <View style={{ flex: 3 }}>
               <Text style={styles.cardTitle}>{name}</Text>
            </View>
            <View style={{ flex: 1 }}>
               {state ? (
                  <IconButton
                     icon={(props) => <Icon name='close' {...props} />}
                     color='red'
                     onPress={() => {
                        //removeAllergia(name);
                     }}
                  />
               ) : (
                  <IconButton
                     icon={(props) => <Icon name='plus' {...props} />}
                     color='green'
                     onPress={() => {
                        //addAllergia(name);
                     }}
                  />
               )}
            </View>
         </View>
      </View>
   );
   const [visible, setVisible] = React.useState(false);

   const showDialog = () => {
      setVisible(true);
   };

   const handleCancel = () => {
      setVisible(false);
   };
   const confirmChanges = () => {
      setVisible(false);
   };

   if (!readed) {
      getInfo();
      var interval = setInterval(() => {
         if (readed) {
            clearInterval(interval);
         }
      }, 100);
   }
   //<Dialog.input label="Nome"></Dialog.input>
   //<Dialog.input label="Email"></Dialog.input>

   return (
      <SafeAreaView style={styles.screen}>
         <View style={styles.profile}>
            <Text style={styles.title}>Profile</Text>
         </View>

         <View style={{ flex: 10, marginTop: 30 }}>
            <View style={styles.info}>
               <View style={styles.infoView}>
                  <Image source={require('../assets/images/icon.png')} style={styles.profileIcon} />
                  <View
                     style={{
                        flexDirection: 'column',
                        height: '100%',
                        paddingTop: 5,
                     }}>
                     <Text style={[styles.h1]}>{name}</Text>
                     <Text style={[styles.text]}>{email}</Text>
                  </View>
               </View>
            </View>
            <View style={styles.screenLink}>
               <Text style={styles.subtitle}>Allergeni</Text>

               <FlatList
                  data={DATA}
                  renderItem={({ item }) => <Item name={item.allergia} state={item.state} />}
               />
            </View>
         </View>
      </SafeAreaView>
   );
};

const styles = StyleSheet.create({
   screen: {
      flex: 1,
      flexDirection: 'column',
   },
   profile: {
      justifyContent: 'flex-end',
      paddingHorizontal: Globals.css.HorizontalPaddingView,
      flex: 1,
   },

   info: {
      justifyContent: 'flex-end',
      paddingHorizontal: Globals.css.HorizontalPaddingView / 2,
      flex: 2,
   },

   info: {
      justifyContent: 'flex-end',
      paddingHorizontal: Globals.css.HorizontalPaddingView / 2,
      flex: 2,
   },

   infoView: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      maxHeight: 100,
   },
   productArea: {
      flex: 10,
   },
   title: {
      fontSize: 40,
      fontWeight: 'bold',
      paddingHorizontal: Globals.css.HorizontalPaddingView,
   },
   subtitle: {
      fontSize: 25,
      fontWeight: 'semibold',
      paddingHorizontal: Globals.css.HorizontalPaddingView,
   },
   h1: { fontSize: 20, fontWeight: '600' },
   text: {},
   buttonStyle: {
      borderRadius: 7,
      backgroundColor: Colors.idk,
      justifyContent: 'center',
      alignItems: 'center',
      alignContent: 'flex-end',
      marginTop: 5,
      maxWidth: 120,
      minHeight: 22,
      opacity: 0.75,
   },
   profileIcon: {
      width: 80,
      height: 80,
      borderRadius: 50,
      borderWidth: 2,
      borderColor: '#d3d3d3',
   },
   screenLink: { flex: 8, paddingTop: 30, paddingHorizontal: 10 },
   logoutStyle: {
      borderRadius: 10,
      backgroundColor: Colors.profileScreenCard,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
   },
   logoutTextStyle: { fontSize: 18, color: Colors.red },

   card: {
      backgroundColor: 'white',
      borderRadius: 15,
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
      flex: 1,
   },
   cardTitle: {
      alignContent: 'center',
      fontSize: 25,
      fontWeight: 'normal',
   },
});

export default Profile;