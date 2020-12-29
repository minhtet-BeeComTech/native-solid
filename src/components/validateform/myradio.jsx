import React from 'react'

import { FieldWrapper } from './fieldwrapper'
import { RadioCom } from '../form'

export const MyRadio = ({ formikKey, formikProps, ...props }) => {

  return (
    <FieldWrapper formikKey={formikKey} formikProps={formikProps} {...props}>
      <RadioCom
        value={formikProps.values[formikKey]}
        onValueChange={() => {
          formikProps.setFieldValue(formikKey, !formikProps.values[formikKey])
        }}
        {...props}
      />
    </FieldWrapper>
  )
}