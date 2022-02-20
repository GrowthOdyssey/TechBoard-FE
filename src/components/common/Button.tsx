import { VFC, memo } from 'react';
import styled from 'styled-components';
import { palette } from '../../variable';

type props = {
  color?: string;
  label: string;
  isDisabled?: boolean;
  onclick?: () => void;
};

export const Button: VFC<props> = memo((props) => {
  const { color, label, isDisabled, onclick } = props;
  return (
    <_Button className={color ? `btn btn--${color}` : 'btn'} disabled={isDisabled} onClick={onclick}>
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
      background: ${palette.red};
    }
    &orange {
      background: ${palette.orange};
    }
    &yellow {
      background: ${palette.yellow};
    }
    &green {
      background: ${palette.green};
    }
    &teal {
      background: ${palette.teal};
    }
    &blue {
      background: ${palette.blue};
    }
    &cyan {
      background: ${palette.cyan};
    }
    &purple {
      background: ${palette.purple};
    }
    &pink {
      background: ${palette.pink};
    }
    &gray {
      background: ${palette.gray[1]};
    }
  }
`;
