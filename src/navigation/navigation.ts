import {SCREEN_NAME} from 'navigation/screen';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';
import {Navigation} from 'react-native-navigation';
import CartPage from 'screens/cart-page';
import FoodDetail from 'screens/food-detail';
import GiftPage from 'screens/gift-page';
import HomePage from 'screens/home-page';
import Settings from 'screens/settings';
import SideMenu from 'screens/side-menu';
import SignIn from 'screens/sign-in';
import {reduxProvider} from 'store/redux-provider';

Navigation.setDefaultOptions({
  statusBar: {
    backgroundColor: '#4d089a',
  },
  topBar: {
    title: {
      color: 'white',
    },
    backButton: {
      color: 'white',
    },
    background: {
      color: '#4d089a',
    },
  },
});

export const registerComponent = () => {
  Navigation.registerComponent(
    SCREEN_NAME.HOME_PAGE,
    () => gestureHandlerRootHOC(reduxProvider(HomePage)),
    () => HomePage,
  );

  Navigation.registerComponent(
    SCREEN_NAME.CART_PAGE,
    () => gestureHandlerRootHOC(reduxProvider(CartPage)),
    () => HomePage,
  );

  Navigation.registerComponent(
    SCREEN_NAME.GIFT_PAGE,
    () => gestureHandlerRootHOC(reduxProvider(GiftPage)),
    () => HomePage,
  );

  Navigation.registerComponent(
    SCREEN_NAME.SETTINGS,
    () => reduxProvider(Settings),
    () => Settings,
  );

  Navigation.registerComponent(
    SCREEN_NAME.SIGN_IN,
    () => gestureHandlerRootHOC(reduxProvider(SignIn)),
    () => SignIn,
  );

  Navigation.registerComponent(SCREEN_NAME.SIDE_MENU, () => SideMenu);
  Navigation.registerComponent(SCREEN_NAME.FOOD_DETAIL, () => FoodDetail);
};
