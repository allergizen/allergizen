import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import api from '../api/api.js';

export default function App() {
   const [hasPermission, setHasPermission] = useState(null);
   const [scanned, setScanned] = useState(false);
   const [dati, setDati] = useState('');

   useEffect(() => {
      const getBarCodeScannerPermissions = async () => {
         const { status } = await BarCodeScanner.requestPermissionsAsync();
         setHasPermission(status === 'granted');
      };

      getBarCodeScannerPermissions();
   }, []);

   const handleBarCodeScanned = ({ type, data }) => {
      setScanned(true);

      api.from_barcode(data).then((res) => {
         // alert(`Bar code with type ${type} and data ${data} has been scanned!\n${dati}`);
         alert(res.product.product_name);
      });
   };

   if (hasPermission === null) {
      return <Text>Requesting for camera permission</Text>;
   }
   if (hasPermission === false) {
      return <Text>No access to camera</Text>;
   }

   return (
      <View style={styles.container}>
         <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            style={StyleSheet.absoluteFillObject}
         />
         {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
   },
});
