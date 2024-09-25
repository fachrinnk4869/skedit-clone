import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import IndexScreen from '@/app/(tabs)/index';
import DoneScreen from '@/app/(tabs)/done';

const TopTab = createMaterialTopTabNavigator();

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <TopTab.Navigator
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,  // Active tab color
        tabBarInactiveTintColor: 'gray',  // Inactive tab color
        tabBarShowIcon: true,  // Show icons in the tab bar
        tabBarIndicatorStyle: {
          backgroundColor: 'blue',  // Light line color
          height: 2,  // Thin line for the indicator
        },
        tabBarStyle: {
          backgroundColor: Colors[colorScheme ?? 'light'].background,  // Background color of the tab bar
          shadowColor: 'rgba(0, 0, 0, 0.1)',  // Custom shadow color
          shadowOpacity: 0.8,  // Shadow opacity
          elevation: 10,  // Elevation for Android devices
        },
        tabBarLabelStyle: {
          fontSize: 14,  // Font size of tab labels
          fontWeight: '600',  // Font weight of tab labels
          textTransform: 'none',  // Disable uppercase letters in tab labels
        },
      }}>
      <TopTab.Screen
        name="Home"
        component={IndexScreen}
        options={{
          title: 'Home',
          // tabBarIcon: ({ color, focused }) => (
          //   <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          // ),
        }}
      />
      <TopTab.Screen
        name="Done"
        component={DoneScreen}
        options={{
          title: 'Done',
          // tabBarIcon: ({ color, focused }) => (
          //   <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color} />
          // ),
        }}
      />
    </TopTab.Navigator>
  );
}
