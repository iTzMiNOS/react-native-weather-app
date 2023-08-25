/* eslint-disable prettier/prettier */
import { Feather } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const IconText = (props) => {
  const {name, size, color, text, style} = props;
  return (
    <View style={styles.container}>
        <Feather name={name} size={size} color={color} />
        <Text style={style}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
});

export default IconText;
