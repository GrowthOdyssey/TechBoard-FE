import { VFC, memo } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { palette } from '../variable';

export const Footer: VFC = memo(() => {
  return (
    <_Footer>
      <_Inner>
        <_Links>
          <Link to="/board">Board</Link>
          <span>|</span>
          <Link to="/article">Article</Link>
        </_Links>
        <_Copyright>&copy; 2022 Growth Odyssey. All Rights Resarved.</_Copyright>
      </_Inner>
    </_Footer>
  );
});

const _Footer = styled.footer`
  margin-top: auto;
  color: #fff;
  background: ${palette.black};
`;

const _Inner = styled.div`
  padding: 20px 0 10px;
  text-align: center;
`;

const _Links = styled.div`
  display: flex;
  justify-content: center;
  > span {
    display: inline-block;
    margin: 0 10px;
  }
  > a {
    color: #fff;
  }
`;

const _Copyright = styled.div`
  margin-top: 10px;
  font-size: 12px;
  font-weight: bold;
`;
