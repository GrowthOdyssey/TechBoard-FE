import { useCallback } from 'react';
import axios from 'axios';
import { LoginUserType, useLoginUser } from '../providers/LoginUserProvider';
import { apiPath } from '../variable';
import { getAvatorId } from '../utility';
import { useRedirect } from './useRedirect';
import { useToast } from '../providers/ToastProvider';

export const useUser = () => {
  const { setLoginUser } = useLoginUser();
  const { toTop, goBack } = useRedirect();
  const { setToast } = useToast();

  /**
   * ユーザー登録API
   * @param  {string} userId
   * @param  {string} password
   * @param  {string} userName
   * @param  {string} avatorId
   * @return {LoginUserType}
   */
  const signup = useCallback((data: { userId: string; password: string; userName: string }) => {
    const avatorId: string = getAvatorId();

    // prettier-ignore
    axios.post(`${apiPath}/users`, { ...data, avatorId })
      .then(res => {
        const user: LoginUserType = res.data;
        setLoginUser(user);
        goBack();
        setToast({text: '登録が完了しました', status: 'success'})
      })
      .catch(() => {
        const user: LoginUserType = {
          userId: data.userId,
          userName: data.userName,
          avatarId: avatorId,
          accessToken: 'abcd1234',
          createdAt: '2022-01-01T00:00:00+09:00'
        };
        setLoginUser(user);
        goBack();
        setToast({text: '登録が完了しました', status: 'success'})
      })
  }, []);

  /**
   * ログインAPI
   * @param  {string} userId
   * @param  {string} password
   * @return {LoginUserType}
   */
  const login = useCallback((data: { userId: string; password: string }) => {
    // prettier-ignore
    axios.post(`${apiPath}/users/login`, { ...data })
      .then(res => {
        const user: LoginUserType = res.data;
        setLoginUser(user);
        goBack();
        setToast({text: 'ログインしました', status: 'success'})
      })
      .catch(() => {
        const user: LoginUserType = {
          userId: '1',
          userName: 'たなか',
          avatarId: getAvatorId(),
          accessToken: 'abcd1234',
          createdAt: '2022-01-01T00:00:00+09:00'
        };
        setLoginUser(user);
        goBack();
        setToast({text: 'ログインしました', status: 'success'})
      })
  }, []);

  /**
   * ログアウトAPI
   * @param  {string} userId
   * @return {null}
   */
  const logout = useCallback((userId: string) => {
    // prettier-ignore
    axios.post(`${apiPath}/users/logout/${userId}`)
      .then(() => {
        setLoginUser({} as LoginUserType);
        toTop();
        setToast({text: 'ログアウトしました', status: 'success'})
      });
  }, []);

  return { signup, login, logout };
};
