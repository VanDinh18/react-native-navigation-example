import {Layout} from 'react-native-navigation';
import {MainTabs} from './main-tabs';
import {SCREEN_ID, SCREEN_NAME} from './screen';

export const DrawerLayout: Layout = {
  sideMenu: {
    left: {
      component: {
        id: SCREEN_ID.SIDE_MENU_ID,
        name: SCREEN_NAME.SIDE_MENU,
      },
    },
    options: {
      sideMenu: {
        left: {
          width: 250,
        },
      },
    },
    center: MainTabs,
  },
};
