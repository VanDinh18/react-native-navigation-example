import type {Frame} from 'react-native-vision-camera';

/**
 * Scans faces.
 */
export function scanFaces(frame: Frame): string[] {
  'worklet';
  // @ts-ignore
  return __scanFaces(frame);
}
