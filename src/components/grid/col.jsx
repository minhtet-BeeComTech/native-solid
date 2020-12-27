import React from 'react'
import PropTypes from 'prop-types'

import { StyledCol } from '../../../../src/theme'

export const Col = ({ style, children }) => {

  return (
    <StyledCol style={style}>
      {children}
    </StyledCol>
  )
}

Col.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}