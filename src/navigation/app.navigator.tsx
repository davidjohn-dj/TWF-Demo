import React from 'react';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { TWFNavigator } from './twf.navigator';
import { HomeNavigator } from './home.navigator copy';

/*
 * Navigation theming: https://reactnavigation.org/docs/en/next/themes.html
 */
const navigatorTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    // prevent layout blinking when performing navigation
    background: 'transparent',
  },
};

export const AppNavigator = (): React.ReactElement => (
  <NavigationContainer theme={navigatorTheme}>
    <HomeNavigator />
  </NavigationContainer>
);
