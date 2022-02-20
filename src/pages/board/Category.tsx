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
  const { threadList, threadLength, categories, loading, getThreadList, getCategories } = useBoard();
  const { categoryId, page } = useParams<{ categoryId: string; page: string }>();

  useEffect(() => {
    getCategories();
    getThreadList(page, `${perPage}`, categoryId);
  }, [page, categoryId]);

  const getCategoryName = (id: string) => {
    const target = categories.find((v) => v.categoryId === id);
    if (!target) return;

    return target.categoryName;
  };

  return (
    <>
      <BoardSideBar />
      {loading ? (
        <Loading />
      ) : (
        <Contents>
          <Heading size={'2'}>{getCategoryName(categoryId)}のスレッド一覧</Heading>
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
          {threadLength ? <Pagination path={`/board/category/${categoryId}`} page={page} length={threadLength} /> : ''}
        </Contents>
      )}
    </>
  );
});
