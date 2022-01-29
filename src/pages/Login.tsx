import { VFC, memo, useState, ChangeEvent } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/common/Button';
import { Form } from '../components/common/Form';
import { TextInput } from '../components/common/TextInput';
import { useUser } from '../hooks/useUser';

export const Login: VFC = memo(() => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useUser();

  const onchangeUserId = (e: ChangeEvent<HTMLInputElement>) => setUserId(e.target.value);
  const onchangePassword = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);

  return (
    <>
      <h1>Login</h1>
      <Form>
        <TextInput value={userId} placeholder={'ログインID'} onChange={onchangeUserId} />
        <TextInput value={password} placeholder={'パスワード'} onChange={onchangePassword} />
        <Button label={'ログイン'} onclick={() => login({ userId, password })} />
        <Link to="/signup" className="link">
          新規会員登録はこちら
        </Link>
      </Form>
    </>
  );
});
