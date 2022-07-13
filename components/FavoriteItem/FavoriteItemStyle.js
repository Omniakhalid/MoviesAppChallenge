import {StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';
export const styles = StyleSheet.create({
  Container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginHorizontal: 15,
    marginTop: 15,
    backgroundColor: Colors.DarkGray,
    borderRadius: 20,
  },
  FavoriteImg: {
    height: 150,
    width: 150,
    resizeMode: 'cover',
    borderRadius: 20,
  },
  MovieTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
    padding: 10,
    color: Colors.white,
  },
  MovieData: {
    fontSize: 16,
    paddingLeft: 10,
    color: '#CCC',
  },
  RmButton: {
    paddingHorizontal: 8,
    padding: 6,
    marginTop: 15,
    borderRadius: 10,
    color: Colors.white,
    backgroundColor: '#B2050E',
    alignSelf: 'flex-end',
  },
  RemoveText: {color: 'white', fontWeight: 'bold'},
});
