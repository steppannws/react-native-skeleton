/**
 * @format
 */

import { Navigation, Alert } from 'react-native-navigation';
import { setJSExceptionHandler, setNativeExceptionHandler } from 'react-native-exception-handler';
import codePush from 'react-native-code-push';
import { createPages } from './src/navigation/navigator';
import App from './src/App';
import { initLocaleWithDefaultLanguage } from './src/utils/Translator';

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

// Configure locale
initLocaleWithDefaultLanguage('en');

/**
 * Register app component
 */


// In this object you can specify with what frequency you want to check if there is an update in Code Push
// By specifying MANUAL, we are telling the app we will check manually for updates by using codePush.sync()
// Refers to these docs for more info: https://docs.microsoft.com/en-us/appcenter/distribution/codepush/react-native#api-reference
const codePushOptions = { checkFrequency: codePush.CheckFrequency.MANUAL };
Navigation.registerComponent('app', () => codePush(codePushOptions)(App));

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
