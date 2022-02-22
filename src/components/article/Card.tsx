import { memo, VFC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useLoginUser } from '../../providers/LoginUserProvider';
import { articleType } from '../../types/article/articleType';
import { palette } from '../../variable';
import { AvatarIcon } from '../common/AvatarIcon';
import { DateText } from '../common/DateText';

type props = {
  data: articleType;
};

export const ArticleCard: VFC<props> = memo((props) => {
  const { articleId, articleTitle, userId, userName, createdAt } = props.data;
  const { loginUser } = useLoginUser();
  return (
    <_Card>
      <Link to={`/article/detail/${articleId}`}>
        <div>
          <AvatarIcon avatarId="001" alt="" width="20px" />
          <_UserName>{userName}</_UserName>が<DateText>{createdAt}</DateText>
          に投稿
        </div>
        <_Title>{articleTitle}</_Title>
      </Link>
      {userId === loginUser.userId && (
        <div className="buttons">
          <Link to={`/article/edit/${articleId}`}>編集</Link>
        </div>
      )}
    </_Card>
  );
});

const _Card = styled.li`
  position: relative;
  padding: 10px 20px;
  background: #fff;
  border: 1px solid ${palette.border};
  border-radius: 4px;
  > .buttons {
    position: absolute;
    right: 8px;
    bottom: 8px;
    display: flex;
    justify-content: flex-end;
    > a {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 30px;
      height: 30px;
      margin-left: 4px;
      border: 1px solid ${palette.border};
      border-radius: 50%;
      font-size: 12px;
    }
  }
`;

const _UserName = styled.span`
  margin-left: 4px;
`;

const _Title = styled.h2`
  margin: 4px auto;
`;
