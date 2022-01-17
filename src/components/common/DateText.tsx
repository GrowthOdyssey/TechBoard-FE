import { VFC, memo, ReactNode } from 'react';
import styled from 'styled-components';
import { palette } from '../../variable';

type props = {
  children: ReactNode;
};

export const DateText: VFC<props> = memo((props) => {
  const { children } = props;
  return <_DateText>{children}</_DateText>;
});

const _DateText = styled.span`
  display: inline-block;
  color: ${palette.gray[1]};
`;
