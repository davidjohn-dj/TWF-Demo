import React from 'react';
import { ImageProps, NativeModules } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export interface LoadingAnimationProps extends ImageProps {
  loading: boolean;
}

export const SplashImage = (props: LoadingAnimationProps): React.ReactElement | undefined => {
  <LinearGradient colors={['#00A79D', '#0A223C']}>
    {!props.loading &&
      NativeModules.SplashScreen.close({
        animationType: 2,
        duration: 500,
      })
    }
  </LinearGradient>
  return null;
};
