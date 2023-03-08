import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useAppSelector} from 'store/hooks';

const Settings = () => {
  const {data} = useAppSelector(state => state.init);

  return (
    <View style={styles.root}>
      <Text>{`data length: ${data.length}`}</Text>
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

export default Settings;
