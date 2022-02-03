import { VFC, memo, ChangeEvent } from 'react';
import styled from 'styled-components';
import { palette } from '../../variable';

type props = {
  options: string[];
  name: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  hdg: string;
  disabled?: boolean;
};

export const Select: VFC<props> = memo((props) => {
  const { options, name, onChange, hdg, disabled } = props;

  return (
    <_Container>
      <_Heading>{hdg}</_Heading>
      <_Select name={name} onChange={onChange} disabled={disabled}>
        <option>-- 選択してください --</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </_Select>
    </_Container>
  );
});

const _Container = styled.div`
  display: flex;
  align-items: center;
`;

const _Select = styled.select`
  display: block;
  width: 300px;
  padding: 16px;
  font-size: 16px;
  background: #fff;
  border: 1px solid ${palette.gray[1]};
  border-radius: 4px;
`;

const _Heading = styled.div`
  margin-right: 15px;
  font-size: 14px;
  font-weight: bold;
`;
