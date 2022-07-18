import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Categories from './pages/Categories/index'
import Settings from '../components/pages/Settings/index'
import Profile from '../../src/components/pages/Profile/Profile'
import Worker from '../components/pages/Worker/index';
import RegisterWorker from './pages/Workers/RegisterWorker/index';
import Description from './pages/Workers/RegisterWorker/description';
import EditProfile from './pages/Settings/EditProfile/index'
import DeleteWorker from './pages/Workers/DeleteWorker';
import Icon from 'react-native-vector-icons/Ionicons'
import IconFontA from 'react-native-vector-icons/FontAwesome' 

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
      options={{
        headerShown: false
      }}
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
        headerTintColor: '#F85C70',
        headerBackTitleVisible: false,
        headerTitle: '',
        headerLeftContainerStyle: {
          position: 'absolute',
          left: 16
        }
      }}
    />

    <Stack.Screen
      name='DeleteWorker'
      component={DeleteWorker}
      options={{
        headerTransparent: true,
        headerTintColor: '#F85C70',
        headerBackTitleVisible: false,
        headerTitle: '',
        headerLeftContainerStyle: {
          position: 'absolute',
          left: 16
        }
      }}
    />

    <Stack.Screen
      name='EditProfile'
      component={EditProfile}
      options={{
        headerTransparent: true,
        headerTintColor: '#F85C70',
        headerBackTitleVisible: false,
        headerTitle: '',
        headerLeftContainerStyle: {
          position: 'absolute',
          left: 16
        }
      }}
    />
  </Stack.Navigator>
)

const ProfileIntern = () => (
  <Stack.Navigator>
    <Stack.Screen
      name='Profile'
      component={Profile}
      options={{
        headerTransparent: true,
        title: '',
        headerTintColor: '#fff'
      }}
    />

    <Stack.Screen
      name='Profile2'
      component={Profile}
      options={{
        headerTransparent: true,
        title: '',
        headerTintColor: '#fff',
        headerBackTitleVisible: false,
        headerLeftContainerStyle: {
          position: 'absolute',
          left: 12
        }
      }}
    />

    <Stack.Screen
      name='EditProfile'
      component={EditProfile}
      options={{
        headerTransparent: true,
        headerTintColor: '#F85C70',
        headerBackTitleVisible: false,
        headerTitle: '',
        headerLeftContainerStyle: {
          position: 'absolute',
          left: 16
        }
      }}
    />
  </Stack.Navigator>
)

const ServiceStack = () => (
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
        headerTintColor: '#F85C70',
        headerBackTitleVisible: false,
        headerTitle: '',
        headerLeftContainerStyle: {
          position: 'absolute',
          left: 16
        }
      }}
    />

    <Stack.Screen
      name='Profile'
      component={Profile}
      options={{
        headerTransparent: true,
        headerTintColor: '#fff',
        headerBackTitleVisible: false,
        headerTitle: '',
        headerLeftContainerStyle: {
          position: 'absolute',
          left: 12
        }
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
          backgroundColor: '#fafafa',
          paddingBottom: 5,
          paddingTop: 6,
          borderTopWidth: 0,
        },
        tabBarActiveTintColor: '#3f4040',
        tabBarInactiveTintColor: '#3f4040'
      }}>

      <Tab.Screen
        name="Home"
        component={ServiceStack}
        options={{
          tabBarIcon: ({ size }) => (
            <Icon name='home' size={size} color='#F85C70' />
          )
        }}
      />

      <Tab.Screen
        name="Perfil"
        component={ProfileIntern}
        options={{
          tabBarIcon: ({ size }) => (
            <IconFontA name='user-circle-o' size={size} color='#F85C70' />
          )
        }}
      />

      <Tab.Screen
        name="Configurações"
        component={Configuration}
        options={{
          tabBarIcon: ({ size }) => (
            <IconFontA name='cogs' size={size} color='#F85C70' />
          )
        }}
      />
    </Tab.Navigator>
  )
}

export default NavigationBar