import { VFC, memo } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { BoardCard } from '../../components/board/Card';
import { BoardSideBar } from '../../components/board/SideBar';
import { Heading } from '../../components/common/Heading';
import { Contents } from '../../components/Contents';
import { threads, categories } from '../../mock/boardData';

export const BoardTop: VFC = memo(() => {
  return (
    <>
      <BoardSideBar isVisible={'top'} />
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
              <Link to={`/board/category/${category.id}/`} key={category.id}>
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
