import { useCallback } from 'react';
import { useHistory } from 'react-router';
import { useLoginUser } from '../providers/LoginUserProvider';

export const useLogin = () => {
  const history = useHistory();
  const { setLoginUser } = useLoginUser();

  const login = useCallback(() => {
    // API login get

    setLoginUser({
      userId: '1',
      nickname: 'たなか',
    });

    history.push('/');
  }, []);

  return { login };
};
