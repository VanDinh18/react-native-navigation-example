import React, {View, Button, Text, StyleSheet} from 'react-native';
import {NavigationFunctionComponent, Navigation} from 'react-native-navigation';

interface Props {
  name: string;
}

const SideMenu: NavigationFunctionComponent<Props> = ({componentId, name}) => {
  return <View style={styles.container}></View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default SideMenu;
