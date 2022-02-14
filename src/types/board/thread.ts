import { commentType } from './comment';

export type threadListType = {
  threadId: string;
  threadTitle: string;
  categoryId: string;
  firstComment: string;
  commentsCount: number;
  createdAt: string;
  updatedAt: string;
};

export type threadType = {
  threadId: string;
  threadTitle: string;
  categoryId: string;
  commentsCount: number;
  comments: commentType[];
  createdAt: string;
  updatedAt: string;
};
