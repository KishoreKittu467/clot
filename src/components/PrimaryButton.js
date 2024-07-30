import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from '../styles';

const PrimaryButton = ({onPress, text}) => {
  return (
    <TouchableOpacity
      style={{...styles.primaryBtn, marginTop: 20}}
      onPress={() => onPress()}>
      <Text style={{...styles.btnTextPrimary, color: '#fff'}}>{text}</Text>
    </TouchableOpacity>
  );
};

export default PrimaryButton;
