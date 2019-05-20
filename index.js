/**
 * @format
 */

import { Navigation, Alert } from 'react-native-navigation';
import { setJSExceptionHandler, setNativeExceptionHandler } from 'react-native-exception-handler';
import { createPages } from './src/navigation/navigator';
import App from './src/App';

/**
 * Exceptions handler
 */

const exceptionhandler = (error, isFatal) => {
  // TODO: Track JS exception

  if (isFatal) {
    Alert.alert('JS exception', 'Fatal JS exception produced', [
      {
        text: 'Close',
      },
    ]);
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

/**
 * Register app component
 */

Navigation.registerComponent('app', () => App);

createPages();

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: 'app',
      },
    },
  });
});
