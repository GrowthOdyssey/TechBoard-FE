/* eslint-disable @typescript-eslint/no-non-null-assertion */

import { VFC, memo } from 'react';
import { useParams } from 'react-router-dom';
import { BoardCard } from '../../components/board/Card';
import { BoardSideBar } from '../../components/board/SideBar';
import { Heading } from '../../components/common/Heading';
import { Contents } from '../../components/Contents';
import { threads, categories } from '../../mock/boardData';

export const BoardCategory: VFC = memo(() => {
  const { categoryId } = useParams<{ categoryId: string }>();

  const getCategoryName = (id: string) => categories.find((v) => v.id === id)!.name;

  return (
    <>
      <BoardSideBar />
      <Contents>
        <Heading size={'2'}>{getCategoryName(categoryId)}のスレッド一覧</Heading>
        <section>
          <ul className="list">
            {threads.map((thread) => (
              <BoardCard key={thread.threadId} data={thread} />
            ))}
          </ul>
        </section>
      </Contents>
    </>
  );
});
