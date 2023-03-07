import {
  Image as NativeImage,
  ImageProps as NativeImageProps,
} from 'react-native';
import {createBox} from '@shopify/restyle';
import {Theme} from 'themes';

const BaseImage = createBox<Theme, NativeImageProps>(NativeImage);
export type BaseImageProps = React.ComponentProps<typeof BaseImage>;

export default BaseImage;
