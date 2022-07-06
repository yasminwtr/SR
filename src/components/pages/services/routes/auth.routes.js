import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from '../../SignIn/index';
import Register from '../../../Register';

const AuthStack = createStackNavigator();

const AuthRoutes = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen name="SignIn" component={SignIn} />
    <AuthStack.Screen name="Register" component={Register} />
  </AuthStack.Navigator>
);

export default AuthRoutes;