import React from 'react'

import { FieldWrapper } from './FieldWrapper'
import { StyledInput } from '../../theme'

export const MyTextInput = ({ label, formikProps, formikKey, ...rest }) => {

  return (
    <FieldWrapper label={label} formikKey={formikKey} formikProps={formikProps}>
      <StyledInput
        onChangeText={formikProps.handleChange(formikKey)}
        onBlur={formikProps.handleBlur(formikKey)}
        {...rest}
      />
    </FieldWrapper>
  )
}