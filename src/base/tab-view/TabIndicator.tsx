import React, {useRef} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import Animated, {
  SharedValue,
  useAnimatedReaction,
  useAnimatedStyle,
} from 'react-native-reanimated';
import {NavigationState} from './types';

interface TabIndicatorProps {
  navigationState: NavigationState;
  positions: Animated.SharedValue<Record<string, number>>;
}

const TabIndicator = (props: TabIndicatorProps) => {
  const {positions, navigationState} = props;

  const {routes, index} = navigationState;

  useAnimatedReaction(
    () => positions.value,
    data => {},
    [],
  );

  const indicatorStyle = useAnimatedStyle(() => {
    return {};
  }, []);

  return (
    <Animated.View
      style={[{backgroundColor: 'blue', height: 5}, indicatorStyle]}
    />
  );
};

export default TabIndicator;
