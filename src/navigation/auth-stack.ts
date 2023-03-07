import {Layout} from 'react-native-navigation';
import SCREEN_ID from './screen-id';

export const AuthStack: Layout = {
  stack: {
    children: [
      {
        component: {
          name: SCREEN_ID.SIGN_IN,
          options: {
            topBar: {
              title: {
                text: 'Auth',
              },
            },
          },
        },
      },
    ],
  },
};
