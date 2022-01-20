import { ArticleCard } from '../../../src/components/article/Card';
import { articles } from '../../../src/mock/articleData';
import StoryRouter from 'storybook-react-router';

export default {
  title: 'article/Card',
  component: ArticleCard,
  decorators: [StoryRouter()]
}

const template = (props) => <ArticleCard data={props} />

export const Sample = template.bind({});
Sample.args = articles[0];
