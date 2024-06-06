import {FlashList} from '@shopify/flash-list';
import * as React from 'react';
import {View} from 'react-native';
import LikeBox from '../../components/like-box';
import PostDetails from '../../components/post';
import VideoPlayer from '../../components/video-player';
import {IVideo} from '../../types/video';
import {styles} from './styles';

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
        video={video}
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
              'Exploring the beauty of Nollywood cinema. #Nollywood #CinemaLovers',
          }}
        />
      )}
    </View>
  );
}
