import React from 'react';
import './list.component.scss';

import { Card } from '../card/card.component';
import { User } from '../../models/User';

export const List = ({ users }: { users: User[] }) => {
  return (
    <div className='List'>
      {users.map(user => (
        <Card user={user} />
      ))}
    </div>
  );
};
