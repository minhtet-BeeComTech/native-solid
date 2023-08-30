import {KeyboardAvoidingView, Platform} from 'react-native';
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
  createNavigationContainerRef,
} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {ToastCom, NativeSolidProvider} from 'native-solid';
import RootNavigator from './RootNavigation';

export const navigationRef = createNavigationContainerRef();

export default (props: any) => {

  const deepLinking = {
    prefixes: ['http://nativesolid.com', 'nativesolid://'],
    config: {
      screens: {
        Auth: {},
        App: {},
      },
    },
  };

  return (
    <SafeAreaProvider>
      <NativeSolidProvider>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          style={{flex: 1}}>
          <NavigationContainer
            ref={navigationRef}
            linking={deepLinking}
            fallback={null}
            theme={DefaultTheme}>
            <RootNavigator {...props} />
          </NavigationContainer>
        </KeyboardAvoidingView>
        <ToastCom />
      </NativeSolidProvider>
    </SafeAreaProvider>
  );
};
