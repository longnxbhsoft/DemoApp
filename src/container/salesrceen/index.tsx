import React from 'react';
import link from '../../links/links';
import {WebView} from 'react-native-webview';
const SaleScreen = () => {
  return <WebView source={{uri: link.link3}} />;
};
export default SaleScreen;
