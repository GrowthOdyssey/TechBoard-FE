import { VFC, memo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { BoardCard } from '../../components/board/Card';
import { BoardSideBar } from '../../components/board/SideBar';
import { Heading } from '../../components/common/Heading';
import { Contents } from '../../components/Contents';
import { useBoard } from '../../hooks/useBoard';
import { palette } from '../../variable';

export const BoardTop: VFC = memo(() => {
  const { threadList, categories, getThreadList, getCategories } = useBoard();

  useEffect(() => {
    getCategories();
    getThreadList('1', '20');
  }, []);

  return (
    <>
      <BoardSideBar isVisible={'top'} />
      <Contents>
        <Heading size={'2'}>掲示板TOP</Heading>
        <section>
          <Heading size={'4'}>カテゴリー一覧</Heading>
          <_CategoryList>
            {categories.map((category) => (
              <Link to={`/board/category/${category.id}/`} key={category.id}>
                {category.name}
              </Link>
            ))}
          </_CategoryList>
        </section>
        <section style={{ marginTop: '40px' }}>
          <Heading size={'4'}>最新のスレッド一覧</Heading>
          <ul className="list">
            {threadList.map((thread) => (
              <BoardCard
                key={thread.threadId}
                data={thread}
                category={categories.find((v) => v.id === thread.categoryId)?.name}
              />
            ))}
          </ul>
        </section>
      </Contents>
    </>
  );
});

const _CategoryList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  > a {
    display: inline-block;
    padding: 4px 8px;
    background: #fff;
    border: solid 1px ${palette.border};
    border-radius: 6px;
  }
`;
