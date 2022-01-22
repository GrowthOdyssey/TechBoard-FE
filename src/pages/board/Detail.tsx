/* eslint-disable @typescript-eslint/no-non-null-assertion */

import { VFC, memo, useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { BoardComment } from '../../components/board/Comment';
import { BoardSideBar } from '../../components/board/SideBar';
import { Heading } from '../../components/common/Heading';
import { Contents } from '../../components/Contents';
import { threads } from '../../mock/boardData';
import { threadType } from '../../types/board/thread';

export const BoardDetail: VFC = memo(() => {
  const { id } = useParams<{id: string}>();
  const [ thread, setThread ] = useState<threadType>({
    threadId: '',
    threadTitle: '',
    categoryId: '',
    commentsCount: 0,
    comments: [
      {
        commentId: '',
        commentTitle: '',
        userId: '',
        userName: '',
        sessionId: '',
        createdAt: '',
      }
    ],
    createdAt: '',
    updatedAt: '',
  });

  useEffect(() => setThread(threads.find(v => v.threadId === id)!), [id])

  return (
    <>
      <BoardSideBar />
      <Contents>
        <Heading size={'2'}>{thread.threadTitle}</Heading>
        <ul>
          {thread.comments.map((comment) => (
            <BoardComment key={comment.commentId} data={comment} />
          ))}
        </ul>
      </Contents>
    </>
  );
});
