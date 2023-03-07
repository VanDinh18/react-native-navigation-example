import SCREEN_ID from 'navigation/screen-id';
import {Navigation} from 'react-native-navigation';
import {AuthStack} from 'navigation/auth-stack';
import HomePage from 'screens/home-page';
import Settings from 'screens/settings';
import SignIn from 'screens/sign-in';
import SideMenu from 'screens/side-menu';

Navigation.registerComponent(SCREEN_ID.HOME_PAGE, () => HomePage);
Navigation.registerComponent(SCREEN_ID.SETTINGS, () => Settings);
Navigation.registerComponent(SCREEN_ID.SIGN_IN, () => SignIn);
Navigation.registerComponent(SCREEN_ID.SIDE_MENU, () => SideMenu);

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

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: AuthStack,
  });
});
