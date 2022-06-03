import React from 'react';

import NavigationBar from './NavigationBar';
import Login from './src/components/Login';
import Profile from './src/components/Profile';
import Register from './src/components/Register';

import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'

const Routes = () => {
    const Stack = createStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Login'>
                <Stack.Screen
                    options={{headerShown: false}}
                    name='Login' 
                    component={Login}/>
                <Stack.Screen
                    options={{headerShown: false}}
                    name='Profile' 
                    component={Profile}/>
                <Stack.Screen
                    options={{headerShown: false}}
                    name='Register' 
                    component={Register}/>
                <Stack.Screen
                    options={{headerShown: false}}
                    name='NavigationBar' 
                    component={NavigationBar}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes;