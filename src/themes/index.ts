import light from './light';
import dark from './dark';

type Theme = typeof light;

export type ThemeNames = 'light' | 'dark';

export interface ThemeMeta {
  id: ThemeNames;
  name: string;
  theme: Theme;
}

export const themes: readonly ThemeMeta[] = [
  {
    id: 'light',
    name: 'Default Light',
    theme: light,
  },
  {
    id: 'dark',
    name: 'Default Dark',
    theme: dark,
  },
];

export type {Theme};
