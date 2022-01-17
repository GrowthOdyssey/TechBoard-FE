import { VFC, memo, ReactNode } from 'react';
import styled from 'styled-components';
import { Footer } from './Footer';
import { Header } from './Header';

type props = {
  children: ReactNode;
};

export const Layout: VFC<props> = memo((props) => {
  const { children } = props;
  return (
    <>
      <Header />
      <_Container>
        <_MainContent>{children}</_MainContent>
      </_Container>
      <Footer />
    </>
  );
});

const _Container = styled.div`
  width: 1200px;
  margin: 30px auto 40px;
  padding: 0 20px;
`;

const _MainContent = styled.main`
  position: relative;
  width: 100%;
`;
