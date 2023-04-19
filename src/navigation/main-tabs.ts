import {Icons} from 'assets/images';
import {Layout} from 'react-native-navigation';
import {SCREEN_ID, SCREEN_NAME} from './screen';

export const MainTabs: Layout = {
  bottomTabs: {
    children: [
      {
        stack: {
          children: [
            {
              component: {
                id: SCREEN_ID.HOME_PAGE_ID,
                name: SCREEN_NAME.HOME_PAGE,
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
                id: SCREEN_ID.SETTINGS_ID,
                name: SCREEN_NAME.SETTINGS,
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
