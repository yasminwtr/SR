import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
// import Dashboard from '../../DashBoard/index';
import NavigationBar from '../../../NavigationBar';

const AppStack = createStackNavigator();

const AppRoutes = () => (
  <AppStack.Navigator>
    {/* <AppStack.Screen name="Dashboard" component={Dashboard} /> */}
    <AppStack.Screen name="NavigationBar" component={NavigationBar} />
  </AppStack.Navigator>
);

export default AppRoutes;