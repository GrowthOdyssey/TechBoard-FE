import { BoardCard } from '../../../src/components/board/Card';
import { threads } from '../../../src/mock/boardData';
import StoryRouter from 'storybook-react-router';

export default {
  title: 'board/Card',
  component: BoardCard,
  decorators: [StoryRouter()]
}

const template = (props) => <BoardCard data={props} />

export const Sample = template.bind({});
Sample.args = threads[0];
