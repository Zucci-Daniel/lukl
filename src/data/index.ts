import {IVideo} from '../types/video';

export const dummyData: IVideo[] = [
  {
    id: '1',
    username: 'Rachel',
    caption: 'Turn up DJ',
    media: {
      type: 'video',
      videoUrl: require('../data/clips/1111421-hd_1920_1080_30fps.mp4'),
      imageUrl: '',
      previewUrl: '',
    },
    profilePhotoUrl: 'https://randomuser.me/api/portraits/women/2.jpg',
    likes: 3982,
    comments: 289,
    shares: 176,
    timestamp: new Date('2024-05-14T10:30:00Z'),
  },
  {
    id: '2',
    username: 'Damien',
    caption: 'Check out this amazing view! 🌅 #nature #travel',
    media: {
      type: 'video',
      videoUrl: require('../data/clips/5973871-uhd_2160_3840_30fps.mp4'),
      imageUrl: '',
      previewUrl: '',
    },
    profilePhotoUrl: 'https://randomuser.me/api/portraits/men/80.jpg',
    likes: 2567,
    comments: 134,
    shares: 98,
    timestamp: new Date('2024-05-14T10:30:00Z'),
  },
  {
    id: '3',
    username: 'Camela95',
    caption: '#Nature Undiluted',
    media: {
      type: 'video',
      videoUrl: require('../data/clips/854105-hd_1920_1080_25fps.mp4'),
      imageUrl: '',
      previewUrl: '',
    },
    profilePhotoUrl: 'https://randomuser.me/api/portraits/women/77.jpg',
    likes: 3245,
    comments: 500,
    shares: 200,
    timestamp: new Date('2024-05-14T10:30:00Z'),
  },
];
