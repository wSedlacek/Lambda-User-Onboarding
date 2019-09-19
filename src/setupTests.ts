import '@testing-library/jest-dom/extend-expect';

import { User, Role } from './app/models/User';

export const dave: User = {
  name: 'Dave',
  email: 'test@testing.com',
  password: 'password',
  role: Role.Admin,
  tos: true,
};
