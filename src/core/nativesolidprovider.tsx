import React from "react";
import { ThemeProvider } from "styled-components";

import { ToastCom } from "components";
import { useSettings } from "hooks";

export const NativeSolidProvider = ({
  children,
  themeProps,
  ...props
}: any) => {
  const { baseTheme } = useSettings();

  return (
    <ThemeProvider theme={baseTheme} {...themeProps}>
      {children}
      <ToastCom />
    </ThemeProvider>
  );
};
