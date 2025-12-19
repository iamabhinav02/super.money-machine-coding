import { useTheme } from '../contexts/ThemeProvider';
import { THEMED_STYLE, ThemeType } from '../common/theme';

export const useThemedStyle = <T extends THEMED_STYLE<any>, >(styles: T, customTheme?: ThemeType) => {
  const { theme } = useTheme();
  return styles[customTheme || theme] as T['LIGHT'];
};

export default useThemedStyle;
