import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { useAuth } from './hooks/auth';

import SplashScreen from './pages/SplashScreen';
import Home from './pages/Home';
import History from './pages/History';
import Profile from './pages/Profile';

const Tab = createBottomTabNavigator();

function MainStackNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: '#0ef500',
        inactiveTintColor: '#333',
        labelStyle: { fontSize: 13, padding: 2 },
        tabStyle: {
          backgroundColor: '#fff',
        },
      }}>
      <Tab.Screen
        name="History"
        component={History}
        options={{
          tabBarLabel: 'histórico',
          tabBarIcon: ({ color, size }) => (
            <Icon name="history" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'início',
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'perfil',
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function Routes() {
  const { loading } = useAuth();

  if (loading) {
    return <SplashScreen />;
  } else {
    return MainStackNavigator();
  }
}
