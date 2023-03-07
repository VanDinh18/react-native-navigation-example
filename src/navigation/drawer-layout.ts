import {Layout} from 'react-native-navigation';
import {MainTabs} from './main-tabs';
import SCREEN_ID from './screen-id';

export const DrawerLayout: Layout = {
  sideMenu: {
    left: {
      component: {
        name: SCREEN_ID.SIDE_MENU,
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
