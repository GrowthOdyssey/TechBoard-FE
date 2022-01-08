import { VFC, memo } from 'react';
import styled from 'styled-components';
import { variable } from '../../variable';

type props = {
  color?: string;
  label: string;
  isDisabled?: boolean;
  onclick: () => void;
};

export const Button: VFC<props> = memo((props) => {
  const { color, label, isDisabled, onclick } = props;
  return (
    <_Button
      className={color ? `btn btn--${color}` : 'btn'}
      disabled={isDisabled}
      onClick={onclick}
    >
      {label}
    </_Button>
  );
});

Button.defaultProps = {
  color: 'green',
};

const _Button = styled.button`
  width: 300px;
  padding: 12px 16px;
  font-size: 16px;
  color: #fff;
  border-radius: 6px;
  text-align: center;
  transition: opacity 0.1s;
  &:disabled {
    opacity: 0.5;
    pointer-events: none;
  }
  &.btn-- {
    &red {
      background: ${variable.red};
    }
    &orange {
      background: ${variable.orange};
    }
    &yellow {
      background: ${variable.yellow};
    }
    &green {
      background: ${variable.green};
    }
    &teal {
      background: ${variable.teal};
    }
    &blue {
      background: ${variable.blue};
    }
    &cyan {
      background: ${variable.cyan};
    }
    &purple {
      background: ${variable.purple};
    }
    &pink {
      background: ${variable.pink};
    }
    &gray {
      background: ${variable.gray[1]};
    }
  }
`;
