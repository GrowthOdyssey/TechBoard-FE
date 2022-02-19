import { VFC, memo } from 'react';
import styled from 'styled-components';
import { commentType } from '../../types/board/comment';
import { palette } from '../../variable';
import { DateText } from '../common/DateText';

type props = {
  data: commentType;
};

export const BoardComment: VFC<props> = memo((props) => {
  const { commentTitle, userName, sessionId, createdAt } = props.data;

  return (
    <_Comment>
      <_CommentHead>
        <_CommentId />
        <_CommentUserName>{userName ? userName : '名無しさん'}</_CommentUserName>
        <DateText time={true}>{createdAt}</DateText>
        <_CommentUserId>ID:{sessionId}</_CommentUserId>
      </_CommentHead>
      <_CommentContents>{commentTitle}</_CommentContents>
    </_Comment>
  );
});

const _Comment = styled.li`
  padding: 10px 20px 20px;
  background: #fff;
  counter-increment: num;
  + li {
    border-top: 1px solid ${palette.border};
  }
`;

const _CommentHead = styled.div`
  font-size: 14px;
`;

const _CommentId = styled.span`
  &::before {
    content: counter(num) '.';
  }
`;

const _CommentUserName = styled.span`
  color: #0000cd;
  margin-left: 5px;
  margin-right: 10px;
`;

const _CommentUserId = styled.span`
  margin-left: 10px;
`;

const _CommentContents = styled.div`
  margin-top: 10px;
  font-size: 14px;
  white-space: pre-line;
`;
