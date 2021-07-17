import React from 'react'
import { View } from 'react-native'
import { Formik } from 'formik'

import { TextCom } from '../typo'
import styles from './style'

export const SignUpCom = ({ title, handleSignUp, children, initialValues, validationSchema }) => {

  const onDataSubmit = (values, actions) => {
    setTimeout(() => {
      handleSignUp(values)
      actions.resetForm(initialValues)
      actions.setSubmitting(false)
    }, 1000)
  }

  return (
    <View style={styles.signup_container}>
      <View style={styles.signup_header_container}>
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
            formikProps => children(formikProps)
          }
        </Formik>
      </View>
    </View>
  )
}