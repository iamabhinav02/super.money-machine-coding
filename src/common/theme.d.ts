export interface THEMED_STYLE<T> {
  'LIGHT': T;
  'DARK': T;
}

export type ModeType = 'light' | 'dark';
export type ThemeType = 'LIGHT' | 'DARK';

interface ThemeState {
  mode: ModeType;
  theme: ThemeType;

  setMode(mode: ModeType): void;

  setTheme(theme: ThemeType): void;
}
