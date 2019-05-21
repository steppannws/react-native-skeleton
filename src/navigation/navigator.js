import { Navigation } from 'react-native-navigation';
import { Dimensions } from 'react-native';
import routes from './routes';
import Pages from '../enum/Pages';
import { images } from '../theme';
import BurgerButton from '../components/burger-button';
import Drawer from '../components/drawer';

const createPages = () => {
  // Register pages
  routes.forEach(route => Navigation.registerComponent(route.id, () => route.screen));

  Navigation.registerComponent('burgerButton', () => BurgerButton);
  Navigation.registerComponent('drawerScreen', () => Drawer);
};

const navigationComnponent = (component, options = {}) => {
  return typeof component === 'string' ? { component: { name: component, options } } : component;
};

const mainNavigation = () => {
  return Navigation.setRoot({
    root: {
      sideMenu: {
        center: {
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
                        id: Pages.HOME,
                        name: Pages.HOME,
                        options: {
                          sideMenu: {
                            right: {
                              width: Dimensions.get('window').width * 0.6,
                            },
                          },
                          topBar: {
                            rightButtons: [
                              {
                                id: 'burgerButtonId',
                                component: {
                                  name: 'burgerButton',
                                  passProps: {
                                    onPress: () =>
                                      Navigation.mergeOptions(Pages.HOME, {
                                        sideMenu: {
                                          right: { visible: true },
                                        },
                                      }),
                                  },
                                },
                              },
                            ],
                          },
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
                        id: Pages.PAGES_LIST,
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
        right: {
          width: 100,
          component: {
            name: 'drawerScreen',
          },
        },
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
