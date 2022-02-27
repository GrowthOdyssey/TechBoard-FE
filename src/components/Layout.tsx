import { VFC, memo, ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { useLoginUser } from '../providers/LoginUserProvider';
import { useToast } from '../providers/ToastProvider';
import { Breadcrumb } from './Breadcrumb';
import { Footer } from './Footer';
import { Header } from './Header';
import { Toast } from './Toast';

type props = {
  children: ReactNode;
  isSideBar?: boolean;
};

export const Layout: VFC<props> = memo((props) => {
  const { children, isSideBar } = props;
  const { loginUser } = useLoginUser();
  const { toast } = useToast();
  const { pathname } = useLocation();

  return (
    <>
      {toast.text && <Toast />}
      <Header loginUser={loginUser} />
      <_Container>
        {pathname !== '/' && <Breadcrumb />}
        <_MainContent className={isSideBar ? 'isSideBar' : ''}>{children}</_MainContent>
      </_Container>
      <Footer />
    </>
  );
});

const _Container = styled.div`
  max-width: 1040px;
  margin: 20px auto 40px;
  padding: 0 20px;
`;

const _MainContent = styled.main`
  position: relative;
  width: 100%;
  &.isSideBar {
    display: flex;
    justify-content: space-between;
    .contents {
      width: 800px;
    }
  }
`;
