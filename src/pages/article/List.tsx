import { memo, VFC } from 'react';
import { ArticleCard } from '../../components/article/Card';
import { articleType } from '../../types/article/articleType';

type props = {
  articleList: articleType[];
};

export const ArticleList: VFC<props> = memo((props) => {
  const { articleList } = props;

  return (
    <ul className="list">
      {articleList.map((article) => (
        <ArticleCard key={article.articleId} data={article} />
      ))}
    </ul>
  );
});
