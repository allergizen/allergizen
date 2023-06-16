import React, { useState, useEffect, useRef } from 'react';
import {
   Text,
   View,
   StyleSheet,
   Button,
   TouchableOpacity,
   Image,
   Dimensions,
   ScrollView,
} from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { Camera, CameraType } from 'expo-camera';
import api from '../api/api.js';
import { useFocusEffect } from '@react-navigation/native';

import * as Animatable from 'react-native-animatable';
import Svg, { Defs, G, LinearGradient, Path, SvgUri } from 'react-native-svg';
import { Shadow } from 'react-native-shadow-2';

const AnimatableScrollView = Animatable.createAnimatableComponent(ScrollView);

const ScanBorderTopLeft = (props) => (
   <Svg
      viewBox='0 0 110 110'
      height={35}
      width={35}
      fill='none'
      stroke='white'
      strokeWidth={20}
      strokeLinecap='round'
      {...props}>
      <Path d='M10 100V80Q10 10 80 10h20M10 100Z' />
   </Svg>
);

const ScanBorderTopRight = (props) => (
   <Svg
      viewBox='0 0 110 110'
      height={35}
      width={35}
      fill='none'
      stroke='white'
      strokeWidth={20}
      strokeLinecap='round'
      {...props}>
      <Path d='M10 10H30Q100 0 100 80V100M10 10Z' />
   </Svg>
);
const NutriscoreA = (props) => {
   console.log(props);
   return (
      <SvgUri
         uri={`https://static.openfoodfacts.org/images/attributes/nutriscore-${props.id}.svg`}
         {...props}></SvgUri>
   );
};

const ScanBorderBottomRight = (props) => (
   <Svg
      viewBox='0 0 110 110'
      height={35}
      width={35}
      fill='none'
      stroke='white'
      strokeWidth={20}
      strokeLinecap='round'
      {...props}>
      <Path d='M100 10V30Q100 100 30 100H10M100 10Z' />
   </Svg>
);

const ScanBorderBottomLeft = (props) => (
   <Svg
      viewBox='0 0 110 110'
      height={35}
      width={35}
      fill='none'
      stroke='white'
      strokeWidth={20}
      strokeLinecap='round'
      {...props}>
      <Path d='M100 100H80Q10 100 10 30V10M100 100Z' />
   </Svg>
);

const AddIcon = (props) => (
   <Svg width={25} height={25} fill='none' viewBox='0 0 24 24' {...props}>
      <Path
         fill='#73d216'
         fillRule='evenodd'
         d='M2 4.5C2 3.1 3.1 2 4.5 2h15C20.9 2 22 3.1 22 4.5v15c0 1.4-1.1 2.5-2.5 2.5h-15A2.5 2.5 0 012 19.5v-15zm10.5 1c.6 0 1 .4 1 1v4h4c.6 0 1 .4 1 1v1c0 .6-.4 1-1 1h-4v4c0 .6-.4 1-1 1h-1a1 1 0 01-1-1v-4h-4a1 1 0 01-1-1v-1c0-.6.4-1 1-1h4v-4c0-.6.4-1 1-1h1z'
         clipRule='evenodd'
      />
   </Svg>
);

const CrossIcon = (props) => (
   <Svg width={25} height={25} fill='#c00' viewBox='0 0 32 32' {...props}>
      <Path d='M18.8 16l5.5-5.5c.8-.8.8-2 0-2.8-.3-.4-.8-.7-1.3-.7a2 2 0 00-1.4.6L16 13.2l-5.5-5.5c-.8-.8-2.1-.8-2.8 0-.4.3-.7.8-.7 1.4s.2 1 .6 1.4l5.5 5.5-5.5 5.5c-.3.4-.6.9-.6 1.5 0 .5.2 1 .6 1.4.4.4.9.6 1.4.6.5 0 1-.2 1.4-.6l5.5-5.5 5.5 5.5c.8.8 2.1.8 2.8 0 .8-.8.8-2.1 0-2.8L18.8 16z' />
   </Svg>
);

const CheckIcon = (props) => (
   <Svg viewBox='0 0 24 24' width={25} height={25} {...props}>
      <Path fill='none' stroke='#73d216' strokeLinecap='round' strokeWidth='2' d='M5 12l5 5 9-9' />
   </Svg>
);

