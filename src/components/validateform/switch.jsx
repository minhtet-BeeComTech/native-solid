import React from 'react'
import { SwitchCom } from '../form'

import { FieldWrapper } from './fieldwrapper'

export const VSwitch = ({ formikKey, formikProps, ...props }) => {

  return (
    <FieldWrapper formikKey={formikKey} formikProps={formikProps} {...props}>
      <SwitchCom
        value={formikProps.values[formikKey]}
        onValueChange={value => {
          formikProps.setFieldValue(formikKey, value);
        }}
        {...props}
      />
    </FieldWrapper>
  )
}