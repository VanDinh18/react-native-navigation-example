import * as React from 'react';
import BaseImage, {BaseImageProps} from './base-image';

export interface BaseIconProps extends BaseImageProps {
  size: number;
}

const BaseIcon = ({size, ...props}: BaseIconProps) => {
  return (
    <BaseImage height={size} width={size} resizeMode={'contain'} {...props} />
  );
};

export default BaseIcon;
