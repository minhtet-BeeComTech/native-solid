import React from 'react'

import { PickerCom } from '../form'
import { FieldWrapper } from './fieldwrapper'

export const VPicker = ({ formikKey, formikProps, ...props }) => {

  return (
    <FieldWrapper formikKey={formikKey} formikProps={formikProps} {...props}>
      <PickerCom
        selectedValue={formikProps.values[formikKey]}
        onValueChange={formikProps.handleChange(formikKey)}
        onBlur={formikProps.handleBlur(formikKey)}
        {...props}
      />
    </FieldWrapper>
  )
}