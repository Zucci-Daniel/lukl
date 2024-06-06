import {useRoute} from '@react-navigation/native';
import React from 'react';
import {Text, View} from 'react-native';

const BlankScreen = ({}) => {
  const route = useRoute();

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
    </View>
  );
};

export default BlankScreen;
