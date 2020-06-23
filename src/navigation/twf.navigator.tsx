import React, { Fragment } from 'react';
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
import NewPassword from '../twf/newpassword/newpassword'
import GenerateQR from '../twf/generateqr/generateqr'
import ScanQR from '../twf/scanqr/scanqr'
import { LayoutsScreen } from '../scenes/layouts/layouts.component';
import { Dashboard } from '../twf/dashboard/dashboard';
import GuardALocation from '../twf/guard-a-location/guard-a-location'
import GetVerified from '../twf/get-verified/get-verified'
import ScanAVerification from '../twf/scan-a-verification/scan-a-verification'
import MyVerifications from '../twf/my-verifications/my-verifications'
import AccountSettings from '../twf/account-settings/account-settings'

const TopTab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

export const TWFNavigator = (props): React.ReactElement => (
  <Stack.Navigator headerMode='none'>
    {console.log("props", props)}
    {props.user.isFirstLogin &&
      <Stack.Screen name='Intro' component={Intro} />}
    <Stack.Screen name='PreLogin' component={PreLogin} />
    <Stack.Screen name='ResetPassword' component={ResetPassword} />
    <Stack.Screen name='NewPassword' component={NewPassword} />
    <Stack.Screen name='Register' component={Register} />
    <Stack.Screen name='Login' component={Login} />
    {/* {props.user.isLoggedIn && */}
      <>
        <Stack.Screen name='OtpVerify' component={OtpVerify} />
        <Stack.Screen name='Home' component={Dashboard} />
        <Stack.Screen name='GenerateQR' component={GenerateQR} />
        {/* <Stack.Screen name='ScanQR' component={ScanQR} /> */}
        <Stack.Screen name='GuardALocation' component={GuardALocation} />
        <Stack.Screen name='GetVerified' component={GetVerified} />
        <Stack.Screen name='ScanAVerification' component={ScanAVerification} />
        <Stack.Screen name='MyVerifications' component={MyVerifications} />
        <Stack.Screen name='AccountSettings' component={AccountSettings} />
      </>
    {/* } */}
  </Stack.Navigator>
);
