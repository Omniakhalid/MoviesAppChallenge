import React from 'react';
import {View, Image, TouchableOpacity, Text} from 'react-native';
import MoviesAPI from '../../constants/MoviesAPI';
import {styles} from './FavoriteItemStyle';
const FavoriteItem = ({MovieItm, RemoveFav}) => {
  const FavoriteMovieDeleted = () => RemoveFav(MovieItm);
  return (
    <View style={styles.Container}>
      <Image
        source={{uri: `${MoviesAPI.MovieImageURL}${MovieItm.poster_path}`}}
        style={styles.FavoriteImg}
      />
      <View>
        <Text style={styles.MovieTitle}>
          {MovieItm.title.length > 25
            ? (MovieItm.title = MovieItm.title.substring(0, 15))
            : MovieItm.title}
        </Text>
        <Text style={styles.MovieData}>
          Release Date: {MovieItm.release_date}
        </Text>
        <Text style={styles.MovieData}>Rates: {MovieItm.vote_average}</Text>
        <TouchableOpacity
          style={styles.RmButton}
          onPress={FavoriteMovieDeleted}>
          <Text style={styles.RemoveText}>🗑 Remove</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default FavoriteItem;
