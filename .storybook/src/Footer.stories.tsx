import { Footer } from '../../src/components/Footer';
import StoryRouter from 'storybook-react-router';

export default {
  title: 'Footer',
  component: Footer,
  decorators: [StoryRouter()]
}

const template = () => <Footer />

export const Default = template.bind({});
