import {FlashList} from '@shopify/flash-list';
import * as React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import {IVideo} from '../../types/video';
import LikeBox from '../../components/like-box';
import VideoPlayer from '../../components/video-player';
import PostDetails from '../../components/post';

const windowHeight = Dimensions.get('window').height;

export default function DashboardView({
  mediaRefs,
  item,
  index,
  showVideoTabs,
  setShowVideoTabs,
  video,
  flashListRef,
  route,
}: {
  route: {key: string; title: string};
  jumpTo: (key: string) => void;
} & Partial<{
  mediaRefs: any;
  item: IVideo;
  index: number;
  showVideoTabs: boolean;
  setShowVideoTabs: any;
  video: string;
  image: string;
  flashListRef: FlashList<any> | null;
}>) {
  return (
    <View style={styles.container}>
      {showVideoTabs && (
        <LikeBox
          item={item}
          commentCount={item?.comments || 0}
          likes={item?.likes || 0}
        />
      )}

      <VideoPlayer
        showVideoTabs={showVideoTabs}
        setShowVideoTabs={setShowVideoTabs}
        route={route}
        video={video?.replace('http://', 'https://')}
        thumbnail={item?.media.previewUrl}
        postId={item?.id}
        flashListRef={flashListRef}
        index={index}
        ref={(VideoSingleRef: any) =>
          (mediaRefs.current[index as number] = VideoSingleRef)
        }
      />
      {showVideoTabs && (
        <PostDetails
          post={{
            ...(item as IVideo),
            caption:
              "Don't know to finish this. #hashtag and #second How are you guys doing over there",
          }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: '100%',
    height: windowHeight,
  },
  more: {
    position: 'absolute',
    right: '2.5%',
    zIndex: 6,
    marginTop: '2.5%',
  },
});
