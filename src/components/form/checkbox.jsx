import React from 'react'
import { StyledCheckBoxCon, StyledCheckBox, StyledTick } from '../../theme'

export const CheckBoxCom = (props) => {
  const { value, onValueChange } = props

  return (
    <StyledCheckBoxCon onPress={onValueChange}>
      <StyledCheckBox>
        {value && <StyledTick />}
      </StyledCheckBox>
    </StyledCheckBoxCon>
  )
}