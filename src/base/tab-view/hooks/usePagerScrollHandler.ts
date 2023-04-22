import {DependencyList} from 'react';
import {PagerViewOnPageScrollEventData} from 'react-native-pager-view';
import {useEvent, useHandler} from 'react-native-reanimated';

export const usePagerScrollHandler = (
  handlers: {
    onPageScroll: (event: PagerViewOnPageScrollEventData, context: {}) => void;
  },
  dependencies?: DependencyList,
) => {
  const {context, doDependenciesDiffer} = useHandler(handlers, dependencies);
  const subscribeForEvents = ['onPageScroll'];

  return useEvent<PagerViewOnPageScrollEventData>(
    event => {
      'worklet';
      const {onPageScroll} = handlers;
      if (onPageScroll) {
        onPageScroll(event, context);
      }
    },
    subscribeForEvents,
    doDependenciesDiffer,
  );
};
