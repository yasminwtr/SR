import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Service from './src/components/Service'
import Setting from './src/components/Settings'

import Login from './src/components/Login'
import Profile from './src/components/Profile'
import Register from './src/components/Register';


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
                backgroundColor: '#f3f8fe',
                paddingBottom: 5,
                paddingTop: 6,
                borderTopWidth: 0,
            },
            tabBarActiveTintColor: '#a17792',
            tabBarInactiveTintColor: '#d88b9f'
            }}>

            {/* <Tab.Screen
            name="Workers"
            component={Worker}
            options={{
                tabBarIcon: ({ size, color }) => (
                    <Icon name='hamsa' size={size} color={color}/>
                )
            }}
            /> */}

            <Tab.Screen
            name="Perfil"
            component={Profile}
            options={{
                tabBarIcon: ({ size, color }) => (
                    <Icon name='user-alt' size={size} color={color}/>
                )
            }}
            />

            <Tab.Screen
            name="Serviços"
            component={Service}
            options={{
                tabBarIcon: ({ size, color }) => (
                    <Icon name='tools' size={size} color={color}/>
                )
            }}
            />

            <Tab.Screen
            name="Teste"
            component={Register}
            options={{
                tabBarIcon: ({ size, color }) => (
                    <Icon name='dice' size={size} color={color}/>
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