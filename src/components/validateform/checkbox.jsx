import React from 'react'

import { FieldWrapper } from './fieldwrapper'
import { CheckBoxCom } from '../form'

export const VCheckBox = ({ formikKey, formikProps, ...props }) => (
  <FieldWrapper formikKey={formikKey} formikProps={formikProps} {...props}>
    <CheckBoxCom
      value={formikProps.values[formikKey]}
      onValueChange={() => {
        formikProps.setFieldValue(formikKey, !formikProps.values[formikKey]);
      }}
      {...props}
    />
  </FieldWrapper>
)