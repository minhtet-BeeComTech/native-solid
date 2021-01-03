
import React, { useState } from 'react'
import { Platform } from 'react-native'

import { DateTimePickerCom } from '../form'
import { FieldWrapper } from './fieldwrapper'

export const VDateTimePicker = ({ formikKey, formikProps, max, ...props }) => {
  const [show, setShow] = useState(false)

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || formikProps?.values[formikKey]
    setShow(Platform.OS === 'ios')
    formikProps.setFieldValue(formikKey, currentDate)
  }

  return (
    <FieldWrapper formikKey={formikKey} formikProps={formikProps} >
      <DateTimePickerCom
        value={formikProps?.values[formikKey]}
        onChange={onChange}
        show={show}
        opendatePicker={() => setShow(true)}
        onBlur={formikProps?.handleBlur(formikKey)}
        {...props}
      />
    </FieldWrapper>
  )
}