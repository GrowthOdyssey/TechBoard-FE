import { ArticleCreate } from '../pages/article/Create';
import { ArticleDetail } from '../pages/article/Detail';
import { ArticleEdit } from '../pages/article/Edit';
import { ArticleMyPage } from '../pages/article/MyPage';
import { ArticleTop } from '../pages/article/Top';
import { BoardCategory } from '../pages/board/Category';
import { BoardCreate } from '../pages/board/Create';
import { BoardDetail } from '../pages/board/Detail';
import { BoardTop } from '../pages/board/Top';
import { Login } from '../pages/Login';
import { Signup } from '../pages/Signup';
import { Top } from '../pages/Top';

export const pageRoutes = [
  {
    path: '/',
    exact: true,
    children: <Top />,
  },
  {
    path: '/login',
    exact: false,
    children: <Login />,
  },
  {
    path: '/signup',
    exact: false,
    children: <Signup />,
  },
  {
    path: '/article/',
    exact: true,
    sideBar: true,
    children: <ArticleTop />,
  },
  {
    path: '/article/create',
    exact: false,
    sideBar: true,
    children: <ArticleCreate />,
  },
  {
    path: '/article/detail/:id',
    exact: false,
    sideBar: true,
    children: <ArticleDetail />,
  },
  {
    path: '/article/edit/:id',
    exact: false,
    sideBar: true,
    children: <ArticleEdit />,
  },
  {
    path: '/article/mypage',
    exact: false,
    sideBar: true,
    children: <ArticleMyPage />,
  },
  {
    path: '/board/page=:page',
    exact: true,
    sideBar: true,
    children: <BoardTop />,
  },
  {
    path: '/board/:categoryName/page=:page',
    exact: false,
    sideBar: true,
    children: <BoardCategory />,
  },
  {
    path: '/board/create',
    exact: false,
    sideBar: true,
    children: <BoardCreate />,
  },
  {
    path: '/board/detail/:id',
    exact: false,
    sideBar: true,
    children: <BoardDetail />,
  },
];
