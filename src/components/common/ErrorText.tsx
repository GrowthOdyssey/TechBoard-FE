import { VFC, memo } from 'react';
import styled from 'styled-components';
import { palette } from '../../variable';

type props = {
  errors: string[];
};

export const ErrorText: VFC<props> = memo((props) => {
  const { errors } = props;

  return (
    <_Container>
      <ul>
        {errors.map((err) => (
          <li key={err}>{err}</li>
        ))}
      </ul>
    </_Container>
  );
});

const _Container = styled.div`
  margin: 20px 0;
  padding: 10px 20px;
  color: ${palette.red};
  border: 1px solid ${palette.red};
  font-weight: bold;
`;
