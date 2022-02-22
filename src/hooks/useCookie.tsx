import { useCallback } from 'react';
import { useCookies } from 'react-cookie';
import { getRandomId } from '../utility';

export const useCookie = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['sessionId', 'accessToken']);

  const getSessionId = useCallback(() => {
    let sessionId = '';

    if (cookies.sessionId) {
      sessionId = cookies.sessionId;
    } else {
      const randomId = getRandomId(8);
      setCookie('sessionId', randomId, { maxAge: 86400 });
      sessionId = randomId;
    }

    return sessionId;
  }, [cookies.sessionId]);

  const getAccessToken = useCallback(() => {
    return cookies.accessToken;
  }, [cookies.accessToken]);

  const setAccessToken = useCallback(
    (token: string) => {
      setCookie('accessToken', token, { maxAge: 3600 });
    },
    [cookies.accessToken]
  );

  const removeAccessToken = useCallback(() => {
    removeCookie('accessToken');
  }, [cookies.accessToken]);

  return { getSessionId, getAccessToken, setAccessToken, removeAccessToken };
};
