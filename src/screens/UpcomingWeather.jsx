/* eslint-disable prettier/prettier */
import React from 'react';
import { FlatList, ImageBackground, SafeAreaView, StatusBar, StyleSheet, Text } from 'react-native';
import ListItem from '../components/ListItem';


const DATA = [
  {
    'dt_txt': '2022-08-30 16:00:00',
    'main': {
      'temp_min': 296.34,
      'temp_max': 298.24,
    },
    'weather': [
      {
        'main': 'Rain',
      },
    ],
  },
  {
    'dt_txt': '2022-08-30 17:00:00',
    'main': {
      'temp_min': 296.2,
      'temp_max': 296.31,
    },
    'weather': [
      {
        'main': 'Cloudy',
      },
    ],
  },
  {
    'dt_txt': '2022-08-30 18:00:00',
    'main': {
      'temp_min': 292.84,
      'temp_max': 294.94,
    },
    'weather': [
      {
        'main': 'Sunny',
      },
    ],
  },
];

const UpcomingWeather = () => {
  const renderItem = ({item}) => (
    <ListItem
      condition={item.weather[0].main}
      dt_txt={item.dt_txt}
      min={item.main.temp_min}
      max={item.main.temp_max}
    />
  );
  const { container, image } = styles;
  return (
    <SafeAreaView style={container} >
        <ImageBackground
          source={require('../../assets/upcoming-bg.jpg')}
          style={image}
        >
          <Text>Upcoming Weather</Text>
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.dt}
          />
        </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        backgroundColor: 'gray',
    },
    image: {
      flex: 1,
    },
});

export default UpcomingWeather;
