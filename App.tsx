/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {SafeAreaView} from 'react-native';
import LoginScreen from './src/Loginscreen/LoginScreen';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
      <LoginScreen />
    </SafeAreaView>
  );
}

export default App;
