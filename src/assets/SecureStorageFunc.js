import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';
import * as SecureStore from 'expo-secure-store';

async function storeData(key, value) {
   if (value != null) {
      try {
         value = JSON.stringify(value);
      } catch (e) {}
      await SecureStore.setItemAsync(key, value);
   }
}

async function getValueFor(key) {
   let result = await SecureStore.getItemAsync(key);
   try {
      result = JSON.parse(jsonStringa);
   } catch (errore) {}
   if (result == null || result == undefined) return result;
}

module.exports = { storeData, getValueFor };
//productHistory
