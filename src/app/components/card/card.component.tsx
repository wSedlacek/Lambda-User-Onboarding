import React from 'react';
import './card.component.scss';

import { User } from '../../models/User';

export const Card = ({ user }: { user: User }) => {
  return <div className='Card'>{user.name}</div>;
};
