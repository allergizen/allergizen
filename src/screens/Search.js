import React from 'react';
import Globals from '../assets/Globals.js';
import Colors from '../components/Colors';

import { View, StyleSheet, Text, Image } from 'react-native';
import { SearchBar } from 'react-native-elements';



export default class Search extends React.Component {
   state = {
      search: '',
   };

   updateSearch = (search) => {
      this.setState({ search });
   };

   render() {
      const { search } = this.state;

      return (
         <View style={styles.screen}>
            <View stylex={styles.SearchView}>
               <Text style={styles.title}>Cerca</Text>
            </View>
            <View style={styles.productArea}>
               <SearchBar
                  placeholder="Cerca qui..."
                  onChangeText={this.updateSearch}
                  inputContainerStyle={{ backgroundColor: 'white' }}
                  leftIconContainerStyle={{ backgroundColor: 'white' }}
                  inputStyle={{ backgroundColor: 'white' }}
                  containerStyle={{
                     backgroundColor: 'white',
                     justifyContent: 'space-around',
                     borderTopWidth: 0,
                     borderBottomWidth: 0,
                  }}
                  value={search}
                  platform='default'
               />
            </View>
         </View>
      );
   }
}



const styles = StyleSheet.create({
   screen: {
      flex: 1,
      flexDirection: 'column',
   },
   SearchView: {
      backgroundColor: Colors.background,
      flex: 2,
      flexDirection: 'column',
      paddingHorizontal: Globals.css.HorizontalPaddingView,
   },
   productArea: {
      backgroundColor: Colors.background,
      flex: 10,
      marginTop: -45,
   },
   title: {
      fontSize: 40,
      marginVertical: 50,
      paddingHorizontal: Globals.css.HorizontalPaddingView,
      fontWeight: 'bold'
   },

   h1: { fontSize: 20 },


});
