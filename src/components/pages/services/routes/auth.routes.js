import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from '../../SignIn/index';
import Register from '../../../Register';
import RegisterWorker from '../../RegisterWorker';

const AuthStack = createStackNavigator();

const AuthRoutes = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen name="SignIn" component={SignIn} />
    <AuthStack.Screen name="Register" component={Register} />
    <AuthStack.Screen name="RegisterWorker" component={RegisterWorker} />
  </AuthStack.Navigator>
);

export default AuthRoutes;