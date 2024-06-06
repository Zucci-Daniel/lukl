import {useFocusEffect} from '@react-navigation/native';
import {
  useCallback,
  useContext,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import RouteContext from '../../contexts/routecontext';

export const useVideoPlayer = (parentRef: React.ForwardedRef<unknown>) => {
  const {toggle} = useContext(RouteContext);

  const videoPlayerRef = useRef<any>(null);
  const timeoutRef = useRef<any>(null);
  const [pause, setPause] = useState(true);
  const [viewableIndex, setViewableIndex] = useState(0);
  const [arrLength, setArrLength] = useState(0);
  const [ready, setReady] = useState(false);
  const [aspectRatio, setAspectRatio] = useState(1);

  useImperativeHandle(parentRef, () => ({
    playVideo,
    callViewableIndex,
    pauseVideo,
    unload: unmount,
  }));

  const playVideo = (currentViewableIndex: number, length: number) => {
    if (videoPlayerRef.current == null) {
      return;
    }
    if (pause === false) {
      return;
    }
    setViewableIndex(currentViewableIndex);
    setArrLength(length);
    setPause(false);
  };

  const callViewableIndex = (index: number) => {
    if (videoPlayerRef.current == null) {
      return;
    }
    setViewableIndex(index);
  };

  const stopCountdown = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const pauseVideo = () => {
    if (videoPlayerRef.current == null) {
      return;
    }
    if (pause === true) {
      return;
    }
    setPause(true);
  };
  const unmount = () => {
    if (videoPlayerRef.current == null) {
      return;
    }
    if (pause === true) {
      return;
    }
    videoPlayerRef.current.seek(0);
    setPause(true);
  };

  useFocusEffect(
    useCallback(() => {
      const unsubscribe = () => {
        setPause(true);
        pauseVideo();
      };

      return () => unsubscribe();
    }, []),
  );

  useEffect(() => {
    pauseVideo();
  }, [toggle]);

  return {
    toggle,
    timeoutRef,
    pause,
    setPause,
    viewableIndex,
    setViewableIndex,
    arrLength,
    setArrLength,
    ready,
    setReady,
    aspectRatio,
    setAspectRatio,
    playVideo,
    callViewableIndex,
    stopCountdown,
    pauseVideo,
    unload: unmount,
    videoPlayerRef,
  };
};
