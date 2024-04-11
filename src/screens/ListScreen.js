// Ejemplo para src/screens/PhotoListScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PhotoListScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Listado de Fotos</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PhotoListScreen;
