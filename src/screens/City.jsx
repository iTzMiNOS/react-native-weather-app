/* eslint-disable prettier/prettier */
import React from 'react';
import {ImageBackground, SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import IconText from '../components/IconText';

const City = () => {
  const { container, city, image, citytext, country, popwrap, poptext, rstext, rswrap, rowLayout} = styles;
    return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={require('../../assets/city-bg.jpg')}
        style={image}
      >
        <Text style={[city, citytext]}>London</Text>
        <Text style={[country, citytext]}>UK</Text>
        <View style={[popwrap, rowLayout]}>
            <IconText name={'user'} size={50} color={'red'} text="8000" style={poptext} />
        </View>
        <View style={[rswrap, rowLayout]}>
            <IconText name={'sunrise'} size={50} color={'white'} text="10:46:58am" style={rstext} />
            <IconText name={'sunset'} size={50} color={'white'} text="17:28:15pm" style={rstext} />
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
