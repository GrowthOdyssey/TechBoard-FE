import { VFC, memo, useEffect } from 'react';
import { ArticleCard } from '../../components/article/Card';
import { ArticleSideBar } from '../../components/article/SideBar';
import { Heading } from '../../components/common/Heading';
import { Loading } from '../../components/common/Loading';
import { Contents } from '../../components/Contents';
import { useArticle } from '../../hooks/useArticle';
import { useRedirect } from '../../hooks/useRedirect';
import { useLoginUser } from '../../providers/LoginUserProvider';

export const ArticleMyPage: VFC = memo(() => {
  const { articleList, loading, getArticleList } = useArticle();
  const { loginUser } = useLoginUser();
  const { toLogin } = useRedirect();

  useEffect(() => {
    if (!loginUser.userId) {
      toLogin();
    }
    getArticleList('1', '20', loginUser.userId);
  }, [loginUser]);

  return (
    <>
      <ArticleSideBar isVisible={loginUser.userId ? 'mypage' : 'top'} />
      {loading ? (
        <Loading />
      ) : (
        <Contents>
          <Heading size={'2'}>{loginUser.userName + 'の投稿した記事一覧'}</Heading>
          <section>
            <Heading size={'4'}>最新の記事一覧</Heading>
            <ul className="list">
              {articleList.map((article) => (
                <ArticleCard key={article.articleId} data={article} />
              ))}
            </ul>
          </section>
        </Contents>
      )}
    </>
  );
});
