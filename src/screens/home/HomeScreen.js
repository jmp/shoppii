import React from 'react';
import { Text, View } from 'react-native';
import CurrencyInput from '../../components/input/CurrencyInput';
import styles from './styles';

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome to Shoppii!</Text>
      <Text style={styles.instructions}>Enter some spendings:</Text>
      <CurrencyInput />
    </View>
  );
}

HomeScreen.navigationOptions = {
  title: 'Shoppii',
};

export default HomeScreen;
