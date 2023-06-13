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
               <Text style={styles.buttonText}>Forgot password?</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {}} style={styles.button}>
               <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            <Text style={styles.or}>OR</Text>
            <TouchableOpacity onPress={() => {}} style={styles.button}>
               <Text style={styles.buttonText}>Login with google</Text>
            </TouchableOpacity>

            <Text>New here?</Text>
            <TouchableOpacity onPress={() => {}} style={styles.button}>
               <Text style={styles.buttonText}>Register</Text>
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
});
