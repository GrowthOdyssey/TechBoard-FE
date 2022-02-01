import { useCallback, useState } from 'react';
import axios from 'axios';
import { apiPath } from '../variable';
import { m_categories, m_threads } from '../mock/boardData';
import { categoryType } from '../types/board/category';
import { threadType } from '../types/board/thread';

export const useBoard = () => {
  const [threadList, setThreadList] = useState<threadType[]>([]);
  const [categories, setCategory] = useState<categoryType[]>([]);

  /**
   * スレッド一覧取得API
   * @param  {string} categoryId optional
   * @param  {string} page
   * @param  {string} perPage
   * @return {threadList}
   */
  const getThreadList = useCallback((page: string, perPage: string, categoryId?: string) => {
    const categoryQuery = categoryId ? `?categoryId=${categoryId}` : '';

    // prettier-ignore
    axios.post(`${apiPath}/threads${categoryQuery}&page=${page}&perPage=${perPage}`)
      .then(res => setThreadList(res.data))
      .catch(() => setThreadList(m_threads))
  }, []);

  /**
   * スレッド作成API
   */
  const createThread = useCallback(() => {
    //
  }, []);

  /**
   * スレッド取得APi
   */
  const getThread = useCallback(() => {
    //
  }, []);

  /**
   * コメント作成API
   */
  const createComment = useCallback(() => {
    //
  }, []);

  /**
   * カテゴリー一覧取得API
   * @param  {null}
   * @return {categoryList}
   */
  const getCategories = useCallback(() => {
    // prettier-ignore
    axios.post(`${apiPath}/category`)
      .then(res => setCategory(res.data))
      .catch(() => setCategory(m_categories))
  }, []);

  return {
    threadList,
    categories,
    getThreadList,
    createThread,
    getThread,
    createComment,
    getCategories,
  };
};
