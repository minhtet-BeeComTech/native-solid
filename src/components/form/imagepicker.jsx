import React from 'react'
import { View } from 'react-native'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'

import { TextCom } from '../typo'
import { IconCom } from '../icon'
import { StyledImagePicker } from '../../../../src/theme'

export const ImagePickerCom = props => {
  const { placeholder, onHandleChange, launchType, icon } = props

  const handleImage = () => {
    const options = {
      maxWidth: 1200,
      maxHeight: 1200,
      includeBase64: true,
      saveToPhotos: true
    }
    launchType === 'camera' && launchCamera(options, res => console.log('res', res))
    launchType === 'library' && launchImageLibrary(options, res => onHandleChange(res))
  }

  return (
    <StyledImagePicker onPress={handleImage}>
      <View style={{ flex: 1, justifyContent: 'center', position: 'relative' }}>
        <TextCom>{placeholder}</TextCom>
      </View>
      <IconCom name={icon} iconsize='xl' style={{ position: 'absolute', top: 7, right: 10 }} />
    </StyledImagePicker>
  )
}

ImagePickerCom.defaultProps = {
  placeholder: 'Select your file',
  launchType: 'camera'
}