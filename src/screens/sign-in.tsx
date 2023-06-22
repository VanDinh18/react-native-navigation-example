import { DrawerLayout } from 'navigation/drawer-layout';
import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { storage } from 'store/config';
import { useAppDispatch } from 'store/hooks';
import { initActions } from 'store/slices/initSlice';

const SignIn = (props: { componentId: string }) => {
  return (
    <View style={styles.container}>
      <Button
        title="SignIn"
        onPress={() => {
          storage.set(
            'user.token',
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
          );
          // dispatch(initActions.setToken('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'));
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
