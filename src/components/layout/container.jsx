import React, { useEffect, useState } from 'react'
import { StatusBar, ScrollView, RefreshControl, View, SafeAreaView, Dimensions } from "react-native"
import NetInfo from '@react-native-community/netinfo'

import { color } from '../../theme'
import Loader from './loader'

const { width, height } = Dimensions.get('window')

export const ContainerCom = props => {
  const { isLoading, isRefreshing, onRefresh, full, style, content, contentCenter, header } = props

  const [isConnected, setIsConnected] = useState(false)

  useEffect(() => {
    checkNetwork()
  }, [])

  const checkNetwork = () => {
    NetInfo.fetch().then(state => {
      setIsConnected(state.isConnected)
      !state.isConnected && alert('No Internet Connection !')
      state.isConnected && isLoading && setTimeout(() => {
        alert('Connection Time Out !')
      }, 8000)
    })
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: color.container.bgColor, width: width }}>
      <StatusBar backgroundColor={color.statusBar.bgColor} barStyle='dark-content' />
      {header}
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ flexGrow: 1 }}
        scrollEnabled={true}
        refreshControl={onRefresh &&
          <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} tintColor={color.refresh.gray} />
        }
      >
        <View style={{ padding: full ? 0 : 5, flexGrow: 1 }}>
          {props.children}
        </View>
      </ScrollView>
      {isLoading && <Loader />}
    </SafeAreaView>
  )
}

ContainerCom.defaultProps = {
  isLoading: false,
  isRefreshing: false,
}