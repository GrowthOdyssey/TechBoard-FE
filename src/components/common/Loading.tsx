import { VFC, memo } from 'react';
import styled from 'styled-components';
import { palette } from '../../variable';
import { Contents } from '../Contents';

export const Loading: VFC = memo(() => {
  return (
    <Contents>
      <_LoadingWrapper>
        <_LoadingIcon />
      </_LoadingWrapper>
    </Contents>
  );
});

const _LoadingWrapper = styled.div`
  text-align: center;
`;

const _LoadingIcon = styled.div`
  display: inline-block;
  width: 26px;
  height: 26px;
  margin: 2px;
  border: 2px solid ${palette.blue};
  border-bottom-color: transparent;
  border-radius: 100%;
  animation: rotate 0.75s 0s linear infinite;
  @keyframes rotate {
    0% {
      transform: rotate(0) scale(1);
    }
    50% {
      transform: rotate(180deg) scale(0.6);
    }
    100% {
      transform: rotate(360deg) scale(1);
    }
  }
`;
