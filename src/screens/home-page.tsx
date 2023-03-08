import {Icons} from 'assets/images';
import SCREEN_ID from 'navigation/screen-id';
import React, {View, Button, Text, StyleSheet} from 'react-native';
import {NavigationFunctionComponent, Navigation} from 'react-native-navigation';
import {useAppSelector} from 'store/hooks';

interface Props {
  name: string;
}

const HomePage: NavigationFunctionComponent<Props> = ({componentId, name}) => {
  const {data} = useAppSelector(state => state.init);
  console.log('data', data);

  return (
    <View style={styles.root}>
      <Text>Hello React Native Navigation 👋</Text>
      <Button
        title="Open side menu"
        color="#710ce3"
        onPress={() =>
          Navigation.mergeOptions(componentId, {
            sideMenu: {
              left: {
                visible: true,
              },
            },
          })
        }
      />
      <Button
        title="Push Settings Screen"
        color="#710ce3"
        onPress={() =>
          Navigation.showModal({
            stack: {
              children: [
                {
                  component: {
                    name: SCREEN_ID.SETTINGS,
                    options: {
                      topBar: {
                        title: {
                          text: 'Modal',
                        },
                      },
                    },
                  },
                },
              ],
            },
          })
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

HomePage.options = {
  topBar: {
    title: {
      text: 'Hello functional component',
    },
    subtitle: {
      text: 'Hello',
    },
    rightButtons: [
      {
        id: 'compose',
        systemItem: 'compose',
        color: 'red',
      },
    ],
  },
};

export default HomePage;
