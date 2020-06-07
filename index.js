// import 'expo/build/Expo.fx';
// import registerRootComponent from 'expo/build/launch/registerRootComponent';
import { activateKeepAwake } from 'expo-keep-awake';

import { registerRootComponent } from 'expo';

import App from './App';

if (__DEV__) {
    activateKeepAwake();
}
// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
