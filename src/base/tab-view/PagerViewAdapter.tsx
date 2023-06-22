import {forwardRef, useImperativeHandle, useRef} from 'react';
import {StyleSheet} from 'react-native';
import PagerView from 'react-native-pager-view';
import Animated, {useSharedValue} from 'react-native-reanimated';
import {usePagerScrollHandler} from './hooks/usePagerScrollHandler';
import {IPagerViewAdapterHandle, NavigationState} from './types';

const AnimatedViewPager = Animated.createAnimatedComponent(PagerView);

interface PagerViewAdapterProps {
  children: any;
  navigationState: NavigationState;
  onIndexChange?: (index: number) => void;
}

const PagerViewAdapter = forwardRef<
  IPagerViewAdapterHandle,
  PagerViewAdapterProps
>((props, ref) => {
  const {children, navigationState, onIndexChange} = props;

  const pagerRef = useRef<PagerView>(null);
  const position = useSharedValue(1);
  const offset = useSharedValue(0);

  const handler = usePagerScrollHandler({
    onPageScroll: event => {
      'worklet';
      position.value = event.position;
      offset.value = event.offset;
    },
  });

  const jumpTo = (idx: number) => {
    pagerRef.current?.setPage(idx);
  };

  useImperativeHandle(ref, () => ({
    jumpTo,
  }));

  return (
    <AnimatedViewPager
      ref={pagerRef}
      style={[styles.container]}
      keyboardDismissMode={'on-drag'}
      onPageSelected={e => onIndexChange?.(e.nativeEvent.position)}
      onPageScroll={handler}>
      {children}
    </AnimatedViewPager>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default PagerViewAdapter;
