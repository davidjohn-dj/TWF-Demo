import React from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';
import { Divider, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import { SafeAreaLayout } from '../../components/safe-area-layout.component';
// import all basic components
import QRCode from 'react-native-qrcode-svg';
import { MenuIcon } from '../../components/icons';
import ScreenHeader from '../common/screen_header';
import { KeyboardAvoidingView } from './extra/3rd-party';


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
          title="Get Verified"
          subtitle=" ----- "
        />
        <QRCode
        style={styles.qrcode}
          value={'Ramakrishna'}
          size={250}
        />
        </KeyboardAvoidingView>
    </SafeAreaLayout>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    backgroundColor: '#ECF1FA',
    flex: 1,
  },
  qrcode: {
    flex: 1,
    justifyContent: 'center',
  },
});