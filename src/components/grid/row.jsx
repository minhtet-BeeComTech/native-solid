import React from 'react'
import PropTypes from 'prop-types'

import { StyledRow } from 'theme'

export const Row = ({ children }) => {

  return (
    <StyledRow>
      {children}
    </StyledRow>
  )
}

Row.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}