/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import * as Location from 'expo-location';
import {API} from '@env';

export const useGetWeather = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  const [weather, setWeather] = React.useState({});
  const [lat, setLat] = React.useState({});
  const [lon, setLon] = React.useState({});

  const fetchAPI = async () => {
    try {
      const res = await fetch(
        `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API}&units=metric`,
      );
      const data = await res.json();
      setWeather(data);
    } catch (e) {
      setError("Couldn't fetch weather");
      throw e;
    } finally {
      setIsLoading(false);
    }
  };
  React.useEffect(() => {
    (async () => {
      let {status} = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setError('Permission to access location was denied');
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      setLat(location.coords.latitude);
      setLon(location.coords.longitude);
      await fetchAPI();
    })();
  }, [lat,lon]);
  return [isLoading,error,weather];
};
