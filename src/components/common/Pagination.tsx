import { VFC, memo, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { perPage, paginationLength, palette } from '../../variable';

type props = {
  path: string;
  page: string;
  length: number;
};

const pagePrefix = 'page=';

export const Pagination: VFC<props> = memo((props) => {
  const { path, page, length } = props;
  const [pagination, setPagination] = useState(0);

  useEffect(() => {
    setPagination(Math.ceil(length / perPage));
  }, [path, length]);

  return (
    <_Container>
      <ul>
        {pagination > paginationLength && (
          <li className={`arr top ${page === '1' ? 'is-disabled' : ''}`}>
            <Link to={`${path}/${pagePrefix}1`} />
          </li>
        )}
        <li className={`arr prev ${page === '1' ? 'is-disabled' : ''}`}>
          <Link to={`${path}/${pagePrefix}${Number(page) - 1}`} />
        </li>

        {pagination <= paginationLength
          ? [...Array(pagination)].map((v, i) => (
              <li key={i} className={i === Number(page) - 1 ? 'is-active' : ''}>
                <Link to={`${path}/${pagePrefix}${i + 1}`}>{i + 1}</Link>
              </li>
            ))
          : Number(page) - 2 > 0 && pagination - Number(page) >= 2
          ? [...Array(paginationLength)].map((v, i) => (
              <li key={i} className={i === 2 ? 'is-active' : ''}>
                <Link to={`${path}/${pagePrefix}${Number(page) + (i - 2)}`}>
                  {Number(page) + (i - 2)}
                </Link>
              </li>
            ))
          : Number(page) - 2 <= 0
          ? [...Array(paginationLength)].map((v, i) => (
              <li key={i} className={i === Number(page) - 1 ? 'is-active' : ''}>
                <Link to={`${path}/${pagePrefix}${i + 1}`}>{i + 1}</Link>
              </li>
            ))
          : [...Array(paginationLength)].map((v, i) => (
              <li key={i} className={Number(page) === pagination + (i - 4) ? 'is-active' : ''}>
                <Link to={`${path}/${pagePrefix}${pagination + (i - 4)}`}>
                  {pagination + (i - 4)}
                </Link>
              </li>
            ))}

        <li className={`arr next ${Number(page) === pagination ? 'is-disabled' : ''}`}>
          <Link to={`${path}/${pagePrefix}${Number(page) + 1}`} />
        </li>
        {pagination > paginationLength && (
          <li className={`arr last ${Number(page) === pagination ? 'is-disabled' : ''}`}>
            <Link to={`${path}/${pagePrefix}${pagination}`} />
          </li>
        )}
      </ul>
    </_Container>
  );
});

const _Container = styled.div`
  margin-top: 30px;
  > ul {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0 20px;
    > li {
      &:not(.arr) {
        &.is-active {
          > a {
            color: #fff;
            background: #48bb78;
            pointer-events: none;
          }
        }
        > a {
          display: block;
          width: 30px;
          line-height: 1;
          padding: 7px 0;
          font-size: 14px;
          color: ${palette.green};
          background: #fff;
          border: 1px solid ${palette.green};
          border-radius: 50%;
          text-align: center;
          cursor: pointer;
        }
      }
      &.arr {
        &.is-disabled {
          opacity: 0.5;
          pointer-events: none;
        }
        > a {
          display: block;
          width: 25px;
          height: 25px;
          background-size: 100% auto;
          background-repeat: no-repeat;
        }
        &.top a {
          background-image: url('data:image/svg+xml;charset=utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20enable-background%3D%22new%200%200%2024%2024%22%20height%3D%2224px%22%20viewBox%3D%220%200%2024%2024%22%20width%3D%2224px%22%20fill%3D%22%23000000%22%3E%3Cg%3E%3Crect%20fill%3D%22none%22%20height%3D%2224%22%20width%3D%2224%22%2F%3E%3C%2Fg%3E%3Cg%3E%3Cg%3E%3Cpolygon%20points%3D%2217.59%2C18%2019%2C16.59%2014.42%2C12%2019%2C7.41%2017.59%2C6%2011.59%2C12%22%2F%3E%3Cpolygon%20points%3D%2211%2C18%2012.41%2C16.59%207.83%2C12%2012.41%2C7.41%2011%2C6%205%2C12%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E');
        }
        &.prev a {
          background-image: url('data:image/svg+xml;charset=utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20height%3D%2224px%22%20viewBox%3D%220%200%2024%2024%22%20width%3D%2224px%22%20fill%3D%22%23000000%22%3E%3Cpath%20d%3D%22M0%200h24v24H0V0z%22%20fill%3D%22none%22%2F%3E%3Cpath%20d%3D%22M15.41%207.41L14%206l-6%206%206%206%201.41-1.41L10.83%2012l4.58-4.59z%22%2F%3E%3C%2Fsvg%3E');
        }
        &.next a {
          background-image: url('data:image/svg+xml;charset=utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20height%3D%2224px%22%20viewBox%3D%220%200%2024%2024%22%20width%3D%2224px%22%20fill%3D%22%23000000%22%3E%3Cpath%20d%3D%22M0%200h24v24H0V0z%22%20fill%3D%22none%22%2F%3E%3Cpath%20d%3D%22M15.41%207.41L14%206l-6%206%206%206%201.41-1.41L10.83%2012l4.58-4.59z%22%2F%3E%3C%2Fsvg%3E');
          transform: rotateY(180deg);
        }
        &.last a {
          background-image: url('data:image/svg+xml;charset=utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20enable-background%3D%22new%200%200%2024%2024%22%20height%3D%2224px%22%20viewBox%3D%220%200%2024%2024%22%20width%3D%2224px%22%20fill%3D%22%23000000%22%3E%3Cg%3E%3Crect%20fill%3D%22none%22%20height%3D%2224%22%20width%3D%2224%22%2F%3E%3C%2Fg%3E%3Cg%3E%3Cg%3E%3Cpolygon%20points%3D%2217.59%2C18%2019%2C16.59%2014.42%2C12%2019%2C7.41%2017.59%2C6%2011.59%2C12%22%2F%3E%3Cpolygon%20points%3D%2211%2C18%2012.41%2C16.59%207.83%2C12%2012.41%2C7.41%2011%2C6%205%2C12%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E');
          transform: rotateY(180deg);
        }
      }
    }
  }
`;
