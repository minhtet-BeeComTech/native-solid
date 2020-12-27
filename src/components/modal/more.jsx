import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Modal, View, TouchableWithoutFeedback, ScrollView, SafeAreaView } from 'react-native'

import { emit } from 'actions'
import { StyledModalContainer, StyledModalContact } from './style'
import { StyledText } from '../../theme'

export const MoreCom = () => {
  const { moreModalVisible, more_data } = useSelector(state => state.emit)
  const dispatch = useDispatch()

  const handleCloseToastModal = async isVisible => {
    await dispatch(emit.setEmit('MORE_POPUP_KEY', { moreModalVisible: isVisible, data: null }))
  }

  return (
    <Modal
      animationType='fade'
      transparent={true}
      visible={moreModalVisible}
      onRequestClose={() => handleCloseToastModal(!moreModalVisible)}
    >
      <SafeAreaView style={{ flex: 1, backgroundColor: 'transparent' }}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <TouchableWithoutFeedback onPress={() => handleCloseToastModal(!moreModalVisible)}>
            <StyledModalContainer style={{position: 'relative'}}>
              <TouchableWithoutFeedback onPress={() => { }}>
                <StyledModalContact style={{ position: 'absolute', width: '60%', top: 40, right: 20 }}>
                  <View>
                    <StyledText>Example</StyledText>
                  </View>
                </StyledModalContact>
              </TouchableWithoutFeedback>
            </StyledModalContainer>
          </TouchableWithoutFeedback>
        </ScrollView>
      </SafeAreaView>
    </Modal>
  )
}