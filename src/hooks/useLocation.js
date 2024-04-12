// // src/hooks/useLocation.js
// import { useState, useEffect } from 'react';
// import * as Location from 'expo-location';

// const useLocation = () => {
//     const [location, setLocation] = useState(null);
//     const [errorMsg, setErrorMsg] = useState(null);

//     useEffect(() => {
//         (async () => {
//             let { status } = await Location.requestForegroundPermissionsAsync();
//             if (status !== 'granted') {
//                 setErrorMsg('Permission to access location was denied');
//                 return;
//             }

//             let currentLocation = await Location.getCurrentPositionAsync({
//                 accuracy: Location.Accuracy.Balanced,
//                 timeout: 5000
//             });
//             setLocation(currentLocation);
//         })();
//     }, []);

//     return { location, errorMsg };
// };

// export default useLocation;


import { useState, useEffect } from 'react';
import * as Location from 'expo-location';

const useLocation = (shouldTrack) => {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
        let locationSubscription;

        const subscribeToLocationUpdates = async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            locationSubscription = await Location.watchPositionAsync({
                accuracy: Location.Accuracy.Balanced,
                timeInterval: 10000, // Actualiza cada 10 segundos
                distanceInterval: 10, // Actualiza cada 10 metros
            }, setLocation);
        };

        if (shouldTrack) {
            subscribeToLocationUpdates();
        } else {
            if (locationSubscription) {
                locationSubscription.remove();
            }
            locationSubscription = null;
        }

        return () => {
            if (locationSubscription) {
                locationSubscription.remove();
            }
        };
    }, [shouldTrack]);

    return { location, errorMsg };
};

export default useLocation;
