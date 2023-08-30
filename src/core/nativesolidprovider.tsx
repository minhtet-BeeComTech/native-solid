import React from "react";
import { ThemeProvider } from "styled-components";

import { ToastCom } from "../components";
import { useTheme } from "../hooks";

export const NativeSolidProvider = ({
  children,
  themeProps,
  ...props
}: any) => {
  const { baseTheme } = useTheme();

  return (
    <ThemeProvider theme={baseTheme} {...themeProps}>
      {children}
      <ToastCom />
    </ThemeProvider>
  );
};
