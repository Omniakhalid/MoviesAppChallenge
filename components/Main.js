import React from 'react';
import FavoritesScreen from '../screens/FavoritesScreen';
import HomeScreen from '../screens/HomeScreen';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Colors from '../constants/Colors';
const Drawer = createDrawerNavigator();
const Main = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: Colors.DarkGray},
        headerTintColor: 'white',
        drawerActiveBackgroundColor: Colors.gray,
        drawerActiveTintColor: Colors.white,
        drawerInactiveTintColor: Colors.textColor,
        drawerStyle: {backgroundColor: Colors.DarkGray},
      }}>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Favorites" component={FavoritesScreen} />
    </Drawer.Navigator>
  );
};
export default Main;
