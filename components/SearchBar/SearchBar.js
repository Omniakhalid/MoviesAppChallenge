import React from 'react';
import {TextInput, View} from 'react-native';
import {styles} from './SearchBarStyle';
const SearchBar = ({search, setSearch}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search"
        placeholderTextColor="#ccc"
        value={search}
        onChangeText={setSearch}
      />
    </View>
  );
};
export default SearchBar;
