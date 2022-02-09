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
  width: 450px;
  margin: 0 auto;
  background: #fff;
  border-radius: 6px;
  box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
`;

const _Inner = styled.div`
  width: 300px;
  margin: 0 auto;
  padding: 40px 0px;
  .heading--2 {
    padding-bottom: 10px;
    border-bottom: 2px solid #164a84;
  }
  .textInput:not(:first-child) {
    margin-top: 20px;
  }
  button {
    margin-top: 50px;
  }
  .link {
    display: block;
    margin-top: 20px;
    color: ${palette.blue};
    font-size: 14px;
    text-align: right;
  }
`;
