import { VFC, memo } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { variable } from '../variable';

export const Header: VFC = memo(() => {
  return (
    <_Header>
      <_Inner>
        <Link to='/'>
          <_Title>TechBoard</_Title>
        </Link>
        <div>
          <Link to='/login' style={{color: '#171717'}}>ログイン</Link>
        </div>
      </_Inner>
    </_Header>
  );
});

const _Header = styled.header`
  width: 100%;
  height: 80px;
  padding: 20px;
  background: ${variable.green};
`

const _Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const _Title = styled.h1`
  font-size: 28px;
  color: ${variable.black};
`