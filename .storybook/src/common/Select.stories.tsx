import { useState } from 'react';
import { Select } from '../../../src/components/common/Select';

export default {
  title: 'common/Select',
  component: Select
}

const template = (props) => {
  const [value, setValue] = useState('');

  return <Select options={props.options} value={value} onChange={(e) => setValue(e.target.value)} hdg={props.hdg} disabled={props.disabled} />
}

export const Sample = template.bind({});
Sample.args = {
  options: ['Red', 'Blue', 'Green'],
  hdg: 'カラー',
}
