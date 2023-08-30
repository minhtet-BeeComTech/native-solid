import { Platform } from 'react-native'

export const forFade = ({ current, next, layouts }: any) => ({
  cardStyle: {
    opacity: current.progress,
  },
})

export const getScreenOptions = () => {
  const transitionSpec = {
    open: {
      animation: 'timing',
      config: {
        duration: 150,
      },
    },
    close: {
      animation: 'timing',
      config: {
        duration: 150,
      },
    },
  }
  let screenOptions: any = {
    headerShown: false,
  }
  if (Platform.OS === 'android') {
    screenOptions.cardStyleInterpolator = forFade
    screenOptions.transitionSpec = transitionSpec
  }

  return screenOptions
}