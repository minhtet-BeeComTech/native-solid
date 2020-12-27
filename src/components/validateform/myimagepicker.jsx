import React from 'react'

import { ImagePickerCom } from '../form'
import { FieldWrapper } from './fieldwrapper'

export const MyImagePicker = ({ formikKey, formikProps, ...props }) => {

  return (
    <FieldWrapper formikKey={formikKey} formikProps={formikProps} {...props}>
      <ImagePickerCom
        onHandleChange={data => formikProps.setFieldValue(formikKey, [...formikProps.values[formikKey], ...[data]])}
        {...props}
      />
    </FieldWrapper>
  )
}