import {IVideo} from '@/types/video';
import {useEffect, useState} from 'react';
import {useToast} from 'react-native-toast-notifications';

interface UseLikeBoxProps {
  likes?: number;
  item?: IVideo;
  commentCount?: number;
}

export default function useLikeBox({likes = 0}: UseLikeBoxProps) {
  const toast = useToast();
  const [isLiked, setIsLiked] = useState(false);
  const [isCracked, setIsCracked] = useState(false);
  const [showFollow, setShowFollow] = useState(true);
  const [avatarLoaded, setAvatarLoaded] = useState(false);
  const [likesCount, setLikesCount] = useState(likes);
  const [isFollowing, setIsFollowing] = useState(false);

  useEffect(() => {
    let timeout = setTimeout(() => {
      if (isFollowing) {
        setShowFollow(false);
      }
    }, 2000);
    return () => {
      clearTimeout(timeout);
    };
  }, [isFollowing]);

  const likeSubmit = async () => {
    setIsLiked(prev => !prev);
    setLikesCount(prev => (isLiked ? prev - 1 : prev + 1));
  };

  const followUser = async () => {
    setIsFollowing(prev => !prev);
  };

  return {
    isLiked,
    isCracked,
    showFollow,
    avatarLoaded,
    likesCount,
    isFollowing,
    likeSubmit,
    followUser,
    toast,
    setIsCracked,
  };
}
