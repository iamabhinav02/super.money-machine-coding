import React, { createContext, PropsWithChildren, useContext, useEffect, useState } from 'react';
import { ModeType, ThemeState, ThemeType } from '../common/theme';
import { loadFromStorage } from '../utils/storage';

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

  useEffect(() => {
    const savedTheme = loadFromStorage('theme', 'LIGHT');
    setTheme(savedTheme);
  }, []);

  return (
    <ThemeContext.Provider value={{ mode, setMode, theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
