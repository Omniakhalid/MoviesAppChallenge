import {StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';
export const styles = StyleSheet.create({
  Container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  FavText: {color: Colors.textColor, fontWeight: 'bold', fontSize: 18},
  Text: {color: Colors.textColor, fontSize: 16, margin: 5},
  Image: {
    height: 240,
    width: 300,
    resizeMode: 'cover',
    alignSelf: 'center',
  },
});
