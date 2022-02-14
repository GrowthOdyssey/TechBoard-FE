import { VFC, memo, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { BoardCard } from '../../components/board/Card';
import { BoardSideBar } from '../../components/board/SideBar';
import { Heading } from '../../components/common/Heading';
import { Contents } from '../../components/Contents';
import { useBoard } from '../../hooks/useBoard';

export const BoardCategory: VFC = memo(() => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const { threadList, categories, getThreadList, getCategories } = useBoard();

  useEffect(() => {
    getCategories();
    getThreadList('1', '20', categoryId);
  }, []);

  const getCategoryName = (id: string) => {
    const target = categories.find((v) => v.categoryId === id);
    if (!target) return;

    return target.categoryName;
  };

  return (
    <>
      <BoardSideBar />
      <Contents>
        <Heading size={'2'}>{getCategoryName(categoryId)}のスレッド一覧</Heading>
        <section>
          <ul className="list">
            {threadList.map((thread) => (
              <BoardCard key={thread.threadId} data={thread} />
            ))}
          </ul>
        </section>
      </Contents>
    </>
  );
});
