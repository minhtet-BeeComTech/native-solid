import React from 'react'
import PropTypes from 'prop-types'
import { StatusBar, ScrollView, RefreshControl, View, SafeAreaView } from 'react-native'
import { useNetInfo } from "@react-native-community/netinfo"

import { IconCom } from '../icon'
import { TextCom } from '../typo'
import { color } from '../../../../src/theme'
import Loader from './loader'

export const ContainerCom = props => {
  const { isLoading, isRefreshing, onRefresh, full, noScroll, header } = props
  const netInfo = useNetInfo()

  const handleViewProps = () => (
    netInfo?.isConnected ?
      props.children
      :
      netInfo?.details && <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: color.container.bgColor }}>
        <IconCom name='signal-cellular-off' color='primary' iconsize='xl' />
        <TextCom>No Internet Connection!</TextCom>
        <TextCom>Please check your connection and try again!</TextCom>
      </View>
  )

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: color.container.bgColor }}>
      <StatusBar backgroundColor={color.statusBar.bgColor} barStyle='dark-content' />
      {header}
      {!noScroll ? <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ flexGrow: 1 }}
        scrollEnabled={true}
        refreshControl={onRefresh &&
          <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} tintColor={color.refresh.gray} />
        }
      >
        <View style={{ padding: full ? 0 : 5, flexGrow: 1 }}>
          {handleViewProps()}
        </View>
      </ScrollView>
        :
        <View style={{ padding: full ? 0 : 5, flexGrow: 1 }}>
          {handleViewProps()}
        </View>
      }
      {isLoading && <Loader />}
    </SafeAreaView>
  )
}

ContainerCom.defaultProps = {
  isLoading: false,
  isRefreshing: false,
  children: PropTypes.element.isRequired
}