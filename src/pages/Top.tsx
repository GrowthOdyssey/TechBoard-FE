import { VFC, memo } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BoardCard } from '../components/board/Card';
import { Heading } from '../components/common/Heading';
import { thread } from '../types/board/thread';
import { Button } from '../components/common/Button';

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

export const Top: VFC = memo(() => {
  return (
    <>
      <Heading size={'1'}>TechBoard</Heading>
      <p>
        このサイトはエンジニアによるエンジニアのためのコミュニティサイトです。
        <br />
        記事投稿機能や掲示板機能があります。
      </p>
      <_Container>
        <_Contents>
          <Heading size={'4'}>最新の記事一覧</Heading>
          <Link to="/article/" className="btnLink">
            <Button label={'全て見る'} color={'teal'} />
          </Link>
        </_Contents>

        <_Contents>
          <Heading size={'4'}>最新の掲示板一覧</Heading>
          <ul className="list">
            {threads.map((thread) => (
              <BoardCard key={thread.threadId} data={thread} />
            ))}
          </ul>
          <Link to="/board/" className="btnLink">
            <Button label={'全て見る'} color={'teal'} />
          </Link>
        </_Contents>
      </_Container>
    </>
  );
});

const _Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
`;

const _Contents = styled.div`
  width: calc(100% / 2 - 20px);
  .btnLink {
    display: block;
    margin-top: 30px;
    text-align: center;
  }
`;
