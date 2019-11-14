import React from 'react';
import './app.component.scss';

import { UserService } from './services/user.service';
import { Form } from './components/form/form.component';
import { List } from './components/list/list.component';
import { User } from './models/User';

export const App = () => {
  const [users, setUsers] = React.useState<User[]>([]);

  React.useEffect(() => {
    const subscription = UserService.subscribe(setUsers);
    return () => subscription.unsubscribe();
  }, []);

  return (
    <div className='App'>
      <Form />
      <List users={users} />
    </div>
  );
};
