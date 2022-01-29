import { useCallback } from 'react';
import axios from 'axios';

export const useArticle = () => {
  /**
   * 記事一覧取得API
   */
  const getArticleList = useCallback(() => {
    //
  }, []);

  /**
   * 記事作成API
   */
  const createArticle = useCallback(() => {
    //
  }, []);

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
