/* eslint-disable prettier/prettier */
import React from 'react'
import { Text, View, Button, StyleSheet } from 'react-native';

const Counter = () => {
  const [count, setCount] = React.useState(0);
  const [count2, setCount2] = React.useState(0);
  React.useEffect(() => {
    console.log(`count: ${count}`);
  }, [count]);
  return (
    <View>
        <Text>{`count: ${count}`}</Text>
        <Button title={'+'} color={'green'} onPress={() => {setCount(count + 1)}}/>
        <Button title={'-'} color={'red'} onPress={() => {setCount(count - 1)}}/>
        <Button title={'+2'} color={'green'} onPress={() => {setCount2(count2 + 1)}}/>
        <Button title={'-2'} color={'red'} onPress={() => {setCount2(count2 - 1)}}/>
    </View>
  );
};

const styles = StyleSheet.create({
    
})

export default Counter;
