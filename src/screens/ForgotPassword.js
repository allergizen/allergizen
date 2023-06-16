import React from 'react';
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import Globals from '../assets/Globals.js';

import TextInput from 'react-native-textinput-with-icons';
import Colors from '../components/Colors.js';

//checkLoginIn();
const Login = ({ navigation }) => {
  // per andare alla pagina di Signup

  function handleLoginButtonNavigation() {
    navigation.navigate('Login');
  }
  function handleSignupButtonNavigation() {
    navigation.navigate('Signup');
  }

  return (
    <View style={styles.container} behavior='padding'>
      <Text style={[styles.title, { alignSelf: 'baseline' }]}>
        Forgot Password
      </Text>
      <View style={styles.inputContainer}>
        <TextInput leftIcon='mail' style={styles.input} />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => {
            console.log('send email');
          }}
          style={styles.button}
        >
          <Text>Send Email</Text>
        </TouchableOpacity>
        <View
          style={{
            paddingVertical: 15,
            flexDirection: 'row-reverse',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
          }}
        >
          <TouchableOpacity onPress={handleLoginButtonNavigation}>
            <Text style={styles.textAsBtn}>Back to Login</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleSignupButtonNavigation}>
            <Text style={styles.textAsBtn}>Back to Signup</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: Globals.css.HorizontalPaddingView,
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
  inputContainer: {
    marginLeft: 15,
    width: '80%',
    marginRight: '10%',
  },
  input: {
    backgroundColor: '#fff',
    paddingVertical: 17,
    borderRadius: 10,
    marginTop: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 40,
    bottom: 100,
  },
  textAsBtn: {
    color: '#DAAF53',
    fontWeight: 'bold',
    textAlign: 'right',
  },
});
