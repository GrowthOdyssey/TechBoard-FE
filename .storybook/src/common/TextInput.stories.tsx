import { useState } from 'react';
import { TextInput } from '../../../src/components/common/TextInput';

export default {
  title: 'common/TextInput',
  component: TextInput
}

const template = (props) => {
  const [value, setValue] = useState('');

  return <TextInput placeholder={props.placeholder} value={value} onChange={(e) => setValue(e.target.value)} />
}

export const Sample = template.bind({});
Sample.args = { placeholder: '入力してください' }
