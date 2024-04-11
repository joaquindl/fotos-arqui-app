import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, Dimensions, TouchableOpacity, ActivityIndicator } from 'react-native';
import MapView from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';
import * as Location from 'expo-location';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import SearchBar from '../components/SearchBar';

const HomeScreen = () => {
    const [location, setLocation] = useState(null);
    const [initialRegion, setInitialRegion] = useState(null);
    const [loading, setLoading] = useState(true);  // Add loading state
    const mapRef = useRef(null);

    useEffect(() => {
        const subscribeToLocationUpdates = async () => {
            let {status} = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                console.error('Permission to access location was denied');
                setLoading(false);  // Set loading false even if permission is denied
                return;
            }
    
            let currentLocation = await Location.getCurrentPositionAsync({
                accuracy: Location.Accuracy.Balanced,
                timeout: 5000
            });
            if (currentLocation) {
                const newRegion = {
                    latitude: currentLocation.coords.latitude,
                    longitude: currentLocation.coords.longitude,
                    latitudeDelta: 0.005,
                    longitudeDelta: 0.005,
                };
                setInitialRegion(newRegion);
                setLocation(currentLocation);
                setLoading(false);  // Set loading to false after setting the region
            }
        };
    
        subscribeToLocationUpdates();
    }, []);

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

    const navigation = useNavigation();

    if (loading) {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }



    return (
        <View style={styles.container}>
            <SearchBar placeholder="Buscar..." />
            <MapView 
                style={styles.map}
                ref={mapRef}
                initialRegion={initialRegion}
                showsUserLocation={true}
                showsCompass={false}
                rotateEnabled = {false}
            />
            <TouchableOpacity
                style={styles.centerButton}
                onPress={centerMapOnUser}
            >
                <MaterialCommunityIcons name="crosshairs-gps" size={24} color="black" />
            </TouchableOpacity>
        </View>
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
