import { VFC, memo } from 'react';
import styled from 'styled-components';
import { imagePath, palette } from '../../variable';

type props = {
  avatarId: string;
  alt: string;
  width: string;
};

export const AvatarIcon: VFC<props> = memo((props) => {
  const { avatarId, alt, width } = props;

  return <_Icon src={`${imagePath}pokemon/${avatarId}.png`} alt={alt} width={width} />;
});

const _Icon = styled.img`
  display: inline-block;
  background: #fff;
  border: solid 1px ${palette.gray[1]};
  border-radius: 50%;
`;
