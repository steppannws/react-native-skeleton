import Pages from '../enum/Pages';

import Home from '../pages/home';
import ItemDetails from '../pages/item-details';
import ItemsList from '../pages/items-list';
import Login from '../pages/login';
import Onboarding from '../pages/onboarding';
import PagesList from '../pages/pages-list';
import CodePushTest from '../pages/codePushTest';

const routes = [
  { id: Pages.HOME, screen: Home },
  { id: Pages.ITEM_DETAILS, screen: ItemDetails },
  { id: Pages.ITEMS_LIST, screen: ItemsList },
  { id: Pages.LOGIN, screen: Login },
  { id: Pages.ONBOARDING, screen: Onboarding },
  { id: Pages.PAGES_LIST, screen: PagesList },
  { id: Pages.CODEPUSH_TEST, screen: CodePushTest },
];

export default routes;
