import {ImageBackground, Text, TouchableOpacity, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {styles} from './style';

export default function MyTabBar({state, descriptors, navigation}: any) {
  const showBottomBar = true;

  const renderIcon = (routeName: string, isFocused: boolean) => {
    const iconProps = {size: 24, color: isFocused ? '#C13584' : 'white'};
    switch (routeName) {
      case 'Home':
        return isFocused ? (
          <Entypo name="home" {...iconProps} />
        ) : (
          <Ionicons name="home-outline" {...iconProps} />
        );
      case 'Discover':
        return <Entypo name="compass" {...iconProps} />;
      case 'Add':
        return (
          <FontAwesome6
            name="plus"
            size={isFocused ? 24 : 26}
            color={isFocused ? '#C13584' : '#C13584'}
          />
        );
      case 'Notifications':
        return <MaterialCommunityIcons name="bell-badge" {...iconProps} />;
      default:
        return <AntDesign name="message1" {...iconProps} />;
    }
  };

  const renderLabel = (label: string, isFocused: boolean) => (
    <Text style={[styles.menutxt, isFocused && styles.menutxtActive]}>
      {label}
    </Text>
  );

  return (
    <ImageBackground
      style={[
        styles.container,
        {
          display: showBottomBar ? 'flex' : 'none',
          bottom: 0,
        },
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
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{width: '18%'}}>
            <View style={route.name === 'Add' ? styles.addbox : styles.menubox}>
              {renderIcon(route.name, isFocused)}
              {route.name !== 'Add' && renderLabel(label, isFocused)}
            </View>
          </TouchableOpacity>
        );
      })}
    </ImageBackground>
  );
}
