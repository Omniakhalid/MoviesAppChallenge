import {StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';
export const styles = StyleSheet.create({
  Container: {
    marginHorizontal: 15,
    marginBottom: 10,
    backgroundColor: Colors.DarkGray,
    borderRadius: 20,
  },
  MovieImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 20,
  },
  MovieTitle: {fontSize: 16, fontWeight: 'bold', color: Colors.white},
  MovieBody: {marginBottom: 10},
  FavoriteButton: {
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: Colors.white,
  },
  ActivatedFav: {
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: 'red',
  },
  HeartIcon: {fontWeight: 'bold', fontSize: 20},
  MovieRow: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-between',
  },
});
