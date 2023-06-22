import {SCREEN_ID, SCREEN_NAME} from 'navigation/screen';
import React from 'react';
import {Dimensions, FlatList, Image, Pressable, View} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {COLORS} from 'utils/colors';
import {METRICS} from 'utils/constant';
import {IFoodItem} from 'utils/models';

interface Props {
  data: IFoodItem[];
}

const MULTIPLIER = 1.2;
const POP_MULTIPLIER = 1.0;
const LONG_DURATION = 540 * MULTIPLIER;
const SHORT_DURATION = 210 * MULTIPLIER;

const SPRING_CONFIG = {mass: 2, damping: 500, stiffness: 200};

const ListFeatureRestaurant = (props: Props) => {
  const {data} = props;

  const goFoodDetail = (item: IFoodItem) => {
    Navigation.push(SCREEN_ID.HOME_PAGE_ID, {
      component: {
        name: SCREEN_NAME.FOOD_DETAIL,
        id: SCREEN_ID.FOOD_DETAIL_ID,
        passProps: {data: item},
        options: {
          animations: {
            push: {
              content: {
                alpha: {
                  from: 0,
                  to: 1,
                  duration: SHORT_DURATION,
                },
              },
              sharedElementTransitions: [
                {
                  fromId: `image${item.id}`,
                  toId: `image${item.id}Dest`,
                  duration: LONG_DURATION,
                  interpolation: {type: 'spring', ...SPRING_CONFIG},
                },
              ],
              elementTransitions: [
                {
                  id: 'description',
                  alpha: {
                    from: 0,
                    duration: SHORT_DURATION,
                  },
                  translationY: {
                    from: 16,
                    duration: SHORT_DURATION,
                  },
                },
              ],
            },
            pop: {
              content: {
                alpha: {
                  from: 1,
                  to: 0,
                  duration: SHORT_DURATION * POP_MULTIPLIER,
                },
              },
              sharedElementTransitions: [
                {
                  fromId: `image${item.id}Dest`,
                  toId: `image${item.id}`,
                  duration: LONG_DURATION * POP_MULTIPLIER,
                  interpolation: {type: 'spring', ...SPRING_CONFIG},
                },
              ],
              elementTransitions: [
                {
                  id: 'description',
                  alpha: {
                    to: 0,
                    duration: SHORT_DURATION,
                  },
                  translationY: {
                    to: 16,
                    duration: SHORT_DURATION,
                  },
                },
              ],
            },
          },
        },
      },
    });
  };

  const renderItem = ({item}: {item: IFoodItem}) => (
    <Pressable
      style={{
        backgroundColor: COLORS.white,
        borderRadius: 4,
      }}
      onPress={() => goFoodDetail(item)}>
      <Image
        nativeID={`image${item.id}`}
        resizeMode={'cover'}
        source={item.image}
        style={{
          width: METRICS.WIDTH - 90,
          height: METRICS.WIDTH * 0.4,
          borderRadius: 4,
        }}
      />
      <View style={{height: METRICS.WIDTH * 0.2}} />
    </Pressable>
  );
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={data}
      renderItem={renderItem}
      style={{flexGrow: 0}}
      contentContainerStyle={{paddingHorizontal: 24}}
      ItemSeparatorComponent={() => <View style={{width: 8}} />}
    />
  );
};

export default ListFeatureRestaurant;
