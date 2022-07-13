import React, {useState} from 'react';
import SearchBar from '../components/SearchBar/SearchBar';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import useMovies from '../hooks/useMovies';
import MovieItem from '../components/MovieItem/MovieItem';
import AsyncStorage from '@react-native-async-storage/async-storage';
import useSearch from '../hooks/useSearch';
import {MenuProvider} from 'react-native-popup-menu';
import FilterOptions from '../components/FilterOptions/FilterOptions';
import Colors from '../constants/Colors';

const HomeScreen = () => {
  const [filterOption, setFilterOption] = useState('popular');
  const handleChange = option => setFilterOption(option);
  const {data, isLoading, isSuccess} = useMovies(filterOption);
  const [search, setSearch] = useState('');
  const {SearchData} = useSearch(search);
  const [favorites, setFavorites] = useState([]);
  const handleSearch = e => setSearch(e);
  const saveToLocalStorage = async items => {
    try {
      await AsyncStorage.setItem('@Favorites', JSON.stringify(items));
    } catch (error) {}
  };

  // const addFavoriteMovie = movie => {
  //   const fav = favorites.filter(f => f.id !== movie.id);
  //   const newFavoriteList = [...fav, movie];
  //   setFavorites(newFavoriteList);
  //   //setClick(true);
  //   saveToLocalStorage(newFavoriteList);
  //   console.log(newFavoriteList);
  // };

  const addFavoriteMovie = movie => {
    if (!favorites.includes(movie)) {
      const newFavoriteList = [...favorites, movie];
      setFavorites(newFavoriteList);
      saveToLocalStorage(newFavoriteList);
    }
  };

  return (
    <MenuProvider>
      <View style={styles.Body}>
        <View style={styles.FilterSearch}>
          <SearchBar search={search} setSearch={handleSearch} />
          <FilterOptions HandleOption={handleChange} />
        </View>
        {isLoading && <Text style={styles.Load}>Loading...</Text>}
        {isSuccess && (
          <View>
            <FlatList
              data={search.length > 2 ? SearchData : data}
              keyExtractor={item => item.id}
              renderItem={({item}) => {
                return (
                  <MovieItem MovieItm={item} MovieClicked={addFavoriteMovie} />
                );
              }}
            />
          </View>
        )}
      </View>
    </MenuProvider>
  );
};
export default HomeScreen;
const styles = StyleSheet.create({
  FilterSearch: {flexDirection: 'row'},
  Body: {backgroundColor: Colors.body, flex: 1},
  Load: {color: Colors.gray, alignSelf: 'center'},
});
