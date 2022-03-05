import { useHistory } from 'react-router-dom';

export const useRedirect = () => {
  const history = useHistory();

  const toTop = () => history.push('/');

  const goBack = () => history.goBack();

  const toLogin = () => history.push('/login');

  return { toTop, goBack, toLogin };
};
