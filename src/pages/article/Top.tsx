import { VFC, memo, useEffect } from 'react';
import { useLocation } from 'react-router';
import { ArticleCard } from '../../components/article/Card';
import { ArticleSideBar } from '../../components/article/SideBar';
import { Heading } from '../../components/common/Heading';
import { Loading } from '../../components/common/Loading';
import { Contents } from '../../components/Contents';
import { useArticle } from '../../hooks/useArticle';
import { useLoginUser } from '../../providers/LoginUserProvider';

export const ArticleTop: VFC = memo(() => {
  const { articleList, loading, getArticleList } = useArticle();
  const { loginUser } = useLoginUser();
  const search = useLocation().search;
  const query = new URLSearchParams(search);
  const userId = query.get('userId') || '';

  useEffect(() => {
    getArticleList('1', '5', userId);
  }, [userId]);

  return (
    <>
      <ArticleSideBar isVisible={userId === loginUser.userId ? 'mypage' : 'top'} />
      {loading ? (
        <Loading />
      ) : (
        <Contents>
          <Heading size={'2'}>記事TOP</Heading>
          <section>
            <Heading size={'4'}>{userId === loginUser.userId && loginUser.userName + 'の'}最新の記事一覧</Heading>
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
