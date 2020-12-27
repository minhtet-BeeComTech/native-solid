import React from 'react'
import { View } from 'react-native'
import { Picker } from '@react-native-picker/picker'

import { FieldWrapper } from './FieldWrapper'
import { color } from '../../theme'

export const MyPicker = ({ formikKey, formikProps, label, itemData, ...rest }) => {

  return (
    <FieldWrapper label={label} formikKey={formikKey} formikProps={formikProps}>
      {/* <View style={{ borderRadius: 5, borderWidth: 1, borderColor: color.form.borderColor, overflow: "hidden" }}> */}
        <Picker
          // style={{ margin: -5 }}
          mode='dialog'
          selectedValue={formikProps.values[formikKey]}
          onValueChange={formikProps.handleChange(formikKey)}
          onBlur={formikProps.handleBlur(formikKey)}
          {...rest}
        >
          {itemData.map((x, i) => (
            <Picker.Item key={i} label={x.name} value={x.value} />
          ))}
        </Picker>
      {/* </View> */}
    </FieldWrapper>
  )
}