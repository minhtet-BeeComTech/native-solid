import React, { useState } from 'react'
import { View, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import OTPInputView from '@twotalltotems/react-native-otp-input'

import { ButtonCom } from '../button'
import { TextCom } from '../typo'
import styles from './style'

export const OtpConfirmCom = props => {
  const { title, desc, handleResend, handleVerify } = props
  const [code, setCode] = useState('')

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.otpconfirm_container}>
      <View style={styles.otpconfirm_header_wrap}>
        <TextCom size='md' weight='xl'>{title}</TextCom>
      </View>
      <View style={styles.otpconfirm_desc_wrap}>
        <TextCom>{desc}</TextCom>
      </View>
      <View style={styles.otp_input_container}>
        <OTPInputView
          style={{ width: '100%', height: 100 }}
          pinCount={6}
          code={code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
          onCodeChanged={code => setCode(code)}
          autoFocusOnLoad
          codeInputFieldStyle={styles.underlineStyleBase}
          codeInputHighlightStyle={styles.underlineStyleHighLighted}
          onCodeFilled={(code => {
            console.log(`Code is ${code}, you are good to go!`)
          })}
        />
        <View style={styles.resendcode_wrap}>
          <TextCom>ကုဒ်မရရှိခဲ့လျှင် ပြန်လည်ရယူပါ</TextCom>
          <TouchableOpacity onPress={handleResend}>
            <TextCom color='primary'>Resend code</TextCom>
          </TouchableOpacity>
        </View>
        <ButtonCom
          bgColor='primary'
          color='white'
          text='Verify'
          onPress={() => handleVerify(code)}
        />
      </View>
    </KeyboardAvoidingView>
  )
}