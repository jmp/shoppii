import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import CurrencyInput from '../input/CurrencyInput';
import Header from '../header/Header';

export default function App() {
  return (
    <React.Fragment>
      <View>
        <Header text="Shoppii" />
      </View>
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to Shoppii!</Text>
        <Text style={styles.instructions}>Enter some spendings:</Text>
        <CurrencyInput />
      </View>
    </React.Fragment>
  );
}
