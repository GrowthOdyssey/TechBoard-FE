import { useCallback, useState } from 'react';
import axios from 'axios';
import { apiPath } from '../variable';
import { categoryType } from '../types/board/category';
import { threadListType, threadType } from '../types/board/thread';
import { useCookie } from './useCookie';
import { useHistory } from 'react-router-dom';
import { useToast } from '../providers/ToastProvider';
import { getPaging } from '../utility';

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
        userName: '',
        sessionId: '',
        createdAt: '',
      },
    ],
    createdAt: '',
    updatedAt: '',
  });
  const [threadList, setThreadList] = useState<threadListType[]>([]);
  const [threadLength, setThreadLength] = useState(0);
  const [categories, setCategory] = useState<categoryType[]>([]);
  const { getSessionId } = useCookie();
  const { setToast } = useToast()
  const history = useHistory();

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
      .then(res => {
        const threads = res.data.threads;
        setThreadLength(threads.length)
        const pagingData = getPaging(page, perPage, threads)
        setThreadList(pagingData)
      })
      .catch(() => setThreadList([]))
  }, []);

  /**
   * スレッド作成API
   * @param  {string} accessToken
   * @param  {string} categoryId
   * @param  {string} title
   * @return {threadType}
   */
  const createThread = useCallback((accessToken: string, categoryId: string, threadTitle: string) => {
    axios.post(`${apiPath}/threads`, {categoryId, threadTitle} , {headers: {accessToken}})
      .then(res => {
        history.push(`/board/detail/${res.data.threadId}`)
        setToast({text: 'スレッドを作成しました', status: 'success'})
      })
      .catch(() => setToast({text: 'スレッドを作成できませんでした', status: 'error'}))
  }, []);

  /**
   * スレッド取得API
   * @param  {string} threadId
   * @return {threadType}
   */
  const getThread = useCallback((threadId: string) => {
    axios.get(`${apiPath}/threads/${threadId}`)
      .then(res => setThread(res.data))
      // .catch(() => setThread(null))
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
    .then((res) => {
      thread.comments.push(res.data)
      setThread({...thread})
    })
    .catch(() => setToast({text: 'コメント投稿に失敗しました', status: 'error'}))
  }, [thread]);

  /**
   * カテゴリー一覧取得API
   * @param  {null}
   * @return {categoryList}
   */
  const getCategories = useCallback(() => {
    axios.get(`${apiPath}/threads/categories`)
      .then(res => setCategory(res.data.categories))
      .catch(() => setCategory([]))
  }, []);

  return {
    thread,
    threadList,
    threadLength,
    categories,
    getThreadList,
    createThread,
    getThread,
    createComment,
    getCategories,
  };
};
