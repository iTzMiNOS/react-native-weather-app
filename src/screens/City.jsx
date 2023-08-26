/* eslint-disable prettier/prettier */
import React from 'react';
import {ImageBackground, SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import IconText from '../components/IconText';
import moment from 'moment';

const City = ({weatherData}) => {
  const { container, city, image, citytext, countrys, popwrap, poptext, rstext, rswrap, rowLayout} = styles;
  const { name, country, population, sunrise, sunset} = weatherData;
  return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={require('../../assets/city-bg.jpg')}
        style={image}
      >
        <Text style={[city, citytext]}>{name}</Text>
        <Text style={[countrys, citytext]}>{country}</Text>
        <View style={[popwrap, rowLayout]}>
            <IconText name={'user'} size={50} color={'red'} text={`Population: ${population}`} style={poptext} />
        </View>
        <View style={[rswrap, rowLayout]}>
            <IconText name={'sunrise'} size={50} color={'white'} text={moment(sunrise).format('h:mm:ss a')} style={rstext} />
            <IconText name={'sunset'} size={50} color={'white'} text={moment(sunset).format('h:mm:ss a')} style={rstext} />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
    countrys: {
        fontSize: 30,
    },
    city: {
        fontSize: 40,
    },
    popwrap: {
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
        justifyContent: 'space-around',
        marginTop: 30,
    },
    rstext: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
    },
    rowLayout: {
        flexDirection: 'row',
        alignItems: 'center',
    },
});

export default City;
