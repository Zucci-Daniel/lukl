import React, {useEffect, useRef, useState} from 'react';
import {
  Animated,
  Dimensions,
  LayoutChangeEvent,
  Text,
  View,
} from 'react-native';
import {styles} from './style';

const screenWidth = Dimensions.get('window').width;

const Marquee = ({
  text,
  duration = 5000,
}: {
  text: string;
  duration?: number;
}) => {
  const [textWidth, setTextWidth] = useState(0);
  const translateX = useRef(new Animated.Value(screenWidth)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(translateX, {
        toValue: -textWidth,
        duration: duration,
        useNativeDriver: true,
      }),
    ).start();
  }, [textWidth, text, duration]);

  const onLayout = (event: LayoutChangeEvent) => {
    setTextWidth(event.nativeEvent.layout.width);
  };

  return (
    <View style={[styles.container, {width: textWidth}]}>
      <Animated.View
        style={[
          styles.marqueeContainer,
          {transform: [{translateX: translateX}]},
        ]}>
        <Text style={styles.text} numberOfLines={1} onLayout={onLayout}>
          {text}
        </Text>
      </Animated.View>
    </View>
  );
};

export default Marquee;
