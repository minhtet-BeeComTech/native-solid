import React from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'

export const DrawerCom = props => {
  
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  )
}