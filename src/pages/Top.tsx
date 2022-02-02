import { VFC, memo, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BoardCard } from '../components/board/Card';
import { Heading } from '../components/common/Heading';
import { Button } from '../components/common/Button';
import { ArticleCard } from '../components/article/Card';
import { articles } from '../mock/articleData';
import { palette } from '../variable';
import { useBoard } from '../hooks/useBoard';

export const Top: VFC = memo(() => {
  const { threadList, getThreadList } = useBoard();

  useEffect(() => {
    getThreadList('1', '5');
  }, []);

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
          <Heading size={'2'} isCenter={true}>
            Article
          </Heading>
          <_Description>
            <Heading size={'4'} isCenter={true}>
              エンジニアに関する知識を
              <br />
              記録・共有するためのサービスです。
            </Heading>
            <p>
              コードを書いていて気づいたことや、自分がハマったあの仕様について、他のエンジニアと知見を共有しましょう。
              <br />
              記事の投稿をするにはログインが必要になります。
            </p>
          </_Description>
          <_LinkWrapper>
            <Link to="/article/">
              <Button label={'ENTER'} color={'teal'} />
            </Link>
          </_LinkWrapper>
          <Heading size={'4'}>最新の記事一覧</Heading>
          <ul className="list">
            {articles.map((article) => (
              <ArticleCard key={article.articleId} data={article} />
            ))}
          </ul>
        </_Contents>

        <_Contents>
          <Heading size={'2'} isCenter={true}>
            Board
          </Heading>
          <_Description>
            <Heading size={'4'} isCenter={true}>
              他のエンジニアと
              <br />
              雑談・相談・質問するためのサービスです。
            </Heading>
            <p>
              自分が分からないところ、意見を求めたいこと、とにかく話したい人など、自由に他のエンジニアとコミュニケーションを取りましょう。
              <br />
              スレッドを新規作成するにはログインが必要になります。
            </p>
          </_Description>
          <_LinkWrapper>
            <Link to="/board/">
              <Button label={'ENTER'} color={'teal'} />
            </Link>
          </_LinkWrapper>
          <Heading size={'4'}>最新のスレッド一覧</Heading>
          <ul className="list">
            {threadList.map((thread) => (
              <BoardCard key={thread.threadId} data={thread} />
            ))}
          </ul>
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
  padding: 20px;
  background: #e9f7ff;
  border: 2px solid ${palette.teal};
  border-radius: 6px;
`;

const _Description = styled.div`
  padding-top: 10px;
  border-top: 1px solid ${palette.border};
  > p {
    font-size: 14px;
  }
`;

const _LinkWrapper = styled.div`
  margin-top: 30px;
  margin-bottom: 40px;
  text-align: center;
`;
