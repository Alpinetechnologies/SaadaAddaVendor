import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import OrderStackNavigator from './OrderStackNavigator';
import CustomBottomTabbar from '../Components/CustomBottomTabbar';
import InventoryNavigator from '../navigators/InventoryNavigator';
import ReportsStackNavigator from '../navigators/ReportsStackNavigator';

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator
      tabBar={props => <CustomBottomTabbar {...props} />}
      tabBarOptions={{
        style: {
          height: 60,
        },
      }}>
      <Tab.Screen name="Orders" component={OrderStackNavigator} />
      <Tab.Screen name="Inventory" component={InventoryNavigator} />
      <Tab.Screen name="Reports" component={ReportsStackNavigator} />
      {/* <Tab.Screen name="More" component={Inventory} /> */}
    </Tab.Navigator>
  );
};

export default MyTabs;
