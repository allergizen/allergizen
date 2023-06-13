import React from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native';

const Login = () => {
   return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
         <View style={styles.inputContainer}>
            <TextInput placeholder="Email" style={styles.input} />
            <TextInput placeholder="Password" style={styles.input} secureTextEntry />
         </View>
         <View style={styles.buttonContainer}>
            <touchableOpacity onPress={() => {}} style={styles.button}>
               <Text style={styles.buttonText}>Login</Text>
            </touchableOpacity>
         </View>
         <Text>Login</Text>
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
});
