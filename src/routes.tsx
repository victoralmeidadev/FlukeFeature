import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Icon from 'react-native-vector-icons/FontAwesome5';

import { useAuth } from './hooks/auth';

import SplashScreen from './pages/SplashScreen';
import Home from './pages/Home';
import Purchase from './pages/Purchase';
import History from './pages/History';
import Profile from './pages/Profile';
import Help from './pages/Help';

const MainStack = createStackNavigator();
const Tab = createBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();

function TopTabHistory() {
  return (
    <TopTab.Navigator
      initialRouteName="Dados"
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

function BottomTabNavigator() {
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

function MainStackNavigator() {
  return (
    <MainStack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
      <MainStack.Screen name="Home" component={BottomTabNavigator} />
      <MainStack.Screen name="Purchase" component={Purchase} options={{ headerShown: true, title: 'Adicionais' }} />
      <MainStack.Screen name="Help" component={Help} options={{ headerShown: true, title: 'Dúvidas frequentes' }} />
    </MainStack.Navigator>
  );
}

export default function Routes() {
  const { loading } = useAuth();

  if (loading) {
    return SplashScreen();
  } else {
    return MainStackNavigator();
  }
}
