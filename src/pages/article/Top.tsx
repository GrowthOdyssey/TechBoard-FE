import { VFC, memo, useEffect } from 'react';
import { ArticleSideBar } from '../../components/article/SideBar';
import { Heading } from '../../components/common/Heading';
import { Loading } from '../../components/common/Loading';
import { Contents } from '../../components/Contents';
import { useArticle } from '../../hooks/useArticle';
import { ArticleList } from './List';

export const ArticleTop: VFC = memo(() => {
  const { articleList, loading, getArticleList } = useArticle();

  useEffect(() => {
    getArticleList('1', '5');
  }, [getArticleList]);

  return (
    <>
      <ArticleSideBar isVisible={'top'} />
      {loading ? (
        <Loading />
      ) : (
        <Contents>
          <Heading size={'2'}>記事TOP</Heading>
          <section>
            <Heading size={'4'}>最新の記事一覧</Heading>
            <ArticleList articleList={articleList} />
          </section>
        </Contents>
      )}
    </>
  );
});
