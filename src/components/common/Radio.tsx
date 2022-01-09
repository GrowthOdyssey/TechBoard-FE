import { VFC, memo } from 'react';
import styled from 'styled-components';
import { palette } from '../../variable';

type props = {
  id: string;
  name: string;
  value: string;
};

export const Radio: VFC<props> = memo((props) => {
  const { id, name, value } = props;

  return (
    <_Radio>
      <input type="radio" id={id} name={name} value={value} />
      <label htmlFor={id}>{value}</label>
    </_Radio>
  );
});

const _Radio = styled.div`
  display: block;
  position: relative;
  padding-left: 2em;
  [type='radio'] {
    position: absolute;
    width: 1px;
    height: 1px;
    clip: rect(0 0 0 0);
    overflow: hidden;
    white-space: nowrap;
    &:focus + label::before {
      border-color: ${palette.teal};
    }
    &:checked + label {
      &::before {
        border-color: ${palette.blue};
      }
      &::after {
        background: ${palette.blue};
      }
    }
  }
  label {
    cursor: pointer;
    &::before,
    &::after {
      content: '';
      position: absolute;
    }
    &::before {
      left: 0;
      width: 20px;
      height: 20px;
      border: 1px solid ${palette.border};
      border-radius: 50%;
    }
    &::after {
      top: 5px;
      left: 5px;
      width: 12px;
      height: 12px;
      border-radius: 50%;
    }
  }
`;
