// GlobalHeader.js
import React from 'react';
import { View, Text, Pressable } from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import { SafeAreaView } from 'react-native-safe-area-context';
import { globalHeaderStyles } from './styles'; // Import global header styles

const GlobalHeader = () => {
  return (
    <SafeAreaView style={globalHeaderStyles.header}>
      <View style={globalHeaderStyles.logoContainer}>
        <FontAwesome5Icon name="walking" size={40} color="green" style={globalHeaderStyles.youtubeIcon} />
        <Text style={globalHeaderStyles.logoText}>Bohol Trip Planner</Text>
      </View>

      <Pressable onPress={() => {}}>
        {({ pressed }) => (
          <View style={globalHeaderStyles.iconContainer}>
            <FontAwesome5Icon
              name="search"
              size={24}
              color={pressed ? '#555' : '#000'}
              style={globalHeaderStyles.searchIcon}
            />
          </View>
        )}
      </Pressable>
    </SafeAreaView>
  );
};

export default GlobalHeader;
