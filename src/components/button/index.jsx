import React from 'react'

import { TextCom } from '../typo'
import { StyledBtnImage, StyledButton } from '../../../../../src/theme'

export const ButtonCom = props => {
  const { text, img } = props

  return (
    <StyledButton {...props} >
      {img && <StyledBtnImage source={img} />}
      <TextCom {...props}>
        {text}
      </TextCom>
    </StyledButton>
  )
}

ButtonCom.defaultProps = {
  bgColor: 'primary',
  color: 'white',
  type: 'full',
  text: 'button'
}