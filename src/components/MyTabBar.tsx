import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

import Ionicons from 'react-native-vector-icons/Ionicons';

export default function MyTabBar({state, descriptors, navigation}: any) {
  const showBottomBar = true;
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
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

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
            style={{width: '18%'}}
            onLongPress={onLongPress}
            key={index}>
            {isFocused ? (
              <>
                {route.name === 'Home' ? (
                  <View style={styles.menubox}>
                    <Entypo name="home" size={24} color="purple" />
                    <Text style={[styles.menutxt, styles.menutxtActive]}>
                      {label}
                    </Text>
                  </View>
                ) : route.name === 'Discover' ? (
                  <View style={styles.menubox}>
                    <Ionicons
                      name="search-circle-sharp"
                      size={24}
                      color="purple"
                    />
                    <Text style={[styles.menutxt, styles.menutxtActive]}>
                      {label}
                    </Text>
                  </View>
                ) : route.name === 'Add' ? (
                  <View style={[styles.addbox]}>
                    <FontAwesome6 name="plus" size={24} color="white" />
                  </View>
                ) : route.name === 'Notifications' ? (
                  <View style={styles.menubox}>
                    <MaterialCommunityIcons
                      name="bell-badge"
                      size={24}
                      color="purple"
                    />
                    <Text style={[styles.menutxt, styles.menutxtActive]}>
                      {label}
                    </Text>
                  </View>
                ) : (
                  <View style={styles.menubox}>
                    <AntDesign name="message1" size={24} color="purple" />
                    <Text style={[styles.menutxt, styles.menutxtActive]}>
                      {label}
                    </Text>
                  </View>
                )}
              </>
            ) : (
              <>
                {route.name === 'Home' ? (
                  <View style={styles.menubox}>
                    <Ionicons name="home-outline" size={24} color="white" />
                    <Text style={styles.menutxt}>{label}</Text>
                  </View>
                ) : route.name === 'Discover' ? (
                  <View style={styles.menubox}>
                    <Feather name="map-pin" size={24} color="white" />
                    <Text style={styles.menutxt}>{label}</Text>
                  </View>
                ) : route.name === 'Add' ? (
                  <View style={[styles.addbox]}>
                    <FontAwesome6 name="plus" size={26} color="purple" />
                  </View>
                ) : route.name === 'Notifications' ? (
                  <View style={styles.menubox}>
                    <MaterialCommunityIcons
                      name="bell-badge"
                      size={24}
                      color="white"
                    />
                    <Text style={styles.menutxt}>{label}</Text>
                  </View>
                ) : (
                  <View style={styles.menubox}>
                    <AntDesign name="message1" size={24} color="white" />
                    <Text style={styles.menutxt}>{label}</Text>
                  </View>
                )}
              </>
            )}
          </TouchableOpacity>
        );
      })}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '110%',
    height: 100,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    justifyContent: 'space-between',
    paddingRight: '10%',
    position: 'relative',
  },
  menubox: {
    width: '100%',
    height: 80,
    alignItems: 'center',
  },
  menutxt: {
    fontSize: 11,
    color: 'white',
    textAlign: 'center',
  },
  menutxtActive: {
    fontSize: 10,
    color: 'purple',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  addbox: {
    width: 70,
    height: 70,
    marginBottom: 20,
    borderRadius: 50,
    borderWidth: 7,
    borderColor: 'purple',
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'relative',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: 'white',
    overflow: 'hidden',
  },
});
