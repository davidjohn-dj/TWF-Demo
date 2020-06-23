import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Platform } from 'react-native';
import { PERMISSIONS, RESULTS, check, request } from 'react-native-permissions';
import { AppStorage } from '../../services/app-storage.service';
import { connect } from 'react-redux';
import { Button, CheckBox, Layout, StyleService, Text, useStyleSheet } from '@ui-kitten/components';
import { Divider, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import { SafeAreaLayout } from '../../components/safe-area-layout.component';
// import all basic components
import QRCode from 'react-native-qrcode-svg';
import { MenuIcon } from '../../components/icons';
import ScreenHeader from '../common/screen_header'
import BarcodeScanner, { Exception, FocusMode, CameraFillMode, BarcodeType,
  TorchMode, pauseScanner, resumeScanner } from 'react-native-barcode-scanner-google';

const ScannerWrapped = props => {

  const [cameraGranted, setCameraGranted] = useState(props.user.cameraGranted);
  const [scanned] = useState(false);

  const onItemPress = (index) => {
    props.navigation.navigate(data[index].route);
  };

  const renderDrawerAction = () => (
    <TopNavigationAction
      icon={MenuIcon}
      onPress={props.navigation.toggleDrawer}
    />
  );

  const handleCameraPermission = async () => {
    if (Platform.OS === 'android') {
      const res = await check(PERMISSIONS.ANDROID.CAMERA);

      if (res === RESULTS.GRANTED) {
        (async () => {
          setCameraGranted(true);
          await AppStorage.setCameraPermission("true");
        })()
      } else if (res === RESULTS.DENIED) {
        const res2 = await request(PERMISSIONS.ANDROID.CAMERA);
        res2 === RESULTS.GRANTED
          ? (async () => {
            setCameraGranted(true);
            await AppStorage.setCameraPermission("true");
          })()
          : setCameraGranted(false);
      }
    } else if (Platform.OS === 'ios') {
      const res = await check(PERMISSIONS.IOS.CAMERA);

      if (res === RESULTS.GRANTED) {
        (async () => {
          setCameraGranted(true);
          await AppStorage.setCameraPermission("true");
        })()
      } else if (res === RESULTS.DENIED) {
        const res2 = await request(PERMISSIONS.IOS.CAMERA);
        res2 === RESULTS.GRANTED
          ? (async () => {
            setCameraGranted(true);
            await AppStorage.setCameraPermission("true");
          })()
          : setCameraGranted(false);
      }
    }
  };

  useEffect(() => {
    handleCameraPermission();
  }, []);

  const handleBarCodeScanned = ({ data, type }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

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
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'flex-end',
          justifyContent: "center",
          alignItems: "center",
        }}>
        {!cameraGranted && <Text>No Permssion to access your camera</Text>}
        {cameraGranted &&
          <BarcodeScanner
            style={styles.scanQR}
            onBarcodeRead={handleBarCodeScanned}
            onException={exceptionKey => {
              // check instructions on Github for a more detailed overview of these exceptions.
              switch (exceptionKey) {
                case Exception.NO_PLAY_SERVICES:
                // tell the user they need to update Google Play Services
                case Exception.LOW_STORAGE:
                // tell the user their device doesn't have enough storage to fit the barcode scanning magic
                case Exception.NOT_OPERATIONAL:
                // Google's barcode magic is being downloaded, but is not yet operational.
                default:
                  break;
              }
            }}
            focusMode={FocusMode.AUTO /* could also be TAP or FIXED */}
            // torchMode={TorchMode.ON /* could be the default OFF */}
            cameraFillMode={
              CameraFillMode.FIT /* could also be COVER */
            }
            barcodeType={BarcodeType.QR_CODE}
          />}
      </View>
      {scanned && <Button
        style={styles.scanButton}
        appearance='giant'
        status='primary'
        onPress={() => setScanned(false)}>
        Scan
      </Button>}
    </SafeAreaLayout>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  scanButton: {
    marginHorizontal: 16,
    margin: 16,
  },
  scanQR: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: '100%',
  },
});

const mapStateToProps = (state, ownProps) => ({
  user: state.user
});

export default connect(mapStateToProps, {})(ScannerWrapped);