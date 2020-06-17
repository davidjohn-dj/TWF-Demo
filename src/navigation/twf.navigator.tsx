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
import Login from '../twf/login/login';
import PreLogin from '../twf/prelogin/prelogin';
import Intro from '../twf/intro/intro';
import OtpVerify from '../twf/otpverify/otpverify'
import Register from '../twf/register/register';
import ResetPassword from '../twf/resetpassword/resetpassword'
import { DashboardNavigator } from '../twf/dashboard/home.navigator';
import { LayoutsScreen } from '../scenes/layouts/layouts.component';

const TopTab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

export const TWFNavigator = (): React.ReactElement => (
  
  <Stack.Navigator headerMode='none'>
    <Stack.Screen name='Intro' component={Intro}/>
    <Stack.Screen name='PreLogin' component={PreLogin}/>
    <Stack.Screen name='ResetPassword' component={ResetPassword}/>
    <Stack.Screen name='Register' component={Register}/>
    <Stack.Screen name='Login' component={Login}/>
    <Stack.Screen name='OtpVerify' component={OtpVerify}/>
    <Stack.Screen name='Dashboard' component={DashboardNavigator}/>
  </Stack.Navigator>
);
