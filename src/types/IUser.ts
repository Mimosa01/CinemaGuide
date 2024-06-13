export interface User {
  name: string;
  surname: string;
  email: string;
  favorites: string[];
}

export interface UserCreate {
  name: string;
  surname: string;
  email: string;
  password: string;
}

export interface UserLogin {
  email: string;
  password: string;
}