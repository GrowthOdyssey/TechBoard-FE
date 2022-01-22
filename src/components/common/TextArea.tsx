import { VFC, memo, ChangeEvent } from 'react';
import styled from 'styled-components';
import { palette } from '../../variable';

type props = {
  value: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
};

export const Textarea: VFC<props> = memo((props) => {
  const { value, placeholder, onChange } = props;
  return <_TextArea value={value} placeholder={placeholder} onChange={onChange} />;
});

const _TextArea = styled.textarea`
  width: 100%;
  padding: 12px 16px;
  background: #ffffff;
  border-bottom: 1px solid ${palette.gray[1]};
  outline: none;
  resize: vertical;
`;
