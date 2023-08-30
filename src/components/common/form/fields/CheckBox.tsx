import React from "react";
import { StyledCheckBoxCon, StyledCheckBox, StyledTick } from "../../../../theme";

import { FieldContainer } from "./FieldContainer";

export const CheckBoxCom: React.FC<FormComponents.CheckBoxCom> = ({
  value,
  onValueChange,
  children,
  tickStyle,
  type,
  ...props
}) => (
  <FieldContainer {...props}>
    <StyledCheckBoxCon onPress={onValueChange}>
      <StyledCheckBox value={value} {...props}>
        {value && <StyledTick style={{ ...tickStyle }} />}
      </StyledCheckBox>
      {children}
    </StyledCheckBoxCon>
  </FieldContainer>
);
