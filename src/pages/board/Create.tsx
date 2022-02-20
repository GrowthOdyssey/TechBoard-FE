import { VFC, memo, useState, ChangeEvent, useEffect } from 'react';
import styled from 'styled-components';
import { BoardSideBar } from '../../components/board/SideBar';
import { Button } from '../../components/common/Button';
import { Heading } from '../../components/common/Heading';
import { Select } from '../../components/common/Select';
import { TextInput } from '../../components/common/TextInput';
import { Contents } from '../../components/Contents';
import { useBoard } from '../../hooks/useBoard';
import { useLoginUser } from '../../providers/LoginUserProvider';
import { categoryType } from '../../types/board/category';
import { palette } from '../../variable';

export const BoardCreate: VFC = memo(() => {
  const { loginUser } = useLoginUser();
  const [category, setCategory] = useState<categoryType>({} as categoryType);
  const [title, setTitle] = useState('');
  const { categories, createThread, getCategories } = useBoard();

  useEffect(() => {
    getCategories();
  }, []);

  const onchangeCategory = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedIndex = e.target.selectedIndex;
    selectedIndex === 0 ? setCategory({} as categoryType) : setCategory(categories[selectedIndex - 1]);
  };
  const onchangeTitle = (e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value);
  const getCategory = () => categories.map((v) => v.categoryName);
  const onclickCreateThread = () => {
    if (category.categoryId && title !== '') {
      createThread(loginUser.accessToken, category.categoryId, title);
    } else {
      if (!category.categoryId) alert('カテゴリーを選択して下さい');
      else if (title === '') alert('スレッドタイトルを入力して下さい。');
    }
  };

  return (
    <>
      <BoardSideBar isVisible={'create'} />
      <Contents>
        <Heading size={'2'}>スレッド新規作成</Heading>
        {!loginUser.userId && <p>スレッドを作成するにはログインして下さい。</p>}
        <_Form className={!loginUser.userId ? 'is-disabled' : ''}>
          <Select options={getCategory()} name={'category'} onChange={onchangeCategory} hdg={'カテゴリー'} />
          <TextInput value={title} placeholder={'スレッド名を入力してください'} onChange={onchangeTitle} />
          <Button label={'作成'} onclick={onclickCreateThread} isDisabled={loginUser.userId ? false : true} />
        </_Form>
      </Contents>
    </>
  );
});

const _Form = styled.div`
  margin-top: 20px;
  padding: 30px 40px 40px;
  background: #fff;
  border: solid 1px ${palette.border};
  border-radius: 4px;
  text-align: center;
  &.is-disabled {
    opacity: 0.7;
    pointer-events: none;
  }
  .textInput {
    width: 100%;
    margin-top: 20px;
  }
  .btn {
    margin-top: 40px;
  }
`;
