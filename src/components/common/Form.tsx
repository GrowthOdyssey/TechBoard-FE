import { VFC, memo, ReactNode } from 'react';
import styled from 'styled-components';
import { palette } from '../../variable';

type props = {
  children: ReactNode;
};

export const Form: VFC<props> = memo((props) => {
  const { children } = props;

  return (
    <_Form>
      <_Inner>{children}</_Inner>
    </_Form>
  );
});

const _Form = styled.div`
  width: 500px;
  margin: 0 auto;
  background: #fff;
  border: 1px solid ${palette.gray[1]};
  border-radius: 6px;
`;

const _Inner = styled.div`
  width: 300px;
  margin: 0 auto;
  padding: 40px 0px;
  .textInput:not(:first-child) {
    margin-top: 20px;
  }
  button {
    margin-top: 50px;
  }
  .link {
    display: block;
    margin-top: 20px;
    font-size: 14px;
    text-align: right;
  }
`;
