import React from 'react'
import { Modal, View, TouchableWithoutFeedback, ScrollView, SafeAreaView } from 'react-native'

import { TextCom } from '../typo'
import { color, StyledModalContainer, StyledModalContact } from '../../../../src/theme'

export const ModalCom = props => {
  const { children, modalVisible, setModalVisible } = props

  return (
    <Modal
      animationType='fade'
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => setModalVisible(!modalVisible)}
    >
      <SafeAreaView style={{ flex: 1, backgroundColor: color.modal.bgColor }}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <TouchableWithoutFeedback onPress={() => setModalVisible(!modalVisible)}>
            <StyledModalContainer>
              <TouchableWithoutFeedback onPress={() => { }}>
                <StyledModalContact>
                  {children ?
                    children
                    :
                    <View>
                      <TextCom>please provide modal content!</TextCom>
                    </View>
                  }
                </StyledModalContact>
              </TouchableWithoutFeedback>
            </StyledModalContainer>
          </TouchableWithoutFeedback>
        </ScrollView>
      </SafeAreaView>
    </Modal>
  )
}