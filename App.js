import React from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './HomeScreen';
import PinnedScreen from './PinnedScreen';
import TripScreen from './TripScreen';
import OverviewScreen from './OverviewScreen';
import GlobalHeader from './GlobalHeader';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: 'black',
          tabBarLabelStyle: {
            fontSize: 14,
          },
          tabBarStyle: [
            {
              display: 'flex',
            },
            null,
          ],
        }}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Pinned" component={PinnedScreen}/>
          <Tab.Screen name="Trip" component={TripScreen}/>
          <Tab.Screen name="Overview" component={OverviewScreen}/>
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
