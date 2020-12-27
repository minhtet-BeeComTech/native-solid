import React from 'react'

import {
  StyledText,
  StyledBtnImage,
  StyledButton
} from '../../theme'

export const ButtonCom = props => {
  const { text, img } = props

  return (
    <StyledButton {...props} >
      {img && <StyledBtnImage source={img} />}
      <StyledText {...props}>
        {text}
      </StyledText>
    </StyledButton>
  )
}