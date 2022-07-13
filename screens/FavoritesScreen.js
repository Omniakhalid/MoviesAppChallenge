import React, {useState, useEffect} from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FavoriteItem from '../components/FavoriteItem/FavoriteItem';
import EmptyList from '../components/EmptyList/EmptyList';
import Colors from '../constants/Colors';
const FavoritesScreen = () => {
  const [favorites, setFavorites] = useState([]);
  const fetchMovies = async () => {
    let favoriteMovies = await AsyncStorage.getItem('@Favorites');
    favoriteMovies = JSON.parse(favoriteMovies);
    setFavorites(favoriteMovies);
  };
  useEffect(() => {
    fetchMovies().catch(console.error);
    console.log('++++++++++++++++++++ favorite');
  }, []);
  const removeMovie = async movie => {
    try {
      let alteredMovies = favorites.filter(e => e.id !== movie.id);
      await AsyncStorage.setItem('@Favorites', JSON.stringify(alteredMovies));
      setFavorites(alteredMovies);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.Body}>
      {favorites.length > 0 ? (
        <FlatList
          data={favorites}
          keyExtractor={item => item.id}
          renderItem={({item}) => {
            return <FavoriteItem MovieItm={item} RemoveFav={removeMovie} />;
          }}
        />
      ) : (
        <EmptyList />
      )}
    </View>
  );
};
export default FavoritesScreen;
const styles = StyleSheet.create({
  Body: {backgroundColor: Colors.body, flex: 1},
});
