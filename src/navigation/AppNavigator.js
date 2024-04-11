import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabNavigator from './BottomTabNavigator'; // Importa tu BottomTabNavigator
// Screens
import HomeScreen from '../screens/HomeScreen'
import ListScreen from '../screens/ListScreen'; // Asegúrate de importar desde la ubicación correcta

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator
        screenOptions={{
            headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={BottomTabNavigator} />
      <Stack.Screen name="Map" component={HomeScreen} />
      <Stack.Screen name="ListScreen" component={ListScreen} />
      {/* Puedes agregar más pantallas de Stack aquí según sea necesario */}
    </Stack.Navigator>
  );
};

export default AppNavigator;