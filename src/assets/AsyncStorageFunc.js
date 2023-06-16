import AsyncStorage from '@react-native-async-storage/async-storage';

const storeDataJSON = async (value, key) => {
   if (value != null) {
      try {
         const jsonValue = JSON.stringify(value);
         await AsyncStorage.setItem(key, jsonValue);
      } catch (e) {
         // saving error
      }
   }
};

const storeDataString = async (value, key) => {
   if (value != null) {
      try {
         await AsyncStorage.setItem(key, value);
      } catch (e) {
         // saving error
      }
   }
};

const getDataString = async (key) => {
   try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
         // value previously stored
      }
   } catch (e) {
      // error reading value
   }
};

const getDataJSON = async (key) => {
   try {
      const jsonValue = await AsyncStorage.getItem(key);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
   } catch (e) {
      // error reading value
   }
};

module.exports = { storeDataJSON, storeDataString, getDataString, getDataJSON };
//productHistory
