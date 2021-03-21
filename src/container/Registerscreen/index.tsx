import React from 'react';
import link from '../../links/links';
import {WebView} from 'react-native-webview';
const RegisterScreen = () => {
  return <WebView source={{uri: link.link1}} />;
};
export default RegisterScreen;
