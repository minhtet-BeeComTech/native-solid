import React, { useContext } from "react";
import { TouchableOpacity, View } from "react-native";
import { ThemeContext } from "styled-components";

import { TextCom } from "../typo";

export const ActionSheetCom = ({
  actionConfig,
  handleActionPress,
  keyType,
  valueType = "value",
  children,
  ...props
}: any) => {
  const themeContext = useContext(ThemeContext);

  let actionArr = [
    {
      name: "Camera",
      value: "camera",
    },
    {
      name: "Library",
      value: "library",
    },
    {
      name: "View",
      value: "view",
    },
    {
      name: "Cancel",
      value: "cancel",
    },
  ];

  let actionsArr =
    actionConfig?.actions?.length > 0 ? actionConfig?.actions : actionArr;

  return (
    <View style={{ borderRadius: 10, overflow: "hidden" }}>
      {actionsArr.map((x: any, i: number) =>
        children ? (
          children(x, i, props)
        ) : (
          <View
            key={i}
            style={{
              backgroundColor: themeContext?.color?.actionSheet?.bgColor,
              marginTop: actionsArr.length - 1 === i ? 10 : 0,
              borderRadius: actionsArr.length - 1 === i ? 10 : 0,
              borderBottomLeftRadius: actionsArr.length - 2 === i ? 10 : 0,
              borderBottomRightRadius: actionsArr.length - 2 === i ? 10 : 0,
            }}
          >
            <TouchableOpacity
              onPress={() => handleActionPress && handleActionPress(x[keyType])}
              style={{
                paddingVertical: 13,
                paddingHorizontal: 15,
              }}
            >
              <TextCom textAlign="center" weight="lg">
                {x[valueType]}
              </TextCom>
            </TouchableOpacity>
          </View>
        )
      )}
    </View>
  );
};
