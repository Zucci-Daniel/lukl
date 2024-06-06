import {FlashList} from '@shopify/flash-list';
import React, {forwardRef} from 'react';
import {ActivityIndicator, TouchableHighlight, View} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Video, {ResizeMode} from 'react-native-video';
import {styles} from './style';
import {useVideoPlayer} from './useVideoPlayer';

export const VideoPlayer = forwardRef(
  (
    {
      thumbnail,
      video,
      loader,
      flashListRef,
    }: {flashListRef: {current: FlashList<any> | null}} & Partial<any>,
    parentRef,
  ) => {
    const {
      pause,
      setPause,
      viewableIndex,
      arrLength,
      ready,
      setReady,
      aspectRatio,
      setAspectRatio,
      videoPlayerRef,
    } = useVideoPlayer(parentRef);
    return (
      <View
        style={[
          {
            height: '100%',
            width: '100%',
          },
          styles.container,
          {backgroundColor: 'black'},
        ]}>
        {video && pause === true && (
          <FontAwesome5
            name="play"
            size={70}
            color={'white'}
            onPress={() => {
              setPause(!pause);
            }}
            style={styles.play}
          />
        )}
        {video && (loader || ready === false) && (
          <ActivityIndicator style={styles.loader} color={'white'} size={50} />
        )}
        <TouchableHighlight
          onPress={() => {
            setPause(!pause);
          }}>
          <Video
            style={{...styles.videoWrapper, aspectRatio: aspectRatio}}
            resizeMode={ResizeMode.COVER}
            ref={videoPlayerRef}
            source={{uri: video}}
            volume={1}
            muted={false}
            onLoad={({naturalSize}) => {
              if (naturalSize && naturalSize.width && naturalSize.width > 0) {
                setAspectRatio(naturalSize.width / naturalSize.height);
              }
              setReady(true);
            }}
            onEnd={() => {
              videoPlayerRef.current.seek(0);
              if (viewableIndex < arrLength) {
                flashListRef?.current?.scrollToIndex({
                  index: viewableIndex + 1,
                  animated: true,
                });
              }
            }}
            poster={thumbnail}
            onError={e => null}
            repeat={true}
            paused={pause}
          />
        </TouchableHighlight>
      </View>
    );
  },
);

export default React.memo(VideoPlayer);
