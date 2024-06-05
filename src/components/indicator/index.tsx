import React, {useContext} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import RouteContext from '../../contexts/routecontext';
import {styles} from './style';
const avatar = 'https://picsum.photos/400';
export default function Indicator({
  route,
  to,
}: {
  route: {key: string; title: string};
  to: (key: string) => void;
}) {
  const {setToggle} = useContext(RouteContext);
  return (
    <View style={styles.container}>
      <Image source={{uri: avatar}} style={styles.containerWrapper} />
      <View style={styles.tabrow}>
        <TouchableOpacity
          onPress={() => {
            setToggle((prev: boolean) => !prev);
            to('following');
          }}>
          <Text
            style={[
              styles.text,
              {color: route.key === 'following' ? 'white' : '#ffffff60'},
            ]}>
            Following
          </Text>
        </TouchableOpacity>
        <View
          style={{
            height: 18,
            backgroundColor: '#ffffff80',
            width: 2,
          }}
        />
        <TouchableOpacity
          onPress={() => {
            setToggle((prev: boolean) => !prev);
            to('fyp');
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
