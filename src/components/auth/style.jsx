import { StyleSheet } from 'react-native'
import { color } from '../../../../../src/theme'

export default StyleSheet.create({
  signup_container: {
    flex: 1,
    marginRight: 20,
    marginLeft: 20
  },
  signup_header_container: {
    marginBottom: 20,
    alignItems: 'center'
  },

  // forget password
  forgot_container: {
    flex: 1,
    justifyContent: 'center',
    marginRight: 20,
    marginLeft: 20
  },
  forgot_header_container: {
    marginBottom: 20,
    alignItems: 'center'
  },
  fogot_input_container: {
    marginBottom: 20
  },

  // OtpConfirm
  otpconfirm_container: {
    flex: 1,
    justifyContent: 'center',
    marginRight: 20,
    marginLeft: 20
  },
  otpconfirm_header_wrap: {
    marginBottom: 20,
    alignItems: 'center'
  },
  otpconfirm_desc_wrap: {
    marginBottom: 20,
    alignItems: 'center'
  },
  otp_input_container: {
    marginBottom: 20
  },
  resendcode_wrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 40
  },
  borderStyleBase: {
    width: 30,
    height: 45
  },
  borderStyleHighLighted: {
    borderColor: color.form.primary,
  },
  underlineStyleBase: {
    width: 50,
    height: 55,
    borderRadius: 10,
    borderWidth: 1,
  },
  underlineStyleHighLighted: {
    borderColor: color.form.primary,
  }
})