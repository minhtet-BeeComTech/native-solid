import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Modal, View, TouchableWithoutFeedback, ScrollView, SafeAreaView } from 'react-native'

import { TextCom } from '../typo'
import { IconCom } from '../icon'
import { emit } from 'actions'
import { StyledModalContainer, StyledModalContact } from '../../../../../src/theme'

export const Toast = () => {
  const { toastModalVisible, toast_data } = useSelector(state => state.emit)
  const dispatch = useDispatch()

  useEffect(() => {
    toastModalVisible && setTimeout(() => {
      handleCloseToastModal(false)
    }, 5000)
  }, [toastModalVisible])

  const handleCloseToastModal = async isVisible => {
    await dispatch(emit.setEmit('TOAST_NOTIFICATION_KEY', { toastModalVisible: isVisible, data: null }))
  }

  const handleIconName = type => {
    if (type === 'success') {
      return 'check-circle-outline'
    }
    if (type === 'warning') {
      return 'error-outline'
    }
    if (type === 'error') {
      return 'error-outline'
    }
  }

  return (
    <Modal
      animationType='fade'
      transparent={true}
      visible={toastModalVisible}
      onRequestClose={() => handleCloseToastModal(!toastModalVisible)}
    >
      <SafeAreaView style={{ flex: 1, backgroundColor: 'transparent' }}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <TouchableWithoutFeedback onPress={() => handleCloseToastModal(!toastModalVisible)}>
            <StyledModalContainer>
              <TouchableWithoutFeedback onPress={() => { }}>
                <StyledModalContact style={{ position: 'absolute', bottom: 25 }}>
                  <View style={{ flexDirection: 'row' }}>
                    {toast_data?.type && <View style={{ marginRight: 5 }}>
                      <IconCom name={handleIconName(toast_data?.type)} iconsize='xl' color={toast_data?.type} />
                    </View>}
                    <View>
                      {toast_data?.title && <TextCom weight='lg' size='md'>{toast_data?.title}</TextCom>}
                      {toast_data?.desc && <TextCom>{toast_data?.desc}</TextCom>}
                    </View>
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