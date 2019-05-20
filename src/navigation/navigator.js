import { Navigation } from 'react-native-navigation';
import routes from './routes';
import Pages from '../enum/Pages';
import { images } from '../theme';

const createPages = () => {
  // Register pages
  routes.forEach(route => Navigation.registerComponent(route.id, () => route.screen));
};

const navigationComnponent = (component, options = {}) => {
  return typeof component === 'string' ? { component: { name: component, options } } : component;
};

const mainNavigation = () => {
  return Navigation.setRoot({
    root: {
      bottomTabs: {
        id: 'BottomTabsId',
        options: {
          bottomTabs: {
            elevation: 8,
            titleDisplayMode: 'alwaysShow', // for Android only
          },
        },
        children: [
          {
            stack: {
              children: [
                {
                  component: {
                    name: Pages.HOME,
                    options: {
                      bottomTab: {
                        text: 'Home',
                        fontSize: 12,
                        selectedFontSize: 12,
                        icon: images.TRIANGLE_ICON,
                        scale: 2,
                      },
                    },
                  },
                },
              ],
            },
          },
          {
            stack: {
              children: [
                {
                  component: {
                    name: Pages.PAGES_LIST,
                    options: {
                      bottomTab: {
                        text: 'Pages',
                        fontSize: 12,
                        selectedFontSize: 12,
                        icon: images.SQUARE_ICON,
                        scale: 2.5,
                      },
                    },
                  },
                },
              ],
            },
          },
        ],
      },
    },
  });
};

const loginNavigation = () => {
  return Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: Pages.LOGIN,
              options: {},
            },
          },
        ],
      },
    },
  });
};

export { createPages, mainNavigation, loginNavigation, navigationComnponent };
