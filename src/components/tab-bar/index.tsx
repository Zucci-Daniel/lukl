import * as React from 'react';
import {ImageBackground, Text, TouchableOpacity, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles} from './style';

const activeTintColor = 'purple';
const inactiveTintColor = 'white';

export default function TabBar({state, descriptors, navigation}: any) {
  const showBottomBar = true;

  const getIcon = (routeName: string, isFocused: boolean) => {
    switch (routeName) {
      case 'Home':
        return isFocused ? (
          <Entypo name="home" size={24} color={activeTintColor} />
        ) : (
          <Ionicons name="home-outline" size={24} color={inactiveTintColor} />
        );
      case 'Discover':
        return (
          <Entypo
            name="compass"
            size={24}
            color={isFocused ? activeTintColor : inactiveTintColor}
          />
        );
      case 'Add':
        return (
          <FontAwesome6
            name="plus"
            size={isFocused ? 24 : 26}
            color={isFocused ? inactiveTintColor : activeTintColor}
          />
        );
      case 'Notifications':
        return (
          <MaterialCommunityIcons
            name="bell-badge"
            size={24}
            color={isFocused ? activeTintColor : inactiveTintColor}
          />
        );
      default:
        return (
          <AntDesign
            name="message1"
            size={24}
            color={isFocused ? activeTintColor : inactiveTintColor}
          />
        );
    }
  };

  return (
    <ImageBackground
      style={[
        styles.container,
        {display: showBottomBar ? 'flex' : 'none', bottom: 0},
      ]}
      source={{uri: 'https://picsum.photos/400/200'}}
      blurRadius={100}>
      {state.routes.map((route: any, index: number) => {
        const {options} = descriptors[route.key];
        const label = options.tabBarLabel ?? options.title ?? route.name;
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, {});
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            style={styles.tabButton}
            onLongPress={onLongPress}
            key={index}>
            <View style={styles.menubox}>
              {getIcon(route.name, isFocused)}
              {route.name !== 'Add' && (
                <Text
                  style={[styles.menutxt, isFocused && styles.menutxtActive]}>
                  {label}
                </Text>
              )}
            </View>
          </TouchableOpacity>
        );
      })}
    </ImageBackground>
  );
}
