import React from 'react';
import { Image, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Categories from './pages/Categories/index'
import Settings from '../components/pages/Settings/index'
import Profile from '../../src/components/pages/Profile/Profile'
import Worker from '../components/pages/Worker/index';
import RegisterWorker from './pages/RegisterWorker/index';
import Description from './pages/RegisterWorker/description';
import EditProfile from './pages/Settings/EditProfile';

// ícones, para acessar a biblioteca cliquem aqui: https://oblador.github.io/react-native-vector-icons/
// !! usem somente os do font awesome 5.

import Icon from 'react-native-vector-icons/FontAwesome5'

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const Register = () => (
  <Stack.Navigator>
    <Stack.Screen
      name='RegisterForm'
      component={RegisterWorker}
      options={{
        headerShown: false
      }}
    />

    <Stack.Screen
      name='Description'
      component={Description}
    />
  </Stack.Navigator>
)

const Configuration = () => (
  <Stack.Navigator>
    <Stack.Screen
      name='Settings'
      component={Settings}
      options={{
        headerShown: false
      }}
    />

    <Stack.Screen
      name='RegisterWorker'
      component={Register}
      options={{
        headerTransparent: true,
        title: '',
        headerTintColor: '#F85C70'
      }}
    />

    <Stack.Screen
      name='EditProfile'
      component={EditProfile}
      options={{
        headerTransparent: true,
        title: '',
        headerTintColor: '#F85C70'
      }}
    />
  </Stack.Navigator>
)

const ServiceStack = ({ navigation }) => (
  <Stack.Navigator>
    <Stack.Screen
      name='Categories'
      component={Categories}
      options={{
        headerShown: false
      }}
    />

    <Stack.Screen
      name='Workers'
      component={Worker}
      options={{
        headerTransparent: true,
        title: '',
        headerTintColor: '#F85C70'
      }}
    />

    <Stack.Screen
      name='Profile'
      component={Profile}
      options={{
        headerTransparent: true,
        title: '',
        headerTintColor: '#fff'
      }}
    />
  </Stack.Navigator>
)

const NavigationBar = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#fff',
          paddingBottom: 5,
          paddingTop: 6,
          borderTopWidth: 0,
        },
        tabBarActiveTintColor: '#000000',
        tabBarInactiveTintColor: '#000000'
      }}>

      <Tab.Screen
        name="Home"
        component={ServiceStack}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Image style={{width:25, height:25}} source={require('../../assets/home.png')} />
          )
        }}
      />

      <Tab.Screen
        name="Perfil"
        component={Profile}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Image style={{width:25, height:25}} source={require('../../assets/profile.png')} />
          )
        }}
      />

      <Tab.Screen
        name="Configurações"
        component={Configuration}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Image style={{width:25, height:25}} source={require('../../assets/settings.png')} />
          )
        }}
      />
    </Tab.Navigator>
  )
}

export default NavigationBar