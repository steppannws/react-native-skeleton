import { Navigation } from 'react-native-navigation';
import routes from './routes';
import Pages from '../enum/Pages';

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
        children: [
          {
            stack: {
              children: [
                {
                  component: {
                    name: Pages.HOME,
                    options: {
                      bottomTab: {
                        fontSize: 12,
                        text: 'Home',
                        //   icon: require('./signin.png')
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
                        //   icon: require('./signup.png')
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
