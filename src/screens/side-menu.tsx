import React, {View, Button, Text, StyleSheet} from 'react-native';
import {NavigationFunctionComponent, Navigation} from 'react-native-navigation';

interface Props {
  name: string;
}

const SideMenu: NavigationFunctionComponent<Props> = ({componentId, name}) => {
  return (
    <View style={styles.root}>
      <Text>Menu 👋</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'whitesmoke',
  },
});

export default SideMenu;
