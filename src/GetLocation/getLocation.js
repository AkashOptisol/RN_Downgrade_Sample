import React, {useEffect, useState} from 'react';
import {View, Text, PermissionsAndroid, Platform, Alert} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import {getLocales} from 'react-native-localize';

const getCountryFromLatLon = (latitude, longitude) => {
  if (latitude >= 49 && latitude <= 61 && longitude >= -10 && longitude <= 2)
    return 'United Kingdom';
  if (latitude >= 24 && latitude <= 49 && longitude >= -125 && longitude <= -66)
    return 'United States';
  if (latitude >= 36 && latitude <= 47 && longitude >= 6 && longitude <= 18)
    return 'Italy';
  return 'Unknown Region';
};

const requestLocationPermission = async () => {
  const locales = getLocales();
  console.log('Locales -->', locales);
  if (Platform.OS === 'android') {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );

      if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
        Alert.alert('Permission Denied', 'Location permission is required.');
        return false;
      }
      return true;
    } catch (err) {
      console.warn(err);
      return false;
    }
  }
  return true;
};

const App = () => {
  const [country, setCountry] = useState('Detecting...');

  useEffect(() => {
    const fetchLocation = async () => {
      const hasPermission = await requestLocationPermission();
      if (!hasPermission) return;

      Geolocation.getCurrentPosition(
        position => {
          const {latitude, longitude} = position.coords;
          console.log('latitude -->', latitude, longitude);
          const detectedCountry = getCountryFromLatLon(latitude, longitude);
          setCountry(detectedCountry);
        },
        error => {
          console.log('Location Error:', error);
          Alert.alert('Error', 'Unable to fetch location.');
        },
        {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
      );
    };

    fetchLocation();
  }, []);

  return (
    <View>
      <Text>User Country: {country}</Text>
    </View>
  );
};

export default App;
