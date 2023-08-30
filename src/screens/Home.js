import React, {
  useContext,
  useEffect,
  useState,
} from 'react';

import {
  doc,
  getDoc,
  getFirestore,
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
import { useAsyncStorage } from '@react-native-async-storage/async-storage';

import {
  Context,
  Provider,
} from '../assets/Context';
import Globals from '../assets/Globals.js';
import Colors from '../components/Colors';
import CronologyCard from '../components/CronologyCard.js';
import { app } from './Login';

const { getItem, setItem } = useAsyncStorage('productHistory');

const firebaseConfig = {
   apiKey: KEY,
   authDomain: AD,
   projectId: PRID,
   storageBucket: STBU,
   messagingSenderId: MSI,
   appId: AI,
};


const Home = () => {
   const db = getFirestore(app);
   var readed = false;
   const { UID } = useContext(Context);


   const [product, setProduct] = useState([]);
   const { scanned } = useContext(Context);
   const handleScannedChange = (newValue) => {
      setTimeout(() => {
         getItem().then((res) => {
            let data = JSON.parse(res);
            data = [{ code: '3mpty' }, ...data, { code: 'History' }];
            setProduct(data);
         });
      }, 1000);
   };
   handleScannedChange();
   useEffect(() => {
      // Sottoscrivi all'evento di cambio di scanned
      if (scanned) {
         handleScannedChange(scanned);
      }
   }, [scanned]);

   var [name, setName] = React.useState('nome');
   async function getInfo() {
      if (readed) return;
      readed = true;
      var query = await getDoc(doc(db, 'users', UID));
      setName(query.data().nome);
   }

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
                     Bentornato,
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
                        data={product}
                        renderItem={CronologyCard}
                        keyExtractor={(item, ind) => ind}
                        contentContainerStyle={{
                           flexDirection: 'column-reverse',
                        }}
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
      backgroundColor: 'rgba(0,0,0,0)',
   },
   welcomeView: {
      flex: 5,
      justifyContent: 'flex-start',
      paddingHorizontal: Globals.css.HorizontalPaddingView,
   },
   productArea: {
      flex: 12,
      paddingHorizontal: Globals.css.HorizontalPaddingView,
      borderTopEndRadius: 30,
      borderTopStartRadius: 30,
      overflow: 'hidden',
      backgroundColor: Colors.background,
   },
   title: { fontSize: 40, fontWeight: 'bold', marginTop: '20%' },
   h1: { fontSize: 30, flex: 1, fontWeight: 500 },
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
   cronologyViewText: {
      backgroundColor: Colors.background,
      marginTop: 15,
      minWidth: '55%',
      minHeight: '10%',
      alignItems: 'center',
   },
});

export default Home;
