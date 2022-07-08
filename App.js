import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AuthProvider} from './src/components/contexts/auth';
import Routes from './src/components/services/routes/index';

const App = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
};

export default App;