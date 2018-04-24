import { UsersTasks } from '../UsersTasks';
import { Form } from '../../components/Form/index';
import { TaskListTab } from '../../pages/TaskListTab/index';
import './aside.scss';

export const Aside = () => (
  <aside>
    <h3>This is aside component</h3>
    <UsersTasks />
    <Form disabled={['email']} />
    <TaskListTab />
  </aside>
);
