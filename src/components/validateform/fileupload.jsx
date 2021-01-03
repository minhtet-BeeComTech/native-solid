import React from 'react'

import { FileUploadCom } from '../form'
import { FieldWrapper } from './fieldwrapper'

export const VFileUpload = ({ formikKey, formikProps, ...props }) => {

  return (
    <FieldWrapper formikKey={formikKey} formikProps={formikProps} {...props}>
      <FileUploadCom
        onHandleChange={data => formikProps.setFieldValue(formikKey, [...formikProps.values[formikKey], ...data])}
        {...props}
      />
    </FieldWrapper>
  )
}