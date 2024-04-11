// // src/components/SearchBar.js
// import React from 'react';
// import { TextInput, StyleSheet } from 'react-native';

// const SearchBar = ({ placeholder }) => {
//   return (
//     <TextInput 
//       placeholder={placeholder}
//       style={[styles.searchBar, styles.input]}
//     />
//   );
// };

// const styles = StyleSheet.create({
//   searchBar: {
//     height: 40,
//     margin: 20,
//     borderWidth: 1,
//     padding: 10,
//     borderRadius: 20,
//     borderColor: '#ccc',
//     backgroundColor: '#fff',
//     position: 'absolute',
//     top: 40,
//     left: '5%',
//     right: '5%',
//     zIndex: 5,
//   },
//   input: {
//     paddingLeft: 20,
//   }
// });

// export default SearchBar;



// src/components/SearchBar.js
import React from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const SearchBar = ({ placeholder, onListIconPress }) => {
  return (
    <View style={styles.searchContainer}>
      <TextInput 
        placeholder={placeholder}
        style={styles.searchBar}
      />
      <TouchableOpacity onPress={onListIconPress} style={styles.listIcon}>
        <MaterialCommunityIcons name="format-list-bulleted" size={24} color="black" />
      </TouchableOpacity>
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
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 6,
    marginLeft: 10,
    // Añade sombras según tu diseño
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
    elevation: 4,
  }
});

export default SearchBar;
