import React from 'react'
import { StyledCheckBoxCon, StyledCheckBox, StyledTick } from 'theme'

export const CheckBoxCom = ({ value, onValueChange }) => (
  <StyledCheckBoxCon onPress={onValueChange}>
    <StyledCheckBox>
      {value && <StyledTick />}
    </StyledCheckBox>
  </StyledCheckBoxCon>
)