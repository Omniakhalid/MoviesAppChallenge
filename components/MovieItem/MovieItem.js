import {View, Text, Image} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {styles} from './MovieItemStyle';
import MoviesAPI from '../../constants/MoviesAPI';
const MovieItem = ({MovieItm, MovieClicked, Clicked = false}) => {
  const FavoriteMovieAdded = () => MovieClicked(MovieItm);
  return (
    <View style={styles.Container}>
      <View style={styles.MovieBody}>
        <Image
          style={styles.MovieImage}
          source={{uri: `${MoviesAPI.MovieImageURL}${MovieItm.backdrop_path}`}}
        />
        <View style={styles.MovieRow}>
          <Text style={styles.MovieTitle}>
            {MovieItm.title.length > 37
              ? (MovieItm.title = MovieItm.title.substring(0, 33))
              : MovieItm.title}
          </Text>
          <TouchableOpacity
            style={Clicked ? styles.ActivatedFav : styles.FavoriteButton}
            onPress={FavoriteMovieAdded}>
            <Text style={styles.HeartIcon}>♡</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default MovieItem;
