import SCREEN_ID from 'navigation/screen-id';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';
import {Navigation} from 'react-native-navigation';
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
  //   topBar: {
  //     visible: false,
  //     drawBehind: true,
  //     animate: false,
  //   },
});

export const registerComponent = () => {
  Navigation.registerComponent(
    SCREEN_ID.HOME_PAGE,
    () => gestureHandlerRootHOC(reduxProvider(HomePage)),
    () => HomePage,
  );

  Navigation.registerComponent(SCREEN_ID.SETTINGS, () => Settings);
  Navigation.registerComponent(SCREEN_ID.SIGN_IN, () => SignIn);
  Navigation.registerComponent(SCREEN_ID.SIDE_MENU, () => SideMenu);
};
