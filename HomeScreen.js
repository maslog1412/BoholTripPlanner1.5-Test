// HomeScreen.js
import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GlobalHeader from './GlobalHeader';

const Stack = createNativeStackNavigator();

const HomeScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <GlobalHeader showSearchIcon={true} />
    </SafeAreaView>
  );
};

export default HomeScreen;
