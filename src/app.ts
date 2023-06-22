import {AuthStack} from 'navigation/auth-stack';
import {DrawerLayout} from 'navigation/drawer-layout';
import {registerComponent} from 'navigation/navigation';
import {Navigation} from 'react-native-navigation';
import {storage} from 'store/config';
import '../i18n.config';

const isLogin = () => {
  if (storage.contains('user.token')) {
    return true;
  }
  return false;
};

export const initializeApp = () => {
  registerComponent();

  Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
      root: isLogin() ? DrawerLayout : AuthStack,
    });
  });
};
