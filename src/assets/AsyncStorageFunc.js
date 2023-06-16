import AsyncStorage from '@react-native-async-storage/async-storage';

const storeDataJSON = async (key, value) => {
   if (value != null) {
      try {
         const jsonValue = JSON.stringify(value);
         await AsyncStorage.setItem(key, jsonValue);
         console.log('fatto');
      } catch (e) {
         console.log(e);
      }
   }
};

const storeDataString = async (key, value) => {
   if (value != null) {
      try {
         await AsyncStorage.setItem(key, value);
         console.log(key, value);
      } catch (e) {
         console.log(e);
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
      console.log(e);
   }
};

const getDataJSON = async (key) => {
   try {
      const jsonValue = await AsyncStorage.getItem(key);
      console.log(jsonValue);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
   } catch (e) {
      console.log(e);
   }
};
const mergeDataJSON = async (key, value) => {
   await AsyncStorage.mergeItem('@MyApp_user', JSON.stringify(USER_2));
};
module.exports = { storeDataJSON, storeDataString, getDataString, getDataJSON, mergeDataJSON };
//productHistory
