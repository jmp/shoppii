import React from 'react';
import { Text, View } from 'react-native';
import Styles from './styles';
import CurrencyInput from '../input/CurrencyInput';

export default function App() {
  return (
    <View style={Styles.container}>
      <Text style={Styles.welcome}>Welcome to React Native!</Text>
      <Text style={Styles.instructions}>To get started, edit App.js</Text>
      <CurrencyInput />
    </View>
  );
}
