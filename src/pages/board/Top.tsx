import { VFC, memo, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { BoardCard } from '../../components/board/Card';
import { BoardSideBar } from '../../components/board/SideBar';
import { Heading } from '../../components/common/Heading';
import { Pagination } from '../../components/common/Pagination';
import { Contents } from '../../components/Contents';
import { useBoard } from '../../hooks/useBoard';
import { palette, perPage } from '../../variable';

export const BoardTop: VFC = memo(() => {
  const { threadList, threadLength, categories, getThreadList, getCategories } = useBoard();
  const { page } = useParams<{ page: string }>();

  useEffect(() => {
    getCategories();
    getThreadList(page, `${perPage}`);
  }, [page]);

  return (
    <>
      <BoardSideBar isVisible={'top'} />
      <Contents>
        <Heading size={'2'}>掲示板TOP</Heading>
        <section>
          <Heading size={'4'}>カテゴリー一覧</Heading>
          <_CategoryList>
            {categories.map((category) => (
              <Link to={`/board/category/${category.categoryId}/page=1`} key={category.categoryId}>
                {category.categoryName}
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
                category={categories.find((v) => v.categoryId === thread.categoryId)?.categoryName}
              />
            ))}
          </ul>
        </section>
        <Pagination path={'/board'} page={page} length={threadLength} />
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
