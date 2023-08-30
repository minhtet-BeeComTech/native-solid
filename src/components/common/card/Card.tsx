import React, { memo, useState } from "react";

import { StyledCard, StyledPressableCard } from "../../../theme";
import { TextCom } from "../typo";

export const CardCom: React.FC<CommonComponents.CardCom> = memo(
  ({ pressable = false, children, ...props }) => {
    const [isPressed, setIsPressed] = useState<boolean>(false);
    const onPressIn = () => setIsPressed(true);
    const onPressOut = () => setIsPressed(false);

    return pressable ? (
      <StyledPressableCard
        isPressed={isPressed}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        disabled={!props.onPress}
        {...props}
      >
        {children ? (
          children
        ) : (
          <TextCom color="desc" style={{ textAlign: "center" }}>
            Card children is required!
          </TextCom>
        )}
      </StyledPressableCard>
    ) : (
      <StyledCard delayPressIn={0} disabled={!props.onPress} {...props}>
        {children ? (
          children
        ) : (
          <TextCom color="desc" style={{ textAlign: "center" }}>
            Card children is required!
          </TextCom>
        )}
      </StyledCard>
    );
  }
);

CardCom.defaultProps = {
  isShadow: false,
  activeOpacity: 0.7,
  bgColor: "bgColor",
};
