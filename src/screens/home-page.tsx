import {Icons} from 'assets/images';
import BaseText from 'base/base-text';
import ButtonSquare from 'components/button-square';
import ListFeatureRestaurant from 'components/list-feature-restaurant';
import {SCREEN_ID} from 'navigation/screen';
import {useTranslation} from 'react-i18next';
import React, {StyleSheet, Text, View} from 'react-native';
import {Navigation, NavigationFunctionComponent} from 'react-native-navigation';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useAppDispatch, useAppSelector} from 'store/hooks';
import {COLORS} from 'utils/colors';
import {FONTS} from 'utils/fonts';
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

  const insets = useSafeAreaInsets();
  const {t} = useTranslation();

  const onOpenMenu = () => {
    Navigation.mergeOptions(SCREEN_ID.SIDE_MENU_ID, {
      sideMenu: {
        left: {
          visible: true,
        },
      },
    });
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingTop: Math.max(insets.top, 10),
          paddingBottom: 10,
          paddingHorizontal: 16,
        }}>
        <ButtonSquare icon={Icons.IcMenuUnfold} onPress={onOpenMenu} />
        <View style={{alignItems: 'center'}}>
          <View>
            <BaseText
              origin={'Deliver to'}
              style={{color: '#8C9099', fontSize: 14}}
            />
          </View>
          <BaseText
            origin={'4102  Pretty View Lane'}
            style={{
              color: COLORS.purple1,
              fontFamily: FONTS.medium,
              fontSize: 16,
            }}
          />
        </View>
        <ButtonSquare
          icon={Icons.avatar}
          iconStyle={{height: '100%', width: '100%', borderRadius: 8}}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
});

export default HomePage;
