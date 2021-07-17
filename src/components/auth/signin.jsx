import React from 'react'
import { View } from 'react-native'
import { Formik } from 'formik'

import { TextCom } from '../typo'

export const SignInCom = ({ title, handleSignIn, initialValues, validationSchema, children, btnText }) => {

  const onDataSubmit = (values, actions) => {
    setTimeout(async () => {
      await handleSignIn(values)
      actions.resetForm(initialValues)
      actions.setSubmitting(false)
    }, 1000)
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', marginLeft: 20, marginRight: 20 }}>
      <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom: 10 }}>
        <TextCom color='primary' size='lg' weight='xl'>{title}</TextCom>
      </View>
      <Formik
        enableReinitialize
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => onDataSubmit(values, actions)}
      >
        {formikProps => children(formikProps)}
      </Formik>
    </View>
  )
}

SignInCom.defaultProps = {
  title: 'Sign Up'
}