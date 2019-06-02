import 'react-native';
import renderer from 'react-test-renderer';
import React from 'react';
import App from '../App';
import Header from '../../header/Header';

it('renders correctly', () => {
  renderer.create(<App />);
});

it('renders a <Header /e', () => {
  const tree = renderer.create(<App />);
  expect(tree.root.findByType(Header)).toBeTruthy();
});
