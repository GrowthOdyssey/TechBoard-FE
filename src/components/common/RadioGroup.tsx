import { VFC, memo } from 'react';
import styled from 'styled-components';
import { Radio } from './Radio';

type props = {
  name: string;
  values: string[];
};

export const RadioGroup: VFC<props> = memo((props) => {
  const { name, values } = props;
  return (
    <_Container>
      {values.map((value, i) => (
        <Radio key={value} id={`${name + (i + 1)}`} name={name} value={value} />
      ))}
    </_Container>
  );
});

const _Container = styled.div`
  > div:not(:first-child) {
    margin-top: 5px;
  }
`;
