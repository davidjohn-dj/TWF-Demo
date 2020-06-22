import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { Button, CheckBox, Layout, StyleService, Text, useStyleSheet } from '@ui-kitten/components';
import { Divider, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import { SafeAreaLayout } from '../../components/safe-area-layout.component';
// import all basic components
import QRCode from 'react-native-qrcode-svg';
import { MenuIcon } from '../../components/icons';
import ScreenHeader from '../common/screen_header'
import { BarCodeScanner } from 'expo-barcode-scanner';

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

  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <SafeAreaLayout
      style={styles.safeArea}
      insets='top'>
      <TopNavigation
        title='TWF'
        leftControl={renderDrawerAction()}
      />
      <ScreenHeader
        title="Scan a verification"
        subtitle=" ----- "
      />
      {scanned && <Button
        style={styles.scanButton}
        appearance='giant'
        status='primary'
        onPress={() => setScanned(false)}>
        Scan
      </Button>}
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'flex-end',
        }}>
        <BarCodeScanner
          barCodeTypes={BarCodeScanner.Constants.BarCodeType.qr ? [BarCodeScanner.Constants.BarCodeType.qr] : []}
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={styles.scanQR}
        />
      </View>
    </SafeAreaLayout>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  scanButton: {
    margin: 16,
  },
  scanQR: {
    ...StyleSheet.absoluteFillObject,
    height: 300,
    margin: 16,
  },
});