import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import Counter from './src/counter';
import Timer from './src/timer';


export default function App() {
  return (
    <View style={styles.container}>
      <Timer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
