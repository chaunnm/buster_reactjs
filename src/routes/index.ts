import {
  Account,
  Downloads,
  Genre,
  Home,
  Login,
  Movies,
  MyList,
  News,
  Series,
  Settings,
  View,
  Welcome,
} from '../pages';

const publicRoute = [
  { path: '/welcome', page: Welcome },
  { path: '/login', page: Login },
];

const privateRoute = [
  { path: '/', page: Home },
  { path: '/movies', page: Movies },
  { path: '/series', page: Series },
  { path: '/my_list', page: MyList },
  { path: '/downloads', page: Downloads },
  { path: '/news', page: News },
  { path: '/settings', page: Settings },
  { path: '/account', page: Account },
  { path: '/view/:category/:id', page: View },
  { path: '/genre/:name', page: Genre },
];

export { publicRoute, privateRoute };
