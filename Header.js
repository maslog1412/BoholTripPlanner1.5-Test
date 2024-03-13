// Header.js
import React from 'react';
import { View, Text, Pressable, TextInput } from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import { styles } from './styles'; // Import styles

const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.logoContainer}>
        <FontAwesome5Icon name="walking" size={40} color="green" style={styles.youtubeIcon} />
        <Text style={styles.logoText}>Bohol Trip Planner</Text>
      </View>

      <Pressable onPress={() => {}}>
        {({ pressed }) => (
          <View style={styles.iconContainer}>
            <FontAwesome5Icon
              name="search"
              size={24}
              color={pressed ? '#555' : '#000'}
              style={styles.searchIcon}
            />
          </View>
        )}
      </Pressable>
    </View>
  );
};

export default Header;
