import React from 'react'
import { useDispatch } from 'react-redux'
import { View, Text } from 'react-native'

import { emit } from 'actions'
import { StyledText, StyledIcon } from '../../theme'
import { StyledHeaderContainer } from './style'

export const HeaderCom = props => {
  const { navigation, text, back, menu } = props

  const dispatch = useDispatch()

  return (
    <StyledHeaderContainer>
      <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
        {menu && <StyledIcon name='menu' size='xl' style={{ marginRight: 20 }} onPress={() => navigation.toggleDrawer()} />}
        {back && <StyledIcon name='arrow-back' size='xl' style={{ marginRight: 20 }} onPress={() => navigation.goBack()} />}
        <StyledText weight='xl' size='lg' font='f1'>{text}</StyledText>
      </View>
      <StyledIcon name='more-vert' size='xl' onPress={() => dispatch(emit.setEmit('MORE_POPUP_KEY', { moreModalVisible: true, data: 'empty' }))} />
    </StyledHeaderContainer>
  )
}