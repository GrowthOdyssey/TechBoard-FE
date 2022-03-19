import { VFC, memo } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { imagePath, palette } from '../variable';
import { LoginUserType } from '../providers/LoginUserProvider';
import { ImageIcon } from './common/ImageIcon';
import { AvatarIcon } from './common/AvatarIcon';
import { useUser } from '../hooks/useUser';

type props = {
  loginUser: LoginUserType;
};

export const Header: VFC<props> = memo((props) => {
  const { loginUser } = props;
  const { logout } = useUser();

  return (
    <_Header>
      <_Inner>
        <Link to="/">
          <_Logo src={`${imagePath}logo.png`} />
        </Link>
        {loginUser.userId ? (
          <_Profile>
            <AvatarIcon avatarId={loginUser.avatarId} alt={loginUser.userName} width={'50px'} />
            <span>{loginUser.userName}</span>
            <_LogoutBtn onClick={() => logout(loginUser.accessToken)}>
              <ImageIcon src={'ico_logout.svg'} alt={'ログアウト'} width={'25px'} />
            </_LogoutBtn>
          </_Profile>
        ) : (
          <_Menu>
            <Link to="/login">
              <ImageIcon src={'ico_login.svg'} alt={'ログイン'} width={'20px'} />
              <span>ログイン</span>
            </Link>
            <Link to="/signup">
              <ImageIcon src={'ico_signup.svg'} alt={'会員登録'} width={'20px'} />
              <span>会員登録</span>
            </Link>
          </_Menu>
        )}
      </_Inner>
    </_Header>
  );
});

const _Header = styled.header`
  width: 100%;
  padding: 15px 20px;
  background: #48bb78;
`;

const _Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
`;

const _Logo = styled.img`
  width: 180px;
  vertical-align: top;
`;

const _Profile = styled.div`
  display: flex;
  align-items: center;
  span {
    margin-left: 10px;
  }
`;

const _Menu = styled.div`
  > a {
    display: inline-block;
    padding: 8px 20px;
    font-size: 14px;
    background: #fff;
    border: 1px solid ${palette.gray[1]};
    border-radius: 22px;
    + a {
      margin-left: 20px;
    }
    span {
      margin-left: 10px;
    }
  }
`;

const _LogoutBtn = styled.button`
  margin-left: 20px;
`;
