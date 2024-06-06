import * as React from 'react';
import {RootBottomTabParamListType} from './type';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TabBar from '../components/tab-bar';
import DashboardWrapper from '../screens/dashboard';
import BlankScreen from '../screens/others/BlankScreen';
const RootBottomTab = createBottomTabNavigator<RootBottomTabParamListType>();

const generalOptions = {headerShown: false, tabBarShowLabel: false};

export default function MyBottomTabs({}) {
  return (
    <RootBottomTab.Navigator tabBar={(props: any) => <TabBar {...props} />}>
      <RootBottomTab.Screen
        name={'Home'}
        component={DashboardWrapper}
        options={generalOptions}
      />
      <RootBottomTab.Screen
        name={'Discover'}
        component={BlankScreen}
        options={generalOptions}
      />
      <RootBottomTab.Screen
        name={'Add'}
        component={BlankScreen}
        options={generalOptions}
      />
      <RootBottomTab.Screen
        name={'Notifications'}
        component={BlankScreen}
        options={generalOptions}
      />
      <RootBottomTab.Screen
        name={'Messages'}
        component={BlankScreen}
        options={generalOptions}
      />
    </RootBottomTab.Navigator>
  );
}
