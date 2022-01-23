import { VFC, memo } from 'react';
import styled from 'styled-components';
import { commentType } from '../../types/board/comment';
import { palette } from '../../variable';
import { DateText } from '../common/DateText';

type props = {
  data: commentType;
};

export const BoardComment: VFC<props> = memo((props) => {
  const { commentId, commentTitle, userId, userName, createdAt } = props.data;

  return (
    <_Comment>
      <_CommentHead>
        <_CommentId>{commentId}.</_CommentId>
        <_CommentUserName>{userName}</_CommentUserName>
        <DateText>{createdAt}</DateText>
        <_CommentUserId>ID:{userId}</_CommentUserId>
      </_CommentHead>
      <_CommentContents>{commentTitle}</_CommentContents>
    </_Comment>
  );
});

const _Comment = styled.li`
  padding: 10px 20px;
  background: #fff;
  + li {
    border-top: 1px solid ${palette.border};
  }
`;

const _CommentHead = styled.div`
  font-size: 14px;
`;

const _CommentId = styled.span`
  margin-right: 5px;
`;

const _CommentUserName = styled.span`
  color: #0000cd;
  margin-right: 10px;
`;

const _CommentUserId = styled.span`
  margin-left: 10px;
`;

const _CommentContents = styled.div`
  margin-top: 5px;
`;