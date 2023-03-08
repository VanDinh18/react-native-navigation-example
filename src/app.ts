import {AuthStack} from 'navigation/auth-stack';
import {registerComponent} from 'navigation/navigation';
import {Navigation} from 'react-native-navigation';

export const initializeApp = () => {
  registerComponent();
  Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
      root: AuthStack,
    });
  });
};
