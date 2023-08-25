/* eslint-disable prettier/prettier */
import React from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text } from 'react-native';

const DATA = [
  {
    "dt": 1661875200,
    "main": {
      "temp_min": 296.34,
      "temp_max": 298.24,
    },
    "weather": [
      {
        "main": "Rain",
      }
    ]
  },
  {
    "dt": 1661878800,
    "main": {
      "temp_min": 296.2,
      "temp_max": 296.31,
    },
    "weather": [
      {
        "main": "Cloudy",
      }
    ]
  },
  {
    "dt": 1661882400,
    "main": {
      "temp_min": 292.84,
      "temp_max": 294.94,
    },
    "weather": [
      {
        "main": "Sunny",
      }
    ]
  },
]
const UpcomingWeather = () => {
  return (
    <SafeAreaView style={styles.container} >
        <Text>Upcoming Weather</Text>
        <FlatList 
          data={DATA}
          renderItem={}

        />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})

export default UpcomingWeather;
