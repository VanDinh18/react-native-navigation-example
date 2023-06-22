import React, {ReactNode, useRef} from 'react';
import {StyleSheet, View} from 'react-native';
import PagerViewAdapter from './PagerViewAdapter';
import TabBar from './TabBar';
import {IPagerViewAdapterHandle, NavigationState} from './types';

interface TabViewProps {
  navigationState: NavigationState;
  onIndexChange?: (index: number) => void;
  renderScene: any;
}

const TabView = (props: TabViewProps) => {
  const {navigationState, onIndexChange, renderScene} = props;
  const pagerViewAdapterRef = useRef<IPagerViewAdapterHandle>(null);

  const jumpTo = (index: number) => {
    pagerViewAdapterRef.current?.jumpTo(index);
  };

  return (
    <View style={styles.container}>
      <TabBar navigationState={navigationState} jumpTo={jumpTo} />
      <PagerViewAdapter
        ref={pagerViewAdapterRef}
        navigationState={navigationState}
        onIndexChange={onIndexChange}>
        {navigationState.routes.map((route, index) => {
          const focused = navigationState.index === index;
          return (
            <View
              key={route.key}
              style={styles.route}
              accessibilityElementsHidden={!focused}
              importantForAccessibility={
                focused ? 'auto' : 'no-hide-descendants'
              }>
              {renderScene[route.key]}
            </View>
          );
        })}
      </PagerViewAdapter>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  route: {
    flex: 1,
    overflow: 'hidden',
  },
});

export default TabView;
