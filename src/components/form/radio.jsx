import React from 'react'
import { StyledRadioCon, StyledRadioCircle, StyledRB, } from '../../../../../src/theme'

export const RadioCom = props => {
  const { value, onValueChange } = props

  return (
    <StyledRadioCon onPress={onValueChange}>
      <StyledRadioCircle>
        {value && <StyledRB />}
      </StyledRadioCircle>
    </StyledRadioCon>
  )
}