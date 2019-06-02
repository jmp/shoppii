import 'react-native';
import renderer from 'react-test-renderer';
import React from 'react';
import HomeScreen from '../HomeScreen';

it('renders correctly', () => {
  renderer.create(<HomeScreen />);
});
