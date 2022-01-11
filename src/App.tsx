import { LoginUserProvider } from './providers/LoginUserProvider';
import { Router } from './router/Router';

export const App = () => {
  return (
    <LoginUserProvider>
      <Router />
    </LoginUserProvider>
  );
};
