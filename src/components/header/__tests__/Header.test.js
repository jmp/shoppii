import { Text } from 'react-native';
import renderer from 'react-test-renderer';
import React from 'react';
import Header from '../Header';

it('renders correctly', () => {
  renderer.create(<Header text="Test" />);
});

it('renders a <Text /> with text prop', () => {
  const tree = renderer.create(<Header text="Test" />);
  const text = tree.root.findByType(Text);
  expect(text.props.children).toEqual('Test');
});
