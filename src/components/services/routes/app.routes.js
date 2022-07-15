import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import NavigationBar from '../../NavigationBar';
import RegisterWorker from '../../pages/Workers/RegisterWorker/index';
import Description from '../../pages/Workers/RegisterWorker/description';
import { ChangePassword } from '../../pages/Settings/changePassword'; 
import Profile from '../../pages/Profile/Profile';

const AppStack = createStackNavigator();

const AppRoutes = () => (
  <AppStack.Navigator>
    <AppStack.Screen name="NavigationBar" component={NavigationBar} />
    <AppStack.Screen name="RegisterWorker" component={RegisterWorker} />
    <AppStack.Screen name="Description" component={Description} />
    <AppStack.Screen name="ChangePassword" component={ChangePassword} />
    <AppStack.Screen name="Profile" component={Profile} />
  </AppStack.Navigator>
);

export default AppRoutes;