export const getAvatorId = () => {
  const pokemonLength = 151;
  const random = `${Math.floor(Math.random() * pokemonLength) + 1}`;

  // prettier-ignore
  const id: string =
    random.length === 1 ? `00${random}`:
    random.length === 2 ? `0${random}`:
    random;

  return id;
};

export const getSessionId = () => {
  let sessionId = '';

  // getcookie sessionid
  const cookie = false;
  if (cookie) {
    sessionId = 'cookie';
  } else {
    const length = 8;
    const patterns = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let randomId = '';
    for (let i = 0; i < length; i++) {
      randomId += patterns[Math.floor(Math.random() * patterns.length)];
    }

    // setcookie randomid
    sessionId = randomId;
  }

  return sessionId;
};
