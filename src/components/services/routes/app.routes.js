import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import NavigationBar from '../../NavigationBar';
import RegisterWorker from '../../pages/RegisterWorker';
import Description from '../../pages/RegisterWorker/description';
import { ChangePassword } from '../../pages/Settings/changePassword'; 

const AppStack = createStackNavigator();

const AppRoutes = () => (
  <AppStack.Navigator>
    <AppStack.Screen name="NavigationBar" component={NavigationBar} />
    <AppStack.Screen name="RegisterWorker" component={RegisterWorker} />
    <AppStack.Screen name="Description" component={Description} />
    <AppStack.Screen name="ChangePassword" component={ChangePassword} />
  </AppStack.Navigator>
);

export default AppRoutes;