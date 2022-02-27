import { VFC, memo, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { BoardCard } from '../../components/board/Card';
import { BoardSideBar } from '../../components/board/SideBar';
import { Heading } from '../../components/common/Heading';
import { Loading } from '../../components/common/Loading';
import { Pagination } from '../../components/common/Pagination';
import { Contents } from '../../components/Contents';
import { useBoard } from '../../hooks/useBoard';
import { perPage } from '../../variable';

export const BoardCategory: VFC = memo(() => {
  const { threadList, threadLength, categories, loading, getThreadList, getCategories, setLoading } = useBoard();
  const { categoryName, page } = useParams<{ categoryName: string; page: string }>();

  useEffect(() => {
    setLoading(true);
    getCategories();
  }, [page, categoryName]);

  useEffect(() => {
    if (categories.length) getThreadList(page, `${perPage}`, getCategoryId(categoryName));
  }, [categories]);

  const getCategoryId = (name: string) => {
    const target = categories.find((v) => v.categoryName === name);
    if (!target) return;

    return target.categoryId;
  };

  return (
    <>
      <BoardSideBar />
      {loading ? (
        <Loading />
      ) : (
        <Contents>
          <Heading size={'2'}>{categoryName}のスレッド一覧</Heading>
          <section>
            {threadList.length ? (
              <ul className="list">
                {threadList.map((thread) => (
                  <BoardCard key={thread.threadId} data={thread} />
                ))}
              </ul>
            ) : (
              <p>スレッドがまだ作成されていません</p>
            )}
          </section>
          {threadLength ? <Pagination path={`/board/${categoryName}`} page={page} length={threadLength} /> : ''}
        </Contents>
      )}
    </>
  );
});
