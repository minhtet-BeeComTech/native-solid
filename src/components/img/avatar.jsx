import React from 'react'

import { AvatarContainer, AvatarImage } from '../../../../src/theme'

export const Avatar = ({ size, ...props }) => (
  <AvatarContainer size={size}>
    <AvatarImage {...props} />
  </AvatarContainer>
)