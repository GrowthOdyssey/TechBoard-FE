import { VFC, memo, ReactNode } from 'react';
import styled from 'styled-components';

type props = {
  children: ReactNode;
  size?: string;
  isCenter?: boolean;
};

export const Heading: VFC<props> = memo((props) => {
  const { children, size, isCenter } = props;

  return <_Heading className={`${size && `heading--${size}`} ${isCenter ? 'center' : ''}`}>{children}</_Heading>;
});

Heading.defaultProps = {
  size: '1',
};

const _Heading = styled.div`
  margin-bottom: 0.5em;
  font-weight: bold;
  &.center {
    text-align: center;
  }
  &.heading--1 {
    font-size: 32px;
  }
  &.heading--2 {
    font-size: 28px;
  }
  &.heading--3 {
    font-size: 24px;
  }
  &.heading--4 {
    font-size: 18px;
  }
`;
