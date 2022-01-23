import { useState } from 'react';
import { Textarea } from '../../../src/components/common/Textarea';

export default {
  title: 'common/Textarea',
  component: Textarea
}

const template = (props) => {
  const [value, setValue] = useState('');

  return <Textarea placeholder={props.placeholder} rows={props.rows} value={value} onChange={(e) => setValue(e.target.value)} />
}

export const Sample = template.bind({});
Sample.args = {
  placeholder: '入力してください',
  rows: 5
}
