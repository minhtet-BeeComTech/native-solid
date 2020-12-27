import React from 'react'
import { useDispatch } from 'react-redux'
import { View, TouchableOpacity } from 'react-native'

import { MoreCom } from '../modal'
import { TextCom } from '../typo'
import { IconCom } from '../icon'
import { emit } from 'actions'
import { StyledHeaderContainer, color } from 'theme'

export const HeaderCom = props => {
  const { navigation, text, back, menu } = props
  const dispatch = useDispatch()

  const handleRoute = (mainRoute, secRoute, params) => () => {
    dispatch(emit.setEmit('MORE_POPUP_KEY', { moreModalVisible: false, data: null }))
    navigation.navigate(mainRoute, { screen: secRoute })
  }

  return (
    <>
      <StyledHeaderContainer>
        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
          {menu && <IconCom name='menu' iconsize='xl' style={{ marginRight: 20 }} onPress={() => navigation.toggleDrawer()} />}
          {back && <IconCom name='arrow-back' iconsize='xl' style={{ marginRight: 20 }} onPress={() => navigation.goBack()} />}
          <TextCom size='lg' weight='lg'>{text}</TextCom>
        </View>
        <IconCom name='more-vert' iconsize='xl' onPress={() => dispatch(emit.setEmit('MORE_POPUP_KEY', { moreModalVisible: true, data: 'empty' }))} />
      </StyledHeaderContainer>
      <MoreCom {...props} >
        <TouchableOpacity style={{
          borderBottomWidth: 1,
          borderBottomColor: color.modal.borderColor,
          paddingBottom: 5,
          marginBottom: 5
        }}
          onPress={handleRoute('Service', 'Product')}
        >
          <TextCom>Item 1</TextCom>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleRoute('Directory', 'Doctor')}
        >
          <TextCom>Item 2</TextCom>
        </TouchableOpacity>

      </MoreCom>
    </>
  )
}