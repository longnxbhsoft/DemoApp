import React from 'react';
import link from '../../links/links';
import {WebView} from 'react-native-webview';
const SupportScreen = () => {
  return <WebView source={{uri: link.link2}} />;
};
export default SupportScreen;
