import React from 'react'
import PropTypes from 'prop-types'

import { StyledCard } from '../../../../src/theme'

export const CardCom = props => {

  return (
    <StyledCard {...props} >
      {props.children}
    </StyledCard>
  )
}

CardCom.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}