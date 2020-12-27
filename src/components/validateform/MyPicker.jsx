import React from 'react'
import { View, Platform, StyleSheet } from 'react-native'
import { Picker } from '@react-native-picker/picker'

import { FieldWrapper } from './fieldwrapper'
import { color } from '../../../../src/theme'

export const MyPicker = ({ formikKey, formikProps, itemData, ...props }) => {

  return (
    <FieldWrapper formikKey={formikKey} formikProps={formikProps} {...props}>
      <View style={styles.pickerContainer}>
        <Picker
          style={styles.pickerContent}
          mode='dropdown'
          selectedValue={formikProps.values[formikKey]}
          onValueChange={formikProps.handleChange(formikKey)}
          onBlur={formikProps.handleBlur(formikKey)}
          {...props}
        >
          {itemData.map((x, i) => (
            <Picker.Item key={i} label={x.name} value={x.value} style={styles.pickerItem} />
          ))}
        </Picker>
      </View>
    </FieldWrapper>
  )
}

const styles = StyleSheet.create({
  pickerContainer: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: color.form.borderColor
  },
  pickerContent: {
    height: Platform.OS === 'ios' ? 'auto' : 40
  },
  pickerItem: {
    paddingLeft: 10
  }
})