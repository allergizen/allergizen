import React from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import {
   getAuth,
   signInWithEmailAndPassword,
   signInWithCustomToken,
   getIdToken,
} from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Globals from '../assets/Globals.js';
import TextInput from 'react-native-textinput-with-icons';
import * as SecureStore from 'expo-secure-store';
import Colors from '../components/Colors.js';
import { useContext, useState, useEffect } from 'react';
import { Context, Provider } from '../assets/Context';

import { KEY, AD, PRID, STBU, MSI, AI } from '@env';

const firebaseConfig = {
   apiKey: KEY,
   authDomain: AD,
   projectId: PRID,
   storageBucket: STBU,
   messagingSenderId: MSI,
   appId: AI,
};

export const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
auth.languageCode = 'it';

async function setUid(uid) {
   await SecureStore.setItemAsync('uid', uid);
}

async function getUid() {
   return await SecureStore.getItemAsync('uid');
}

auth.onAuthStateChanged((user) => {
   if (user) {
      console.log('logged: ', user.email);
   }
});

//checkLoginIn();
export default Login = ({ navigation }) => {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const { UID, setUID } = useContext(Context);
   useEffect(() => {
      if (UID.length > 3) navigation.navigate('TabBar');
   }, [UID]);
   const handleLogin = () => {
      signInWithEmailAndPassword(auth, email, password)
         .then((userCredential) => {
            setUID(userCredential.user.uid);
         })
         .catch((error) => {
            if (error.code == 'auth/wrong-password' || error.code == 'auth/user-not-found') {
               alert('Wrong user or password.');
            }
         });
   };

   // per andare alla pagina di Signup
   const handleSignupButtonNavigation = () => {
      navigation.navigate('Signup');
   };

   const handleForgotPasspButtonNavigation = () => {
      navigation.navigate('ForgotPassword');
   };

   return (
      <Provider>
         <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <View style={styles.loginView}>
               <Text style={[styles.title]}>Login</Text>
            </View>
            <View style={styles.inputContainer}>
               <TextInput
                  leftIcon='mail'
                  label='Email'
                  style={styles.input}
                  value={email}
                  onChangeText={(text) => setEmail(text)}
               />
               <TextInput
                  leftIcon='lock-closed'
                  label='Password'
                  style={styles.input}
                  secureTextEntry
                  value={password}
                  onChangeText={(password) => setPassword(password)}
               />
            </View>
            <TouchableOpacity onPress={() => {}} style={styles.forgotContainer}>
               <Text style={styles.textAsBtn} onPress={handleForgotPasspButtonNavigation}>
                  Forgot password?
               </Text>
            </TouchableOpacity>
            <View style={styles.buttonContainer}>
               <TouchableOpacity onPress={handleLogin} style={styles.button}>
                  <Text style={styles.buttonText}>Login</Text>
               </TouchableOpacity>

               <View style={styles.register}>
                  <Text style={styles.text}>New here? </Text>
                  <TouchableOpacity onPress={() => {}} style={styles.textAsBtn}>
                     <Text style={styles.textAsBtn} onPress={handleSignupButtonNavigation}>
                        Register
                     </Text>
                  </TouchableOpacity>
               </View>
            </View>
         </KeyboardAvoidingView>
      </Provider>
   );
};

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: 'center',
      paddingHorizontal: Globals.css.HorizontalPaddingView,
   },
   input: {
      backgroundColor: '#fff',
      paddingVertical: 17,
      borderRadius: 10,
      marginTop: 10,
   },
   buttonContainer: {
      justifyContent: 'center',
      marginTop: 40,
   },
   button: {
      backgroundColor: '#F9DF9F',
      marginTop: 5,
      paddingHorizontal: 90,
      paddingVertical: 15,
      borderRadius: 15,
   },
   textAsBtn: {
      color: '#DAAF53',
      fontWeight: 'bold',
      textAlign: 'right',
   },

   forgotContainer: {
      marginTop: 10,
   },
   text: {
      fontWeight: 'normal',
   },
   buttonText: {
      fontWeight: 'semibold',
      fontSize: 20,
      textAlign: 'center',
   },
   title: {
      fontWeight: 'bold',
      fontSize: 40,
      marginTop: -170,
   },
   register: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 20,
   },
   inputContainer: {
      marginLeft: 15,
   },
});
