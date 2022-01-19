import { VFC, memo } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BoardCard } from '../components/board/Card';
import { Heading } from '../components/common/Heading';
import { Button } from '../components/common/Button';
import { ArticleCard } from '../components/article/Card';
import { threads } from '../mock/boardData';
import { articles } from '../mock/articleData';

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
          <ul className="list">
            {articles.map((article) => (
              <ArticleCard key={article.articleId} data={article} />
            ))}
          </ul>
          <Link to="/article/" className="btnLink">
            <Button label={'全て見る'} color={'teal'} />
          </Link>
        </_Contents>

        <_Contents>
          <Heading size={'4'}>最新のスレッド一覧</Heading>
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
