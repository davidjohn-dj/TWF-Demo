import React, { Fragment } from 'react';
import { View } from 'react-native';
import { Button, Layout, StyleService, useStyleSheet } from '@ui-kitten/components';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { EyeIcon, EyeOffIcon, PersonIcon } from './extra/icons';
import { KeyboardAvoidingView } from './extra/3rd-party';
import FormInput from '../components/form-components/input.component';
import ErrorMessage from '../components/form-components/error.message';
import TwfLogo from '../components/logo/IconLogo';
import ScreenHeader from '../common/screen_header';
import { getUserInfo } from '../../redux/actions/user';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .label('Email')
    .email('Enter a valid email')
    .required('Please enter a registered email'),
  password: Yup.string()
    .label('Password')
    .required('Please enter your password')
    .min(8, 'Password must have more than 8 characters ')
});

export default props => {

  // const formState = useSelector((state) => state.form);

  // const [email, setEmail] = React.useState();
  // const [password, setPassword] = React.useState();
  const [passwordVisible, setPasswordVisible] = React.useState(false);

  const styles = useStyleSheet(themedStyles);

  const onSignUpButtonPress = () => {
    props.navigation && props.navigation.navigate('Register');
  };

  const onForgotPasswordButtonPress = () => {
    props.navigation && props.navigation.navigate('ResetPassword');
  };

  const onOtpVerifyButtonPress = () => {
    props.navigation && props.navigation.navigate('OtpVerify');
  };

  const onPasswordIconPress = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = values => {
    console.log("values: ", values);
    if (values.email.length > 0 && values.password.length > 0) {
      getUserInfo(values).then(() => {
        props.navigation.navigate('Home');
      });
      // setTimeout(() => {
      //   props.navigation.navigate('Home')
      // }, 3000)
    }
  }

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.headerContainer}>
        <TwfLogo style={styles.signInLabel} gradient1={13} gradient2={14} gradient3={15} category='s1' status='control' />
      </View>
      <ScreenHeader
        title="Sign In"
        subtitle="Please enter your email and password"
      />
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={values => {
          handleSubmit(values)
        }}
        validationSchema={validationSchema}>
        {({
          handleChange,
          values,
          handleSubmit,
          errors,
          isValid,
          touched,
          handleBlur,
          isSubmitting
        }) => (
            <Fragment>
              <Layout
                style={styles.formContainer}
                level='1'>
                <FormInput
                  name='email'
                  value={values.email}
                  onChangeText={handleChange('email')}
                  placeholder='Email'
                  autoCapitalize='none'
                  icon={PersonIcon}
                  onBlur={handleBlur('email')}
                  autoFocus
                />
                {(touched.email || errors.email) && <ErrorMessage errorValue={touched.email && errors.email} />}
                <FormInput
                  name='password'
                  value={values.password}
                  onChangeText={handleChange('password')}
                  placeholder='Password'
                  secureTextEntry={!passwordVisible}
                  style={styles.passwordInput}
                  icon={passwordVisible ? EyeIcon : EyeOffIcon}
                  onIconPress={onPasswordIconPress}
                  onBlur={handleBlur('password')}
                />
                {(touched.password || errors.password) && <ErrorMessage errorValue={touched.password && errors.password} />}
                <View style={styles.forgotPasswordContainer}>
                  <Button
                    style={styles.forgotPasswordButton}
                    appearance='ghost'
                    status='basic'
                    onPress={onForgotPasswordButtonPress}>
                    Forgot your password?
                  </Button>
                </View>
              </Layout>

              <Button
                style={styles.signInButton}
                size='giant'
                disabled={!isValid || isSubmitting}
                loading={isSubmitting}
                onPress={handleSubmit}
              >
                SIGN IN
              </Button>
            </Fragment>
          )}
      </Formik>
      <Button
        style={styles.signUpButton}
        appearance='ghost'
        status='basic'
        onPress={onSignUpButtonPress}>
        Don't have an account? Create
      </Button>
      <Button
        style={styles.signUpButton}
        appearance='ghost'
        status='basic'
        onPress={onOtpVerifyButtonPress}>
        Otp Verify
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
  signUpButton: {
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

