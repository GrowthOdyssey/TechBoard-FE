import { useHistory } from 'react-router-dom';

export const useRedirect = () => {
  const history = useHistory();

  const toTop = () => history.push('/');

  return { toTop };
};