import { VFC, memo } from 'react';
import { ArticleCard } from '../../components/article/Card';
import { ArticleSideBar } from '../../components/article/SideBar';
import { Heading } from '../../components/common/Heading';
import { Contents } from '../../components/Contents';
import { articles } from '../../mock/articleData';

export const ArticleTop: VFC = memo(() => {
  return (
    <>
      <ArticleSideBar isVisible={'top'} />
      <Contents>
        <Heading size={'2'}>記事TOP</Heading>
        <section>
          <Heading size={'4'}>最新の記事一覧</Heading>
          <ul className="list">
            {articles.map((article) => (
              <ArticleCard key={article.articleId} data={article} />
            ))}
          </ul>
        </section>
      </Contents>
    </>
  );
});
