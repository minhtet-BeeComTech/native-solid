import React, { forwardRef } from "react";
import { View } from "react-native";

type CollapseBodyProps = {
  children?: React.ReactNode;
  ref?: any;
};
export const CollapseBody: React.FC<CollapseBodyProps> = forwardRef(
  ({ children, ...restProps }, ref) => {
    return (
      <View ref={ref} {...restProps}>
        {children}
      </View>
    );
  }
);
