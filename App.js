// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native'
// import HomeScreen from './src/screens/HomeScreen.js'

// export default function App() {
//   return (
//     <HomeScreen />
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './src/navigation/BottomTabNavigator.js'; // Ajusta esta ruta según sea necesario
import AppNavigator from './src/navigation/AppNavigator.js';

export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator />
      {/* <BottomTabNavigator /> */}
    </NavigationContainer>
  );
}

