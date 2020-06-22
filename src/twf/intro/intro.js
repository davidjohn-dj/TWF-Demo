import React, { Fragment } from "react";
import { View } from "react-native";
import {
  Button, StyleService, Text, Icon,
  useStyleSheet, Layout
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
        <TwfLogo style={styles.signInLabel} gradient1={1} gradient2={2} gradient3={3} category="s1" status="control" />
      </View>
      <Layout style={styles.introContainer} level='1'>
        <ScreenHeader title="Get Tested" subtitle="Connect your test result" />
        <View style={styles.iconContainer}>
          <Icon style={styles.icon} fill={styles.primaryColor.color} name="arrowhead-down" />
        </View>
        <ScreenHeader
          title="Get Verified"
          subtitle="Securely share health status"
        />

        <View style={styles.iconContainer}>
          <Icon style={styles.icon} fill={styles.primaryColor.color} name="arrowhead-down" />
        </View>
        <ScreenHeader title={<View>
          <Text style={styles.textAlignBold}>Get Back To</Text>
          <Text style={styles.text2title}>Normal</Text>
        </View>} />
      </Layout>
      <Button style={styles.nextButton} appearance='ghost'
        status='primary' onPress={onNextButtonPress}>Next</Button>
    </KeyboardAvoidingView>
  );
};

const themedStyles = StyleService.create({
  primaryColor: {
    color: 'color-primary-default'
  },
  introContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // paddingTop: 32,
    paddingHorizontal: 16,
    backgroundColor: 'transparent'
  },
  container: {
    backgroundColor: "#ECF1FA",
  },
  textAlignBold: {
    fontFamily: "lato-bold",
    justifyContent: 'center',
    alignItems: 'center',
    lineHeight: 20,
    marginBottom: 10,
    paddingTop: 8,
    color: "#181461",
    fontSize: 26
  },
  text2title: {
    fontFamily: "lato-bold",
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    lineHeight: 18,
    marginBottom: 16,
    paddingTop: 8,
    color: "#181461",
    fontSize: 26
  },
  nextButton: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 16,
    marginBottom: 20
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    margin: 16,
  },
  icon: {
    width: 50,
    height: 50,
  },
  headerContainer: {
    justifyContent: "center",
    alignItems: "center",
    minHeight: 160,
    marginBottom: 15
    // backgroundColor: 'color-primary-default',
  },
  signInLabel: {
    marginTop: 16
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
