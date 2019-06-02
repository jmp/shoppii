import 'react-native';
import renderer from 'react-test-renderer';
import React from 'react';
import HomeScreen from '../HomeScreen';
import Header from '../../../components/header/Header';

it('renders correctly', () => {
  renderer.create(<HomeScreen />);
});

it('renders a <Header /> component', () => {
  const tree = renderer.create(<HomeScreen />);
  expect(tree.root.findByType(Header)).toBeTruthy();
});
