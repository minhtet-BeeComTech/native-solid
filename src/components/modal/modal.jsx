import React from 'react'
import { Modal, View, Text, TouchableWithoutFeedback, ScrollView, SafeAreaView } from 'react-native'

import { StyledModalContainer, StyledModalContact } from './style'
import { color } from '../../theme'

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
                      <Text>please provide modal content!</Text>
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