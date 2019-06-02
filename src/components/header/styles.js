import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  viewStyle: {
    backgroundColor: '#f8f8f8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    elevation: 3,
    shadowOpacity: 0.2,
    position: 'relative',
  },
  textStyle: {
    fontSize: 20,
  },
});
