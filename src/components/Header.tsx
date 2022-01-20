import { VFC, memo } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { palette } from '../variable';
import { LoginUserType } from '../providers/LoginUserProvider';

type props = {
  loginUser: LoginUserType;
};

export const Header: VFC<props> = memo((props) => {
  const { loginUser } = props;

  return (
    <_Header>
      <_Inner>
        <Link to="/">
          <_Title>TechBoard</_Title>
        </Link>
        {loginUser.userId ? (
          <div>{loginUser.nickname}</div>
        ) : (
          <div>
            <Link to="/login" style={{ color: '#171717' }}>
              ログイン
            </Link>
            <Link to="/signup" style={{ color: '#171717', marginLeft: '20px' }}>
              会員登録
            </Link>
          </div>
        )}
      </_Inner>
    </_Header>
  );
});

const _Header = styled.header`
  width: 100%;
  height: 80px;
  padding: 20px;
  background: ${palette.green};
`;

const _Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
`;

const _Title = styled.h1`
  font-size: 28px;
  color: ${palette.black};
`;
