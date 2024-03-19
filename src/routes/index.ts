import {
  Account,
  Downloads,
  Episode,
  Genre,
  Home,
  Login,
  Movies,
  MyList,
  News,
  // Season,
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
  { path: '/view/:category/:id/season/:season', page: Episode },
  { path: '/view/:category/:id/season/:season/episode/:episode', page: Episode },
  { path: '/genre/:name', page: Genre },
];

export { publicRoute, privateRoute };
