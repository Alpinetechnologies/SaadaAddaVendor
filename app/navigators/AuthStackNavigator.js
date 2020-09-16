import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import SignInScreen from '../Screens/AuthScreens/SignInScreen/SignInScreen';
import ForgetPassworScreen from '../Screens/AuthScreens/ForgetPassword/ForgetPassword';
import SignUpScreen from '../Screens/AuthScreens/SignUpScreen/SignUpScreen';
import AppStackNavigator from './AppStackNavigator';

import { Easing } from 'react-native';
const config = {
  animation: 'timing',
  config: {
    duration: 300,
    easing: Easing.linear,
    stiffness: 1000,
    damping: 50,
    mass: 3,
    overshootClamping: false,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};
const closeConfig = {
  animation: 'timing',
  config: {
    duration: 300,
    easing: Easing.linear,
    stiffness: 1000,
    damping: 50,
    mass: 3,
    overshootClamping: false,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

const Stack = createStackNavigator();

export default function MainStackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="SignIn"
      screenOptions={{
        headerShown: false,

        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="Forget" component={ForgetPassworScreen} />
      <Stack.Screen name="App" component={AppStackNavigator} />
    </Stack.Navigator>
  );
}
