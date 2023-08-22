import React, { forwardRef } from "react";
import { View } from "react-native";

type CollapseHeaderProps = {
  children?: React.ReactNode;
  ref?: any;
};
export const CollapseHeader: React.FC<CollapseHeaderProps> = forwardRef(
  ({ children, ...restProps }, ref) => {
    return (
      <View ref={ref} {...restProps}>
        {children}
      </View>
    );
  }
);
