import { categoryType } from '../types/board/category';
import { threadListType, threadType } from '../types/board/thread';

export const m_threads: threadListType[] = [
  {
    threadId: '1',
    threadTitle: 'HTMLに詳しい方、急募！！！',
    categoryId: '1',
    firstComment:
      'エンジニアになろうと思って現在勉強初めて1週間なのですが、HTMLの書き方が分からなくて困っています！親切な方教えて下さい。・゜・(ノД`)・゜・。',
    commentsCount: 100,
    createdAt: '2022-01-01T00:00:00+09:00',
    updatedAt: '2022-01-01T00:00:00+09:00',
  },
  {
    threadId: '2',
    threadTitle: 'スレッドタイトル',
    categoryId: '1',
    firstComment: '1コメのテキスト',
    commentsCount: 100,
    createdAt: '2022-01-01T00:00:00+09:00',
    updatedAt: '2022-01-01T00:00:00+09:00',
  },
  {
    threadId: '3',
    threadTitle: 'スレッドタイトル',
    categoryId: '1',
    firstComment: '1コメのテキスト',
    commentsCount: 100,
    createdAt: '2022-01-01T00:00:00+09:00',
    updatedAt: '2022-01-01T00:00:00+09:00',
  },
  {
    threadId: '4',
    threadTitle: 'スレッドタイトル',
    categoryId: '1',
    firstComment: '1コメのテキスト',
    commentsCount: 100,
    createdAt: '2022-01-01T00:00:00+09:00',
    updatedAt: '2022-01-01T00:00:00+09:00',
  },
  {
    threadId: '5',
    threadTitle: 'スレッドタイトル',
    categoryId: '1',
    firstComment: '1コメのテキスト',
    commentsCount: 100,
    createdAt: '2022-01-01T00:00:00+09:00',
    updatedAt: '2022-01-01T00:00:00+09:00',
  },
];

export const m_thread: threadType = {
  threadId: '1',
  threadTitle: 'HTMLに詳しい方、急募！！！',
  categoryId: '1',
  commentsCount: 100,
  comments: [
    {
      commentId: '1',
      commentTitle: '1コメでーす',
      userName: 'ニックネーム',
      sessionId: '1111',
      createdAt: '2022-01-01T00:00:00+09:00',
    },
    {
      commentId: '2',
      commentTitle: '2コメでーす',
      userName: 'ニックネーム',
      sessionId: '1111',
      createdAt: '2022-01-01T00:00:00+09:00',
    },
    {
      commentId: '3',
      commentTitle: '3コメでーす',
      userName: 'ニックネーム',
      sessionId: '1111',
      createdAt: '2022-01-01T00:00:00+09:00',
    },
    {
      commentId: '4',
      commentTitle: '4コメでーす',
      userName: 'ニックネーム',
      sessionId: '1111',
      createdAt: '2022-01-01T00:00:00+09:00',
    },
    {
      commentId: '5',
      commentTitle: '5コメでーす',
      userName: 'ニックネーム',
      sessionId: '1111',
      createdAt: '2022-01-01T00:00:00+09:00',
    },
  ],
  createdAt: '2022-01-01T00:00:00+09:00',
  updatedAt: '2022-01-01T00:00:00+09:00',
};

export const m_categories: categoryType[] = [
  {
    categoryId: '1',
    categoryName: 'HTML',
  },
  {
    categoryId: '2',
    categoryName: 'CSS',
  },
  {
    categoryId: '3',
    categoryName: 'JavaScript',
  },
  {
    categoryId: '4',
    categoryName: 'PHP',
  },
  {
    categoryId: '5',
    categoryName: 'Ruby',
  },
];
