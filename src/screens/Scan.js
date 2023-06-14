import React, { useState, useEffect, useRef } from 'react';
import { Text, View, StyleSheet, Button, Animated } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner'
import { Camera, CameraType } from 'expo-camera';
import api from '../api/api.js';
import { useFocusEffect } from '@react-navigation/native';

import * as Animatable from 'react-native-animatable';

import Svg, { Path } from "react-native-svg"

const ScanBorder = (props) => (
  <Svg
    viewBox="0 0 110 110"
    height={35}
    width={35}
    fill="none"
    stroke="white"
    strokeWidth={20}
    strokeLinecap='round'
    {...props}
  >
    <Path d="M10 100V80Q10 10 80 10h20M10 100Z" />
  </Svg>
)

export default function App() {
   const [hasPermission, setHasPermission] = useState(null);
   const [scanned, setScanned] = useState(false);
   const [dati, setDati] = useState('');

   const [cameraStatus, setCameraStatus] = useState(false)

   const cameraRef = useRef()

   useFocusEffect(() => {
      setCameraStatus(true)
      return () => setCameraStatus(false)
   });

   useEffect(() => {
      const getBarCodeScannerPermissions = async () => {
         const { status } = await BarCodeScanner.requestPermissionsAsync();
         setHasPermission(status === 'granted');
      };

      getBarCodeScannerPermissions();
   }, []);

   const handleBarCodeScanned = ({ type, data }) => {
      setScanned(true);
      cameraRef.current.pausePreview()

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
         {(cameraStatus || Platform.OS === 'ios')?
            <Camera
               onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
               ratio='16:9'
               style={StyleSheet.absoluteFillObject}
               type={CameraType.back}
               barCodeTypes={[
                  BarCodeScanner.Constants.BarCodeType.ean13,
                  BarCodeScanner.Constants.BarCodeType.ean8
               ]}
               ref={cameraRef}
            />
         : null}

         <Animatable.View animation={scanned ? backgroundScan : null} duration={500} style={scanned ? {transition: 'all .2s ease', backgroundColor: '#00000999', height: '100%', width: '100%', flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'} : {backgroundColor: '#00000000', height: '100%', width: '100%', flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', transition: 'all .2s ease'}}>
            {scanned && <Text style={{color: 'white', fontWeight: 'bold', marginBottom: 15}}>INQUADRA UN CODICE A BARRE</Text>}  
            <View style={styles.rectangle}>
               <ScanBorder style={styles.svgTopLeft}></ScanBorder>
               <ScanBorder style={styles.svgTopRight}></ScanBorder>
               <ScanBorder style={styles.svgBottomRight}></ScanBorder>
               <ScanBorder style={styles.svgBottomLeft}></ScanBorder>
               <Animatable.View style={scanned ? styles.bar : {visibility: 'hidden'}} animation={scanned? scan : null} duration={2000} iterationCount="infinite">
               </Animatable.View>
            </View>
            {scanned && <Button title={'Tap to Scan Again'} onPress={() => {setScanned(false); cameraRef.current.resumePreview()}} />}
         </Animatable.View>

      </View>
   );
}

const borderSize = 5
const rectWidth = 250

const styles = StyleSheet.create({
   container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
   },
   rectangle: {
      width: rectWidth,
      height: 120,
      backgroundColor: '#ffffff50',
      borderRadius: 10,
      marginBottom: 150
   },
   bar: {
      height: '90%',
      top: '5%',
      width: borderSize,
      backgroundColor: 'white',
      borderRadius: 10,
      zIndex: -1
   },
   svgTopLeft: {
      position: 'absolute',
      left: -borderSize,
      top: -borderSize
   },
   svgTopRight: {
      position: 'absolute',
      right: -borderSize,
      top: -borderSize,
      transform: 'rotate(90deg)'
   },
   svgBottomRight: {
      position: 'absolute',
      right: -borderSize,
      bottom: -borderSize,
      transform: 'rotate(180deg)'
   },
   svgBottomLeft: {
      position: 'absolute',
      left: -borderSize,
      bottom: -borderSize,
      transform: 'rotate(-90deg)'
   }
});

const scan = {
   // easing: 'ease',
   0: {
      left: 10,
   },
   0.5: {
      left: rectWidth - (borderSize * 3)
   },
   1: {
      left: 10,
   }
};

const backgroundScan = {
   0: {
      backgroundColor: '#00000000'
   },
   1: {
      backgroundColor: '#00000999'
   }
}