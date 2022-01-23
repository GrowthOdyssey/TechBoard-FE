import { VFC, memo, ChangeEvent } from 'react';
import styled from 'styled-components';
import { palette } from '../../variable';

type props = {
  value: string;
  placeholder: string;
  rows: number;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
};

export const Textarea: VFC<props> = memo((props) => {
  const { value, placeholder, rows, onChange } = props;

  return <_TextArea value={value} placeholder={placeholder} rows={rows} onChange={onChange} />;
});

const _TextArea = styled.textarea`
  width: 100%;
  padding: 12px 16px;
  background: #ffffff;
  border: 1px solid ${palette.border};
  outline: none;
  resize: vertical;
  transition: border-color 0.2s;
  &:focus {
    border-color: #3e62ad;
  }
`;
