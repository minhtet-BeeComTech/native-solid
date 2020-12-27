import React from 'react'
import { Switch } from 'react-native'

import { FieldWrapper } from './fieldwrapper'

export const MySwitch = ({ formikKey, formikProps, ...props }) => {

  return (
    <FieldWrapper formikKey={formikKey} formikProps={formikProps} {...props}>
      <Switch
        value={formikProps.values[formikKey]}
        onValueChange={value => {
          formikProps.setFieldValue(formikKey, value);
        }}
        {...props}
      />
    </FieldWrapper>
  )
}