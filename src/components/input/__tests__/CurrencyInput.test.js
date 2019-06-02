import { TextInput } from 'react-native';
import renderer from 'react-test-renderer';
import React from 'react';
import CurrencyInput from '../CurrencyInput';

it('renders correctly', () => {
  renderer.create(<CurrencyInput />);
});

it('renders a <TextInput />', () => {
  const tree = renderer.create(<CurrencyInput />);
  expect(tree.root.findByType(TextInput)).toBeTruthy();
});
