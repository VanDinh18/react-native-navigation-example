export type Route = {
  key: string;
  icon?: string;
  title?: string;
  accessible?: boolean;
  accessibilityLabel?: string;
  testID?: string;
};

export type NavigationState = {
  index: number;
  routes: Route[];
};

export type IPagerViewAdapterHandle = {
  jumpTo: (index: number) => void;
};
