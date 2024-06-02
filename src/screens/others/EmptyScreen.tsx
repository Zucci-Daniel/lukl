import React, {useState, useEffect, useRef} from 'react';
import {View, Image, Animated, Text, TouchableOpacity} from 'react-native';
import {useRoute} from '@react-navigation/native';

const EmptyScreen = ({}) => {
  const route = useRoute();
  const [isExpanded, setIsExpanded] = useState(false);
  const [bounceAnim] = useState(new Animated.Value(0));
  const bounceHeight = 20;
  const sizeAnim = useRef(new Animated.Value(1)).current;

  const handlePress = () => {
    if (isExpanded) {
      Animated.timing(sizeAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(sizeAnim, {
        toValue: 1.5,
        duration: 500,
        useNativeDriver: true,
      }).start();
    }
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(bounceAnim, {
          toValue: bounceHeight,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(bounceAnim, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 20,
          textAlign: 'center',
          color: 'white',
        }}>
        "{route.name}" Page
      </Text>
      <TouchableOpacity onPress={handlePress}>
        <Animated.Image
          source={require('../../assets/manthinking.png')}
          style={{
            width: 300,
            height: 300,
            transform: [{translateY: bounceAnim}, {scale: sizeAnim}],
          }}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 20,
          textAlign: 'center',
          color: 'white',
          marginTop: 50,
        }}>
        Joshua and LykLuk
      </Text>
      <Text
        style={{
          fontWeight: 'bold',
          color: 'white',
          fontSize: 20,
          textAlign: 'center',
        }}>
        CAN change the World
      </Text>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 14,
          textAlign: 'center',
          color: 'white',
          marginTop: 20,
        }}>
        Want to see a trick? Click the image 😃
      </Text>
    </View>
  );
};

export default EmptyScreen;
