import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { AuthScreen } from '../scenes/auth/auth.component';
import { AuthGridScreen } from '../scenes/auth/auth-grid.component';
import { AuthListScreen } from '../scenes/auth/auth-list.component';
import { SignIn1Screen } from '../scenes/auth/sign-in-1.component';
import { SignIn2Screen } from '../scenes/auth/sign-in-2.component';
import { SignIn3Screen } from '../scenes/auth/sign-in-3.component';
import { SignIn4Screen } from '../scenes/auth/sign-in-4.component';
import { SignIn5Screen } from '../scenes/auth/sign-in-5.component';
import { SignUp1Screen } from '../scenes/auth/sign-up-1.component';
import { SignUp2Screen } from '../scenes/auth/sign-up-2.component';
import { SignUp3Screen } from '../scenes/auth/sign-up-3.component';
import { SignUp4Screen } from '../scenes/auth/sign-up-4.component';
import { ForgotPasswordScreen } from '../scenes/auth/forgot-password.component';
import { LoginScreen } from '../twf/components/login.component';

const TopTab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

export const TWFNavigator = (): React.ReactElement => (
  
  <Stack.Navigator headerMode='none'>
    <Stack.Screen name='LoginScreen' component={LoginScreen}/>
    <Stack.Screen name='Register' component={SignUp2Screen}/>
    <Stack.Screen name='SignUp1Screen' component={SignUp1Screen}/>
  </Stack.Navigator>
);
