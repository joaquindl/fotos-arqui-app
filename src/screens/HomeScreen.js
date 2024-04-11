import React, { useState, useEffect, useRef} from 'react'
import { View, StyleSheet, Dimensions, Platform, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { useNavigation } from '@react-navigation/native'; // Importa el hook useNavigation
import * as Location from 'expo-location';
// Components
import SearchBar from '../components/SearchBar';

const HomeScreen = () => {
    const [location, setLocation] = useState(null);
    const mapRef = useRef(null);

    useEffect(() => {
        let locationSubscription;
    
        const subscribeToLocationUpdates = async () => {
            let {status} = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                console.error('Permission to access location was denied');
                return;
            }
    
            locationSubscription = await Location.watchPositionAsync({
                accuracy: Location.Accuracy.High,
                timeInterval: 1000, // Update every second
                distanceInterval: 1, // Update every meter
            }, (location) => {
                console.log(location);
                setLocation(location);
                if (location) {
                    mapRef.current?.animateToRegion({
                        latitude: location.coords.latitude,
                        longitude: location.coords.longitude,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }, 1000);
                }
            });
        };
    
        subscribeToLocationUpdates();
    
        return () => {
            if (locationSubscription) {
                locationSubscription.remove();
            }
        }
    }, []);
    


    const navigation = useNavigation(); // Correctamente invoca el hook useNavigation

    const handleListIconPress = () => {
        navigation.navigate('ListScreen'); // Utiliza el objeto navigation
    };

    return (
        <View style={styles.container}>
            {/* <SearchBar placeholder={"Buscar..."} /> */}
            <SearchBar
                placeholder="Buscar..."
                onListIconPress={handleListIconPress}
            />
            <MapView style={styles.map}
            initialRegion={{
                latitude: location?.coords?.latitude ?? 37.78825,
                longitude: location?.coords?.longitude ?? -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}
            showsUserLocation={true}
            followsUserLocation={true}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
});

export default HomeScreen
