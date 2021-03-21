import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';

const Widths = Dimensions.get('window').width;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  view1: {
    width: Widths,
    height: '40%',
    backgroundColor: 'white',
  },
  view2: {
    width: Widths,
    height: '60%',
    backgroundColor: 'white',
  },
  viewImage: {
    justifyContent: 'center',
  },
  logo: {
    width: '80%',
    height: '100%',
    alignSelf: 'center',
  },
  button: {
    width: '70%',
    height: '18%',
    backgroundColor: '#D69241',
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 40,
    marginVertical: 15,
  },
  button1: {
    width: '70%',
    height: '18%',
    backgroundColor: '#2c8aa6',
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 40,
    marginVertical: 15,
  },
  button2: {
    width: '70%',
    height: '18%',
    borderColor: '#2c8aa6',
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 40,
    borderWidth: 2,
    marginVertical: 15,
  },
  text_button: {
    alignSelf: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
  },
  text_button2: {
    alignSelf: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    color: '#2c8aa6',
  },
});
export default styles;
