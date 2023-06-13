import React from 'react';
import {
   KeyboardAvoidingView,
   StyleSheet,
   Text,
   View,
   TextInput,
   TouchableOpacity,
} from 'react-native';

import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

import { KEY, AD, PRID, STBU, MSI, AI } from 'detona';

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

const Login = () => {
   const [email, setEmail] = React.useState('');
   const [password, setPassword] = React.useState('');

   const handleLogin = () => {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, email, password)
         .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            console.log('logged: ', user);
         })
         .catch((error) => {
            if (error.code == 'auth/wrong-password' || error.code == 'auth/user-not-found') {
               alert('Wrong user or password.');
            }
         });
   };

   return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
         <View style={styles.inputContainer}>
            <TextInput
               placeholder="Email"
               style={styles.input}
               value={email}
               onChangeText={(text) => setEmail(text)}
            />
            <TextInput
               placeholder="Password"
               style={styles.input}
               secureTextEntry
               value={password}
               onChangeText={(password) => setPassword(password)}
            />
         </View>

         <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={() => {}} style={styles.textAsBtn}>
               <Text style={styles.textAsBtn}>Forgot password?</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleLogin} style={styles.button}>
               <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            <Text style={styles.text}>or</Text>
            <TouchableOpacity onPress={() => {}} style={styles.button}>
               <Text style={styles.buttonText}>Login with google</Text>
            </TouchableOpacity>

            <Text style={styles.text}>New here?</Text>
            <TouchableOpacity onPress={() => {}} style={styles.textAsBtn}>
               <Text style={styles.textAsBtn}>Register</Text>
            </TouchableOpacity>
         </View>
      </KeyboardAvoidingView>
   );
};

export default Login;

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
   },
   inputContainer: {
      width: '80%',
   },
   input: {
      backgroundColor: '#fff',
      paddingHorizontal: 15,
      paddingVertical: 10,
      borderRadius: 10,
      marginTop: 5,
   },
   buttonContainer: {
      width: '60%',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 40,
   },
   button: {
      backgroundColor: '#F9DF9F',
      marginTop: 5,
   },
   textAsBtn: {
      color: '#DAAF53',
      fontWeight: 'bold',
   },
   text: {
      fontWeight: 'normal',
   },
   buttonText: {},
});
