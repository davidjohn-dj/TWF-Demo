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
import ScreenHeader from '../common/screen_header'

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
        <TwfLogo style={styles.signInLabel} gradient1={33} gradient2={34} gradient3={35} category='s1' status='control' />
      </View>
      <ScreenHeader
        title="Multi-factor Verification"
        subtitle="Insert the verification code received on your phone"
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
                  name='enter otp'
                  value={values.email}
                  onChangeText={handleChange('email')}
                  placeholder='Email'
                  autoCapitalize='none'
                  icon={PersonIcon}
                  onBlur={handleBlur('email')}
                  autoFocus
                />
                <ErrorMessage errorValue={touched.email && errors.email} />
              </Layout>

              <Button
                style={styles.signInButton}
                size='giant'
                disabled={!isValid || isSubmitting}
                loading={isSubmitting}
                onPress={handleSubmit}
              >
                Continue
              </Button>
            </Fragment>
          )}
      </Formik>

      <View style={styles.signInContainer}>
        <Text>Want to try sign in again?</Text>
        <Text onPress={onSignInButtonPress} style={{ marginStart: 16 }}>Sign in</Text>
      </View>
    </KeyboardAvoidingView>
  );
};

const themedStyles = StyleService.create({
  container: {
    backgroundColor: '#ECF1FA',
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
  signInContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginHorizontal: 16,
    margin: 16
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

