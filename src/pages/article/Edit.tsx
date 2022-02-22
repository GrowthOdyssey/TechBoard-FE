import { VFC, memo, useEffect, ChangeEvent, useCallback, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import styled from 'styled-components';
import { MarkDownEditor } from '../../components/article/MarkDownEditor';
import { ArticleSideBar } from '../../components/article/SideBar';
import { Button } from '../../components/common/Button';
import { Heading } from '../../components/common/Heading';
import { Loading } from '../../components/common/Loading';
import { TextInput } from '../../components/common/TextInput';
import { Contents } from '../../components/Contents';
import { useArticle } from '../../hooks/useArticle';
import { useLoginUser } from '../../providers/LoginUserProvider';
import { useToast } from '../../providers/ToastProvider';
import { palette } from '../../variable';

export const ArticleEdit: VFC = memo(() => {
  const { id } = useParams<{ id: string }>();
  const { loginUser } = useLoginUser();
  const { article, loading, getArticle, updateArticle } = useArticle();
  const { setToast } = useToast();
  const history = useHistory();
  const [title, setTitle] = useState(article.articleId);
  const [content, setContent] = useState(article.contents);

  useEffect(() => {
    getArticle(id);
    if (article.userId && loginUser.userId !== article.userId) {
      history.push(`/article/detail/${id}`);
      setToast({ text: '編集権限がありません', status: 'error' });
    }
    setTitle(article.articleTitle);
    setContent(article.contents);
  }, [article, id]);

  const onchangeTitle = useCallback((e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value), []);
  const onchangeContent = useCallback((value: string) => setContent(value), []);
  const onclickUpdateArticle = () => {
    updateArticle(loginUser.accessToken, id, title, content);
  };

  return (
    <>
      <ArticleSideBar />
      {loading ? (
        <Loading />
      ) : (
        <Contents>
          <Heading size={'2'}>記事編集</Heading>
          <_Form>
            <Heading size={'4'}>Title</Heading>
            <TextInput value={title} placeholder={'Titleを入力してください'} onChange={onchangeTitle} />
            <Heading size={'4'}>記事内容</Heading>
            <MarkDownEditor isEdit value={content} onChange={onchangeContent} />
            <Button label={'更新'} onclick={onclickUpdateArticle} isDisabled={loginUser.userId ? false : true} />
          </_Form>
        </Contents>
      )}
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
