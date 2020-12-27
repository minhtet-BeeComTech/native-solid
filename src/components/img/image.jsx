import React from 'react'
import { Animated, StyleSheet, View } from 'react-native'

export const ImageCom = ({ thumbnailSource, source, style, ...props }) => {
  let thumbnailAnimated = new Animated.Value(0)
  let imageAnimated = new Animated.Value(0)

  const handleThumbnailLoad = () => {
    Animated.timing(thumbnailAnimated, {
      toValue: 1,
      useNativeDriver: true
    }).start()
  }

  const onImageLoad = () => {
    Animated.timing(imageAnimated, {
      toValue: 1,
      useNativeDriver: true
    }).start()
  }

  return (
    <View style={styles.container}>
      <Animated.Image
        source={thumbnailSource}
        onLoad={handleThumbnailLoad}
        style={style}
        blurRadius={1}
        {...props}
      />
      <Animated.Image
        source={source}
        onLoad={onImageLoad}
        style={[styles.imageOverlay, style]}
        {...props}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  imageOverlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
  },
  container: {
    backgroundColor: '#e9e9e9',
    position: 'relative'
  }
})