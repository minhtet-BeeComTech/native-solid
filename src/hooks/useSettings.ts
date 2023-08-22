import * as theme from "theme/attributes";

let baseTheme = { ...theme, color: theme.lightColor };
export const useSettings = (props?: any) => {
  return {
    baseTheme,
  };
};
