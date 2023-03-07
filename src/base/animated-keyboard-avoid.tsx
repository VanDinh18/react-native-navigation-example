import React, {FC, ReactNode, useEffect} from 'react';
import {Keyboard, KeyboardEventListener} from 'react-native';
import {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import AnimatedBox, {AnimatedBoxProps} from './animated-box';

const AnimatedKeyboardAvoid: FC<
  AnimatedBoxProps & {
    children: ReactNode;
    offset?: number;
    onKeyboardWillHide?: KeyboardEventListener;
  }
> = props => {
  const {children, offset = 0, onKeyboardWillHide} = props;
  const keyboardOffset = useSharedValue(offset);

  const startAnimation = (toValue: number) => (keyboardOffset.value = toValue);

  useEffect(() => {
    // start the animation when the keyboard appears
    Keyboard.addListener('keyboardWillShow', e => {
      // use the height of the keyboard (negative because the translateY moves upward)
      startAnimation(-e.endCoordinates?.height);
    });
    // perform the reverse animation back to keyboardOffset initial value: offset
    Keyboard.addListener('keyboardWillHide', e => {
      startAnimation(offset);
      onKeyboardWillHide?.(e);
    });
    return () => {
      Keyboard.removeAllListeners('keyboardWillShow');
      Keyboard.removeAllListeners('keyboardWillHide');
    };
  }, []);

  const animAvoidStyle = useAnimatedStyle(() => {
    const translateY = withTiming(keyboardOffset.value, {duration: 200});
    return {
      transform: [{translateY}],
    };
  }, []);

  return (
    <AnimatedBox {...props} style={animAvoidStyle}>
      {children}
    </AnimatedBox>
  );
};

export default AnimatedKeyboardAvoid;
