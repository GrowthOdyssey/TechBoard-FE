import { VFC, memo, ReactNode } from 'react';
import styled from 'styled-components';

type props = {
  children: ReactNode;
};

export const Contents: VFC<props> = memo((props) => {
  const { children } = props;

  return <_Contents className="contents">{children}</_Contents>;
});

const _Contents = styled.div`
  padding: 0 30px 30px;
`;
