import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const Header = (props) => {
  const { text } = props;
  const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{text}</Text>
    </View>
  );
};

Header.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Header;
