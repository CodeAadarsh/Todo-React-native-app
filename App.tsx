/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import HomePage from './src/screens/HomePage';
import SplashScreen from './src/screens/SplashScreen';
import AppNavigator from './src/components/AppNavigator';



function App(){
 
  return (
    <AppNavigator/>
  );
}


export default App;
