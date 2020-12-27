import React from 'react'
import { View } from 'react-native'
import { Formik } from 'formik'
import * as Yup from 'yup'

import { ButtonCom } from '../button'
import { MyTextInput, MyPicker, MyDateTimePicker } from '../validateform'
import { TextCom } from '../typo'
import { genderData } from 'data'
import styles from './style'

let date = new Date()
let maxDate = date.setFullYear(date.getFullYear() - 18)

export const SignUpCom = props => {
  const { title, handleSignUp } = props

  const validationSchema = Yup.object({
    name: Yup.string()
      .required('Name is required'),
    gender: Yup.string()
      .required('Gender is required'),
    user_phone: Yup.number()
      .required('Phone number is required'),
    dob: Yup.date()
      .required('Date of birth is required'),
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
      handleSignUp(values)
      actions.resetForm(initialValues)
      actions.setSubmitting(false)
    }, 1000)
  }

  const initialValues = {
    name: '',
    gender: '',
    user_phone: '',
    dob: new Date(maxDate),
    password: '',
    confirm_password: ''
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
            formikProps => (
              <>
                <MyTextInput
                  label='Name'
                  placeholder='Enter your name'
                  formikKey='name'
                  formikProps={formikProps}
                  required
                />
                <MyTextInput
                  label='Phone'
                  placeholder='Enter your phone'
                  formikKey='user_phone'
                  formikProps={formikProps}
                  keyboardType='number-pad'
                  required
                />
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
                <MyPicker
                  label='Gender'
                  placeholder={'Select your gender'}
                  formikKey='gender'
                  formikProps={formikProps}
                  itemData={genderData}
                  required
                />
                <MyDateTimePicker
                  label='Date of birth'
                  placeholder='Enter your date of birth'
                  formikKey='dob'
                  formikProps={formikProps}
                  mode='date'
                  is24Hour={true}
                  display='default'
                  maximumDate={new Date(maxDate)}
                  required
                />
                <ButtonCom
                  bgColor='primary'
                  color='white'
                  onPress={formikProps.handleSubmit}
                  text={formikProps.isSubmitting ? 'Sign Up ...' : 'Sign Up'}
                />
              </>
            )
          }
        </Formik>
      </View>
    </View>
  )
}