import { categoryType } from '../types/board/category';
import { threadType } from '../types/board/thread';

export const m_threads: threadType[] = [
  {
    threadId: '1',
    threadTitle: 'スレッドタイトル',
    categoryId: '1',
    commentsCount: 100,
    comments: [
      {
        commentId: '1',
        commentTitle: 'コメント',
        userId: '1',
        userName: 'ニックネーム',
        sessionId: '1111',
        createdAt: '2022-01-01T00:00:00+09:00',
      },
      {
        commentId: '2',
        commentTitle: 'コメント',
        userId: '1',
        userName: 'ニックネーム',
        sessionId: '1111',
        createdAt: '2022-01-01T00:00:00+09:00',
      },
      {
        commentId: '3',
        commentTitle: 'コメント',
        userId: '1',
        userName: 'ニックネーム',
        sessionId: '1111',
        createdAt: '2022-01-01T00:00:00+09:00',
      },
      {
        commentId: '4',
        commentTitle: 'コメント',
        userId: '1',
        userName: 'ニックネーム',
        sessionId: '1111',
        createdAt: '2022-01-01T00:00:00+09:00',
      },
      {
        commentId: '5',
        commentTitle: 'コメント',
        userId: '1',
        userName: 'ニックネーム',
        sessionId: '1111',
        createdAt: '2022-01-01T00:00:00+09:00',
      },
      {
        commentId: '6',
        commentTitle: 'コメント',
        userId: '1',
        userName: 'ニックネーム',
        sessionId: '1111',
        createdAt: '2022-01-01T00:00:00+09:00',
      },
    ],
    createdAt: '2022-01-01T00:00:00+09:00',
    updatedAt: '2022-01-01T00:00:00+09:00',
  },
  {
    threadId: '2',
    threadTitle: 'スレッドタイトル',
    categoryId: '1',
    commentsCount: 100,
    comments: [
      {
        commentId: '1',
        commentTitle: 'コメント',
        userId: '1',
        userName: 'ニックネーム',
        sessionId: '1111',
        createdAt: '2022-01-01T00:00:00+09:00',
      },
    ],
    createdAt: '2022-01-01T00:00:00+09:00',
    updatedAt: '2022-01-01T00:00:00+09:00',
  },
  {
    threadId: '3',
    threadTitle: 'スレッドタイトル',
    categoryId: '1',
    commentsCount: 100,
    comments: [
      {
        commentId: '1',
        commentTitle: 'コメント',
        userId: '1',
        userName: 'ニックネーム',
        sessionId: '1111',
        createdAt: '2022-01-01T00:00:00+09:00',
      },
    ],
    createdAt: '2022-01-01T00:00:00+09:00',
    updatedAt: '2022-01-01T00:00:00+09:00',
  },
  {
    threadId: '4',
    threadTitle: 'スレッドタイトル',
    categoryId: '1',
    commentsCount: 100,
    comments: [
      {
        commentId: '1',
        commentTitle: 'コメント',
        userId: '1',
        userName: 'ニックネーム',
        sessionId: '1111',
        createdAt: '2022-01-01T00:00:00+09:00',
      },
    ],
    createdAt: '2022-01-01T00:00:00+09:00',
    updatedAt: '2022-01-01T00:00:00+09:00',
  },
  {
    threadId: '5',
    threadTitle: 'スレッドタイトル',
    categoryId: '1',
    commentsCount: 100,
    comments: [
      {
        commentId: '1',
        commentTitle: 'コメント',
        userId: '1',
        userName: 'ニックネーム',
        sessionId: '1111',
        createdAt: '2022-01-01T00:00:00+09:00',
      },
    ],
    createdAt: '2022-01-01T00:00:00+09:00',
    updatedAt: '2022-01-01T00:00:00+09:00',
  },
];

export const m_categories: categoryType[] = [
  {
    id: '1',
    name: 'HTML',
  },
  {
    id: '2',
    name: 'CSS',
  },
  {
    id: '3',
    name: 'JavaScript',
  },
  {
    id: '4',
    name: 'PHP',
  },
  {
    id: '5',
    name: 'Ruby',
  },
];
