import React, { useState, useRef } from 'react';
import { View, StyleSheet, Dimensions, ActivityIndicator, Keyboard, TouchableWithoutFeedback } from 'react-native';
import MapView from 'react-native-maps';
// Components
import SearchBar from '../components/SearchBar';
import IconButton from '../components/IconButton';
// Hooks
import useLocation from '../hooks/useLocation';

const HomeScreen = () => {
    const [isUserInteracting, setIsUserInteracting] = useState(false);
    const { location, errorMsg } = useLocation(!isUserInteracting);
    const mapRef = useRef(null);

    const centerMapOnUser = () => {
        if (location) {
            mapRef.current.animateToRegion({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                latitudeDelta: 0.005,
                longitudeDelta: 0.005,
            }, 1000);
        }
    };

    if (errorMsg) {
        return (
            <View style={styles.centered}>
                <Text>{errorMsg}</Text>
            </View>
        );
    }

    if (!location) {
        return (
            <View style={styles.centered}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accesible={false}>
            <View style={styles.container}>
                <SearchBar placeholder="Buscar..." />
                <MapView 
                    style={styles.map}
                    ref={mapRef}
                    initialRegion={{
                        latitude: location.coords.latitude,
                        longitude: location.coords.longitude,
                        latitudeDelta: 0.005,
                        longitudeDelta: 0.005,
                    }}
                    showsUserLocation={true}
                    showsCompass={false}
                    rotateEnabled = {false}
                    onPanDrag={() => setIsUserInteracting(true)}
                    onRegionChangeComplete={() => setIsUserInteracting(false)}
                />
                <IconButton icon="crosshairs-gps" onPress={centerMapOnUser} style={styles.centerButton} />
            </View>
        </TouchableWithoutFeedback>
        
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',  // Center the loading indicator
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    centerButton: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 1.5,
        elevation: 4,
    },
    compassButton: {
        position: 'absolute',
        right: 20,
        bottom: 80,  // Adjust based on your other UI elements
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 20,
        elevation: 3,
    },
});

export default HomeScreen;
