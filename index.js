/**
 * @format
 */

import { AppRegistry } from 'react-native';
import { setJSExceptionHandler, setNativeExceptionHandler } from 'react-native-exception-handler';
import { initLocaleWithDefaultLanguage } from './src/utils/Translator';
import App from './App';
import { name as appName } from './app.json';

/**
 * Exceptions handler
 */

const exceptionhandler = (error, isFatal) => {
  // TODO: Track JS exception

  if (isFatal) {
    // Alert.alert('JS exception', 'Fatal JS exception produced', [
    //   {
    //     text: 'Close',
    //   },
    // ]);
  }
};

setJSExceptionHandler(exceptionhandler, false);

setNativeExceptionHandler(errorString => {
  // TODO: Track native exception
  console.log('🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥'); // eslint-disable-line
  console.log('setNativeExceptionHandler', errorString); // eslint-disable-line
  console.log('🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥'); // eslint-disable-line
}, false);

/**/

// Configure locale
initLocaleWithDefaultLanguage('en');

AppRegistry.registerComponent(appName, () => App);
