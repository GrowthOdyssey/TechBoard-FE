import { VFC, memo, ReactNode } from 'react';
import styled from 'styled-components';
import { palette } from '../../variable';

type props = {
  children: ReactNode;
  time?: boolean;
};

export const DateText: VFC<props> = memo((props) => {
  const { children, time } = props;

  const zeroPadding = (num: number) => num.toString().padStart(2, '0');
  const formatYear = (date: Date) => date.getFullYear();
  const formatMonth = (date: Date) => zeroPadding(date.getMonth() + 1);
  const formatDate = (date: Date) => zeroPadding(date.getDate());
  const formatDay = (date: Date) => {
    const day = date.getDay();
    const days = ['日', '月', '火', '水', '木', '金', '土'];

    return days[day];
  };

  const formatTime = (date: Date) => {
    const hours = zeroPadding(date.getHours());
    const minutes = zeroPadding(date.getMinutes());
    const seconds = zeroPadding(date.getSeconds());

    return `${hours}:${minutes}:${seconds}`;
  };

  const getDate = (text: ReactNode) => {
    const date = new Date(text as string);

    return time
      ? `${formatYear(date)}/${formatMonth(date)}/${formatDate(date)}(${formatDay(date)}) ${formatTime(date)}`
      : `${formatYear(date)}/${formatMonth(date)}/${formatDate(date)}(${formatDay(date)})`;
  };

  return <_DateText>{getDate(children)}</_DateText>;
});

const _DateText = styled.span`
  display: inline-block;
  color: ${palette.gray[1]};
  font-size: 14px;
`;
