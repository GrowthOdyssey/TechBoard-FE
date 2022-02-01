import { VFC, memo } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { BoardCard } from '../../components/board/Card';
import { BoardSideBar } from '../../components/board/SideBar';
import { Heading } from '../../components/common/Heading';
import { Contents } from '../../components/Contents';
import { m_threads, m_categories } from '../../mock/boardData';

export const BoardCategory: VFC = memo(() => {
  const history = useHistory();
  const { categoryId } = useParams<{ categoryId: string }>();

  const getCategoryName = (id: string) => {
    const target = m_categories.find((v) => v.id === id);
    if (!target) return history.push('/404');

    return target.name;
  };

  return (
    <>
      <BoardSideBar />
      <Contents>
        <Heading size={'2'}>{getCategoryName(categoryId)}のスレッド一覧</Heading>
        <section>
          <ul className="list">
            {m_threads.map((thread) => (
              <BoardCard key={thread.threadId} data={thread} />
            ))}
          </ul>
        </section>
      </Contents>
    </>
  );
});
