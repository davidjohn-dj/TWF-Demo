import React, { Fragment } from 'react';
import { View } from 'react-native';
import { Button, Input, Layout, StyleService, Text, useStyleSheet } from '@ui-kitten/components';
import { EyeIcon, EyeOffIcon, PersonIcon } from './extra/icons';
import { KeyboardAvoidingView } from './extra/3rd-party';
import TwfLogo from '../components/logo/IconLogo';
import TwfText from '../common/twf_text'
import ScreenHeader from '../common/screen_header'
import GenerateQR from '../generateqr/generateqr'

export default props => {

  const [passwordVisible, setPasswordVisible] = React.useState(false);

  const styles = useStyleSheet(themedStyles);

  const onSignUpButtonPress = () => {
    props.navigation && props.navigation.navigate('Register');
  };

  const onSignInButtonPress = () => {
    props.navigation && props.navigation.navigate('Login');
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.headerContainer}>
        <TwfLogo style={styles.signInLabel} gradient1={12} gradient2={13} gradient3={14} category='s1' status='control' />
      </View>
      <ScreenHeader
        title="Welcome"
        subtitle="Sign in or Register to continue"
      />
      <Button
        style={styles.signInButton}
        appearance='giant'
        status='primary'
        onPress={onSignInButtonPress}>
        Log In
      </Button>
      <TwfText
        subtitle="or"
      />
      <Button
        style={styles.registerButton}
        appearance='giant'
        status='basic'
        onPress={onSignUpButtonPress}>
        Register
      </Button>
    </KeyboardAvoidingView>
  );
};

const themedStyles = StyleService.create({
  container: {
    backgroundColor: 'twf-light-background',
  },
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 216,
    // backgroundColor: 'color-primary-default',
  },
  formContainer: {
    flex: 1,
    paddingTop: 32,
    paddingHorizontal: 16,
    backgroundColor: 'transparent'
  },
  signInLabel: {
    marginTop: 16,
  },
  signInButton: {
    marginTop: 32,
    marginHorizontal: 16,
  },
  registerButton: {
    backgroundColor: 'twf-dark-color',
    borderColor: 'twf-dark-color',
    marginHorizontal: 16,
  },
  forgotPasswordContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  passwordInput: {
    marginTop: 16,
  },
  forgotPasswordButton: {
    paddingHorizontal: 0,
  },
});

