import React from 'react'
import { View } from 'react-native'
import DocumentPicker from 'react-native-document-picker'
import RNFS from 'react-native-fs'

import { TextCom } from '../typo'
import { IconCom } from '../icon'
import { StyledFileUpload } from '../../../../../src/theme'

export const FileUploadCom = props => {
  const { placeholder, onHandleChange } = props

  const handleFile = async () => {
    try {
      const results = await DocumentPicker.pickMultiple({
        type: [DocumentPicker.types.images]
      })
      if (results?.length > 0) {
        let base64 = results?.map(x => RNFS.readFile(x.uri, 'base64').then(res => res))
        Promise.all(base64).then(async value => {
          if (value?.length > 0) {
            onHandleChange(value)
          }
        })
      }
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // User cancelled the picker, exit any dialogs or menus and move on
      } else {
        throw err
      }
    }
  }

  return (
    <StyledFileUpload onPress={handleFile}>
      <View style={{ flex: 1, justifyContent: 'center', position: 'relative' }}>
        <TextCom>{placeholder}</TextCom>
      </View>
      <IconCom name='upload-file' iconsize='xl' style={{ position: 'absolute', top: 7, right: 10 }} />
    </StyledFileUpload>
  )
}

FileUploadCom.defaultProps = {
  placeholder: 'Select your file'
}