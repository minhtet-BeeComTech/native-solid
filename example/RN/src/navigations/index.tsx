import {KeyboardAvoidingView, Platform} from 'react-native';
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
  createNavigationContainerRef,
} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {ToastCom, useTheme, NativeSolidProvider} from 'native-solid';
import RootNavigator from './RootNavigation';

export const navigationRef = createNavigationContainerRef();

export default (props: any) => {
  const {baseTheme} = useTheme();

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
            theme={
              baseTheme?.color?.mode === 'dark' ? DarkTheme : DefaultTheme
            }>
            <RootNavigator {...props} />
          </NavigationContainer>
        </KeyboardAvoidingView>
        <ToastCom />
      </NativeSolidProvider>
    </SafeAreaProvider>
  );
};
