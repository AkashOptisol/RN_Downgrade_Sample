/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import BrandDemo from './src/components/BrandDemo';
import {config} from './src/config';

const App = () => {
  return (
    <SafeAreaView
      style={{flex: 1, backgroundColor: config.theme.secondaryColor}}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={config.theme.secondaryColor}
      />
      <BrandDemo />
    </SafeAreaView>
  );
};

export default App;
