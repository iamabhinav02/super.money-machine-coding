import { THEME, THEME_TYPES } from "../common/colors";
import { THEMED_STYLE } from "../common/theme";

const generate = <T extends CallableFunction, >(stylesGenerateFunc: T) => {
  // @ts-ignore
  type IStyle = ReturnType<T>
  // @ts-ignore
  const themedStyles: THEMED_STYLE<T> = {};
  Object.values(THEME_TYPES).map((value) => {
    themedStyles[value] = stylesGenerateFunc(THEME[value]);
  });

  return themedStyles as THEMED_STYLE<IStyle>;
};

export const Theme = {
  generate: generate
};
