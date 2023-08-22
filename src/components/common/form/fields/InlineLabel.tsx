import React from "react";
import { TouchableOpacity, View } from "react-native";

import { TextCom } from "../../typo";
import { IconCom } from "../../icon";

export const InlineLabelCom = ({ inlineLabelConProps, ...props }: any) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
      {...inlineLabelConProps}
    >
      <View style={{ flex: 1 }}>
        <TextCom color="gray30" weight="lg">
          {props?.label}
        </TextCom>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <TextCom weight="lg">{props?.value}</TextCom>
        {props?.isCopy && (
          <TouchableOpacity style={{ marginLeft: 4 }}>
            <IconCom name="ios-copy-outline" type="Ionicons" iconSize={24} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};
