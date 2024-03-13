// HomeScreen.js
import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GlobalHeader from './GlobalHeader'; // Adjust the path based on the actual location of your GlobalHeader.js file

const Stack = createNativeStackNavigator();

const HomeScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <GlobalHeader showSearchIcon={true} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
