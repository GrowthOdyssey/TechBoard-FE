import { RadioGroup } from '../../../src/components/common/RadioGroup';

export default {
  title: 'common/RadioGroup',
  component: RadioGroup
}

const template = (props) => <RadioGroup {...props} />

export const Sample = template.bind({});
Sample.args = {
  name: 'color',
  values: ['Red', 'Blue', 'Green']
}
