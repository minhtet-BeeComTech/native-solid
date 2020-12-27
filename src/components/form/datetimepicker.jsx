
import React from 'react'
import DateTimePicker from '@react-native-community/datetimepicker'
import moment from 'moment'

import { TextCom } from '../typo'
import { IconCom } from '../icon'
import { StyledDateTimePicker } from '../../../../../src/theme'

export const DateTimePickerCom = ({ opendatePicker, show, ...props }) => (
  <>
    <StyledDateTimePicker onPress={opendatePicker} >
      <TextCom>{props?.value ? moment(props?.value)?.format('ll') : props?.placeholder}</TextCom>
      <IconCom name='date-range' iconsize='xl' style={{ position: 'absolute', top: 7, right: 10 }} />
    </StyledDateTimePicker>
    {show && <DateTimePicker {...props} />}
  </>
)