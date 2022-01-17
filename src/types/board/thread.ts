export type thread = {
  threadId: string;
  threadTitle: string;
  categoryId: string;
  commentsCount: number;
  comments: [
    {
      commentId: string;
      commentTitle: string;
      userId: string;
      userName: string;
      sessionId: string;
      createdAt: string;
    }
  ];
  createdAt: string;
  updatedAt: string;
};
