import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from '../../pages/SignIn/index';
import RegisterUser from '../../pages/RegisterUser/index';
import Categories from '../../pages/Categories';
import NavigationBar from '../../NavigationBar';

const AuthStack = createStackNavigator();

const AuthRoutes = () => (
  <AuthStack.Navigator
    initialRouteName="SignIn"
    screenOptions={() => ({
      headerShown: false,
      gestureEnabled: true,
    })}>
    <AuthStack.Screen name="NavigationBar" component={NavigationBar} />
    <AuthStack.Screen name="SignIn" component={SignIn} />
    <AuthStack.Screen name="RegisterUser" component={RegisterUser} />
    <AuthStack.Screen name="Categories" component={Categories} />
  </AuthStack.Navigator>
);

export default AuthRoutes;