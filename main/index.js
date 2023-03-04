/**
 * @format
 */
import './shim.js';
// import crypto from 'crypto';
import 'react-native-get-random-values';
import {AppRegistry} from 'react-native';
import './src/global';
import Promise from 'bluebird';

// We use the "Bluebird" lib for Promises, because it shows good perf
// and it implements the "unhandledrejection" event:
global.Promise = Promise;

// Global catch of unhandled Promise rejections:
global.onunhandledrejection = function onunhandledrejection(error) {
  // Warning: when running in "remote debug" mode (JS environment is Chrome browser),
  // this handler is called a second time by Bluebird with a custom "dom-event".
  // We need to filter this case out:
  if (error instanceof Error) {
    console.log(error); // Your custom error logging/reporting code
  }
};
import App from './src/App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
