import React, {forwardRef} from 'react';
import {
  ColorProps,
  useRestyle,
  spacing,
  border,
  backgroundColor,
  BorderProps,
  BackgroundColorProps,
  composeRestyleFunctions,
  SpacingProps,
  color,
  backgroundColorShorthand,
  BackgroundColorShorthandProps,
  typography,
  TypographyProps,
  SpacingShorthandProps,
  spacingShorthand,
  LayoutProps,
  layout,
  ResponsiveValue,
  useTheme,
  useResponsiveProp,
  createBox,
} from '@shopify/restyle';
import {
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
} from 'react-native';
import {Theme} from 'themes';
import Animated, {AnimateProps} from 'react-native-reanimated';

type RestyleProps = SpacingProps<Theme> &
  SpacingShorthandProps<Theme> &
  BorderProps<Theme> &
  BackgroundColorProps<Theme> &
  BackgroundColorShorthandProps<Theme> &
  ColorProps<Theme> &
  TypographyProps<Theme> &
  LayoutProps<Theme>;

const restyleFunctions = composeRestyleFunctions<Theme, RestyleProps>([
  color,
  spacing,
  spacingShorthand,
  border,
  backgroundColor,
  backgroundColorShorthand,
  typography,
  layout,
]);

const RNAnimatedTextInput = createBox<Theme, AnimateProps<RNTextInputProps>>(
  Animated.createAnimatedComponent(RNTextInput),
);

type AnimatedTextInputProps = React.ComponentPropsWithRef<
  typeof RNAnimatedTextInput
> &
  RestyleProps & {
    placeholderColor?: ResponsiveValue<keyof Theme['colors'], Theme>;
  };

const AnimatedTextInput = forwardRef<RNTextInput, AnimatedTextInputProps>(
  ({placeholderColor, ...rest}, ref) => {
    const props = useRestyle(restyleFunctions, rest as any);
    const theme = useTheme<Theme>();
    const placeholderTextColorProp =
      placeholderColor && useResponsiveProp(placeholderColor);
    const placeholderTextColorValue =
      placeholderTextColorProp && theme.colors[placeholderTextColorProp];
    return (
      <RNAnimatedTextInput
        ref={ref}
        {...props}
        placeholderTextColor={placeholderTextColorValue}
      />
    );
  },
);

export default AnimatedTextInput;
