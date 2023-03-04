import {Navigation} from 'react-native-navigation';
import App from './App';
import HomePage from './src/screens/home-page';
import Settings from './src/screens/settings';

HomePage.options = {
  topBar: {
    title: {
      text: 'Home',
    },
  },
};

Navigation.registerComponent('com.myApp.WelcomeScreen', () => App);
Navigation.registerComponent('home-page', () => HomePage);
Navigation.registerComponent('settings', () => Settings);

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
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'home-page',
            },
          },
        ],
      },
    },
  });
});
