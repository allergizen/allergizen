import React from 'react';
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  getDocs,
  setDoc,
  doc,
} from 'firebase/firestore/lite';
import { KEY, AD, PRID, STBU, MSI, AI } from '@env';
import TextInput from 'react-native-textinput-with-icons';
import Globals from '../assets/Globals.js';
import * as SecureStore from 'expo-secure-store';
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

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function setUid(uid) {
  await SecureStore.setItemAsync('uid', uid);
}

async function adddb(email, name, user) {
  try {
    await setDoc(doc(db, 'users', user), {
      nome: name,
      email: email,
      allergie: {
        Glutine: false,
        Crostacei: false,
        Uova: false,
        Pesce: false,
        Arachidi: false,
        Soia: false,
        Latte: false,
        Fruttaaguscio: false,
        Sedano: false,
        Senape: false,
        Sesamo: false,
        Anidridesolforosa: false,
        Lupini: false,
        Molluschi: false,
      },
    });
  } catch {
    console.log('error');
  }
}

const Signup = ({ navigation }) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmpassword, setConfirmPassword] = React.useState('');
  const [name, setName] = React.useState('');
  const { UID, setUID } = useContext(Context);
  useEffect(() => {
    if (UID.length > 3) navigation.replace('TabBar');
  }, [UID]);

  // per andare alla pagina di Signup
  const handleLoginButtonNavigation = () => {
    navigation.navigate('Login');
  };

  const handleSignup = () => {
    if (password != confirmpassword) {
      alert('Le password non coincidono');
      return;
    }
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        console.log('signed up: ', user.email);
        setUid(user.uid);
        setUID(user.uid);
        adddb(email, name, user.uid);
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <KeyboardAvoidingView style={styles.container} behavior='padding'>
      <View style={styles.signupView}>
        <Text style={styles.title}>Signup</Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          label='Name'
          leftIcon='person-circle'
          style={styles.input}
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <TextInput
          label='Email'
          leftIcon='mail'
          style={styles.input}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          label='Password'
          leftIcon='lock-closed'
          style={styles.input}
          secureTextEntry
          value={password}
          onChangeText={(password) => setPassword(password)}
        />
        <TextInput
          label='Confirm Password'
          leftIcon='lock-closed'
          style={styles.input}
          secureTextEntry
          value={confirmpassword}
          onChangeText={(confirmpassword) =>
            setConfirmPassword(confirmpassword)
          }
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleSignup} style={styles.button}>
          <Text style={styles.buttonText}>Sign up</Text>
        </TouchableOpacity>

        <View style={styles.register}>
          <Text style={styles.text}>Not new? </Text>
          <TouchableOpacity onPress={() => {}} style={styles.textAsBtn}>
            <Text
              style={styles.textAsBtn}
              onPress={handleLoginButtonNavigation}
            >
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
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
    justifyContent: 'flex-start',
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

export default Signup;
