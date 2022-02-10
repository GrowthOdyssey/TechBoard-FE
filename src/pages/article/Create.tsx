import { VFC, memo, ChangeEvent, useState } from 'react';
import styled from 'styled-components';
import { MarkDownEditor } from '../../components/article/MarkDownEditor';
import { ArticleSideBar } from '../../components/article/SideBar';
import { Heading } from '../../components/common/Heading';
import { TextInput } from '../../components/common/TextInput';
import { Contents } from '../../components/Contents';
import { palette } from '../../variable';

export const ArticleCreate: VFC = memo(() => {
  const [title, setTitle] = useState('');
  const [markdown, setMarkdown] = useState('');
  const onchangeTitle = (e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value);
  const onChangeText = (value: string) => setMarkdown(value);

  return (
    <>
      <ArticleSideBar isVisible={'create'} />
      <Contents>
        <Heading size={'2'}>記事新規作成</Heading>
        <_Form>
          <Heading size={'4'}>Title</Heading>
          <TextInput
            value={title}
            placeholder={'Titleを入力してください'}
            onChange={onchangeTitle}
          />
          <Heading size={'4'}>記事内容</Heading>
          <MarkDownEditor isEdit value={markdown} onChange={onChangeText} />
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
    margin-top: 40px;
  }
`;
