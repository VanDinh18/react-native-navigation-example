import {DrawerLayout} from 'navigation/drawer-layout';
import React from 'react';
import {View, Button, StyleSheet} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {MainTabs} from '../navigation/main-tabs';

const SignIn = (props: {componentId: string}) => {
  return (
    <View style={styles.root}>
      <Button
        title="SignIn"
        onPress={() => {
          Navigation.setRoot({
            root: DrawerLayout,
          });
        }}
      />
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

export default SignIn;
