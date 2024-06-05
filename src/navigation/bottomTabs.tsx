import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import * as React from 'react';
import TabBar from '../components/tab-bar';
import Dashboard from '../screens/dashboard';
import EmptyScreen from '../screens/others/EmptyScreen';

export type RootBottomTabParamList = {
  Home: undefined;
  Discover: undefined;
  Add: undefined;
  Notifications: undefined;
  Messages: undefined;
};

const RootBottomTab = createBottomTabNavigator<RootBottomTabParamList>();

export default function MyBottomTabs({}) {
  return (
    <RootBottomTab.Navigator tabBar={props => <TabBar {...props} />}>
      <RootBottomTab.Screen
        name="Home"
        component={Dashboard}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
        }}
      />
      <RootBottomTab.Screen
        name="Discover"
        component={EmptyScreen}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
        }}
      />
      <RootBottomTab.Screen
        name="Add"
        component={EmptyScreen}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
        }}
      />
      <RootBottomTab.Screen
        name="Notifications"
        component={EmptyScreen}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
        }}
      />
      <RootBottomTab.Screen
        name="Messages"
        component={EmptyScreen}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
        }}
      />
    </RootBottomTab.Navigator>
  );
}
