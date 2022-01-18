import { VFC, memo } from 'react';
import { Link } from 'react-router-dom';
import { SideBar } from '../SideBar';

type props = {
  isVisible: 'top' | 'create';
};

export const BoardSideBar: VFC<props> = memo((props) => {
  const { isVisible } = props;

  return (
    <SideBar>
      <Link className={isVisible === 'top' ? 'is-active' : ''} to="/board/">
        掲示板TOP
      </Link>
      <Link className={isVisible === 'create' ? 'is-active' : ''} to="/board/create/">
        掲示板作成
      </Link>
      <Link to="#" onClick={() => alert('まだ未実装デース')}>
        掲示板検索
      </Link>
    </SideBar>
  );
});
