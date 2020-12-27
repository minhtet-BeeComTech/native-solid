import React from 'react'
import { ActivityIndicator } from 'react-native'

import { color } from '../../theme'
import { StyledLoader } from './style'

export default () => (
  <StyledLoader>
    <ActivityIndicator size="large" color={color.loading.primary} />
  </StyledLoader>
)