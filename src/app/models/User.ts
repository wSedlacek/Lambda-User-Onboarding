export enum Role {
  Admin = 'Admin',
  User = 'User',
}

export interface User {
  name: string;
  role: Role;
  email: string;
  password: string;
  tos: boolean;
}
