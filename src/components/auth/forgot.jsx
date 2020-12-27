import React from 'react'
import { View, KeyboardAvoidingView } from 'react-native'
import { Formik } from 'formik'
import * as Yup from 'yup'

import { ButtonCom } from '../button'
import { MyTextInput } from '../validateform'
import { TextCom } from '../typo'
import styles from './style'

export const ForgotPassCom = props => {
  const { title, desc, handleVerify } = props

  const validationSchema = Yup.object({
    user_phone: Yup.number()
      .required('Phone number is required')
  })

  const onDataSubmit = (values, actions) => {
    setTimeout(() => {
      handleVerify(values)
      actions.resetForm(initialValues)
      actions.setSubmitting(false)
    }, 1000)
  }

  let initialValues = { user_phone: '' }

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.forgot_container}>
      <View style={styles.forgot_header_container}>
        <TextCom size='md' weight='xl'>{title}</TextCom>
      </View>
      <View style={styles.fogot_input_container}>
        <Formik
          enableReinitialize
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values, actions) => onDataSubmit(values, actions)}
        >
          {
            formikProps => (
              <>
                <MyTextInput
                  label='Phone'
                  placeholder='Enter your phone'
                  formikKey='user_phone'
                  formikProps={formikProps}
                  keyboardType='number-pad'
                  autoFocus
                  required
                />
                <ButtonCom
                  bgColor='primary'
                  color='white'
                  onPress={formikProps.handleSubmit}
                  text={formikProps.isSubmitting ? 'Verify ...' : 'Verify'}
                />
              </>
            )
          }
        </Formik>
      </View>
    </KeyboardAvoidingView>
  )
}