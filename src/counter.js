import React from 'react';
import {
  View,
} from 'react-native';

function Counter ({ maximum, minimum, initial, onChange }) {
  const [value, setValue] = React.useState(initial);

  function decrement() {
    if (value > minimum) {
    }
  }

  function increment() {
    if (value < maximum) {
    }
  }

  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
    </View>
  );
}



export default Counter;
