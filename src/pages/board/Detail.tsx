import { VFC, memo, useState, ChangeEvent } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router';
import { BoardComment } from '../../components/board/Comment';
import { BoardSideBar } from '../../components/board/SideBar';
import { Heading } from '../../components/common/Heading';
import { Contents } from '../../components/Contents';
import { Textarea } from '../../components/common/Textarea';
import { Button } from '../../components/common/Button';
import { useLoginUser } from '../../providers/LoginUserProvider';
import { palette } from '../../variable';
import { useBoard } from '../../hooks/useBoard';
import { Loading } from '../../components/common/Loading';
import { ErrorText } from '../../components/common/ErrorText';

export const BoardDetail: VFC = memo(() => {
  const { loginUser } = useLoginUser();
  const { id } = useParams<{ id: string }>();
  const [comment, setComment] = useState('');
  const { thread, errorText, loading, useFetchThread, createComment } = useBoard();

  useFetchThread(id);

  const getUserName = () => (loginUser.userName ? loginUser.userName : '名無しさん');

  const onchangeSetComment = (e: ChangeEvent<HTMLTextAreaElement>) => setComment(e.target.value);

  const submitComment = () => {
    createComment(id, comment, loginUser.userId);
    setComment('');
  };

  return (
    <>
      <BoardSideBar />
      {loading ? (
        <Loading />
      ) : (
        <Contents>
          <Heading size={'2'}>{thread.threadTitle}</Heading>
          {thread.comments.length >= 1000 && (
            <_CautionText>コメント数が1000を超えています。これ以上書き込みはできません。</_CautionText>
          )}
          <_CommentList>
            {thread.comments.length
              ? thread.comments.map((comment) => <BoardComment key={comment.commentId} data={comment} />)
              : 'まだコメントが投稿されていません。'}
          </_CommentList>
          {thread.comments.length >= 1000 && (
            <_CautionText>コメント数が1000を超えています。これ以上書き込みはできません。</_CautionText>
          )}
          {errorText.length ? <ErrorText errors={errorText} /> : ''}
          <_CommentForm className={thread.comments.length >= 1000 ? 'isdisabled' : ''}>
            <Heading size={'4'}>コメントを投稿する</Heading>
            <_CommentUserName>
              <span>ニックネーム</span>
              <input type="text" value={getUserName()} disabled />
            </_CommentUserName>
            <Textarea
              value={comment}
              placeholder={'コメントを入力してください'}
              rows={5}
              onChange={onchangeSetComment}
            />
            <_CommentSubmit>
              <Button
                label={'コメントを投稿'}
                onclick={submitComment}
                isDisabled={comment.length === 0 ? true : false}
              />
            </_CommentSubmit>
          </_CommentForm>
        </Contents>
      )}
    </>
  );
});

const _CommentList = styled.ul`
  counter-reset: num;
`;

const _CommentForm = styled.div`
  margin-top: 40px;
  padding: 20px 30px 30px;
  background: #fff;
  &.isdisabled {
    opacity: 0.7;
    pointer-events: none;
  }
`;

const _CommentUserName = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  color: ${palette.gray[1]};
  > span {
    margin-right: 20px;
    font-size: 14px;
  }
  > input {
    min-width: 250px;
    padding: 10px;
    border: 1px solid ${palette.border};
    color: ${palette.gray[1]};
  }
`;

const _CommentSubmit = styled.div`
  margin-top: 20px;
  text-align: center;
`;

const _CautionText = styled.p`
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 10px 20px;
  color: #f5f5f5;
  background: ${palette.blue};
`;
