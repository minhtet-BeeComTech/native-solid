import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import { TopTabBarCom } from "./TopTabBar";

const TabCom = createMaterialTopTabNavigator();

export const TopTabItemCom = TabCom.Screen;

export const TopTabContainerCom = ({ children, ...props }: any) => {
  return (
    <TabCom.Navigator
      tabBar={(tabProps: any) => (
        <TopTabBarCom {...{ ...props, ...tabProps }} />
      )}
      {...props}
    >
      {children}
    </TabCom.Navigator>
  );
};
