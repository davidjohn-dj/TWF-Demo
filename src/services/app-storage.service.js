import { AsyncStorage, YellowBox } from 'react-native';

const MAPPING_KEY = 'mapping';
const THEME_KEY = 'theme';
const IS_FIRST_TIME_KEY = 'isFirstTime';
const CAMERA = 'CAMERA';

export class AppStorage {

  static getMapping = (fallback) => {
    return AsyncStorage.getItem(MAPPING_KEY).then((mapping) => {
      return mapping || fallback;
    });
  };

  static getIsFirstTime = async (fallback) => {
    return await AsyncStorage.getItem(IS_FIRST_TIME_KEY).then((isfirsttime) => {
      return isfirsttime || fallback;
    });
  };

  static getCameraPermission = async (fallback) => {
    return await AsyncStorage.getItem(CAMERA).then((camera) => {
      return camera || fallback;
    });
  };

  static getTheme = (fallback) => {
    return AsyncStorage.getItem(THEME_KEY).then((theme) => {
      return theme || fallback;
    });
  };

  static setMapping = (mapping) => {
    return AsyncStorage.setItem(MAPPING_KEY, mapping);
  };

  static setIsFirstTime = async (firstTime) => {
    return await AsyncStorage.setItem(IS_FIRST_TIME_KEY, firstTime);
  };

  static setCameraPermission = async (camera) => {
    return await AsyncStorage.setItem(CAMERA, camera);
  };

  static setTheme = (theme) => {
    return AsyncStorage.setItem(THEME_KEY, theme);
  };
}

/**
 * In a Bare React Native project you should use
 * https://github.com/react-native-community/async-storage
 *
 * However, Expo runs AsyncStorage exported from react-native.
 * Just to save application bundle size, we still using this one.
 */
YellowBox.ignoreWarnings(['AsyncStorage has been extracted']);
