// src/components/SearchBar.js
import React from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
// Components
import IconButton from './IconButton';

const SearchBar = ({ placeholder }) => {
  const navigation = useNavigation();

  const onListIconPress = () => {
    navigation.navigate('ListScreen');
  };

  return (
    <View style={styles.searchContainer}>
      <TextInput 
        placeholder={placeholder}
        style={styles.searchBar}
      />
      <IconButton icon="format-list-bulleted" onPress={onListIconPress} style={styles.listIcon} />
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    top: 60,
    left: '5%',
    right: '5%',
    zIndex: 5,
  },
  searchBar: {
    height: 40,
    flex: 1,
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 20,
    borderColor: '#ccc',
    backgroundColor: '#fff',
  },
  listIcon: {
    padding: 6,
    marginLeft: 10,
  }
});

export default SearchBar;
