import {Layout} from 'react-native-navigation';
import {METRICS} from 'utils/constant';
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
          width: METRICS.WIDTH * 0.8,
        },
      },
      statusBar: {},
    },
    center: MainTabs,
  },
};
