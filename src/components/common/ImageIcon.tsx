import { VFC, memo } from 'react';
import styled from 'styled-components';
import { imagePath } from '../../variable';

type props = {
  src: string;
  alt: string;
  width: string;
};

export const ImageIcon: VFC<props> = memo((props) => {
  const { src, alt, width } = props;

  return <_Icon src={`${imagePath}${src}`} alt={alt} width={width} />;
});

const _Icon = styled.img`
  display: inline-block;
  vertical-align: top;
`;
