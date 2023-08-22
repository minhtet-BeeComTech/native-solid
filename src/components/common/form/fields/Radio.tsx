import React from "react";
import { StyledRadioCon, StyledRadioCircle, StyledRB } from "theme";

import { FieldContainer } from "./FieldContainer";

export const RadioCom: React.FC<FormComponents.RadioCom> = ({
  value,
  onValueChange,
  rightRender,
  leftRender,
  type,
  disabled,
  ...props
}) => (
  <FieldContainer {...props}>
    <StyledRadioCon
      style={props.style}
      disabled={disabled}
      onPress={onValueChange}
    >
      {leftRender && <>{leftRender}</>}
      <StyledRadioCircle value={value}>
        {value && <StyledRB />}
      </StyledRadioCircle>
      {rightRender && <>{rightRender}</>}
    </StyledRadioCon>
  </FieldContainer>
);
