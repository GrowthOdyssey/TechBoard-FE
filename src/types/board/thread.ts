import { commentType } from './comment';

export type threadType = {
  threadId: string;
  threadTitle: string;
  categoryId: string;
  commentsCount: number;
  comments: commentType[];
  createdAt: string;
  updatedAt: string;
};
