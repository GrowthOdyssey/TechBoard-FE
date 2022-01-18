import { VFC, memo, ReactNode } from 'react';
import styled from 'styled-components';
import { palette } from '../variable';

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
    &.is-active {
      color: ${palette.orange};
      font-weight: bold;
      pointer-events: none;
    }
    &:not(:first-of-type) {
      margin-top: 5px;
    }
  }
`;
