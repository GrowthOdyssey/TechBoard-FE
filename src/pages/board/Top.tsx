import { VFC, memo } from 'react';
import { Link } from 'react-router-dom';

export const BoardTop: VFC = memo((props) => {
  return (
    <>
    <h1>board top</h1>
    <div><Link to='create'>掲示板作成</Link></div>
    </>
  );
});
