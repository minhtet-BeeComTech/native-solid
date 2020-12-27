import React from 'react'
import { StyledRadioCon, StyledRadioCircle, StyledRB } from 'theme'

export const RadioCom = ({ value, onValueChange }) => (
  <StyledRadioCon onPress={onValueChange}>
    <StyledRadioCircle>
      {value && <StyledRB />}
    </StyledRadioCircle>
  </StyledRadioCon>
)