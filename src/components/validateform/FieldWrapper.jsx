import React from 'react'
import { View } from 'react-native'

import { TextCom } from '../typo'

export const FieldWrapper = ({ formikKey, formikProps, label, required, children, ...props }) => (
  <>
    <TextCom style={{ marginBottom: 3 }}>{label} {required && '*'}</TextCom>
    <View {...props}>
      {children}
    </View>
    <TextCom size='xs' color='error' style={{ marginBottom: 10 }}>
      {formikProps.touched[formikKey] && formikProps.errors[formikKey]}
    </TextCom>
  </>
)