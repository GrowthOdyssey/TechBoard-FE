import { VFC, memo, useState, ChangeEvent } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/common/Button';
import { Form } from '../components/common/Form';
import { TextInput } from '../components/common/TextInput';
import { useSignup } from '../hooks/useSignup';

export const Signup: VFC = memo(() => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [nickname, setNickname] = useState('');
  const { signup } = useSignup();

  const onchangeUserId = (e: ChangeEvent<HTMLInputElement>) => setUserId(e.target.value);
  const onchangePassword = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);
  const onchangeNickname = (e: ChangeEvent<HTMLInputElement>) => setNickname(e.target.value);

  return (
    <>
      <h1>Signup</h1>
      <Form>
        <TextInput value={userId} placeholder={'ログインID'} onChange={onchangeUserId} />
        <TextInput value={password} placeholder={'パスワード'} onChange={onchangePassword} />
        <TextInput value={nickname} placeholder={'ニックネーム'} onChange={onchangeNickname} />
        <Button label={'新規登録'} onclick={() => signup(userId, password, nickname)} />
        <Link to="/login" className="link">
          すでに登録している方はこちら
        </Link>
      </Form>
    </>
  );
});
