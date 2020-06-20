import React from 'react';
import { connect } from "react-redux";
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { TWFNavigator } from './twf.navigator';
import { HomeNavigator } from './home.navigator';

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

export const Navigator = (props): React.ReactElement => (
  <NavigationContainer theme={navigatorTheme}>
    <TWFNavigator {...props} />
  </NavigationContainer>
);

const actionCreators = {
};

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export const AppNavigator = connect(mapStateToProps, actionCreators)(Navigator);