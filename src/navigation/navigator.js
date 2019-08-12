import {
  createAppContainer,
  createSwitchNavigator,
  createStackNavigator,
  createBottomTabNavigator,
  createDrawerNavigator,
} from 'react-navigation';
import routes from './routes';
import Pages from '../enum/Pages';

const pageListNavigation = createStackNavigator({
  [Pages.PAGES_LIST]: {
    screen: routes[Pages.PAGES_LIST].screen,
  },
  [Pages.ITEMS_LIST]: {
    screen: routes[Pages.ITEMS_LIST].screen,
  },
  [Pages.ITEM_DETAILS]: {
    screen: routes[Pages.ITEM_DETAILS].screen,
  },
});

const drawerNavigation = createDrawerNavigator({
  [Pages.HOME]: { screen: routes[Pages.HOME].screen },
  [Pages.ONBOARDING]: { screen: routes[Pages.ONBOARDING].screen },
});

const mainNavigation = createBottomTabNavigator({
  [Pages.HOME]: {
    screen: drawerNavigation,
  },
  [Pages.PAGES_LIST]: {
    screen: pageListNavigation,
  },
});

const loginNavigation = createSwitchNavigator({
  Login: {
    screen: routes[Pages.LOGIN].screen,
  },
  Home: mainNavigation,
});

const StartNavigation = createAppContainer(mainNavigation);

const LoginNavigation = createAppContainer(loginNavigation);

export { StartNavigation, mainNavigation, LoginNavigation };
