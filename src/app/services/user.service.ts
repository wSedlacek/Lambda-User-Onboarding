import axios from 'axios';
import { BehaviorSubject } from 'rxjs';

import { User } from '../models/User';

//Being able to `POST` data is a key skill of any developer, no matter your skill level.
// - Craft a `POST` request using `axios` that sends your form data to the following endpoint: _https://reqres.in/api/users_
// - Verify using a `console.log()` that you are receiving a successful response back

export class UserService {
  private static users = new BehaviorSubject<User[]>([]);

  public static addUser(user: User) {
    this.users.next([...this.users.getValue(), user]);
  }

  public static subscribe(setUsers: (users: User[]) => void) {
    return this.users.subscribe(setUsers);
  }
}
