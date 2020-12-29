import React from 'react'
import { FlatList, RefreshControl, View, ActivityIndicator } from 'react-native'

import { TextCom } from '../typo'
import { color } from 'theme'

export const FlatListCom = ({ refreshing, onRefresh, emptytext, isLoading, ...props }) => {

  const emptyComponent = () => (
    <View style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <TextCom>{emptytext}</TextCom>
    </View>
  )

  const footerComponent = () => (
    isLoading && props?.data?.length > 10 && <>
      <ActivityIndicator size='small' color={color.loading.primary} />
    </>
  )

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        refreshControl={<RefreshControl
          tintColor={color.refresh.gray}
          refreshing={refreshing}
          onRefresh={onRefresh} />
        }
        contentContainerStyle={{ flexGrow: 1 }}
        ListEmptyComponent={emptyComponent}
        ListFooterComponent={footerComponent}
        {...props}
      />
    </View>
  )
}

FlatListCom.defaultProps = {
  data: [],
  refreshing: false,
  isLoading: false,
  emptytext: 'No Data Available!'
}