import {Icons} from 'assets/images';
import {Layout} from 'react-native-navigation';
import SCREEN_ID from './screen-id';

export const MainTabs: Layout = {
  bottomTabs: {
    children: [
      {
        stack: {
          children: [
            {
              component: {
                name: SCREEN_ID.HOME_PAGE,
                options: {
                  bottomTab: {
                    text: 'Home',
                    selectedTextColor: 'red',
                    icon: Icons.IcTabHome,
                  },
                },
              },
            },
          ],
        },
      },
      {
        stack: {
          children: [
            {
              component: {
                name: SCREEN_ID.SETTINGS,
                options: {
                  bottomTab: {
                    text: 'Settings',
                    selectedTextColor: 'red',
                    icon: Icons.IcTabHome,
                  },
                },
              },
            },
          ],
        },
      },
    ],
  },
};
