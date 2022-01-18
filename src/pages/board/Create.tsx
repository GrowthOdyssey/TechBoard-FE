import { VFC, memo, useState, ChangeEvent } from 'react';
import styled from 'styled-components';
import { BoardSideBar } from '../../components/board/SideBar';
import { Button } from '../../components/common/Button';
import { Heading } from '../../components/common/Heading';
import { Select } from '../../components/common/Select';
import { TextInput } from '../../components/common/TextInput';
import { Contents } from '../../components/Contents';
import { categories } from '../../mock/boardData';
import { palette } from '../../variable';

export const BoardCreate: VFC = memo(() => {
  const [category, setCategory] = useState('');
  const [title, setTitle] = useState('');

  const onchangeCategory = (e: ChangeEvent<HTMLSelectElement>) => setCategory(e.target.value);
  const onchangeTitle = (e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value);

  const getCategory = () => categories.map((v) => v.name);

  const createThread = () => {
    console.log('create thread');
  };

  return (
    <>
      <BoardSideBar isVisible={'create'} />
      <Contents>
        <Heading size={'2'}>スレッド新規作成</Heading>
        <_Form>
          <Select
            options={getCategory()}
            value={category}
            onChange={onchangeCategory}
            hdg={'カテゴリー'}
          />
          <TextInput
            value={title}
            placeholder={'スレッド名を入力してください'}
            onChange={onchangeTitle}
          />
          <Button label={'作成'} onclick={createThread} />
        </_Form>
      </Contents>
    </>
  );
});

const _Form = styled.div`
  padding: 30px 40px 40px;
  background: #fff;
  border: solid 1px ${palette.border};
  border-radius: 4px;
  text-align: center;
  .textInput {
    width: 100%;
    margin-top: 20px;
  }
  .btn {
    margin-top: 40px;
  }
`;
