import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Modal, TouchableWithoutFeedback, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native'

import { TextCom } from '../typo'
import { emit } from 'actions'
import { StyledModalContainer, StyledModalContact } from '../../../../../src/theme'

export const MoreCom = props => {
  const { children } = props
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
            <StyledModalContainer style={{ position: 'relative' }}>
              <TouchableWithoutFeedback onPress={() => { }}>
                <StyledModalContact style={{ position: 'absolute', width: '50%', top: 40, right: 20 }}>
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