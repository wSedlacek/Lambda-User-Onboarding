import axios from 'axios';
import { BehaviorSubject } from 'rxjs';

import { User } from '../models/User';

export class UserService {
  private static users = new BehaviorSubject<User[]>([]);

  public static async addUser(newUser: User) {
    if (this.users.getValue().filter(user => user.email === newUser.email).length !== 0)
      throw new Error(`A user with email ${newUser.email} already exist.`);

    const res = await axios.post<User>('https://reqres.in/api/users', newUser);
    this.users.next([...this.users.getValue(), res.data]);
    console.log(res.data);
    return res.data;
  }

  public static subscribe(setUsers: (users: User[]) => void) {
    return this.users.subscribe(setUsers);
  }
}
