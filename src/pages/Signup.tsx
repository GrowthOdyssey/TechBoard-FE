import { VFC, memo, useState, ChangeEvent, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button } from '../components/common/Button';
import { ErrorText } from '../components/common/ErrorText';
import { Form } from '../components/common/Form';
import { Heading } from '../components/common/Heading';
import { TextInput } from '../components/common/TextInput';
import { useRedirect } from '../hooks/useRedirect';
import { useUser } from '../hooks/useUser';
import { useLoginUser } from '../providers/LoginUserProvider';

export const Signup: VFC = memo(() => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState('');
  const { status, errorText, signup } = useUser();
  const { loginUser } = useLoginUser();
  const { toTop } = useRedirect();

  useEffect(() => {
    if (loginUser.userId) {
      toTop();
    }
  }, []);

  const onchangeUserId = (e: ChangeEvent<HTMLInputElement>) => setUserId(e.target.value);
  const onchangePassword = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);
  const onchangeNickname = (e: ChangeEvent<HTMLInputElement>) => setUserName(e.target.value);

  return (
    <>
      <_ErrorContainer>{errorText.length ? <ErrorText errors={errorText} /> : ''}</_ErrorContainer>
      <Form>
        <Heading size={'2'} isCenter>
          Sign Up
        </Heading>
        <TextInput value={userId} placeholder={'ログインID'} onChange={onchangeUserId} />
        <TextInput value={password} placeholder={'パスワード'} onChange={onchangePassword} />
        <TextInput value={userName} placeholder={'ニックネーム'} onChange={onchangeNickname} />
        <Button label={'新規登録'} onclick={() => signup({ userId, password, userName })} isStatus={status} />
        <Link to="/login" className="link">
          すでに登録している方はこちら
        </Link>
      </Form>
    </>
  );
});

const _ErrorContainer = styled.div`
  width: 450px;
  margin-left: auto;
  margin-right: auto;
`;
