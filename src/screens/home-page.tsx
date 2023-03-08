import SCREEN_ID from 'navigation/screen-id';
import React, {Button, StyleSheet, Text, View} from 'react-native';
import {Navigation, NavigationFunctionComponent} from 'react-native-navigation';
import {useAppDispatch} from 'store/hooks';
import {initActions} from 'store/slices/initSlice';

interface Props {
  name: string;
}

const HomePage: NavigationFunctionComponent<Props> = ({componentId}) => {
  const dispatch = useAppDispatch();

  return (
    <View style={styles.root}>
      <Text>Hello React Native Navigation 👋</Text>
      <Button
        title="Add redux data"
        color="#710ce3"
        onPress={() => dispatch(initActions.addData({title: 'test'}))}
      />
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
