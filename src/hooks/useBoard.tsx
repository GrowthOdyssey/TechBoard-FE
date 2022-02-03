import { useCallback, useState } from 'react';
import axios from 'axios';
import { apiPath } from '../variable';
import { m_categories, m_threads } from '../mock/boardData';
import { categoryType } from '../types/board/category';
import { threadType } from '../types/board/thread';
import { useCookie } from './useCookie';

// prettier-ignore
export const useBoard = () => {
  const [thread, setThread] = useState<threadType>({
    threadId: '',
    threadTitle: '',
    categoryId: '',
    commentsCount: 0,
    comments: [
      {
        commentId: '',
        commentTitle: '',
        userId: '',
        userName: '',
        sessionId: '',
        createdAt: '',
      },
    ],
    createdAt: '',
    updatedAt: '',
  });
  const [threadList, setThreadList] = useState<threadType[]>([]);
  const [categories, setCategory] = useState<categoryType[]>([]);
  const { getSessionId } = useCookie();

  /**
   * スレッド一覧取得API
   * @param  {string} categoryId optional
   * @param  {string} page
   * @param  {string} perPage
   * @return {threadList}
   */
  const getThreadList = useCallback((page: string, perPage: string, categoryId?: string) => {
    const categoryQuery = categoryId ? `categoryId=${categoryId}` : '';
    axios.get(`${apiPath}/threads?${categoryQuery}&page=${page}&perPage=${perPage}`)
      .then(res => setThreadList(res.data.threads))
      .catch(() => setThreadList(m_threads))
  }, []);

  /**
   * スレッド作成API
   */
  const createThread = useCallback(() => {
    //
  }, []);

  /**
   * スレッド取得API
   * @param  {string} threadId
   * @return {threadType}
   */
  const getThread = useCallback((threadId: string) => {
    axios.get(`${apiPath}/threads/${threadId}`)
      .then(res => setThread(res.data))
      .catch(() => setThread(m_threads[0]))
  }, []);

  /**
   * コメント作成API
   * @param  {string} threadId
   * @param  {string} userId optional
   * @param  {string} sessionId
   * @param  {string} comment
   * @return {threadType}
   */
  const createComment = useCallback((threadId: string, comment: string, userId?: string) => {
    const postData = {
      userId: userId ? userId : '',
      sessionId: userId ? userId : getSessionId(),
      commentTitle: comment,
    };
    axios.post(`${apiPath}/threads/${threadId}/comments`, postData)
    .then(res => {
      // API動作後
      // thread.comments.push(res.data)
      // setThread({...thread})

      // デバッグ用
      thread.comments.push({
        commentId: `${thread.comments.length + 1}`,
        commentTitle: comment,
        userId: '',
        userName: '',
        sessionId: postData.sessionId,
        createdAt: `${new Date()}`
      })
      setThread({...thread})
    })
    .catch(() => {
      thread.comments.push({
        commentId: `${thread.comments.length + 1}`,
        commentTitle: comment,
        userId: '',
        userName: '',
        sessionId: postData.sessionId,
        createdAt: `${new Date()}`
      })
      setThread({...thread})
    })
  }, [thread]);

  /**
   * カテゴリー一覧取得API
   * @param  {null}
   * @return {categoryList}
   */
  const getCategories = useCallback(() => {
    axios.get(`${apiPath}/category`)
      .then(res => setCategory(res.data))
      .catch(() => setCategory(m_categories))
  }, []);

  return {
    thread,
    threadList,
    categories,
    getThreadList,
    createThread,
    getThread,
    createComment,
    getCategories,
  };
};
