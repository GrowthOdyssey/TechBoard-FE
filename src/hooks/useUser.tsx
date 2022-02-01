import { useCallback } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';
import { LoginUserType, useLoginUser } from '../providers/LoginUserProvider';
import { apiPath } from '../variable';

export const useUser = () => {
  const history = useHistory();
  const { setLoginUser } = useLoginUser();

  const redirectToTop = () => history.push('/');

  const getAvatorId = () => {
    const pokemonLength = 151;
    const random = `${Math.floor(Math.random() * pokemonLength) + 1}`;

    // prettier-ignore
    const id: string =
      random.length === 1 ? `00${random}`:
      random.length === 2 ? `0${random}`:
      random;

    return id;
  };

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
        redirectToTop();
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
        redirectToTop();
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
        redirectToTop();
      })
      .catch(() => {
        const user: LoginUserType = {
          userId: '1',
          userName: 'たなか',
          avatarId: '1',
          accessToken: 'abcd1234',
          createdAt: '2022-01-01T00:00:00+09:00'
        };
        setLoginUser(user);
        redirectToTop();
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
        redirectToTop();
      });
  }, []);

  return { signup, login, logout };
};
