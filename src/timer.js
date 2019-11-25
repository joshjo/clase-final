import React from 'react';
import { View } from 'react-native';



class Timer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
    this.interval = null;
  }

  start = () => {
  }

  stop = () => {
  }

  componentDidUpdate() {
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
      </View>
    );
  }
}

export default Timer;
