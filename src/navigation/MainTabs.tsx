import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Text } from 'react-native';
import CartScreen from '../screens/cart/CartScreen';
import ProfileScreen from '../screens/profile/ProfileScreen';
import { HomeStack } from './HomeStack';
import { MainTabsParamList } from './types';

const Tab = createBottomTabNavigator<MainTabsParamList>();

// Dummy icon component for now
const TabIcon = ({ name, color }: { name: string; color: string }) => (
  <Text style={{ color, fontSize: 20 }}>{name === 'inicio' ? '🏠' : name === 'carrinho' ? '🛒' : '👤'}</Text>
);

export const MainTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#0ea5e9', // Tailwind rose-600
        tabBarInactiveTintColor: '#9ca3af', // Tailwind gray-400
        tabBarStyle: {
          backgroundColor: '#000000',
          paddingBottom: 5,
          paddingTop: 5,
          height: 80,
        },
      }}
    >
      <Tab.Screen
        name="Início"
        component={HomeStack}
        options={{
          tabBarIcon: ({ color }) => <TabIcon name="inicio" color={color} />,
        }}
      />
      <Tab.Screen
        name="Carrinho"
        component={CartScreen}
        options={{
          tabBarIcon: ({ color }) => <TabIcon name="carrinho" color={color} />,
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color }) => <TabIcon name="perfil" color={color} />,
        }}
      />
    </Tab.Navigator>
  );
};
