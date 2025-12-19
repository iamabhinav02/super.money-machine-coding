export interface THEMED_STYLE<T> {
  'LIGHT': T;
  'DARK': T;
}

export type ModeType = 'light' | 'dark';
export type ThemeType = 'LIGHT' | 'DARK';

interface ThemeState {
  // to be deprecated after migration
  mode: ModeType;
  // new fields for defining styles at build time.
  theme: ThemeType;

  setMode(mode: ModeType): void;

  setTheme(theme: ThemeType): void;
}
