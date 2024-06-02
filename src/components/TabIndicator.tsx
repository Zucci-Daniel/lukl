import React, {useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import RouteContext from '../contexts/routecontext';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function TabIndicator({
  route,
  jumpTo,
}: {
  route: {key: string; title: string};
  jumpTo: (key: string) => void;
}) {
  const {setToggle} = useContext(RouteContext);
  return (
    <View style={styles.container}>
      <Image
        source={{uri: 'https://picsum.photos/400'}}
        style={{width: 30, height: 30, borderRadius: 20}}
      />
      <View style={styles.tabrow}>
        <TouchableOpacity
          onPress={() => {
            setToggle((prev: boolean) => !prev);
            jumpTo('following');
          }}>
          <Text
            style={[
              styles.text,
              {color: route.key === 'following' ? 'white' : '#ffffff60'},
            ]}>
            Following
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setToggle((prev: boolean) => !prev);
            jumpTo('fyp');
          }}>
          <Text
            style={[
              styles.text,
              {color: route.key === 'fyp' ? 'white' : '#ffffff80'},
            ]}>
            LUK
          </Text>
        </TouchableOpacity>
      </View>
      <Ionicons name="flag-outline" size={24} color="white" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    position: 'absolute',
    zIndex: 10,
    width: '100%',
    height: 100,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 30,
    top: 20,
    paddingHorizontal: '2.5%',
  },
  tabrow: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    color: 'white',
    paddingHorizontal: 5,
    fontWeight: 'bold',
  },
});
