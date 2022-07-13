import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AuthProvider} from './src/components/contexts/auth';
import Routes from './src/components/services/routes/index';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

const App = () => {
  const [fontsLoaded, error] = useFonts({
    'Rubik':require('./assets/fonts/Rubik-Regular.ttf'),
    'Rubik-Medium':require('./assets/fonts/Rubik-Medium.ttf')
  })

  if (!fontsLoaded){
    return <AppLoading/>
  }

  return (
    <NavigationContainer>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
};

export default App;