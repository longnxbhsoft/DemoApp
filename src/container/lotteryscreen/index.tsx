import React from 'react';
import link from '../../links/links';
import {WebView} from 'react-native-webview';
const Lotteryscreen = () => {
  return <WebView source={{uri: link.link4}} />;
};
export default Lotteryscreen;
