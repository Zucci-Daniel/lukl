import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import {IVideo} from '../types/video';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Octicons from 'react-native-vector-icons/Octicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function PostDetails({post}: {post: IVideo}) {
  const [showFullCaption, setShowFullCaption] = useState(false);
  const [avatarLoaded, setAvatarLoaded] = useState(false);
  const [showFollow, setShowFollow] = useState(true);
  const [isFollowing, setIsFollowing] = useState(false);
  const handleSeeMore = () => {
    setShowFullCaption(!showFullCaption);
  };

  const renderCaption = () => {
    if (showFullCaption) {
      return post.caption.split(' ').map((word, index) => (
        <Text
          key={index}
          style={word.startsWith('#') ? styles.boldText : styles.text}>
          {word}{' '}
        </Text>
      ));
    } else {
      const truncatedCaption =
        post.caption.length > 50
          ? post.caption.slice(0, 50) + '...'
          : post.caption;
      return truncatedCaption.split(' ').map((word, index) => (
        <Text
          key={index}
          style={word.startsWith('#') ? styles.boldText : styles.text}>
          {word}{' '}
        </Text>
      ));
    }
  };

  const follow_user = async () => {
    setIsFollowing(prev => !prev);
  };

  return (
    <View style={styles.container}>
      <View style={styles.boxWithText}>
        <TouchableOpacity
          style={[
            styles.imgbox,
            {borderColor: 'white', borderWidth: avatarLoaded ? 0 : 1},
          ]}
          onPress={() => {}}>
          <Image
            source={{uri: post?.profilePhotoUrl}}
            onLoad={() => setAvatarLoaded(true)}
            style={styles.userIcon}
          />
        </TouchableOpacity>
        {showFollow && (
          <TouchableOpacity
            onPress={follow_user}
            style={[styles.followCircle, {backgroundColor: 'purple'}]}>
            {isFollowing ? (
              <Fontisto name="check" size={7} color="white" />
            ) : (
              <Octicons name="plus" size={10} color={'white'} />
            )}
          </TouchableOpacity>
        )}
      </View>
      <View style={[styles.displaybox]}>
        <Text style={[styles.views, {color: 'white'}]}>
          <AntDesign name="eyeo" size={12} color="white" /> 275k views
        </Text>
        <Text style={[styles.username, {color: 'white'}]}>
          Brooklyn Simmons{' '}
          <View
            style={{
              width: 14,
              height: 14,
              borderRadius: 14,
              backgroundColor: 'purple',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <FontAwesome5 name="check" size={8} color="white" />
          </View>
        </Text>
        <Text style={[styles.caption, {color: 'white'}]}>
          {renderCaption()}{' '}
          {post.caption.length > 50 && (
            <Text style={styles.btnText} onPress={handleSeeMore}>
              {showFullCaption ? ' Load less' : ' Load more'}
            </Text>
          )}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    overflow: 'hidden',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    bottom: 120,
  },
  imgbox: {
    marginTop: 5,
    height: 35,
    width: 35,
    borderRadius: 35,
    overflow: 'hidden',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  userIcon: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
  },
  followCircle: {
    width: 15,
    height: 15,
    borderRadius: 2,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: -2,
    left: 14,
  },
  boxWithText: {
    marginTop: 10,
    width: 46,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  displaybox: {
    paddingHorizontal: '5%',
    paddingVertical: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  views: {
    fontSize: 12,
    lineHeight: 13,
    marginBottom: 2,
    width: '100%',
  },
  username: {
    fontSize: 15,
    lineHeight: 17,
    fontWeight: 'bold',
    width: '100%',
    textAlignVertical: 'center',
    marginBottom: 2,
  },
  caption: {
    fontSize: 14,
    lineHeight: 15,
    width: '100%',
    flexWrap: 'wrap',
    textAlignVertical: 'center',
  },
  text: {
    fontSize: 14,
    lineHeight: 15,
    color: 'white',
  },
  boldText: {
    fontSize: 14,
    lineHeight: 15,
    color: 'white',
    fontWeight: 'bold',
  },
  btnText: {
    fontWeight: 'bold',
    fontSize: 14,
    lineHeight: 15,
    textAlignVertical: 'center',
    color: 'white',
    marginTop: 5,
  },
});
