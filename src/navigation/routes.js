import Pages from '../enum/Pages';

import Home from '../pages/home';
import Login from '../pages/login';
import PagesList from '../pages/pages-list';

const routes = [
  { id: Pages.HOME, screen: Home },
  { id: Pages.LOGIN, screen: Login },
  { id: Pages.PAGES_LIST, screen: PagesList },
];

export default routes;
