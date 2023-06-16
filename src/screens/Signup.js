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

async function adddb(email, name, user) {
  try {
    await setDoc(doc(db, 'users', user), {
      nome: name,
      email: email,
      allergie: {
        glutine: false,
        crostacei: false,
        uova: false,
        pesce: false,
        arachidi: false,
        soia: false,
        latte: false,
        fruttaaguscio: false,
        sedano: false,
        senape: false,
        sesamo: false,
        anidridesolforosa: false,
        lupini: false,
        molluschi: false,
      },
    });
  } catch {
    console.log('error');
  }
}

const Signup = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmpassword, setConfirmPassword] = React.useState('');
  const [name, setName] = React.useState('');

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
          leftIcon='person-circle'
          style={styles.input}
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <TextInput
          leftIcon='mail'
          style={styles.input}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          leftIcon='lock-closed'
          style={styles.input}
          secureTextEntry
          value={password}
          onChangeText={(password) => setPassword(password)}
        />
        <TextInput
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
            <Text style={styles.textAsBtn}>Login</Text>
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
    justifyContent: 'start',
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
