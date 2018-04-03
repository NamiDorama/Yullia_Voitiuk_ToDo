import { UsersTasks } from '../UsersTasks';
import { Form } from '../Form';
import './aside.scss';

export const Aside = () => (
  <aside>
    <h3>This is aside component</h3>
    <UsersTasks />
    <Form disabled={['email']} />
  </aside>
);
