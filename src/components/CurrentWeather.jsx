/* eslint-disable prettier/prettier */
import {Feather} from '@expo/vector-icons';
import React from 'react';
import {Text, View, StyleSheet, SafeAreaView} from 'react-native';

const CurrentWeather = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Text>Current Weather</Text>
        <Feather name="sun" size={100} color="black" />
        <Text style={styles.temp}>6</Text>
        <Text style={styles.feel}>Feels like 5</Text>
        <View style={styles.hilowrap}>
          <Text style={styles.hilo}>High: 8</Text>
          <Text style={styles.hilo}>Low: 6</Text>
        </View>
      </View>
      <View style={styles.bodywrap}>
        <Text style={styles.desc}>It&apos;s Sunny</Text>
        <Text style={styles.message}>It&apos;s perfect t-shirt weather</Text>
      </View>
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
