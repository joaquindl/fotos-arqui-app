// src/navigation/BottomTabNavigator.js
import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
// Screens
import HomeScreen from '../screens/HomeScreen';
import ListScreen from '../screens/ListScreen';
import PhotoUploadScreen from '../screens/PhotoUploadScreen';
import UserProfileScreen from '../screens/UserProfileScreen';

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({ children, onPress }) => (
  <TouchableOpacity
    style={styles.customButton}
    onPress={onPress}>
    <View style={styles.customButtonView}>
      {children}
    </View>
  </TouchableOpacity>
);

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false, // Esto oculta el encabezado para todas las pantallas
        tabBarActiveTintColor: '#007AFF'
      }}
    >
      <Tab.Screen
        name="Map"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Mapa',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="map" color={color} size={size} />
          ),
        }}
      />
      {/* <Tab.Screen
        name="List"
        component={ListScreen}
        options={{
          tabBarLabel: 'Listado',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="format-list-bulleted" color={color} size={size} />
          ),
        }}
      /> */}
      <Tab.Screen
        name="Upload"
        component={PhotoUploadScreen}
        options={{
          tabBarLabel: () => null,
          // tabBarShowLabel: false,
          tabBarIcon: ({ size }) => (
            <MaterialCommunityIcons name="camera" color='white' size={size} />
          ),
          tabBarButton: (props) => (
            <CustomTabBarButton {...props} />
          ),
        }}
      />
      <Tab.Screen
        name="User"
        component={UserProfileScreen}
        options={{
          tabBarLabel: 'Perfil',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  customButton: {
    top: -10, // Ajusta esto para cambiar cuánto sobresale el botón
    justifyContent: 'center',
    alignItems: 'center',
    // ...Otros estilos para el botón, como sombras para el efecto flotante
  },
  customButtonView: {
    width: 70, // Ajusta el tamaño del círculo
    height: 70,
    borderRadius: 30,
    backgroundColor: '#007AFF',
    // ...Otros estilos para el círculo, como sombras para el efecto flotante
  },
})

export default BottomTabNavigator;
