import { articleType } from '../types/article/articleType';

export const articles: articleType[] = [
  {
    articleId: '1',
    articleTitle: '記事名1',
    userId: 'userId1',
    userName: 'ニックネーム1',
    createdAt: '2022-01-01T00:00:00+09:00',
    updatedAt: '2022-01-01T00:00:00+09:00',
  },
  {
    articleId: '2',
    articleTitle: '記事名2',
    userId: 'userId2',
    userName: 'ニックネーム2',
    createdAt: '2022-01-01T00:00:00+09:00',
    updatedAt: '2022-01-01T00:00:00+09:00',
  },
];

export const m_article = {
  articleId: '1',
  articleTitle: '記事名1',
  contents:
    '# h1見出し\n## h2見出し\n### h3見出し\n#### h4見出し\n##### h5見出し\n\n本文テキスト\n**太字テキスト**\n*斜体テキスト*\n\n> 引用文\n\n* Generic List\n  * 2階層目\n    * 3階層目\n\n1. Numbered List\n2. 項目その２\n\n[Google.comのリンク](https://www.google.com/?hl=ja)\n\nコードブロック\n```js\nconst sayHello = (name) => {\n    console.log(`Hello ${name}!!`);\n}\nsayHello("Mike"); // "Hello Mike!!"\n```\n',
  avatarId: '001',
  userName: 'ニックネーム1',
  createdAt: '2022-01-01T00:00:00+09:00',
  updatedAt: '2022-01-01T00:00:00+09:00',
};
