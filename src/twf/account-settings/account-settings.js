import React, { Fragment } from 'react';
import { View } from 'react-native';
import { Button, CheckBox, Layout, StyleService, Text, useStyleSheet } from '@ui-kitten/components';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { EyeIcon, EyeOffIcon, PersonIcon } from './extra/icons';
import { KeyboardAvoidingView } from './extra/3rd-party';
import FormInput from '../components/form-components/input.component';
import ErrorMessage from '../components/form-components/error.message';
import ScreenHeader from '../common/screen_header'
import { Divider, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import { SafeAreaLayout } from '../../components/safe-area-layout.component';
import { MenuIcon } from '../../components/icons';

const validationSchema = Yup.object().shape({
  first_name: Yup.string()
    .label('First Name')
    .required('Please enter your first name'),
  last_name: Yup.string()
    .label('Last Name')
    .required('Please enter your last name'),
  email: Yup.string()
    .label('Email')
    .email('Enter a valid email')
    .required('Please enter your email'),
  phone_number: Yup.number()
    .label('Mobile Number')
    .required('Please enter your mobile number'),
  password: Yup.string()
    .label('Password')
    .required('Please enter your password')
    .min(8, 'Password must have more than 8 characters '),
  confirmPassword: Yup.string()
    .label('Confirm Password')
    .required('Please enter your password once again'),
  termsAccepted: Yup.boolean()
    .label('Terms Acceptance')
    .required('Please accept the Terms and Conditions')
});

export default props => {

  const onItemPress = (index) => {
    props.navigation.navigate(data[index].route);
  };

  const renderDrawerAction = () => (
    <TopNavigationAction
      icon={MenuIcon}
      onPress={props.navigation.toggleDrawer}
    />
  );
  // const formState = useSelector((state) => state.form);
  // console.log("formState: ", formState);

  // const [email, setEmail] = React.useState();
  // const [password, setPassword] = React.useState();
  const [passwordVisible, setPasswordVisible] = React.useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = React.useState(false);

  const styles = useStyleSheet(themedStyles);

  const onSignInButtonPress = () => {
    props.navigation && props.navigation.navigate('Login');
  };

  const onPasswordIconPress = () => {
    setPasswordVisible(!passwordVisible);
  };

  const onConfirmPasswordIconPress = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
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
    <SafeAreaLayout
      style={styles.safeArea}
      insets='top'>
      <TopNavigation
        title='TWF'
        leftControl={renderDrawerAction()}
      />
    <KeyboardAvoidingView style={styles.container}>
      <ScreenHeader
        title="Account Settings"
        subtitle="Please update your information"
      />
      <Formik
        initialValues={{ first_name: '', last_name: '', email: '', phone_number: '', password: '', confirmPassword: '', }}
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
                  name='first_name'
                  value={values.first_name}
                  onChangeText={handleChange('first_name')}
                  placeholder='First Name'
                  autoCapitalize='none'
                  icon={PersonIcon}
                  autoFocus
                />
                {(touched.first_name || errors.first_name) && <ErrorMessage errorValue={touched.first_name && errors.first_name} />}
                <FormInput
                  name='last_name'
                  value={values.last_name}
                  onChangeText={handleChange('last_name')}
                  placeholder='Last Name'
                  autoCapitalize='none'
                  style={styles.formInput}
                  icon={PersonIcon}
                />
                {(touched.last_name || errors.last_name) && <ErrorMessage errorValue={touched.last_name && errors.last_name} />}
                <FormInput
                  name='email'
                  value={values.email}
                  onChangeText={handleChange('email')}
                  placeholder='Email'
                  autoCapitalize='none'
                  icon={PersonIcon}
                  style={styles.formInput}
                  onBlur={handleBlur('email')}
                />
                {(touched.email || errors.email) && <ErrorMessage errorValue={touched.email && errors.email} />}
                <FormInput
                  name='phone_number'
                  value={values.phone_number}
                  onChangeText={handleChange('phone_number')}
                  placeholder='Mobile Number'
                  autoCapitalize='none'
                  icon={PersonIcon}
                  style={styles.formInput}
                />
                {(touched.phone_number || errors.phone_number) && <ErrorMessage errorValue={touched.phone_number && errors.phone_number} />}
                <FormInput
                  name='password'
                  value={values.password}
                  onChangeText={handleChange('password')}
                  placeholder='Password'
                  secureTextEntry={!passwordVisible}
                  style={styles.formInput}
                  icon={passwordVisible ? EyeIcon : EyeOffIcon}
                  onIconPress={onPasswordIconPress}
                  onBlur={handleBlur('password')}
                />
                {(touched.password || errors.password) && <ErrorMessage errorValue={touched.password && errors.password} />}
                <FormInput
                  name='confirmPassword'
                  value={values.confirmPassword}
                  onChangeText={handleChange('confirmPassword')}
                  placeholder='Confirm Password'
                  secureTextEntry={!confirmPasswordVisible}
                  style={styles.formInput}
                  icon={confirmPasswordVisible ? EyeIcon : EyeOffIcon}
                  onIconPress={onConfirmPasswordIconPress}
                  onBlur={handleBlur('confirmPassword')}
                />
                {(touched.confirmPassword || errors.confirmPassword) && <ErrorMessage errorValue={touched.confirmPassword && errors.confirmPassword} />}
              </Layout>
              <FormInput
                name='termsAccepted'
                checked={values.termsAccepted}
                checkbox={true}
                style={styles.termsCheckBox}
                textStyle={styles.termsCheckBoxText}
                text={'By checking this box, you agree to our Terms and Conditions'}
                onChange={handleChange('termsAccepted')}
              />
              {(touched.termsAccepted || errors.termsAccepted) && <ErrorMessage errorValue={touched.termsAccepted && errors.termsAccepted} />}
              <Button
                style={styles.signInButton}
                size='giant'
                disabled={!isValid || isSubmitting}
                loading={isSubmitting}
                onPress={handleSubmit}
              >
                Register
              </Button>
            </Fragment>
          )}
      </Formik>
      <View style={styles.signInContainer}>
        <Text>Already have an account?</Text>
        <Text onPress={onSignInButtonPress} style={{ marginStart: 16 }}>Update</Text>
      </View>
    </KeyboardAvoidingView>
    </SafeAreaLayout>
  );
};

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    backgroundColor: '#ECF1FA',
  },
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 160,
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
  signInContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginHorizontal: 16,
    margin: 16
  },
  formInput: {
    marginTop: 16,
  },
  forgotPasswordButton: {
    paddingHorizontal: 0,
  },
  alreadyhave: {
    margin: 16,
    color: "#1C1C1C",
  },
  termsCheckBox: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 16,
    marginRight: 16
  },
  termsCheckBoxText: {
    fontSize: 11,
    lineHeight: 14,
    color: 'text-hint-color',
  }
});

