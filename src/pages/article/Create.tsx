import { VFC, memo, ChangeEvent, useState } from 'react';
import styled from 'styled-components';
import { MarkDownEditor } from '../../components/article/MarkDownEditor';
import { ArticleSideBar } from '../../components/article/SideBar';
import { Button } from '../../components/common/Button';
import { Heading } from '../../components/common/Heading';
import { TextInput } from '../../components/common/TextInput';
import { Contents } from '../../components/Contents';
import { useArticle } from '../../hooks/useArticle';
import { useLoginUser } from '../../providers/LoginUserProvider';
import { palette } from '../../variable';

export const ArticleCreate: VFC = memo(() => {
  const [title, setTitle] = useState('');
  const [markdown, setMarkdown] = useState('');
  const { loginUser } = useLoginUser();
  const { createArticle } = useArticle();

  const onchangeTitle = (e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value);
  const onchangeText = (value: string) => setMarkdown(value);
  const onclickCreateArticle = () => {
    createArticle(loginUser.accessToken, title, markdown);
  };

  return (
    <>
      <ArticleSideBar isVisible={'create'} />
      <Contents>
        <Heading size={'2'}>記事新規作成</Heading>
        {!loginUser.userId && <p>記事を作成するにはログインして下さい。</p>}
        <_Form>
          <Heading size={'4'}>Title</Heading>
          <TextInput value={title} placeholder={'Titleを入力してください'} onChange={onchangeTitle} />
          <Heading size={'4'}>記事内容</Heading>
          <MarkDownEditor isEdit value={markdown} onChange={onchangeText} />
          <Button label={'作成'} onclick={onclickCreateArticle} isDisabled={loginUser.userId ? false : true} />
        </_Form>
      </Contents>
    </>
  );
});

const _Form = styled.div`
  margin-top: 20px;
  padding: 30px 40px 40px;
  background: #fff;
  border: solid 1px ${palette.border};
  border-radius: 4px;
  .textInput {
    width: 100%;
    margin-bottom: 20px;
  }
  .btn {
    display: block;
    margin: 40px auto 0;
  }
`;
