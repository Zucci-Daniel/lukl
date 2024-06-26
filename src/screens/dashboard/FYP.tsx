import {useFocusEffect} from '@react-navigation/native';
import {FlashList} from '@shopify/flash-list';
import React, {useCallback, useRef, useState} from 'react';
import {ActivityIndicator, Dimensions, View} from 'react-native';
import {useQuery} from 'react-query';
import httpService from '../../apis/http';
import {URLS} from '../../apis/urls';
import Indicator from '../../components/indicator';
import {IVideo} from '../../types/video';
import DashboardView from './DashboardView';
import {fypStyles} from './styles';

const windowHeight = Dimensions.get('window').height;

function Fyp({jumpTo, route}: {jumpTo: any; route: any}) {
  const palette: any = {};
  const mediaRefs = useRef([]);
  const flashListRef = useRef<any>(null);
  const [showVideoTabs, setShowVideoTabs] = useState(true);
  const [videoList, setVideoList] = useState<IVideo[]>([]);

  const {isLoading, isFetching} = useQuery(
    `fyp`,
    () => httpService.get(`${URLS.FYP}`),
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
    <View style={[fypStyles.container, {backgroundColor: palette.surface}]}>
      <Indicator route={route} to={jumpTo} />
      <FlashList
        ref={flashListRef}
        data={videoList}
        pagingEnabled={true}
        estimatedItemSize={windowHeight}
        viewabilityConfig={{
          itemVisiblePercentThreshold: 90,
        }}
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
        <ActivityIndicator size={50} style={fypStyles.loader} color={'black'} />
      )}
    </View>
  );
}

export default React.memo(Fyp);
