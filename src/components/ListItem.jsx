/* eslint-disable prettier/prettier */
import {Feather} from '@expo/vector-icons';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { weatherType } from '../utilities/weatherType';
import moment from 'moment';

const ListItem = props => {
  const {dt_txt, min, max, condition} = props;
  const { item, date, temp, dateTextWrap} = styles;
  return (
    <View style={item}>
      <Feather name={weatherType[condition].icon} size={50} color={'black'} />
      <View style={dateTextWrap}>
        <Text style={date}>{moment(dt_txt).format('dddd')}</Text>
        <Text style={date}>{moment(dt_txt).format('h:mm:ss a')}</Text>
      </View>
      <Text style={temp}>{`${Math.round(min)}°/${Math.round(max)}°`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'darkgray',
    borderRadius: 20,
    backgroundColor: 'indianred',
  },
  temp: {
    color: 'white',
    fontSize: 20,
  },
  date: {
    color: 'white',
    fontSize: 15,
  },
  dateTextWrap: {
    flexDirection: 'column',
  },
});

export default ListItem;
