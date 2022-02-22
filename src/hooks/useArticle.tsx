import { useCallback, useState } from 'react';
import axios from 'axios';
import { apiPath } from '../variable';
import { m_articles, m_article } from '../mock/articleData';
import { useHistory } from 'react-router-dom';
import { useToast } from '../providers/ToastProvider';
import { articleDetailType } from '../types/article/articleDetailType';
import { articleType } from '../types/article/articleType';

// prettier-ignore
export const useArticle = () => {
  const history = useHistory();
  const { setToast } = useToast();
  const [article, setArticle] = useState<articleDetailType>({
    articleId: '',
    articleTitle: '',
    contents: '',
    avatarId: '',
    userId: '',
    userName: '',
    createdAt: '',
    updatedAt: '',
  });
  const [articleList, setArticleList] = useState<articleType[]>([]);

  /**
   * 記事一覧取得API
   * @param  {string} page
   * @param  {string} perPage
   * @param  {string} userId
   * @return {articleList}
   */
  const getArticleList = useCallback((page: string, perPage: string, userId?: string) => {
    const userQuery = userId ? `&userId=${userId}` : '';
    axios
      .get(`${apiPath}/articles?page=${page}&perPage=${perPage}${userQuery}`)
      .then(res => setArticleList(m_articles)) // [WIP] レスポンスが設定されていないため一時的に入れ替え(m_articles⇄res.data.articles)
      // TODO: エラーハンドリング実装
      .catch(() => setArticleList(m_articles))
  }, []);

  /**
   * 記事作成API
   * @param  {string} accessToken
   * @param  {string} title
   * @param  {string} contents
   * @return {articleId}
   */
  const createArticle = useCallback((accessToken: string, articleTitle: string, contents: string) => {
    axios
      .post(`${apiPath}/articles/`, { articleTitle, contents }, { headers: { accessToken } })
      .then((res) => {
        history.push(`/article/detail/${res.data.articleId}/`);
        setToast({ text: '記事を作成しました', status: 'success' });
      })
      // TODO: エラーハンドリング実装
      .catch(() => {
        history.push(`/article/detail/${articleList[0].articleId}/`);
        setToast({ text: '記事を作成しました', status: 'success' });
      });
  }, []);

  /**
   * 記事取得API
   * @param  {string} articleId
   * @return {articleDetailType}
   */
  const getArticle = useCallback((articleId: string) => {
    axios
      .get(`${apiPath}/articles/${articleId}`)
      .then((res) => setArticle(res.data))
      .catch(() => setArticle(m_article));
  }, []);

  /**
   * 記事更新API
   */
  const updateArticle = useCallback((accessToken: string, articleId: string, articleTitle: string, contents: string) => {
    axios
      .put(`${apiPath}/articles/${articleId}`, { articleTitle, contents }, { headers: { accessToken } })
      .then((res) => {
        history.push(`/article/detail/${res.data.articleId}/`);
        setToast({ text: '記事を更新しました', status: 'success' });
      })
      // TODO: エラーハンドリング実装
      .catch(() => {
        history.push(`/article/detail/${articleId}/`);
        setToast({ text: '記事を更新しました', status: 'success' });
      });
  }, []);

  /**
   * 記事削除API
   */
  const removeArticle = useCallback(() => {
    //
  }, []);

  return { article, articleList, getArticleList, createArticle, getArticle, updateArticle, removeArticle };
};
