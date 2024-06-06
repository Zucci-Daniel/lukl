import * as React from 'react';
import {RootBottomTabParamListType} from './type';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TabBar from '../components/tab-bar';
import DashboardWrapper from '../screens/dashboard';
import EmptyScreen from '../screens/others/EmptyScreen';
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
        component={EmptyScreen}
        options={generalOptions}
      />
      <RootBottomTab.Screen
        name={'Add'}
        component={EmptyScreen}
        options={generalOptions}
      />
      <RootBottomTab.Screen
        name={'Notifications'}
        component={EmptyScreen}
        options={generalOptions}
      />
      <RootBottomTab.Screen
        name={'Messages'}
        component={EmptyScreen}
        options={generalOptions}
      />
    </RootBottomTab.Navigator>
  );
}
