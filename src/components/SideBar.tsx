import { VFC, memo, ReactNode } from 'react';
import styled from 'styled-components';

type props = {
  children: ReactNode;
};

export const SideBar: VFC<props> = memo((props) => {
  const { children } = props;

  return <_SideBar>{children}</_SideBar>;
});

const _SideBar = styled.div`
  align-self: flex-start;
  width: 150px;
  min-height: 200px;
  padding: 10px;
  background: #fff;
  > a {
    display: block;
    &:not(:first-of-type) {
      margin-top: 10px;
    }
  }
`;
