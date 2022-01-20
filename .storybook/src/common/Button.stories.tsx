import { Button } from '../../../src/components/common/Button';

export default {
  title: 'common/Button',
  component: Button
}

const template = (props) => <Button {...props} />

const props = {
  label: 'ボタン',
  onclick: () => console.log('ok')
}

export const Red = template.bind({});
Red.args = { ...props, color: 'red' }

export const Orange = template.bind({});
Orange.args = { ...props, color: 'orange' }

export const Yellow = template.bind({});
Yellow.args = { ...props, color: 'yellow' };

export const Green = template.bind({});
Green.args = { ...props, color: 'green' };

export const Teal = template.bind({});
Teal.args = { ...props, color: 'teal' };

export const Blue = template.bind({});
Blue.args = { ...props, color: 'blue' };

export const Cyan = template.bind({});
Cyan.args = { ...props, color: 'cyan' };

export const Purple = template.bind({});
Purple.args = { ...props, color: 'purple' };

export const Pink = template.bind({});
Pink.args = { ...props, color: 'pink' };

export const Gray = template.bind({});
Gray.args = { ...props, color: 'gray' };
