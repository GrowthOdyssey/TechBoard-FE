export const getAvatorId = () => {
  const pokemonLength = 151;
  const random = `${Math.floor(Math.random() * pokemonLength) + 1}`;
  const avatorId = random.padStart(3, '0');

  return avatorId;
};

export const getRandomId = (length: number) => {
  const patterns = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let randomId = '';
  for (let i = 0; i < length; i++) {
    randomId += patterns[Math.floor(Math.random() * patterns.length)];
  }

  return randomId;
};
