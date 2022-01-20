import { Header } from '../../src/components/Header';
import StoryRouter from 'storybook-react-router';

export default {
  title: 'Header',
  component: Header,
  decorators: [StoryRouter()]
}

const template = (props) => <Header {...props} />

export const Login = template.bind({});
Login.args = {
  loginUser: {
    userId: '1',
    nickname: 'tanaka'
  }
}

export const Logout = template.bind({});
Logout.args = {
  loginUser: {}
}
