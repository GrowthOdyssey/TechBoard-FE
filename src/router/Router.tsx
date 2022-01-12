import { memo } from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';
import { Header } from '../components/Header';
import { pageRoutes } from './PageRoutes';

export const Router = memo(() => {
  return (
    <BrowserRouter>
      <Switch>
        {pageRoutes.map((route) => (
          <Route key={route.path} exact={route.exact} path={route.path}>
            <Header />
            <_Container>{route.children}</_Container>
          </Route>
        ))}
      </Switch>
    </BrowserRouter>
  );
});

const _Container = styled.div`
  max-width: 1200px;
  margin: 20px auto 0;
`;
