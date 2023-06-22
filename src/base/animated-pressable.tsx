import * as React from 'react';
import Animated, {AnimateProps} from 'react-native-reanimated';
import {createBox} from '@shopify/restyle';
import {Theme} from 'themes';
import {
  Pressable as NativePressable,
  PressableProps as NativePressableProps,
} from 'react-native';

const AnimatedPressable = createBox<Theme, AnimateProps<NativePressableProps>>(
  Animated.createAnimatedComponent(NativePressable),
);

export type AnimatedPressableProps = React.ComponentProps<
  typeof AnimatedPressable
>;
export default AnimatedPressable;
