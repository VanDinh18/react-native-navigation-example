import {createBox} from '@shopify/restyle';
import {Theme} from 'themes';
import {
  SafeAreaView as NativeSafeAreaView,
  SafeAreaViewProps as NativeSafeAreaViewProps,
} from 'react-native-safe-area-context';

const SafeAreaView = createBox<Theme, NativeSafeAreaViewProps>(
  NativeSafeAreaView,
);
export type SafeAreaViewProps = React.ComponentProps<typeof SafeAreaView>;

export default SafeAreaView;
