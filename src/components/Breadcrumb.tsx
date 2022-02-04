import { VFC, memo, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { palette } from '../variable';

type pathType = {
  path: string;
  label: string;
};

export const Breadcrumb: VFC = memo(() => {
  const { pathname } = useLocation();
  const [items, setItems] = useState<pathType[]>([]);

  const getChildPaths = (path: string): pathType[] => {
    const childPaths: pathType[] = [];
    if (path.includes('login')) {
      childPaths.push({
        path: '/login',
        label: 'ログイン',
      });
    } else if (path.includes('signup')) {
      childPaths.push({
        path: '/signup',
        label: '会員登録',
      });
    } else if (path.includes('article')) {
      childPaths.push({
        path: '/article',
        label: 'Article',
      });
      if (path.includes('create')) {
        childPaths.push({
          path: '/article/create/',
          label: '記事作成',
        });
      } else if (path.includes('detail')) {
        childPaths.push({
          path: '/article/detail/',
          label: '記事',
        });
      }
    } else if (path.includes('board')) {
      childPaths.push({
        path: '/board',
        label: 'Board',
      });
      if (path.includes('category')) {
        childPaths.push({
          path: '/board/category/',
          label: 'カテゴリースレッド一覧',
        });
      } else if (path.includes('create')) {
        childPaths.push({
          path: '/board/create/',
          label: 'スレッド作成',
        });
      } else if (path.includes('detail')) {
        childPaths.push({
          path: '/board/detail/',
          label: 'スレッド',
        });
      }
    }

    return childPaths;
  };

  const getItems = (path: string): pathType[] => {
    if (path === '/') return [];

    const paths: pathType[] = [];
    const topPath: pathType = {
      path: '/',
      label: 'TOP',
    };
    paths.push(topPath);

    const childPaths = getChildPaths(path);
    paths.push(...childPaths);

    return paths;
  };

  useEffect(() => {
    const pathItems = getItems(pathname);
    setItems(pathItems);
  }, [pathname]);

  return (
    <_List>
      {items.map((item) => (
        <Link to={item.path} key={item.path}>
          {item.label}
        </Link>
      ))}
    </_List>
  );
});

const _List = styled.div`
  display: flex;
  gap: 20px;
  min-height: 26px;
  margin-bottom: 30px;
  > a {
    display: inline-block;
    color: ${palette.blue};
    &:last-of-type {
      color: ${palette.black};
      pointer-events: none;
    }
    &:not(:last-of-type) {
      position: relative;
      &::after {
        content: '';
        position: absolute;
        top: 50%;
        right: -14px;
        transform: translateY(-50%);
        width: 6px;
        height: 10px;
        background-image: url('data:image/svg+xml;charset=utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%226.121%22%20height%3D%229.414%22%20viewBox%3D%220%200%206.121%209.414%22%3E%0A%20%20%3Cpath%20id%3D%22arrow%22%20d%3D%22M1761.165%2C888.891l4%2C4-4%2C4%22%20transform%3D%22translate(-1760.458%20-888.184)%22%20fill%3D%22none%22%20stroke%3D%22%23101010%22%20stroke-width%3D%222%22%2F%3E%0A%3C%2Fsvg%3E%0A');
        background-size: 100% auto;
        background-repeat: no-repeat;
        pointer-events: none;
      }
    }
  }
`;
