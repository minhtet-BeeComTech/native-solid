import React from 'react'

import { FieldWrapper } from './FieldWrapper'
import { RadioCom } from '../form'

export const MyRadio = ({ formikKey, formikProps, label, ...rest }) => {

  return (
    <FieldWrapper label={label} formikKey={formikKey} formikProps={formikProps}>
      <RadioCom
        value={formikProps.values[formikKey]}
        onValueChange={() => {
          formikProps.setFieldValue(formikKey, !formikProps.values[formikKey]);
        }}
        {...rest}
      />
    </FieldWrapper>
  )
}