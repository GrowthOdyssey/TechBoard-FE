import { useCallback, useState } from 'react';
import axios from 'axios';
import { LoginUserType, useLoginUser } from '../providers/LoginUserProvider';
import { apiPath } from '../variable';
import { getAvatarId } from '../utility';
import { useRedirect } from './useRedirect';
import { useToast } from '../providers/ToastProvider';
import { useCookie } from './useCookie';

type statusType = 'useable' | 'loading' | 'complete';

// prettier-ignore
export const useUser = () => {
  const [status, setStatus] = useState<statusType>('useable')
  const { setLoginUser } = useLoginUser();
  const { toTop, goBack } = useRedirect();
  const { setToast } = useToast();
  const { setAccessToken, removeAccessToken } = useCookie()

  /**
   * ユーザー登録API
   * @param  {string} userId
   * @param  {string} password
   * @param  {string} userName
   * @param  {string} avatarId
   * @return {LoginUserType}
   */
  const signup = useCallback((data: { userId: string; password: string; userName: string }) => {
    setStatus('loading')
    const avatarId: string = getAvatarId();

    axios.post(`${apiPath}/users`, { ...data, avatarId })
      .then(res => {
        const user: LoginUserType = res.data;
        setLoginUser(user);
        setAccessToken(user.accessToken);
        setStatus('complete');
        setTimeout(() => {
          goBack();
          setToast({text: '登録が完了しました', status: 'success'})
        }, 1000)
      })
      .catch(() => {
        setStatus('useable');
        setToast({text: '会員登録に失敗しました', status: 'error'})
      })
  }, []);

  /**
   * ログインAPI
   * @param  {string} userId
   * @param  {string} password
   * @return {LoginUserType}
   */
  const login = useCallback((data: { userId: string; password: string }) => {
    setStatus('loading')
    axios.post(`${apiPath}/users/login`, { ...data })
      .then(res => {
        const user: LoginUserType = res.data;
        setLoginUser(user);
        setAccessToken(user.accessToken);
        setStatus('complete');
        setTimeout(() => {
          goBack();
          setToast({text: 'ログインしました', status: 'success'})
        }, 1000)
      })
      .catch(() => {
        setStatus('useable');
        setToast({text: 'ログインに失敗しました', status: 'error'})
      })
  }, []);

  /**
   * ログアウトAPI
   * @param  {string} userId
   * @return {null}
   */
  const logout = useCallback((accessToken: string) => {
    axios.delete(`${apiPath}/users/logout`, {headers: {accessToken}})
      .then(() => {
        setLoginUser({} as LoginUserType);
        removeAccessToken()
        toTop();
        setToast({text: 'ログアウトしました', status: 'success'})
      });
  }, []);

  return { status, signup, login, logout };
};
