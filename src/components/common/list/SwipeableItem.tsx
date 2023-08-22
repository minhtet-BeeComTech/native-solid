import React from "react";
import { View } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";

import { TextCom } from "../typo";

export const SwipeableItemCom = ({ children, ...props }: any) => {
  return (
    <Swipeable {...props}>
      {children ? (
        children
      ) : (
        <View>
          <TextCom>Need child component!</TextCom>
        </View>
      )}
    </Swipeable>
  );
};
