import { StyleSheet, Text, View, TextInput } from 'react-native';
import React from 'react';

const Search = () => {
  return (
    <>
      <TextInput
        style={{
          height: 45,
          width: '95%',
          borderColor: 'gray',
          borderWidth: 2,
        }}
        placeholder='Search'
        underlineColorAndroid='transparent'
      />
    </>
  );
};

const styles = StyleSheet.create({});

export default Search;
