import { VFC, memo } from 'react';
import { Link } from 'react-router-dom';

export const Login: VFC = memo((props) => {
  return (
    <>
      <h1>Login</h1>
      <Link to='/signup'>新規登録</Link>
    </>
  );
});