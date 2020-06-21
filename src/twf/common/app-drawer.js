import React from 'react';
import { StyleSheet, View } from 'react-native';
import {
  Avatar,
  Divider,
  Drawer,
  DrawerElement,
  DrawerHeaderElement,
  DrawerHeaderFooter,
  DrawerHeaderFooterElement,
  Layout,
  MenuItemType,
  Text,
} from '@ui-kitten/components';
import { BookIcon, GithubIcon } from '../../components/icons';
import { SafeAreaLayout } from '../../components/safe-area-layout.component';
import { WebBrowserService } from '../../services/web-browser.service';
import { AppInfoService } from '../../services/app-info.service';

const DATA = [
  { title: 'Home', icon: GithubIcon },
  { title: 'Guard A Location', icon: GithubIcon },
  { title: 'Get Verified', icon: BookIcon },
  { title: 'Scan a Verification', icon: GithubIcon },
  { title: 'My Verifications', icon: BookIcon },
  { title: 'Account Settings', icon: GithubIcon },
  { title: 'Help', icon: BookIcon },
];

const version = AppInfoService.getVersion();

export const AppDrawer = ({ navigation }) => {

  const onItemSelect = (index) => {
    switch (index) {
      case 0: {
        navigation.toggleDrawer();
        navigation.navigate('Home');
        return;
      }
      case 1: {
        navigation.toggleDrawer();
        navigation.navigate('GuardALocation');
        return;
      }
      case 2: {
         navigation.toggleDrawer();
         navigation.navigate('GetVerified');
         return;
       }
       case 3: {
        navigation.toggleDrawer();
        navigation.navigate('ScanAVerification');
        return;
      }
      case 4: {
        navigation.toggleDrawer();
        navigation.navigate('MyVerifications');
        return;
      }
      case 5: {
        navigation.toggleDrawer();
        navigation.navigate('AccountSettings');
        return;
      }
      case 6: {
        WebBrowserService.openBrowserAsync('https://google.com');
        navigation.toggleDrawer();
        return;
      }
    }
  };

  const renderHeader = () => (
    <Layout
      style={styles.header}
      level='2'>
      <View style={styles.profileContainer}>
        <Avatar
          size='giant'
          source={require('../../assets/images/icon-avatar.png')}
        />
        <Text
          style={styles.profileName}
          category='h6'>
          TWF
        </Text>
      </View>
    </Layout>
  );

  const renderFooter = () => (
    <React.Fragment>
      <Divider/>
      <DrawerHeaderFooter
        disabled={true}
        description={`Version ${AppInfoService.getVersion()}`}
      />
    </React.Fragment>
  );

  return (
    <SafeAreaLayout
      style={styles.safeArea}
      insets='top'>
      <Drawer
        header={renderHeader}
        footer={renderFooter}
        data={DATA}
        onSelect={onItemSelect}
      />
    </SafeAreaLayout>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  header: {
    height: 128,
    paddingHorizontal: 16,
    justifyContent: 'center',
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileName: {
    marginHorizontal: 16,
  },
});
