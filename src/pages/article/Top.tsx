import { VFC, memo } from 'react';
import { Link } from 'react-router-dom';

export const ArticleTop: VFC = memo(() => {
  return (
    <>
      <h1>article top</h1>
      <Link to="create">記事作成</Link>
    </>
  );
});
