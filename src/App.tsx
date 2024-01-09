import { Route, Routes } from 'react-router-dom';
import './App.scss';
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
} from './pages';

function App() {
  return (
    <Routes>
      <Route path="/welcome" Component={Welcome} />
      <Route path="/login" Component={Login} />
      <Route path="/" Component={Home} />
      <Route path="/movies" Component={Movies} />
      <Route path="/series" Component={Series} />
      <Route path="/my_list" Component={MyList} />
      <Route path="/downloads" Component={Downloads} />
      <Route path="/news" Component={News} />
      <Route path="/settings" Component={Settings} />
      <Route path="/account" Component={Account} />

      <Route path="/view" Component={View} />
    </Routes>
  );
}

export default App;
