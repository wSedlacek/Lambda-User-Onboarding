import React from 'react';
import './card.component.scss';

import { default as MatCard } from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

import { User } from '../../models/User';

export const Card = ({ user }: { user: User }) => {
  const { name, role, email } = user;
  return (
    <MatCard className='Card'>
      <Typography variant='h5' component='h2'>
        {name}
      </Typography>
      <Typography gutterBottom variant='subtitle1' component='h3'>
        {role}
      </Typography>
      <Typography variant='subtitle2' component='h4'>
        {email}
      </Typography>
    </MatCard>
  );
};
