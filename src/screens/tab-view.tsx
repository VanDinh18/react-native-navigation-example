import TabView from 'base/tab-view/TabView';
import React, {memo, useState} from 'react';
import {StyleSheet, View} from 'react-native';

const FirstRoute = memo(() => {
  return <View style={{flex: 1, backgroundColor: '#ff4081'}} />;
});

const SecondRoute = memo(() => {
  return <View style={{flex: 1, backgroundColor: '#673ab7'}} />;
});

const SignIn = (props: {componentId: string}) => {
  const [index, setIndex] = useState<number>(0);

  const [routes] = useState([
    {key: 'first', title: 'FIRST'},
    {key: 'second', title: 'SECOND'},
    {key: 'third', title: 'THIRD'},
    {key: 'four', title: 'FOUR'},
    {key: 'five', title: 'FIVE'},
    {key: 'six', title: 'SIX'},
  ]);

  const renderScene = {
    first: <FirstRoute />,
    second: <SecondRoute />,
  };

  return (
    <View style={styles.container}>
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={index => {
          setIndex(index);
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
