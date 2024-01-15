import {
  Account,
  Downloads,
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
  { path: '/welcome', component: Welcome },
  { path: '/login', component: Login },
];

const privateRoute = [
  { path: '/', component: Home },
  { path: '/movies', component: Movies },
  { path: '/series', component: Series },
  { path: '/my_list', component: MyList },
  { path: '/downloads', component: Downloads },
  { path: '/news', component: News },
  { path: '/settings', component: Settings },
  { path: '/account', component: Account },
  { path: '/views', component: View },
];

export { publicRoute, privateRoute };
