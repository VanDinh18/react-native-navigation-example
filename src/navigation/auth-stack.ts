import {Layout} from 'react-native-navigation';
import {SCREEN_ID, SCREEN_NAME} from './screen';

export const AuthStack: Layout = {
  stack: {
    children: [
      {
        component: {
          id: SCREEN_ID.SIGN_IN_ID,
          name: SCREEN_NAME.SIGN_IN,
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
