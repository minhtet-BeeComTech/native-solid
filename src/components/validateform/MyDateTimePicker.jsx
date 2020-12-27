
import React, { useState } from 'react'
import { Platform, TouchableOpacity } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker'
import moment from 'moment'

import { TextCom } from '../typo'
import { IconCom } from '../icon'
import { FieldWrapper } from './fieldwrapper'
import { color } from '../../../../src/theme'

export const MyDateTimePicker = ({ formikKey, formikProps, max, ...props }) => {
  const [show, setShow] = useState(false)

  const changeDate = date => {
    const currentDate = formikProps?.values[formikKey] || date
    setShow(Platform.OS === 'ios')
    date && formikProps.setFieldValue(formikKey, currentDate)
  }

  const opendatePicker = () => {
    setShow(true)
  }

  return (
    <FieldWrapper formikKey={formikKey} formikProps={formikProps} {...props}>
      <TouchableOpacity onPress={opendatePicker} style={{ position: 'relative', justifyContent: 'center', paddingLeft: 10, height: 40, borderWidth: 1, borderRadius: 5, borderColor: color.form.borderColor }}>
        {formikProps?.values[formikKey] ?
          <TextCom>{moment(formikProps?.values[formikKey])?.format('ll')}</TextCom>
          :
          <TextCom>{props?.placeholder}</TextCom>
        }
        <IconCom name='date-range' iconsize='xl' style={{ position: 'absolute', top: 7, right: 10 }} />
      </TouchableOpacity>
      {show && <DateTimePicker
        value={formikProps?.values[formikKey]}
        mode='date'
        is24Hour={true}
        display='default'
        onChange={changeDate}
        onBlur={formikProps?.handleBlur(formikKey)}
        maximumDate={max && max}
      />}
    </FieldWrapper>
  )
}