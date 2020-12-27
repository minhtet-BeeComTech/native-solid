import React from 'react'
import { View, KeyboardAvoidingView } from 'react-native'
import { Formik } from 'formik'
import * as Yup from 'yup'

import { ButtonCom } from '../button'
import { MyTextInput } from '../validateform'
import { TextCom } from '../typo'
import styles from './style'

export const ChangePassCom = props => {
  const { title, desc, handleUpdate } = props

  const validationSchema = Yup.object({
    password: Yup.string()
      .required('Password is required')
      .min(3, 'Password is too short'),
    confirm_password: Yup.string()
      .required('Confirm password is required')
      .test('passwords-match', 'Confirm password match with password', function (value) {
        return this.parent.password === value
      })
  })

  const onDataSubmit = (values, actions) => {
    setTimeout(() => {
      handleUpdate(values)
      actions.resetForm(initialValues)
      actions.setSubmitting(false)
    }, 1000)
  }

  let initialValues = {
    password: '',
    confirm_password: ''
  }

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
                  label='Password'
                  placeholder='Enter your password'
                  formikKey='password'
                  formikProps={formikProps}
                  required
                  secure
                />
                <MyTextInput
                  label='Confirm Password'
                  placeholder='Enter your confirm password'
                  formikKey='confirm_password'
                  formikProps={formikProps}
                  required
                  secure
                />
                <ButtonCom
                  bgColor='primary'
                  color='white'
                  onPress={formikProps.handleSubmit}
                  text={formikProps.isSubmitting ? 'Update ...' : 'Update'}
                />
              </>
            )
          }
        </Formik>
      </View>
    </KeyboardAvoidingView>
  )
}