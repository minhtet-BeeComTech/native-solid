import React from 'react'

import { AvatarContainer, AvatarImage } from 'theme'

export const Avatar = ({ size, ...props }) => (
  <AvatarContainer size={size}>
    <AvatarImage {...props} />
  </AvatarContainer>
)