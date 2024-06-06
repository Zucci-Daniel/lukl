import {useFocusEffect} from '@react-navigation/native';
import {FlashList} from '@shopify/flash-list';
import {
  ActivityIndicator,
  Dimensions,
  Platform,
  StyleSheet,
  View,
} from 'react-native';
import React, {useCallback, useRef, useState} from 'react';
import DashboardView from './DashboardView';
import {useQuery} from 'react-query';
import {URLS} from '../../apis/urls';
import {IVideo} from '../../types/video';
import httpService from '../../apis/http';
import Indicator from '../../components/indicator';

const windowHeight = Dimensions.get('window').height;

function Following({jumpTo, route}: Partial<any>) {
  const mediaRefs = useRef([]);
  const flashListRef = useRef<any>(null);
  const [showVideoTabs, setShowVideoTabs] = useState(true);
  const [videoList, setVideoList] = useState<IVideo[]>([]);

  const {isLoading, isFetching, isRefetching} = useQuery(
    `following`,
    () => httpService.get(`${URLS.FOLLOWING}`),
    {
      onSuccess: res => {
        const data: IVideo[] = res.data;
        const onlyVideos = data.filter(file => {
          return file.media.videoUrl.length > 0;
        });
        setVideoList([...onlyVideos]);
      },
    },
  );

  const onViewableItemsChanged = useRef(({changed}: any) => {
    changed.forEach((el: any) => {
      const cell: any = mediaRefs.current[el.index];
      if (cell) {
        if (el.isViewable) {
          cell.callViewableIndex(el?.index);
          cell.playVideo(el?.index, mediaRefs.current.length);
        } else {
          cell.pauseVideo();
        }
      }
    });
  });

  useFocusEffect(
    useCallback(() => {
      const unsubscribe = () => {
        mediaRefs.current = [];
      };

      return () => unsubscribe();
    }, [route]),
  );

  return (
    <View style={[styles.container, {backgroundColor: 'black'}]}>
      <Indicator route={route} to={jumpTo} />
      <FlashList
        ref={flashListRef}
        data={videoList}
        pagingEnabled={true}
        viewabilityConfig={{
          itemVisiblePercentThreshold: 90,
        }}
        estimatedItemSize={windowHeight}
        onViewableItemsChanged={onViewableItemsChanged.current}
        keyExtractor={(item, index) => item.id}
        decelerationRate={'normal'}
        showsVerticalScrollIndicator={false}
        renderItem={({item, index}) => (
          <DashboardView
            item={item}
            index={index}
            key={item.id}
            mediaRefs={mediaRefs}
            showVideoTabs={showVideoTabs}
            setShowVideoTabs={setShowVideoTabs}
            flashListRef={flashListRef as any}
            video={item.media.videoUrl}
            route={route}
            jumpTo={jumpTo}
          />
        )}
      />
      {(isLoading || isFetching) && videoList.length === 0 && (
        <ActivityIndicator size={50} style={styles.loader} color={'white'} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: '100%',
    ...Platform.select({
      ios: {
        height: windowHeight,
      },
      android: {
        height: windowHeight,
      },
    }),
  },
  communityBox: {
    position: 'absolute',
    right: '2.5%',
    zIndex: 6,
    top: '2.5%',
    width: 50,
    height: 50,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  people: {
    width: 25,
    height: 25,
  },
  loader: {
    position: 'absolute',
    top: '40%',
    left: '45%',
  },
});
export default React.memo(Following);
