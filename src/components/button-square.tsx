import BaseTouchable, {BaseTouchableProps} from 'base/base-touchable';
import React from 'react';
import {
  Image,
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
  ViewStyle,
} from 'react-native';
import {COLORS} from 'utils/colors';

interface Props extends BaseTouchableProps {
  containerStyle?: StyleProp<ViewStyle>;
  iconStyle?: StyleProp<ImageStyle>;
  icon: ImageSourcePropType;
}

const ButtonSquare = (props: Props) => {
  const {containerStyle, iconStyle, icon} = props;

  return (
    <BaseTouchable
      style={[
        {
          height: 38,
          width: 38,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: COLORS.white,
          borderRadius: 8,
          shadowColor: COLORS.black,
          shadowOpacity: 0.2,
          shadowRadius: 4,
          shadowOffset: {
            width: 0,
            height: 1,
          },
        },
        containerStyle,
      ]}
      {...props}>
      <Image
        source={icon}
        style={[{width: 24, height: 24}, iconStyle]}
        resizeMode={'contain'}
      />
    </BaseTouchable>
  );
};

export default ButtonSquare;
