import { useCallback } from 'react';
import { useHistory } from 'react-router';
import { useLoginUser } from '../providers/LoginUserProvider';

export const useSignup = () => {
  const history = useHistory();
  const { setLoginUser } = useLoginUser();

  const signup = useCallback((userId, password, nickname) => {
    setLoginUser({ userId, nickname });

    // API signup post

    history.push('/');
  }, []);

  return { signup };
};