const QuestionIcon = (props) => (
   <Svg fill='#edd400' stroke='#edd400' viewBox='-64 0 512 512' width={25} height={25}>
      <Path d='M202 0C122 0 71 33 30 91c-7 11-5 25 5 33l43 33c11 7 25 6 33-5 26-31 44-49 83-49 31 0 69 20 69 50 0 22-19 34-49 51-35 20-82 44-82 106v10c0 13 11 24 24 24h72c13 0 24-11 24-24v-6c0-43 126-44 126-160C378 66 287 0 202 0zm-10 373a69 69 0 100 139 69 69 0 000-139z' />
   </Svg>
);

export default function App() {
   const screenHeight = Dimensions.get('screen').height;

   const [hasPermission, setHasPermission] = useState(null);
   const [scanned, setScanned] = useState(false);
   const [dati, setDati] = useState(null);

   const [cameraStatus, setCameraStatus] = useState(false);
   const [resultY, setResultY] = useState(screenHeight);
   const [snapAnim, setSnapAnim] = useState(null);
   const [isFromTop, setIsFromTop] = useState(false);

   const cameraRef = useRef();

   useFocusEffect(() => {
      setCameraStatus(true);
      return () => setCameraStatus(false);
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
      cameraRef.current.pausePreview();
      setSnapAnim({ 0: { top: screenHeight }, 1: { top: 0.3 * screenHeight } });

      console.log(data);
      //carica data su firebase

      api.from_barcode(data).then((res) => {
         // alert(`Bar code with type ${type} and data ${data} has been scanned!\n${dati}`);
         if (res.status === 0) {
            setScanned(false);
            cameraRef.current.resumePreview();
            setSnapAnim(null);
            return;
         }

         setDati(res);
      });
   };

   const handleDrag = (e) => {
      let result = e.nativeEvent.pageY / screenHeight;

      if (result < 0.1) result = 0.1;
      else if (result > 0.7) result = 0.7;

      setResultY(result * screenHeight);
   };

   const handleRelease = (e) => {
      let pos = resultY / screenHeight;
      let pippo = isFromTop ? 0.2 : 0.6;

      if (pos > pippo) {
         pos = 1;
         setIsFromTop(false);
         setScanned(false);
         setDati(null);
         cameraRef.current.resumePreview();
      } else {
         pos = 0.1;
         setIsFromTop(true);
      }

      setSnapAnim({ 0: { top: resultY }, 1: { top: pos * screenHeight } });
      setResultY(pos * screenHeight);
   };

   const scriviAllergeni = (allergens, color) => {
      const allergeni = api.translate_allergens(allergens);
      const userAllergens = api.get_allergens(allergens);

      if (allergeni.length === 0) return 'Nessuno trovato';

      return (
         <Text>
            {allergeni.map((el, i) => {
               if (userAllergens.includes(el))
                  return (
                     <>
                        <Text style={{ color: color, fontWeight: 'bold' }}>{el}</Text>
                        {i + 1 === allergeni.length ? '' : ', '}
                     </>
                  );
               else
                  return (
                     <>
                        {el}
                        {i + 1 === allergeni.length ? '' : ', '}
                     </>
                  );
            })}
         </Text>
      );
   };

   if (hasPermission === null) {
      return <Text>Requesting for camera permission</Text>;
   }
   if (hasPermission === false) {
      return <Text>No access to camera</Text>;
   }

   return (
      <View style={[styles.container, { backgroundColor: 'black' }]}>
         {cameraStatus || Platform.OS === 'ios' ? (
            // <></>
            <Camera
               onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
               ratio='16:9'
               style={StyleSheet.absoluteFillObject}
               type={CameraType.back}
               barCodeTypes={[
                  BarCodeScanner.Constants.BarCodeType.ean13,
                  BarCodeScanner.Constants.BarCodeType.ean8,
               ]}
               ref={cameraRef}
            />
         ) : null}

         <Animatable.View
            animation={scanned ? backgroundScan : null}
            duration={500}
            style={
               scanned
                  ? {
                       transition: 'all .2s ease',
                       backgroundColor: '#00000999',
                       height: '100%',
                       width: '100%',
                       flex: 1,
                       flexDirection: 'column',
                       justifyContent: 'center',
                       alignItems: 'center',
                    }
                  : {
                       backgroundColor: '#00000000',
                       height: '100%',
                       width: '100%',
                       flex: 1,
                       flexDirection: 'column',
                       justifyContent: 'center',
                       alignItems: 'center',
                       transition: 'all .2s ease',
                    }
            }>
            {!scanned && (
               <Text style={{ color: 'white', fontWeight: 'bold', marginBottom: 15 }}>
                  INQUADRA UN CODICE A BARRE
               </Text>
            )}
            <View style={styles.rectangle}>
               <ScanBorderTopLeft style={styles.svgTopLeft}></ScanBorderTopLeft>
               <ScanBorderTopRight style={styles.svgTopRight}></ScanBorderTopRight>
               <ScanBorderBottomRight style={styles.svgBottomRight}></ScanBorderBottomRight>
               <ScanBorderBottomLeft style={styles.svgBottomLeft}></ScanBorderBottomLeft>
               <Animatable.View
                  style={scanned ? styles.bar : { visibility: 'hidden' }}
                  animation={scanned ? scan : null}
                  duration={2000}
                  iterationCount='infinite'></Animatable.View>
            </View>
         </Animatable.View>

         <Animatable.View
            animation={snapAnim}
            style={[styles.result, { top: resultY }]}
            duration={500}>
            <View
               style={styles.dragHitBox}
               onStartShouldSetResponder={() => {
                  setSnapAnim(null);
                  return () => true;
               }}
               onResponderMove={handleDrag}
               onResponderRelease={handleRelease}>
               <View style={styles.dragBar}></View>
            </View>

            {dati === null ? (
               <></>
            ) : (
               <>
                  <View style={styles.product}>
                     <Image
                        source={{ uri: dati.product.image_url }}
                        style={styles.img}
                        resizeMode='contain'></Image>
                     <View style={styles.info}>
                        <Text style={{ fontSize: 40, fontWeight: 'bold', marginBottom: -5 }}>
                           {dati.product.product_name}
                        </Text>
                        <Text style={{ fontSize: 25, color: 'gray' }}>{dati.product.brands}</Text>
                        <Shadow offset={[4, 10]}>
                           <View style={styles.resultview}>
                              {api.get_allergens(dati.product.allergens).length != 0 ? (
                                 <>
                                    <CrossIcon></CrossIcon>
                                    <Text>Allergie rilevate</Text>
                                 </>
                              ) : api.get_allergens(dati.product.traces).length === 0 ? (
                                 <>
                                    <CheckIcon></CheckIcon>
                                    <Text>Allergie non rilevate</Text>
                                 </>
                              ) : (
                                 <>
                                    <QuestionIcon></QuestionIcon>
                                    <Text>Possibili allergie</Text>
                                 </>
                              )}
                           </View>
                        </Shadow>

                        <TouchableOpacity
                           style={styles.savebutton}
                           onPress={() => alert('Aggiunto ai preferiti!')}>
                           <AddIcon></AddIcon>
                           <Text>Aggiungi ai preferiti</Text>
                        </TouchableOpacity>
                     </View>
                  </View>

                  <Text style={styles.infoHeader}>Allergeni</Text>
                  <Text style={styles.infoContent}>
                     {scriviAllergeni(dati.product.allergens, 'red')}
                  </Text>
                  <Text style={[styles.infoHeader, { top: 20 }]}>Ingredienti</Text>
                  <Text style={[styles.infoContent, { top: 20 }]}>
                     {dati.product.ingredients_text === ''
                        ? 'Non trovati '
                        : dati.product.ingredients_text}
                  </Text>
                  <Text style={[styles.infoHeader, { top: 40 }]}>Tracce</Text>
                  <Text style={[styles.infoContent, { top: 40 }]}>
                     {dati.product.traces === ''
                        ? 'Niente'
                        : scriviAllergeni(dati.product.traces, 'gold')}
                  </Text>
                  <Text style={[styles.infoHeader, { top: 50 }]}>Punteggio</Text>

                  <View style={styles.nutriScore}>
                     {/* <Image source={{uri: 'https://static.openfoodfacts.org/images/attributes/nutriscore-'+ dati.product.nutrition_grades === null  +'.svg' }} style={styles.img} resizeMode="contain"></Image> */}
                     {/* <Image source='https://static.openfoodfacts.org/images/attributes/nutriscore-d.svg' style={[styles.img, {width: 300, height: 100, position: 'relative'}]} resizeMode="contain"></Image> */}
                     <NutriscoreA
                        style={{ transform: 'scale(0.7)', top: 15, left: -17 }}
                        id={
                           dati.product.nutrition_grades != null
                              ? dati.product.nutrition_grades
                              : 'unknown'
                        }></NutriscoreA>
                     <View style={styles.nutriScoreInfo}>
                        <Text style={{ fontSize: 25, color: 'orange', fontWeight: 'bold' }}>
                           Nutri-Score{' '}
                           {dati.product.nutrition_grades != null
                              ? dati.product.nutrition_grades.toUpperCase()
                              : 'sconosciuto'}
                        </Text>
                        <Text>Qualità nutrizionale bassa</Text>
                     </View>
                  </View>
               </>
            )}
         </Animatable.View>
      </View>
   );
}

const borderSize = 5;
const rectWidth = 250;

const styles = StyleSheet.create({
   container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
   },
   rectangle: {
      width: rectWidth,
      height: 120,
      backgroundColor: '#ffffff50',
      borderRadius: 10,
      marginBottom: 150,
   },
   bar: {
      height: '90%',
      top: '5%',
      width: borderSize,
      backgroundColor: 'white',
      borderRadius: 10,
      zIndex: -1,
   },
   svgTopLeft: {
      position: 'absolute',
      left: -borderSize,
      top: -borderSize,
   },
   svgTopRight: {
      position: 'absolute',
      right: -borderSize,
      top: -borderSize,
   },
   svgBottomRight: {
      position: 'absolute',
      right: -borderSize,
      bottom: -borderSize,
   },
   svgBottomLeft: {
      position: 'absolute',
      left: -borderSize,
      bottom: -borderSize,
   },
   result: {
      padding: 10,
      flex: 1,
      flexDirection: 'column',
      position: 'absolute',
      borderRadius: 20,
      width: '100%',
      height: 1000,
      flex: 1,
      backgroundColor: 'white',
   },
   resultHeader: {
      fontWeight: 'bold',
      textAlign: 'center',
      fontSize: 30,
      color: 'white',
   },
   dragBar: {
      width: '50%',
      height: 7,
      backgroundColor: '#1d1d1f',
      borderRadius: 10,
   },
   dragHitBox: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      padding: 10,
      position: 'absolute',
      width: '100%',
      height: 75,
   },
   img: {
      // position: 'absolute',
      width: 150,
      height: 150,
      // borderRadius: 1,
      // top: 50,
      // left: 0
   },
   product: {
      display: 'flex',
      flexDirection: 'row',
      left: 2,
      gap: 10,
      height: 200,
      top: 30,
   },
   info: {
      display: 'flex',
      flexDirection: 'column',
      width: 190,
   },
   resultview: {
      width: 175,
      height: 35,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: 'white',
      borderRadius: 10,
      marginHorizontal: 5,
      gap: 5,
      paddingHorizontal: 5,
      marginTop: 10,
   },
   savebutton: {
      width: 175,
      height: 35,
      backgroundColor: 'white',
      marginHorizontal: 5,
      marginTop: 10,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      gap: 5,
      paddingHorizontal: 5,
   },
   infoHeader: {
      fontSize: 30,
      fontWeight: 'bold',
      left: 15,
   },
   infoContent: {
      marginHorizontal: 20,
   },
   nutriScore: {
      top: 20,
      left: 15,
      width: '90%',
      height: 100,
      backgroundColor: '#FFA50050',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      gap: -85,
      borderRadius: 10,
      top: 60,
   },
   nutriScoreInfo: {
      alignSelf: 'center',
   },
});

const scan = {
   // easing: 'ease',
   0: {
      left: 10,
   },
   0.5: {
      left: rectWidth - borderSize * 3,
   },
   1: {
      left: 10,
   },
};

const backgroundScan = {
   0: {
      backgroundColor: '#00000000',
   },
   1: {
      backgroundColor: '#00000999',
   },
};
