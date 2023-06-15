import {
   View,
   Text,
   StyleSheet,
   SafeAreaView,
   Image,
   Button,
   TouchableOpacity,
   ScrollView,
} from 'react-native';
import React from 'react';

import Colors from '../components/Colors';
import Globals from '../assets/Globals';
import ProfileLinkScreenCard from '../components/ProfileLinkScreenCard';
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDoc, doc } from "firebase/firestore/lite";
import { KEY, AD, PRID, STBU, MSI, AI, _UID } from "@env";
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';
const firebaseConfig = {
   apiKey: KEY,
   authDomain: AD,
   projectId: PRID,
   storageBucket: STBU,
   messagingSenderId: MSI,
   appId: AI,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const uid = _UID;

const Profile = () => {
   var [name, setName] = React.useState("nome");
   var [email, setEmail] = React.useState("email@example.it");
   async function getInfo() {
      var query = await getDoc(doc(db, "users", uid));
      setName(query.data().nome);
      setEmail(query.data().email);
   }
   getInfo();
   
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
                     <TouchableOpacity style={styles.buttonStyle}>
                        <Text style={{ fontWeight: 500 }}>Modifica</Text>
                     </TouchableOpacity>
                  </View>
               </View>
            </View>
            <View style={styles.screenLink}>
               <ScrollView>
                  <ProfileLinkScreenCard iconName={'virus-outline'} nameScreen="Allergie" />
                  <ProfileLinkScreenCard iconName={'cog-outline'} nameScreen="Impostazioni" />
                  <ProfileLinkScreenCard
                     iconName={'information-outline'}
                     nameScreen="Informazioni"
                  />
                  <ProfileLinkScreenCard iconName={'help-circle-outline'} nameScreen="Aiuto" />
                  <ProfileLinkScreenCard iconName={'logout'} nameScreen="Logout" />

               </ScrollView>
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
   screenCard: { height: 60, backgroundColor: Colors.profileScreenCard, borderRadius: 8 },
   logoutStyle: {
      borderRadius: 10,
      backgroundColor: Colors.profileScreenCard,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
   },
   logoutTextStyle: { fontSize: 18, color: Colors.red },
});

export default Profile;
