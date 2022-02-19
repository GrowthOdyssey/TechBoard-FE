import { VFC, memo } from 'react';
import { Link } from 'react-router-dom';
import { SideBar } from '../SideBar';

type props = {
  isVisible?: 'top' | 'create';
};

export const BoardSideBar: VFC<props> = memo((props) => {
  const { isVisible } = props;

  return (
    <SideBar>
      <Link className={isVisible === 'top' ? 'is-active' : ''} to="/board/page=1">
        掲示板TOP
      </Link>
      <Link className={isVisible === 'create' ? 'is-active' : ''} to="/board/create/">
        スレッド作成
      </Link>
      <Link to="#" onClick={() => alert('まだ未実装デース')}>
        スレッド検索
      </Link>
    </SideBar>
  );
});
