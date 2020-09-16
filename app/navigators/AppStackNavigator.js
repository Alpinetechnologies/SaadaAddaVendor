import React from 'react';
import {
  createStackNavigator,
  TransitionPresets,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import TermsScreen from '../Screens/MainScreens/TermsScreen/TermsScreen';
import AppBottomTabNavigator from './AppBottomTabNavigator';

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

const AppStackNavigator = () => (
  <Stack.Navigator
    initialRouteName="Dashboard"
    screenOptions={{
      headerShown: false,
      gestureEnabled: true,
      gestureDirection: 'horizontal',
      transitionSpec: {
        open: config,
        close: closeConfig,
      },
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    }}>
    <Stack.Screen name="Dashboard" component={AppBottomTabNavigator} />
  </Stack.Navigator>
);

export default AppStackNavigator;
