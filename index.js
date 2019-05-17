/**
 * @format
 */

import { Navigation } from 'react-native-navigation';
import { createPages } from './src/navigation/navigator';
import App from './src/App';

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
