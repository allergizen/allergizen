import React from 'react';
import {
   KeyboardAvoidingView,
   StyleSheet,
   Text,
   View,
   TextInput,
   TouchableOpacity,
} from 'react-native';

const Login = () => {
   return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
         <View style={styles.inputContainer}>
            <TextInput placeholder="Email" style={styles.input} />
            <TextInput placeholder="Password" style={styles.input} secureTextEntry />
         </View>

         <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={() => {}} style={styles.button}>
               <Text style={styles.textAsBtn}>Forgot password?</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {}} style={styles.button}>
               <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            <Text style={styles.text}>or</Text>
            <TouchableOpacity onPress={() => {}} style={styles.button}>
               <Text style={styles.buttonText}>Login with google</Text>
            </TouchableOpacity>

            <Text style={styles.text}>New here?</Text>
            <TouchableOpacity onPress={() => {}} style={styles.button}>
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
      width: '100%',
      padding: 15,
      borderRadius: 10,
      backgroundColor: '#F9DF9F',
      marginTop: 5,
   },
   textAsBtn: {
      color: '#F9DF9F',
   },
   buttonText: {},
   text: {},
   textAsBtn: {
      color: '#F9DF9F',
   },
   buttonText: {},
   text: {},
});
