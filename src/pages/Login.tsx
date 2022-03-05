import { VFC, memo, useState, ChangeEvent, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button } from '../components/common/Button';
import { Form } from '../components/common/Form';
import { Heading } from '../components/common/Heading';
import { TextInput } from '../components/common/TextInput';
import { useRedirect } from '../hooks/useRedirect';
import { useUser } from '../hooks/useUser';
import { useLoginUser } from '../providers/LoginUserProvider';
import { ErrorText } from '../components/common/ErrorText';

export const Login: VFC = memo(() => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const { status, errorText, login } = useUser();
  const { loginUser } = useLoginUser();
  const { toTop } = useRedirect();

  useEffect(() => {
    if (loginUser.userId) {
      toTop();
    }
  }, []);

  const onchangeUserId = (e: ChangeEvent<HTMLInputElement>) => setUserId(e.target.value);
  const onchangePassword = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);

  return (
    <>
      <_ErrorContainer>{errorText.length ? <ErrorText errors={errorText} /> : ''}</_ErrorContainer>
      <Form>
        <Heading size={'2'} isCenter>
          Sign In
        </Heading>
        <TextInput value={userId} placeholder={'ログインID'} onChange={onchangeUserId} />
        <TextInput value={password} placeholder={'パスワード'} onChange={onchangePassword} />
        <Button label={'ログイン'} onclick={() => login({ userId, password })} isStatus={status} />
        <Link to="/signup" className="link">
          新規会員登録はこちら
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
