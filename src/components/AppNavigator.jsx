import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from '../screens/SplashScreen';
import HomePage from '../screens/HomePage';
import LoginPage from '../screens/LoginPage';
const Stack = createStackNavigator();
const AppNavigator = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='SplashScreen'>
            <Stack.Screen name='Splash' component={SplashScreen} options={{headerShown:false}}/>
            <Stack.Screen name='HomePage' component={HomePage} options={{headerShown:false}}/>
            <Stack.Screen name='LoginPage' component={LoginPage} options={{headerShown:false}}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator

const styles = StyleSheet.create({})