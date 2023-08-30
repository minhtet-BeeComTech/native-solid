import { createStackNavigator } from '@react-navigation/stack'

import { getScreenOptions } from 'utils'
import AppNavigator from './AppNavigation'

const Stack = createStackNavigator()

export default (props: any) => (
  <Stack.Navigator screenOptions={getScreenOptions} {...props}>
    <Stack.Screen name='App' component={AppNavigator} />
  </Stack.Navigator>
)
