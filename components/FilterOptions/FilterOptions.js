import React from 'react';
import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import {styles} from './FilterOptionsStyle';
const FilterOptions = ({HandleOption}) => {
  return (
    <View>
      <Menu>
        <MenuTrigger>
          <TouchableOpacity style={styles.Container}>
            <Text style={styles.filter}>Filter ∇</Text>
          </TouchableOpacity>
        </MenuTrigger>
        <MenuOptions>
          <MenuOption onSelect={() => HandleOption('popular')} text="Popular" />
          <MenuOption
            onSelect={() => HandleOption('top_rated')}
            text="Top Movies"
          />
          <MenuOption
            onSelect={() => HandleOption('upcoming')}
            text="Upcoming Movies"
          />
          <MenuOption
            onSelect={() => HandleOption('now_playing')}
            text="Now Playing Movies"
          />
        </MenuOptions>
      </Menu>
    </View>
  );
};
export default FilterOptions;
