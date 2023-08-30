import React from "react";

import { StyleGestureScrollView } from "../../../theme";

export const GestureScrollViewCom = ({ children, ...props }: any) => {
  return (
    <StyleGestureScrollView showsVerticalScrollIndicator={false} {...props}>
      {children}
    </StyleGestureScrollView>
  );
};
