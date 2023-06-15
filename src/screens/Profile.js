import {
   View,
   Text,
   StyleSheet,
   SafeAreaView,
   Image,
   Button,
   TouchableOpacity,
   ScrollView,
} from 'react-native';
import React from 'react';

import Colors from '../components/Colors';
import Globals from '../assets/Globals';
import ProfileLinkScreenCard from '../components/ProfileLinkScreenCard';

const Profile = () => {
   return (
      <SafeAreaView style={styles.screen}>
         <View style={styles.profile}>
            <Text style={styles.title}>Profile</Text>
         </View>
         <View style={{ flex: 10, marginTop: 30 }}>
            <View style={styles.info}>
               <View style={styles.infoView}>
                  <Image source={require('../assets/images/icon.png')} style={styles.profileIcon} />
                  <View
                     style={{
                        flexDirection: 'column',
                        height: '100%',
                        paddingTop: 5,
                     }}>
                     <Text style={[styles.h1]}>Nicola Preda</Text>
                     <Text style={[styles.text]}>nicola.preda05@gmail.com</Text>
                     <TouchableOpacity style={styles.buttonStyle}>
                        <Text style={{ fontWeight: 500 }}>Modifica</Text>
                     </TouchableOpacity>
                  </View>
               </View>
            </View>
            <View style={styles.screenLink}>
               <ScrollView>
                  <ProfileLinkScreenCard iconName={'virus-outline'} nameScreen="Allergie" />
                  <ProfileLinkScreenCard iconName={'cog-outline'} nameScreen="Impostazioni" />
                  <ProfileLinkScreenCard
                     iconName={'information-outline'}
                     nameScreen="Informazioni"
                  />
                  <ProfileLinkScreenCard iconName={'help-circle-outline'} nameScreen="Aiuto" />
               </ScrollView>
            </View>

            <TouchableOpacity style={styles.logoutStyle}>
               <Text style={styles.logoutTextStyle}>Logout</Text>
            </TouchableOpacity>
         </View>
      </SafeAreaView>
   );
};

const styles = StyleSheet.create({
   screen: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: Colors.background,
      paddingHorizontal: Globals.css.HorizontalPaddingView + 10,
      paddingVertical: Globals.css.VerticalPaddingView + 10,
      paddingBottom: Globals.css.VerticalPaddingView + 50,
   },
   profile: {
      justifyContent: 'flex-end',
      flex: 1,
   },

   info: {
      justifyContent: 'flex-end',
      paddingHorizontal: Globals.css.HorizontalPaddingView / 2,
      flex: 2,
   },
   infoView: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      maxHeight: 100,
   },
   productArea: {
      flex: 10,
   },
   title: { fontSize: 35, fontWeight: '700' },
   h1: { fontSize: 20, fontWeight: '600' },
   text: {},
   buttonStyle: {
      borderRadius: 7,
      backgroundColor: Colors.idk,
      justifyContent: 'center',
      alignItems: 'center',
      alignContent: 'flex-end',
      marginTop: 5,
      maxWidth: 120,
      minHeight: 22,
      opacity: 0.75,
   },
   profileIcon: {
      width: 80,
      height: 80,
      borderRadius: 50,
      borderWidth: 2,
      borderColor: '#d3d3d3',
   },
   screenLink: { flex: 8, paddingTop: 30, paddingHorizontal: 10 },
   screenCard: { height: 60, backgroundColor: Colors.profileScreenCard, borderRadius: 8 },
   logoutStyle: {
      borderRadius: 10,
      backgroundColor: Colors.profileScreenCard,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
   },
   logoutTextStyle: { fontSize: 18, color: Colors.red },
});

export default Profile;
