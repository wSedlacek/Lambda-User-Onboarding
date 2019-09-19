import { dave } from '../../setupTests';

import { UserService } from './user.service';
import { User } from '../models/User';

it('should update subscribers when adding', async () => {
  let data: User[] = [];

  const callback = (user: User[]) => {
    data = user;
  };

  UserService.subscribe(callback);
  await UserService.addUser(dave);
  expect(data[0].name).toBe(dave.name);
  expect(data[0].email).toBe(dave.email);
  expect(data[0].password).toBe(dave.password);
  expect(data[0].role).toBe(dave.role);
  expect(data[0].tos).toBe(dave.tos);
});
