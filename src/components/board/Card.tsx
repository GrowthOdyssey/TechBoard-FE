import { VFC, memo } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { thread } from '../../types/board/thread';
import { palette } from '../../variable';
import { DateText } from '../common/DateText';

type props = {
  data: thread;
};

export const BoardCard: VFC<props> = memo((props) => {
  const { threadId, threadTitle, commentsCount, updatedAt } = props.data;
  return (
    <_Card>
      <Link to={`/board/detail/${threadId}`}>
        <p>{threadTitle}</p>
        <p>コメント数：{commentsCount}</p>
        <p>
          最新更新日：<DateText>{updatedAt}</DateText>
        </p>
      </Link>
    </_Card>
  );
});

const _Card = styled.li`
  background: #fff;
  border: 1px solid ${palette.border};
  border-radius: 4px;
  > a {
    display: block;
    padding: 10px 20px;
  }
`;
