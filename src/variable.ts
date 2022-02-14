/* eslint-disable @typescript-eslint/no-explicit-any */
const isDevelopment = (<any>import.meta).env.VITE_MODE;

// export const apiPath = 'https://stormy-headland-72800.herokuapp.com/v1';
export const apiPath = 'http://127.0.0.1:4010/v1';

export const imagePath = isDevelopment ? '/images/' : '/assets/images/';

export const palette = {
  red: ['#e53e3e'],
  orange: ['#ed8936'],
  yellow: ['#ecc94b'],
  green: ['#38A169'],
  teal: ['#38b2ac'],
  blue: ['#3182ce'],
  cyan: ['#0bc5ea'],
  purple: ['#9f7aea'],
  pink: ['#ed64a6'],
  black: ['#171717'],
  gray: ['#e2e8f0', '#718096'],
  border: ['#a0aec0'],
};
