import {Icons} from 'assets/images';
import {Layout} from 'react-native-navigation';
import {SCREEN_ID, SCREEN_NAME} from './screen';
import {COLORS} from 'utils/colors';
import {FONTS} from 'utils/fonts';

export const MainTabs: Layout = {
  bottomTabs: {
    options: {
      topBar: {
        visible: false,
      },
      bottomTabs: {
        borderWidth: 0,
        borderColor: COLORS.transparent,
        elevation: 3,
        hideShadow: true,
        hideOnScroll: true,
        shadow: {
          opacity: 0.6,
          color: COLORS.black,
          radius: 1,
        },
      },
    },
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
                    text: 'MAIN',
                    selectedTextColor: COLORS.purple1,
                    icon: Icons.IcTabHome,
                    fontSize: 8,
                    fontFamily: FONTS.medium,
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
                id: SCREEN_ID.CART_PAGE_ID,
                name: SCREEN_NAME.CART_PAGE,
                options: {
                  bottomTab: {
                    text: 'CART',
                    selectedTextColor: COLORS.purple1,
                    icon: Icons.IcCart,
                    fontSize: 8,
                    fontFamily: FONTS.medium,
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
                id: SCREEN_ID.GIFT_PAGE_ID,
                name: SCREEN_NAME.GIFT_PAGE,
                options: {
                  bottomTab: {
                    text: 'GIFT',
                    selectedTextColor: COLORS.purple1,
                    icon: Icons.IcGift,
                    fontSize: 8,
                    fontFamily: FONTS.medium,
                    badge: '8',
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
                    text: 'SETTING',
                    selectedTextColor: COLORS.purple1,
                    icon: Icons.IcTabSettings,
                    fontSize: 8,
                    fontFamily: FONTS.medium,
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
