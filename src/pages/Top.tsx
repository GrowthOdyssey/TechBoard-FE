import { VFC, memo } from 'react';
import { Link } from 'react-router-dom';

export const Top: VFC = memo(() => {
  return (
    <>
      <h1>Top page</h1>
      <div><Link to='/article/'>記事Top</Link></div>
      <div><Link to='/board/'>掲示板Top</Link></div>
    </>
  )
});
