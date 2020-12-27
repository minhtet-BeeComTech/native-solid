import React, { useEffect, useState } from 'react'
import { TouchableOpacity, View } from 'react-native'
import { Formik } from 'formik'
import * as Yup from 'yup'
import auth from '@react-native-firebase/auth'
import { GoogleSignin } from '@react-native-community/google-signin'
import { LoginManager, AccessToken } from 'react-native-fbsdk'

import { ButtonCom } from '../button'
import { MyTextInput } from '../validateform'
import { TextCom } from '../typo'
import { configKey } from 'controller'

GoogleSignin.configure({
  webClientId: configKey.webClientId
})

export const SignInCom = props => {
  const { navigation, title, handleSignIn } = props
  const [initializing, setInitializing] = useState(true)
  const [user, setUser] = useState()

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged)

    return subscriber // unsubscribe on unmount
  }, [])

  const onAuthStateChanged = user => {
    setUser(user)
    if (initializing) setInitializing(false)
  }

  const validationSchema = Yup.object({
    user_phone: Yup.number()
      .required('Phone number is required'),
    user_password: Yup.string()
      .required('Password is required')
  })

  const onDataSubmit = (values, actions) => {
    setTimeout(async () => {
      await handleSignIn(values)
      actions.resetForm(initialValues)
      actions.setSubmitting(false)
    }, 1000)
  }

  const handleGoogleSignIn = async () => {
    // Get the users ID token
    const user_info = await GoogleSignin.signIn()

    console.log('user_info :>> ', user_info)

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(user_info?.idToken)

    console.log('googleCredential', googleCredential)

    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential)
  }

  const handleFBSignIn = async () => {
    // Attempt login with permissions
    const result = await LoginManager.logInWithPermissions(['public_profile', 'email'])

    if (result.isCancelled) {
      throw 'User cancelled the login process'
    }

    // Once signed in, get the users AccesToken
    const data = await AccessToken.getCurrentAccessToken()

    if (!data) {
      throw 'Something went wrong obtaining access token'
    }

    console.log('facebook data', data)

    // Create a Firebase credential with the AccessToken
    const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken)

    console.log('facebookCredential :>> ', facebookCredential)

    // Sign-in the user with the credential
    return auth().signInWithCredential(facebookCredential)
  }

  const handleSignOut = async () => {
    auth()
      .signOut()
      .then(async () => { await GoogleSignin.revokeAccess(), console.log('User signed out!') })
  }

  const initialValues = {
    user_phone: '',
    user_password: ''
  }

  if (initializing) return null

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
        {
          formikProps => (
            <>
              <MyTextInput
                label='Phone'
                placeholder='Enter your phone'
                formikKey='user_phone'
                formikProps={formikProps}
                keyboardType='number-pad'
              />
              <MyTextInput
                label='Password'
                placeholder='Enter your password'
                formikKey='user_password'
                formikProps={formikProps}
                secure
              />
              <View style={{ marginBottom: 10 }}>
                <ButtonCom
                  bgColor='primary'
                  color='white'
                  onPress={formikProps.handleSubmit}
                  text={formikProps.isSubmitting ? 'Login ...' : 'Login'}
                />
              </View>
            </>
          )
        }
      </Formik>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 30 }}>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <TextCom weight='md' size='md'>Register Now</TextCom>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('ForgotPass')}>
          <TextCom weight='md' size='md'>Forgot Password</TextCom>
        </TouchableOpacity>
      </View>
      <View style={{ marginBottom: 10 }}>
        <ButtonCom
          bgColor='fb_primary'
          color='white'
          onPress={() => handleFBSignIn().then(() => console.log('Signed in with Facebook!'))}
          text='Login with Facebook'
          img={require('asset/image/facebook.jpg')}
        />
      </View>
      <View style={{ marginBottom: 10 }}>
        <ButtonCom
          bgColor='google_primary'
          color='dark'
          onPress={() => handleGoogleSignIn().then(() => console.log('Signed in with Google!'))}
          text='Login with Google'
          img={require('asset/image/google.png')}
        />
      </View>
      {
        user &&
        <ButtonCom
          style={{ backgroundColor: 'red' }}
          onPress={() => handleSignOut()}
          text='Log out' />
      }
    </View>
  )
}

SignInCom.defaultProps = {
  title: 'Sign Up'
}