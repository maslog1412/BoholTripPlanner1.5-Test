// GlobalHeader.js
import React from 'react';
import { View, Text, Pressable } from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import { SafeAreaView } from 'react-native-safe-area-context';
import globalHeaderStyles from './GlobalHeaderstyles';
const GlobalHeader = ({ showSearchIcon }) => {
  return (
    <SafeAreaView style={globalHeaderStyles.header}>
      <View style={globalHeaderStyles.logoContainer}>
        <FontAwesome5Icon name="walking" size={40} color="green"/>
        <Text style={globalHeaderStyles.logoText}>Bohol Trip Planner</Text>
      </View>

      {showSearchIcon && (
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
      )}
    </SafeAreaView>
  );
};

export default GlobalHeader;
