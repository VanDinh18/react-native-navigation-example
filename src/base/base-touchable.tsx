import * as React from 'react';
import Pressable, {PressableProps} from './base-pressable';

export interface BaseTouchableProps extends PressableProps {
  activeOpacity?: number;
}

const BaseTouchable = ({
  activeOpacity = 0.8,
  style,
  ...props
}: BaseTouchableProps) => {
  const _style: any = ({pressed}: {pressed: boolean}) => [
    {opacity: pressed ? activeOpacity : 1},
    style && style,
  ];

  return (
    <Pressable style={_style} {...props}>
      {props.children}
    </Pressable>
  );
};

export default BaseTouchable;
