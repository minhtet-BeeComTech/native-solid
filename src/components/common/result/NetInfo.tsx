import React, { memo } from "react";
import { View } from "react-native";

import { StyledNetInfoContainer } from "../../../theme";
import { IconCom } from "../icon";
import { TextCom } from "../typo";

export const NetInfoCom = memo(({ children, ...props }: any) => {
  return (
    <StyledNetInfoContainer {...props}>
      {children ? (
        children
      ) : (
        <>
          <View style={{ marginBottom: 20 }}>
            <IconCom
              name="connection"
              type="MaterialCommunityIcons"
              color="text"
              iconSize={70}
            />
          </View>
          <TextCom weight="xl" style={{ marginBottom: 10 }}>
            No Internet Connection
          </TextCom>
          <TextCom size="sm" style={{ marginBottom: 30 }}>
            Please check your connection and try again!
          </TextCom>
        </>
      )}
    </StyledNetInfoContainer>
  );
});
