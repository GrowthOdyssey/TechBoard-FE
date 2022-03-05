import { memo, VFC } from 'react';
import { Link } from 'react-router-dom';
import { useLoginUser } from '../../providers/LoginUserProvider';
import { SideBar } from '../SideBar';

type props = {
  isVisible?: 'top' | 'create' | 'mypage';
};

export const ArticleSideBar: VFC<props> = memo((props) => {
  const { isVisible } = props;
  const { loginUser } = useLoginUser();

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
      {loginUser.userId && (
        <Link className={isVisible === 'mypage' ? 'is-active' : ''} to="/article/mypage">
          投稿した記事
        </Link>
      )}
    </SideBar>
  );
});
