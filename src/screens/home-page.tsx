import ListFeatureRestaurant from 'components/list-feature-restaurant';
import React, {StyleSheet, View} from 'react-native';
import {NavigationFunctionComponent} from 'react-native-navigation';
import {useAppDispatch} from 'store/hooks';
import {COLORS} from 'utils/colors';
import {IFoodItem} from 'utils/models';

interface Props {
  name: string;
}

const list: IFoodItem[] = [
  {
    id: 1,
    image: require('../assets/images/img-banner-food.png'),
  },
  {
    id: 2,
    image: require('../assets/images/img-banner-food-2.png'),
  },
  {
    id: 3,
    image: require('../assets/images/img-banner-food.png'),
  },
  {
    id: 4,
    image: require('../assets/images/img-banner-food-2.png'),
  },
];

const HomePage: NavigationFunctionComponent<Props> = ({componentId}) => {
  const dispatch = useAppDispatch();

  return (
    <View style={styles.container}>
      <ListFeatureRestaurant data={list} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
});

HomePage.options = {
  topBar: {
    title: {
      text: 'Hello functional component',
    },
    subtitle: {
      text: 'Hello',
    },
    rightButtons: [
      {
        id: 'compose',
        systemItem: 'compose',
        color: 'red',
      },
    ],
  },
};

export default HomePage;
