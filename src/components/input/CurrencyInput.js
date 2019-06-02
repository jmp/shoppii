import React from 'react';
import { TextInput } from 'react-native';
import Styles from './styles';

export default () => (
  <TextInput
    style={Styles.textInput}
    keyboardType="numeric"
  />
);
