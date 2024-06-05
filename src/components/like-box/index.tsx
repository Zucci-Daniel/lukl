import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import {IVideo} from '../../types/video';
import {styles} from './style';
import useLikeBox from './use-like-box';

const LikeBox = ({
  likes,
  item,
  commentCount,
}: Partial<{
  likes: number;
  commentCount: number;
  item: IVideo;
}>) => {
  const {isLiked, setIsCracked, isCracked, likesCount, likeSubmit, toast} =
    useLikeBox({
      likes,
      item,
      commentCount,
    });

  return (
    <View style={[styles.container, {backgroundColor: 'transparent'}]}>
      <TouchableOpacity style={styles.box} onPress={likeSubmit}>
        <AntDesign
          name="heart"
          size={35}
          color={isLiked ? 'red' : 'white'}
          style={styles.transparent}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {}}
        style={[styles.boxWithText, {height: undefined, marginBottom: 5}]}>
        <Text style={[styles.text, {color: 'white'}]}>{likesCount}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.box}
        onPress={() => setIsCracked(prev => !prev)}>
        <FontAwesome6
          name="heart-crack"
          size={35}
          color={isCracked ? 'red' : 'white'}
          style={styles.transparent}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {}}
        style={[styles.boxWithText, {height: undefined, marginBottom: 5}]}>
        <Text style={[styles.text, {color: 'white'}]}>265k</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.boxWithText}
        onPress={() => {
          toast.show('my_success', {
            type: 'my_success',
            data: {
              title: 'Message:',
              message:
                'Your intentions are clear! Unfortunately, the comments do not want to be viewed by you.',
            },
          });
        }}>
        <FontAwesome
          name="commenting"
          size={35}
          color="white"
          style={styles.transparent}
        />
        <Text style={[styles.text, {color: 'white'}]}>10.7M</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.boxWithText}
        onPress={() => {
          toast.show('my_success', {
            type: 'my_success',
            data: {
              title: 'Message:',
              message:
                'You must not share everything, try to be stingy with content ',
            },
          });
        }}>
        <Entypo
          name="forward"
          size={35}
          color={'white'}
          style={styles.transparent}
        />
        <Text style={[styles.text, {color: 'white'}]}>30.9k</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LikeBox;
