import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from '../../SignIn/index';
import Register from '../../../Register';
import RegisterWorker from '../../RegisterWorker';
import Description from '../../RegisterWorker/description';

const AuthStack = createStackNavigator();

const AuthRoutes = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen name="SignIn" component={SignIn} />
    <AuthStack.Screen name="Register" component={Register} />
    <AuthStack.Screen name="RegisterWorker" component={RegisterWorker} />
    <AuthStack.Screen name="Description" component={Description} />
  </AuthStack.Navigator>
);

export default AuthRoutes;