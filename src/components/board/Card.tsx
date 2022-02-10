import { VFC, memo } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { threadType } from '../../types/board/thread';
import { palette } from '../../variable';
import { DateText } from '../common/DateText';

type props = {
  data: threadType;
  category?: string;
};

export const BoardCard: VFC<props> = memo((props) => {
  const { threadId, threadTitle, commentsCount, comments, updatedAt } = props.data;
  const { category } = props;

  return (
    <_Card>
      <Link to={`/board/detail/${threadId}/`}>
        {category && <_Category>{category}</_Category>}
        <_Title>
          {threadTitle}（{commentsCount}）
        </_Title>
        <_Comment>{comments[0].commentTitle}</_Comment>
        <_Date>
          <DateText time={true}>{updatedAt}</DateText>
        </_Date>
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

const _Title = styled.p`
  margin-bottom: 5px;
`;

const _Comment = styled.p`
  display: -webkit-box;
  color: #333;
  font-size: 14px;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow-y: hidden;
`;

const _Category = styled.span`
  font-size: 14px;
  font-weight: bold;
  color: ${palette.green};
`;

const _Date = styled.p`
  margin-top: 10px;
  font-size: 12px;
  text-align: right;
`;
