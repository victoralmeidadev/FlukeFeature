import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import AuthProvider from './hooks/auth';
import InformationProvider from './hooks/information';
import Routes from './routes';

const App = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <InformationProvider>
          <StatusBar hidden barStyle="light-content" />
          <Routes />
        </InformationProvider>
      </AuthProvider>
    </NavigationContainer>
  );
};

export default App;
