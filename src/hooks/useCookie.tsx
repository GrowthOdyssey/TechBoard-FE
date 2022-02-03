import { useCallback } from 'react';
import { useCookies } from 'react-cookie';
import { getRandomId } from '../utility';

export const useCookie = () => {
  const [cookies, setCookie] = useCookies(['sessionId']);

  const getSessionId = useCallback(() => {
    let sessionId = '';

    if (cookies.sessionId) {
      sessionId = cookies.sessionId;
    } else {
      const randomId = getRandomId(8);
      setCookie('sessionId', randomId);
      sessionId = randomId;
    }

    return sessionId;
  }, [cookies]);

  return { getSessionId };
};
