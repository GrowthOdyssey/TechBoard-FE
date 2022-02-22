import { VFC, memo, useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { MarkDownEditor } from '../../components/article/MarkDownEditor';
import { ArticleSideBar } from '../../components/article/SideBar';
import { AvatarIcon } from '../../components/common/AvatarIcon';
import { Button } from '../../components/common/Button';
import { DateText } from '../../components/common/DateText';
import { Heading } from '../../components/common/Heading';
import { Contents } from '../../components/Contents';
import { useArticle } from '../../hooks/useArticle';
import { useLoginUser } from '../../providers/LoginUserProvider';
import { palette } from '../../variable';

export const ArticleDetail: VFC = memo(() => {
  const { id } = useParams<{ id: string }>();
  const { article, getArticle } = useArticle();
  const { loginUser } = useLoginUser();

  useEffect(() => {
    getArticle(id);
  }, [id]);

  return (
    <>
      <ArticleSideBar />
      <Contents>
        <Heading size={'1'}>{article.articleTitle}</Heading>
        <_Author>
          <p className="user">
            <AvatarIcon avatarId={article.avatarId} alt="" width="36px" />
            <span className="name">{article.userName}</span>
          </p>
          <span className="date">
            <span className="label">投稿日</span>
            <DateText>{article.createdAt}</DateText>
            <span className="label">更新日</span>
            <DateText>{article.updatedAt}</DateText>
          </span>
        </_Author>
        <_Content>
          <MarkDownEditor isEdit={false} value={article.contents} />
        </_Content>
        {loginUser.userId == article.articleId && (
          <_Buttons>
            <Link to={`/article/edit/${id}`}>
              <Button label={'編集'} />
            </Link>
          </_Buttons>
        )}
      </Contents>
    </>
  );
});

const _Buttons = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`;
const _Author = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  margin-bottom: 0.5em;
  > .user {
    display: flex;
    align-items: center;
    font-weight: bold;
    > .name {
      margin-left: 8px;
    }
  }
  > .date {
    color: ${palette.gray[1]};
    font-size: 14px;
    > .label {
      margin: 0 8px 0 16px;
    }
  }
`;

const _Content = styled.div`
  padding: 20px;
  background: #fff;
`;
