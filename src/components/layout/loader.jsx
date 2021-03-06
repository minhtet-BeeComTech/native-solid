import React from 'react'
import { ActivityIndicator } from 'react-native'

import { color, StyledLoader } from 'theme'

export default () => (
  <StyledLoader>
    <ActivityIndicator size='large' color={color.loading.primary} />
  </StyledLoader>
)