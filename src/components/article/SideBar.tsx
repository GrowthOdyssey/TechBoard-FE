import { memo, VFC } from 'react';
import { Link } from 'react-router-dom';
import { SideBar } from '../SideBar';

type props = {
  isVisible?: 'top' | 'create';
};

export const ArticleSideBar: VFC<props> = memo((props) => {
  const { isVisible } = props;

  return (
    <SideBar>
      <Link className={isVisible === 'top' ? 'is-active' : ''} to="/article/">
        記事TOP
      </Link>
      <Link className={isVisible === 'create' ? 'is-active' : ''} to="/article/create/">
        記事作成
      </Link>
      <Link to="#" onClick={() => alert('まだ未実装デース')}>
        記事検索
      </Link>
    </SideBar>
  );
});
