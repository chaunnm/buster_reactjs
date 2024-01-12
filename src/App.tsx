import React from 'react';
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
import { Navigation } from './components';
import Topbar from './components/Topbar';

function App() {

  return (
    <>
      <React.Fragment>
        <Navigation />
        <Topbar />
      </React.Fragment>
      <div className='main-container'>
        <Routes>
          <Route
            path='/welcome'
            element={<Welcome />}
          />
          <Route
            path='/login'
            element={<Login />}
          />

          <Route
            path='/'
            element={<Home />}
          />
          <Route
            path='/series'
            element={<Series />}
          />
          <Route
            path='/movies'
            element={<Movies />}
          />
          <Route
            path='/my_list'
            element={<MyList />}
          />
          <Route
            path='/downloads'
            element={<Downloads />}
          />
          <Route
            path='/news'
            element={<News />}
          />
          <Route
            path='/settings'
            element={<Settings />}
          />
          <Route
            path='/account'
            element={<Account />}
          />

          <Route
            path='/view'
            element={<View />}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
