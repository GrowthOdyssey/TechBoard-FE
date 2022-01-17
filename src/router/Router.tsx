import { memo } from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { ScrollToTop } from '../components/ScrollToTop';
import { pageRoutes } from './PageRoutes';

export const Router = memo(() => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Switch>
        {pageRoutes.map((route) => (
          <Route key={route.path} exact={route.exact} path={route.path}>
            <Layout isSideBar={route.sideBar}>{route.children}</Layout>
          </Route>
        ))}
      </Switch>
    </BrowserRouter>
  );
});
