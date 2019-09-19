import axios from 'axios';
import { BehaviorSubject } from 'rxjs';

import { User } from '../models/User';

export class UserService {
  private static users = new BehaviorSubject<User[]>([]);

  public static async addUser(user: User) {
    const res = await axios.post<User>('https://reqres.in/api/users', user);
    this.users.next([...this.users.getValue(), res.data]);
    console.log(res.data);
    return res.data;
  }

  public static subscribe(setUsers: (users: User[]) => void) {
    return this.users.subscribe(setUsers);
  }
}
