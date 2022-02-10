import { useCallback } from 'react';
import axios from 'axios';
import { apiPath } from '../variable';
import { articles } from '../mock/articleData';
import { useHistory } from 'react-router-dom';
import { useToast } from '../providers/ToastProvider';

export const useArticle = () => {
  const history = useHistory();
  const { setToast } = useToast();
  /**
   * 記事一覧取得API
   */
  const getArticleList = useCallback(() => {
    //
  }, []);

  /**
   * 記事作成API
   * @param  {string} accessToken
   * @param  {string} title
   * @param  {string} description
   * @param  {string} userId
   * @return {articleType}
   */
  const createArticle = useCallback(
    (accessToken: string, articleTitle: string, description: string, userId: string) => {
      axios
        .post(
          `${apiPath}/articles/`,
          { accessToken, articleTitle, description, userId },
          { headers: { accessToken } }
        )
        .then((res) => {
          history.push(`/article/detail/${res.data.articleId}/`);
          setToast({ text: '記事を作成しました', status: 'success' });
        })
        // TODO: エラーハンドリング実装
        .catch(() => {
          history.push(`/article/detail/${articles[0].articleId}/`);
          setToast({ text: '記事を作成しました', status: 'success' });
        });
    },
    []
  );

  /**
   * 記事取得API
   */
  const getArticle = useCallback(() => {
    //
  }, []);

  /**
   * 記事更新API
   */
  const updateArticle = useCallback(() => {
    //
  }, []);

  /**
   * 記事削除API
   */
  const removeArticle = useCallback(() => {
    //
  }, []);

  return { getArticleList, createArticle, getArticle, updateArticle, removeArticle };
};
