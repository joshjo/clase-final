import React from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import Counter from './counter';
import { formatTime } from './utils';
import CircleButton from './circle-button';


class Timer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      clock: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  start = () => {
    const { minutes, seconds } = this.state;

    const totalSeconds = minutes * 60 + seconds;

    this.setState({ clock: totalSeconds }, () => {
      this.interval = setInterval(() => {
        this.setState({ clock: this.state.clock - 1 });
      }, 1000);
    });
  }

  stop = () => {
    this.setState({ clock: 0 });
    clearInterval(this.interval);
  }

  componentDidUpdate() {
    if (this.state.clock === 0) {
      clearInterval(this.interval);
    }
  }

  render() {
    const { clock, minutes, seconds } = this.state;

    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <View style={{
          flexDirection: 'row',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <Counter
            minimum={0}
            maximum={60}
            initial={minutes}
            onChange={(minutes) => this.setState({ minutes })}
          />
          <Counter
            minimum={0}
            maximum={60}
            initial={seconds}
            onChange={(seconds) => this.setState({ seconds })}
          />
        </View>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          { clock > 0 ? (
            <CircleButton onPress={this.stop} size={100} icon="stop" iconColor="white" color="#C44D58" />
          ) : (
            <CircleButton onPress={this.start} size={100} icon="play" iconColor="white" color="#556270" />
          ) }
          <Text
            style={{
              marginVertical: 16,
              fontSize: 56,
              color: '#556270',
            }}
          >{formatTime(clock)}</Text>
        </View>
      </View>
    );
  }
}

export default Timer;
