import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from '../../pages/SignIn/index';
import RegisterUser from '../../pages/RegisterUser/index';

const AuthStack = createStackNavigator();

const AuthRoutes = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen name="SignIn" component={SignIn} />
    <AuthStack.Screen name="RegisterUser" component={RegisterUser} />
  </AuthStack.Navigator>
);

export default AuthRoutes;