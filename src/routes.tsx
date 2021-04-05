import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { useAuth } from './contexts/auth';

import SplashScreen from './pages/SplashScreen';
import Home from './pages/Home';
import About from './pages/About';
import Start from './pages/Start';
import Login from './pages/Login';
import Register from './pages/Register';

const AuthStack = createStackNavigator();
const MainStack = createStackNavigator();

function MainStackNavigator() {
  return (
    <MainStack.Navigator screenOptions={{ headerShown: false }}>
      <MainStack.Screen name="Home" component={Home} />
      <MainStack.Screen name="About" component={About} />
    </MainStack.Navigator>
  );
}

function AuthStackNavigator() {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="Start" component={Start} />
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="Register" component={Register} />
    </AuthStack.Navigator>
  );
}

export default function Routes() {
  const { loading, isSigned } = useAuth();

  if (loading) {
    return <SplashScreen />;
  } else {
    if (isSigned) {
      return MainStackNavigator();
    } else {
      return AuthStackNavigator();
    }
  }
}
