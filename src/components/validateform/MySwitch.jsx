import React from 'react'
import { Switch } from 'react-native'

import { FieldWrapper } from './FieldWrapper'

export const MySwitch = ({ formikKey, formikProps, label, ...rest }) => {

  return (
    <FieldWrapper label={label} formikKey={formikKey} formikProps={formikProps}>
      <Switch
        value={formikProps.values[formikKey]}
        onValueChange={value => {
          formikProps.setFieldValue(formikKey, value);
        }}
        {...rest}
      />
    </FieldWrapper>
  )
}