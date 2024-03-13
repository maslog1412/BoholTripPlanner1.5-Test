import React from 'react';
import { StatusBar, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { styles } from './styles'; // Import external styles
import GlobalHeader from './GlobalHeader'; // Import the GlobalHeader component

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <GlobalHeader />
        {/* Add the rest of your content here */}
      </View>
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}
