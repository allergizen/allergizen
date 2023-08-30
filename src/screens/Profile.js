import React, {
  useContext,
  useState,
} from 'react';

import {
  doc,
  getDoc,
  getFirestore,
  setDoc,
} from 'firebase/firestore/lite';
import {
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {
  AD,
  AI,
  KEY,
  MSI,
  PRID,
  STBU,
} from '@env';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import { IconButton } from '@react-native-material/core';

import {
  Context,
  Provider,
} from '../assets/Context';
import Globals from '../assets/Globals';
import Colors from '../components/Colors';
import { app } from './Login';

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
      if (allergia == 'Anidride solforosa') allergia = 'Anidridesolforosa';
      if (allergia == 'Frutta a guscio') allergia = 'Fruttaaguscio';
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
      if (allergia == 'Anidride solforosa') allergia = 'Anidridesolforosa';
      if (allergia == 'Frutta a guscio') allergia = 'Fruttaaguscio';
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
         DATA.push({ allergia: key, state: query.data().allergie[key] });
      });

   }

   const Item = ({ name, state }) => {
      const [isClicked, setIsClicked] = useState(false);

      const handleButtonPress = () => {
         if (isClicked) {
            removeAllergia(name);
         } else {
            addAllergia(name);
         }

         setIsClicked((prevState) => !prevState);
      };

      React.useEffect(() => {
         setIsClicked(state);
      }, [state]);

      if (name == 'Anidridesolforosa') name = 'Anidride solforosa';
      if (name == 'Fruttaaguscio') name = 'Frutta a guscio';

      return (
         <View style={styles.card}>
            <View style={{ flexDirection: 'row' }}>
               <View style={{ flex: 3 }}>
               <Text style={styles.cardTitle}>
                     <Icon name="food" style={styles.emojiIcon} /> {name}
                  </Text>
               </View>
               <View style={{ flex: 1 }}>
                  <IconButton
                     icon={(props) => <Icon name={isClicked ? 'close' : 'plus'} {...props} />}
                     color={isClicked ? 'red' : 'green'}
                     onPress={handleButtonPress}
                  />
               </View>
            </View>
         </View>
      );
   };

   if (!readed) {
      getInfo();
      var interval = setInterval(() => {
         if (readed) {
            clearInterval(interval);
         }
      }, 100);
   }

   return (
      <Provider>
         <View style={styles.screen}>
            <View style={styles.welcomeView}>
               {/* Immagine usata come sfondo */}
               <ImageBackground
                  source={require('../assets/images/background.png')}
                  resizeMode='cover'
                  style={{
                     flex: 1,
                     margin: -25,
                     paddingHorizontal: 50,
                     paddingTop: 80,
                     justifyContent: 'flex-start',
                  }}>
                  <Text
                     style={[
                        styles.h1,
                        { color: '#E4E4E4', fontSize: 25, maxHeight: 30, fontWeight: '400' },
                     ]}>
                     Profilo
                  </Text>
                  <Text
                     style={[
                        styles.h1,
                        { color: '#fff', maxHeight: 45, fontWeight: '500' },
                     ]}>
                     {name}
                  </Text>
               </ImageBackground>
            </View>
            <View style={styles.productArea}>
               {/* Cronologia  */}
               <View
                  style={{
                     flex: 12,
                     flexDirection: 'column',
                  }}>
                  <View style={{ flex: 15, width: '100%' }}>
                     <FlatList
                        horizontal={false}
                        showsVerticalScrollIndicator={false}
                        style={{ marginTop: 10 }}
                        data={DATA}
                        renderItem={({ item }) => <Item name={item.allergia} state={item.state} />}
                     />
                  </View>
               </View>
            </View>
         </View>
      </Provider>


   );
};

const styles = StyleSheet.create({
   

   subtitle: {
      fontSize: 25,
      fontWeight: 'semibold',
      paddingHorizontal: Globals.css.HorizontalPaddingView,
   },
   text: {
      fontSize: 15,
      fontWeight: '400',
      color: '#E4E4E4',

   },

   card: {
      justifyContent: 'center',
      flex: 1,
      backgroundColor: 'white',
      borderRadius: 15,
      padding: 10,
      marginVertical: 8,
      marginHorizontal: 16,
   },
   cardTitle: {
      fontSize: 20,
      fontWeight: 'normal',
      marginTop: 12,
   },


   screen: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: 'rgba(0,0,0,0)',
   },
   welcomeView: {
      flex: 5,
      justifyContent: 'flex-start',
      paddingHorizontal: Globals.css.HorizontalPaddingView,
   },
   productArea: {
      flex: 12,
      marginBottom: 100,

      paddingHorizontal: Globals.css.HorizontalPaddingView,
      borderTopEndRadius: 30,
      borderTopStartRadius: 30,
      overflow: 'hidden',
      backgroundColor: Colors.background,
   },
   h1: { 
      fontSize: 30, 
      flex: 1, 
      fontWeight: 500, 
      color: '#fff' 
   },
   
   emojiIcon: {
      fontSize: 18,
   },

});

export default Profile;
