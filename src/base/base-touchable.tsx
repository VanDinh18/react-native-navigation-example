import * as React from 'react';
import {Pressable, PressableProps} from 'react-native';
export interface BaseTouchableProps extends PressableProps {
  activeOpacity?: number;
}

const BaseTouchable = ({
  activeOpacity = 0.8,
  style,
  ...props
}: BaseTouchableProps) => {
  const baseStyle: any = ({pressed}: {pressed: boolean}) => [
    {opacity: pressed ? activeOpacity : 1},
    style && style,
  ];

  return (
    <Pressable style={baseStyle} {...props}>
      {props.children}
    </Pressable>
  );
};

export default BaseTouchable;
