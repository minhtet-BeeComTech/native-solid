import React from 'react'

import { StyledText } from '../../theme'

export const FieldWrapper = ({ children, label, formikProps, formikKey }) => (
  <>
    <StyledText style={{ marginBottom: 3 }}>{label}</StyledText>
    {children}
    <StyledText size='xs' color='error' style={{ marginBottom: 10 }}>
      {formikProps.touched[formikKey] && formikProps.errors[formikKey]}
    </StyledText>
  </>
)