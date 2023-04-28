import {AuthStack} from 'navigation/auth-stack';
import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {storage} from 'store/config';
import {useAppSelector} from 'store/hooks';

const GiftPage = () => {
  const {data} = useAppSelector(state => state.init);

  return <View style={styles.container}></View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default GiftPage;
