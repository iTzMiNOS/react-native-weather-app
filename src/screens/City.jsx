/* eslint-disable prettier/prettier */
import { Feather } from '@expo/vector-icons';
import React from 'react';
import {ImageBackground, SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';

const City = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground 
        source={require('../../assets/city-bg.jpg')}
        style={styles.image}
      >
        <Text style={[styles.city, styles.citytext]}>London</Text>
        <Text style={[styles.country, styles.citytext]}>UK</Text>
        <View style={styles.popwrap}>
            <Feather name="user" size={50} color={'red'} />
            <Text style={styles.poptext}>8000</Text>
        </View>
        <View style={styles.rswrap}>
            <Feather name="sunrise" size={50} color={'white'} />
            <Text style={styles.rstext}>10:46:58am</Text>
            <Feather name="sunset" size={50} color={'white'} />
            <Text style={styles.rstext}>17:28:15pm</Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    image: {
        flex: 1,
    },
    citytext: {
        color: 'white',
        justifyContent: 'center',
        alignSelf: 'center',
        fontWeight: 'bold',
    },
    country: {
        fontSize: 30,
    },
    city: {
        fontSize: 40,
    },
    popwrap: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
    },
    poptext: {
        fontSize: 25,
        marginLeft: 7.5,
        color: 'red',
        fontWeight: 'bold',
    },
    rswrap: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: 30,
    },
    rstext: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
    },
});

export default City;
