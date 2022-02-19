/* eslint-disable @typescript-eslint/no-explicit-any */

export const getAvatarId = () => {
  const pokemonLength = 151;
  const random = `${Math.floor(Math.random() * pokemonLength) + 1}`;
  const avatarId = random.padStart(3, '0');

  return avatarId;
};

export const getRandomId = (length: number) => {
  const patterns = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let randomId = '';
  for (let i = 0; i < length; i++) {
    randomId += patterns[Math.floor(Math.random() * patterns.length)];
  }

  return randomId;
};

// prettier-ignore
export const getPaging = (page: string, perPage: string, datas: any[]) => {
  const pagingData = datas.reduce((acc: [], value, index: number) =>
    index % Number(perPage) ?
      acc : [...acc, datas.slice(index, index + Number(perPage))], []);

  return pagingData[Number(page) - 1];
};
