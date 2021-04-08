import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Icon from 'react-native-vector-icons/FontAwesome5';

import { useAuth } from './hooks/auth';

import SplashScreen from './pages/SplashScreen';
import Home from './pages/Home';
import History from './pages/History';
import Profile from './pages/Profile';

const Tab = createBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();

const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

function TopTabHistory() {
  return (
    <TopTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: '#000',
        labelStyle: { fontSize: 18, padding: 2, fontWeight: 'bold' },
        indicatorStyle: { backgroundColor: '#0ef500', height: 6, borderRadius: 3 },
      }}>
      <TopTab.Screen name="Dados" component={History} />
      <TopTab.Screen name="Minutos" component={History} />
    </TopTab.Navigator>
  );
}

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
        component={TopTabHistory}
        options={{
          tabBarLabel: 'histórico',
          tabBarIcon: ({ color, size }) => <Icon name="history" size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'início',
          tabBarIcon: ({ color, size }) => <Icon name="home" size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'perfil',
          tabBarIcon: ({ color, size }) => <Icon name="user" size={size} color={color} />,
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
