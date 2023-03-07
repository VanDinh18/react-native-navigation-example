import {Insets} from 'react-native';

export const hitSlop = (value: number): Insets => {
  const insets: Insets = {top: value, bottom: value, left: value, right: value};
  return insets;
};
