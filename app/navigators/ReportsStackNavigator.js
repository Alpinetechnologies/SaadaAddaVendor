import React from 'react';
import {
  createStackNavigator,
  TransitionPresets,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import {Easing} from 'react-native';
import ReportsScreen from '../Screens/MainScreens/Reports/ReportsScreen';

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

const ReportsStackNavigator = () => (
  <Stack.Navigator
    initialRouteName="Orders"
    screenOptions={{
      gestureEnabled: true,
      gestureDirection: 'horizontal',
      transitionSpec: {
        open: config,
        close: closeConfig,
      },
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    }}>
    <Stack.Screen name="Reports" component={ReportsScreen} />
  </Stack.Navigator>
);

export default ReportsStackNavigator;
