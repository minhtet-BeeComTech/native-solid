import React, { useState } from 'react'

import { FieldWrapper } from './fieldwrapper'
import { InputCom } from '../form'
import { IconCom } from '../icon'

export const MyTextInput = ({ formikKey, formikProps, secure, ...props }) => {
  const [isHide, setIsHide] = useState(secure ? true : false)

  return (
    <FieldWrapper formikKey={formikKey} formikProps={formikProps} {...props}>
      <InputCom
        value={formikProps.values[formikKey]}
        onChangeText={formikProps.handleChange(formikKey)}
        onBlur={formikProps.handleBlur(formikKey)}
        secureTextEntry={secure ? isHide : false}
        {...props}
      />
      {
        secure && <IconCom
          name={!isHide ? 'visibility' : 'visibility-off'}
          iconsize='xl'
          color='gray_light'
          style={{ position: 'absolute', top: 7, right: 10 }}
          onPress={() => setIsHide(!isHide)}
        />
      }
    </FieldWrapper>
  )
}

MyTextInput.defaultProps = {
  secure: false
}