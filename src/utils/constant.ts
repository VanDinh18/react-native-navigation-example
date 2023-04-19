import {LoremIpsum} from 'lorem-ipsum';
import {Dimensions} from 'react-native';
import shortid from 'shortid';

export const HEADER_HEIGHT = 50;

const {width: WINDOW_WIDTH, height: WINDOW_HEIGHT} = Dimensions.get('window');

export const METRICS = {
  WIDTH: WINDOW_WIDTH,
  HEIGHT: WINDOW_HEIGHT,
};

const lorem = new LoremIpsum({
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
});

const capitalizeFirstLetter = ([first, ...rest]: string) =>
  first.toLocaleUpperCase() + rest.join('');

export const getListChat = () => {
  const data = [];
  for (let i = 0; i < 100; ++i) {
    data.push({
      id: shortid.generate(),
      name: capitalizeFirstLetter(
        lorem.generateWords(Math.round(Math.random()) + 2),
      ),
      last_message: capitalizeFirstLetter(
        lorem.generateSentences(Math.round(Math.random() * 50) + 1),
      ),
    });
  }
  return data;
};

export const DATA_MESSAGE = [
  {
    _id: 1,
    text: "1.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    createdAt: new Date(Date.UTC(2016, 5, 11, 17, 20, 0)),
    user: {
      _id: 11,
      name: 'React Native',
      avatar: 'https://picsum.photos/id/11/100',
    },
    image: 'https://facebook.github.io/react/img/logo_og.png',
    video:
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    sent: true,
    received: true,
    pending: true,
  },
  {
    _id: 2,
    text: '2.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters',
    createdAt: new Date(Date.UTC(2017, 5, 11, 17, 20, 0)),
    user: {
      _id: 22,
      name: 'React Native',
      avatar: 'https://picsum.photos/id/22/100',
    },
    image: 'https://facebook.github.io/react/img/logo_og.png',
    video:
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    sent: true,
    received: true,
    pending: true,
  },
  {
    _id: 3,
    text: '3.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters',
    createdAt: new Date(Date.UTC(2017, 5, 11, 17, 20, 0)),
    user: {
      _id: 22,
      name: 'React Native',
      avatar: 'https://picsum.photos/id/22/100',
    },
    image: 'https://facebook.github.io/react/img/logo_og.png',
    video:
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    sent: true,
    received: true,
    pending: true,
  },
  {
    _id: 4,
    text: "4.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    createdAt: new Date(Date.UTC(2016, 5, 11, 17, 20, 0)),
    user: {
      _id: 11,
      name: 'React Native',
      avatar: 'https://picsum.photos/id/11/100',
    },
    image: 'https://facebook.github.io/react/img/logo_og.png',
    video:
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    sent: true,
    received: true,
    pending: true,
  },
  {
    _id: 5,
    text: '5.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters',
    createdAt: new Date(Date.UTC(2017, 5, 11, 17, 20, 0)),
    user: {
      _id: 22,
      name: 'React Native',
      avatar: 'https://picsum.photos/id/22/100',
    },
    image: 'https://facebook.github.io/react/img/logo_og.png',
    video:
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    sent: true,
    received: true,
    pending: true,
  },
  {
    _id: 6,
    text: '6.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters',
    createdAt: new Date(Date.UTC(2017, 5, 11, 17, 20, 0)),
    user: {
      _id: 22,
      name: 'React Native',
      avatar: 'https://picsum.photos/id/22/100',
    },
    image: 'https://facebook.github.io/react/img/logo_og.png',
    video:
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    sent: true,
    received: true,
    pending: true,
  },
];
