import React, { ReactNode, useEffect } from 'react';
import {
  BackHandler,
  Modal,
  ModalProps,
  Pressable,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from 'react-native-reanimated';

export interface BaseModalProps extends ModalProps {
  children: ReactNode;
  isVisible: boolean;
  onBackdropPress?: () => void;
  onBackButtonPress?: () => boolean | null | undefined;
}

const BaseModal = (props: BaseModalProps) => {
  const {
    children,
    isVisible = false,
    onBackdropPress,
    onBackButtonPress = () => true,
  } = props;

  const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = useWindowDimensions();

  const translateY = useDerivedValue(() => {
    return withTiming(isVisible ? 0 : 1, { duration: 300 });
  }, [isVisible]);

  const modalContainer = useAnimatedStyle(() => {
    return {
      width: SCREEN_WIDTH,
      height: SCREEN_HEIGHT,
      transform: [
        {
          translateY: interpolate(translateY.value, [0, 1], [0, SCREEN_HEIGHT]),
        },
      ],
    };
  });

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      onBackButtonPress,
    );

    return () => backHandler.remove();
  }, []);

  return (
    <Modal
      transparent
      supportedOrientations={['portrait', 'landscape']}
      visible={isVisible}
      animationType={'none'}
      onRequestClose={onBackButtonPress}
      {...props}>
      <Pressable style={styles.backdrop} onPress={onBackdropPress}>
        <Animated.View style={[styles.modal, modalContainer]}>
          {children}
        </Animated.View>
      </Pressable>
    </Modal>
  );
};

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default BaseModal;
