import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import CircleButton from './circle-button';
import { pad } from './utils';


function Counter ({ maximum, minimum, initial, onChange }) {
  const [value, setValue] = React.useState(initial);

  function decrement() {
    if (value > minimum) {
      const newValue = value - 1;
      onChange(newValue);
      setValue(newValue);
    }
  }

  function increment() {
    if (value < maximum) {
      const newValue = value + 1;
      onChange(newValue);
      setValue(newValue);
    }
  }

  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <CircleButton onPress={increment} icon="plus" color="#C7F464" iconColor="#556270" />
      <Text style={{
        fontSize: 48,
        color: '#556270',
        marginVertical: 15,
      }}>{pad(value, 2)}</Text>
      <CircleButton onPress={decrement} icon="minus" color="#C7F464" iconColor="#556270" />
    </View>
  );
}



export default Counter;
