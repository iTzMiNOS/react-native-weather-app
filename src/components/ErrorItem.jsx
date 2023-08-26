/* eslint-disable prettier/prettier */
import { Feather } from '@expo/vector-icons';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ErrorItem = () => {
  const {container, error} = styles;
  return (
    <View style={container}>
        <Text style={error}>Sorry something went wrong</Text>
        <Feather name={'frown'} size={100} color={'white'} />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
    },
    error: {
        fontSize: 30,
        color: 'white',
        marginHorizontal: 10,
        textAlign: 'center',
    },
})

export default ErrorItem;
