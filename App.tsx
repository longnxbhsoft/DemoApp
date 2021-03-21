/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {create} from 'react-test-renderer';
import reduxStore from './src/redux';
import RegisterScreen from './src/container/Registerscreen';
import redux from './src/redux';
import {createStore} from 'redux';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from 'react-redux';
import Bottomtab from './src/components/BottomTab';
import SupportScreen from './src/container/Supportscreen';
import {NavigationContainer} from '@react-navigation/native';
declare const global: {HermesInternal: null | {}};
let store = createStore(reduxStore);
store.subscribe(() => {
  console.log('state Update', store.getState());
});

export enum ScreenName {
  Home = 'Home',
  SupportScreen = 'SupportScreen',
  RegisterScreen = 'RegisterScreen',
}

const Stack = createStackNavigator();
const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName={ScreenName.SplashScreen}>
          <Stack.Screen name={ScreenName.Home} children={Bottomtab} />
          <Stack.Screen
            name={ScreenName.SupportScreen}
            component={SupportScreen}
          />
          <Stack.Screen
            name={ScreenName.RegisterScreen}
            component={RegisterScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({});

export default App;
