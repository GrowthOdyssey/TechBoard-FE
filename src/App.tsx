import { Providers } from './providers/Providers';
import { Router } from './router/Router';

export const App = () => {
  return (
    <Providers>
      <Router />
    </Providers>
  );
};
