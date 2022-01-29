import { useCallback } from 'react';
import axios from 'axios';

export const useBoard = () => {
  /**
   * スレッド一覧取得API
   */
  const getThreadList = useCallback(() => {
    //
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
   */
  const getCategories = useCallback(() => {
    //
  }, []);

  return { getThreadList, createThread, getThread, createComment, getCategories };
};
