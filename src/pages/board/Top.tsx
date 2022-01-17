import { VFC, memo } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { BoardCard } from '../../components/board/Card';
import { Heading } from '../../components/common/Heading';
import { Contents } from '../../components/Contents';
import { SideBar } from '../../components/SideBar';
import { thread } from '../../types/board/thread';

const threads: thread[] = [
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

const categories = [
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

export const BoardTop: VFC = memo(() => {
  return (
    <>
      <SideBar>
        <Link to="create">掲示板作成</Link>
        <Link to="#" style={{ pointerEvents: 'none' }}>
          掲示板検索
        </Link>
      </SideBar>

      <Contents>
        <Heading size={'2'}>掲示板TOP</Heading>
        <section>
          <Heading size={'4'}>最新のスレッド一覧</Heading>
          <ul className="list">
            {threads.map((thread) => (
              <BoardCard key={thread.threadId} data={thread} />
            ))}
          </ul>
        </section>
        <section style={{ marginTop: '40px' }}>
          <Heading size={'4'}>カテゴリー一覧</Heading>
          <_CategoryList>
            {categories.map((category) => (
              <Link to={`/board/category/${category.id}`} key={category.id}>
                {category.name}
              </Link>
            ))}
          </_CategoryList>
        </section>
      </Contents>
    </>
  );
});

const _CategoryList = styled.div`
  > a {
    display: block;
    &:hover {
      text-decoration: underline;
    }
  }
`;
