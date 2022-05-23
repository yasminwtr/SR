import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Service from './pages/Service'
import Setting from './pages/Setting'

// essas páginas não vão ser acessadas pela tab bar, mas estão aqui para cada um trabalhar em uma página específica por
// um documento só, e ficam de fácil acesso.
import Login from './pages/Login'
import Profile from './pages/Profile'

// ícones, para acessar a biblioteca cliquem aqui: https://oblador.github.io/react-native-vector-icons/
// !! usem somente os do font awesome 5.
import Icon from 'react-native-vector-icons/FontAwesome5'

const Tab = createBottomTabNavigator();

export default function Routes(){
    return(
        <Tab.Navigator
        screenOptions={{
            headerShown:false,
            tabBarStyle: {
                backgroundColor: '#917ab8',
                paddingBottom: 5,
                paddingTop: 6
            },
            tabBarActiveTintColor: '#fff',
            tabBarInactiveTintColor: '#e8e8e8'
            }}>

            <Tab.Screen
            name="Login"
            component={Login}
            options={{
                tabBarIcon: ({ size, color }) => (
                    <Icon name='fingerprint' size={size} color={color}/>
                )
            }}
            />

            <Tab.Screen
            name="Perfil"
            component={Profile}
            options={{
                tabBarIcon: ({ size, color }) => (
                    <Icon name='frog' size={size} color={color}/>
                )
            }}
            />

            <Tab.Screen
            name="Serviços"
            component={Service}
            options={{
                tabBarIcon: ({ size, color }) => (
                    <Icon name='briefcase' size={size} color={color}/>
                )
            }}
            />

            <Tab.Screen
            name="Configurações"
            component={Setting}
            options={{
                tabBarIcon: ({ size, color }) => (
                    <Icon name='cogs' size={size} color={color}/>
                )
            }}
            />
        </Tab.Navigator>
    )
}