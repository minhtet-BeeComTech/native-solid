import React from 'react'

import { StyledPickerContainer, StyledPicker, StyledPickerItem } from '../../../../../src/theme'

export const PickerCom = ({ itemData, ...props }) => (
  <StyledPickerContainer>
    <StyledPicker {...props}>
      {itemData?.length > 0 && itemData.map((x, i) => (
        <StyledPickerItem key={i} label={x.name} value={x.value} />
      ))}
    </StyledPicker>
  </StyledPickerContainer>
)