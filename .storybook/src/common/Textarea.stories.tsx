import { useState } from 'react';
import { Textarea } from '../../../src/components/common/TextArea';

export default {
  title: 'common/Textarea',
  component: Textarea
}

const template = (props) => {
  const [value, setValue] = useState('');

  return <Textarea placeholder={props.placeholder} value={value} onChange={(e) => setValue(e.target.value)} />
}

export const Sample = template.bind({});
Sample.args = { placeholder: '入力してください' }
