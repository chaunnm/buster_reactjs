import { Route, Routes } from 'react-router-dom';
import './App.scss';
import { publicRoute, privateRoute } from './routes';
import { MainLayout } from './layouts';

function App() {
  return (
    <>
      <Routes>
        {publicRoute.map((route, index) => {
          const Page = route.component;
          return (
            <Route
              key={index}
              path={route.path}
              element={<Page />}
            />
          );
        })}
        {privateRoute.map((route, index) => {
          const Page = route.component;
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <MainLayout>
                  <Page />
                </MainLayout>
              }
            />
          );
        })}
      </Routes>
    </>
  );
}

export default App;
