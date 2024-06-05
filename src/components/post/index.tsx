import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Octicons from 'react-native-vector-icons/Octicons';
import {IVideo} from '../../types/video';
import {styles} from './style';

export default function PostDetails({post}: {post: IVideo}) {
  const [showFullCaption, setShowFullCaption] = useState(false);
  const [avatarLoaded, setAvatarLoaded] = useState(false);
  const [showFollow, setShowFollow] = useState(true);
  const [isFollowing, setIsFollowing] = useState(false);

  const handleSeeMore = () => {
    setShowFullCaption(!showFullCaption);
  };

  const renderCaption = () => {
    const captionText = showFullCaption
      ? post.caption
      : post.caption.slice(0, 50) + (post.caption.length > 50 ? '...' : '');
    return captionText.split(' ').map((word, index) => (
      <Text
        key={index}
        style={word.startsWith('#') ? styles.boldText : styles.text}>
        {word}{' '}
      </Text>
    ));
  };

  const followUser = async () => {
    setIsFollowing(prev => !prev);
  };

  return (
    <View style={styles.container}>
      <View style={styles.boxWithText}>
        <TouchableOpacity
          style={[
            styles.imgbox,
            avatarLoaded ? styles.noBorder : styles.border,
          ]}
          onPress={() => {}}>
          <Image
            source={{uri: post?.profilePhotoUrl}}
            onLoad={() => setAvatarLoaded(true)}
            style={styles.userIcon}
          />
        </TouchableOpacity>
        {showFollow && (
          <TouchableOpacity onPress={followUser} style={styles.followCircle}>
            {isFollowing ? (
              <Fontisto name="check" size={7} color="white" />
            ) : (
              <Octicons name="plus" size={10} color={'white'} />
            )}
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.displaybox}>
        <Text style={styles.views}>
          <AntDesign name="eyeo" size={12} color="white" /> 275k views
        </Text>
        <Text style={styles.username}>
          Brooklyn Simmons{' '}
          <View style={styles.verifiedIcon}>
            <FontAwesome5 name="check" size={8} color="white" />
          </View>
        </Text>
        <Text style={styles.caption}>
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
