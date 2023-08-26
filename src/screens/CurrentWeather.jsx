/* eslint-disable prettier/prettier */
import {Feather} from '@expo/vector-icons';
import React from 'react';
import {Text, View, StyleSheet, SafeAreaView} from 'react-native';
import RowText from '../components/RowText';
import { weatherType } from '../utilities/weatherType';

const CurrentWeather = () => {
  const {wrapper, container, temp, feel, hilo, hilowrap,bodywrap, desc, message } = styles;
  return (
    <SafeAreaView style={wrapper}>
      <View style={container}>
        <Feather name="sun" size={100} color="black" />
        <Text style={temp}>6</Text>
        <Text style={feel}>Feels like 5</Text>
        <RowText wrapStyle={hilowrap} text1={'High: 8'} text1s={hilo} text2={'Low: 6'} text2s={hilo} />
      </View>
      <RowText wrapStyle={bodywrap} text1={'It\'s Sunny'} text1s={desc} text2={'It\'s perfect t-shirt weather'} text2s={message} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'pink',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  temp: {
    color: 'black',
    fontSize: 48,
  },
  feel: {
    color: 'black',
    fontSize: 30,
  },
  hilo: {
    color: 'black',
    fontSize: 20,
  },
  hilowrap: {
    flexDirection: 'row',
  },
  bodywrap: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft: 25,
    marginBottom: 40,
  },
  desc: {
    color: 'black',
    fontSize: 48,
  },
  message: {
    color: 'black',
    fontSize: 38,
  },
});

export default CurrentWeather;
