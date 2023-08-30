import React, { memo } from "react";
import { View } from "react-native";

import { StyledCommingSoonContainer } from "../../../theme";
import { IconCom } from "../icon";
import { TextCom } from "../typo";

export const CommingSoonCom = memo(({ children, props }: any) => {
  return (
    <StyledCommingSoonContainer {...props}>
      {children ? (
        children
      ) : (
        <>
          <View style={{ marginBottom: 20 }}>
            <IconCom
              name="cloud"
              type="MaterialCommunityIcons"
              color="text"
              iconSize={70}
            />
          </View>
          <TextCom weight="xl" style={{ marginBottom: 10 }}>
            Comming Soon
          </TextCom>
          <TextCom size="sm" style={{ marginBottom: 30 }}>
            It will be available soon!
          </TextCom>
        </>
      )}
    </StyledCommingSoonContainer>
  );
});
