import { dave } from '../../setupTests';

import { UserService } from './user.service';
import { User } from '../models/User';

it('should update subscribers when adding', () => {
  let data: User[] = [];

  const callback = (user: User[]) => {
    data = user;
  };

  UserService.subscribe(callback);
  UserService.addUser(dave).then(() => expect(data[0]).toBe(dave));
});
