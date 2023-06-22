import {SCREEN_ID} from 'navigation/screen';
import React, {useEffect} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Navigation, NavigationFunctionComponent} from 'react-native-navigation';
import {METRICS} from 'utils/constant';
import {IFoodItem} from 'utils/models';

interface Props {
  data: IFoodItem;
}

const FoodDetail: NavigationFunctionComponent<Props> = props => {
  const {data} = props;
  console.log('props', props);

  useEffect(() => {
    const listener = {
      componentDidAppear: () => {
        console.log('RNN', `componentDidAppear`);
      },
      componentDidDisappear: () => {
        console.log('RNN', `componentDidDisappear`);
      },
    };
    // Register the listener to all events related to our component
    const unsubscribe = Navigation.events().registerComponentListener(
      listener,
      SCREEN_ID.FOOD_DETAIL_ID,
    );
    return () => {
      // Make sure to unregister the listener during cleanup
      unsubscribe.remove();
    };
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={data.image}
        nativeID={`image${data.id}Dest`}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: METRICS.WIDTH - 32,
    height: METRICS.WIDTH * 0.5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    alignSelf: 'center',
    marginTop: 16,
  },
});

export default FoodDetail;
