import { memo, VFC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { articleType } from '../../types/article/articleType';
import { palette } from '../../variable';
import { AvatarIcon } from '../common/AvatarIcon';
import { DateText } from '../common/DateText';

type props = {
  data: articleType;
};

export const ArticleCard: VFC<props> = memo((props) => {
  const { articleId, articleTitle, userName, createdAt } = props.data;
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

const _UserName = styled.span`
  margin-left: 4px;
`;

const _Title = styled.h2`
  margin: 4px auto;
`;
