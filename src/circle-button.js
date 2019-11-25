import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import {
  TouchableOpacity,
} from 'react-native';


function CircleButton(props) {
  const { icon, size=56, color='black', iconColor='white' } = props;
  return (
    <TouchableOpacity
      {...props}
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor: color,
      }}>
      <FontAwesome name={icon} size={size / 2} color={iconColor} />
    </TouchableOpacity>
  )
}

export default CircleButton;
