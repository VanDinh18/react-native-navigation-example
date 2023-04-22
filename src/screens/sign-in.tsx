import {DrawerLayout} from 'navigation/drawer-layout';
import React from 'react';
import {Button, StyleSheet, View} from 'react-native';
import {Navigation} from 'react-native-navigation';

const SignIn = (props: {componentId: string}) => {
  return (
    <View style={styles.container}>
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
  container: {
    flex: 1,
    backgroundColor: 'whitesmoke',
  },
});

export default SignIn;
