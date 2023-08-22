import React, { memo } from "react";
import { View } from "react-native";

import { IconCom } from "../icon";
import { TextCom } from "../typo";

export const EmptyBoxCom = memo(
  ({
    title = "No Data Available!",
    desc,
    iconProps,
    children,
    ...props
  }: any) => {
    return (
      <View style={{ flex: 1, opacity: 0.5 }} {...props}>
        {children ? (
          children
        ) : (
          <View
            style={{
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <IconCom
              name="cloud"
              type="MaterialCommunityIcons"
              color="text"
              iconSize={70}
              {...iconProps}
            />
            <TextCom weight="lg">{title}</TextCom>
            {desc && <TextCom>{desc}</TextCom>}
          </View>
        )}
      </View>
    );
  }
);
