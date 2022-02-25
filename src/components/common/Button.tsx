import { VFC, memo } from 'react';
import styled from 'styled-components';
import { palette } from '../../variable';

type statusType = 'useable' | 'loading' | 'complete';

type props = {
  label: string;
  onclick?: () => void;
  color?: string;
  isDisabled?: boolean;
  isStatus?: statusType;
};

export const Button: VFC<props> = memo((props) => {
  const { label, onclick, color, isDisabled, isStatus } = props;

  const getClassName = (color?: string, status?: statusType) => {
    let className = `btn btn--${color} `;
    if (status !== 'useable') className += status;

    return className;
  };

  return (
    <_Button className={getClassName(color, isStatus)} disabled={isDisabled} onClick={onclick}>
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
  &.loading,
  &.complete {
    position: relative;
    text-indent: 100vw;
    white-space: nowrap;
    overflow-x: hidden;
    pointer-events: none;
    &::after {
      content: '';
      display: inline-block;
      position: absolute;
      top: 50%;
      left: 0;
      right: 0;
      transform: translateY(-50%);
      margin: auto;
    }
  }
  &.loading {
    opacity: 0.5;
    &::after {
      width: 40px;
      height: 40px;
      background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAAyCAYAAACqECmXAAAABHNCSVQICAgIfAhkiAAABntJREFUeF7t3M1uW0UYxvE5dbpApSK+AsIV0CUtSDhLJCrBHVB2CBCJBBK7OjskKjUSIHaUO+iiSCxxJWhZljtIr8BBpWLRuMNMGoM5OR+e7znjfzYgwpk57+997NfHsU8l+EEAAQQQQACBwQtUg6+AAhBAAAEEEEBAMNAJAQIIIIAAAgUIMNALaCIlIIAAAgggwEAnAwgggAACCBQgwEAvoImUgAACCCCAAAOdDCCAAAIIIFCAAAO9gCZSAgIIIIAAAgx0MoAAAggggEABAgz0AppICQgggAACCDDQyQACCCCAAAIFCDDQC2giJSCAAAIIIMBAJwMIIIAAAggUIMBAL6CJlIAAAggggAADnQwggAACCCBQgAADvYAmUgICCCCAAAIMdDKAAAIIIIBAAQIM9AKaSAkIIIAAAggw0MkAAggggAACBQgw0AfUxDe+n++MFuKmOuUrqnFXpBCP1L8/WozEwe8fjY8GVAqnWoAAeSygiYWVsOmZ3IiBvndXbm9dfHpTFTvRw1APQTUMZyfPLh0cvl8dDyHT176bf3DhubgtKrF97nylOH5+Qew/+Hj84xBqKaEfLs4l1E8eXRKQ37FkMq+e2Pajc6DfeTB/T1TVZ0KqIfhikMyEkAc3ro7VP7t/Uh1bP6svf/57Z7FY/KL++07DGR+NRqPdr955qfXqNoc63vpmPlH+uobuHyl2f/20uTc51KFPvoR+LJtgY+pav97bZt+u4Jiu5yOPOdThI4+51JE6k035Ms3V6hqmx/rKZOo6XDPZOtDPQO82PxHI3a6hnurYpnP94t6TmXpR8nbbE5q+Ur/17su7HY2MblA/lze/nR+pRr3aP8/F0W+fjF+r/3/0498haNVLn9lwyePK8Ehah2sec6lDn0cJ/agNc+NsuBr4fHzYZsNHJnOowzWTrQP9h4fzWSWaB6EU8v6HV8eTtgGT6tj6+Xx+78mkqqreK1sp5e6t65dn9eNzqGPtV57Lk2+4Ss+hDn16JfRjyWxj6lq/3ttm364Xgqbr+chjDnX4yGMudaTOZFO+THO1uobpsb4ymboOH5lsv0J/eKwuXlt+1N9sb1zbHrf9+k6iY88N9J/+2lMF3u56QtO/U4Xuq6v0w/r/l0Md6pXnWjX8N8/FvrpK/18tOdRxGtYC+rF0tjF1rV/vbbNvV/5N1/ORxxzq8JHHXOpIncmmfJnmanUN02N9ZTJ1HT4yaTXQ1RX6n+oK/fyHs85EuhoS8tiYAz1WHT7CSj+6B2FfL00f6G3rhR7oMerwkce+QRijDh9PnrnUsc5AD5lJX48P2zp8ZTJ1HT4yyVvu+gqdt9wnbVdxpm9/dV0Nur7l7HIuLsc21WSznmv9+jxs9u3qiel6vt7eNN23qwZblxL6sepiY+rDwNfjY7mOaR2+Mpm6jtOB7vhn4o3/UJya5ve/vn65caDl8mEygw98PFZvt+/Ug5lLHfq8+j6AM4R+nF6ZvfgGiPcPIHXV77Jv20C0qcM1j7nU4ZrHnOpwOReXx6TPXC3XSpXJplpszsWlDtdM9n5tTVZiT22ibmRSvaI/DKcOmK77tbUUx9abor8mdLJYqA/4nf+UuPrb+eOt0WjS97W11HWs/Qq052trqevQvSmhH6sPWFNT1/qXT9ym+3Zd4eonLZP1fOQxhzp85DGXOlJnsm0YmuRqdY1UmUxdh2smN+bGMhe3nk7VAFefehevSyn+UIXPnp1cmg7pxjKVlIf6hVU9dPrvY7Kq9oZ0Y5mh96NrQPb9Tt80Yuj16xvLkMe+Tg/n92Qyr17Z9mMjBnperbI/m7PbGk71jX6WL0zUDWf0rV+n3PrV3pUj7QTIo50bR4UT2PRMMtDDZYuVEUAAAQQQiCbAQI9GzUYIIIAAAgiEE2Cgh7NlZQQQQAABBKIJMNCjUbMRAggggAAC4QQY6OFsWRkBBBBAAIFoAgz0aNRshAACCCCAQDgBBno4W1ZGAAEEEEAgmgADPRo1GyGAAAIIIBBOgIEezpaVEUAAAQQQiCbAQI9GzUYIIIAAAgiEE2Cgh7NlZQQQQAABBKIJMNCjUbMRAggggAAC4QQY6OFsWRkBBBBAAIFoAgz0aNRshAACCCCAQDgBBno4W1ZGAAEEEEAgmgADPRo1GyGAAAIIIBBOgIEezpaVEUAAAQQQiCbAQI9GzUYIIIAAAgiEE2Cgh7NlZQQQQAABBKIJ/ANUj56clz7oMAAAAABJRU5ErkJggg==');
      background-size: 400px auto;
      background-repeat: no-repeat;
      animation: loading 0.5s steps(10) infinite;
      @keyframes loading {
        to {
          background-position-x: -400px;
        }
      }
    }
  }
  &.complete {
    &::after {
      width: 30px;
      height: 30px;
      background-image: url('data:image/svg+xml;charset=utf8,%3Csvg%20class%3D%22w-6%20h-6%22%20fill%3D%22none%22%20stroke%3D%22%23fff%22%20viewBox%3D%220%200%2024%2024%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%222%22%20d%3D%22M5%2013l4%204L19%207%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E');
    }
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
