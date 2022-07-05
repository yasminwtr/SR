import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import NavigationBar from '../../../NavigationBar';
import RegisterWorker from '../../RegisterWorker';
import Description from '../../RegisterWorker/description';

const AppStack = createStackNavigator();

const AppRoutes = () => (
  <AppStack.Navigator>
    {/* <AppStack.Screen name="Dashboard" component={Dashboard} /> */}
    <AppStack.Screen name="NavigationBar" component={NavigationBar} />
    <AppStack.Screen name="RegisterWorker" component={RegisterWorker} />
    <AppStack.Screen name="Description" component={Description} />
  </AppStack.Navigator>
);

export default AppRoutes;