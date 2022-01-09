import { VFC, memo } from 'react';
import styled from 'styled-components';

type props = {
  text: string;
  size?: string;
  isCenter?: boolean;
};

export const Heading: VFC<props> = memo((props) => {
  const { text, size, isCenter } = props;

  return (
    <_Heading className={`${size && `heading--${size}`} ${isCenter && 'center'}`}>{text}</_Heading>
  );
});

Heading.defaultProps = {
  size: '1',
};

const _Heading = styled.div`
  margin-bottom: 1em;
  font-weight: bold;
  &.center {
    text-align: center;
  }
  &.heading--1 {
    font-size: 36px;
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
