import React, { Fragment } from "react";
import { View } from "react-native";
import {
  Button,
  Input,
  Layout,
  StyleService,
  Text,
  Icon,
  useStyleSheet,
} from "@ui-kitten/components";
import { EyeIcon, EyeOffIcon, PersonIcon } from "./extra/icons";
import { KeyboardAvoidingView } from "./extra/3rd-party";
import TwfLogo from "../components/logo/IconLogo";
import TwfText from "../common/twf_text";
import ScreenHeader from "../common/screen_header";

export default (props) => {
  const [passwordVisible, setPasswordVisible] = React.useState(false);

  const styles = useStyleSheet(themedStyles);

  const onNextButtonPress = () => {
    props.navigation && props.navigation.navigate("PreLogin");
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.headerContainer}>
        <TwfLogo style={styles.signInLabel} category="s1" status="control" />
      </View>
      <ScreenHeader title="Get Tested" subtitle="Connect your test result" />
      <View style={styles.iconContainer}>
        <Icon style={styles.icon} fill="#8F9BB3" name="arrowhead-down" />
      </View>
      <ScreenHeader
        title="Get Verified"
        subtitle="Securely share health status"
      />

      <View style={styles.iconContainer}>
        <Icon style={styles.icon} fill="#8F9BB3" name="arrowhead-down" />
      </View>
      <ScreenHeader title="Get Back To Normal" subtitle="   " />

      <View style={styles.iconContainer}>
        <Text onPress={onNextButtonPress} status='primary' category='label'>Next</Text>
      </View>
    </KeyboardAvoidingView>
  );
};

const themedStyles = StyleService.create({
  container: {
    backgroundColor: "twf-light-background",
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    margin: 16,
  },
  icon: {
    width: 32,
    height: 32,
  },
  headerContainer: {
    justifyContent: "center",
    alignItems: "center",
    minHeight: 216,
    // backgroundColor: 'color-primary-default',
  },
  formContainer: {
    flex: 1,
    paddingTop: 32,
    paddingHorizontal: 16,
    backgroundColor: "transparent",
  },
  signInLabel: {
    marginTop: 16,
  },
  signInButton: {
    marginTop: 32,
    marginHorizontal: 16,
  },
  registerButton: {
    marginHorizontal: 16,
  },
  forgotPasswordContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  passwordInput: {
    marginTop: 16,
  },
  forgotPasswordButton: {
    paddingHorizontal: 0,
  },
});
