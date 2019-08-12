import Pages from '../enum/Pages';

import Home from '../pages/home';
import ItemDetails from '../pages/item-details';
import ItemsList from '../pages/items-list';
import Login from '../pages/login';
import Onboarding from '../pages/onboarding';
import PagesList from '../pages/pages-list';

const routes = {
  Home: { id: Pages.HOME, screen: Home },
  ItemDetails: { id: Pages.ITEM_DETAILS, screen: ItemDetails },
  ItemsList: { id: Pages.ITEMS_LIST, screen: ItemsList },
  Login: { id: Pages.LOGIN, screen: Login },
  Onboarding: { id: Pages.ONBOARDING, screen: Onboarding },
  PagesList: { id: Pages.PAGES_LIST, screen: PagesList },
};

export default routes;
