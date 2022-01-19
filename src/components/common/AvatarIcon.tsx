import { VFC, memo } from 'react';

type props = {
  userId: string;
  width: string;
};

export const AvatarIcon: VFC<props> = memo((props) => {
  const { userId, width } = props;

  return <img src="/images/favicon.ico" alt={userId} style={{ width: width }} />;
});
