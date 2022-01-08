import { memo } from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { Header } from '../components/Header';
import { pageRoutes } from './PageRoutes';

export const Router = memo(() => {
  return (
    <BrowserRouter>
      <Switch>
        {pageRoutes.map((route) => (
          <Route key={route.path} exact={route.exact} path={route.path}>
            <Header />
            {route.children}
          </Route>
        ))}
      </Switch>
    </BrowserRouter>
  );
});
