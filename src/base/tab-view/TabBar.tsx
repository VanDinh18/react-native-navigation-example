import React, {useEffect, useRef} from 'react';
import {Pressable, Text, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {NavigationState} from './types';

interface TabBarProps {
  navigationState: NavigationState;
  jumpTo: (index: number) => void;
}

const SPACING = 20;

const TabBar = (props: TabBarProps) => {
  const {navigationState, jumpTo} = props;
  const {routes, index: scrollIndex} = navigationState;

  const flRef = useRef<FlatList>(null);

  useEffect(() => {
    flRef.current?.scrollToIndex({
      index: scrollIndex,
      animated: true,
      viewPosition: 0.5,
      viewOffset: SPACING,
    });
  }, [scrollIndex]);

  const renderItem = ({item, index}: {item: any; index: number}) => {
    const isFocused = navigationState.index === index;
    return (
      <Pressable
        style={{
          paddingHorizontal: 20,
          paddingVertical: 10,
          borderRadius: 30,
          borderWidth: 1,
        }}
        onLayout={e => {}}
        onPress={() => jumpTo(index)}>
        <Text style={{color: isFocused ? 'pink' : 'gray'}}>{item.title}</Text>
      </Pressable>
    );
  };

  const renderSeparator = () => <View style={{width: SPACING}} />;

  return (
    <View style={{}}>
      <FlatList
        ref={flRef}
        initialScrollIndex={scrollIndex}
        data={routes}
        renderItem={renderItem}
        ItemSeparatorComponent={renderSeparator}
        horizontal
        bounces={false}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default TabBar;
