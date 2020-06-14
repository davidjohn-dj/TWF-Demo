import React, { Fragment } from 'react';
import { View } from 'react-native';
import { Button, Input, Layout, StyleService, Text, useStyleSheet } from '@ui-kitten/components';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { EyeIcon, EyeOffIcon, PersonIcon } from './extra/icons';
import { KeyboardAvoidingView } from './extra/3rd-party';
import FormInput from '../components/form-components/input.component';
import ErrorMessage from '../components/form-components/error.message';
import TwfLogo from '../components/logo/IconLogo';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .label('Email')
    .email('Enter a valid email')
    .required('Please enter a registered email'),
  password: Yup.string()
    .label('Password')
    .required('Please enter your password')
    .min(4, 'Password must have more than 4 characters ')
});

export default props => {

  // const formState = useSelector((state) => state.form);
  // console.log("formState: ", formState);

  // const [email, setEmail] = React.useState();
  // const [password, setPassword] = React.useState();
  const [passwordVisible, setPasswordVisible] = React.useState(false);

  const styles = useStyleSheet(themedStyles);

  const onSignUpButtonPress = () => {
    props.navigation && props.navigation.navigate('Register');
  };

  const onSignInButtonPress = () => {
    props.navigation && props.navigation.navigate('Login');
  };

  const onForgotPasswordButtonPress = () => {
    props.navigation && props.navigation.navigate('ForgotPassword');
  };

  const onPasswordIconPress = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = values => {
    console.log("values: ", values);
    if (values.email.length > 0 && values.password.length > 0) {
      setTimeout(() => {
        props.navigation.navigate('Home')
      }, 3000)
    }
  }

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.headerContainer}>
        <TwfLogo style={styles.signInLabel} category='s1' status='control' />
      </View>
      <Button
        style={styles.signInButton}
        appearance='giant'
        status='basic'
        onPress={onSignInButtonPress}>
        Log In
      </Button>

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
    marginHorizontal: 16,
  },
  registerButton: {
    marginVertical: 12,
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

