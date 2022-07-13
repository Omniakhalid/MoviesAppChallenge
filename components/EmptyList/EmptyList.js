import React from 'react';
import {Image, Text, View} from 'react-native';
import {styles} from './EmptyListStyle';
const EmptyList = () => {
  return (
    <View style={styles.Container}>
      <Image
        style={styles.Image}
        source={{
          uri: 'https://www.pngall.com/wp-content/uploads/2018/06/Cinema-Transparent.png',
        }}
      />
      <Text style={styles.Text}>Your Favorite List is Empty</Text>
      <Text style={styles.FavText}>Pick up your Favorite Movies</Text>
    </View>
  );
};
export default EmptyList;
