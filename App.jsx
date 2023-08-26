/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Tabs from './src/components/Tabs';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import * as Location from 'expo-location';
import {API} from '@env';

const App = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  const [weather, setWeather] = React.useState({});
  const [lat,setLat] = React.useState({});
  const [lon,setLon] = React.useState({});

  const fetchAPI = async () => {
    try {
      const res = await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API}`)
      const data = await res.json()
      setWeather(data);
    } catch (e) {
        setError('Couldn\'t fetch weather');
        console.log('error');
        throw e;
    } finally {
      setIsLoading(false);
    }
  };
  React.useEffect(() => {
    (async() => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted'){
        setError('Permission to access location was denied');
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      console.log(location);
      setLat(location.coords.latitude);
      setLon(location.coords.longitude);
      await fetchAPI();
    })();
  }, [lat, lon]);

  if (weather){
    console.log(weather);
  }

  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size={'large'} color={'blue'} />
      </View>
    );
  }


  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
  },
});

export default App;
