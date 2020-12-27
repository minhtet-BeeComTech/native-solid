import React from 'react'
import { useSelector } from 'react-redux'
import { View, TouchableOpacity, StyleSheet, Dimensions, Image, SafeAreaView } from 'react-native'

import { color, StyledText } from '../../theme'
import { getUiText } from 'utils'

const { width, height } = Dimensions.get('window')

export const FooterCom = props => {
  const { state, descriptors, navigation } = props
  const { translation_data, langStore } = useSelector(state => state.translation)
  const focusedOptions = descriptors && descriptors[state?.routes[state.index].key].options

  const langCode = langStore?.code

  if (focusedOptions?.tabBarVisible === false) {
    return null
  }

  return (
    <SafeAreaView style={{ flexDirection: 'row', borderTopWidth: 1, borderTopColor: color.footer.borderColor, backgroundColor: color.footer.bgColor }}>
      {state?.routes.map((route, index) => {
        const { options } = descriptors && descriptors[route.key]
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name

        const icon =
          options.tabBarIcon !== undefined
            ? options.tabBarIcon
            : require('asset/icon/home.png')

        const isFocused = state.index === index

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          })

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name)
          }
        }

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          })
        }

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole='button'
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.iconContainer}
          >
            <View style={[styles.imgContainer]}>
              <Image style={[styles.iconSize]} source={icon} />
            </View>
            <StyledText size='sm' color={isFocused ? 'primary' : 'secondary'}>
              {getUiText(translation_data, label, langCode)}
            </StyledText>
          </TouchableOpacity>
        )
      })}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  mainContainer: { width: '100%', height: 60, backgroundColor: color.white, position: 'absolute', bottom: 0 },
  divider: { width: '100%', height: 0.5, backgroundColor: color.gray },
  innerContainer: { flex: 1, width: '100%', height: 60, flexDirection: 'row' },
  iconContainer: { flex: 1, width: width / 3, height: 59.7, justifyContent: 'center', alignItems: 'center' },
  cartIconContainer: { flex: 1, width: width / 3, height: 59.7, justifyContent: 'center', alignItems: 'center' },
  imgContainer: { marginTop: 10, width: 30, height: 30, justifyContent: 'center', alignItems: 'center', borderRadius: 5 },
  iconSize: { width: 22, height: 22 },
  bottomText: { fontSize: 12, color: color.gray }
})
