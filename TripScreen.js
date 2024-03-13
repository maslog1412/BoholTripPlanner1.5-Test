// TripScreen.js
import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import GlobalHeader from './GlobalHeader'; // Adjust the path based on the actual location of your GlobalHeader.js file

const TripScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <GlobalHeader showSearchIcon={false} />
      <View style={styles.container}>
        <Text style={styles.text}>Welcome to Bohol Trip Planner!</Text>
      </View>
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

export default TripScreen;
