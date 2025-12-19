import React, { createContext, PropsWithChildren, useContext, useState } from 'react';
import { ModeType, ThemeState, ThemeType } from '../common/theme';

const defaultThemeState: ThemeState = {
  mode: 'light',
  setMode: () => {
  },
  theme: 'LIGHT',
  setTheme: () => {
  }
};

const ThemeContext = createContext(defaultThemeState);

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider: React.FC<PropsWithChildren<unknown>> = ({ children }) => {
  const [mode, setMode] = useState<ModeType>(defaultThemeState.mode);
  const [theme, setTheme] = useState<ThemeType>(defaultThemeState.theme);

  return (
    <ThemeContext.Provider value={{ mode, setMode, theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
