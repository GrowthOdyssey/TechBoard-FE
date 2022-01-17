import { VFC, memo, ReactNode } from 'react';
import styled from 'styled-components';
import { Footer } from './Footer';
import { Header } from './Header';

type props = {
  children: ReactNode;
  isSideBar?: boolean;
};

export const Layout: VFC<props> = memo((props) => {
  const { children, isSideBar } = props;

  return (
    <>
      <Header />
      <_Container>
        <_MainContent className={isSideBar ? 'isSideBar' : ''}>{children}</_MainContent>
      </_Container>
      <Footer />
    </>
  );
});

const _Container = styled.div`
  width: 1040px;
  margin: 30px auto 40px;
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
