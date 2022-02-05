import { VFC, memo, ChangeEvent, useState } from 'react';
import styled from 'styled-components';
import { ArticleSideBar } from '../../components/article/SideBar';
import { Heading } from '../../components/common/Heading';
import { TextInput } from '../../components/common/TextInput';
import { Contents } from '../../components/Contents';
import { palette } from '../../variable';

export const ArticleCreate: VFC = memo(() => {
  const [title, setTitle] = useState('');
  const onchangeTitle = (e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)
  return (
    <>
      <ArticleSideBar isVisible={'create'} />
      <Contents>
        <Heading size={'2'}>記事新規作成</Heading>
        <_Form>
          <TextInput value={title} placeholder={'タイトルを入力してください'} onChange={onchangeTitle} />
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
  text-align: center;
  .textInput {
    width: 100%;
    margin-top: 20px;
  }
  .btn {
    margin-top: 40px;
  }
`;