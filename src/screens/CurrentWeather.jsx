/* eslint-disable prettier/prettier */
import {Feather} from '@expo/vector-icons';
import React from 'react';
import {Text, View, StyleSheet, SafeAreaView} from 'react-native';
import RowText from '../components/RowText';
import { weatherType } from '../utilities/weatherType';

const CurrentWeather = ({weatherData}) => {
  const {wrapper, container, tmp, feel, hilo, hilowrap,bodywrap, desc, message } = styles;
  const {main: { temp, feels_like, temp_max, temp_min}, weather} = weatherData;
  const weatherCondition = weather[0].main;
  return (
    <SafeAreaView style={[wrapper, {backgroundColor: weatherType[weatherCondition].backgroundColor}]}>
      <View style={container}>
        <Feather name={weatherType[weatherCondition].icon} size={100} color="black" />
        <Text style={tmp}>{Math.round(temp)}</Text>
        <Text style={feel}>{`Feels like ${Math.round(feels_like)}`}</Text>
        <RowText wrapStyle={hilowrap} text1={`High: ${Math.round(temp_max)}`} text1s={hilo} text2={`Low: ${Math.round(temp_min)}`} text2s={hilo} />
      </View>
      <RowText wrapStyle={bodywrap} text1={weather[0].description} text1s={desc} text2={weatherType[weatherCondition].message} text2s={message} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tmp: {
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
    fontSize: 40,
  },
  message: {
    color: 'black',
    fontSize: 30,
  },
});

export default CurrentWeather;
