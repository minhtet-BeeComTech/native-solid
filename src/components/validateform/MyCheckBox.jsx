import React from 'react'

import { FieldWrapper } from './FieldWrapper'
import { CheckBoxCom } from '../form'

export const MyCheckBox = ({ formikKey, formikProps, label, ...rest }) => {

  return (
    <FieldWrapper label={label} formikKey={formikKey} formikProps={formikProps}>
      <CheckBoxCom
        value={formikProps.values[formikKey]}
        onValueChange={() => {
          formikProps.setFieldValue(formikKey, !formikProps.values[formikKey]);
        }}
        {...rest}
      />
    </FieldWrapper>
  )
}