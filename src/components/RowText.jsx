/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, View } from 'react-native';

const RowText = (props) => {
  const { wrapStyle, text1, text1s, text2, text2s} = props;
  return (
    <View style={wrapStyle}>
        <Text style={text1s}>{text1}</Text>
        <Text style={text2s}>{text2}</Text>
    </View>
  );
};

export default RowText;
