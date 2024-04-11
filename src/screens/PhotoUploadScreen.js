import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PhotoUploadScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Carga tu foto</Text>
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

export default PhotoUploadScreen;
