import { useContext } from "react";
import { ThemeContext } from "styled-components";

export const useTheme = (props: any) => {
  const theme = useContext(ThemeContext);

  if (!theme) {
    throw Error(
      "useTheme: `theme` is undefined. Seems you forgot to wrap your app in `<NativeSolidProvider />`"
    );
  }

  return theme;
};
