import React from 'react';
import link from '../../links/links';
import {WebView} from 'react-native-webview';
const SoccerScreen = () => {
  return <WebView source={{uri: link.link5}} />;
};
export default SoccerScreen;
